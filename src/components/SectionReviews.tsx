import React from "react";

const REVIEWS = [
  {
    name: "Anjali Perera",
    text: "Everything was smooth from booking to the last day. Great support and lovely local experiences.",
  },
  {
    name: "Michael Turner",
    text: "The itinerary was well balanced and our guide was fantastic. Highly recommended for Sri Lanka tours.",
  },
  {
    name: "Nadeesha Fernando",
    text: "Professional service and comfortable travel throughout. We would definitely book again.",
  },
];

const SectionReviews = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">Review</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">What travelers say about TravelEase Holidays.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <div key={review.name} className="rounded-2xl border border-neutral-200 dark:border-neutral-700 p-5 bg-white dark:bg-neutral-900">
            <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-200">"{review.text}"</p>
            <p className="mt-4 text-sm font-semibold text-[#0B2740] dark:text-white">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionReviews;
