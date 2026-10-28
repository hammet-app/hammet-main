'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Assemble } from './Assemble';
import { SPEAKERS } from '@/components/Static';

export default function SpeakerCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const scrollFrame = useRef<number | null>(null);
  const leaveTimer = useRef<number | null>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);

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

  const goTo = useCallback((next: number) => {
    const normalized = (next + SPEAKERS.length) % SPEAKERS.length;
    recordActive(normalized);
    const card = cardsRef.current[normalized];
    if (!card) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'start' });
  }, [recordActive]);

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

  useEffect(() => () => {
    if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
    if (leaveTimer.current !== null) window.clearTimeout(leaveTimer.current);
  }, []);

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
    <div className="speaker-carousel">
      <div className="speaker-carousel__controls" aria-label="Facilitator carousel controls">
        <button type="button" onClick={() => goTo(activeRef.current - 1)} aria-label="Previous facilitator">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" onClick={() => goTo(activeRef.current + 1)} aria-label="Next facilitator">
          <span aria-hidden="true">→</span>
        </button>
      </div>

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
        {SPEAKERS.map((speaker, index) => (
          <Assemble
            as="article"
            className="speaker-card"
            key={speaker.n}
            exiting={leavingIndex === index}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${SPEAKERS.length}: ${speaker.n}`}
          >
            <div
              className="speaker-card__frame"
              ref={(node) => { cardsRef.current[index] = node; }}
            >
              <Image
                className="speaker-card__portrait"
                src={`/assets/people/${speaker.photo}`}
                alt={speaker.n}
                fill
                sizes="(max-width: 600px) 84vw, (max-width: 1024px) 48vw, 32vw"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              <div className="speaker-card__copy">
                <h3>{speaker.n}</h3>
                <p className="speaker-card__role">{speaker.r}</p>
                {speaker.b ? <p className="speaker-card__bio">{speaker.b}</p> : null}
              </div>
            </div>
          </Assemble>
        ))}
      </div>

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
