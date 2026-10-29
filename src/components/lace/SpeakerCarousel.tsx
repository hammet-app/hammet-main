'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { Assemble } from './Assemble';
import { SPEAKERS } from '@/components/Static';
import { LINKS } from '@/lib/config';

const SPEAKER_THEMES = [
  {
    bg: '#EA580C',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.15) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #F97316 0%, #C2410C 100%)',
    badgeBg: '#FEF08A',
    badgeText: '#854D0E',
    tag: 'EXECUTIVE FOUNDER',
  },
  {
    bg: '#5B21B6',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)',
    badgeBg: '#BBF7D0',
    badgeText: '#166534',
    tag: 'BRAND & MARKETING',
  },
  {
    bg: '#BE185D',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #EC4899 0%, #9D174D 100%)',
    badgeBg: '#CFFAFE',
    badgeText: '#155E75',
    tag: 'ENTERPRISE LEADERSHIP',
  },
  {
    bg: '#0E7490',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #06B6D4 0%, #0E7490 100%)',
    badgeBg: '#FEF08A',
    badgeText: '#854D0E',
    tag: 'AI ENGINEERING',
  },
  {
    bg: '#854D0E',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #EAB308 0%, #A16207 100%)',
    badgeBg: '#E9D5FF',
    badgeText: '#581C87',
    tag: 'OPERATIONS & PRODUCT',
  },
  {
    bg: '#047857',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #10B981 0%, #047857 100%)',
    badgeBg: '#FCE7F3',
    badgeText: '#9D174D',
    tag: 'SALES & FINANCE',
  },
  {
    bg: '#4338CA',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #6366F1 0%, #3730A3 100%)',
    badgeBg: '#CCFBF1',
    badgeText: '#115E59',
    tag: 'VENTURE & GRANTS',
  },
  {
    bg: '#C026D3',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #D946EF 0%, #86198F 100%)',
    badgeBg: '#FEF3C7',
    badgeText: '#92400E',
    tag: 'SYSTEMS & AUTOMATION',
  },
  {
    bg: '#1D4ED8',
    rays: 'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.13) 0deg 10deg, transparent 10deg 20deg), linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
    badgeBg: '#F3E8FF',
    badgeText: '#6B21A8',
    tag: 'TECH COMMUNITY',
  },
];

