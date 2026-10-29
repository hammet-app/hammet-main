'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  HelpCircle,
  Home,
  Layers,
  MapPin,
  MessageSquare,
  Siren,
  Sparkles,
  Ticket,
  Users,
} from 'lucide-react';
import { LACE, LINKS } from '@/lib/config';
import Countdown from '@/components/Countdown';
import { Assemble } from '@/components/lace/Assemble';
import LaceLandmarkStage from '@/components/lace/LaceLandmarkStage';

const ROTATING_WORDS = [
  'AI Advantage',
  'Career Growth',
  'Earning Power',
  'Industry Edge',
  'Future Mastery',
];

// Append first item for endless smooth forward rolling reel
const EXTENDED_WORDS = [...ROTATING_WORDS, ROTATING_WORDS[0]];

const DESKTOP_NAV_ITEMS = [
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

export default function Hero() {
  const [reelIndex, setReelIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Landmark background cross-fade state (National Theatre <-> Ikoyi Link Bridge)
  const [activeLandmark, setActiveLandmark] = useState<'theatre' | 'bridge'>('theatre');
  const [userInteracted, setUserInteracted] = useState(false);

  // Navigation & announcement states integrated directly into Hero
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 9, hours: 16, minutes: 22, seconds: 45 });

  useEffect(() => {
    const target = new Date(LACE.eventStart).getTime();
    const update = () => {
      const diff = Math.max(target - Date.now(), 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const changeLandmark = (landmark: 'theatre' | 'bridge', byUser = false) => {
    setActiveLandmark(landmark);
    if (byUser) setUserInteracted(true);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('lace-landmark-change', { detail: { landmark } })
      );
    }
  };

  useEffect(() => {
    const handleRemoteChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ landmark: 'theatre' | 'bridge' }>;
      if (customEvent.detail?.landmark) {
        setActiveLandmark(customEvent.detail.landmark);
      }
    };
    window.addEventListener('lace-landmark-change', handleRemoteChange);
    return () => window.removeEventListener('lace-landmark-change', handleRemoteChange);
  }, []);

  // Smooth rolling ticker effect (runs smoothly every 2.8s)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setReelIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  // When reel hits the cloned duplicate at the end, seamlessly snap back to 0 without animation
  useEffect(() => {
    if (reelIndex === EXTENDED_WORDS.length - 1) {
      const snapTimeout = setTimeout(() => {
        setIsTransitioning(false);
        setReelIndex(0);
      }, 760);
      return () => clearTimeout(snapTimeout);
    }
  }, [reelIndex]);

  // Listen to scroll to smoothly transition from National Theatre to Lekki-Ikoyi Bridge with hysteresis
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          // Smooth hysteresis threshold for buttery scroll transition
          if (scrollY > 75 && activeLandmark !== 'bridge') {
            changeLandmark('bridge', false);
          } else if (scrollY <= 35 && activeLandmark !== 'theatre') {
            changeLandmark('theatre', false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLandmark]);

  const selectLandmark = (landmark: 'theatre' | 'bridge') => {
    changeLandmark(landmark, true);
  };

  const isDark = activeLandmark === 'bridge';

  return (
    <header
      id="top"
      className={`lace-hero lace-hero--moonshot relative overflow-hidden transition-colors duration-1000 ${
        isDark ? 'lace-hero--dark-theme' : 'lace-hero--light-theme'
      }`}
    >
      {/* Mobile-Only Dual-Layer Atmospheric Background (Silky smooth cross-dissolve on scroll) */}
      <div className="lace-hero-mobile-bg md:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Daylight Canvas */}
        <div
          className={`absolute inset-0 lace-hero-mobile-bg--day ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
        {/* Midnight Luxury Canvas with ambient cyber cyan & deep violet aura */}
        <div
          className={`absolute inset-0 lace-hero-mobile-bg--night ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      {/* 1. Full-Bleed Architectural Landmark Background — Visible on Tablet/Laptop/Desktop, Hidden on Mobile */}
      <div className="lace-hero-backdrop absolute inset-0 z-0 pointer-events-none overflow-hidden select-none hidden md:block" aria-hidden="true">
        {/* National Theatre Background (Daylight) */}
        <div
          className={`absolute inset-0 will-change-transform ${
            activeLandmark === 'theatre' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            transform: activeLandmark === 'theatre' ? 'scale(1.0) translateZ(0)' : 'scale(1.04) translateZ(0)',
            transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <Image
            src="/assets/landmarks/clear-theater.webp"
            alt="National Arts Theatre Iganmu Lagos"
            fill
            priority
            className="object-cover object-[center_right] lg:object-[82%_center]"
            quality={92}
          />
        </div>

        {/* Lekki-Ikoyi Link Bridge Background (Illuminated Night) */}
        <div
          className={`absolute inset-0 will-change-transform ${
            activeLandmark === 'bridge' ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
            className="object-cover object-[center_right] lg:object-[84%_center]"
            quality={92}
          />
        </div>

        {/* DevFest Lagos Ambient Atmosphere: Drifting Clouds in the Sky (active on theatre daylight) */}
        <div
          className={`hero-sky-ambience pointer-events-none z-5 transition-opacity duration-1000 ${
            activeLandmark === 'theatre' ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <div className="sky-cloud sky-cloud--1" />
          <div className="sky-cloud sky-cloud--2" />
          <div className="sky-cloud sky-cloud--3" />
          <div className="sky-cloud sky-cloud--4" />
        </div>

        {/* ── LIGHT THEME SCRIM (Solid white on text column only, tight gradient demarkation, clear landmark on right) ── */}
        <div
          className={`lace-hero-scrim lace-hero-scrim--light absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000 ${
            activeLandmark === 'theatre' ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* ── DARK THEME SCRIM (Deep night purple-black on text column only, tight gradient demarkation, glowing bridge on right) ── */}
        <div
          className={`lace-hero-scrim lace-hero-scrim--dark absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000 ${
            activeLandmark === 'bridge' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* 2. Top Countdown Announcement Banner (Integrated inside Hero) */}
      {!bannerDismissed && (
        <aside
          className="lace-top-banner w-full bg-[#0D041A] text-white py-2 px-3 sm:px-6 relative z-30 transition-all select-none border-none"
          aria-label="Event countdown announcement"
        >
          <div className="lace-wrap flex items-center justify-between gap-2.5 text-center sm:text-left">
            {/* Left Tag */}
            <div className="hidden md:flex items-center gap-2 font-black tracking-wider uppercase text-cyan-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>LACE 1.0 BEGINS IN</span>
            </div>

            {/* Center Digital Clock Blocks */}
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
              <span className="px-1 sm:px-1.5 py-0.5 rounded bg-purple-950/90 border border-purple-500/40 text-white shadow-xs">
                {String(timeLeft.seconds).padStart(2, '0')}
                <span className="text-amber-400 font-sans text-[9px] sm:text-[10px] ml-0.5 font-bold">S</span>
              </span>
            </div>

            {/* Right Quick Register Link & Dismiss */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-amber-300 hover:text-white underline underline-offset-2 transition-colors whitespace-nowrap"
              >
                Claim Seat <span className="hidden sm:inline">Now</span> &rarr;
              </a>
              <button
                type="button"
                onClick={() => setBannerDismissed(true)}
                className="w-5 h-5 rounded-full hover:bg-purple-900/60 flex items-center justify-center text-purple-400 hover:text-white text-xs font-bold transition-all"
                aria-label="Dismiss banner"
              >
                &times;
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 3. Integrated Top Navigation Row (Directly on Landing Page Header — Zero Seam, Zero Border Line) */}
      <nav id="nav" className="lace-hero-nav relative z-20 w-full select-none" aria-label="Main Navigation">
        <div className="lace-wrap flex items-center justify-between py-3.5 sm:py-4">
          {/* Logo with Hammet Mark */}
          <Link className="logo flex items-center gap-2.5" href="/" aria-label="Hammet School of AI">
            <img
              src="/favicon.ico"
              width={32}
              height={32}
              alt="Hammet"
              className="logo-img h-8 w-8 shrink-0 object-contain"
            />
            <div className="logo-t flex flex-col">
              <b
                className={`text-sm font-black tracking-tight leading-none transition-colors duration-1000 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Hammet
              </b>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider leading-tight transition-colors duration-1000 ${
                  isDark ? 'text-cyan-400' : 'text-purple-700'
                }`}
              >
                School of AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] font-bold tracking-tight">
              {DESKTOP_NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-700 ${
                    isDark
                      ? 'text-purple-200/90 hover:text-cyan-300'
                      : 'text-purple-950/90 hover:text-cyan-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={`lg:hidden px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-1000 border ${
                isDark
                  ? 'bg-purple-950/80 text-white border-purple-500/40 hover:bg-purple-900'
                  : 'bg-purple-50 text-purple-950 border-purple-200 hover:bg-purple-100'
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              Menu
            </button>

            {/* Register for LACE 1.0 Button */}
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
      </nav>

      {/* Slide-Down Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          className="mnav-backdrop fixed inset-0 z-[998] bg-black/60 backdrop-blur-xs"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`mnav fixed top-0 right-0 left-0 z-[999] max-h-[85vh] bg-[#160D2D] text-white overflow-y-auto shadow-2xl transition-all duration-300 ${
          mobileOpen ? 'open opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-4'
        }`}
        id="mnav"
        role="dialog"
        aria-label="Navigation Menu"
        aria-modal={mobileOpen || undefined}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) setMobileOpen(false);
        }}
      >
        <div className="mnav-header p-3 border-b border-purple-800/60 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-cyan-400">Navigation</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-7 h-7 rounded-full bg-purple-900/80 text-purple-200 font-bold flex items-center justify-center text-xs"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="mnav-links-grid p-2.5 space-y-1">
          {DRAWER_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="mnav-link flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold text-gray-200 hover:bg-purple-900/60 hover:text-white transition-all"
              >
                <Icon className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
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

      {/* 4. Hero Content Grid */}
      <div className="lace-wrap lace-hero__grid relative z-10 pt-2 sm:pt-4">
        <Assemble className="lace-hero__copy">
          {/* Pre-header metadata badge with Animated Red Siren Alarm */}
          <div className="lace-hero__brandline">
            <div className="lace-brand-badge">
              <span className="lace-brand-siren-wrap" aria-hidden="true">
                <span className="lace-brand-siren-aura" />
                <Siren className="lace-brand-siren-icon" aria-hidden="true" />
              </span>
              <span>LAGOS AI CAREER EXPERIENCE 1.0</span>
            </div>
          </div>

          {/* Smooth Rolling Headline: Reel transitions seamlessly without disappearing */}
          <h1 className="lace-hero__title">
            <span className="hero-title-lead block">Maximize your</span>
            <span className="hero-rotating-line block whitespace-nowrap overflow-hidden">
              <span
                className="hero-rotating-mask inline-block overflow-hidden"
                style={{
                  height: '1.25em',
                  verticalAlign: 'baseline',
                  lineHeight: '1.25em',
                }}
              >
                <span
                  className="hero-rotating-reel flex flex-col"
                  style={{
                    transform: `translateY(-${reelIndex * (100 / EXTENDED_WORDS.length)}%)`,
                    transition: isTransitioning
                      ? 'transform 0.72s cubic-bezier(0.16, 1, 0.3, 1)'
                      : 'none',
                  }}
                >
                  {EXTENDED_WORDS.map((word, idx) => (
                    <span
                      key={`${word}-${idx}`}
                      className="hero-rotating-word whitespace-nowrap block"
                      style={{ height: '1.25em', lineHeight: '1.25em' }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </span>
            <span className="hero-title-sub block">Get ahead of your competitors.</span>
          </h1>

          <p className="lace-hero__subhead">
            A Two weeks Intensive Certification Training in Lagos. Master practical generative AI, build
            autonomous agents, and future-proof your career.
          </p>

          {/* Styled Dual Dates & Venue Cards with Lucide Vector Icons */}
          <div className="lace-hero__dates" aria-label="Training dates and venue">
            <div className="lace-date-card lace-date-card--virtual">
              <div className="lace-date-card__icon-box">
                <Calendar className="w-4 h-4 text-cyan-600" aria-hidden="true" />
              </div>
              <div className="lace-date-card__content">
                <div className="lace-date-card__tag lace-date-card__tag--cyan">Virtual Session</div>
                <div className="lace-date-card__value">
                  <strong>Nov 7th – 21st, 2026</strong> <span className="lace-date-card__sub">· 2 Weeks Live Online</span>
                </div>
              </div>
            </div>

            <div className="lace-date-card lace-date-card--physical">
              <div className="lace-date-card__icon-box">
                <MapPin className="w-4 h-4 text-purple-600" aria-hidden="true" />
              </div>
              <div className="lace-date-card__content">
                <div className="lace-date-card__tag lace-date-card__tag--purple">Physical Masterclass</div>
                <div className="lace-date-card__value">
                  <strong>Saturday Nov 7th</strong> <span className="lace-date-card__sub">· 10 Kayode Alabi, Ogba, Lagos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Countdown */}
          <div className="lace-hero__countdown-wrap">
            <Countdown />
          </div>

          {/* Action Buttons */}
          <div className="lace-hero__actions">
            <a
              className="lace-button lace-button--primary btn-elevated-brutal"
              href={LINKS.selar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a ticket <span aria-hidden="true">→</span>
            </a>
            <a className="lace-button lace-button--secondary" href="#tickets">
              View ticket options
            </a>
          </div>
        </Assemble>

        {/* Hero Landmark Stage — Visible on Tablet/Desktop, Hidden on Mobile to Eliminate Empty Void */}
        <Assemble className="lace-landmark-stage-wrapper hidden md:block">
          <LaceLandmarkStage
            activeLandmark={activeLandmark}
            onSelectLandmark={selectLandmark}
          />
        </Assemble>
      </div>
    </header>
  );
}
