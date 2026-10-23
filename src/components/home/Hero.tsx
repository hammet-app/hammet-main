import { LINKS } from '@/lib/config';
import Countdown from '@/components/Countdown';

export default function Hero() {
  return (
    <>
      <header className="hero" id="top">
        <div
          className="blob"
          style={{
            top: '-120px',
            right: '-100px',
            width: '460px',
            height: '460px',
            background: 'rgba(127,128,255,.22)',
          }}
        ></div>
        <div
          className="blob"
          style={{
            bottom: '-160px',
            left: '-120px',
            width: '380px',
            height: '380px',
            background: 'rgba(0,229,229,.2)',
            animationDelay: '-3s',
          }}
        ></div>
        <div
          className="blob"
          style={{
            top: '38%',
            left: '46%',
            width: '110px',
            height: '110px',
            background: 'var(--lime)',
            opacity: '.7',
            animationDuration: '6s',
          }}
        ></div>
        <div
          className="blob"
          style={{
            top: '14%',
            left: '42%',
            width: '46px',
            height: '46px',
            border: '6px solid var(--indigo)',
            background: 'transparent',
            animationDuration: '7s',
            animationDelay: '-2s',
          }}
        ></div>
        <div className="theme-side" aria-hidden="true">
          REIMAGINING WORK
        </div>
        <div className="wrap hero-grid">
          <div className="hero-l">
            <div className="pill-row">
              <span className="tag">Lagos AI Career Experience 1.0</span>{' '}
              <span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: '700' }}>
                Presented by Hammet School of AI Foundations
              </span>{' '}
              <span className="theme">Theme: Reimagining Work</span>
            </div>
            <h1 className="hero-h" aria-label="AI-proof your career. Grow your business with AI.">
              <span className="w" style={{ '--i': '0' }}>
                <span className="hl">AI-proof</span>
              </span>{' '}
              <span className="w" style={{ '--i': '1' }}>
                your
              </span>{' '}
              <span className="w" style={{ '--i': '2' }}>
                career.
              </span>
              <br />{' '}
              <span className="w g" style={{ '--i': '4' }}>
                Grow
              </span>{' '}
              <span className="w g" style={{ '--i': '5' }}>
                your
              </span>{' '}
              <span className="w g" style={{ '--i': '6' }}>
                business
              </span>{' '}
              <span className="w g" style={{ '--i': '7' }}>
                with
              </span>{' '}
              <span className="w g" style={{ '--i': '8' }}>
                AI.
              </span>
            </h1>
            <p className="hero-p">
              A two-week intensive certification training with a compulsory exam, for working
              professionals, business owners and students. Learn the skills that win promotions,
              raise revenue and keep you ahead as work changes.
            </p>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for LACE 1.0 <span className="arr">→</span>
              </a>{' '}
              <a className="btn btn-ghost" href="#learn">
                See what you will learn
              </a>
            </div>
            <div className="chips">
              <span className="chip">
                <i></i>Opening Ceremony: 31 Oct, 10 Kayode Alabi, Ogba, Lagos
              </span>{' '}
              <span className="chip">Training: Mon 2 to Fri 13 Nov, fully virtual</span>{' '}
              <span className="chip">Exam: Sat 14 Nov</span>
            </div>
            <p className="wl">
              Not ready to pay yet?{' '}
              <a href={LINKS.waitlist} target="_blank" rel="noopener noreferrer">
                Join the waitlist group
              </a>{' '}
              for updates and more information.
            </p>
          </div>
          <div className="hero-r">
            <div className="badge" aria-hidden="true">
              <div className="badge-bg"></div>
              <svg viewBox="0 0 200 200">
                <defs>
                  <path id="circ" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
                </defs>
                <text
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="700"
                  fontSize="14.5"
                  fill="#1A0B2E"
                  letterSpacing="1.5"
                >
                  <textPath href="#circ" textLength="440" lengthAdjust="spacing">
                    AI CERTIFIED · HAMMET SCHOOL OF AI ·
                  </textPath>
                </text>
              </svg>
              <div className="core">AI</div>
            </div>
            <Countdown></Countdown>
            <div className="path">
              <div className="eyebrow">Your certification path</div>
              <div className="step" style={{ '--i': '0' }}>
                <b>1</b>Full Introduction to AI
              </div>
              <div className="step" style={{ '--i': '1' }}>
                <b>2</b>Generative AI Mastery
              </div>
              <div className="step" style={{ '--i': '2' }}>
                <b>3</b>AI Tools Used for Work Improvement
              </div>
              <div className="step done" style={{ '--i': '3' }}>
                <b>✓</b>Compulsory exam Sat 14 Nov, then your certificate
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
