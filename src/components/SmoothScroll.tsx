"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function SmoothScroll() {
  useEffect(() => {
    const initLenis = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.Lenis && !window.__lenis) {
        // @ts-ignore
        const lenis = new window.Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.2,
        });

        // @ts-ignore
        window.__lenis = lenis;

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    };

    initLenis();
  }, []);

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        // @ts-ignore
        if (typeof window !== "undefined" && window.Lenis && !window.__lenis) {
          // @ts-ignore
          const lenis = new window.Lenis({
            duration: 1.1,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.2,
          });
          // @ts-ignore
          window.__lenis = lenis;
          function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
        }
      }}
    />
  );
}

