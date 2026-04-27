"use client";

import React, { FC } from "react";
import Logo from "@/shared/Logo";
import logoLightImg from "@/images/logo-light.png";
import logoImg from "@/images/logo.png";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  className?: string;
  isHeroTransparent?: boolean;
}

const Header: FC<HeaderProps> = ({ className = "", isHeroTransparent = false }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const heroNavItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/" },
    { label: "Tours", href: "/listing-stay-map" },
    { label: "Contact Us", href: "/contact" },
  ];

  const renderMainHeaderRow = (isTransparent: boolean) => (
    <div className="relative h-[88px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="grid h-full w-full grid-cols-[auto,1fr,auto] items-center gap-6">
        <Logo 
          img={isTransparent ? logoLightImg : logoImg} 
          className={`${isTransparent ? "w-36 lg:w-48" : "w-28 lg:w-32"} flex-shrink-0 transition-all duration-300`} 
        />
        <nav className="hidden lg:flex items-center justify-center gap-8 justify-self-center">
          <a href="/" className={`text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>Home</a>
          <a href="/about" className={`text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>About Us</a>
          
          <div className="relative group">
            <a href="/" className={`flex items-center gap-1 text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>
              Services
              <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </a>
            <div className="absolute left-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-2 w-56 flex flex-col">
                {["Tour packages", "Hotel", "Transfers", "Experience", "Mice", "ETA visa"].map((item) => (
                  <a key={item} href="#" className="px-4 py-2.5 text-[14px] font-medium text-neutral-700 hover:text-[#fa7301] hover:bg-neutral-50 transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <a href="/listing-stay-map" className={`flex items-center gap-1 text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>
              Tours
              <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </a>
            <div className="absolute left-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-2 w-56 flex flex-col">
                {["Adventure", "Beach_Relaxation", "Culture_Heritage", "Food_Taste", "Wildlife_Nature", "Young_Trendy", "Experience", "Family", "Honeymoon", "Pilgrimage"].map((item) => (
                  <a key={item} href="#" className="px-4 py-2.5 text-[14px] font-medium text-neutral-700 hover:text-[#fa7301] hover:bg-neutral-50 transition-colors">{item.replace("_", " ")}</a>
                ))}
              </div>
            </div>
          </div>

          <a href="/contact" className={`text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>Contact Us</a>
        </nav>
        <div className={`hidden md:flex items-center gap-4 justify-self-end ${isTransparent ? "text-white" : "text-neutral-800"}`}>
          <a
            href="/"
            className={`rounded-md px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] transition-all ${
              isTransparent ? "bg-[#fa7301]/90 text-white hover:bg-[#fa7301]" : "bg-[#fa7301] text-white hover:bg-[#0b2e4e]"
            }`}
          >
            Payments
          </a>
          <a
            href="/blog"
            className={`rounded-md px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] transition-all ${
              isTransparent ? "bg-[#0b2e4e]/90 text-white hover:bg-[#0b2e4e]" : "bg-[#0b2e4e] text-white hover:bg-[#08223a]"
            }`}
          >
            Blogs
          </a>
          
          <div className="flex items-center gap-2 border-l border-current pl-4 ml-1 opacity-90">
            <span className="text-[13px] font-semibold cursor-pointer hover:text-[#fa7301] transition-colors">EN</span>
            <span className="text-[13px] font-semibold cursor-pointer hover:text-[#fa7301] transition-colors">USD</span>
          </div>

          <div className="flex items-center gap-3 ml-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#fa7301] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#fa7301] transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-[#fa7301] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.8 2.2L1.4 10.1c-1.4.6-1.4 1.4-.2 1.8l5.2 1.6 2 6.1c.3.8.6 1.1 1.1.7l2.9-2.6 5.7 4.2c1 .6 1.8.3 2-1l3.3-15.6c.4-1.6-.6-2.3-1.6-2.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (isHomePage) {
    const homeHeaderClasses = `fixed top-0 inset-x-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out ${
      isHeroTransparent
        ? "bg-transparent backdrop-blur-0 shadow-none border-b border-transparent"
        : "bg-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-b border-neutral-200"
    }`;

    return (
      <header className={`${homeHeaderClasses}`}>
        {renderMainHeaderRow(isHeroTransparent)}
      </header>
    );
  }

  return (
    <header className={`sticky top-0 z-40 border-b border-neutral-200 bg-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] ${className}`}>
      {renderMainHeaderRow(false)}
    </header>
  );
};

export default Header;
