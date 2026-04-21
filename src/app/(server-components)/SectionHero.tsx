"use client";

import React, { FC } from "react";
import Link from "next/link";
import Logo from "@/shared/Logo";
import logoLightImg from "@/images/logo-light.png";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  const topNav = ["Directions", "Best excursions", "Reviews", "About country", "Contacts"];

  return (
    <div
      className={`nc-SectionHero relative w-full flex flex-col overflow-hidden ${className}`}
      style={{
        aspectRatio: "1371 / 736",
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main card that matches the design composition */}
      <div className="relative z-10 h-full px-4 sm:px-8 lg:px-[10%] pt-8 sm:pt-10 lg:pt-[7%] pb-6 lg:pb-[6%]">
        <div className="mx-auto w-full h-full rounded-sm px-5 sm:px-8 lg:px-[5%] py-6 sm:py-8 lg:py-[3.2%] flex flex-col">
          <div className="lg:px-[10%]">
            <div className="mx-auto w-full max-w-4xl flex items-center justify-between gap-4">
              <Logo img={logoLightImg} className="w-28 flex-shrink-0" />
              <nav className="hidden lg:flex items-center gap-7">
                {topNav.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="text-[12px] text-white/80 font-light tracking-wide hover:text-[#D5912C] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="hidden md:flex items-center gap-3 text-white/80">
                <a href="#" aria-label="Facebook" className="hover:text-[#D5912C] transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-[#D5912C] transition-colors">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="Telegram" className="hover:text-[#D5912C] transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.8 2.2L1.4 10.1c-1.4.6-1.4 1.4-.2 1.8l5.2 1.6 2 6.1c.3.8.6 1.1 1.1.7l2.9-2.6 5.7 4.2c1 .6 1.8.3 2-1l3.3-15.6c.4-1.6-.6-2.3-1.6-2.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[720px] pl-1 sm:pl-4 lg:pl-[10%] pt-10 sm:pt-12 lg:pt-[8.5%]">
            <h1
              className="font-extrabold leading-[0.9] tracking-wide uppercase select-none"
              style={{
                color: "#D5912C",
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                textShadow: "0 4px 30px rgba(0,0,0,0.62)",
              }}
            >
              TRAVEL
              <br />
              TO SRI LANKA
            </h1>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-2 text-white text-sm font-light">
              {["Sightseeing tours", "Individual tours", "Group tours"].map((tag) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#D5912C]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 lg:mt-[5%] lg:px-[10%]">
            <div
              className="mx-auto max-w-4xl flex flex-col lg:flex-row items-stretch lg:items-center rounded-2xl overflow-hidden border border-white/10"
              style={{
                backgroundColor: "rgba(8, 12, 20, 0.82)",
              }}
            >
              <BookingField
                icon={
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2z" clipRule="evenodd" />
                  </svg>
                }
                label="Type"
                value="Walking tour"
              />
              <BookingField
                icon={
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
                label="Duration"
                value="17.05 - 25.09"
              />
              <BookingField
                icon={<span className="text-xs font-bold leading-none">$</span>}
                label="Price"
                value="From $700"
              />
              <BookingField
                icon={
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                }
                label="Persons"
                value="4 persons"
                isLast
              />
              <div className="px-4 py-4 flex-shrink-0">
                <button
                  className="w-full lg:w-auto min-w-[160px] px-8 py-3.5 text-white font-semibold text-[11px] rounded-xl transition-all hover:brightness-110 active:scale-95 uppercase tracking-[0.14em]"
                  style={{ backgroundColor: "#D5912C" }}
                >
                  Book a Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Booking field sub-component ───────────────────────────── */
interface BookingFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isLast?: boolean;
}

const BookingField: FC<BookingFieldProps> = ({ icon, label, value, isLast = false }) => (
  <div
    className={`flex-1 px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors border-b lg:border-b-0 ${
      isLast ? "" : "lg:border-r"
    } border-white/10`}
  >
    <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
      {icon}
      {label}
    </p>
    <div className="flex items-center justify-between text-white font-medium text-[11px]">
      {value}
      <svg className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

export default SectionHero;
