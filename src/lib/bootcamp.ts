'use client';
import { useSyncExternalStore } from 'react';
import { LACE } from '@/lib/config';

export type BcState = 'before' | 'live' | 'done';
export interface Bc {
  idx: number;
  total: number;
  state: BcState;
}

/** Works out where we are in the bootcamp using Lagos time (UTC+1). `forced` is a YYYY-MM-DD string used for previews. */
export function computeBc(forced?: string | null): Bc {
  const q = (forced || '').split('-').map(Number);
  const now =
    q.length === 3 && q.every((n) => !Number.isNaN(n))
      ? new Date(Date.UTC(q[0], q[1] - 1, q[2], 12))
      : new Date(Date.now() + 3600000);
  const [fy, fm, fd] = LACE.bootcamp.firstDay.split('-').map(Number);
  const first = Date.UTC(fy, fm - 1, fd);
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const idx = Math.round((today - first) / 86400000) + 1; // 1 = first day
  const total = LACE.bootcamp.days;
  return { idx, total, state: idx < 1 ? 'before' : idx > total ? 'done' : 'live' };
}

/** "Thu 1 Oct" for a given bootcamp day number. */
export function dayLabel(n: number): string {
  const [fy, fm, fd] = LACE.bootcamp.firstDay.split('-').map(Number);
  const d = new Date(Date.UTC(fy, fm - 1, fd) + (n - 1) * 86400000);
  return (
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getUTCDay()] +
    ' ' +
    d.getUTCDate() +
    ' ' +
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][
      d.getUTCMonth()
    ]
  );
}

let current: Bc | null = null;
const listeners = new Set<() => void>();
export function setBc(next: Bc) {
  current = next;
  if (typeof document !== 'undefined') document.body.setAttribute('data-bcstate', next.state);
  listeners.forEach((l) => l());
}
/** Called once from the layout. Re-checks every minute so an open page flips at midnight. */
export function startBc(): () => void {
  const forced = new URLSearchParams(window.location.search).get('bcdate');
  const tick = () => setBc(computeBc(forced));
  tick();
  const id = window.setInterval(tick, 60000);
  return () => window.clearInterval(id);
}
export function useBc(): Bc | null {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => {
        listeners.delete(cb);
      };
    },
    () => current,
    () => null,
  );
}
