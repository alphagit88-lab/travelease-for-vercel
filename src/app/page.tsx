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

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden bg-[#0b2e4e] text-white">
      {/* ── FULL-WIDTH HERO (outside container) ── */}
      <SectionHero />
      {/* <SectionMoodboardContent /> */}
      <SectionPopularTours />

      {/* ── REQUIRED NEXT SECTIONS ONLY ─────── */}
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 mt-24">
        <SectionGallery />
        <SectionReviews />
        <SectionWhyChooseUs />
        <SectionSriLankaMap />
        <SectionSliderNewCategories
          categories={TOUR_TYPES}
          heading="Tour Types"
          subHeading="Adventure, beach relaxation, culture, wildlife and more curated journeys."
          categoryCardType="card5"
          itemPerRow={5}
        />
      </div>
    </main>
  );
}

export default PageHome;
