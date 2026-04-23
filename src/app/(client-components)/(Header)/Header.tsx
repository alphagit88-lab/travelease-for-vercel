"use client";

import React, { FC } from "react";
import Logo from "@/shared/Logo";
import logoLightImg from "@/images/logo-light.png";
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

  const renderMainHeaderRow = (highContrast: boolean) => (
    <div className="relative h-[88px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="grid h-full w-full grid-cols-[auto,1fr,auto] items-center gap-6">
        <Logo img={logoLightImg} className="w-28 lg:w-32 flex-shrink-0" />
        <nav className="hidden lg:flex items-center justify-center gap-8 justify-self-center">
          {heroNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[12px] tracking-wide hover:text-[#D5912C] transition-colors ${
                highContrast ? "text-white font-normal [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-white/80 font-light"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className={`hidden md:flex items-center gap-4 justify-self-end ${highContrast ? "text-white" : "text-white/80"}`}>
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
  );

  if (isHomePage) {
    const homeHeaderClasses = `fixed top-0 inset-x-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out ${
      isHeroTransparent
        ? "bg-transparent backdrop-blur-0 shadow-none border-b border-transparent"
        : "backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.32)] border-b border-white/10"
    }`;

    return (
      <header
        className={`${homeHeaderClasses}`}
        style={
          isHeroTransparent
            ? undefined
            : {
                backgroundColor: "rgba(11, 46, 78, 0.72)",
              }
        }
      >
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isHeroTransparent
              ? "max-h-12 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-10 xl:px-14 pt-2">
            <div className="flex justify-end gap-1.5 rounded-md bg-white/32 backdrop-blur-sm px-1.5 py-1.5">
              <a
                href="/"
                className="rounded-md bg-[#D5912C]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white hover:brightness-110 transition-all"
              >
                Payments
              </a>
              <a
                href="/blog"
                className="rounded-md bg-[#1A2E46]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white hover:brightness-110 transition-all"
              >
                Blogs
              </a>
            </div>
          </div>
        </div>
        {renderMainHeaderRow(false)}
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.26)] ${className}`}
      style={{ backgroundColor: "rgba(11, 46, 78, 0.86)" }}
    >
      {renderMainHeaderRow(true)}
    </header>
  );
};

export default Header;
