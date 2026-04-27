import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const REVIEWS = [
  {
    name: "Anjali Perera",
    date: "2 months ago",
    text: "Everything was smooth from booking to the last day. Great support and lovely local experiences.",
  },
  {
    name: "Michael Turner",
    date: "4 months ago",
    text: "The itinerary was well balanced and our guide was fantastic. Highly recommended for Sri Lanka tours.",
  },
  {
    name: "Nadeesha Fernando",
    date: "a year ago",
    text: "Professional service and comfortable travel throughout. We would definitely book again.",
  },
];

const SectionReviews = () => {
  return (
    <section>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>Excellent</h2>
          <div className="flex items-center gap-2 mt-2">
             <div className="flex text-[#fa7301]">
               {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}
             </div>
             <p className="text-sm font-medium text-slate-300">Based on 124 reviews</p>
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-5 h-5 ml-2" alt="Google" />
          </div>
        </div>
        <a 
          href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 w-fit"
        >
          Write a review
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <div key={review.name} className="rounded-2xl shadow-xl p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{review.name}</h3>
                    <p className="text-xs text-slate-500">{review.date}</p>
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-5 h-5" alt="Google" />
              </div>
              <div className="flex text-[#fa7301] mb-3">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-4 w-4" />)}
              </div>
              <p className="text-sm leading-6 text-slate-700">"{review.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionReviews;
