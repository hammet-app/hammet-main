'use client';

import { useState, useMemo } from 'react';
import { ENRICHED_TESTIMONIALS, type EnrichedTestimonial } from './wallData';
import TestimonialModal from './TestimonialModal';

export default function WallOfLove() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'video' | 'leadership' | 'sales' | 'growth'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTestimonial, setSelectedTestimonial] = useState<EnrichedTestimonial | null>(null);

  // Filter testimonials based on category and search
  const filteredList = useMemo(() => {
    return ENRICHED_TESTIMONIALS.filter((t) => {
      // Category filter
      if (activeCategory === 'video' && t.cardType !== 'video') return false;
      if (activeCategory === 'leadership' && t.category !== 'leadership') return false;
      if (activeCategory === 'sales' && t.category !== 'sales') return false;
      if (activeCategory === 'growth' && t.category !== 'growth') return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inName = t.n.toLowerCase().includes(q);
        const inTitle = t.t.toLowerCase().includes(q);
        const inText = t.x.toLowerCase().includes(q);
        const inAction = t.a ? t.a.toLowerCase().includes(q) : false;
        const inBadge = t.badge.toLowerCase().includes(q);
        return inName || inTitle || inText || inAction || inBadge;
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  // Current index for modal navigation
  const currentIndex = selectedTestimonial
    ? filteredList.findIndex((t) => t.id === selectedTestimonial.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedTestimonial(filteredList[currentIndex - 1]);
    } else {
      setSelectedTestimonial(filteredList[filteredList.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredList.length - 1) {
      setSelectedTestimonial(filteredList[currentIndex + 1]);
    } else {
      setSelectedTestimonial(filteredList[0]);
    }
  };

  // Helper to render text with highlighted keywords
  const renderHighlightedText = (text: string, words: string[]) => {
    if (!words || !words.length) return text;

    const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const match = words.some((w) => w.toLowerCase() === part.toLowerCase());
      if (match) {
        return (
          <mark
            key={i}
            className="bg-amber-200/80 text-slate-900 font-semibold px-1 py-0.5 rounded transition-colors"
          >
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  return (
    <div className="w-full">
      {/* ─────────────────────────────────────────────
          FILTER BAR & STATS HEADER (LIGHT MODE ALWAYS)
      ───────────────────────────────────────────── */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-purple-100 pb-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeCategory === 'all'
                ? 'bg-[#5B21B6] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-purple-50 hover:text-[#5B21B6]'
            }`}
          >
            All Stories ({ENRICHED_TESTIMONIALS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('video')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeCategory === 'video'
                ? 'bg-[#5B21B6] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-purple-50 hover:text-[#5B21B6]'
            }`}
          >
            <span className="text-xs">▶</span>
            <span>Featured Video Cards (6)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('leadership')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeCategory === 'leadership'
                ? 'bg-[#5B21B6] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-purple-50 hover:text-[#5B21B6]'
            }`}
          >
            Leadership & Team (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('sales')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
              activeCategory === 'sales'
                ? 'bg-[#5B21B6] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-purple-50 hover:text-[#5B21B6]'
            }`}
          >
            Sales & Revenue (5)
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stories by name, role..."
            className="w-full rounded-full border border-purple-200 bg-white px-4 py-2 pl-9 text-xs sm:text-sm text-slate-900 shadow-xs outline-none transition focus:border-[#5B21B6] focus:ring-2 focus:ring-purple-200"
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          WALL OF LOVE MASONRY GRID (LIGHT CARDS ALWAYS)
      ───────────────────────────────────────────── */}
      {filteredList.length === 0 ? (
        <div className="rounded-3xl bg-white p-12 text-center border border-purple-100 shadow-sm">
          <p className="text-base text-slate-500">
            No testimonials match &quot;{searchQuery}&quot;. Try another search term or reset the filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#5B21B6] hover:underline"
          >
            Reset all filters →
          </button>
        </div>
      ) : (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredList.map((t, idx) => {
            const isVideo = t.cardType === 'video';

            if (isVideo) {
              /* ── VIDEO / FEATURED VISUAL CARD STYLE ── */
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTestimonial(t)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedTestimonial(t);
                    }
                  }}
                  className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-3xl border border-purple-200/90 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5B21B6]"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Photo Top Section with Play Overlay */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                    <img
                      src={t.f}
                      alt={t.n}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    {/* Play button overlay */}
                    <div className="absolute left-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#06B6D4] group-hover:text-slate-950 shadow-md">
                      <svg className="h-5 w-5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    {/* Name & Stars overlay on photo */}
                    <div className="absolute right-4 bottom-3 left-16 text-right">
                      <div className="font-serif text-base font-bold text-white drop-shadow">
                        {t.n}
                      </div>
                      <div className="text-[11px] font-medium text-white/80 line-clamp-1">
                        {t.t}
                      </div>
                      <div className="flex items-center justify-end gap-0.5 text-amber-300 text-xs mt-0.5">
                        {'★★★★★'}
                      </div>
                    </div>
                  </div>

                  {/* Punchy Quote Banner (Purple Bar Like Testimonial.to) */}
                  <div className="bg-gradient-to-br from-[#4F46E5] to-[#3B0764] p-5 text-white">
                    <p className="text-sm sm:text-base font-bold leading-snug">
                      &quot;{t.shortQuote}&quot;
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs text-white/70">
                      <span className="font-semibold text-[#E6FF4D] uppercase tracking-wider text-[10px]">
                        {t.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold group-hover:text-[#67E8F9] transition-colors">
                        Click to view story ↗
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            /* ── TEXT / SOCIAL REVIEW CARD STYLE (CLEAN WHITE CARD) ── */
            return (
              <div
                key={t.id}
                onClick={() => setSelectedTestimonial(t)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTestimonial(t);
                  }
                }}
                className="group relative cursor-pointer break-inside-avoid rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-[#5B21B6]"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Header: Avatar, Name, Role & Squeeze-proof Verified Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-purple-200">
                      <img
                        src={t.f}
                        alt={t.n}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#5B21B6] transition-colors truncate">
                        {t.n}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {t.t}
                      </p>
                    </div>
                  </div>

                  {/* Social Platform Icon / Squeeze-proof Verified Badge */}
                  {t.platform === 'linkedin' && (
                    <span className="shrink-0 text-[#0A66C2] pt-0.5" aria-label="LinkedIn">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                      </svg>
                    </span>
                  )}
                  {t.platform === 'twitter' && (
                    <span className="shrink-0 text-[#1DA1F2] pt-0.5" aria-label="Twitter">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </span>
                  )}
                  {t.platform === 'hammet' && (
                    <span className="inline-flex shrink-0 whitespace-nowrap items-center gap-1 rounded-full bg-purple-50 px-2.5 py-1 text-[11px] font-bold text-[#5B21B6] border border-purple-200/80 shadow-xs">
                      <svg className="w-3 h-3 text-[#5B21B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* 5-Star Rating */}
                <div className="mt-3.5 flex items-center gap-1 text-amber-400 text-sm">
                  {'★★★★★'}
                </div>

                {/* Testimonial Text with Highlighted Keywords */}
                <div className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                  {renderHighlightedText(t.x, t.highlightWords)}
                </div>

                {/* Specific Action Taken Snippet */}
                {t.a && (
                  <div className="mt-4 rounded-xl bg-purple-50/70 p-3 border border-purple-200/50 text-xs text-slate-800">
                    <span className="font-bold text-[#5B21B6] block mb-1">
                      ⚡ Action Taken:
                    </span>
                    <span className="line-clamp-2">{t.a}</span>
                  </div>
                )}

                {/* Bottom affiliation and expanded prompt */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-400">
                  <span className="font-bold uppercase tracking-wider text-[#5B21B6]">
                    {t.badge}
                  </span>
                  <span className="font-medium text-slate-500 group-hover:text-[#5B21B6] transition-colors">
                    Click to expand ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─────────────────────────────────────────────
          SMOOTH ANIMATED MODAL FOR DETAIL VIEW
      ───────────────────────────────────────────── */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalCount={filteredList.length}
      />
    </div>
  );
}
