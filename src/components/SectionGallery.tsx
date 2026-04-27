"use client";

import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useWindowSize } from "react-use";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";

const GALLERY_IMAGES = [
  { src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Sri Lanka gallery image 1" },
  { src: "https://images.pexels.com/photos/415571/pexels-photo-415571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Sri Lanka gallery image 2" },
  { src: "https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Sri Lanka gallery image 3" },
  { src: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Sri Lanka gallery image 4" },
  { src: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Sri Lanka gallery image 5" },
  { src: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Sri Lanka gallery image 6" },
  { src: "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", alt: "Sri Lanka gallery image 7" },
];

const SectionGallery: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const numberOfItems = 1;

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < GALLERY_IMAGES.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  return (
    <section className="relative">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>Gallery</h2>
        <p className="mt-2 text-sm text-slate-300">
          Moments from Sri Lanka: wildlife, heritage, beaches, and local experiences.
        </p>
      </div>

      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {GALLERY_IMAGES.map((image, indx) => (
                  <motion.li
                    className={`relative inline-block px-2 xl:px-4`}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * -100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * -100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    <div className="overflow-hidden rounded-xl h-[50vh] min-h-[300px] max-h-[600px] w-full">
                      <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>

          {currentIndex ? (
            <PrevBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex - 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 top-1/2 -translate-y-1/2 z-[1] bg-white text-neutral-900 shadow-md hover:bg-neutral-100 border border-neutral-200"
            />
          ) : null}

          {GALLERY_IMAGES.length > currentIndex + numberOfItems ? (
            <NextBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex + 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -right-3 xl:-right-6 top-1/2 -translate-y-1/2 z-[1] bg-white text-neutral-900 shadow-md hover:bg-neutral-100 border border-neutral-200"
            />
          ) : null}
        </div>
      </MotionConfig>
    </section>
  );
};

export default SectionGallery;
