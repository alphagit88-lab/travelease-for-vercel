import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import travelHero from "@/images/travelhero2.png";
import ButtonPrimary from "@/shared/ButtonPrimary";

const contentBlocks = [
  {
    title: "Company Story",
    text: "Replace this section with your company background, journey, and the travel experiences that define your brand.",
  },
  {
    title: "Mission And Vision",
    text: "Use this area for your mission, long-term vision, and the values that guide how you serve travelers.",
  },
  {
    title: "Why Choose Us",
    text: "Add the key reasons people trust your team, such as local knowledge, curated packages, and dependable support.",
  },
];

const highlights = [
  "Ready for your final About Us content",
  "Matches the updated Contact Us page style",
  "Uses the requested travelhero2.png background",
];

const suggestedAreas = [
  "Founder message or brand introduction",
  "Service strengths, trust points, and milestones",
  "Team profile, expertise, or destination knowledge",
];

export default function PageAbout() {
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
            About <span className="text-[#68c6ea]">Us</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            This page now follows the same visual direction as the Contact Us page and is ready for your final company
            content when you share it.
          </p>
        </div>
      </section>

      <section className="container relative z-10 -mt-10 pb-20 lg:-mt-16 lg:pb-24">
        <div className="rounded-[34px] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="lg:pr-8">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1581a7]">Content ready</span>
              <h2
                className="mt-4 max-w-lg text-3xl font-semibold leading-tight text-[#1581a7] sm:text-5xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                We will place your About Us content here
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                The layout is set up so your team can add the real story, mission, service strengths, and business
                details later without changing the overall page design.
              </p>
            </div>

            <div className="rounded-[30px] bg-[#0f5d86] p-6 text-white shadow-[0_22px_60px_rgba(15,23,42,0.12)] sm:p-8">
              <div className="text-lg font-semibold">About page notes</div>
              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#c9ecfb]" />
                    <p className="text-sm leading-7 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {contentBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex rounded-full bg-[#1581a7]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1581a7]">
                  Placeholder
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{block.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{block.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-dashed border-slate-300 bg-white p-6 sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Suggested sections</span>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {suggestedAreas.map((item) => (
                <div key={item} className="rounded-[22px] bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[30px] bg-slate-50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3
                className="text-2xl font-semibold text-slate-900 sm:text-3xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Continue to the contact page
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                When your visitors finish reading about the brand, they can move directly to the enquiry page.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <ButtonPrimary href="/contact" className="bg-[#0f5d86] hover:bg-[#0d4f72]">
                Contact Us
              </ButtonPrimary>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                Back to home
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
