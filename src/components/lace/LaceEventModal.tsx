'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Ticket, Zap, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { LACE, LINKS } from '@/lib/config';

interface SessionData {
  id: number;
  tags: string[];
  title: string;
  subtitle: string;
  speakers: {
    name: string;
    role: string;
    photo: string;
  }[];
}

const SESSIONS: SessionData[] = [
  {
    id: 1,
    tags: ['DAY 1', 'KEYNOTE', 'AI FOUNDATIONS'],
    title: 'Maximize Your AI Advantage: What It Takes to Build Real Leverage That Lasts',
    subtitle: 'From prompt engineering to autonomous agents and workflow automation.',
    speakers: [
      {
        name: 'Mr Prince Obinna',
        role: 'Convener, Hammet Limited',
        photo: '/assets/people/prince.png',
      },
      {
        name: 'Peter Michalides',
        role: 'Head of Brand Marketing, Hyrotrader',
        photo: '/assets/people/peter.jpg',
      },
    ],
  },
  {
    id: 2,
    tags: ['WEEK 1', 'FINANCE', 'AI AUTOMATION'],
    title: 'How to Use AI to Track Business Funds & Eliminate Cash Leakage',
    subtitle: 'Private Masterclass on forensic cashflow auditing with generative models.',
    speakers: [
      {
        name: 'Ms Angel Nwafor',
        role: 'Financial AI Strategist',
        photo: '/assets/people/angel.jpg',
      },
      {
        name: 'Mr Prince Obinna',
        role: 'Director, Hammet Limited',
        photo: '/assets/people/prince.png',
      },
    ],
  },
  {
    id: 3,
    tags: ['WEEK 2', 'SALES', 'REVENUE GROWTH'],
    title: 'Triple Your Business Revenue in 30 Days Using Custom AI Pipelines',
    subtitle: 'Automated outreach, client qualification, and high-conversion closing.',
    speakers: [
      {
        name: 'Mr Sopuruchukwu Emeka',
        role: 'Growth & Sales Lead',
        photo: '/assets/people/sopuruchukwu.jpg',
      },
    ],
  },
  {
    id: 4,
    tags: ['EXECUTIVE', 'INVESTMENTS', 'GRANTS'],
    title: 'Preparing Your Company for Business Grants & Global Capital',
    subtitle: 'How to position African ventures for institutional funding.',
    speakers: [
      {
        name: 'Mrs Chiemela Anosike',
        role: 'Venture & Grants Strategist',
        photo: '/assets/people/chiemela.jpg',
      },
    ],
  },
];

