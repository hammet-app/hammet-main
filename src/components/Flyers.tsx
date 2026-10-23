import { LACE, LINKS } from '@/lib/config';

/** Bootcamp flyer. Shows the real image once `flyers.bootcamp` is set in lib/config.ts, otherwise a placeholder. */
export function FlyerBootcamp() {
  const src = LACE.flyers.bootcamp;
  if (src) {
    return (
      <div className="flyer">
        <div className="flyer-img">
          <img
            className="real"
            src={src}
            alt="21 Days Leadership and Sales bootcamp flyer"
            style={{ display: 'block', borderRadius: 'inherit' }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flyer">
      <div className="fl">
        <div className="br">
          <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M32 5 L55 18 L55 46 L32 59 L9 46 L9 18 Z"
              fill="none"
              stroke="#E0FF4D"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <path
              d="M32 19 C33 26 38 31 45 32 C38 33 33 38 32 45 C31 38 26 33 19 32 C26 31 31 26 32 19 Z"
              fill="#E0FF4D"
            />
          </svg>
          <div>
            Hammet School
            <br />
            of AI Foundations
          </div>
        </div>
        <div className="hero-card">
          <h3>21 Days of Leadership &amp; Sales</h3>
          <p>A free bootcamp for the LACE community.</p>
        </div>
        <div className="row">
          <div>
            <span>Date</span> 1st to 21st October 2026
          </div>
          <div>
            <span>Time</span> 11pm daily
          </div>
          <div>
            <span>Where</span> Google Meet
          </div>
          <div>
            <span>Host</span> Witty Prince
          </div>
        </div>
        <div className="free">rebrand.ly/LeaderSALES</div>
      </div>
    </div>
  );
}

/** "LACE 1.0 at a glance": hidden until `flyers.lace` is set in lib/config.ts. */
export function LaceFlyerSection() {
  const src = LACE.flyers.lace;
  if (!src) return null;
  return (
    <section className="pad" id="lace-flyer" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div
          className="plate"
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 'clamp(22px,2.8vw,34px)' }}>LACE 1.0 at a glance</h2>
          <div
            style={{
              maxWidth: 560,
              width: '100%',
              borderRadius: 28,
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(42,21,102,.3)',
            }}
          >
            <img
              src={src}
              alt="LACE 1.0 flyer"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </div>
          <a
            className="btn btn-primary"
            href={LINKS.selar}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for LACE 1.0 <span className="arr">{'→'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
