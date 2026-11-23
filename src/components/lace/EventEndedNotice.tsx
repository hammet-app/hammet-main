'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const NOTICE_PATHS = ['/lace', '/bootcamp', '/testimonials'];

export default function EventEndedNotice() {
  const pathname = usePathname();
  const [dialogOpen, setDialogOpen] = useState(false);
  const showBanner = NOTICE_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  useEffect(() => {
    const handleTicketClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const ticketLink = event.target.closest('a[href="#event-ended"]');
      if (!ticketLink) return;

      event.preventDefault();
      setDialogOpen(true);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDialogOpen(false);
    };

    document.addEventListener('click', handleTicketClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleTicketClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {showBanner && (
        <aside
          id="event-ended"
          role="status"
          aria-live="polite"
          className="flex flex-col items-center gap-1 bg-[#3B0764] px-4 py-3 text-center text-sm text-white sm:flex-row sm:justify-center sm:gap-3"
        >
          <strong className="text-[#67E8F9]">LACE 1.0 has ended.</strong>
          <span className="text-white/85">Thank you to everyone who joined us. Stay tuned for updates on what comes next.</span>
        </aside>
      )}

      {dialogOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/65 p-4"
          onMouseDown={() => setDialogOpen(false)}
        >
          <section
            aria-labelledby="lace-event-ended-title"
            aria-describedby="lace-event-ended-description"
            aria-modal="true"
            className="w-full max-w-md rounded-2xl border border-purple-100 bg-white p-6 text-slate-900 shadow-2xl dark:border-white/10 dark:bg-[#1c0b2b] dark:text-white sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-700 dark:text-cyan-300">LACE 1.0</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight" id="lace-event-ended-title">This event has ended</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300" id="lace-event-ended-description">
              Ticket sales are closed. Thank you for your interest, and stay tuned for updates on
              future Hammet events.
            </p>
            <button
              autoFocus
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#5B21B6] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6D28D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              onClick={() => setDialogOpen(false)}
              type="button"
            >
              Got it
            </button>
          </section>
        </div>
      )}
    </>
  );
}
