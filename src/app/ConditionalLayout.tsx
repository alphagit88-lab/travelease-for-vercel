'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import UnderConstructionGuard from "@/components/UnderConstructionGuard";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");
  const [isOpen, setIsOpen] = useState(false);

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <UnderConstructionGuard>
      <SiteHeader />
      {children}
      <FooterNav />
      <Footer />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Collapsible Icons */}
        <div
          className={`flex flex-col items-end gap-4 transition-all duration-300 overflow-visible ${
            isOpen ? "opacity-100 mb-2" : "opacity-0 mb-0 pointer-events-none"
          }`}
        >
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/+94771234567" // Placeholder number
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:-translate-y-1 hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.147 1.44 4.747 1.441 5.483.002 9.944-4.461 9.947-9.945.002-2.656-1.033-5.152-2.91-7.031-1.878-1.878-4.375-2.911-7.031-2.913-5.485 0-9.944 4.459-9.948 9.944-.001 1.764.486 3.286 1.408 4.757l-.995 3.635 3.729-.988zm10.835-7.79c-.299-.15-1.768-.873-2.042-.973-.275-.1-.475-.15-.675.15-.2.3-.775 1.05-.95 1.25-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.495-1.782-1.67-2.083-.175-.301-.019-.463.132-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.519-.175-.009-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.125 4.532.715.311 1.275.496 1.71.635.717.227 1.37.195 1.885.118.574-.086 1.768-.723 2.018-1.423.25-.7.25-1.3 0-1.423-.075-.123-.275-.2-.575-.35z"/>
            </svg>
          </a>

          {/* Phone CTA */}
          <a
            href="tel:+94771234567" // Placeholder number
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b2e4e] text-white shadow-lg transition-all hover:-translate-y-1 hover:scale-105"
            aria-label="Call Us"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          {/* Email CTA */}
          <a
            href="mailto:info@traveleaseholidays.com"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-[#0b2e4e] shadow-lg transition-all hover:-translate-y-1 hover:scale-105"
            aria-label="Email Us"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fa7301] text-white shadow-[0_4px_20px_rgba(250,115,1,0.4)] transition-all hover:-translate-y-1 hover:scale-105"
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>
    </UnderConstructionGuard>
  );
}
