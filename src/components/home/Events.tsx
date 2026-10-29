'use client';

import { useEffect, useRef } from 'react';
import { LINKS } from '@/lib/config';
import { Assemble } from '@/components/lace/Assemble';

const BREAKDOWN = [
  ['Lagos', '6', 'events'],
  ['Imo state', '3', 'Events'],
  ['Oyo state', '2', 'Events'],
  ['Akwa Ibom state', '1', 'event'],
  ['Anambra state', '1', 'event'],
];
const MAX_EVENTS = Math.max(...BREAKDOWN.map(([, count]) => Number(count)));

export default function Events() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      section.classList.add('lace-reveal--visible');
      return;
    }

    let sectionIsVisible = false;
    const revealWhenUnlocked = () => {
      if (sectionIsVisible && !document.documentElement.classList.contains('puzzle-lock')) {
        section.classList.add('lace-reveal--visible');
        observer.disconnect();
        unlockObserver.disconnect();
      }
    };
    const observer = new IntersectionObserver((entries) => {
      sectionIsVisible = Boolean(entries[0]?.isIntersecting);
      revealWhenUnlocked();
    }, { threshold: 0.2 });
    const unlockObserver = new MutationObserver(revealWhenUnlocked);

    observer.observe(section);
    unlockObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      observer.disconnect();
      unlockObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="lace-section lace-events"
    >
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">Previous events</span>
          <h2>LACE’s track record.</h2>
          <p>
            Within the last 3 years, the team behind LACE has hosted over 2000 people in 13 events
            across 5 states.
          </p>
        </Assemble>
        <ol className="event-breakdown">
          {BREAKDOWN.map(([state, count, unit]) => (
            <li key={state}>
              <Assemble as="article" className="event-breakdown__item" aria-label={`${state} — ${count} ${unit}`}>
                <h3>{state}</h3>
                <div
                  className="event-breakdown__progress"
                  role="progressbar"
                  aria-label={`${state} events`}
                  aria-valuemin={0}
                  aria-valuemax={MAX_EVENTS}
                  aria-valuenow={Number(count)}
                >
                  <span style={{ width: `${(Number(count) / MAX_EVENTS) * 100}%` }} />
                </div>
                <p className="event-breakdown__count"> <b>{count}</b> {unit}</p>
              </Assemble>
            </li>
          ))}
        </ol>
        <Assemble className="events-cta">
          <div>
            <b>Join a community that has already shown up.</b>
            <span>Register for LACE 1.0 and be part of what is next.</span>
          </div>
          <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
            Register for LACE 1.0 <span aria-hidden="true">→</span>
          </a>
        </Assemble>
      </div>
    </section>
  );
}