export default function SpeakerCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const scrollFrame = useRef<number | null>(null);
  const leaveTimer = useRef<number | null>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const recordActive = useCallback((next: number) => {
    const normalized = (next + SPEAKERS.length) % SPEAKERS.length;
    if (normalized === activeRef.current) return;
    const previous = activeRef.current;
    activeRef.current = normalized;
    setActiveIndex(normalized);
    setLeavingIndex(previous);
    if (leaveTimer.current !== null) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setLeavingIndex(null), 620);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      const normalized = (next + SPEAKERS.length) % SPEAKERS.length;
      recordActive(normalized);
      const card = cardsRef.current[normalized];
      if (!card) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      card.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    },
    [recordActive]
  );

  const onScroll = useCallback(() => {
    if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
    scrollFrame.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;
      const trackLeft = track.getBoundingClientRect().left;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const cardLeft = card.getBoundingClientRect().left - trackLeft + track.scrollLeft;
        const distance = Math.abs(cardLeft - track.scrollLeft);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });
      recordActive(nearestIndex);
    });
  }, [recordActive]);

  useEffect(
    () => () => {
      if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
      if (leaveTimer.current !== null) window.clearTimeout(leaveTimer.current);
    },
    []
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeRef.current + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeRef.current - 1);
    }
  };

  return (
    <div className="speaker-carousel speaker-carousel--edge">
      {/* Top Carousel Nav Controls */}
      <div className="speaker-carousel__controls" aria-label="Facilitator carousel controls">
        <button
          type="button"
          onClick={() => goTo(activeRef.current - 1)}
          aria-label="Previous facilitator"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => goTo(activeRef.current + 1)}
          aria-label="Next facilitator"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Edge-to-edge Track */}
      <div
        className="speaker-carousel__track"
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="LACE facilitators"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onScroll={onScroll}
      >
        {SPEAKERS.map((speaker, index) => {
          const theme = SPEAKER_THEMES[index % SPEAKER_THEMES.length];
          const isFlipped = !!flippedCards[index];

          return (
            <Assemble
              as="article"
              className="speaker-card-wrapper"
              key={speaker.n}
              exiting={leavingIndex === index}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${SPEAKERS.length}: ${speaker.n}`}
              style={{ '--assemble-paper': 'transparent' } as CSSProperties}
            >
              <div
                className={`speaker-card__3d-container ${isFlipped ? 'is-flipped' : ''}`}
                ref={(node) => {
                  cardsRef.current[index] = node;
                }}
                onClick={() => toggleFlip(index)}
              >
                <div className="speaker-card__flipper">
                  {/* ──────────────── FRONT FACE ──────────────── */}
                  <div
                    className="speaker-card__face speaker-card__front"
                    style={{ background: theme.rays }}
                  >
                    {/* Top Tag */}
                    <div className="speaker-card__top-bar">
                      <span
                        className="speaker-card__tag"
                        style={{ background: theme.badgeBg, color: theme.badgeText }}
                      >
                        {theme.tag}
                      </span>
                      <span className="speaker-card__flip-hint" aria-hidden="true">
                        ↻ Flip
                      </span>
                    </div>

                    {/* Portrait Photo */}
                    <div className="speaker-card__portrait-box">
                      <Image
                        className="speaker-card__portrait-img"
                        src={`/assets/people/${speaker.photo}`}
                        alt={speaker.n}
                        fill
                        sizes="(max-width: 600px) 78vw, (max-width: 1024px) 38vw, 300px"
                        priority={index < 3}
                      />
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="speaker-card__meta-bar">
                      <h3 className="speaker-card__name">{speaker.n}</h3>
                      <p className="speaker-card__role-text">{speaker.r}</p>
                      <button
                        type="button"
                        className="speaker-card__view-bio-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(index);
                        }}
                      >
                        <span>View Bio ↘</span>
                      </button>
                    </div>
                  </div>

                  {/* ──────────────── BACK FACE (FLIPPED) ──────────────── */}
                  <div className="speaker-card__face speaker-card__back">
                    <div className="speaker-back__inner">
                      {/* Back Header */}
                      <div className="speaker-back__header">
                        <div className="speaker-back__avatar-wrap">
                          <Image
                            src={`/assets/people/${speaker.photo}`}
                            alt={speaker.n}
                            width={44}
                            height={44}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="speaker-back__name">{speaker.n}</h4>
                          <span className="speaker-back__role">{speaker.r}</span>
                        </div>
                        <button
                          type="button"
                          className="speaker-back__close-btn"
                          aria-label="Flip back"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(index);
                          }}
                        >
                          ✕
                        </button>
                      </div>

                      {/* Topics / Badges */}
                      <div className="speaker-back__badges">
                        {speaker.t.map((tag) => (
                          <span key={tag} className="speaker-back__tag-badge">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Detailed Bio / Track description */}
                      <div className="speaker-back__bio-body">
                        <p>
                          {speaker.b ||
                            `Leading masterclass sessions and interactive workshops at LACE 1.0. Gain actionable insights from proven industry experience.`}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="speaker-back__actions">
                        <a
                          className="btn-elevated-brutal speaker-back__cta"
                          href={LINKS.selar}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          REGISTER FOR LACE 1.0 →
                        </a>
                        <button
                          type="button"
                          className="speaker-back__flip-return"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(index);
                          }}
                        >
                          ↻ Flip to portrait
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Assemble>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="speaker-carousel__indicators" aria-label="Choose facilitator">
        {SPEAKERS.map((speaker, index) => (
          <button
            type="button"
            key={speaker.n}
            aria-label={`Go to facilitator ${index + 1}: ${speaker.n}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Facilitator {activeIndex + 1} of {SPEAKERS.length}: {SPEAKERS[activeIndex]?.n}
      </p>
    </div>
  );
}
