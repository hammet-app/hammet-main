import Link from 'next/link';
import { HomeTestimonials } from '@/components/Testimonials';

export default function TestimonialsSection() {
  return (
    <>
      <section className="testi pad">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Testimonials from the LACE Bootcamp</span>{' '}
            <h2>Hear it from people who have been in the room.</h2>
          </div>
          <HomeTestimonials></HomeTestimonials>
          <div className="tbtn">
            <Link className="btn btn-primary" href="/testimonials">
              Show full testimonials <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
