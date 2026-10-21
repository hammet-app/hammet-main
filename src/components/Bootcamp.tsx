'use client';
import { useEffect } from 'react';
import { LACE } from '@/lib/config';
import { startBc, useBc } from '@/lib/bootcamp';

/** Mounted once in the layout: starts the Lagos-time bootcamp clock. */
export function BootcampStateSync() {
  useEffect(() => startBc(), []);
  return null;
}

/** Text inside the yellow "live" pill. */
export function BcBadgeText() {
  const bc = useBc();
  let t = 'LACE Bootcamp · 1 to 21 October';
  if (bc?.state === 'live')
    t = `Live now · Day ${bc.idx} of ${bc.total} · tonight ${LACE.bootcamp.time}`;
  else if (bc?.state === 'before') t = `Starts 1 October · ${LACE.bootcamp.time}`;
  else if (bc?.state === 'done') t = 'Bootcamp completed · get access to the sessions';
  return <span suppressHydrationWarning>{t}</span>;
}

/** "Day 20 of 21", "Completed" or "1 to 21 Oct". */
export function BcDate() {
  const bc = useBc();
  const t =
    bc?.state === 'live'
      ? `Day ${bc.idx} of ${bc.total}`
      : bc?.state === 'done'
        ? 'Completed'
        : '1 to 21 Oct';
  return <>{t}</>;
}
