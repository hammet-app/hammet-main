'use client';
import { useEffect } from 'react';

/** Page-wide effects: scroll reveal, number count-up, nav shadow, mobile sticky bar and card tilt. */
export default function SiteEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const countUp = (el: HTMLElement) => {
      const to = Number(el.getAttribute('data-count'));
      let t0: number | null = null;
      if (reduce) {
        el.textContent = to.toLocaleString('en-US');
        return;
      }
      const step = (ts: number) => {
        if (t0 === null) t0 = ts;
        const p = Math.min(1, (ts - t0) / 1200);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const t = en.target as HTMLElement;
          t.classList.add('in');
          window.setTimeout(() => t.classList.add('done'), 1300);
          t.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
          if (t.hasAttribute('data-count')) countUp(t);
          io.unobserve(t);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    const seen = new WeakSet<Element>();
    const scan = () =>
      document.querySelectorAll('.reveal:not(.in)').forEach((e) => {
        if (!seen.has(e)) {
          seen.add(e);
          io.observe(e);
        }
      });
    scan();
    let pending = false;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onScroll = () => {
      const y = window.scrollY;
      document.getElementById('nav')?.classList.toggle('scrolled', y > 10);
      document.getElementById('sticky')?.classList.toggle('show', y > 420);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const tiltOn = !reduce && !window.matchMedia('(hover: none)').matches;
    const onMove = (e: PointerEvent) => {
      const c = (e.target as HTMLElement).closest?.('.tilt') as HTMLElement | null;
      document.querySelectorAll<HTMLElement>('.tilt.tilting').forEach((t) => {
        if (t !== c) {
          t.classList.remove('tilting');
          t.style.transform = '';
        }
      });
      if (!c) return;
      const r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      c.classList.add('tilting');
      c.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    };
    if (tiltOn) document.addEventListener('pointermove', onMove);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointermove', onMove);
    };
  }, []);
  return null;
}
