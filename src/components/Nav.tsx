'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
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
    // Close mobile menu on route change or escape key
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
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
            <b>Hammet</b>
            <span>School of AI</span>
          </div>
        </Link>

        <div className="nav-r">
          <div className="nav-links">
            {ITEMS.map((i) => (
              <Link key={i.href} href={i.href} className={cur(i.href)}>
                {i.label}
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
            onClick={() => setOpen((o) => !o)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span aria-hidden="true" style={{ fontSize: '18px', lineHeight: 1 }}>
              {open ? '✕' : '☰'}
            </span>
          </button>

          <a
            className="btn btn-primary"
            href={LINKS.selar}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              Register<span className="hide-m"> for LACE 1.0</span>
            </span>
          </a>
        </div>
      </div>

      {open && (
        <div
          className="mnav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={'mnav' + (open ? ' open' : '')}
        id="mnav"
        role="dialog"
        aria-label="Navigation Menu"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <Link href="/" className={cur('/')}>
          Hammet Home
        </Link>
        <Link href="/lace" className={cur('/lace')}>
          LACE 1.0 Overview
        </Link>
        {ITEMS.map((i) => (
          <Link key={i.href} href={i.href} className={cur(i.href)}>
            {i.label}
          </Link>
        ))}
        <a href={LINKS.waitlist} target="_blank" rel="noopener noreferrer" className="mnav-waitlist">
          Join the waitlist →
        </a>
      </div>
    </nav>
  );
}
