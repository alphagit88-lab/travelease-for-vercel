'use client';

import React, { useEffect, useState } from "react";
import StayCard2 from "@/components/StayCardAlternate";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import { api } from "@/utils/api";
import { Route } from "@/routers/types";

const getImageUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  const imageBaseUrl =
    process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ||
    "http://localhost:5000";
  return `${imageBaseUrl}${url}`;
};

// Default author & category objects to satisfy StayDataType shape
const DEFAULT_AUTHOR = {
  id: "travelease",
  firstName: "TravelEase",
  lastName: "",
  displayName: "TravelEase",
  avatar: "",
  count: 0,
  desc: "Your trusted travel partner",
  jobName: "Tour Operator",
  href: "/" as Route<string>,
};

const DEFAULT_CATEGORY = {
  id: "tour",
  name: "Tour Package",
  href: "/listing-stay-map" as Route<string>,
  taxonomy: "category" as const,
  count: 0,
};

interface BackendTour {
  id: string;
  title: string;
  slug?: string;
  duration: string;
  overview: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  reviewStart: number;
  reviewCount: number;
  galleryImgs: string[];
  map: { lat: number; lng: number };
  is_active: boolean;
}

/**
 * Maps a backend tour object into the StayDataType shape
 * expected by StayCard2, without changing the card UI.
 */
function mapTourToStayData(tour: BackendTour): StayDataType {
  const galleryImgs = (tour.galleryImgs || []).map(getImageUrl);

  return {
    id: tour.id,
    author: DEFAULT_AUTHOR,
    date: new Date().toISOString(),
    href: `/tour?s=${tour.slug || tour.id}` as Route<string>,
    title: tour.title,
    featuredImage: galleryImgs[0] || "",
    commentCount: 0,
    viewCount: 0,
    address: tour.address || "Sri Lanka",
    reviewStart: tour.reviewStart || 5.0,
    reviewCount: tour.reviewCount || 0,
    like: false,
    galleryImgs,
    price: tour.price || "$0",
    listingCategory: DEFAULT_CATEGORY,
    maxGuests: tour.maxGuests || 6,
    bedrooms: tour.bedrooms || 0,
    bathrooms: tour.bathrooms || 0,
    saleOff: null,
    isAds: null,
    map: tour.map || { lat: 6.9271, lng: 79.8612 },
  };
}

const FeaturedToursSection = () => {
  const [tours, setTours] = useState<StayDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await api.get<{ tours: BackendTour[] }>("/tours?active=true");
        if (res.success && res.data?.tours && res.data.tours.length > 0) {
          const mapped = res.data.tours.map(mapTourToStayData);
          setTours(mapped);
          setError(false);
        } else {
          setTours([]);
          setError(true);
        }
      } catch {
        setTours([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 dark">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-2xl bg-white/5 h-[340px]"
          />
        ))}
      </div>
    );
  }

  if (error || tours.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 rounded-3xl bg-white/5 border border-white/10 text-center w-full">
        <svg className="w-12 h-12 text-neutral-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="text-neutral-400 font-medium max-w-md">
          Featured tours are currently unavailable. Please make sure the backend server is running.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-5 py-2 bg-[#fa7301] hover:bg-[#e66a01] text-white text-sm font-semibold rounded-xl transition-all shadow-md"
        >
          Try reloading
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 dark">
      {tours.slice(0, 8).map((stay) => (
        <StayCard2 key={stay.id} data={stay} />
      ))}
    </div>
  );
};

export default FeaturedToursSection;
