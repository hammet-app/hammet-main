import { LINKS } from '@/lib/config';
import { SpeakersGrid } from '@/components/Static';

export default function Speakers() {
  return (
    <>
      <section id="speakers" className="pad">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Your facilitators and speakers</span>{' '}
            <h2>Eight facilitators. Live sessions, masterclasses and more.</h2>
            <p className="lead">Learn from people who build and run companies.</p>
          </div>
          <div className="grid sp-grid">
            <SpeakersGrid></SpeakersGrid>
          </div>
        </div>
      </section>
      <div className="ctab-wrap">
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Learn from people who have done the work.</b>
              <span>Meet the facilitators and register for LACE 1.0.</span>
            </div>
            <a
              className="btn btn-cyan"
              href={LINKS.selar}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register for LACE 1.0 <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
