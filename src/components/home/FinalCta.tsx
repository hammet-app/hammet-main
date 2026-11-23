import { LINKS } from '@/lib/config';

export default function FinalCta() {
  return (
    <>
      <section style={{ padding: '0 24px 96px' }}>
        <div className="wrap">
          <div className="final reveal">
            <div
              className="blob"
              style={{ top: '-80px', left: '-60px', width: '260px', height: '260px' }}
            ></div>
            <div
              className="blob"
              style={{
                bottom: '-100px',
                right: '-40px',
                width: '300px',
                height: '300px',
                animationDelay: '-4s',
              }}
            ></div>
            <h2 style={{ position: 'relative' }}>The AI shift is already here. Be ready for it.</h2>
            <p style={{ position: 'relative' }}>
              LACE 1.0 has ended. Thank you to everyone who took part. Stay tuned for future updates.
            </p>
            <div className="btnrow">
              <a
                className="btn btn-cyan"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                View event details <span className="arr">→</span>
              </a>
              <a
                className="btn btn-ghost"
                href={LINKS.waitlist}
                target="_blank"
                rel="noopener noreferrer"
              >
                Not ready? Join the waitlist
              </a>
            </div>
            <div className="cx">
              <a href="https://hammetedu.com/LACE">hammetedu.com/LACE</a>
              <a href={`tel:${LINKS.phone}`}>Call or WhatsApp {LINKS.phoneNice}</a>
              <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
                LACE 1.0 event details
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
