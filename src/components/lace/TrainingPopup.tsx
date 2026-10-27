'use client';

import { useEffect, useState } from 'react';
import { LINKS } from '@/lib/config';

const DISMISS_KEY = 'lace-training-popup-dismissed';

export default function TrainingPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(DISMISS_KEY) === '1') return;
    } catch {
      // Storage can be blocked; the popup still works for the current page view.
    }
    const timer = window.setTimeout(() => setVisible(true), 850);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // Keep the in-memory dismissal even when session storage is unavailable.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="training-popup" aria-label="LACE ticket offer">
      <button
        className="training-popup__close"
        type="button"
        onClick={dismiss}
        aria-label="Close training offer"
      >
        <span aria-hidden="true">×</span>
      </button>
      <p>
        2 weeks intensive AI training and certification. The exact sets of knowledge you need to
        maximize AI and get ahead of everyone else.
      </p>
      {/* <Image src="/assets/flyers/lace-flyer.jpg" alt="LACE training flyer" width={480} height={320} /> */}
      <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
        Buy a ticket
      </a>
    </aside>
  );
}
