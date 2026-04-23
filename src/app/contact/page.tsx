import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";

const contactDetails = [
  {
    title: "Address",
    value: "TravelEase office address goes here, Colombo, Sri Lanka",
    icon: MapPinIcon,
  },
  {
    title: "Phone",
    value: "+94 00 000 0000",
    icon: PhoneIcon,
  },
  {
    title: "Emergency Contact",
    value: "+94 00 000 0000",
    icon: PhoneIcon,
  },
  {
    title: "Email",
    value: "hello@travelease.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Working Hours",
    value: "Monday to Saturday, 8:30 AM - 6:00 PM",
    icon: ClockIcon,
  },
];

export default function PageContact() {
  return (
    <div className="bg-[#f5f8fa]">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,40,57,0.45),rgba(6,40,57,0.82))]" />

        <div className="container relative flex min-h-[320px] flex-col justify-center py-20 text-white lg:min-h-[360px]">
          <h1
            className="text-4xl font-semibold sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Contact <span className="text-[#68c6ea]">Us</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">
            Reach out for trip enquiries, custom itineraries, booking support, or any question about your next travel
            experience with TravelEase.
          </p>
        </div>
      </section>

      <section className="container relative z-10 -mt-10 pb-20 lg:-mt-16 lg:pb-24">
        <div className="grid gap-8 rounded-[34px] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="lg:pr-8">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1581a7]">
              Contact details
            </span>
            <h2
              className="mt-4 max-w-lg text-3xl font-semibold leading-tight text-[#1581a7] sm:text-5xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Didn&apos;t find what you are looking for?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Get in touch with us for personalized travel assistance and expert advice. The layout is ready and the
              details below can be replaced with your final company contact information at any time.
            </p>

            <div className="mt-8 grid gap-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#1581a7]/10 text-[#1581a7]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-900">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-[#f3f6f9] shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
            <div className="bg-[#0f5d86] px-6 py-5 text-center text-lg font-semibold text-white sm:px-8">
              Get in touch
            </div>

            <form className="space-y-4 px-6 py-6 sm:px-8 sm:py-8" action="#" method="post">
              <Input
                name="name"
                type="text"
                placeholder="Your name"
                rounded="rounded-xl"
                sizeClass="h-12 px-4"
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                rounded="rounded-xl"
                sizeClass="h-12 px-4"
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Your number"
                rounded="rounded-xl"
                sizeClass="h-12 px-4"
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
              />
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                rounded="rounded-xl"
                sizeClass="h-12 px-4"
                className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={6}
                className="rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0f5d86] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#0d4f72]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
