"use client";

import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useWindowSize } from "react-use";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { api } from "@/utils/api";
import { variants } from "@/utils/animationVariants";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

const SectionGallery: FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);
  const numberOfItems = 1;

  useEffect(() => {
    const fetchImages = async () => {
      const response = await api.get<{ images: GalleryImage[] }>("/gallery?active=true");
      if (response.success && response.data && response.data.images.length > 0) {
        setImages(response.data.images);
      }
      setLoading(false);
    };
    fetchImages();
  }, []);

  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

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
      if (currentIndex < images.length - 1) {
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

  if (loading) return null;
  if (images.length === 0) return null;

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
                {images.map((image, indx) => (
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
                    key={image.id}
                    style={{
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    <div className="overflow-hidden rounded-xl h-[50vh] min-h-[300px] max-h-[600px] w-full">
                      <img 
                        src={`${imageBaseUrl}${image.image_url}`} 
                        alt={image.title} 
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                      />
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

          {images.length > currentIndex + numberOfItems ? (
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
