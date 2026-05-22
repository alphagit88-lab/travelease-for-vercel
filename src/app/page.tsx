import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import { TaxonomyType } from "@/data/types";
import { Route } from "@/routers/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionMoodboardContent from "@/components/SectionMoodboardContent";
import SectionPopularTours from "@/components/SectionPopularTours";
import SectionGallery from "@/components/SectionGallery";
import SectionReviews from "@/components/SectionReviews";
import SectionWhyChooseUs from "@/components/SectionWhyChooseUs";
import SectionSriLankaMap from "@/components/SectionSriLankaMap";
import SectionScrollReveal from "@/components/SectionScrollReveal";
import FeaturedToursSection from "@/components/FeaturedToursSection";

const LISTING_STAY_MAP_ROUTE = "/listing-stay-map" as Route<string>;

const TOUR_TYPES: TaxonomyType[] = [
  {
    id: "1",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Adventure",
    taxonomy: "category",
    count: 2400,
    thumbnail:
      "https://images.pexels.com/photos/6995583/pexels-photo-6995583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Beach Relaxation",
    taxonomy: "category",
    count: 2200,
    thumbnail:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Culture Heritage",
    taxonomy: "category",
    count: 1980,
    thumbnail:
      "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Food Taste",
    taxonomy: "category",
    count: 1540,
    thumbnail:
      "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Wildlife Nature",
    taxonomy: "category",
    count: 2600,
    thumbnail:
      "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Young Trendy",
    taxonomy: "category",
    count: 1780,
    thumbnail:
      "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Experience",
    taxonomy: "category",
    count: 1850,
    thumbnail:
      "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "8",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Family",
    taxonomy: "category",
    count: 2020,
    thumbnail:
      "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "9",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Honeymoon",
    taxonomy: "category",
    count: 1940,
    thumbnail:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "10",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Pilgrimage",
    taxonomy: "category",
    count: 1210,
    thumbnail:
      "https://images.pexels.com/photos/415571/pexels-photo-415571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const SERVICES_CATEGORIES: TaxonomyType[] = [
  {
    id: "s1",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Tour packages",
    taxonomy: "category",
    count: 0,
    thumbnail: "https://images.pexels.com/photos/6995583/pexels-photo-6995583.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "s2",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Hotel",
    taxonomy: "category",
    count: 0,
    thumbnail: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "s3",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Transfers",
    taxonomy: "category",
    count: 0,
    thumbnail: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "s4",
    href: LISTING_STAY_MAP_ROUTE,
    name: "MICE",
    taxonomy: "category",
    count: 0,
    thumbnail: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "s5",
    href: LISTING_STAY_MAP_ROUTE,
    name: "ETA visa",
    taxonomy: "category",
    count: 0,
    thumbnail: "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative bg-[#0b2e4e] text-white">
      {/* ── FULL-WIDTH HERO (outside container) ── */}
      <SectionHero />
      {/* <SectionMoodboardContent /> */}
      <SectionPopularTours />

      <div className="container relative py-24 lg:py-28">
        <SectionSliderNewCategories
          categories={SERVICES_CATEGORIES}
          heading="Our Services"
          subHeading="From luxury stays to seamless transfers, we handle every detail of your journey."
          categoryCardType="card5"
          itemPerRow={5}
        />
      </div>

      <SectionScrollReveal />

      <div className="container relative space-y-24 pb-12 lg:space-y-28 lg:pb-16 mt-24">
        {/* NEW TOUR PACKAGES SECTION */}
        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">Featured Tour Packages</h2>
              <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-400">
                Hand-picked destinations and tailored experiences just for you.
              </span>
            </div>
            <a 
              href="/listing-stay-map" 
              className="mt-6 md:mt-0 flex items-center text-[#fa7301] font-semibold hover:underline"
            >
              View all packages
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <FeaturedToursSection />
        </div>

        <SectionReviews />
        <SectionGallery />
      </div>

      <div className="container relative space-y-24 pb-24 lg:space-y-28 lg:pb-28 mt-12">
        <SectionSriLankaMap />
      </div>

      {/* Full-width banner image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: "420px" }}>
        <img
          src="/banner-fullwidth.png"
          alt="Discover Sri Lanka"
          className="w-full h-full object-cover object-center"
          style={{ maxHeight: "420px" }}
        />
      </div>
    </main>
  );
}

export default PageHome;
