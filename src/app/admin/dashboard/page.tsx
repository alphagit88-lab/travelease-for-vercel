'use client';

import React, { useEffect, useState } from "react";
import { api } from "@/utils/api";
import { useAdminAuth } from "@/context/AdminAuthContext";

const DashboardOverview = () => {
  const { admin } = useAdminAuth();
  const [stats, setStats] = useState({
    totalImages: 0,
    activeImages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await api.get<{ images: any[] }>("/gallery");
      if (response.success && response.data) {
        const images = response.data.images;
        setStats({
          totalImages: images.length,
          activeImages: images.filter(img => img.is_active).length,
        });
      }
      setLoading(false);
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Gallery Images",
      value: stats.totalImages,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fa7301]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      bg: "bg-[#fa7301]/10",
    },
    {
      title: "Active Slider Images",
      value: stats.activeImages,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: "bg-green-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
          Welcome back, {admin?.name}
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-1">
          Here's what's happening with your TravelEase platform today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-[#0b2e4e] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${card.bg}`}>
                {card.icon}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {card.title}
              </h3>
              <p className="text-3xl font-bold text-neutral-900 dark:text-white mt-1">
                {loading ? "..." : card.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-[#0b2e4e] rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 shadow-sm">
          <h3 className="text-lg font-semibold mb-6 dark:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#fa7301]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Actions
          </h3>
          <div className="space-y-4">
            <a
              href="/admin/dashboard/gallery"
              className="flex items-center p-4 rounded-xl border border-neutral-100 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all group"
            >
              <div className="p-2 bg-[#fa7301]/10 rounded-lg mr-4 group-hover:bg-[#fa7301] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fa7301] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <p className="font-medium dark:text-white">Manage Gallery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Add or update home slider images</p>
              </div>
            </a>
            <div className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-700 bg-neutral-50/50 dark:bg-white/5">
              <p className="text-sm font-medium dark:text-white">System Status</p>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Backend API is Online</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0b2e4e] rounded-2xl border border-neutral-200 dark:border-neutral-700 p-8 shadow-sm">
          <h3 className="text-lg font-semibold mb-6 dark:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#fa7301]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Getting Started
          </h3>
          <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
            <p>Welcome to the TravelEase Admin Dashboard. From here you can:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Upload high-resolution images for the home page slider.</li>
              <li>Toggle visibility of images on the live site.</li>
              <li>Maintain the visual identity of the platform.</li>
            </ul>
            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-700">
              <p className="text-xs italic font-light">Need help? Contact the development team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
