'use client';

import Image from 'next/image';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { LINKS } from '@/lib/config';

const subscribeToMobileQuery = (callback: () => void) => {
  const query = window.matchMedia('(max-width: 700px)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};

const isMobileViewport = () => window.matchMedia('(max-width: 700px)').matches;
const getServerMobileSnapshot = () => false;
const COUNTDOWN_SECONDS = 32 * 60 * 60;
const COUNTDOWN_STORAGE_KEY = 'lace-offer-countdown-end';

function formatCountdown(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, '0')).join(':');
}

export default function TrainingPopup() {
  const isMobile = useSyncExternalStore(subscribeToMobileQuery, isMobileViewport, getServerMobileSnapshot);
  const [collapsedOverride, setCollapsedOverride] = useState<boolean | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(COUNTDOWN_SECONDS);
  const collapsed = collapsedOverride ?? isMobile;

  useEffect(() => {
    if (dismissed) return;

    const now = Date.now();
    let deadline = now + COUNTDOWN_SECONDS * 1000;

    try {
      const savedDeadline = Number(window.localStorage.getItem(COUNTDOWN_STORAGE_KEY));
      if (Number.isFinite(savedDeadline) && savedDeadline > now) {
        deadline = savedDeadline;
      } else {
        window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(deadline));
      }
    } catch {
      // Keep the countdown running for this visit if browser storage is unavailable.
    }

    const tick = () => {
      const remaining = Math.ceil((deadline - Date.now()) / 1000);
      if (remaining <= 0) {
        deadline = Date.now() + COUNTDOWN_SECONDS * 1000;
        try {
          window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(deadline));
        } catch {
          // The in-memory deadline still resets when storage is unavailable.
        }
        setSecondsRemaining(COUNTDOWN_SECONDS);
        return;
      }
      setSecondsRemaining(remaining);
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <aside
      className={`training-popup${collapsed ? ' training-popup--collapsed' : ''}`}
      aria-label="LACE ticket offer"
    >
      {collapsed ? (
        <div className="training-popup__mini">
          <button
            className="training-popup__reopen"
            type="button"
            onClick={() => setCollapsedOverride(false)}
            aria-label="Reopen LACE 50 percent offer"
          >
            <span className="training-popup__mini-label">50% OFF LACE expires in</span>
            <time
              className="training-popup__mini-countdown"
              role="timer"
              aria-label={`${Math.floor(secondsRemaining / 3600)} hours, ${Math.floor((secondsRemaining % 3600) / 60)} minutes, ${secondsRemaining % 60} seconds remaining`}
              dateTime={`PT${secondsRemaining}S`}
            >
              {formatCountdown(secondsRemaining)}
            </time>
          </button>
          <button
            className="training-popup__dismiss"
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss offer"
          >
            <span aria-hidden="true">{'\u00d7'}</span>
          </button>
        </div>
      ) : (
        <>
          <button
            className="training-popup__close"
            type="button"
            onClick={() => setCollapsedOverride(true)}
            aria-label="Collapse offer"
          >
            <span aria-hidden="true">{'\u00d7'}</span>
          </button>
          <span className="training-popup__eyebrow">2 weeks intensive training + Certification + Examination </span>
          <div className="training-popup__promo" aria-label="50% off for 48 hours">
            <strong>50% OFF</strong>
            <span className="training-popup__promo-note">for 48 hours</span>
          </div>
          <div className="training-popup__flyer">
            <Image
              src="/assets/flyers/flyer.png"
              alt="Lagos AI Career Experience event flyer"
              width={706}
              height={816}
              sizes="(max-width: 700px) 190px, 210px"
            />
          </div>
          <div className="training-popup__action-row">
            <div className="training-popup__countdown">
              <span className="training-popup__countdown-label">Offer expires in</span>
              <time
                className="training-popup__timer"
                role="timer"
                aria-label={`${Math.floor(secondsRemaining / 3600)} hours, ${Math.floor((secondsRemaining % 3600) / 60)} minutes, ${secondsRemaining % 60} seconds remaining`}
                dateTime={`PT${secondsRemaining}S`}
              >
                {formatCountdown(secondsRemaining)}
              </time>
            </div>
            <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
              <span>Buy a ticket</span>
              <span aria-hidden="true">{'\u2192'}</span>
            </a>
          </div>
        </>
      )}
    </aside>
  );
}
