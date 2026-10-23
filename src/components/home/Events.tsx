import { LINKS } from '@/lib/config';
import { GalleryRow } from '@/components/Static';

export default function Events() {
  return (
    <>
      <section id="events" className="pad" style={{ paddingBottom: '40px' }}>
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Previous events by the Hammet team</span>{' '}
            <h2>We have been in the room before. Thousands of times over.</h2>
            <p className="lead">
              The team behind LACE has already put on free, student-led financial conferences at
              Nigerian universities, plus dozens of virtual events and cohorts.
            </p>
          </div>
          <div className="impact">
            <div className="stat reveal" style={{ '--d': '0' }}>
              <b data-count="35000" data-suf="+">
                0
              </b>
              <span>youth impacted in under 36 months</span>
            </div>
            <div className="stat reveal" style={{ '--d': '1' }}>
              <b data-count="6" data-suf="+">
                0
              </b>
              <span>physical conferences since April 2024</span>
            </div>
            <div className="stat reveal" style={{ '--d': '2' }}>
              <b data-count="2000" data-suf="+">
                0
              </b>
              <span>conference attendees</span>
            </div>
            <div className="stat reveal" style={{ '--d': '3' }}>
              <b data-count="50" data-suf="+">
                0
              </b>
              <span>virtual events and webinars</span>
            </div>
            <div className="stat reveal" style={{ '--d': '4' }}>
              <b data-count="1200" data-suf="+">
                0
              </b>
              <span>people trained</span>
            </div>
            <div className="stat reveal" style={{ '--d': '5' }}>
              <b data-count="36" data-suf="+">
                0
              </b>
              <span>schools reached by Hammet in Oyo and Lagos</span>
            </div>
          </div>
          <div className="venues reveal">
            <span className="chip">UNILAG · 2 editions</span>
            <span className="chip">FUTO · 2 editions</span>
            <span className="chip">UI</span>
            <span className="chip">UNIUYO</span>
            <span className="chip">2 virtual workshops, 4 weeks each</span>
          </div>
        </div>
        <div className="wrap" style={{ maxWidth: 'none', padding: '0 24px' }}>
          <div className="gal reveal gal-lines">
            <div className="gal-row">
              <GalleryRow which="A"></GalleryRow>
            </div>
            <div className="gal-row rev">
              <GalleryRow which="B"></GalleryRow>
            </div>
          </div>
        </div>
      </section>
      <div className="ctab-wrap">
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Join a community that has already shown up.</b>
              <span>Register for LACE 1.0 and be part of what is next.</span>
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
