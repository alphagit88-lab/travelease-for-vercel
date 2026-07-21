"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionScrollReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // We use a longer scroll distance (300vh) to make the pinning effect feel substantial
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scaling logic:
  // Starts smaller and scales up gradually
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.6, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], ["40px", "0px"]);
  const width = useTransform(scrollYProgress, [0, 0.8], ["80%", "100%"]);

  // Image morphs into text EARLIER, while the container is still scaling
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);

  // Text content fades in before the container touches the screen borders
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.45], [80, 0]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.5], [0.85, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full bg-[#0b2e4e]">
      {/* Sticky wrapper that stays "pinned" during the scroll animation */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Animated Container */}
        <motion.div
          style={{
            scale,
            width,
            borderRadius,
            height: useTransform(scrollYProgress, [0, 0.4], ["80vh", "100vh"]),
          }}
          className="relative bg-neutral-900 overflow-hidden shadow-2xl flex items-center justify-center"
        >
          {/* BACKGROUND IMAGE (Hides on scroll) */}
          <motion.div
            style={{ opacity: imageOpacity }}
            className="absolute inset-0 z-10"
          >
            <img
              src="/collection2.gif"
              alt="Sri Lanka Experience"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay to ensure contrast during transition */}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* TEXT CONTENT (Revealed after image hides) */}
          <motion.div
            style={{ opacity: textOpacity, y: textY, scale: textScale }}
            className="relative z-20 flex flex-col items-center justify-center p-6 sm:p-12 text-center max-w-4xl"
          >
            <span className="text-[#fa7301] font-bold tracking-[0.3em] uppercase mb-4 text-sm sm:text-base">
              The Journey Begins Here
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-bold tracking-[0.3em]">
              UNFORGETTABLE <br /> <span>EXPERIENCES</span>
            </h2>
            <div className="w-24 h-1 bg-[#fa7301] mb-8" />
            <p className="text-lg md:text-1xl text-slate-100 leading-relaxed font-light">
              We don&apos;t just book trips; we craft stories. From hidden jungle temples to pristine beaches,
              discover the soul of Sri Lanka with TravelEase expertise.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default SectionScrollReveal;
