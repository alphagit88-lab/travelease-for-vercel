import React from "react";
import Link from "next/link";
import ButtonPrimary from "@/shared/ButtonPrimary";
import travelHero from "@/images/travelhero2.png";
import { Route } from "@/routers/types";

const coreServices = [
  {
    id: 1,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Tour Packages",
    description: "Discover Sri Lanka with our carefully curated tour packages! From cultural heritage tours and wildlife adventures to beach holidays and mountain escapes, we offer a wide range of pre-designed packages that showcase the best of the island. Our experienced team can also create completely customized itineraries tailored to your interests, budget, and travel style.",
    color: "bg-[#fa7301]"
  },
  {
    id: 2,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: "Hotel Bookings",
    description: "Let us handle your accommodation needs! We have partnerships with a wide range of hotels, resorts, villas, and boutique properties across Sri Lanka, from budget-friendly options to luxury five-star establishments. Our team will help you find the perfect place to stay that matches your preferences and budget.",
    color: "bg-[#1581a7]"
  },
  {
    id: 3,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
      </svg>
    ),
    title: "Transfers",
    description: "Enjoy hassle-free transportation during your Sri Lankan holiday! We provide reliable airport pick-up and drop-off services, as well as comfortable private transfers between destinations. Our fleet includes a variety of vehicles, from cars and vans to coaches, all operated by experienced and professional drivers.",
    color: "bg-[#0b2e4e]"
  },
  {
    id: 4,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    title: "MICE",
    description: "Plan your corporate events, meetings, conferences, and incentive trips with us! Sri Lanka is an excellent destination for MICE tourism, offering world-class venues, stunning locations, and exceptional service. Our experienced team will handle all aspects of your event, from venue selection to activities.",
    color: "bg-[#fa7301]"
  },
  {
    id: 5,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "ETA Visa Assistance",
    description: "Need help with your Sri Lankan visa? We provide ETA (Electronic Travel Authorization) visa assistance to make the process smooth and hassle-free for you. Our team will guide you through the application process, ensure all documents are in order, and help you obtain your visa quickly and efficiently.",
    color: "bg-[#1581a7]"
  }
];

const whyChooseUs = [
  {
    id: 1,
    title: "Licensed & Certified",
    description: "As a licensed travel agency, we proudly bear the esteemed certification from the Tourist Board of Sri Lanka.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "One Stop Travel Solution",
    description: "Whether it's finding the ideal hotel, arranging transportation, or visa assistance, we handle everything.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Efficient & Reliable",
    description: "From start to finish, our dedicated professionals use their expertise to curate unforgettable journeys.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Quality First",
    description: "With extensive personal journeys, we know how to create travel packages that captivate your senses.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
      </svg>
    )
  }
];

export default function PageServices() {
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
            Our Services
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            From tailor-made tours to seamless transfers, we handle every detail of your Sri Lankan adventure.
          </p>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <section className="container mx-auto px-4 relative z-10 -mt-10 pb-16 lg:-mt-16 lg:pb-20">
        <div className="rounded-[34px] bg-white/70 backdrop-blur-md p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10 space-y-16">
          {/* Section 1: Our Core Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#1581a7]" style={{ fontFamily: "__Poppins_002541,__Poppins_Fallback_002541" }}>
                Our Core Services
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                TravelEase Holidays provides a comprehensive range of travel services designed to make your Sri Lankan journey seamless and unforgettable.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreServices.map((service) => (
                <div key={service.id} className="group rounded-[28px] bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`${service.color} w-16 h-16 rounded-[18px] flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Why Choose Us */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#1581a7]" style={{ fontFamily: "__Poppins_002541,__Poppins_Fallback_002541" }}>
                Why Choose TravelEase Holidays?
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Discover what makes us the perfect partner for your Sri Lankan adventure.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <div key={item.id} className="rounded-[28px] bg-white p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#fa7301]/10 rounded-[18px] flex items-center justify-center text-[#fa7301] mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Ready to Get Started */}
          <div>
            <div className="rounded-[34px] bg-gradient-to-r from-[#1581a7] to-[#0b2e4e] p-8 sm:p-10 lg:p-12 text-center">
              <h2 className="text-3xl font-semibold text-white mb-4" style={{ fontFamily: "__Poppins_002541,__Poppins_Fallback_002541" }}>
                Ready to Get Started?
              </h2>
              <p className="text-slate-200 max-w-2xl mx-auto mb-8">
                Contact us today to discuss your travel plans and let us create a customized experience just for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonPrimary href="/contact" className="bg-[#fa7301] hover:bg-[#e66a00]">
                  Contact Us Now
                </ButtonPrimary>
                <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Explore Our Tours
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
