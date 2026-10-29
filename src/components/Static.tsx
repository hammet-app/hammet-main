import { PHOTOS, caption } from '@/lib/gallery';

const TICKER = [
  'AI-PROOF YOUR CAREER',
  'GROW YOUR REVENUE',
  'STREAMLINE OPERATIONS WITH AI',
  'CLIMB THE LADDER',
  'GET AI CERTIFIED',
  'OPENING CEREMONY 31 OCT',
  'LAGOS AI CAREER EXPERIENCE 1.0',
];
export function Ticker() {
  return (
    <>
      {[...TICKER, ...TICKER].map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </>
  );
}

const ROWS: [string, number, number, number][] = [
  ['Two-week intensive certification training and exam', 1, 1, 1],
  ['AI certification on passing your exam', 1, 1, 1],
  ['Opening Ceremony invitation, Group AI Consultation and meal ticket', 1, 1, 1],
  ['21 Days Bootcamp access and 100+ curated AI resources', 1, 1, 1],
  ['Ideas booklet with 45+ ideas', 1, 1, 1],
  ['Recommendation note from a Hammet executive', 1, 1, 1],
  ['Priority access to AI internship pipeline and AI Fellowship', 1, 1, 1],
  ['Full recordings of training and Opening Ceremony', 1, 1, 1],
  ['AI-powered career summary and action steps', 0, 1, 1],
  ['Master executor prompt for your career strategy', 0, 1, 1],
  ['H.A.C.K access and inner circle sessions', 0, 1, 1],
  ['Executive take-home souvenir', 0, 1, 1],
  ['Executive name tag and superior seating', 0, 1, 1],
  ['Event photos and all speaker slides', 0, 1, 1],
  [
    'Executive Presence: personal branding masterclass for career professionals, with Mr Sopuruchukwu Emeka and Mr Prince Obinna (week two)',
    0,
    1,
    1,
  ],
  [
    'Private Funding Masterclass One: How to use AI to track the flow or leakage of funds in your business, with Ms Angel Nwafor',
    0,
    0,
    1,
  ],
  [
    'Private Funding Masterclass Two: How to prepare your business for investments and business grants, with Mr Prince Obinna',
    0,
    0,
    1,
  ],
  [
    'Private Funding Masterclass Three: How to use your business money to triple your sales in 30 days, with Mr Sopuruchukwu Emeka',
    0,
    0,
    1,
  ],
  [
    'Private Funding Masterclass Four: Where and how to get grants and raise business investment for your company, with Mrs Chiemela Anosike',
    0,
    0,
    1,
  ],
];
export function Comparison() {
  const yes = (
    <span className="ck" role="img" aria-label="Included">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A0B2E"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12l5 5 9-10" />
      </svg>
    </span>
  );
  const no = <span className="nx" role="img" aria-label="Not included" />;
  return (
    <>
      <div className="cmp-r hd">
        <div>What you get</div>
        <div>
          Basic
          <br />
          {'₦'}5,000
        </div>
        <div>
          Advanced
          <br />
          {'₦'}15,000
        </div>
        <div>
          Business
          <br />
          {'₦'}25,000
        </div>
      </div>
      {ROWS.map((r) => (
        <div className="cmp-r" key={r[0]}>
          <div>{r[0]}</div>
          {[r[1], r[2], r[3]].map((v, i) => (
            <div key={i}>{v ? yes : no}</div>
          ))}
        </div>
      ))}
    </>
  );
}

export interface SP {
  photo: string;
  n: string;
  r: string;
  b: string;
  t: string[];
  bg: string;
  fg: string;
}
export const SPEAKERS: SP[] = [
  {
    photo: 'prince.png',
    n: 'Mr Prince Obinna',
    r: 'Executive Director, Hammet Limited',
    b: 'A founder for a decade across education and technology ventures. His Konoha community reached 35,000+ youth before he turned to AI education.',
    t: ['Course 1', 'Executive Presence', 'Masterclass'],
    bg: 'linear-gradient(135deg,var(--indigo),var(--cyan))',
    fg: '#fff',
  },
  {
    photo: 'peter.png',
    n: 'Peter Michalides',
    r: 'Head of Content and Brand Marketing, Hyrotrader',
    b: '',
    t: ['Facilitator'],
    bg: 'var(--peri)',
    fg: '#fff',
  },
  {
    photo: 'lola.png',
    n: 'Mrs Lola Oyafemi',
    r: 'CEO, Oyafemi Group LLC',
    b: '',
    t: ['Facilitator'],
    bg: 'var(--peri)',
    fg: '#fff',
  },
  {
    photo: 'oluebube.png',
    n: 'Mr Oluebube Okafor',
    r: 'CTO, Hammet Limited',
    b: 'Leads engineering at Hammet and builds the AI-powered learning platform behind the training.',
    t: ['Course 2'],
    bg: 'var(--cyan)',
    fg: 'var(--ink)',
  },
  {
    photo: 'angel.png',
    n: 'Ms Angel Nwafor',
    r: 'COO, Hammet Limited. Founder, Operators Corner',
    b: 'Product and curriculum leader whose Operators Corner platform has empowered 1,000+ professionals in leadership and operations.',
    t: ['Course 3', 'Masterclass'],
    bg: 'var(--lime)',
    fg: 'var(--ink)',
  },
  {
    photo: 'sopuruchukwu.png',
    n: 'Mr Sopuruchukwu Emeka',
    r: 'CEO, Growthvault Limited',
    b: 'Shows business owners how to put their money to work and grow sales fast.',
    t: ['Executive Presence', 'Masterclass'],
    bg: 'var(--peritint)',
    fg: 'var(--indigo)',
  },
  {
    photo: 'chiemela.png',
    n: 'Mrs Chiemela Anosike',
    r: 'CEO, Mezzoaid',
    b: 'Walks founders through where grants and investment are, and how to secure them.',
    t: ['Masterclass'],
    bg: 'var(--indigo)',
    fg: '#fff',
  },
  {
    photo: 'andrew.png',
    n: 'Mr Andrew Oyafemi',
    r: 'CEO, Ercomai Limited',
    b: '',
    t: ['Facilitator'],
    bg: 'var(--cyan)',
    fg: 'var(--ink)',
  },
  {
    photo: 'chimezie.png',
    n: 'Mr Chimezie Ukaegbu',
    r: 'Founder, The Cave Network',
    b: '',
    t: ['Facilitator'],
    bg: 'var(--peri)',
    fg: '#fff',
  },
];
export function SpeakersGrid() {
  return (
    <>
      {SPEAKERS.map((s, k) => (
        <div
          className="card sp tilt reveal"
          style={{ '--d': k % 4 } as React.CSSProperties}
          key={s.n}
        >
          <div className="av-wrap">
            <div className="av-ring" />
            <div className="av" style={{ background: s.bg, color: s.fg }}>
              <img src={`/assets/people/${s.photo}`} alt={s.n} />
            </div>
          </div>
          <h3>{s.n}</h3>
          <div className="role">{s.r}</div>
          {s.b ? <p>{s.b}</p> : null}
          <div className="tags">
            {s.t.map((t) => (
              <span key={t} className={'tg' + (t === 'Masterclass' ? ' c' : '')}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

/** One row of the moving events gallery. A = even photos, B = odd photos. Doubled for a seamless loop. */
export function GalleryRow({ which }: { which: 'A' | 'B' }) {
  const list = PHOTOS.filter((_, i) => (which === 'A' ? i % 2 === 0 : i % 2 === 1));
  return (
    <>
      {[...list, ...list].map((p, i) => (
        <figure className="gi" style={{ margin: 0 }} key={i}>
          <img decoding="async" loading="lazy" src={p.src} alt={caption(p)} />
          <figcaption>{caption(p)}</figcaption>
        </figure>
      ))}
    </>
  );
}
