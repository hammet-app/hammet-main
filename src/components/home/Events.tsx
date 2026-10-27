import { LINKS } from '@/lib/config';
import { Assemble } from '@/components/lace/Assemble';

const BREAKDOWN = [
  ['Lagos', '6', 'events'],
  ['Imo state', '3', 'Events'],
  ['Oyo state', '2', 'Events'],
  ['Akwa Ibom state', '1', 'event'],
  ['Anambra state', '1', 'event'],
];

export default function Events() {
  return (
    <section id="events" className="lace-section lace-events">
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">Previous events</span>
          <h2>LACE’s track record.</h2>
          <p>
            Within the last 3 years, the team behind LACE has hosted over 2000 people in 13 events
            across 5 states.
          </p>
        </Assemble>
        <ol className="event-breakdown">
          {BREAKDOWN.map(([state, count, unit]) => (
            <li key={state}>
              <Assemble as="article" className="event-breakdown__item" aria-label={`${state} — ${count} ${unit}`}>
                <h3>{state}</h3>
                <p className="event-breakdown__count">— <b>{count}</b> {unit}</p>
              </Assemble>
            </li>
          ))}
        </ol>
        <Assemble className="events-cta">
          <div>
            <b>Join a community that has already shown up.</b>
            <span>Register for LACE 1.0 and be part of what is next.</span>
          </div>
          <a href={LINKS.selar} target="_blank" rel="noopener noreferrer">
            Register for LACE 1.0 <span aria-hidden="true">→</span>
          </a>
        </Assemble>
      </div>
    </section>
  );
}
