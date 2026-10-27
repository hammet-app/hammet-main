'use client';

import { useEffect, useState } from 'react';
import { LACE } from '@/lib/config';

const pad = (value: number) => String(value).padStart(2, '0');

export default function Countdown() {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = Date.parse(LACE.eventStart);
    let interval: number | null = null;

    const tick = () => {
      const remaining = Math.floor((target - Date.now()) / 1000);
      if (remaining <= 0) {
        setSecondsLeft(null);
        if (interval !== null) window.clearInterval(interval);
        return;
      }
      setSecondsLeft(remaining);
    };

    const initialTick = window.setTimeout(tick, 0);
    interval = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(initialTick);
      if (interval !== null) window.clearInterval(interval);
    };
  }, []);

  if (secondsLeft === null) return null;
  const values = [
    [String(Math.floor(secondsLeft / 86400)), 'Days'],
    [pad(Math.floor((secondsLeft % 86400) / 3600)), 'Hours'],
    [pad(Math.floor((secondsLeft % 3600) / 60)), 'Mins'],
    [pad(secondsLeft % 60), 'Secs'],
  ];

  return (
    <div className="lace-countdown">
      <span className="lace-countdown__label">Opening day in</span>
      <div className="lace-countdown__row" role="timer" aria-label="Countdown to 7 November 2026">
        {values.map(([value, label]) => (
          <div className="lace-countdown__unit" key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
