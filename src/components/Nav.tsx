'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Calendar,
  HelpCircle,
  Home,
  Layers,
  MessageSquare,
  Sparkles,
  Ticket,
  Users,
} from 'lucide-react';
import { LACE, LINKS } from '@/lib/config';

const DESKTOP_ITEMS = [
  { label: 'Overview', href: '/lace' },
  { label: 'Tracks', href: '/lace#learn' },
  { label: 'Timeline', href: '/lace#timeline' },
  { label: 'Speakers', href: '/lace#speakers' },
  { label: 'Tickets', href: '/lace#tickets' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/lace#faq' },
];

const DRAWER_ITEMS = [
  { label: 'Hammet Home', href: '/', icon: Home },
  { label: 'LACE 1.0 Overview', href: '/lace', icon: Sparkles },
  { label: 'Tracks', href: '/lace#learn', icon: Layers },
  { label: 'Timeline', href: '/lace#timeline', icon: Calendar },
  { label: 'Speakers', href: '/lace#speakers', icon: Users },
  { label: 'Tickets', href: '/lace#tickets', icon: Ticket },
  { label: 'Testimonials', href: '/testimonials', icon: MessageSquare },
  { label: 'FAQ', href: '/lace#faq', icon: HelpCircle },
];

export default function Nav() {
  const path = usePathname();

  // On the LACE landing page and Testimonials page, navigation is seamlessly integrated directly into their respective headers
  if (path === '/lace' || path === '/lace/' || path.startsWith('/testimonials')) {
    return null;
  }

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 9, hours: 16, minutes: 22, seconds: 45 });
  const [activeLandmark, setActiveLandmark] = useState<'theatre' | 'bridge'>('theatre');

  useEffect(() => {
    const target = new Date(LACE.eventStart).getTime();
    const update = () => {
      const diff = Math.max(target - Date.now(), 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  // Synchronize landmark state between Hero and Nav bar
  useEffect(() => {
    const handleLandmarkChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ landmark: 'theatre' | 'bridge' }>;
      if (customEvent.detail?.landmark) {
        setActiveLandmark(customEvent.detail.landmark);
      }
    };
    window.addEventListener('lace-landmark-change', handleLandmarkChange);
    return () => window.removeEventListener('lace-landmark-change', handleLandmarkChange);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setScrolled(scrollY > 25);
          if (scrollY > 90) {
            setActiveLandmark('bridge');
          } else if (scrollY <= 50) {
            setActiveLandmark('theatre');
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const cur = (href: string) => (href === path ? 'cur' : undefined);

  return (
    <>
      {/* Top Countdown Announcement Banner (Image 1 Moonshot style) */}
      {!bannerDismissed && (
        <aside
          className="lace-top-banner w-full bg-[#0D041A] text-white py-2 px-3 sm:px-6 relative z-50 transition-all select-none border-none"
          aria-label="Event countdown announcement"
        >
          <div className="wrap flex items-center justify-between gap-2.5 text-center sm:text-left">
            {/* Left Tag */}
            <div className="hidden md:flex items-center gap-2 font-black tracking-wider uppercase text-cyan-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>LACE 1.0 BEGINS IN</span>
            </div>

            {/* Center Digital Clock Blocks (Image 1 style) */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 font-mono font-black text-xs sm:text-sm text-white tracking-wider whitespace-nowrap">
              <span className="hidden sm:inline font-sans font-bold text-cyan-300 mr-1 text-[11px] whitespace-nowrap">
                LACE 1.0:
              </span>
              <span className="px-1 sm:px-1.5 py-0.5 rounded bg-purple-950/90 border border-purple-500/40 text-white shadow-xs">
                {String(timeLeft.days).padStart(2, '0')}
                <span className="text-amber-400 font-sans text-[9px] sm:text-[10px] ml-0.5 font-bold">D</span>
              </span>
              <span className="text-purple-400 font-bold">:</span>
              <span className="px-1 sm:px-1.5 py-0.5 rounded bg-purple-950/90 border border-purple-500/40 text-white shadow-xs">
                {String(timeLeft.hours).padStart(2, '0')}
                <span className="text-amber-400 font-sans text-[9px] sm:text-[10px] ml-0.5 font-bold">H</span>
              </span>
              <span className="text-purple-400 font-bold">:</span>
              <span className="px-1 sm:px-1.5 py-0.5 rounded bg-purple-950/90 border border-purple-500/40 text-white shadow-xs">
                {String(timeLeft.minutes).padStart(2, '0')}
                <span className="text-amber-400 font-sans text-[9px] sm:text-[10px] ml-0.5 font-bold">M</span>
              </span>
              <span className="text-purple-400 font-bold">:</span>
              <span className="px-1 sm:px-1.5 py-0.5 rounded bg-purple-950/90 border border-purple-500/40 text-cyan-300 shadow-xs">
                {String(timeLeft.seconds).padStart(2, '0')}
                <span className="text-amber-400 font-sans text-[9px] sm:text-[10px] ml-0.5 font-bold">S</span>
              </span>
            </div>

            {/* Right Action & Dismiss Button */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
              <a
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors whitespace-nowrap text-[11px] sm:text-xs flex items-center gap-0.5 sm:gap-1"
              >
                <span>Tickets</span>
                <span aria-hidden="true">→</span>
              </a>
              <button
                type="button"
                onClick={() => setBannerDismissed(true)}
                className="text-white/60 hover:text-white p-0.5 sm:p-1 rounded transition-colors text-xs sm:text-sm leading-none font-bold"
                aria-label="Dismiss countdown banner"
              >
                ✕
              </button>
            </div>
          </div>
        </aside>
      )}

      <nav id="nav" className={`lace-navbar relative overflow-hidden border-none ${scrolled ? 'scrolled' : ''}`}>
        {/* Lagos Architectural Landmark Background for Navbar (National Theatre & Ikoyi Bridge) */}
        <div className="lace-nav-backdrop absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none border-none" aria-hidden="true">
          {/* National Theatre Background (Daylight sky & monument top) */}
          <div
            className={`absolute inset-0 will-change-transform z-0 ${
              activeLandmark === 'theatre' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: activeLandmark === 'theatre' ? 'scale(1.0) translateZ(0)' : 'scale(1.04) translateZ(0)',
              transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <Image
              src="/assets/landmarks/clear-theater.webp"
              alt="National Arts Theatre Lagos"
              fill
              priority
              className="object-cover object-[center_top] lg:object-[82%_top] filter brightness-105"
              quality={90}
            />
          </div>

          {/* Lekki-Ikoyi Link Bridge Background (Night illumination & cables) */}
          <div
            className={`absolute inset-0 will-change-transform z-0 ${
              activeLandmark === 'bridge' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: activeLandmark === 'bridge' ? 'scale(1.0) translateZ(0)' : 'scale(1.04) translateZ(0)',
              transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <Image
              src="/assets/landmarks/night-light-ikoyi-bridge.jpg"
              alt="Lekki-Ikoyi Link Bridge Lagos"
              fill
              priority
              className="object-cover object-[center_top] lg:object-[84%_top]"
              quality={90}
            />
          </div>

          {/* Frosted Glass Overlay: Solid white on the left (matching hero), tight gradient demarkation, landmark photo on right */}
          <div
            className="lace-nav-scrim absolute inset-0 z-10 transition-colors duration-1000 border-none"
            style={{
              background: scrolled
                ? 'rgba(255, 255, 255, 0.96)'
                : 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 26%, rgba(255, 255, 255, 0.92) 30%, rgba(255, 255, 255, 0.55) 35%, rgba(255, 255, 255, 0.20) 38%, transparent 42%)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />
        </div>

        <div className="nav-in wrap relative z-10">
          {/* Brand Logo with Authentic Hammet Mark (No artificial gradient wrapper) */}
          <Link className="logo flex items-center gap-2.5" href="/" aria-label="Hammet School of AI">
            <img
              src="/favicon.ico"
              width={32}
              height={32}
              alt="Hammet"
              className="logo-img h-8 w-8 shrink-0 object-contain"
            />
            <div className="logo-t flex flex-col">
              <b className="text-sm font-black tracking-tight text-gray-900 leading-none">Hammet</b>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 leading-tight">
                School of AI
              </span>
            </div>
          </Link>

        {/* Center / Right Links */}
        <div className="nav-r flex items-center gap-3">
          <div className="nav-links">
            {DESKTOP_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={cur(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Clean Mobile Menu Button */}
          <button
            className="menu-btn"
            id="menubtn"
            type="button"
            aria-expanded={open}
            aria-controls="mnav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((current) => !current)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className={`menu-icon${open ? ' menu-icon--open' : ''}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>

          {/* Primary CTA Button */}
          <a
            className="btn btn-primary lace-nav-register-btn whitespace-nowrap"
            href={LINKS.selar}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              Register<span className="hidden sm:inline"> for LACE 1.0</span>
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {open ? <div className="mnav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" /> : null}

      {/* Slide-Down Mobile Drawer Menu */}
      <div
        className={`mnav${open ? ' open' : ''}`}
        id="mnav"
        role="dialog"
        aria-label="Navigation Menu"
        aria-modal={open || undefined}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <div className="mnav-header p-3 border-b border-purple-200/60 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-purple-900">Navigation</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full bg-purple-100 text-purple-900 font-bold flex items-center justify-center text-xs"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="mnav-links-grid p-2.5 space-y-1">
          {DRAWER_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = item.href === path;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mnav-link flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  active
                    ? 'cur bg-purple-100 text-purple-950 font-black shadow-xs'
                    : 'text-gray-800 hover:bg-purple-50 hover:text-purple-900'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    active ? 'text-purple-700' : 'text-purple-500/80'
                  }`}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href={LINKS.selar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full text-center block mt-1"
            >
              Register for LACE 1.0 →
            </a>
          </div>
        </div>
      </div>
    </nav>
  </>
);
}
