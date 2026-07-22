"use client";

import React, { FC, useState, useEffect } from "react";
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
  const [expandedParents, setExpandedParents] = useState<Record<string, boolean>>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const mobileNavLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Tours", href: "/listing-stay-map" },
    { label: "Contact Us", href: "/contact" },
  ];

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
    <div className="relative h-[64px] lg:h-[88px] px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="font-poppins grid h-full w-full grid-cols-2 lg:grid-cols-[auto,1fr,auto] items-center lg:gap-6">
        <Logo
          img={isTransparent ? logoLightImg : logoImg}
          className={`${isTransparent ? "w-24 sm:w-28 lg:w-36 xl:w-48" : "w-20 sm:w-24 lg:w-28 xl:w-32"} flex-shrink-0 transition-all duration-300`}
        />
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 justify-self-center">
          <a href="/" className={`text-[15px] font-medium tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>Home</a>
          <a href="/about" className={`text-[15px] font-medium tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>About Us</a>

          <a href="/services" className={`text-[15px] font-medium tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>Services</a>

          <div className="relative group">
            <a href="/tours" className={`flex items-center gap-1 text-[15px] font-medium tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>
              Tours
              <svg className="w-3.5 h-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </a>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-black/5 p-8 w-[95vw] max-w-4xl">
                <div className="grid grid-cols-[1fr_auto] gap-8">
                  {/* TOURS LIST */}
                  <div className="flex flex-col select-none pr-4 h-64 overflow-y-auto tours-menu-scrollbar">
                    <style dangerouslySetInnerHTML={{
                      __html: `
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
                    <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Our Featured Tours</h3>
                    <div className="flex flex-col gap-y-1.5">
                      {TOUR_MENU_DATA.map((item) => {
                        if (item.isParent) {
                          const isExpanded = !!expandedParents[item.key];
                          return (
                            <div key={item.key} className="flex flex-col mt-1.5">
                              <div className="flex items-center justify-between">
                                <span
                                  className="text-[15px] font-bold text-neutral-800 py-1.5 tracking-wide cursor-default transition-colors hover:text-[#fa7301] flex-1"

                                  onMouseEnter={() => setHoveredTourKey(item.key)}
                                >
                                  {item.name}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setExpandedParents((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                                  className="p-1 rounded-md hover:bg-neutral-100 transition-colors flex-shrink-0 ml-2"
                                  aria-label={isExpanded ? "Collapse" : "Expand"}
                                >
                                  <svg
                                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </div>
                              {isExpanded && (
                                <div className="flex flex-col pl-4 border-l border-neutral-100 gap-y-1 ml-1.5 mt-0.5">
                                  {item.children?.map((child) => (
                                    <a
                                      key={child.key}
                                      href={child.href}
                                      className={`text-[14px] py-1 font-semibold transition-colors duration-200 ${hoveredTourKey === child.key
                                        ? "text-[#fa7301]"
                                        : "text-neutral-600 hover:text-[#fa7301]"
                                        }`}

                                      onMouseEnter={() => setHoveredTourKey(child.key)}
                                    >
                                      {child.name}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        return (
                          <a
                            key={item.key}
                            href={item.href}
                            className={`text-[15px] py-1.5 font-bold transition-colors duration-200 ${hoveredTourKey === item.key
                              ? "text-[#fa7301]"
                              : "text-neutral-800 hover:text-[#fa7301]"
                              }`}

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

          <a href="/contact" className={`text-[15px] font-medium tracking-wide hover:text-[#fa7301] transition-colors ${isTransparent ? "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" : "text-neutral-800"}`}>Contact Us</a>
        </nav>
        <div className={`flex items-center gap-4 justify-self-end ${isTransparent ? "text-white" : "text-neutral-800"}`}>
          {/* Mobile hamburger — only on < lg */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${isTransparent ? "bg-white" : "bg-neutral-800"} ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${isTransparent ? "bg-white" : "bg-neutral-800"} ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${isTransparent ? "bg-white" : "bg-neutral-800"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <a
              href="https://tchannellk.com/payment.php"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-md px-2 xl:px-3 py-1.5 text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.08em] transition-all ${isTransparent ? "bg-[#fa7301]/90 text-white hover:bg-[#fa7301]" : "bg-[#fa7301] text-white hover:bg-[#0b2e4e]"
                }`}
            >
              Payments
            </a>
            <a
              href="/blog"
              className={`rounded-md px-2 xl:px-3 py-1.5 text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.08em] transition-all ${isTransparent ? "bg-[#0b2e4e]/90 text-white hover:bg-[#0b2e4e]" : "bg-[#0b2e4e] text-white hover:bg-[#08223a]"
                }`}
            >
              Blogs
            </a>

            <div className="flex items-center gap-2 xl:gap-4 border-l border-current pl-2 xl:pl-4 ml-1 opacity-90">
              <LangDropdown />
              <CurrencyDropdown />
            </div>

            <div className="flex items-center gap-2 xl:gap-3 ml-1 xl:ml-2">
              <a href="https://www.facebook.com/traveleaseholidays/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#fa7301] transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/traveleaseholidays/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#fa7301] transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://twitter.com/TEHolidays" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="hover:text-[#fa7301] transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/travel-ease-holidays-private-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#fa7301] transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileDrawer = () => (
    <div
      className={`lg:hidden fixed inset-0 z-[9999] transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      {/* Slide-in panel */}
      <div
        className={`absolute top-0 left-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <Logo img={logoImg} className="w-20" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-full hover:bg-neutral-100 transition-colors" aria-label="Close menu">
            <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        {/* Nav links */}
        <nav className="flex flex-col px-5 py-6 gap-1 flex-1 overflow-y-auto">
          {mobileNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[16px] font-medium text-neutral-800 hover:text-[#fa7301] px-3 py-3 rounded-xl hover:bg-neutral-50 transition-colors ${pathname === link.href ? "text-[#fa7301] bg-[#fa7301]/10" : ""
                }`}
            >
              {link.label}
            </a>
          ))}

          <div className="my-2 border-t border-neutral-100" />

          <a href="https://tchannellk.com/payment.php" target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium text-neutral-800 hover:text-[#fa7301] px-3 py-3 rounded-xl hover:bg-neutral-50 transition-colors">
            Payments
          </a>
          <a href="/blog" className={`text-[16px] font-medium text-neutral-800 hover:text-[#fa7301] px-3 py-3 rounded-xl hover:bg-neutral-50 transition-colors ${pathname === "/blog" ? "text-[#fa7301] bg-[#fa7301]/10" : ""
            }`}>
            Blogs
          </a>

          <div className="flex flex-col items-center gap-2 py-4 mt-2 border-t border-neutral-100">
            <LangDropdown className="w-full" panelClassName="w-full mt-2 mb-4 z-50" />
            <CurrencyDropdown className="w-full" panelClassName="w-full mt-2 mb-4 z-50" />
          </div>
        </nav>
        {/* Bottom social links */}
        <div className="px-5 py-5 border-t border-neutral-100 flex justify-center gap-3">
          <a href="https://www.facebook.com/traveleaseholidays/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-500 hover:text-[#fa7301] transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
          </a>
          <a href="https://www.instagram.com/traveleaseholidays/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-500 hover:text-[#fa7301] transition-colors">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" /></svg>
          </a>
          <a href="https://twitter.com/TEHolidays" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-neutral-500 hover:text-[#fa7301] transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://www.linkedin.com/company/travel-ease-holidays-private-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-500 hover:text-[#fa7301] transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>
      </div>
    </div>
  );

  if (isHomePage) {
    const homeHeaderClasses = `fixed top-0 inset-x-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out ${isHeroTransparent
      ? "bg-transparent backdrop-blur-0 shadow-none border-b border-transparent"
      : "bg-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-b border-neutral-200"
      }`;

    return (
      <>
        <header className={`${homeHeaderClasses}`}>
          {renderMainHeaderRow(isHeroTransparent)}
        </header>
        {renderMobileDrawer()}
      </>
    );
  }

  return (
    <>
      <header className={`sticky top-0 z-40 border-b border-neutral-200 bg-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] ${className}`}>
        {renderMainHeaderRow(false)}
      </header>
      {renderMobileDrawer()}
    </>
  );
};

export default Header;