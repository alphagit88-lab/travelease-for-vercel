import React from "react";

const GALLERY_IMAGES = [
  { src: "/img1.png", alt: "Sri Lanka gallery image 1" },
  { src: "/img2.png", alt: "Sri Lanka gallery image 2" },
  { src: "/img3.png", alt: "Sri Lanka gallery image 3" },
  { src: "/img4.png", alt: "Sri Lanka gallery image 4" },
  { src: "/img5.png", alt: "Sri Lanka gallery image 5" },
  { src: "/img6.png", alt: "Sri Lanka gallery image 6" },
];

const SectionGallery = () => {
  return (
    <section className="relative">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">Gallery</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Moments from Sri Lanka: wildlife, heritage, beaches, and local experiences.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {GALLERY_IMAGES.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-xl">
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionGallery;
