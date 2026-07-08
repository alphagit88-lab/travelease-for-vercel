"use client";

import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const REVIEWS = [
  {
    name: "Gopalasamy Manievannan",
    date: "1 year ago",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXxQccxdb-ShAY9dmY9NQe-Advnr6_eDXo3vDeTV-sZrrgKXZ0w=s64-c-rp-mo-ba12-br100",
    text: "Our tour preparations started just under 2 years ago. The Travel agent, Travel Ease Holidays was suggested by my cousin in Sri Lanka. I was put in touch with Thamashi the Travel agent. She turned out to be a wonder woman. She has full knowledge & fair amount of experience on all aspects of tour... Accommodations were fantastic I & my family will give 100% satisfaction & pick Travel Ease Holidays as number one & Thamashi as the Travel agent any time.",
  },
  {
    name: "Tanya Mukhia",
    date: "1 year ago",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUasgsG4U201i75lB8LV3M_W_GQf9PeaCYTsTDTP1zXfc2khHA_=s64-c-rp-mo-br100",
    text: "Overall, good experience with the well-planned trip and location selection covering a vast range of culture and diversity together with an excellent tour guide as part of the tour. Good service!",
  },
  {
    name: "HM B",
    date: "2 years ago",
    avatar: "",
    text: "Good n fast.",
  },
];

const COLLAPSED_HEIGHT = 96; // px — roughly 4 lines of text

const ReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl shadow-xl p-6 bg-white flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {review.avatar ? (
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-lg">
                {review.name[0]}
              </div>
            )}
            <div>
              <h3 className="text-sm font-bold text-slate-900">{review.name}</h3>
              <p className="text-xs text-slate-500">{review.date}</p>
            </div>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            className="w-5 h-5"
            alt="Google"
          />
        </div>

        {/* Stars */}
        <div className="flex text-[#fa7301] mb-3">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </div>

        {/* Review text with expand/collapse */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: expanded ? "600px" : `${COLLAPSED_HEIGHT}px` }}
        >
          <p className="text-sm leading-6 text-slate-700">"{review.text}"</p>
        </div>

        {/* Fade overlay when collapsed */}
        {!expanded && review.text.length > 200 && (
          <div className="h-6 -mt-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </div>

      {/* Read more / Show less toggle */}
      {review.text.length > 200 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-semibold text-[#fa7301] hover:underline self-start focus:outline-none"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

const SectionReviews = () => {
  return (
    <section>
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2
            className="text-3xl md:text-4xl font-semibold text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Excellent
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-[#fa7301]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-300">Based on 3 reviews</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              className="w-5 h-5 ml-2"
              alt="Google"
            />
          </div>
        </div>
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJbTcCJS1Z4joRKwomEmxxsrw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 w-fit"
        >
          Write a review
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </section>
  );
};

export default SectionReviews;
