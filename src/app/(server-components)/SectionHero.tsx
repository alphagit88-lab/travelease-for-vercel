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
        aspectRatio: "901 / 518",
      }}
    >
      {/* Full width video background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <iframe
          className="absolute left-1/2 top-1/2 h-full w-[177.78%] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
          src="https://www.youtube-nocookie.com/embed/4ihEqL8Js0o?start=0&autoplay=1&mute=1&controls=0&disablekb=1&fs=0&loop=1&playlist=4ihEqL8Js0o&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3"
          title="Travel Ease background video"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      {/* Frame and decorative hero background placed above the video */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 z-[5] bg-black/40 pointer-events-none" />

      {/* Main card that matches the design composition */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-[10%]">
        <div className="mx-auto w-full max-w-[960px] flex flex-col items-center text-center">

          <h1
            className="font-extrabold leading-[1] tracking-wide uppercase select-none drop-shadow-2xl"
            style={{
              color: "#fa7301",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.6)"
            }}
          >
            TRAVEL
            <br />
            TO SRI LANKA
          </h1>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white text-base font-medium tracking-wide"
            style={{
              fontFamily: "__Poppins_002541,__Poppins_Fallback_002541, sans-serif",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)"
            }}
          >
            {["Sightseeing tours", "Individual tours", "Group tours"].map((tag) => (
              <span key={tag} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#fa7301]" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 lg:mt-[6.5%] w-full">
            <div
              className="p-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", fontFamily: "__Poppins_002541,__Poppins_Fallback_002541, sans-serif" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] items-stretch overflow-hidden">
                <div className="bg-white flex items-center px-5 h-[60px] md:h-[70px] border-b md:border-b-0 md:border-r border-neutral-200">
                  <input type="text" className="w-full bg-transparent border-none outline-none focus:ring-0 text-neutral-900 placeholder-neutral-500 font-medium text-[15px]" placeholder="Type" />
                </div>
                <div className="bg-white flex items-center px-5 h-[60px] md:h-[70px] border-b md:border-b-0 md:border-r border-neutral-200">
                  <input type="text" className="w-full bg-transparent border-none outline-none focus:ring-0 text-neutral-900 placeholder-neutral-500 font-medium text-[15px]" placeholder="Duration" />
                </div>
                <div className="bg-[#0b2e4e]">
                  <button
                    className="w-full md:min-w-[220px] h-full px-7 py-4 text-white text-[18px] font-bold transition-all hover:brightness-110 flex items-center justify-center gap-2"
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
  );
};

export default SectionHero;
