import Link from 'next/link';
import { LINKS } from '@/lib/config';
import { BcBadgeText, BcDate } from '@/components/Bootcamp';
import { FlyerBootcamp } from '@/components/Flyers';

export default function BootcampSection() {
  return (
    <>
      <section id="bootcamp" className="pad">
        <div className="wrap bc">
          <div className="reveal">
            <span className="live">
              <i></i>
              <BcBadgeText></BcBadgeText>
            </span>{' '}
            <h2 style={{ margin: '18px 0 14px' }}>The 21 Days Leadership and Sales Bootcamp</h2>
            <p className="lead" style={{ margin: '0' }}>
              A free daily bootcamp that warms you up for LACE: lead yourself, lead a team and sell
              with confidence, in 21 live sessions with 13+ guest trainers.
            </p>
            <div className="bfacts">
              <div>
                <b>
                  <BcDate></BcDate>
                </b>
                <span>Every day, 2026</span>
              </div>
              <div>
                <b>11pm WAT</b>
                <span>Live on Google Meet</span>
              </div>
              <div>
                <b>13+</b>
                <span>Guest trainers</span>
              </div>
              <div>
                <b>Free</b>
                <span className="withs">
                  <span className="av-wrap" style={{ '--s': '26px' }}>
                    <span className="av-ring"></span>
                    <span className="av">
                      <img src="/assets/people/prince.png" alt="Witty Prince" />
                    </span>
                  </span>
                  <span>Hosted by Witty Prince</span>
                </span>
              </div>
            </div>
            <ul className="bdays">
              <li>
                <b>DAY 1</b>Sales: Using your ear to sell
              </li>
              <li>
                <b>DAY 2</b>Leadership: Love as a manipulative strategy
              </li>
              <li>
                <b>DAY 12</b>Sacrificial Leadership with{' '}
                <span className="pchip">
                  <span className="av-wrap" style={{ '--s': '26px' }}>
                    <span className="av-ring"></span>
                    <span className="av">
                      <img src="/assets/people/prince.png" alt="Mr Prince Obinna" />
                    </span>
                  </span>{' '}
                  Mr Prince Obinna
                </span>
              </li>
              <li>
                <b>DAY 13</b>Operator-Leadership: The exact steps to standing out in any team
              </li>
            </ul>
            <div className="cta-row">
              <a
                className="btn btn-primary bc-live-only"
                href={LINKS.bootcamp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the bootcamp, free <span className="arr">→</span>
              </a>{' '}
              <Link className="btn btn-primary bc-done-only" href="/bootcamp#days">
                Get bootcamp access <span className="arr">→</span>
              </Link>{' '}
              <a className="btn btn-ghost bc-done-only" href={`tel:${LINKS.phone}`}>
                Call {LINKS.phoneNice}
              </a>{' '}
              <Link className="btn btn-ghost" href="/bootcamp">
                See all 21 days
              </Link>{' '}
              <a
                className="btn btn-ghost"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for LACE 1.0
              </a>
            </div>
            <p style={{ margin: '18px 0 0', color: 'var(--muted)', fontSize: '14.5px' }}>
              Missed a day? Every LACE ticket includes full access to the bootcamp sessions and
              recordings.
            </p>
          </div>
          <div className="reveal" style={{ '--d': '1' }}>
            <FlyerBootcamp></FlyerBootcamp>
          </div>
        </div>
      </section>
      <div className="ctab-wrap">
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Two weeks. One certificate. Your move.</b>
              <span>Choose your tier and register for LACE 1.0 today.</span>
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
