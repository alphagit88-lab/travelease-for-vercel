"use client";

import React, { useState } from "react";
import Link from "next/link";
import ButtonPrimary from "@/shared/ButtonPrimary";
import travelHero from "@/images/travelhero2.png";
import { Route } from "@/routers/types";

const coreServices = [
  {
    id: 1,
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Tour Packages",
    description: "Discover Sri Lanka with our carefully curated tour packages! From cultural heritage tours to beach holidays and mountain escapes, we offer a wide range of pre-designed packages.",
  },
  {
    id: 2,
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Hotel Bookings",
    description: "Let us handle your accommodation needs! We have partnerships with a wide range of hotels, resorts, villas, and boutique properties across Sri Lanka, matching your preferences.",
  },
  {
    id: 3,
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Transfers",
    description: "Enjoy hassle-free transportation during your holiday! We provide reliable airport pick-up, drop-off, and comfortable private transfers between destinations across the island.",
  },
  {
    id: 4,
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "MICE",
    description: "Plan your corporate events, meetings, conferences, and incentive trips with us! Sri Lanka is an excellent destination offering world-class venues and stunning locations.",
  },
  {
    id: 5,
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "ETA Visa Assistance",
    description: "Need help with your Sri Lankan visa? We provide ETA (Electronic Travel Authorization) assistance to make the process smooth, guiding you through the application.",
  }
];

export default function PageServices() {
  const [selectedService, setSelectedService] = useState("");

  const handleReadMore = (title: string) => {
    setSelectedService(title);
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f5f8fa]">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${travelHero.src})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,40,57,0.35),rgba(6,40,57,0.8))]" />
        <div className="container relative flex min-h-[320px] flex-col justify-center py-20 text-white lg:min-h-[360px]">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Services
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            From tailor-made tours to seamless transfers, we handle every detail of your Sri Lankan adventure.
          </p>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <section className="container mx-auto px-4 relative z-10 -mt-10 pb-16 lg:-mt-16 lg:pb-20">
        
        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {coreServices.map((service) => (
            <div 
              key={service.id} 
              className="relative group flex flex-col justify-between rounded-[24px] bg-white p-8 pb-10 shadow-sm border border-slate-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed mb-8 line-clamp-4 relative z-10">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-auto relative z-10">
                <button 
                  onClick={() => handleReadMore(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#fa7301] transition-colors"
                >
                  <span className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#fa7301] transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.5 12H20.33" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  Read more
                </button>
              </div>
              
              {/* Large Circle Clipped at Corner */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#fa7301]/10 rounded-full flex items-center justify-center text-[#fa7301] group-hover:bg-[#fa7301]/15 transition-colors duration-300">
                <div className="w-14 h-14 mb-7 mr-7">
                  {service.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Form */}
        <div id="inquiry-form" className="rounded-[34px] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(15,23,42,0.06)] scroll-mt-24">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-semibold text-slate-900" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Service Inquiry
            </h2>
            <p className="mt-4 text-slate-600">
              Select the service you're interested in and provide your details. Our team will get back to you shortly!
            </p>
          </div>

          <form className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Service Type *</label>
              <select 
                className="w-full rounded-2xl border-slate-200 bg-transparent px-4 py-3.5 focus:border-[#fa7301] focus:ring-[#fa7301] focus:ring-opacity-50 text-slate-900"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="" disabled>Select a service</option>
                {coreServices.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full rounded-2xl border-slate-200 bg-transparent px-4 py-3.5 focus:border-[#fa7301] focus:ring-[#fa7301] focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full rounded-2xl border-slate-200 bg-transparent px-4 py-3.5 focus:border-[#fa7301] focus:ring-[#fa7301] focus:ring-opacity-50"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 234 567 8900" 
                className="w-full rounded-2xl border-slate-200 bg-transparent px-4 py-3.5 focus:border-[#fa7301] focus:ring-[#fa7301] focus:ring-opacity-50"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Message or Requirements *</label>
              <textarea 
                rows={4}
                placeholder="Tell us more about what you need..."
                className="w-full rounded-2xl border-slate-200 bg-transparent px-4 py-3.5 focus:border-[#fa7301] focus:ring-[#fa7301] focus:ring-opacity-50"
                required
              ></textarea>
            </div>

            <div className="sm:col-span-2 pt-4">
              <ButtonPrimary type="submit" className="w-full sm:w-auto bg-[#fa7301] hover:bg-[#e66a00] px-10 py-4 text-base">
                Send Inquiry
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
