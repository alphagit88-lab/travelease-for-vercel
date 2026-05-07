'use client';

import React, { useEffect, useState } from "react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Route } from "@/routers/types";
import Logo, { logoAdImg } from "@/shared/Logo";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { admin, loading, logout } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && !admin) {
      router.push("/admin/login" as Route<string>);
    }
  }, [admin, loading, router]);

  if (loading || (!admin && pathname !== "/admin/login")) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0b2e4e]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fa7301]"></div>
      </div>
    );
  }

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard" as Route<string> },
    { name: "Gallery Slider", href: "/admin/dashboard/gallery" as Route<string> },
  ];

  return (
    <div className="flex min-h-screen bg-neutral-100 dark:bg-[#08223a]">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0b2e4e] transform transition-transform duration-300 lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col border-r border-white/10">
          <div className="py-2 px-6 border-b border-white/10 flex items-center justify-center relative">
            <div className="bg-white p-1.5 rounded-xl shadow-sm flex items-center justify-center">
              <Logo className="w-28" img={logoAdImg} imgLight={logoAdImg} />
            </div>
            <button className="lg:hidden text-white absolute right-4" onClick={() => setIsMobileMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all group ${pathname === item.href
                    ? "bg-[#fa7301] text-white shadow-lg shadow-[#fa7301]/20"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <span className="mr-3">
                  {item.name === "Dashboard" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {item.name === "Gallery Slider" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-3 mb-4 px-2">
              <div className="w-10 h-10 rounded-full bg-[#fa7301]/20 flex items-center justify-center text-[#fa7301] font-bold">
                {admin?.name?.[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{admin?.name}</p>
                <p className="text-xs text-neutral-400 truncate">Administrator</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white dark:bg-[#0b2e4e] border-b border-neutral-200 dark:border-neutral-700 h-14 flex items-center justify-between px-4 lg:px-8 shadow-sm">
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 mr-2 text-neutral-600 dark:text-neutral-400"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-white truncate">
              {navItems.find(i => i.href === pathname)?.name || "Dashboard"}
            </h2>
          </div>
          <div className="flex items-center space-x-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="hidden md:inline">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
