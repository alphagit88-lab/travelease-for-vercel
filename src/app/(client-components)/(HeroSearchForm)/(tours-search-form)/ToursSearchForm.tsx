"use client";

import React, { FC } from "react";
import ToursInput from "./ToursInput";
import ToursDatesRangeInput from "./ToursDatesRangeInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ToursSearchForm: FC<{}> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex flex-col md:flex-row rounded-[30px] md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-700">
        <ToursInput className="flex-[1.5]" />
        <ToursDatesRangeInput className="flex-1" />
        
        {/* BOOK NOW BUTTON */}
        <div className="pr-2 xl:pr-4 flex items-center justify-center">
            <button
                type="button"
                className="h-14 md:h-16 w-full md:w-auto px-6 md:px-10 rounded-full bg-[#fa7301] hover:bg-[#e66a01] text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl font-bold uppercase tracking-wider"
            >
                <MagnifyingGlassIcon className="w-6 h-6" />
                <span>Book now</span>
            </button>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default ToursSearchForm;
