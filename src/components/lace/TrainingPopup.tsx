'use client';

import { useState, useSyncExternalStore } from 'react';
import { LINKS } from '@/lib/config';

const subscribeToMobileQuery = (callback: () => void) => {
  const query = window.matchMedia('(max-width: 700px)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};

const isMobileViewport = () => window.matchMedia('(max-width: 700px)').matches;
const getServerMobileSnapshot = () => false;

export default function TrainingPopup() {
  const isMobile = useSyncExternalStore(subscribeToMobileQuery, isMobileViewport, getServerMobileSnapshot);
  const [collapsedOverride, setCollapsedOverride] = useState<boolean | null>(null);
  const collapsed = collapsedOverride ?? isMobile;

  return (
    <aside
      className={`training-popup${collapsed ? ' training-popup--collapsed' : ''}`}
      aria-label="LACE ticket offer"
    >
      {collapsed ? (
        <div className="training-popup__mini">
          <span>LACE AI certification</span>
          <button
            className="training-popup__expand"
            type="button"
            onClick={() => setCollapsedOverride(false)}
            aria-label="Expand training offer"
          >
            <span aria-hidden="true">+</span>
          </button>
        </div>
      ) : (
        <>
          <button
            className="training-popup__close"
            type="button"
            onClick={() => setCollapsedOverride(true)}
            aria-label="Minimize training offer"
          >
            <span aria-hidden="true">×</span>
          </button>
          <p>
            2 weeks intensive AI training and certification. The exact sets of knowledge you need to
            maximize AI and get ahead of everyone else.
          </p>
          {/* Add the training flyer here when it is ready:
          <Image src="/assets/flyers/lace-flyer.jpg" alt="LACE training flyer" width={480} height={320} />
          */}
          <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
            Buy a ticket
          </a>
        </>
      )}
    </aside>
  );
}
