import { LINKS } from '@/lib/config';

export default function Faq() {
  return (
    <>
      <section id="faq" className="pad">
        <div className="wrap" style={{ maxWidth: '860px' }}>
          <div className="sechead reveal">
            <span className="eyebrow">Questions</span> <h2>Good to know before you join.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <details className="reveal">
              <summary>Is LACE online or in person?</summary>
              <p>
                The Opening Ceremony on 31 October is in person at 10 Kayode Alabi, Ogba, Lagos. The
                two-week certification training, Monday 2 to Friday 13 November, is fully virtual,
                so you can join from anywhere.
              </p>
            </details>
            <details className="reveal">
              <summary>Do I need a technical background?</summary>
              <p>
                No. The courses start from the basics and are designed for professionals, business
                owners and students from any field.
              </p>
            </details>
            <details className="reveal">
              <summary>How do I register?</summary>
              <p>
                Choose your ticket and pay on Selar. You will then be added to the LACE WhatsApp
                group, where schedules, reminders and session links are shared.
              </p>
            </details>
            <details className="reveal">
              <summary>How do I get certified?</summary>
              <p>
                The exam on Saturday 14 November is compulsory. Complete the training, then score
                above average to earn your AI certification from Hammet School of AI Foundations.
              </p>
            </details>
            <details className="reveal">
              <summary>Will I get recordings if I miss a session?</summary>
              <p>
                Yes. Every ticket includes full recordings of the certification training and the
                Opening Ceremony, including the Group AI Consultation session.
              </p>
            </details>
            <details className="reveal">
              <summary>Who can buy the Business Executive ticket?</summary>
              <p>
                Business owners and entrepreneurs only. It adds four private masterclasses on
                funding, sales and investment for your business.
              </p>
            </details>
            <details className="reveal">
              <summary>What is H.A.C.K?</summary>
              <p>
                Hammet AI Circle of Knowledge. Researchers from Hammet Research Foundation send
                monthly updates on how AI is changing careers and business, so you can adjust your
                strategy. Advanced and Business Executives also join inner circle sessions on
                leadership, networking, personal branding and private conversations with industry
                leaders.
              </p>
            </details>
            <details className="reveal">
              <summary>I am not ready to pay yet. Can I still get information?</summary>
              <p>
                Yes. Join the LACE waitlist group on{' '}
                <a
                  style={{ color: 'var(--indigo)', fontWeight: '800' }}
                  href={LINKS.waitlist}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  rebrand.ly/LACERW
                </a>{' '}
                to get more information and updates, then register whenever you are ready. You can
                also call or WhatsApp{' '}
                <a
                  style={{ color: 'var(--indigo)', fontWeight: '800' }}
                  href={`tel:${LINKS.phone}`}
                >
                  {LINKS.phoneNice}
                </a>
                .
              </p>
            </details>
            <details className="reveal">
              <summary>Can someone else pay for my ticket?</summary>
              <p>
                Yes. Parents, sponsors and employers can pay for one seat or many. Email
                admin@hammetlabs.com to arrange it.
              </p>
            </details>
          </div>
        </div>
      </section>
      <div className="ctab-wrap">
        <div className="wrap">
          <div className="ctab reveal">
            <div>
              <b>Still thinking about it?</b>
              <span>Questions? Call or WhatsApp {LINKS.phoneNice}, or register now.</span>
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
