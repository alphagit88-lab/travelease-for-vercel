import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import travelHero from "@/images/travelhero2.png";
import ButtonPrimary from "@/shared/ButtonPrimary";

export default function PageAbout() {
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
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl text-center sm:text-left" style={{ fontFamily: "var(--font-playfair), serif" }}>
            About <span className="text-[#fa7301]">Us</span>
          </h1>
          {/* <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            This page follows the same visual direction of the Contact Us page and now displays the full company story.
          </p> */}
        </div>
      </section>

      {/* Content section */}
      <section className="container mx-auto px-4 relative z-10 -mt-10 pb-20 lg:-mt-16 lg:pb-24">
        <div className="rounded-[34px] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold text-[#1581a7] mb-4" style={{ fontFamily: "__Poppins_002541,__Poppins_Fallback_002541" }}>
            Welcome to Travel Ease Holidays
          </h2>

          <p className="prose prose-sm max-w-none text-slate-600 mb-4">
            Step into the world of unforgettable journeys with Travel Ease Holidays (Private) Limited, a premier licensed travel agency certified by The Tourist Board of Sri Lanka. Since our establishment in 2015, we have been curating extraordinary and personalized experiences for travelers visiting the captivating island of Sri Lanka. As the esteemed Inbound arm of Travel Channel (Private) Limited, we go above and beyond ordinary sightseeing to create cherished memories that will stay with you forever.
          </p>
          <p className="prose prose-sm max-w-none text-slate-600 mb-4">
            At Travel Ease Holidays, we understand that travel is more than just ticking off landmarks. It's about immersing yourself in the vibrant tapestry of cultures, creating connections, and embarking on transformative adventures. With our unwavering commitment to excellence, we ensure that each client embarks on an unparalleled journey that will be etched in their hearts.
          </p>
          <p className="prose prose-sm max-w-none text-slate-600 mb-4">
            Our team of experts specializes in tailor‑made travel packages, meticulously crafted to suit various interests. Whether you seek cultural and historical marvels, thrilling wildlife encounters, or tranquil beach getaways, we have the perfect itinerary for you. In addition to our comprehensive tour offerings, we provide a wide range of services including seamless hotel bookings, efficient transportation arrangements, and reliable visa assistance, all designed to elevate your travel experience.
          </p>

          {/* Vision & Mission tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <article className="rounded-[22px] bg-white/70 backdrop-blur-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105">
              <h3 className="flex items-center text-xl font-semibold text-[#fa7301] mb-2">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-[#fa7301]" /> Vision
              </h3>
              <p className="text-sm text-slate-800">
                To be the preferred destination management company in Sri Lanka, recognized globally for delivering authentic, memorable, and sustainable travel experiences.
              </p>
            </article>
            <article className="rounded-[22px] bg-white/70 backdrop-blur-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105">
              <h3 className="flex items-center text-xl font-semibold text-[#fa7301] mb-2">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-[#fa7301]" /> Mission
              </h3>
              <p className="text-sm text-slate-800">
                To provide exceptional travel services that showcase the beauty and heritage of Sri Lanka while ensuring comfort, reliability, and personalized experiences for every traveller through innovation, professionalism, and genuine hospitality.
              </p>
            </article>
          </div>

          {/* New two-column section */}
          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left column - Image */}
              <div>
                <img
                  src="/images/sec-sd5.png"
                  alt="Traveler on train"
                  className="w-full rounded-3xl object-cover h-auto"
                  style={{ minHeight: "400px" }}
                />
              </div>

              {/* Right column - Content */}
              <div>
                <h3 className="text-3xl font-semibold text-[#1581a7] mb-6" style={{ fontFamily: "__Poppins_002541,__Poppins_Fallback_002541" }}>
                  We're Your Perfect Travel Companion
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#fa7301] rounded-full flex items-center justify-center -mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">LICENSED &amp; CERTIFIED</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        As a licensed travel agency, we proudly bear the esteemed certification from the Tourist Board of Sri Lanka, a testament to our unwavering commitment to providing unparalleled experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#fa7301] rounded-full flex items-center justify-center -mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">ONE STOP TRAVEL SOLUTION</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Whether it's finding the ideal hotel that matches your budget, arranging seamless transportation, or providing hassle-free visa assistance, our team is committed to making every aspect of your trip as smooth and enjoyable as can be.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#fa7301] rounded-full flex items-center justify-center -mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">EFFICIENT, RELIABLE AND FRIENDLY SERVICE</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        From start to finish, our dedicated professionals employ their expertise and meticulous attention to detail to curate an unforgettable journey tailored precisely to your need.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#fa7301] rounded-full flex items-center justify-center -mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">QUALITY IS OUR PRIORITY</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        With our extensive personal journeys across the globe, we've honed our skills to curate unforgettable travel packages that will captivate your senses and create lasting memories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 rounded-[30px] bg-slate-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold text-[#1581a7] sm:text-3xl" style={{ fontFamily: "__Poppins_002541,__Poppins_Fallback_002541" }}>
                Continue to the contact page
              </h3>
              {/* <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                When your visitors finish reading about the brand, they can move directly to the enquiry page.
              </p> */}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ButtonPrimary href="/contact" className="bg-[#fa7301] hover:bg-[#0b2e4e]">
                Contact Us
              </ButtonPrimary>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-[#fa7301]">
                Back to home
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
