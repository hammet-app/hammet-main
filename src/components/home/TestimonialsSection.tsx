import Link from 'next/link';
import { HomeTestimonials } from '@/components/Testimonials';
import { Assemble } from '@/components/lace/Assemble';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="lace-section lace-testimonials">
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">Testimonials from the LACE Bootcamp</span>
          <h2>Hear it from people who have been in the room.</h2>
        </Assemble>
        <Assemble className="testimonials-content">
          <HomeTestimonials />
        </Assemble>
        <div className="testimonials-link">
          <Link href="/testimonials">Show full testimonials <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
