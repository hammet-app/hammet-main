import { LINKS } from '@/lib/config';
import { Assemble } from '@/components/lace/Assemble';
import SpeakerCarousel from '@/components/lace/SpeakerCarousel';

export default function Speakers() {
  return (
    <section id="speakers" className="lace-section lace-speakers">
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">Your facilitators and speakers</span>
          <h2>Nine facilitators. Live sessions, masterclasses and more.</h2>
          <p>Learn from people who build and run companies.</p>
        </Assemble>
      </div>

      {/* Full-width edge-to-edge speakers track spanning 100% viewport width */}
      <div className="speaker-carousel-fullwidth">
        <SpeakerCarousel />
      </div>

      <div className="lace-wrap">
        <Assemble className="speaker-cta">
          <div>
            <b>Learn from people who have done the work.</b>
            <span>Meet the facilitators and register for LACE 1.0.</span>
          </div>
          <a
            className="btn-elevated-brutal"
            href={LINKS.selar}
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER FOR LACE 1.0 <span aria-hidden="true">→</span>
          </a>
        </Assemble>
      </div>
    </section>
  );
}
