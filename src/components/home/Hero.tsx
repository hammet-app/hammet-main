import Image from 'next/image';
import { LINKS } from '@/lib/config';
import Countdown from '@/components/Countdown';
import { Assemble } from '@/components/lace/Assemble';

export default function Hero() {
  return (
    <header id="top" className="lace-hero">
      <figure
        className="lace-hero__backdrop"
        role="img"
        aria-label="Lekki–Ikoyi Link Bridge and National Theatre in Lagos"
      >
        <Image
          className="lace-hero__backdrop-art"
          src="/assets/illustrations/ikoyi-national-theatre.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </figure>
      <div className="lace-wrap lace-hero__grid">
        <Assemble className="lace-hero__copy">
          <div className="lace-hero__brandline">
            <span>Lagos AI Career Experience 1.0</span>
          </div>
          <h1 className="lace-hero__title">
            Maximize your <span>AI Advantage:</span>
          </h1>
          <p className="lace-hero__subhead">Get ahead of your competitors.</p>
          <div className="lace-hero__dates" aria-label="Training dates">
            <p>A Two weeks Intensive Certification Training</p>
            <p>Virtual: November 7th - 21st</p>
            <p>Physical: Saturday November 7th</p>
            <p>Venue: 10 Kayode Alabi, Ogba, Lagos</p>
            <p>Certification Examination: November 21st</p>
          </div>
          <Countdown />
          <div className="lace-hero__actions">
            <a
              className="lace-button lace-button--primary"
              href={LINKS.selar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a ticket <span aria-hidden="true">→</span>
            </a>
            <a className="lace-button lace-button--secondary" href="#tickets">
              View ticket options
            </a>
          </div>
        </Assemble>

      </div>
    </header>
  );
}
