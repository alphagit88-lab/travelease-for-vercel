'use client';

import React, { useEffect, useState } from "react";
import { api } from "@/utils/api";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

const HomeSlider = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (loading) return null;
  if (images.length === 0) return (
    <div className="absolute inset-0 z-0 bg-neutral-900" />
  );

  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        {images[currentIndex] && (
          <motion.div
            key={images[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={`${imageBaseUrl}${images[currentIndex].image_url}`}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeSlider;
