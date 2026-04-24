"use client";

import React, { FC } from "react";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero relative w-full flex flex-col overflow-hidden ${className}`}
      style={{
        aspectRatio: "1081 / 736",
      }}
    >
      {/* Responsive video inside the middle transparent frame area */}
      <div className="absolute z-0 left-[calc(4.4%+5px)] top-[10.8%] w-[87.1%] h-[80.5%] overflow-hidden">
        <iframe
          className="absolute left-1/2 top-1/2 h-full w-[177.78%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube-nocookie.com/embed/0UAD7eaJgrQ?start=9&autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&playlist=0UAD7eaJgrQ&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3"
          title="Travel Ease background video"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Frame and decorative hero background placed above the video */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main card that matches the design composition */}
      <div className="relative z-10 h-full px-4 sm:px-8 lg:px-[10%] pt-8 sm:pt-10 lg:pt-[7%] pb-6 lg:pb-[6%]">
        <div className="mx-auto w-full h-full rounded-sm px-5 sm:px-8 lg:px-[5%] py-6 sm:py-8 lg:py-[3.2%] flex flex-col">
          <div className="mx-auto max-w-[860px] w-full translate-y-[70px]">
            <div className="pt-24 sm:pt-28 lg:pt-[17%] text-left relative">

              <h1
                className="font-extrabold leading-[0.9] tracking-wide uppercase select-none relative"
                style={{
                  color: "#D5912C",
                  fontSize: "clamp(2rem, 6vw, 5rem)",
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  textShadow: `
                    0 0 2px rgba(0,0,0,1), 
                    0 0 8px rgba(0,0,0,1), 
                    2px 2px 20px rgba(0,0,0,1), 
                    0 0 40px rgba(0,0,0,0.8),
                    0 0 60px rgba(0,0,0,0.6),
                    0 0 100px rgba(0,0,0,0.4)
                  `,
                }}
              >
                TRAVEL
                <br />
                TO SRI LANKA
              </h1>

              <div 
                className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-white text-sm font-bold"
                style={{ 
                  textShadow: "0 0 3px black, 0 0 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.8)" 
                }}
              >
                {["Sightseeing tours", "Individual tours", "Group tours"].map((tag) => (
                  <span key={tag} className="flex items-center gap-2 drop-shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#D5912C]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-[6.5%]">
            <div
              className="p-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] items-stretch overflow-hidden">
                <SearchField label="Type" />
                <SearchField label="Duration" />
                <div className="bg-[#d5912c]">
                  <button
                    className="w-full md:min-w-[220px] h-full px-7 py-4 text-white text-[18px] font-semibold transition-all hover:brightness-110"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SearchFieldProps {
  label: string;
}

const SearchField: FC<SearchFieldProps> = ({ label }) => (
  <button
    type="button"
    className="bg-white px-5 py-4 md:px-7 md:py-4 border-b md:border-b-0 md:border-r border-[#D9DDE3] text-left hover:bg-[#F8FAFC] transition-colors"
  >
    <div className="flex items-center justify-between text-[#7E8794] font-medium text-[18px]">
      <span>{label}</span>
      <svg className="w-4 h-4 text-[#98A1AE] ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </button>
);

export default SectionHero;
