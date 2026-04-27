import React from "react";

const REASONS = [
  "Experienced local guides and carefully planned itineraries",
  "Flexible packages for families, couples, and adventure travelers",
  "Transparent pricing with support before and during the tour",
  "Trusted Sri Lanka travel partner for memorable experiences",
];

const SectionWhyChooseUs = () => {
  return (
    <section className="rounded-2xl bg-[#0B2740] p-6 md:p-8 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Us</h2>
      <p className="mt-2 text-sm text-white/80">TravelEase Holidays combines local knowledge with reliable service.</p>

      <div className="mt-6 grid gap-3">
        {REASONS.map((reason) => (
          <div key={reason} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-[#fa7301] flex-shrink-0" />
            <p className="text-sm text-white/90">{reason}</p>
          </div>
        ))}
      </div>

      <a
        href="/about"
        className="mt-7 inline-flex items-center rounded-xl bg-[#fa7301] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
      >
        Learn More About Us
      </a>
    </section>
  );
};

export default SectionWhyChooseUs;
