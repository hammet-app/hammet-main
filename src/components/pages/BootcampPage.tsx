import Link from 'next/link';
import { LINKS } from '@/lib/config';
import { BcBadgeText, BcDate } from '@/components/Bootcamp';
import { DayGrid, SpeakerMarquee } from '@/components/BootcampDays';
import { FlyerBootcamp } from '@/components/Flyers';

export default function BootcampPage() {
  return (
    <>
      <header className="sub-hero" id="ptop">
        <div className="wrap bc" style={{ gridTemplateColumns: '1.15fr .85fr' }}>
          <div className="plate">
            <div className="crumb"><Link href="/">Home</Link>{' '}/ LACE Bootcamp</div>
            {' '}
            <span className="live" style={{ alignSelf: 'flex-start' }}>
              <i></i>
              <BcBadgeText></BcBadgeText>
            </span>
            {' '}
            <h1>The 21 Days Leadership and Sales Bootcamp</h1>
            <p className="lead">The LACE Bootcamp is a free, live daily programme that warms you up for LACE 1.0. Every night at 11pm WAT on Google Meet, a guest trainer takes one session on leadership or sales, so that over 21 days you learn to lead yourself, lead a team and sell with confidence. It is hosted by Witty Prince, with 13+ guest trainers from business, technology and leadership.</p>
            <div className="bfacts">
              <div><b>
  <BcDate></BcDate>
</b><span>Every day, 2026</span></div>
              <div><b>11pm WAT</b><span>Live on Google Meet</span></div>
              <div><b>13+</b><span>Guest trainers</span></div>
              <div><b>Free</b><span className="withs"><span className="av-wrap" style={{ '--s': '26px' }}><span className="av-ring"></span><span className="av">
  <img src="/assets/people/prince.png" alt="Witty Prince" />
</span></span><span>Hosted by Witty Prince</span></span></div>
            </div>
            <div className="cta-row"><a className="btn btn-primary bc-live-only" href={LINKS.bootcamp} target="_blank" rel="noopener noreferrer">Join the bootcamp, free{' '}<span className="arr">→</span></a>{' '}<a className="btn btn-primary bc-done-only" href="#days">Get bootcamp access{' '}<span className="arr">→</span></a>{' '}<a className="btn btn-ghost bc-done-only" href={`tel:${LINKS.phone}`}>Call {LINKS.phoneNice}</a>{' '}<a className="btn btn-ghost" href={LINKS.selar} target="_blank" rel="noopener noreferrer">Register for LACE 1.0</a></div>
          </div>
          <div className="reveal" style={{ '--d': '1' }}>
            <FlyerBootcamp></FlyerBootcamp>
          </div>
        </div>
      </header>
      <section className="pad" style={{ paddingTop: '36px', paddingBottom: '20px' }}>
        <div className="wrap">
          <div className="bc-done-box">
            <div><b>The bootcamp has ended, but you can still get the sessions.</b><span>Call or WhatsApp{' '}<a style={{ color: 'var(--indigo)', fontWeight: '800' }} href={`tel:${LINKS.phone}`}>{LINKS.phoneNice}</a>, or pick any day below and get it on Selar.</span></div>
            <div className="cta-row"><a className="btn btn-primary" href="#days">Choose a day</a><a className="btn btn-ghost" href={`tel:${LINKS.phone}`}>Call now</a></div>
          </div>
          <div className="sechead reveal">
            <span className="eyebrow">What you learn</span>
            <h2>Three things, practised every day.</h2>
          </div>
          <div className="learn3">
            <div className="card reveal">
              <span className="n">1</span>
              <h3>Lead yourself</h3>
              <p>Self-discipline, ownership and self-understanding, because leadership starts with you before it reaches anyone else.</p>
            </div>
            <div className="card reveal" style={{ '--d': '1' }}>
              <span className="n">2</span>
              <h3>Lead a team</h3>
              <p>Operator-leadership, accountability and sacrifice: the exact steps to standing out and bringing people with you in any team.</p>
            </div>
            <div className="card reveal" style={{ '--d': '2' }}>
              <span className="n">3</span>
              <h3>Sell with confidence</h3>
              <p>Understand people, communicate value and follow up, so selling becomes serving instead of shouting.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pad" style={{ paddingTop: '60px', paddingBottom: '30px' }}>
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Guest trainers</span>
            <h2>Previous speakers on the LACE Bootcamp.</h2>
          </div>
        </div>
        <div className="wrap" style={{ maxWidth: 'none', padding: '0 24px' }}>
          <div className="spk-mq reveal">
            <div className="spk-row">
              <SpeakerMarquee></SpeakerMarquee>
            </div>
          </div>
        </div>
      </section>
      <section className="pad" id="days" style={{ paddingTop: '60px' }}>
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Day 1 to Day 21</span>
            <h2>Every session, one day at a time.</h2>
            <p className="lead">Pick any day and get it on Selar.</p>
          </div>
          <div className="days">
            <DayGrid></DayGrid>
          </div>
          <p className="dev-note pl" style={{ marginTop: '22px' }}>Missed a day? Every LACE 1.0 ticket also includes full access to the bootcamp sessions and recordings.</p>
        </div>
      </section>
      <div className="ctab-wrap" style={{ paddingTop: '40px' }}>
        <div className="wrap">
          <div className="ctab reveal">
            <div><b>Ready for the full experience?</b><span>Register for LACE 1.0: Opening Ceremony on 31 October, certification training 2 to 13 November.</span></div>
            <a className="btn btn-cyan" href={LINKS.selar} target="_blank" rel="noopener noreferrer">Register for LACE 1.0{' '}<span className="arr">→</span></a>
          </div>
        </div>
      </div>
    </>
  );
}
