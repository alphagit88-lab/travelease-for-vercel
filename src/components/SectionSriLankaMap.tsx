import React from "react";

const ATTRACTIONS = [
  "Kandy Perahera",
  "Whale Watching",
  "Yala Safari",
  "Sigiriya",
  "Ella",
  "Galle Fort",
];

const SectionSriLankaMap = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>Sri Lankan Map with Attractions</h2>
        <p className="mt-2 text-sm text-slate-300">Discover key destinations and popular experiences across the island.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700">
        <iframe
          title="Sri Lanka map"
          src="https://maps.google.com/maps?q=Sri%20Lanka&t=&z=7&ie=UTF8&iwloc=&output=embed"
          className="h-[340px] md:h-[420px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {ATTRACTIONS.map((item) => (
          <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-[#fa7301] transition-colors cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SectionSriLankaMap;
