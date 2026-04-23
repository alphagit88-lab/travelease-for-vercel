import React, { FC } from "react";

export interface SectionMoodboardContentProps {
  className?: string;
}

const MOODBOARD_IMAGES = [
  {
    id: "img-1",
    src: "/img1.png",
    alt: "Golden statue moodboard",
    className: "col-start-1 col-span-3 row-start-1 row-span-3 -ml-1 lg:-ml-2",
  },
  {
    id: "img-2",
    src: "/img2.png",
    alt: "Elephant and monk moodboard",
    className: "col-start-6 col-span-2 row-start-1 row-span-3 justify-self-end w-[calc(100%+30px)] translate-x-[60px]",
  },
  {
    id: "img-3",
    src: "/img3.png",
    alt: "Tea hills moodboard",
    className: "col-start-8 col-span-5 row-start-1 row-span-3 justify-self-end w-[calc(100%-60px)]",
  },
  {
    id: "img-4",
    src: "/img4.png",
    alt: "Rainforest moodboard",
    className: "col-start-4 col-span-2 row-start-4 row-span-3 justify-self-end w-[calc(100%+30px)] translate-x-[30px]",
  },
  {
    id: "img-5",
    src: "/img5.png",
    alt: "Leaves moodboard",
    className: "col-start-8 col-span-3 row-start-4 row-span-3 justify-self-end w-[calc(100%-60px)]",
  },
  {
    id: "img-6",
    src: "/img6.png",
    alt: "Coconut moodboard",
    className: "col-start-11 col-span-2 row-start-4 row-span-3",
  },
];

const SectionMoodboardContent: FC<SectionMoodboardContentProps> = ({ className = "" }) => {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: "1331 / 651",
        backgroundImage: "url('/sec-2.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(8, 26, 47, 0.35) 0%, rgba(8, 26, 47, 0.52) 45%, rgba(8, 26, 47, 0.7) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto h-full w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5">
        {/* Desktop/tablet collage */}
        <div className="hidden sm:grid grid-cols-12 grid-rows-6 gap-2 md:gap-3 lg:gap-3.5 h-[430px] md:h-[460px] lg:h-[500px] content-start">
          {MOODBOARD_IMAGES.map((image) => (
            <div key={image.id} className={`${image.className} overflow-hidden`}>
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        {/* Mobile stacked collage */}
        <div className="sm:hidden grid grid-cols-2 gap-3 h-full content-start">
          {MOODBOARD_IMAGES.map((image) => (
            <div key={image.id} className="overflow-hidden aspect-[4/5]">
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionMoodboardContent;
