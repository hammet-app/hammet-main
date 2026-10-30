import { LINKS } from '@/lib/config';
import { Comparison } from '@/components/Static';
import { Assemble } from '@/components/lace/Assemble';

export default function Tickets() {
  return (
    <>
      <section id="tickets" className="lace-section lace-tickets">
        <div className="wrap">
          <div className="lace-section-heading">
            <span className="lace-eyebrow">Tickets</span> <h2>Choose how far you want to go.</h2>
            <p className="lead">
              Every ticket includes the full certification training and exam. Higher tiers add
              tools, community and private access.
            </p>
          </div>
          <Assemble className="tickets-assemble">
          <div className="grid g3" style={{ alignItems: 'stretch' }}>
            <div className="card tick">
              <div>
                <div className="name">Basic Executive</div>
                <div className="who">For students and anyone starting out</div>
                <div className="price" style={{ marginTop: '8px' }}>
                  ₦5,000
                </div>
              </div>
              <ul>
                <li style={{ '--i': '0' }}>
                  Full access to the sessions and recordings of the free L.A.C.E 21 Days Leadership
                  and Sales Bootcamp, with 13+ guest trainers (1 to 21 October)
                </li>
                <li style={{ '--i': '1' }}>
                  100+ curated resources on AI: books, articles, videos and essays, all aimed at
                  giving you an edge in the AI race. Curated by the Curriculum Team at Hammet
                  Limited
                </li>
                <li style={{ '--i': '2' }}>
                  Full access to the L.A.C.E certification training, fully virtual, Monday 2 to
                  Friday 13 November
                </li>
                <li style={{ '--i': '3' }}>
                  Ideas booklet with 45+ ideas on how you can build an AI-strong career, curated by
                  the Research leaders of Hammet Research Foundation
                </li>
                <li style={{ '--i': '4' }}>
                  Invitation card to the L.A.C.E Opening Ceremony AI training event on Saturday 31
                  October
                </li>
                <li style={{ '--i': '5' }}>
                  Priority access to our AI internship pipeline, launching Q1 2027
                </li>
                <li style={{ '--i': '6' }}>
                  Full access to the Group AI Consultation session in the afternoon of Saturday 31
                  October
                </li>
                <li style={{ '--i': '7' }}>Free meal ticket at the Opening Ceremony</li>
                <li style={{ '--i': '8' }}>
                  A compelling referee and recommendation note on your excellence in engaging the AI
                  curriculum, for your next job or similar opportunity, from an Executive at Hammet
                  Limited
                </li>
                <li style={{ '--i': '9' }}>
                  AI certification from Hammet School of AI Foundations, provided you score above
                  average in the exam on Saturday 14 November
                </li>
                <li style={{ '--i': '10' }}>
                  Priority access to the Hammet AI Fellowship, launching Q3 2027
                </li>
                <li style={{ '--i': '11' }}>
                  Full recordings of the certification training and the Opening Ceremony, including
                  the Group AI Consultation session
                </li>
              </ul>{' '}
              <a
                className="btn btn-ghost"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Basic Executive
              </a>
            </div>
            <div className="card tick featured">
              <div>
                <div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}
                >
                  <div className="name">Advanced Executive</div>
                  <span className="pop">Most popular</span>
                </div>
                <div className="who">For career professionals</div>
                <div className="price" style={{ marginTop: '8px' }}>
                  ₦15,000
                </div>
              </div>
              <ul>
                <li className="plus" style={{ '--i': '0' }}>
                  Everything in Basic Executive, plus:
                </li>
                <li style={{ '--i': '1' }}>Executive take-home souvenir</li>
                <li style={{ '--i': '2' }}>Executive guest name tag, just for you</li>
                <li style={{ '--i': '3' }}>Superior Executive seating arrangement, just for you</li>
                <li style={{ '--i': '4' }}>
                  AI-powered action steps you can begin taking on your career immediately after the
                  crash course ends
                </li>
                <li style={{ '--i': '5' }}>
                  Media will be instructed to take pictures of you during the session for your
                  social media posts, plus full access to all event pictures
                </li>
                <li style={{ '--i': '6' }}>
                  AI-powered personalised summary of the event, specifically for your career
                </li>
                <li style={{ '--i': '7' }}>
                  A master executor prompt to give your AI, for it to map your career strategy
                </li>
                <li style={{ '--i': '8' }}>
                  Full access to all the slides used by the speakers, just for you
                </li>
                <li style={{ '--i': '8' }}>
                  Executive Presence: a personal branding masterclass for career professionals, with
                  Mr Sopuruchukwu Emeka and Mr Prince Obinna (week two)
                </li>
                <li style={{ '--i': '9' }}>
                  Access to H.A.C.K (Hammet AI Circle of Knowledge), where Hammet Research
                  Foundation researchers send monthly updates on the latest changes in the AI career
                  and business landscape, so you can restrategise your career or business
                </li>
                <li style={{ '--i': '10' }}>
                  Access to H.A.C.K inner circle sessions on career and business leadership,
                  networking, executive personal branding, private guest conversations with industry
                  leaders and more
                </li>
              </ul>{' '}
              <a
                className="btn btn-primary"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Advanced Executive
              </a>
            </div>
            <div className="card tick">
              <div>
                <div className="name">Business Executive</div>
                <div className="who">
                  The Business Fund Tier, only for business owners and entrepreneurs
                </div>
                <div className="price" style={{ marginTop: '8px' }}>
                  ₦25,000
                </div>
              </div>
              <ul style={{ gap: '12px' }}>
                <li className="plus" style={{ '--i': '0' }}>
                  Everything in Advanced Executive, plus four private funding masterclasses:
                </li>
                <li className="nb" style={{ '--i': '1' }}>
                  <div className="mc">
                    <b>
                      Private Funding Masterclass One: How to use AI to track the flow or leakage of
                      funds in your business, even if you don&apos;t have a Chief Finance Officer
                    </b>
                    <span className="withs">
                      <span className="avs">
                        <span className="av-wrap" style={{ '--s': '30px' }}>
                          <span className="av-ring"></span>
                          <span className="av">
                            <img src="/assets/people/angel.png" alt="Ms Angel Nwafor" />
                          </span>
                        </span>
                      </span>
                      <span>With Ms Angel Nwafor, Founder, Operators Corner</span>
                    </span>
                  </div>
                </li>
                <li className="nb" style={{ '--i': '2' }}>
                  <div className="mc">
                    <b>
                      Private Funding Masterclass Two: How to prepare your business for investments
                      and business grants
                    </b>
                    <span className="withs">
                      <span className="avs">
                        <span className="av-wrap" style={{ '--s': '30px' }}>
                          <span className="av-ring"></span>
                          <span className="av">
                            <img src="/assets/people/prince.png" alt="Mr Prince Obinna" />
                          </span>
                        </span>
                      </span>
                      <span>With Mr Prince Obinna, CEO, Witty Investment Association</span>
                    </span>
                  </div>
                </li>
                <li className="nb" style={{ '--i': '3' }}>
                  <div className="mc">
                    <b>
                      Private Funding Masterclass Three: How to use your business money to triple
                      your sales in 30 days
                    </b>
                    <span className="withs">
                      <span className="avs">
                        <span className="av-wrap" style={{ '--s': '30px' }}>
                          <span className="av-ring"></span>
                          <span className="av">
                            <img
                              src="/assets/people/sopuruchukwu.png"
                              alt="Mr Sopuruchukwu Emeka"
                            />
                          </span>
                        </span>
                      </span>
                      <span>With Mr Sopuruchukwu Emeka, CEO, Growthvault Limited</span>
                    </span>
                  </div>
                </li>
                <li className="nb" style={{ '--i': '4' }}>
                  <div className="mc">
                    <b>
                      Private Funding Masterclass Four: Where and how to get grants and raise
                      business investment for your company (practical)
                    </b>
                    <span className="withs">
                      <span className="avs">
                        <span className="av-wrap" style={{ '--s': '30px' }}>
                          <span className="av-ring"></span>
                          <span className="av">
                            <img src="/assets/people/chiemela.png" alt="Mrs Chiemela Anosike" />
                          </span>
                        </span>
                      </span>
                      <span>With Mrs Chiemela Anosike, CEO, Mezzoaid</span>
                    </span>
                  </div>
                </li>
              </ul>{' '}
              <a
                className="btn btn-ghost"
                href={LINKS.selar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Business Executive
              </a>
            </div>
          </div>
          </Assemble>
          <p className="pl" style={{ fontSize: '14px', color: 'var(--muted)', margin: '26px 0 0' }}>
            Tickets are sold on Selar. After you pay, you are added to the LACE WhatsApp group for
            schedules and reminders.
          </p>
          <div className="tickets-wl">
            <span>
              Not ready to pay yet? Join the waitlist group to get more information and updates.
            </span>
            <a
              className="btn btn-ghost"
              style={{ padding: '12px 22px', fontSize: '15px' }}
              href={LINKS.waitlist}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the waitlist
            </a>
          </div>
          <h3
            className="ticket-comparison-heading"
            style={{ fontSize: 'clamp(22px,2.6vw,30px)', margin: '80px 0 16px' }}
          >
            Compare tickets side by side
          </h3>
          <div className="cmp-scroll-hint">
            <span>Swipe horizontally to compare all 3 tiers &rarr;</span>
          </div>
          <div className="cmp">
            <div className="cmp-in">
              <Comparison></Comparison>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
