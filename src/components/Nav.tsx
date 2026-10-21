'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LINKS } from '@/lib/config';

const ITEMS = [
  { label: 'Your path', href: '/#learn' },
  { label: 'Bootcamp', href: '/bootcamp' },
  { label: 'Tickets', href: '/#tickets' },
  { label: 'Speakers', href: '/#speakers' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Our events', href: '/#events' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const cur = (href: string) => (href === path ? 'cur' : undefined);
  return (
    <nav id="nav">
      <div className="nav-in wrap">
        {/* To use the real Hammet logo: replace the .logo-mark div with <img src="/assets/hammet-logo.png" height={44} alt="Hammet" /> */}
        <Link className="logo" href="/" aria-label="Hammet School of AI Foundations">
          <div className="logo-mark">H</div>
          <div className="logo-t">
            <b>Hammet</b>
            <span>School of AI Foundations</span>
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
            onClick={() => setOpen((o) => !o)}
          >
            Menu
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
      <div
        className={'mnav' + (open ? ' open' : '')}
        id="mnav"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) setOpen(false);
        }}
      >
        <Link href="/" className={cur('/')}>
          Home
        </Link>
        {ITEMS.map((i) => (
          <Link key={i.href} href={i.href} className={cur(i.href)}>
            {i.label}
          </Link>
        ))}
        <a href={LINKS.waitlist} target="_blank" rel="noopener noreferrer">
          Join the waitlist
        </a>
      </div>
    </nav>
  );
}
