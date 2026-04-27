import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import travelHero from "@/images/travelhero2.png";

export interface ListingStayMapPageProps {}

const ListingStayMapPage: FC<ListingStayMapPageProps> = ({}) => {
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
            className="text-4xl font-semibold sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our <span className="text-[#fa7301]">Tours</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
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
};

export default ListingStayMapPage;
