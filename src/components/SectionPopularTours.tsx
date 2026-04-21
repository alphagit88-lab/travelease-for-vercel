"use client";

import React, { FC, useMemo, useState } from "react";

type RegionKey = "South" | "Central" | "North" | "West";

interface TourInfo {
  title: string;
  description: string;
  price: string;
  date: string;
  persons: string;
  image: string;
}

const REGIONS: RegionKey[] = ["South", "Central", "North", "West"];

const TOURS: Record<RegionKey, TourInfo> = {
  South: {
    title: "SIGIRIYA",
    description:
      "Sigiriya is one of the most valuable historical monuments of Sri Lanka. Referred by locals as the Eighth Wonder of the World, this ancient palace and fortress complex has significant archaeological importance and attracts thousands of tourists every year. It is probably the most visited tourist destination in Sri Lanka.",
    price: "1 990 $",
    date: "05.17 - 07.19",
    persons: "4 persons",
    image: "/bg-removed.png",
  },
  Central: {
    title: "KANDY",
    description:
      "Kandy offers a blend of history, misty mountains, and sacred heritage. From temple visits to scenic viewpoints, this route is ideal for travelers who enjoy both culture and calm landscapes in one memorable journey.",
    price: "1 750 $",
    date: "05.20 - 07.10",
    persons: "4 persons",
    image: "/bg-removed.png",
  },
  North: {
    title: "JAFFNA",
    description:
      "Jaffna introduces a different rhythm of Sri Lanka with unique traditions, coastal roads, and local flavors. The tour is designed to reveal lesser-known stories and authentic northern experiences in comfort.",
    price: "1 680 $",
    date: "06.02 - 07.14",
    persons: "4 persons",
    image: "/bg-removed.png",
  },
  West: {
    title: "GALLE",
    description:
      "Galle combines colonial architecture, ocean views, and vibrant street life. This direction is perfect for travelers who want a balanced route with history, seaside atmosphere, and relaxed exploration.",
    price: "1 820 $",
    date: "05.25 - 07.12",
    persons: "4 persons",
    image: "/bg-removed.png",
  },
};

export interface SectionPopularToursProps {
  className?: string;
}

const SectionPopularTours: FC<SectionPopularToursProps> = ({ className = "" }) => {
  const [activeRegion, setActiveRegion] = useState<RegionKey>("South");
  const activeTour = useMemo(() => TOURS[activeRegion], [activeRegion]);

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: "url('/sec-3.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto w-full max-w-[1060px] px-6 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div>
            <h2
              className="uppercase text-white leading-[0.9] font-medium text-[2.6rem] sm:text-[3.2rem]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              OUR POPULAR
              <br />
              TOURS
            </h2>
            <img
              src={activeTour.image}
              alt={activeTour.title}
              className="mt-8 sm:mt-10 w-full max-w-[530px] object-contain"
            />
          </div>

          <div className="pb-2">
            <div className="border-b border-white/20">
              <div className="flex items-center gap-8 sm:gap-12">
                {REGIONS.map((region) => {
                  const isActive = region === activeRegion;
                  return (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`relative pb-3 text-sm transition-colors ${
                        isActive ? "text-[#D89A2D]" : "text-white hover:text-[#D89A2D]"
                      }`}
                    >
                      {region}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#D89A2D]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <h3 className="mt-8 text-white text-[33px] leading-none font-medium" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {activeTour.title}
            </h3>

            <p className="mt-5 text-[#CBD2D9] text-[14px] leading-[1.6] max-w-xl">{activeTour.description}</p>

            <div className="mt-7 grid grid-cols-3 gap-6 max-w-md">
              <TourMeta label="Price per person:" value={activeTour.price} />
              <TourMeta label="Date:" value={activeTour.date} />
              <TourMeta label="Persons:" value={activeTour.persons} />
            </div>

            <div className="mt-7 border-b border-[#D89A2D]/80 pb-3 max-w-md">
              <a
                href="/listing-stay-map"
                className="flex items-center justify-between text-[#D89A2D] hover:text-[#E7B25A] hover:bg-[#D89A2D]/10 rounded-md px-2 py-1 -mx-2 -my-1 transition-colors"
              >
                <span className="uppercase text-sm tracking-wide">View All</span>
                <div className="flex items-center text-current">
                  <span className="h-[2px] w-[40px] bg-current" />
                  <svg viewBox="0 0 24 24" className="h-4 w-4 -ml-[5px]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 8 4 4-4 4" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TourMeta: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-[11px] text-white/50">{label}</p>
    <p className="mt-1 text-white text-sm font-medium">{value}</p>
  </div>
);

export default SectionPopularTours;
