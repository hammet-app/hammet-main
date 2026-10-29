'use client';
import { useEffect, useRef } from 'react';
import { TESTIMONIALS, type Testimonial } from '@/lib/config';

export function TestimonialCard({ t, full = false }: { t: Testimonial; full?: boolean }) {
  return (
    <div className={'card q' + (full ? ' full' : '') + ' testimonial-hover-card'}>
      {/* Decorative Brand Accent Quote Mark */}
      <div className="mark" aria-hidden="true">
        “
      </div>

      {/* Main Testimonial Text with Crisp High-Contrast & Hover Gradient Reveal */}
      <p className="tx testimonial-quote-text">{t.x}</p>

      {full && t.a ? (
        <div className="act">
          <b>Specific action taken</b>
          {t.a}
        </div>
      ) : null}

      {/* Participant Attribution with Prominent Avatar & Ring */}
      <div className="who">
        <span className="av-wrap">
          <span className="av-ring" />
          <span className="av">
            <img src={t.f} alt={t.n} loading="lazy" />
          </span>
        </span>
        <div className="min-w-0 flex-1">
          <div className="nm truncate">{t.n}</div>
          <div className="tt line-clamp-1">{t.t}</div>
        </div>
      </div>
    </div>
  );
}

/** Every testimonial, with the specific action. Used on /testimonials. */
export function TestimonialsFull() {
  return (
    <>
      {TESTIMONIALS.map((t) => (
        <TestimonialCard key={t.n} t={t} full />
      ))}
    </>
  );
}

/** Home page: up to 5 testimonials marked `home: true` in lib/config.ts. Scrolls sideways slowly and back. No duplicates. */
export function HomeTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  let list = TESTIMONIALS.filter((t) => t.home).slice(0, 5);
  if (!list.length) list = TESTIMONIALS.slice(0, 5);

  useEffect(() => {
    const g = ref.current;
    if (!g) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let dir = 1,
      paused = false,
      vis = false,
      hold = 0,
      raf = 0,
      timer: number | undefined;
    const io = new IntersectionObserver((e) => {
      vis = e[0].isIntersecting;
    });
    io.observe(g);
    const stop = () => {
      paused = true;
      window.clearTimeout(timer);
    };
    const go = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        paused = false;
      }, 2500);
    };
    const on = ['pointerenter', 'pointerdown', 'touchstart', 'focusin'],
      off = ['pointerleave', 'pointerup', 'touchend', 'focusout'];
    on.forEach((ev) => g.addEventListener(ev, stop, { passive: true }));
    off.forEach((ev) => g.addEventListener(ev, go, { passive: true }));
    const step = () => {
      if (!paused && vis && !reduce) {
        const max = g.scrollWidth - g.clientWidth;
        if (max > 4) {
          if (hold > 0) hold--;
          else {
            g.scrollLeft = g.scrollLeft + dir * 0.7;
            if (g.scrollLeft >= max - 1 && dir > 0) {
              dir = -1;
              hold = 90;
            } else if (g.scrollLeft <= 0 && dir < 0) {
              dir = 1;
              hold = 90;
            }
          }
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.clearTimeout(timer);
      on.forEach((ev) => g.removeEventListener(ev, stop));
      off.forEach((ev) => g.removeEventListener(ev, go));
    };
  }, []);

  return (
    <div className="tgal" ref={ref} aria-label="Testimonials">
      {list.map((t) => (
        <TestimonialCard key={t.n} t={t} />
      ))}
    </div>
  );
}
