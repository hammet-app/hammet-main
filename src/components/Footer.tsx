import Link from 'next/link';
import { LINKS } from '@/lib/config';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap ft">
          <div>
            <div
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 18,
                color: 'var(--ink)',
              }}
            >
              Hammet School of AI Foundations
            </div>
            <div>A division of Hammet Limited</div>
            <div>&copy; 2026 Hammet Limited. All rights reserved.</div>
          </div>
          <div>
            <a href="mailto:hammetedu@gmail.com">hammetedu@gmail.com</a>
            <a href="tel:07040576412">07040576412</a>
          </div>
          <div>
            <b style={{ color: 'var(--ink)' }}>LACE 1.0</b>
            <a href="https://hammetedu.com/LACE">hammetedu.com/LACE</a>
            <a href={`tel:${LINKS.phone}`}>{LINKS.phoneNice}</a>
            <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
              Register on Selar
            </a>
            <a href={LINKS.waitlist} target="_blank" rel="noopener noreferrer">
              Join the waitlist
            </a>
          </div>
          <div>
            <b style={{ color: 'var(--ink)' }}>Explore</b>
            <Link href="/">Home</Link>
            <Link href="/bootcamp">The LACE Bootcamp</Link>
            <Link href="/testimonials">Testimonials</Link>
            <span>Instagram: @hammet_ai</span>
            <Link href="/blog">The Hammet Journal</Link>
            <span>LinkedIn: @HammetLabs</span>
          </div>
        </div>
      </footer>
      <div className="sticky" id="sticky">
        <div className="t">
          <b>LACE 1.0 &middot; 7 Nov</b>
          <span>Register from &#8358;5,000</span>
        </div>
        <a className="btn btn-primary" href={LINKS.selar} target="_blank" rel="noopener noreferrer">
          Register
        </a>
      </div>
    </>
  );
}
