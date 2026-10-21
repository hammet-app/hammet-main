import { LINKS } from '@/lib/config';

export default function Why() {
  return (
    <>
      <section className="why pad" style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="wrap why-grid">
          <div
            style={{
              flex: '1 1 320px',
              minWidth: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            className="reveal"
          >
            <span className="eyebrow">Why LACE</span>{' '}
            <h2>Training you can use on Monday morning.</h2>
          </div>
          <div
            style={{
              flex: '2 1 560px',
              minWidth: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: '30px',
            }}
          >
            <div className="why-item reveal" style={{ '--d': '0' }}>
              <b>Practical, not theory</b>
              <span>Every course ends in things you can apply to your own role or business.</span>
            </div>
            <div className="why-item reveal" style={{ '--d': '1' }}>
              <b>Taught by people who run companies</b>
              <span>Your facilitators are founders and CEOs, not textbook lecturers.</span>
            </div>
            <div className="why-item reveal" style={{ '--d': '2' }}>
              <b>A certificate that proves it</b>
              <span>
                Score above average in the compulsory exam and earn certification from Hammet School
                of AI Foundations.
              </span>
            </div>
            <div className="why-item reveal" style={{ '--d': '3' }}>
              <b>A community after the training</b>
              <span>
                Higher tiers join H.A.C.K for monthly updates on how AI is changing careers and
                business.
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="ctab-wrap">
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Africa should not be left behind in the future of work.</b>
              <span>Join the first Lagos AI Career Experience.</span>
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
