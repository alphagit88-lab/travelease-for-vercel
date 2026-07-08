'use client';

import React, { useEffect, useState, useCallback } from 'react';
import logoAdImg from '@/images/logo-ad.png';


interface Settings {
  underConstruction: boolean;
}

export default function UnderConstructionGuard({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSettings = useCallback(async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const apiUrl = baseUrl.endsWith('/api') ? baseUrl : `${baseUrl}/api`;
      const res = await fetch(`${apiUrl}/admin/settings`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        setSettings(json?.data?.settings ?? { underConstruction: false });
      } else {
        setSettings({ underConstruction: false });
      }
    } catch {
      setSettings({ underConstruction: false });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  if (loading) {
    // Tiny transparent loading state — doesn't flash the user
    return <div style={{ minHeight: '100vh' }} />;
  }

  if (settings?.underConstruction) {
    return <UnderConstructionPage />;
  }

  return <>{children}</>;
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Under Construction Page                                                    */
/* ─────────────────────────────────────────────────────────────────────────── */

function UnderConstructionPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Hotline',
      value: '+94 11 269 5454',
      href: 'tel:+94112695454',
      gradientFrom: '#fa7301',
      gradientTo: '#f59e0b',
      glowColor: 'rgba(250,115,1,0.35)',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'inbound@traveleaseholidays.lk',
      href: 'mailto:inbound@traveleaseholidays.lk',
      gradientFrom: '#0ea5e9',
      gradientTo: '#6366f1',
      glowColor: 'rgba(14,165,233,0.35)',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Address',
      value: 'No. 2 1/1, Maradana Road,\nColombo - 00800, Sri Lanka',
      href: 'https://maps.google.com/?q=No.+2+1/1+Maradana+Road+Colombo+Sri+Lanka',
      gradientFrom: '#10b981',
      gradientTo: '#0ea5e9',
      glowColor: 'rgba(16,185,129,0.35)',
    },
  ];

  // Floating SVG particle positions
  const particles = [
    { icon: 'plane', top: '10%', left: '5%', size: 32, opacity: 0.12, rotation: '45deg', delay: '0s' },
    { icon: 'globe', top: '20%', right: '8%', size: 48, opacity: 0.10, rotation: '0deg', delay: '1s' },
    { icon: 'compass', top: '65%', left: '3%', size: 40, opacity: 0.08, rotation: '-20deg', delay: '2s' },
    { icon: 'plane', top: '80%', right: '5%', size: 28, opacity: 0.12, rotation: '120deg', delay: '0.5s' },
    { icon: 'globe', top: '45%', left: '8%', size: 36, opacity: 0.07, rotation: '30deg', delay: '1.5s' },
    { icon: 'compass', top: '30%', right: '12%', size: 44, opacity: 0.09, rotation: '10deg', delay: '2.5s' },
    { icon: 'plane', top: '55%', right: '20%', size: 24, opacity: 0.10, rotation: '200deg', delay: '3s' },
    { icon: 'globe', top: '88%', left: '20%', size: 52, opacity: 0.06, rotation: '0deg', delay: '0.8s' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #030c1a 0%, #071e38 30%, #0b2e4e 60%, #0a1f35 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'inherit',
      }}
    >
      <style>{`
        @keyframes uc-float {
          0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
          50% { transform: translateY(-18px) rotate(var(--rot)); }
        }
        @keyframes uc-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes uc-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes uc-spin-rev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes uc-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes uc-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes uc-wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.4); }
        }
        @keyframes uc-glow-pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(250,115,1,0.3), 0 0 80px rgba(250,115,1,0.1); }
          50% { box-shadow: 0 0 60px rgba(250,115,1,0.5), 0 0 120px rgba(250,115,1,0.2); }
        }
        .uc-card:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: rgba(255,255,255,0.2) !important;
        }
        .uc-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* ── Radial glow orbs ── */}
      <div style={{
        position: 'absolute', top: '-200px', left: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(250,115,1,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-150px', right: '-150px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Floating Particles ── */}
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: p.top,
          left: 'left' in p ? p.left : undefined,
          right: 'right' in p ? (p as any).right : undefined,
          opacity: p.opacity,
          pointerEvents: 'none',
          animation: `uc-float ${4 + i * 0.5}s ease-in-out infinite`,
          animationDelay: p.delay,
          ['--rot' as string]: p.rotation,
        }}>
          <ParticleIcon icon={p.icon as any} size={p.size} />
        </div>
      ))}

      {/* ── Animated grid lines ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* ── Main Content ── */}
      <div style={{
        position: 'relative', zIndex: 10, maxWidth: '720px', width: '100%',
        padding: '24px', textAlign: 'center',
        animation: mounted ? 'uc-fade-up 0.8s ease forwards' : 'none',
        opacity: mounted ? 1 : 0,
      }}>

        {/* Logo / Brand */}
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '10px 20px',
            boxShadow: '0 8px 32px rgba(250,115,1,0.25), 0 0 0 1px rgba(255,255,255,0.1)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'uc-glow-pulse 3s ease-in-out infinite',
          }}>
            <img
              src={logoAdImg.src}
              alt="TravelEase Holidays"
              style={{ height: '48px', width: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Construction Badge */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '36px' }}>
          {/* Fixed-size wrapper so absolute children centre correctly */}
          <div style={{ position: 'relative', width: '96px', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Pulse rings — centred on the wrapper */}
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px', right: '-12px', bottom: '-12px',
              borderRadius: '50%',
              border: '2px solid rgba(250,115,1,0.4)',
              animation: 'uc-pulse-ring 2s ease-out infinite',
            }} />
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px', right: '-12px', bottom: '-12px',
              borderRadius: '50%',
              border: '2px solid rgba(250,115,1,0.3)',
              animation: 'uc-pulse-ring 2s ease-out infinite',
              animationDelay: '0.5s',
            }} />

            {/* Outer rotating ring */}
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '96px', height: '96px',
              border: '3px solid transparent',
              borderTopColor: '#fa7301',
              borderRightColor: 'rgba(250,115,1,0.3)',
              borderRadius: '50%',
              animation: 'uc-spin-slow 3s linear infinite',
            }} />
            {/* Inner counter-rotating ring */}
            <div style={{
              position: 'absolute', top: '8px', left: '8px',
              width: '80px', height: '80px',
              border: '2px solid transparent',
              borderBottomColor: 'rgba(250,115,1,0.5)',
              borderLeftColor: 'rgba(250,115,1,0.2)',
              borderRadius: '50%',
              animation: 'uc-spin-rev 2s linear infinite',
            }} />

            {/* Center gear icon */}
            <div style={{
              position: 'relative', zIndex: 1,
              width: '68px', height: '68px',
              background: 'linear-gradient(135deg, rgba(250,115,1,0.15), rgba(250,115,1,0.05))',
              border: '1px solid rgba(250,115,1,0.3)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}>
              <svg width="32" height="32" fill="none" stroke="#fa7301" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #fa7301 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'uc-shimmer 4s linear infinite',
          letterSpacing: '-0.02em',
        }}>
          We're Crafting<br />Something Amazing
        </h1>

        {/* Subheading */}
        <p style={{
          color: 'rgba(148,163,184,0.9)',
          fontSize: 'clamp(14px, 2vw, 17px)',
          lineHeight: 1.7,
          marginBottom: '12px',
          fontWeight: 400,
        }}>
          Our website is currently under construction. We're working hard to bring<br />
          you an exceptional travel experience. Stay tuned!
        </p>

        {/* Wave animation bar */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          gap: '4px', height: '32px', margin: '32px auto',
        }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} style={{
              width: '4px', borderRadius: '2px',
              background: `linear-gradient(to top, #fa7301, #f59e0b)`,
              height: `${10 + Math.sin(i * 0.8) * 8}px`,
              animation: `uc-wave ${0.6 + i * 0.08}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.1}s`,
            }} />
          ))}
        </div>

        {/* Divider */}
        <div style={{
          width: '60px', height: '3px',
          background: 'linear-gradient(90deg, transparent, #fa7301, transparent)',
          margin: '0 auto 40px',
          borderRadius: '2px',
        }} />

        {/* Contact Info Cards */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            color: 'rgba(148,163,184,0.7)',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '20px',
          }}>
            Need help? Reach us at
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}>
            {contactInfo.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="uc-card"
                style={{
                  display: 'block',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  textDecoration: 'none',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  animationDelay: `${0.2 + idx * 0.15}s`,
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '48px', height: '48px',
                  background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#fff',
                  boxShadow: `0 8px 24px ${item.glowColor}`,
                }}>
                  {item.icon}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(148,163,184,0.7)',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}>
                  {item.label}
                </div>

                {/* Value */}
                <div style={{
                  color: '#f1f5f9',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: 1.5,
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                  overflowWrap: 'anywhere',
                }}>
                  {item.value}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p style={{
          color: 'rgba(100,116,139,0.7)',
          fontSize: '12px',
          letterSpacing: '0.05em',
        }}>
          © {new Date().getFullYear()} TravelEase Holidays · Colombo, Sri Lanka
        </p>
      </div>
    </div>
  );
}

/* ── Particle icon helper ── */
function ParticleIcon({ icon, size }: { icon: 'plane' | 'globe' | 'compass'; size: number }) {
  if (icon === 'plane') {
    return (
      <svg width={size} height={size} fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    );
  }
  if (icon === 'globe') {
    return (
      <svg width={size} height={size} fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} fill="none" stroke="white" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={1} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
        d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </svg>
  );
}
