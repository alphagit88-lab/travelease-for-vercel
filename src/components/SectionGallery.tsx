"use client";

import React, { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { api } from "@/utils/api";

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

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  if (loading) return null;
  if (images.length === 0) return null;

  return (
    <section 
      className="relative w-[100vw] ml-[calc(50%-50vw)] py-16 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/banner-fullwidth.png')"
      }}
    >
      <div className="absolute inset-0 bg-[#0b2e4e]/80 z-0"></div>
      
      <style>{`
        .gallery-carousel {
          --slide-width: 95vw;
        }
        @media (min-width: 768px) {
          .gallery-carousel {
            --slide-width: 85vw;
          }
        }
        @media (min-width: 1024px) {
          .gallery-carousel {
            --slide-width: 80vw;
          }
        }
      `}</style>

      <div className="container mb-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
          Gallery
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
          Moments from Sri Lanka: wildlife, heritage, beaches, and local experiences.
        </p>
      </div>

      <div className="relative w-full gallery-carousel h-[50vh] md:h-[65vh] lg:h-[75vh] max-h-[700px]" {...handlers}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                x: dir > 0 ? "100%" : "-100%",
                opacity: 0,
              }),
              center: {
                zIndex: 1,
                x: "-50%",
                opacity: 1,
              },
              exit: (dir: number) => ({
                zIndex: 0,
                x: dir < 0 ? "50%" : "-150%",
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute top-0 h-full"
            style={{ left: "50%", width: "var(--slide-width)" }}
          >
            <div className="relative w-full h-full overflow-hidden shadow-2xl bg-neutral-900 group">
              <img
                src={`${imageBaseUrl}${images[currentIndex].image_url}`}
                alt={images[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-12">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  {images[currentIndex].title}
                </h3>
                {images[currentIndex].description && (
                  <p className="text-sm md:text-lg text-neutral-200 line-clamp-3 max-w-3xl">
                    {images[currentIndex].description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows inside the main image's boundaries */}
        <div 
          className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-start pl-4 md:pl-8"
          style={{ left: "calc(50% - (var(--slide-width) / 2))" }}
        >
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 md:w-14 md:h-14 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-all pointer-events-auto backdrop-blur-sm shadow-xl ${currentIndex === 0 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-8 md:h-8" />
          </button>
        </div>
        
        <div 
          className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-end pr-4 md:pr-8"
          style={{ right: "calc(50% - (var(--slide-width) / 2))" }}
        >
          <button
            onClick={handleNext}
            disabled={currentIndex === images.length - 1}
            className={`w-10 h-10 md:w-14 md:h-14 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-all pointer-events-auto backdrop-blur-sm shadow-xl ${currentIndex === images.length - 1 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          >
            <ChevronRightIcon className="w-5 h-5 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionGallery;
