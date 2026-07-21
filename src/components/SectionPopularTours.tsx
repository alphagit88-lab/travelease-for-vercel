"use client";

import React, { FC, useMemo, useState } from "react";

type RegionKey = "Beach" | "Wildlife" | "Experience" | "Honeymoon";

interface TourInfo {
  title: string;
  description: string;
  image: string;
}

const REGIONS: RegionKey[] = ["Beach", "Wildlife", "Experience", "Honeymoon"];

const TOURS: Record<RegionKey, TourInfo> = {
  Beach: {
    title: "BEACH RELAXATION",
    description:
      "Experience the ultimate coastal escape on Sri Lanka's golden shores. From the calm turquoise waters of Unawatuna to the vibrant surf of Arugam Bay, our beach tours offer the perfect blend of sun-soaked relaxation and tropical luxury.",
    image: "/images/tours/beach.png",
  },
  Wildlife: {
    title: "SAFARI ADVENTURES",
    description:
      "Embark on a thrilling journey through Sri Lanka's untamed wilderness. Witness majestic elephants in Udawalawe and spot the elusive leopard in Yala National Park. Our safaris bring you face-to-face with the island's incredible biodiversity.",
    image: "/images/tours/wildlife.png",
  },
  Experience: {
    title: "FOOD & CULTURE",
    description:
      "Dive deep into the rich heritage and culinary wonders of the island. Explore ancient temples, witness traditional Kandyan dance, and savor the complex flavors of authentic Sri Lankan curries in this immersive cultural experience.",
    image: "/images/tours/experience.png",
  },
  Honeymoon: {
    title: "ROMANTIC GETAWAYS",
    description:
      "Celebrate your love amidst the most romantic landscapes on earth. From private candlelight dinners in the misty hills of Ella to secluded sunset cruises, we craft unforgettable moments for your perfect Sri Lankan honeymoon.",
    image: "/images/tours/honeymoon.png",
  },
};

export interface SectionPopularToursProps {
  className?: string;
}

const SectionPopularTours: FC<SectionPopularToursProps> = ({ className = "" }) => {
  const [activeRegion, setActiveRegion] = useState<RegionKey>("Beach");
  const activeTour = useMemo(() => TOURS[activeRegion], [activeRegion]);

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: "url('/sec-3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(8, 26, 47, 0.7) 0%, rgba(8, 26, 47, 0.8) 45%, rgba(8, 26, 47, 0.9) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1060px] px-6 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 items-end">
          <div>
            <h2
              className="uppercase text-white leading-[0.9] font-medium text-[2.6rem] sm:text-[3.2rem]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              OUR POPULAR
              <br />
              TOURS
            </h2>

            {/* Tabs for mobile (before image) */}
            <div className="block lg:hidden mt-6 border-b border-white/20 pb-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {REGIONS.map((region) => {
                  const isActive = region === activeRegion;
                  return (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`relative pb-1 text-sm font-medium transition-colors ${isActive ? "text-[#D89A2D]" : "text-white hover:text-[#D89A2D]"
                        }`}
                    >
                      {region}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-[13px] h-[2px] bg-[#D89A2D]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <img
              src={activeTour.image}
              alt={activeTour.title}
              className="mt-6 lg:mt-10 w-full max-w-[530px] rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
          </div>

          <div className="pb-2">
            {/* Tabs for desktop */}
            <div className="hidden lg:block border-b border-white/20">
              <div className="flex flex-wrap items-center gap-8 sm:gap-12">
                {REGIONS.map((region) => {
                  const isActive = region === activeRegion;
                  return (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`relative pb-3 text-sm transition-colors ${isActive ? "text-[#D89A2D]" : "text-white hover:text-[#D89A2D]"
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

            <h3 className="mt-3 lg:mt-8 text-white text-[26px] sm:text-[33px] leading-none font-medium" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {activeTour.title}
            </h3>

            <p className="mt-5 text-[#CBD2D9] text-[14px] leading-[1.6] max-w-xl">{activeTour.description}</p>

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

export default SectionPopularTours;
