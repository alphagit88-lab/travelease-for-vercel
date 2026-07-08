'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/utils/api';

interface Settings {
  underConstruction: boolean;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  /* ── Fetch current settings ── */
  useEffect(() => {
    const fetchSettings = async () => {
      const res = await api.get<{ settings: Settings }>('/admin/settings');
      if (res.success && res.data) {
        setSettings(res.data.settings);
      } else {
        setSettings({ underConstruction: false });
      }
      setLoading(false);
    };
    fetchSettings();
  }, []);

  /* ── Toast auto-dismiss ── */
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  /* ── Toggle handler ── */
  const handleToggle = async (value: boolean) => {
    if (saving || settings === null) return;
    setSaving(true);
    const res = await api.put<{ underConstruction: boolean }>('/admin/settings', {
      underConstruction: value,
    });
    if (res.success) {
      setSettings((prev) => ({ ...prev!, underConstruction: value }));
      setToast({
        type: 'success',
        message: value
          ? '🚧 Under Construction mode is now ENABLED. The site is hidden from visitors.'
          : '✅ Under Construction mode is DISABLED. The site is live!',
      });
    } else {
      setToast({ type: 'error', message: res.message || 'Failed to update settings.' });
    }
    setSaving(false);
  };

  return (
    <div className="space-y-8">
      {/* ── Page Header ── */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">Site Settings</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-1">
          Manage global site configuration and maintenance modes.
        </p>
      </div>

      {/* ── Toast notification ── */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl text-sm font-medium transition-all duration-300 max-w-sm ${
            toast.type === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          {toast.message}
          <button onClick={() => setToast(null)} className="ml-2 opacity-70 hover:opacity-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ── Under Construction Card ── */}
      <div className="bg-white dark:bg-[#0b2e4e] rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-sm overflow-hidden">
        {/* Card header */}
        <div className="px-8 py-6 border-b border-neutral-100 dark:border-neutral-700 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-500/10">
            <svg className="w-6 h-6 text-[#fa7301]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">Maintenance &amp; Visibility</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Control how the public-facing website appears to visitors</p>
          </div>
        </div>

        {/* Card body */}
        <div className="px-8 py-6">
          {loading ? (
            <div className="flex items-center gap-3 py-4">
              <div className="w-5 h-5 border-2 border-[#fa7301] border-t-transparent rounded-full animate-spin" />
              <span className="text-neutral-400 text-sm">Loading settings…</span>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              {/* Description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base font-semibold text-neutral-800 dark:text-white">
                    Under Construction Mode
                  </span>
                  {/* Status badge */}
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    settings?.underConstruction
                      ? 'bg-orange-500/15 text-orange-400'
                      : 'bg-green-500/15 text-green-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      settings?.underConstruction ? 'bg-orange-400 animate-pulse' : 'bg-green-400'
                    }`} />
                    {settings?.underConstruction ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
                  When <strong className="text-neutral-600 dark:text-neutral-300">enabled</strong>, all public-facing pages are replaced with a branded
                  "Under Construction" page showing your contact details. Admin dashboard access is
                  <strong className="text-neutral-600 dark:text-neutral-300"> never affected</strong>.
                </p>

                {/* What visitors see */}
                {settings?.underConstruction && (
                  <div className="mt-4 p-4 rounded-xl bg-orange-500/8 border border-orange-500/20">
                    <p className="text-xs text-orange-300 font-medium flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Your website is currently hidden. Visitors see the Under Construction page with your contact information.
                    </p>
                  </div>
                )}
              </div>

              {/* Toggle switch */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <button
                  id="under-construction-toggle"
                  onClick={() => handleToggle(!settings?.underConstruction)}
                  disabled={saving}
                  aria-pressed={settings?.underConstruction}
                  aria-label="Toggle Under Construction mode"
                  className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fa7301] disabled:opacity-60 disabled:cursor-not-allowed ${
                    settings?.underConstruction
                      ? 'bg-[#fa7301] shadow-[0_0_20px_rgba(250,115,1,0.4)]'
                      : 'bg-neutral-200 dark:bg-neutral-700'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                      settings?.underConstruction ? 'left-9' : 'left-1'
                    }`}
                  >
                    {saving && (
                      <span className="w-3 h-3 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
                    )}
                  </span>
                </button>
                <span className="text-xs text-neutral-400 font-medium">
                  {settings?.underConstruction ? 'Turn OFF' : 'Turn ON'}
                </span>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
