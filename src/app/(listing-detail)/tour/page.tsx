"use client";

import { useState, useEffect } from "react";
import { Squares2X2Icon, CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PHOTOS } from "../tours/constant";
import { Route } from "next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { api, getBaseUrl } from "@/utils/api";
import { useListingImages } from "@/hooks/useListingImages";

// Tabs: detail-heavy content only
const TABS = ["Itinerary", "Inclusions", "Exclusions", "General Inclusions"];

const GENERAL_INCLUSIONS = [
  "24/7 customer support during the tour",
  "All applicable taxes and service charges",
  "Bottled water during transportation",
  "Welcome dinner on arrival night",
  "Free Wi-Fi at all accommodations",
];

const getImageUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${getBaseUrl()}${url}`;
};

const ListingStayDetailPage = () => {
  const [tourData, setTourData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [, setListingImages] = useListingImages();

  const [activeTab, setActiveTab] = useState("Itinerary");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const thisPathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("s");

  useEffect(() => {
    const fetchTour = async () => {
      setLoading(true);
      try {
        if (slug) {
          const res = await api.get<{ tour: any }>(`/tours/${slug}`);
          if (res.success && res.data?.tour) {
            const tour = res.data.tour;
            setTourData(tour);
            const backendImgs = (tour.galleryImgs || []).map((img: string, idx: number) => ({
              id: idx,
              url: getImageUrl(img),
            }));
            setListingImages(backendImgs.length > 0 ? backendImgs : PHOTOS.map((img, idx) => ({ id: idx, url: img })));
          } else {
            setTourData(null);
          }
        } else {
          setTourData(null);
        }
      } catch (err) {
        console.error("Error fetching tour:", err);
        setTourData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [slug, setListingImages]);

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE&s=${slug}` as Route);
  };

  const [form, setForm] = useState({
    name: "", country: "", adults: "1", children: "0", infants: "0",
    tourType: "Individual", nationality: "", contact: "", email: "",
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-white">
        <div className="relative flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fa7301]"></div>
          <p className="mt-4 text-neutral-500 font-medium">Loading tour details...</p>
        </div>
      </div>
    );
  }

  if (!tourData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white px-4">
        <div className="text-center max-w-md">
          <svg className="w-16 h-16 text-neutral-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Tour Unavailable</h2>
          <p className="text-neutral-500 mb-6">
            We are unable to load the tour details at this time. Please make sure the backend server is running and the tour exists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#fa7301] hover:bg-[#e66a01] text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const tour = tourData;

  const hasDetailedPricing = !!(
    tour.priceData &&
    tour.priceData.length > 0 &&
    tour.priceData.some(
      (p: any) =>
        (p.p2 && p.p2.toString().trim() !== "") ||
        (p.p4 && p.p4.toString().trim() !== "") ||
        (p.p6 && p.p6.toString().trim() !== "")
    )
  );

  const priceData = tour.priceData && tour.priceData.length > 0 ? tour.priceData : [
    { type: "Standard", p2: tour.price, p4: tour.price, p6: tour.price },
    { type: "Superior", p2: tour.price, p4: tour.price, p6: tour.price },
    { type: "Luxury", p2: tour.price, p4: tour.price, p6: tour.price }
  ];

  const highlights = tour.highlights && tour.highlights.length > 0 ? tour.highlights : [];
  const inclusions = tour.inclusions && tour.inclusions.length > 0 ? tour.inclusions : [];
  const exclusions = tour.exclusions && tour.exclusions.length > 0 ? tour.exclusions : [];
  const itinerary = tour.itinerary && tour.itinerary.length > 0 ? tour.itinerary : [];

  const backendImgs = tour.galleryImgs ? tour.galleryImgs.map(getImageUrl) : [];
  const displayPhotos = backendImgs.length >= 5 ? backendImgs : [...backendImgs, ...PHOTOS.slice(backendImgs.length)];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Itinerary":
        return (
          <div className="space-y-6">
            {itinerary.map((item: any, i: number, arr: any[]) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#0b2e4e] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-neutral-200 mt-2" />}
                </div>
                <div className="pb-6">
                  <p className="text-xs text-[#fa7301] font-semibold uppercase tracking-wide">{item.day}</p>
                  <h4 className="font-semibold text-neutral-800 mt-0.5">{item.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Inclusions":
        return (
          <ul className="space-y-3">
            {inclusions.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-neutral-700">
                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case "Exclusions":
        return (
          <ul className="space-y-3">
            {exclusions.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-neutral-700">
                <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      case "General Inclusions":
        return (
          <ul className="space-y-3">
            {GENERAL_INCLUSIONS.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-700">
                <CheckCircleIcon className="w-5 h-5 text-[#0b2e4e] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  const renderInquiryForm = () => (
    <div className="bg-white border border-neutral-200 rounded-3xl shadow-xl p-6 space-y-4">
      <h3 className="text-xl font-bold text-[#0b2e4e]">Inquiry Form</h3>
      <p className="text-sm text-neutral-500">Fill in the details and we'll get back to you shortly.</p>
      <div className="space-y-3">
        {[
          { label: "Name", key: "name", type: "text", placeholder: "Your full name" },
          { label: "Country of Residence", key: "country", type: "text", placeholder: "e.g. United Kingdom" },
          { label: "Nationality", key: "nationality", type: "text", placeholder: "e.g. British" },
          { label: "Contact No.", key: "contact", type: "tel", placeholder: "+1 234 567 890" },
          { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
        ].map(({ label, key, type, placeholder }) => (
          <div key={key}>
            <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2e4e]"
              value={(form as any)[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </div>
        ))}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Adults", key: "adults", tooltip: null },
            { label: "Children", key: "children", tooltip: "Age below 11.99 years" },
            { label: "Infants", key: "infants", tooltip: "Age below 1.99 years" },
          ].map(({ label, key, tooltip }) => (
            <div key={key}>
              <div className="flex items-center gap-1 mb-1">
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide">{label}</label>
                {tooltip && (
                  <div className="relative group">
                    <QuestionMarkCircleIcon className="w-3.5 h-3.5 text-neutral-400 cursor-help flex-shrink-0" />
                    <div className={`absolute bottom-full mb-2 w-36 sm:w-40 bg-[#0b2e4e] text-white text-xs rounded-lg px-2.5 py-1.5 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 text-center ${
                      key === "infants" ? "right-0 translate-x-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2" : "left-1/2 -translate-x-1/2"
                    }`}>
                      {tooltip}
                      <div className={`absolute top-full border-4 border-transparent border-t-[#0b2e4e] ${
                        key === "infants" ? "right-3 translate-x-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2" : "left-1/2 -translate-x-1/2"
                      }`} />
                    </div>
                  </div>
                )}
              </div>
              <input type="number" min="0" className="w-full border border-neutral-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2e4e]" value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
            </div>
          ))}
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              if (date) { const end = new Date(date); end.setDate(end.getDate() + 7); setEndDate(end); }
            }}
            minDate={new Date()}
            placeholderText="Select start date"
            className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2e4e] cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">End Date</label>
          <div className="w-full border border-neutral-200 bg-neutral-50 rounded-xl px-4 py-2.5 text-sm text-neutral-600">
            {endDate ? endDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : <span className="text-neutral-400">Auto-set based on package</span>}
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">Tour Type</label>
          <select className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2e4e] bg-white" value={form.tourType} onChange={(e) => setForm({ ...form, tourType: e.target.value })}>
            <option value="Individual">Individual</option>
            <option value="Group">Group</option>
          </select>
        </div>
      </div>
      <button className="w-full bg-[#fa7301] hover:bg-[#e66a01] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
        Send Inquiry
      </button>
    </div>
  );

  return (
    <div className="nc-ListingStayDetailPage bg-white pt-8 pb-24 lg:pb-32">
      <div className="container">

        {/* ── PHOTO GALLERY ── */}
        <header className="rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer" onClick={handleOpenModalImageGallery}>
              <Image fill className="object-cover rounded-md sm:rounded-xl" src={displayPhotos[0]} alt="Tour main photo" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            {displayPhotos.filter((_: string, i: number) => i >= 1 && i < 5).map((item: string, index: number) => (
              <div key={index} className={`relative rounded-md sm:rounded-xl overflow-hidden ${index >= 3 ? "hidden sm:block" : ""}`}>
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5">
                  <Image fill className="object-cover rounded-md sm:rounded-xl" src={item || ""} alt="" sizes="400px" />
                </div>
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={handleOpenModalImageGallery} />
              </div>
            ))}
            <button className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 z-10" onClick={handleOpenModalImageGallery}>
              <Squares2X2Icon className="w-5 h-5" />
              <span className="ml-2 text-neutral-800 text-sm font-medium">Show all photos</span>
            </button>
          </div>
        </header>

        {/* ── TITLE ── */}
        <div className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">{tour.title}</h1>
          <p className="mt-2 text-neutral-500 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {tour.address || "Sri Lanka"} · {tour.duration}
          </p>
        </div>

        {/* ── PRICING NOTE ── */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#fa7301]/30 bg-[#fa7301]/5 px-4 py-1.5">
          <svg className="w-3.5 h-3.5 flex-shrink-0 text-[#fa7301]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold text-[#fa7301] tracking-wide">{tour.price || "USD 0"}/-</span>
            <span className="text-xs font-semibold text-[#fa7301] tracking-wide uppercase">per person</span>
          </div>
          <span className="text-neutral-300 text-xs">·</span>
          <span className="text-xs text-neutral-500 font-medium">Based on twin / double sharing</span>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="mt-10 flex flex-col lg:flex-row gap-10 xl:gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 xl:w-2/3 space-y-12">

            {/* ── OVERVIEW (always visible) ── */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Overview</h2>
              <div className="w-12 h-1 bg-[#fa7301] mb-6 rounded-full" />
              {tour.overview.split("\n\n").map((para: string, idx: number) => (
                <p key={idx} className={`text-neutral-600 leading-relaxed ${idx > 0 ? "mt-4" : ""}`}>
                  {para}
                </p>
              ))}
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Duration", value: tour.duration },
                  { label: "Destination", value: tour.address?.split(",")[0]?.trim() || "Sri Lanka" },
                  { label: "Group Size", value: `Up to ${tour.maxGuests || 12} pax` },
                  { label: "Difficulty", value: "Easy to Moderate" },
                  { label: "Start / End", value: "Colombo / Negombo" },
                  { label: "Best Season", value: "Nov – Apr" },
                ].map((item) => (
                  <div key={item.label} className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide">{item.label}</p>
                    <p className="font-semibold mt-1 text-neutral-800 text-sm">{item.value}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* ── DURATION (always visible) ── */}
            {/* <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Tour Duration</h2>
              <div className="w-12 h-1 bg-[#fa7301] mb-6 rounded-full" />
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 max-w-[400px]">
                {[
                  { label: "Total Duration", value: tour.duration },
                  { label: "Travel Days", value: `${itinerary.length} Days` },
                  // { label: "Leisure Days", value: "1 Day" },
                  // { label: "Estimated km", value: "~1,200 km" },
                  // { label: "First Day Activity", value: itinerary[0]?.title || "Arrival" },
                  // { label: "Last Day Activity", value: itinerary[itinerary.length - 1]?.title || "Departure" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-neutral-100 pb-3">
                    <span className="text-neutral-500 text-sm">{item.label}</span>
                    <span className="font-medium text-neutral-800 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* ── HIGHLIGHTS (always visible) ── */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Tour Highlights</h2>
              <div className="w-12 h-1 bg-[#fa7301] mb-6 rounded-full" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-[#fa7301] flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── TOUR PRICE ── */}
            {/* <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Tour Price</h2>
              <div className="w-12 h-1 bg-[#fa7301] mb-6 rounded-full" />
              {hasDetailedPricing ? (
                <div className="space-y-4">
                  <div className="overflow-x-auto rounded-xl border border-neutral-200">
                    <table className="min-w-full text-sm">
                      <thead className="bg-[#0b2e4e] text-white">
                        <tr>
                          <th className="px-5 py-3 text-left">Package Type</th>
                          <th className="px-5 py-3 text-left">2 Pax</th>
                          <th className="px-5 py-3 text-left">4 Pax</th>
                          <th className="px-5 py-3 text-left">6+ Pax</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {priceData.map((row: any, i: number) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-neutral-50" : "bg-white"}>
                            <td className="px-5 py-3 font-medium text-neutral-800">{row.type}</td>
                            <td className="px-5 py-3 text-neutral-600">{row.p2 || "-"}</td>
                            <td className="px-5 py-3 text-neutral-600">{row.p4 || "-"}</td>
                            <td className="px-5 py-3 text-neutral-600">{row.p6 || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-neutral-500 italic">Prices are per person, based on twin/double sharing. Subject to availability.</p>
                  <p className="text-xs text-neutral-400">* Single supplement available on request. Child rates apply for ages 2–11.</p>
                </div>
              ) : (
                <div className="bg-neutral-50 dark:bg-neutral-800/40 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 inline-flex flex-col min-w-[280px]">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">Tour Price</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-extrabold text-[#fa7301]">{tour.price || "$0"}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">/ per person</span>
                  </div>
                  <div className="w-full h-px bg-neutral-200 dark:bg-neutral-700 my-4" />
                  <ul className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fa7301]" />
                      <span>Based on twin/double sharing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fa7301]" />
                      <span>Subject to availability</span>
                    </li>
                  </ul>
                </div>
              )}
            </div> */}

            {/* ── TABBED SECTIONS (detail-heavy) ── */}
            <div>
              {/* Tab Nav */}
              <div className="flex gap-1 flex-wrap border-b border-neutral-200 mb-8">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === tab
                      ? "border-[#fa7301] text-[#fa7301]"
                      : "border-transparent text-neutral-500 hover:text-neutral-800"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="min-h-[280px]">
                {renderTabContent()}
              </div>
            </div>

          </div>

          {/* ── RIGHT: INQUIRY FORM (sticky) ── */}
          <div className="w-full lg:w-2/5 xl:w-1/3">
            <div className="sticky top-28">
              {renderInquiryForm()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListingStayDetailPage;
