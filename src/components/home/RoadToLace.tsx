import { LINKS } from '@/lib/config';

export default function RoadToLace() {
  return (
    <>
      <section className="road pad" id="road">
        <div className="road-bg" id="roadbg" aria-hidden="true"></div>
        <div className="wrap" style={{ position: 'relative' }}>
          <div
            className="sechead reveal"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <span className="eyebrow">The road to L.A.C.E</span> <h2>A letter from the convener</h2>
          </div>
          <div className="letter reveal">
            <img
              className="nsimg"
              src="/assets/people/ns.jpg"
              alt="Prince Obinna at Network School"
            />
            <p className="dear">Dear Futurist,</p>
            <p>
              Despite the fact that I was a tech enthusiast, my journey into AI was surprising to
              me.
            </p>
            <p>I had gone all-in on the Blockchain space in 2021.</p>
            <p>
              Last year, I travelled to Asia to learn tech at Network School, because I admired the
              Crypto society they had built.
            </p>
            <p>
              I went for Blockchain purposes, with minimal interest in AI, but what I saw when I
              arrived there shocked me.
            </p>
            <p>
              90% of the Asians there were building AI infrastructure in several industries I knew
              of. I watched them build AI infrastructure in Medicine, Engineering, Energy,
              Agriculture, Transportation, genetics, construction, and more.
            </p>
            <p className="big">I realized then that AI is going to disrupt every industry.</p>
            <p>
              I took the bold step of coming back to Africa to begin doing the same thing: building
              AI infrastructure.
            </p>
            <p>
              I&apos;m only one man, so I cannot do it all myself. That is why the Lagos AI Career
              Experience exists.
            </p>
            <p>
              <b>You are a lawyer, good.</b> How can you integrate AI into your industry?
              <br /> <b>You are an engineer, perfect.</b> How can you build AI infrastructure in
              your sector?
              <br /> <b>You&apos;re a businessman. Lovely.</b> How can you scale your operations using
              AI?
              <br /> <b>You&apos;re a banker. Beautiful.</b> How can you get AI into that sector?
            </p>
            <p className="big">
              This is why L.A.C.E had to happen, so Africa is not left behind in the Future of Work.
            </p>
            <p>It&apos;s my utmost privilege to welcome you on this journey.</p>
            <p>
              <b>Let&apos;s build together.</b>
            </p>
            <div className="sign">
              <span className="av-wrap" style={{ '--s': '76px' }}>
                <span className="av-ring"></span>
                <span className="av">
                  <img src="/assets/people/princeletter.jpg" alt="Prince Obinna" />
                </span>
              </span>
              <div>
                <b>Prince Obinna, MBA</b>
                <div style={{ color: 'var(--muted)' }}>Founder, Hammet and Convener, LACE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="ctab-wrap">
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Ready to learn it properly?</b>
              <span>Three practical courses, one certification, from ₦5,000.</span>
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
