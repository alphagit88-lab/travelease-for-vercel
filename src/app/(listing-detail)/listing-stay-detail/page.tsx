"use client";

import React, { FC, useState } from "react";
import { Squares2X2Icon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { PHOTOS } from "./constant";
import { Route } from "next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface ListingStayDetailPageProps {}

// Tabs: detail-heavy content only
const TABS = ["Itinerary", "Price", "Inclusions", "Exclusions", "General Inclusions"];

const INCLUSIONS = [
  "Accommodation in selected hotels",
  "Daily breakfast and dinner (MAP)",
  "Air-conditioned private vehicle with driver",
  "Professional English-speaking guide",
  "Entrance fees to all listed sites",
  "Airport transfers (arrival & departure)",
];

const EXCLUSIONS = [
  "International flights",
  "Travel insurance",
  "Personal expenses and tips",
  "Lunch and beverages",
  "Optional activities not in itinerary",
  "Visa fees (if applicable)",
];

const HIGHLIGHTS = [
  "Explore UNESCO World Heritage sites",
  "Safari experience in Yala National Park",
  "Scenic train ride through tea country",
  "Sunrise climb at Sigiriya Rock Fortress",
  "Whale watching off the southern coast",
  "Traditional cooking class with local family",
];

const GENERAL_INCLUSIONS = [
  "24/7 customer support during the tour",
  "All applicable taxes and service charges",
  "Bottled water during transportation",
  "Welcome dinner on arrival night",
  "Free Wi-Fi at all accommodations",
];

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({}) => {
  const [activeTab, setActiveTab] = useState("Itinerary");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const thisPathname = usePathname();
  const router = useRouter();

  const handleOpenModalImageGallery = () => {
    router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route);
  };

  const [form, setForm] = useState({
    name: "", country: "", adults: "1", children: "0", infants: "0",
    tourType: "Individual", nationality: "", contact: "", email: "",
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case "Itinerary":
        return (
          <div className="space-y-6">
            {[
              { day: "Day 1", title: "Arrival in Colombo", desc: "Meet and greet at Bandaranaike International Airport. Transfer to your hotel. Evening city tour of Colombo." },
              { day: "Day 2", title: "Colombo → Sigiriya", desc: "Drive to Sigiriya. Afternoon climb of the Lion Rock Fortress. Overnight in Sigiriya." },
              { day: "Day 3", title: "Sigiriya → Kandy", desc: "Morning visit to Polonnaruwa ancient city. Drive through Matale to Kandy. Evening Temple of the Tooth visit." },
              { day: "Day 4", title: "Kandy → Nuwara Eliya", desc: "Scenic drive through tea country. Visit a working tea factory. Explore Nuwara Eliya town." },
              { day: "Day 5", title: "Nuwara Eliya → Ella", desc: "Famous train ride to Ella. Hike Little Adam's Peak. Enjoy local cuisine at a viewpoint café." },
              { day: "Day 6", title: "Ella → Yala", desc: "Drive to Yala National Park. Afternoon safari experience. Overnight in a jungle lodge." },
              { day: "Day 7", title: "Yala → Mirissa", desc: "Morning drive to the south coast. Afternoon whale watching. Sunset beach walk in Mirissa." },
              { day: "Day 8", title: "Departure", desc: "Morning leisure. Transfer to Colombo airport for your international departure flight." },
            ].map((item, i, arr) => (
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
      case "Price":
        return (
          <div className="space-y-4">
            <p className="text-sm text-neutral-500">Prices are per person, based on twin/double sharing. Subject to availability.</p>
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
                  {[
                    { type: "Standard", p2: "$1,290", p4: "$990", p6: "$850" },
                    { type: "Superior", p2: "$1,590", p4: "$1,290", p6: "$1,100" },
                    { type: "Luxury", p2: "$2,490", p4: "$1,990", p6: "$1,750" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-neutral-50" : "bg-white"}>
                      <td className="px-5 py-3 font-medium text-neutral-800">{row.type}</td>
                      <td className="px-5 py-3 text-neutral-600">{row.p2}</td>
                      <td className="px-5 py-3 text-neutral-600">{row.p4}</td>
                      <td className="px-5 py-3 text-neutral-600">{row.p6}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-400">* Single supplement available on request. Child rates apply for ages 2–11.</p>
          </div>
        );
      case "Inclusions":
        return (
          <ul className="space-y-3">
            {INCLUSIONS.map((item, i) => (
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
            {EXCLUSIONS.map((item, i) => (
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
            { label: "Adults", key: "adults" },
            { label: "Children", key: "children" },
            { label: "Infants", key: "infants" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">{label}</label>
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
            {endDate ? endDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : <span className="text-neutral-400">Auto-set based on package (8 days)</span>}
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
              <Image fill className="object-cover rounded-md sm:rounded-xl" src={PHOTOS[0]} alt="Tour main photo" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
              <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
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
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">8 Days Classic Sri Lanka Tour</h1>
          <p className="mt-2 text-neutral-500 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Sri Lanka, South Asia · 8 Days / 7 Nights
          </p>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="mt-10 flex flex-col lg:flex-row gap-10 xl:gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 xl:w-2/3 space-y-12">

            {/* ── OVERVIEW (always visible) ── */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Overview</h2>
              <div className="w-12 h-1 bg-[#fa7301] mb-6 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Embark on a journey through the jewel of the Indian Ocean. This carefully curated Sri Lanka tour takes you through ancient kingdoms, lush highlands, golden beaches, and vibrant wildlife. Experience the perfect blend of culture, nature, and adventure in one unforgettable holiday.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                From the mystical rock fortress of Sigiriya to the misty tea plantations of Nuwara Eliya and the sun-soaked shores of Mirissa, every day brings a new chapter to your Sri Lanka story.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Duration", value: "8 Days / 7 Nights" },
                  { label: "Destination", value: "Sri Lanka" },
                  { label: "Group Size", value: "Up to 12 pax" },
                  { label: "Difficulty", value: "Easy to Moderate" },
                  { label: "Start / End", value: "Colombo" },
                  { label: "Best Season", value: "Nov – Apr" },
                ].map((item) => (
                  <div key={item.label} className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide">{item.label}</p>
                    <p className="font-semibold mt-1 text-neutral-800 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── HIGHLIGHTS (always visible) ── */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Tour Highlights</h2>
              <div className="w-12 h-1 bg-[#fa7301] mb-6 rounded-full" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HIGHLIGHTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-[#fa7301] flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── DURATION (always visible) ── */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-800 mb-4">Tour Duration</h2>
              <div className="w-12 h-1 bg-[#fa7301] mb-6 rounded-full" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Total Duration", value: "8 Days / 7 Nights" },
                  { label: "Travel Days", value: "7 Days" },
                  { label: "Leisure Days", value: "1 Day" },
                  { label: "Estimated km", value: "~1,200 km" },
                  { label: "First Day Activity", value: "Colombo Arrival" },
                  { label: "Last Day Activity", value: "Airport Departure" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-neutral-100 pb-3">
                    <span className="text-neutral-500 text-sm">{item.label}</span>
                    <span className="font-medium text-neutral-800 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── TABBED SECTIONS (detail-heavy) ── */}
            <div>
              {/* Tab Nav */}
              <div className="flex gap-1 flex-wrap border-b border-neutral-200 mb-8">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                      activeTab === tab
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
