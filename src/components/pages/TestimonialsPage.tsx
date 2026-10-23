import Link from 'next/link';
import { LINKS, TESTIMONIALS } from '@/lib/config';
import WallOfLove from '@/components/testimonials/WallOfLove';

export default function TestimonialsPage() {
  return (
    <>
      <header className="sub-hero" id="ptop">
        <div className="wrap">
          <div className="plate">
            <div className="crumb">
              <Link href="/">Home</Link> / <Link href="/lace">LACE 1.0</Link> / Wall of Love
            </div>

            <div className="live" style={{ alignSelf: 'flex-start', background: 'var(--lime)', color: 'var(--ink)' }}>
              <i></i>
              <span>Wall of Love · Verified Participants</span>
            </div>

            <h1>What changed for people who showed up.</h1>
            <p className="lead">
              <span>{TESTIMONIALS.length}</span> participants share what the 21 Days Leadership and Sales Bootcamp taught them, and the specific actions they have taken since. Click any card below to view their story with their photo and complete feedback.
            </p>

            <div className="cta-row" style={{ marginTop: '12px' }}>
              <a className="btn btn-primary" href={LINKS.selar} target="_blank" rel="noopener noreferrer">
                Register for LACE 1.0 <span className="arr">→</span>
              </a>
              <Link className="btn btn-ghost" href="/bootcamp">
                About the LACE Bootcamp
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="pad" style={{ paddingTop: '36px', paddingBottom: '72px' }}>
        <div className="wrap">
          <WallOfLove />
        </div>
      </section>

      <div className="ctab-wrap" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Be part of the next story.</b>
              <span>Register for LACE 1.0 and earn your AI certification on 14 November.</span>
            </div>
            <a className="btn btn-cyan" href={LINKS.selar} target="_blank" rel="noopener noreferrer">
              Register for LACE 1.0 <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