export default function LaceEventModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 10, hours: 2, minutes: 14, seconds: 35 });

  // Only appear when user scrolls down (e.g. scrollY > 320px) and NOT immediately on load
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 320) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When user has scrolled down and hasn't dismissed, open the modal
  useEffect(() => {
    if (hasScrolled && !dismissed) {
      setIsOpen(true);
    }
  }, [hasScrolled, dismissed]);

  // Live countdown calculation to Nov 7th event start
  useEffect(() => {
    const target = new Date(LACE.eventStart).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(target - now, 0);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  const nextSession = () => {
    setSessionIndex((prev) => (prev + 1) % SESSIONS.length);
  };

  const prevSession = () => {
    setSessionIndex((prev) => (prev - 1 + SESSIONS.length) % SESSIONS.length);
  };

  const session = SESSIONS[sessionIndex];

  return (
    <>
      {/* Minimized Floating Pill on Bottom Right when closed */}
      {!isOpen && hasScrolled && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="lace-event-modal__pill fixed z-[990] flex items-center gap-2 px-3.5 py-2 rounded-full bg-purple-950/95 text-white border border-purple-400/50 shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95 transition-all text-xs font-bold"
          aria-label="Open LACE event announcement"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <Ticket className="w-3.5 h-3.5 text-amber-300 shrink-0" aria-hidden="true" />
          <span>LACE 1.0 • {timeLeft.days} Days Left</span>
        </button>
      )}

      {/* Main Moonshot-style Pop-up Modal on Bottom Right */}
      {isOpen && (
        <aside
          className="lace-event-modal__card fixed z-[999] rounded-2xl overflow-hidden bg-[#160D2D] border-2 border-purple-500/50 shadow-[0_20px_50px_rgba(26,11,46,0.65)] text-white animate-fadeIn"
          aria-label="LACE 1.0 Event Announcement and Featured Agenda"
        >
          {/* Header Banner: Moonshot Retro Sunburst + National Theatre Silhouette */}
          <div className="relative w-full h-[140px] bg-gradient-to-b from-[#8B5CF6] via-[#6D28D9] to-[#4C1D95] p-3.5 flex flex-col justify-between overflow-hidden">
            {/* Sunburst Rays Pattern radiating from top center */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-conic-gradient(from 0deg at 50% -10%, transparent 0deg 9deg, rgba(255,255,255,0.4) 9deg 18deg)',
              }}
              aria-hidden="true"
            />

            {/* Stylized Floating Clouds */}
            <div className="absolute top-2 right-14 opacity-90 pointer-events-none" aria-hidden="true">
              <svg width="48" height="20" viewBox="0 0 50 20" fill="white">
                <path d="M10 18 A8 8 0 0 1 18 10 A12 12 0 0 1 36 10 A7 7 0 0 1 44 18 Z" />
              </svg>
            </div>
            <div className="absolute top-8 right-2 opacity-80 pointer-events-none" aria-hidden="true">
              <svg width="34" height="15" viewBox="0 0 50 20" fill="white">
                <path d="M10 18 A8 8 0 0 1 18 10 A12 12 0 0 1 36 10 A7 7 0 0 1 44 18 Z" />
              </svg>
            </div>

            {/* Top Row: Brand & Close Button */}
            <div className="relative z-20 flex items-center justify-between">
              <span className="text-[11px] font-black tracking-widest uppercase text-white flex items-center gap-1.5 drop-shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                L A C E 1 . 0 × H A M M E T
              </span>
              <button
                type="button"
                onClick={handleDismiss}
                className="w-7 h-7 rounded-full bg-purple-950/80 hover:bg-black/90 border border-white/20 flex items-center justify-center text-white text-xs font-black shadow-md transition-transform hover:scale-110 active:scale-95"
                aria-label="Close announcement"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Retro 3D Headline (Strictly left-aligned so it never touches the landmark on the right) */}
            <div className="relative z-20 max-w-[54%] pb-0.5">
              <h2
                className="text-[24px] font-black italic tracking-tight text-white leading-[0.92] uppercase select-none"
                style={{
                  textShadow:
                    '1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #000, 4px 4px 0 #000, 5px 5px 0 #000, 6px 6px 0 rgba(0,0,0,0.85)',
                }}
              >
                <span className="block text-white text-[26px] font-black">{timeLeft.days} Days to</span>
                <span className="block text-white text-[23px] font-black">LACE 1.0</span>
              </h2>
            </div>

            {/* National Theatre Silhouette anchored exclusively on the bottom-right corner */}
            <div
              className="absolute -bottom-1 -right-2 w-[118px] pointer-events-none select-none z-10 opacity-95"
              aria-hidden="true"
            >
              <svg viewBox="40 25 200 75" fill="none" className="w-full h-auto">
                {/* Saucer roof profile */}
                <path
                  d="M45 55 C80 35 150 28 225 45 C238 49 242 60 230 68 C205 76 145 80 95 78 C60 76 40 68 45 55Z"
                  fill="#140828"
                />
                {/* Architectural concrete pillars / fins */}
                <path
                  d="M60 50 L68 40 L74 81 M88 45 L96 36 L102 82 M116 42 L124 33 L128 83 M145 40 L153 32 L154 83 M172 41 L180 34 L178 82 M198 44 L206 38 L202 80 M218 48 L225 44 L220 78"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Horizontal stadium tier lines */}
                <path
                  d="M50 58 C90 44 160 38 226 50"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <path
                  d="M65 68 C105 58 155 55 210 63"
                  stroke="#A855F7"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-3.5 space-y-3">
            <p className="text-xs text-purple-200 leading-snug">
              On <strong>Saturday Nov 7th</strong>, the National Theatre & Lagos School of AI open their
              doors to Africa&apos;s next generation of AI builders.
            </p>

            {/* Agenda Navigation Bar */}
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>On the agenda</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-purple-400 font-mono font-semibold">
                  {sessionIndex + 1} / {SESSIONS.length}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevSession}
                    className="w-5 h-5 rounded bg-purple-900/60 hover:bg-purple-800 flex items-center justify-center text-[10px] text-purple-200 border border-purple-500/30"
                    aria-label="Previous agenda session"
                  >
                    <ChevronLeft className="w-3 h-3 text-purple-200" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSession}
                    className="w-5 h-5 rounded bg-purple-900/60 hover:bg-purple-800 flex items-center justify-center text-[10px] text-purple-200 border border-purple-500/30"
                    aria-label="Next agenda session"
                  >
                    <ChevronRight className="w-3 h-3 text-purple-200" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Session Card (Retro-Modern Sunburst card like Image 5) */}
            <div className="relative rounded-xl overflow-hidden border-2 border-amber-400/80 bg-gradient-to-b from-[#FFFDF0] via-[#FFFBEB] to-[#FEF3C7] text-gray-900 p-3 shadow-md">
              {/* Subtle sunburst lines in card background */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg 15deg, #F59E0B 15deg 30deg)',
                }}
                aria-hidden="true"
              />

              {/* Tag Pills */}
              <div className="relative z-10 flex flex-wrap gap-1 mb-1.5">
                {session.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                      i === 0
                        ? 'bg-emerald-500 text-white'
                        : i === 1
                        ? 'bg-amber-500 text-white'
                        : 'bg-cyan-500 text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Session Title */}
              <h3 className="relative z-10 text-xs font-black leading-snug tracking-tight text-gray-950 mb-1">
                {session.title}
              </h3>

              {/* Speakers Section */}
              <div className="relative z-10 mt-2 pt-2 border-t border-amber-300/80 flex items-center gap-2">
                {session.speakers.map((sp) => (
                  <div key={sp.name} className="flex items-center gap-1.5 flex-1 min-w-0">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-purple-600 bg-purple-950 shrink-0 shadow-sm">
                      <Image src={sp.photo} alt={sp.name} fill className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black truncate text-gray-900 leading-tight">
                        {sp.name}
                      </div>
                      <div className="text-[8.5px] truncate text-purple-900 font-semibold leading-tight">
                        {sp.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countdown & CTA Footer */}
            <div className="pt-1 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[9.5px] font-semibold text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Doors open Nov 7th, 10 AM WAT</span>
                  </div>
                  <div className="text-base font-black font-mono tracking-tight text-cyan-300">
                    {String(timeLeft.days).padStart(2, '0')}
                    <span className="text-[10px] text-purple-300 font-sans">d</span>{' '}
                    {String(timeLeft.hours).padStart(2, '0')}
                    <span className="text-[10px] text-purple-300 font-sans">h</span>{' '}
                    {String(timeLeft.minutes).padStart(2, '0')}
                    <span className="text-[10px] text-purple-300 font-sans">m</span>{' '}
                    {String(timeLeft.seconds).padStart(2, '0')}
                    <span className="text-[10px] text-purple-300 font-sans">s</span>
                  </div>
                </div>

                <a
                  href={LINKS.selar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white font-black text-xs shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105 active:scale-95 text-center"
                >
                  Get your ticket
                </a>
              </div>

              {/* Bottom Footer Info + Not Now Dismiss */}
              <div className="flex items-center justify-between text-[10px] text-purple-400 pt-1 border-t border-purple-800/50">
                <span>Nov 7–21 • 10 Kayode Alabi, Ogba & Online</span>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="hover:text-purple-200 underline cursor-pointer"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

