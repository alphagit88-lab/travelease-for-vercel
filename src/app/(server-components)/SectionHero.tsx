"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div
      className={`nc-SectionHero relative w-full flex flex-col justify-center min-h-[520px] md:min-h-0 md:aspect-[901/518] overflow-hidden py-12 md:py-0 ${className}`}
    >
      {/* Fallback/Background Video (only visible if no slider images or as base) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          className="absolute left-1/2 top-1/2 h-full w-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover opacity-90"
          src="/hero-bg1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Frame and decorative hero background placed above the video */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none hidden md:block"
        style={{
          backgroundImage: "url('/hero-bgNN.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 z-[5] bg-black/30 md:bg-black/10 pointer-events-none" />

      {/* Main card that matches the design composition */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center px-4 sm:px-8 lg:px-[10%]">
        <div className="mx-auto w-full max-w-[960px] flex flex-col items-center text-center">

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-extrabold leading-[1.1] md:leading-[1] tracking-wide uppercase select-none drop-shadow-2xl"
            style={{
              color: "#fa7301",
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.6)"
            }}
          >
            TRAVEL
            <br />
            TO SRI LANKA
          </motion.h1>

          <div
            className="mt-6 md:mt-12 flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 text-white text-xs md:text-sm font-medium tracking-wide"
            style={{
              fontFamily: "__Poppins_002541,__Poppins_Fallback_002541, sans-serif",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)"
            }}
          >
            {["Sightseeing tours", "Individual tours", "Group tours"].map((tag) => (
              <span key={tag} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#fa7301]" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 md:mt-8 lg:mt-[4.5%] w-full max-w-[720px]">
            <div
              className="p-2 md:p-2.5 rounded-xl md:rounded-none"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", fontFamily: "__Poppins_002541,__Poppins_Fallback_002541, sans-serif" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] items-stretch gap-2 md:gap-0">
                <div className="bg-white flex items-center px-4 h-[46px] md:h-[55px] border-b md:border-b-0 md:border-r border-neutral-200 rounded-lg md:rounded-none">
                  <input
                    type="text"
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-neutral-900 placeholder-neutral-500 font-medium text-[14px]"
                    placeholder="Tours"
                  />
                </div>
                <div className="bg-white flex items-center px-4 h-[46px] md:h-[55px] border-b md:border-b-0 md:border-r border-neutral-200 relative rounded-lg md:rounded-none">
                  <DatePicker
                    selected={startDate}
                    onChange={(update) => {
                      const [start, end] = update as [Date | null, Date | null];
                      setStartDate(start);
                      setEndDate(end);
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    minDate={new Date()}
                    placeholderText="Select Date Range"
                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-neutral-900 placeholder-neutral-500 font-medium text-[14px] cursor-pointer"
                  />
                </div>
                <div className="bg-[#0b2e4e] rounded-lg md:rounded-none overflow-hidden">
                  <button
                    className="w-full md:min-w-[160px] h-[46px] md:h-full px-5 py-2.5 text-white text-[15px] md:text-[16px] font-bold transition-all hover:brightness-110 flex items-center justify-center gap-2"
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
