'use client';

import { useEffect } from 'react';

const SECTION_SELECTOR = '.lace-landing > header, .lace-landing > section';

export default function SectionRevealAnimations() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionPreference.matches || !('IntersectionObserver' in window)) return;

    sections.forEach((section) => section.classList.add('lace-reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('lace-reveal--visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -10% 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
