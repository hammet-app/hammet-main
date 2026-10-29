'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LINKS } from '@/lib/config';

const ITEMS = [
  { label: 'Your path', href: '/lace#learn' },
  { label: 'Bootcamp', href: '/bootcamp' },
  { label: 'Tickets', href: '/lace#tickets' },
  { label: 'Speakers', href: '/lace#speakers' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/lace#faq' },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const cur = (href: string) => (href === path ? 'cur' : undefined);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <nav id="nav">
      <div className="nav-in wrap">
        <Link className="logo" href="/" aria-label="Hammet">
          <img src="/favicon.ico" width={32} height={32} alt="Hammet" className="logo-img" />
          <div className="logo-t">
            <b className="hide-m">Hammet</b>
            <span className="hide-m">School of AI</span>
          </div>
        </Link>

        <div className="nav-r">
          <div className="nav-links">
            {ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={cur(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="menu-btn"
            id="menubtn"
            type="button"
            aria-expanded={open}
            aria-controls="mnav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((current) => !current)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className={`menu-icon${open ? ' menu-icon--open' : ''}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>

          <a className="btn btn-primary" href={LINKS.selar} target="_blank" rel="noopener noreferrer">
            <span>
              Register<span className="hide-m"> for LACE 1.0</span>
            </span>
          </a>
        </div>
      </div>

      {open ? <div className="mnav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" /> : null}

      <div
        className={`mnav${open ? ' open' : ''}`}
        id="mnav"
        role="dialog"
        aria-label="Navigation Menu"
        aria-modal={open || undefined}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <Link href="/" className={cur('/')}>
          Hammet Home
        </Link>
        <Link href="/lace" className={cur('/lace')}>
          LACE 1.0 Overview
        </Link>
        {ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className={cur(item.href)}>
            {item.label}
          </Link>
        ))}
        <a href={LINKS.waitlist} target="_blank" rel="noopener noreferrer" className="mnav-waitlist">
          Join the waitlist <span aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
}
