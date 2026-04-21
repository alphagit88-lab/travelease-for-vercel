import React, { FC } from "react";

export interface SectionOurFeaturesProps {
  className?: string;
}

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9 lg:h-10 lg:w-10 text-[#E59B27] flex-shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
  </svg>
);

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative overflow-hidden ${className}`}
      data-nc-id="SectionOurFeatures"
      style={{
        aspectRatio: "1390 / 859",
        backgroundImage: "url('/sec-1.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-10">
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          <div className="max-w-[460px] sm:max-w-[500px] sm:ml-[8%] sm:-translate-y-[4px] md:ml-[12%] md:-translate-y-[8px] lg:ml-[14%] lg:-translate-y-[1.45vw]">
            <div className="flex items-center gap-3">
              <PinIcon />
              <h3 className="text-white text-[1.55rem] sm:text-[1.65rem] md:text-[1.75rem] lg:text-[2rem] font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Goal
              </h3>
            </div>
            <div className="pl-9 sm:pl-10 md:pl-11 lg:pl-[3.25rem] mt-2 sm:mt-2.5 md:mt-3">
              <p className="indent-3 sm:indent-4 text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.4] font-light text-[#D2D8DE]">
                The goal of this project was to create a selling landing page that will make customers want to plunge
                into the atmosphere of the island and see the amazing hidden in the jungle and on the shore with their
                own eyes.
              </p>
              <p className="indent-3 sm:indent-4 mt-1 text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.4] font-light text-[#D2D8DE]">
                And all this at a reasonable cost and under the careful guidance of experienced guides.
              </p>
            </div>
          </div>

          <div className="max-w-[460px] sm:max-w-[500px] sm:ml-[40%] sm:translate-y-[8px] md:ml-[42%] md:translate-y-[18px] lg:ml-[calc(50%-2.16vw)] lg:translate-y-[2.52vw]">
            <div className="flex items-center gap-3">
              <PinIcon />
              <h3 className="text-white text-[1.55rem] sm:text-[1.65rem] md:text-[1.75rem] lg:text-[2rem] font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Idea
              </h3>
            </div>
            <div className="pl-9 sm:pl-10 md:pl-11 lg:pl-[3.25rem] mt-2 sm:mt-2.5 md:mt-3">
              <p className="indent-3 sm:indent-4 text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.4] font-light text-[#D2D8DE]">
                To create the right impression, deep green hues and bright gold accents were chosen.
              </p>
              <p className="indent-3 sm:indent-4 mt-1 text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.4] font-light text-[#D2D8DE]">
                The site is designed in a minimalistic style that literally immerses users deep into the island and
                shows all the possibilities and benefits of the chosen trips.
              </p>
            </div>
          </div>

          <div className="max-w-[460px] sm:max-w-[500px] sm:ml-[17%] sm:translate-y-[8px] md:ml-[20%] md:translate-y-[14px] lg:ml-[24%] lg:translate-y-[2.23vw]">
            <div className="flex items-center gap-3">
              <PinIcon />
              <h3 className="text-white text-[1.55rem] sm:text-[1.65rem] md:text-[1.75rem] lg:text-[2rem] font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Target audience
              </h3>
            </div>
            <div className="pl-9 sm:pl-10 md:pl-11 lg:pl-[3.25rem] mt-2 sm:mt-2.5 md:mt-3">
              <p className="indent-3 sm:indent-4 text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.4] font-light text-[#D2D8DE]">
                Active travelers (men and women) aged 21 to 50+ who value comfort and safety, are inquisitive and seek
                new experiences.
              </p>
            </div>
          </div>

          <div className="max-w-[460px] sm:max-w-[500px] sm:ml-[34%] sm:translate-y-[30px] md:ml-[36%] md:translate-y-[70px] lg:ml-[44%] lg:translate-y-[9.64vw]">
            <div className="flex items-center gap-3">
              <PinIcon />
              <h3 className="text-white text-[1.55rem] sm:text-[1.65rem] md:text-[1.75rem] lg:text-[2rem] font-semibold" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Moodboard
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
