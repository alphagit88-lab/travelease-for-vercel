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
    thumbnail: "/images/tours/adventure.jpeg",
  },
  {
    id: "2",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Beach Relaxation",
    taxonomy: "category",
    count: 2200,
    thumbnail: "/images/tours/beach-relaxation.jpeg",
  },
  {
    id: "3",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Culture Heritage",
    taxonomy: "category",
    count: 1980,
    thumbnail: "/images/tours/culture-heritage.jpeg",
  },
  {
    id: "4",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Food Taste",
    taxonomy: "category",
    count: 1540,
    thumbnail: "/images/tours/food-taste.jpeg",
  },
  {
    id: "5",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Wildlife Nature",
    taxonomy: "category",
    count: 2600,
    thumbnail: "/images/tours/wildlife-nature.jpeg",
  },
  {
    id: "6",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Young Trendy",
    taxonomy: "category",
    count: 1780,
    thumbnail: "/images/tours/adventure.jpeg",
  },
  {
    id: "7",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Experience",
    taxonomy: "category",
    count: 1850,
    thumbnail: "/images/tours/culture-heritage.jpeg",
  },
  {
    id: "8",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Family",
    taxonomy: "category",
    count: 2020,
    thumbnail: "/images/tours/beach-relaxation.jpeg",
  },
  {
    id: "9",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Honeymoon",
    taxonomy: "category",
    count: 1940,
    thumbnail: "/images/tours/beach-relaxation.jpeg",
  },
  {
    id: "10",
    href: LISTING_STAY_MAP_ROUTE,
    name: "Pilgrimage",
    taxonomy: "category",
    count: 1210,
    thumbnail: "/images/tours/culture-heritage.jpeg",
  },
];

const SERVICES_CATEGORIES: TaxonomyType[] = [
  {
    id: "s1",
    href: "/services" as Route<string>,
    name: "Tour packages",
    taxonomy: "category",
    count: 0,
    thumbnail: "/images/tours/wildlife.png",
  },
  {
    id: "s2",
    href: "/services" as Route<string>,
    name: "Hotel",
    taxonomy: "category",
    count: 0,
    thumbnail: "/images/services/hotel.jpeg",
  },
  {
    id: "s3",
    href: "/services" as Route<string>,
    name: "Transfers",
    taxonomy: "category",
    count: 0,
    thumbnail: "/images/services/transfers.jpeg",
  },
  {
    id: "s4",
    href: "/services" as Route<string>,
    name: "MICE",
    taxonomy: "category",
    count: 0,
    thumbnail: "/images/services/mice.jpeg",
  },
  {
    id: "s5",
    href: "/services" as Route<string>,
    name: "ETA visa",
    taxonomy: "category",
    count: 0,
    thumbnail: "/images/services/eta-visa.jpeg",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative bg-[#0b2e4e] text-white">
      {/* ── FULL-WIDTH HERO (outside container) ── */}
      <SectionHero />
      {/* <SectionMoodboardContent /> */}
      <SectionPopularTours />

      <div className="w-full bg-white text-[#0b2e4e] [&_.text-white]:!text-[#0b2e4e]">
        <div className="container relative py-24 lg:py-28">
          <SectionSliderNewCategories
            categories={SERVICES_CATEGORIES}
            heading="Our Services"
            subHeading="From luxury stays to seamless transfers, we handle every detail of your journey."
            categoryCardType="card5"
            itemPerRow={5}
          />
        </div>
      </div>

      <SectionScrollReveal />

      <div className="w-full bg-white text-[#0b2e4e] [&_.text-white]:!text-[#0b2e4e]">
        <div className="container relative py-24 lg:py-28">
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
                  <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <FeaturedToursSection />
          </div>
        </div>
      </div>

      <div className="container relative space-y-24 pb-12 pt-24 lg:space-y-28 lg:pb-16 lg:pt-28">
        <SectionReviews />
        <SectionGallery />
      </div>

      <div className="w-full bg-white text-[#0b2e4e] [&_.text-white]:!text-[#0b2e4e]">
        <div className="container relative py-24 lg:py-28">
          <SectionSriLankaMap />
        </div>
      </div>

      {/* Full-width banner image */}
      <div className="w-full overflow-hidden" style={{ maxHeight: "520px" }}>
        <img
          src="/banner-fullwidth2.png"
          alt="Discover Sri Lanka"
          className="w-full h-full object-cover object-center"
          style={{ maxHeight: "520px" }}
        />
      </div>
    </main>
  );
}

export default PageHome;
