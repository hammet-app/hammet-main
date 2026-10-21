'use client';
import { useEffect, useState } from 'react';
import { LACE } from '@/lib/config';

const pad = (n: number) => (n < 10 ? '0' + n : String(n));

export default function Countdown() {
  const [s, setS] = useState<number | null>(null);
  useEffect(() => {
    const target = Date.parse(LACE.eventStart);
    const tick = () => setS(Math.floor(Math.max(0, target - Date.now()) / 1000));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const v = s ?? 0;
  const box = (num: string, label: string) => (
    <div className="cd-box">
      <b>{num}</b>
      <span>{label}</span>
    </div>
  );
  return (
    <div className="cd tilt">
      <div className="cd-lab">Opening Ceremony day in</div>
      <div className="cd-row" role="timer" aria-live="off">
        {box(String(Math.floor(v / 86400)), 'Days')}
        {box(pad(Math.floor((v % 86400) / 3600)), 'Hours')}
        {box(pad(Math.floor((v % 3600) / 60)), 'Mins')}
        {box(pad(v % 60), 'Secs')}
      </div>
      <div className="cd-foot">Saturday 31 October 2026 · 10 Kayode Alabi, Ogba, Lagos</div>
    </div>
  );
}
