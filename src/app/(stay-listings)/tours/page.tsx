"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/utils/api";
import SectionGridFilterCard from "../SectionGridFilterCard";
import travelHero from "@/images/travelhero2.png";

export default function ToursPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const handleRedirect = async () => {
      if (id) {
        setIsRedirecting(true);
        try {
          // Fetch specific tour by ID/slug to obtain its slug
          const res = await api.get<{ tour: any }>(`/tours/${id}`);
          if (res.success && res.data?.tour) {
            const slug = res.data.tour.slug || id;
            router.replace(`/tour?s=${slug}` as any);
            return;
          }
        } catch (err) {
          console.error("Error in redirecting:", err);
        }
        setIsRedirecting(false);
      }
    };

    handleRedirect();
  }, [id, router]);

  if (id || isRedirecting) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-white">
        <div className="relative flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fa7301]"></div>
          <p className="mt-4 text-neutral-500 font-medium">Redirecting to tour details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f8fa]">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${travelHero.src})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,40,57,0.35),rgba(6,40,57,0.8))]" />

        <div className="container relative flex min-h-[320px] flex-col justify-center py-20 text-white lg:min-h-[360px]">
          <h1
            className="text-4xl font-semibold sm:text-5xl lg:text-6xl text-center sm:text-left"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our <span className="text-[#fa7301]">Tours</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base text-center sm:text-left mx-auto sm:mx-0">
            Explore our wide range of tailored tours, experiences, and holiday packages across Sri Lanka.
          </p>
        </div>
      </section>

      <section className="container relative z-10 -mt-10 pb-20 lg:-mt-16 lg:pb-24">
        <div className="rounded-[34px] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
          <SectionGridFilterCard />
        </div>
      </section>
    </div>
  );
}
