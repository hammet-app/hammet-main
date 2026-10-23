import Link from 'next/link';
import { LINKS, TESTIMONIALS } from '@/lib/config';
import { TestimonialsFull } from '@/components/Testimonials';

export default function TestimonialsPage() {
  return (
    <>
      <header className="sub-hero" id="ptop">
        <div className="wrap">
          <div className="plate">
            <div className="crumb"><Link href="/">Home</Link>{' '}/ Testimonials</div>
            {' '}
            <span className="eyebrow">Testimonials from the LACE Bootcamp</span>
            {' '}
            <h1>What changed for people who showed up.</h1>
            <p className="lead"><span>{TESTIMONIALS.length}</span>{' '}people share what the 21 Days Leadership and Sales Bootcamp taught them, and the specific actions they have taken since.</p>
            <div className="cta-row" style={{ marginTop: '6px' }}><a className="btn btn-primary" href={LINKS.selar} target="_blank" rel="noopener noreferrer">Register for LACE 1.0{' '}<span className="arr">→</span></a>{' '}<Link className="btn btn-ghost" href="/bootcamp">About the LACE Bootcamp</Link></div>
          </div>
        </div>
      </header>
      <section className="pad" style={{ paddingTop: '40px' }}>
        <div className="wrap">
          <div className="tmasonry">
            <TestimonialsFull></TestimonialsFull>
          </div>
        </div>
      </section>
      <div className="ctab-wrap" style={{ paddingTop: '40px' }}>
        <div className="wrap">
          <div className="ctab reveal">
            <div><b>Be part of the next story.</b><span>Register for LACE 1.0 and earn your AI certification on 14 November.</span></div>
            <a className="btn btn-cyan" href={LINKS.selar} target="_blank" rel="noopener noreferrer">Register for LACE 1.0{' '}<span className="arr">→</span></a>
          </div>
        </div>
      </div>
    </>
  );
}
