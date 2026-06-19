"use client";

import React, { FC, useState } from "react";
import Logo from "@/shared/Logo";
import logoLightImg from "@/images/logo-light.png";
import logoImg from "@/images/logo.png";
import { usePathname } from "next/navigation";
import LangDropdown from "./LangDropdown";
import CurrencyDropdown from "./CurrencyDropdown";
import { getBaseUrl } from "@/utils/api";

export interface HeaderProps {
  className?: string;
  isHeroTransparent?: boolean;
}

const Header: FC<HeaderProps> = ({ className = "", isHeroTransparent = false }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [hoveredTourKey, setHoveredTourKey] = useState<string>("beachfront-delights");

  const TOUR_MENU_DATA = [
    { name: "Beachfront Delights", href: "/tour?s=beachfront-delights", key: "beachfront-delights" },
    { name: "Hillside Heaven", href: "/tour?s=hillside-heaven", key: "hillside-heaven" },
    { name: "Rumble and Roam Adventure Tour", href: "/tour?s=rumble-and-roam-adventure-tour", key: "rumble-and-roam-adventure-tour" },
    { name: "Sri Lanka Unveiled", href: "/tour?s=sri-lanka-unveiled", key: "sri-lanka-unveiled" },
    {
      name: "Sri Lankan Splendors  :",
      key: "sri-lankan-splendors-7-nights-8-days",
      isParent: true,
      children: [
        { name: "Sri Lankan Splendors 8D 7N", href: "/tour?s=sri-lankan-splendors-7-nights-8-days", key: "sri-lankan-splendors-7-nights-8-days" },
        { name: "Sri Lankan Splendors 12D 11N", href: "/tour?s=sri-lankan-splendors-11-nights-12-days", key: "sri-lankan-splendors-11-nights-12-days" },
      ]
    },
    {
      name: "Sri Lankas UNESCO Gems  :",
      key: "sri-lankas-unesco-gems-7-nights-8-days",
      isParent: true,
      children: [
        { name: "Sri Lankas UNESCO Gems 7N 8D", href: "/tour?s=sri-lankas-unesco-gems-7-nights-8-days", key: "sri-lankas-unesco-gems-7-nights-8-days" },
        { name: "Sri Lankas UNESCO Gems 10N 11D", href: "/tour?s=sri-lankas-unesco-gems-10-nights-11-days", key: "sri-lankas-unesco-gems-10-nights-11-days" },
        { name: "Sri Lankas UNESCO Gems 14N 15D", href: "/tour?s=sri-lankas-unesco-gems-14-nights-15-days", key: "sri-lankas-unesco-gems-14-nights-15-days" },
      ]
    },
    { name: "Trails and Coastal Tails", href: "/tour?s=trails-and-coastal-tails", key: "trails-and-coastal-tails" }
  ];

  const TOUR_IMAGES_MAP: Record<string, string[]> = {
    "beachfront-delights": [
      `${getBaseUrl()}/uploads/compressed_beach___bentota.jpg`,
      `${getBaseUrl()}/uploads/compressed_galle_dutch_fort.jpg`,
      `${getBaseUrl()}/uploads/compressed_kosgoda_turtle_hatchery.jpg`
    ],
    "hillside-heaven": [
      `${getBaseUrl()}/uploads/compressed_elephant_orphanage.jpg`,
      `${getBaseUrl()}/uploads/compressed_kandy_temple_of_tooth.jpg`,
      `${getBaseUrl()}/uploads/compressed_nuwara_eliya.jpg`
    ],
    "rumble-and-roam-adventure-tour": [
      `${getBaseUrl()}/uploads/compressed_sigiriya.jpg`,
      `${getBaseUrl()}/uploads/compressed_kithulgala_adventure_rafting.jpg`,
      `${getBaseUrl()}/uploads/compressed_knuckles_trekking.jpg`
    ],
    "sri-lanka-unveiled": [
      `${getBaseUrl()}/uploads/compressed_colombo_city.jpg`,
      `${getBaseUrl()}/uploads/compressed_jaffna_city.jpg`,
      `${getBaseUrl()}/uploads/compressed_casuarina_beach.jpg`
    ],
    "sri-lankan-splendors-7-nights-8-days": [
      `${getBaseUrl()}/uploads/compressed_minneriya_national_park.jpg`,
      `${getBaseUrl()}/uploads/compressed_nine_arch___ella.jpg`,
      `${getBaseUrl()}/uploads/compressed_beruwala_beach.jpg`
    ],
    "sri-lankan-splendors-11-nights-12-days": [
      `${getBaseUrl()}/uploads/compressed_polonnaruwa_ancient_city.jpg`,
      `${getBaseUrl()}/uploads/compressed_horton_plains___1_.jpg`,
      `${getBaseUrl()}/uploads/compressed_yala_safari.jpg`
    ],
    "sri-lankas-unesco-gems-7-nights-8-days": [
      `${getBaseUrl()}/uploads/compressed_colombo_via_tuk_tuk.jpg`,
      `${getBaseUrl()}/uploads/compressed_anuradhapura_city_on_bicycles__1_.jpg`,
      `${getBaseUrl()}/uploads/compressed_breakfast_at_pidurangala.png`
    ],
    "sri-lankas-unesco-gems-10-nights-11-days": [
      `${getBaseUrl()}/uploads/compressed_yala_safari___leapord.jpg`,
      `${getBaseUrl()}/uploads/compressed_kanneliya_rain_forest_01___3_.jpg`,
      `${getBaseUrl()}/uploads/compressed_anuradhapura_city_on_bicycles__2_.jpg`
    ],
    "sri-lankas-unesco-gems-14-nights-15-days": [
      `${getBaseUrl()}/uploads/compressed_wilpattu_national_park_1.jpg`,
      `${getBaseUrl()}/uploads/compressed_sigiriya_entrance.jpg`,
      `${getBaseUrl()}/uploads/compressed_galle_fort_exploring.jpg`
    ],
    "trails-and-coastal-tails": [
      `${getBaseUrl()}/uploads/compressed_trincomalee_beach.jpg`,
      `${getBaseUrl()}/uploads/compressed_koneswaram_temple_trincomalee.webp`,
      `${getBaseUrl()}/uploads/compressed_royal_botanical_garden.jpg`
    ]
  };

  const CORE_SERVICES = [
    { name: "Tour packages", href: "#" },
    { name: "Hotel", href: "#" },
    { name: "Transfers", href: "#" },
    { name: "Mice", href: "#" },
    { name: "ETA visa", href: "#" },
  ];

  const TOUR_TYPES_MENU = [
    { name: "Adventure", href: "#" },
    { name: "Beach Relaxation", href: "#" },
    { name: "Culture Heritage", href: "#" },
    { name: "Food Taste", href: "#" },
    { name: "Wildlife Nature", href: "#" },
    { name: "Young Trendy", href: "#" },
    { name: "Family", href: "#" },
    { name: "Honeymoon", href: "#" },
    { name: "Pilgrimage", href: "#" },
  ];

  const TOURS_ITEMS = [
    { name: "Adventure", img: "https://images.pexels.com/photos/6995583/pexels-photo-6995583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Beach Relaxation", img: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Culture Heritage", img: "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Food Taste", img: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Wildlife Nature", img: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Young Trendy", img: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Experience", img: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Family", img: "https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Honeymoon", img: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { name: "Pilgrimage", img: "https://images.pexels.com/photos/415571/pexels-photo-415571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
  ];

  const FEATURED_IMAGES = [
    { img: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=600", className: "w-16 h-64" },
    { img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600", className: "w-32 h-64" },
    { img: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600", className: "w-64 h-64" },
  ];
  const heroNavItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
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
          <a href="/" className={`text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`} style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>Home</a>
          <a href="/about" className={`text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`} style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>About Us</a>
          
          <div className="relative group">
            <a href="/services" className={`flex items-center gap-1 text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`} style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>
              Services
              <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 p-8 w-[95vw] max-w-3xl">
                <div className="grid grid-cols-[1fr_auto] gap-8">
                  {/* CORE SERVICES */}
                  <div>
                    <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-6" style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>Our Core Services</h3>
                    <div className="flex flex-col gap-y-4">
                      {CORE_SERVICES.map((item) => (
                        <a key={item.name} href={item.href} className="text-[15px] font-bold text-neutral-800 hover:text-[#fa7301] transition-colors" style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>{item.name}</a>
                      ))}
                    </div>
                  </div>

                  {/* IMAGES */}
                  <div className="flex gap-4">
                    {FEATURED_IMAGES.map((item, idx) => (
                      <div key={idx} className={`${item.className} rounded-2xl overflow-hidden relative group/img shadow-md`}>
                        <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" alt="" />
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <a href="/tours" className={`flex items-center gap-1 text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`} style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>
              Tours
              <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 p-8 w-[95vw] max-w-4xl">
                <div className="grid grid-cols-[1fr_auto] gap-8">
                  {/* TOURS LIST */}
                  <div className="flex flex-col select-none pr-4 h-64 overflow-y-auto tours-menu-scrollbar">
                    <style dangerouslySetInnerHTML={{__html: `
                      .tours-menu-scrollbar::-webkit-scrollbar {
                        width: 4px;
                      }
                      .tours-menu-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      .tours-menu-scrollbar::-webkit-scrollbar-thumb {
                        background: #e5e7eb;
                        border-radius: 9999px;
                      }
                      .tours-menu-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #fa7301;
                      }
                      .tours-menu-scrollbar {
                        scrollbar-width: thin;
                        scrollbar-color: #e5e7eb transparent;
                      }
                    `}} />
                    <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-4" style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>Our Featured Tours</h3>
                    <div className="flex flex-col gap-y-1.5">
                      {TOUR_MENU_DATA.map((item) => {
                        if (item.isParent) {
                          return (
                            <div key={item.key} className="flex flex-col mt-1.5">
                              <span 
                                className="text-[15px] font-bold text-neutral-800 py-1.5 tracking-wide cursor-default transition-colors hover:text-[#fa7301]"
                                style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}
                                onMouseEnter={() => setHoveredTourKey(item.key)}
                              >
                                {item.name}
                              </span>
                              <div className="flex flex-col pl-4 border-l border-neutral-100 gap-y-1 ml-1.5 mt-0.5">
                                {item.children?.map((child) => (
                                  <a
                                    key={child.key}
                                    href={child.href}
                                    className={`text-[14px] py-1 font-semibold transition-colors duration-200 ${
                                      hoveredTourKey === child.key 
                                        ? "text-[#fa7301]" 
                                        : "text-neutral-600 hover:text-[#fa7301]"
                                    }`}
                                    style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}
                                    onMouseEnter={() => setHoveredTourKey(child.key)}
                                  >
                                    {child.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        return (
                          <a
                            key={item.key}
                            href={item.href}
                            className={`text-[15px] py-1.5 font-bold transition-colors duration-200 ${
                              hoveredTourKey === item.key 
                                ? "text-[#fa7301]" 
                                : "text-neutral-800 hover:text-[#fa7301]"
                            }`}
                            style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}
                            onMouseEnter={() => setHoveredTourKey(item.key)}
                          >
                            {item.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* IMAGES */}
                  <div className="flex gap-4 items-center">
                    {FEATURED_IMAGES.map((imgConfig, idx) => {
                      const tourImages = TOUR_IMAGES_MAP[hoveredTourKey] || [];
                      const imgSrc = tourImages[idx] || imgConfig.img;
                      
                      return (
                        <div key={idx} className={`${imgConfig.className} rounded-2xl overflow-hidden relative group/img shadow-md`}>
                          <img 
                            src={imgSrc} 
                            onError={(e) => {
                              // If backend is not active or the image fails to load, fallback to standard static image
                              (e.target as HTMLImageElement).src = imgConfig.img;
                            }}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" 
                            alt="" 
                          />
                          <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="/contact" className={`text-[15px] font-semibold tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`} style={{ fontFamily: "__Poppins_002541, __Poppins_Fallback_002541, sans-serif" }}>Contact Us</a>
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
          
          <div className="flex items-center gap-4 border-l border-current pl-4 ml-1 opacity-90">
            <LangDropdown />
            <CurrencyDropdown />
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