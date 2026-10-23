'use client';

import { useEffect, useCallback } from 'react';
import { LINKS } from '@/lib/config';
import type { EnrichedTestimonial } from './wallData';

interface TestimonialModalProps {
  testimonial: EnrichedTestimonial | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export default function TestimonialModal({
  testimonial,
  onClose,
  onPrev,
  onNext,
  currentIndex = 0,
  totalCount = 15,
}: TestimonialModalProps) {
  // Handle keyboard events: Escape to close, Left/Right arrows to navigate
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (!testimonial) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [testimonial, handleKeyDown]);

  if (!testimonial) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/75 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] md:h-[580px] flex flex-col md:flex-row overflow-hidden rounded-3xl bg-white shadow-2xl border border-purple-100 transform transition-all duration-300 animate-modalPop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3.5 right-3.5 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md transition hover:bg-slate-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ─────────────────────────────────────────────
            LEFT SIDE: TESTIMONIAL WRITING (LIGHT THEME ALWAYS)
        ───────────────────────────────────────────── */}
        <div className="w-full md:w-[60%] flex flex-col justify-between overflow-y-auto p-5 sm:p-7 md:p-8 bg-white text-slate-900 order-2 md:order-1 h-full">
          <div>
            {/* Header tags & 5-Star Rating */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-100">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-[#5B21B6] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
                <span>Verified LACE Participant</span>
              </div>

              <div className="flex items-center gap-1 text-amber-400 text-sm" aria-label="5 stars rating">
                {'★★★★★'}
                <span className="ml-1 text-xs font-bold text-slate-500">5.0</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="mt-4">
              <div className="text-3xl font-serif text-[#5B21B6] leading-none mb-1 select-none opacity-80">
                “
              </div>
              <h2
                id="modal-title"
                className="text-base sm:text-lg md:text-xl font-serif font-bold leading-snug tracking-tight text-[#1A0B2E]"
              >
                {testimonial.shortQuote}
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700 whitespace-pre-line font-normal">
                {testimonial.x}
              </p>
            </div>

            {/* Specific Action Taken (If Available) */}
            {testimonial.a && (
              <div className="mt-5 rounded-2xl bg-gradient-to-br from-purple-50/80 to-cyan-50/50 p-3.5 sm:p-4 border border-purple-200/70">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5B21B6] mb-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B21B6] text-white text-[9px]">
                    ✓
                  </span>
                  <span>Specific Action Taken</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-800 font-medium">
                  {testimonial.a}
                </p>
              </div>
            )}
          </div>

          {/* Author info footer & Prev/Next navigation */}
          <div className="mt-6 pt-4 border-t border-slate-100 shrink-0">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden ring-2 ring-[#5B21B6] shadow-sm">
                  <img
                    src={testimonial.f}
                    alt={testimonial.n}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    {testimonial.n}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.t}
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-1.5">
                {onPrev && (
                  <button
                    onClick={onPrev}
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 hover:text-[#5B21B6]"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                )}
                <span className="text-[11px] font-semibold text-slate-400 px-1">
                  {currentIndex + 1} / {totalCount}
                </span>
                {onNext && (
                  <button
                    onClick={onNext}
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 hover:text-[#5B21B6]"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                )}
              </div>
            </div>

            {/* Quick CTA inside modal */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2">
              <span className="text-[11px] text-slate-500">
                Want to lead and sell with confidence?
              </span>
              <a
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#5B21B6] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-[#4B0082] hover:shadow-md"
              >
                Register for LACE 1.0 →
              </a>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            RIGHT SIDE: PICTURE BY THE SIDE (FLEXIBLE & BALANCED)
        ───────────────────────────────────────────── */}
        <div className="w-full md:w-[40%] bg-gradient-to-br from-[#1E0F50] via-[#2A1566] to-[#120528] p-5 sm:p-6 flex flex-col justify-between items-center text-center relative overflow-hidden order-1 md:order-2 shrink-0 h-auto md:h-full">
          {/* Ambient decorative glowing blobs */}
          <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#06B6D4]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#7C3AED]/25 blur-3xl pointer-events-none" />

          {/* Top session pill */}
          <div className="relative z-10 w-full flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-md border border-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              LACE Bootcamp 2026
            </span>
            {testimonial.cardType === 'video' && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/40 px-2 py-0.5 text-[9px] font-bold text-[#67E8F9]">
                ▶ Video Story
              </span>
            )}
          </div>

          {/* Center Portrait Frame - Perfectly proportioned and centered */}
          <div className="relative z-10 my-auto py-3 flex flex-col items-center w-full">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl p-1 bg-gradient-to-tr from-[#06B6D4] via-[#8B5CF6] to-[#E6FF4D] shadow-xl transition-transform duration-300 hover:scale-105 shrink-0">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 relative">
                <img
                  src={testimonial.f}
                  alt={testimonial.n}
                  className="w-full h-full object-cover object-top"
                />
                {testimonial.cardType === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md border border-white/40 shadow-lg">
                      <svg className="h-5 w-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Author Name & Title */}
            <div className="mt-3 text-white text-center">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#E6FF4D] mb-0.5">
                {testimonial.badge}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight drop-shadow-sm text-white">
                {testimonial.n}
              </h3>
              <p className="mt-0.5 text-[11px] sm:text-xs text-white/75 max-w-xs mx-auto">
                {testimonial.t}
              </p>
            </div>
          </div>

          {/* Bottom Pull-Quote Card */}
          <div className="relative z-10 w-full rounded-xl bg-white/10 p-3 backdrop-blur-md border border-white/15 text-left shadow-inner">
            <div className="flex items-center gap-1 text-amber-300 text-[11px] mb-0.5">
              {'★★★★★'}
              <span className="text-[9px] text-white/60 ml-1">Verified Experience</span>
            </div>
            <p className="text-xs text-white/95 italic leading-relaxed line-clamp-2">
              &quot;{testimonial.shortQuote}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
