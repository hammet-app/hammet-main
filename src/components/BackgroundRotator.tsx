'use client';
import { useEffect, useState } from 'react';
import { BG_INDEXES, PHOTOS } from '@/lib/gallery';
import { usePathname } from 'next/navigation';

/** The fixed, slowly changing event photo behind the whole site. Delete <BackgroundRotator /> in app/layout.tsx to remove it. */
export default function BackgroundRotator() {
  const pathname = usePathname();
  const [cur, setCur] = useState(0);
  useEffect(() => {
    if (pathname === '/lace') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setCur((c) => (c + 1) % BG_INDEXES.length), 7000);
    return () => clearInterval(id);
  }, [pathname]);
  if (pathname === '/lace') return null;
  return (
    <div className="bgfx" aria-hidden="true">
      {BG_INDEXES.map((p, i) => (
        <img
          key={p}
          src={PHOTOS[p].src}
          alt=""
          decoding="async"
          className={i === cur ? 'on' : undefined}
        />
      ))}
    </div>
  );
}
