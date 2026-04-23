"use client";

import Link from "next/link";
import React from "react";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/shared/Logo";
import { Route } from "@/routers/types";

const contactCards = [
  {
    title: "Email",
    value: "info@traveleaseholidays.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Contact",
    value: "+94 11 2695454",
    icon: PhoneIcon,
  },
  {
    title: "WhatsApp",
    value: "+94 777347542",
    icon: ChatBubbleLeftRightIcon,
  },
];

const quickLinks: { href: Route<string>; label: string }[] = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Travel Stories" },
  { href: "/checkout", label: "Online Payment" },
  { href: "/login", label: "Log In" },
];

const socials = [
  { label: "Instagram", href: "#", icon: "lab la-instagram" },
  { label: "Twitter", href: "#", icon: "lab la-twitter" },
  { label: "Facebook", href: "#", icon: "lab la-facebook-f" },
  { label: "LinkedIn", href: "#", icon: "lab la-linkedin-in" },
  { label: "YouTube", href: "#", icon: "lab la-youtube" },
];

const Footer: React.FC = () => {
  return (
    <footer className="nc-Footer relative overflow-hidden bg-[#072437] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(21,129,167,0.18),_transparent_34%)]" />

      <div className="container relative py-16 lg:py-20">
        <div className="grid gap-4 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 lg:grid-cols-3 lg:gap-0 lg:p-0">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 p-4 lg:p-6 ${
                  index < contactCards.length - 1 ? "lg:border-r lg:border-white/10" : ""
                }`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[18px] bg-[#0f5d86] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-200">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.75fr_1.2fr]">
          <div>
            <Logo className="w-28" />
            <h2
              className="mt-5 text-3xl font-semibold text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              TravelEase Holidays
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Your journey, our expertise. From holiday planning and custom tours to travel support and smooth booking
              guidance, TravelEase Holidays helps you explore with confidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f3b57] text-lg text-white transition hover:bg-[#1581a7]"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Quick Links
            </h3>
            <div className="mt-6 flex flex-col gap-4 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Tour Inquiries
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
              Send us your inquiry for other tours, special holiday plans, or customized travel ideas and our team will
              get back to you.
            </p>

            <form className="mt-6 space-y-3" action="#" method="post">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="block h-12 w-full rounded-[18px] border border-white/15 bg-[#0a2d44] px-4 text-sm text-white placeholder:text-slate-400 focus:border-[#4db9df] focus:outline-none"
              />
              <textarea
                name="inquiry"
                rows={4}
                placeholder="Tell us about the tour you need"
                className="block w-full rounded-[18px] border border-white/15 bg-[#0a2d44] px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#4db9df] focus:outline-none"
              />

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-[#0f5d86] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1581a7]"
                >
                  <PaperAirplaneIcon className="h-4 w-4" />
                  Send Inquiry
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[18px] border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Open Contact Page
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 TravelEase Holidays. All rights reserved.</p>
            <p className="font-medium text-slate-100">Brought to you by Travel Channel</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
