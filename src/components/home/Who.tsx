import { LINKS } from '@/lib/config';

export default function Who() {
  return (
    <>
      <section id="who" className="pad">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Who it is for</span>{' '}
            <h2>AI will not replace you. Someone using AI might.</h2>
            <p className="lead">
              LACE is built for people who want to be the one who knows how to use it.
            </p>
          </div>
          <div className="grid g4">
            <div className="card tilt reveal" style={{ '--d': '0' }}>
              <div
                className="ico"
                style={{ background: 'var(--peritint)', color: 'var(--indigo)' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 20h4v-6h4v-6h4V4h6" />
                  <path d="M17 4h4v4" />
                </svg>
              </div>
              <h3>Climb the corporate ladder</h3>
              <p>
                Be the person on your team who delivers faster, sharper work with AI. Walk into your
                next review with skills employers increasingly expect.
              </p>
            </div>
            <div className="card tilt reveal" style={{ '--d': '1' }}>
              <div
                className="ico"
                style={{ background: 'var(--cyantint)', color: 'var(--indigo)' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Stay on your A game</h3>
              <p>
                Know what stays valuable, what gets automated and how to position yourself on the
                right side of the shift, whatever your industry.
              </p>
            </div>
            <div className="card tilt reveal" style={{ '--d': '2' }}>
              <div
                className="ico"
                style={{ background: 'var(--peritint)', color: 'var(--indigo)' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19V9" />
                  <path d="M10 19V5" />
                  <path d="M16 19v-8" />
                  <path d="M22 19H2" />
                </svg>
              </div>
              <h3>Grow revenue, run leaner</h3>
              <p>
                Business owners: find where money leaks, market smarter and streamline operations
                with AI, even without a big team or a CFO.
              </p>
            </div>
            <div className="card tilt reveal" style={{ '--d': '3' }}>
              <div
                className="ico"
                style={{ background: 'var(--cyantint)', color: 'var(--indigo)' }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9l10-5 10 5-10 5z" />
                  <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
                </svg>
              </div>
              <h3>Students: start ahead</h3>
              <p>
                Graduate with a certified AI skillset and a clear plan, before the job market asks
                you for one.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="ctab-wrap">
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Find your place in the AI shift.</b>
              <span>Seats are limited. Register on Selar in two minutes.</span>
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
