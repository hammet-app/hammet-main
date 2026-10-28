import { Assemble } from '@/components/lace/Assemble';

const MILESTONES = [
  ['Opening Event', 'Nov 7 2026'],
  ['Intensive AI training', 'Virtual from 8-20 November'],
  ['Certification Exam', 'Nov 21 2026'],
  ['AI Certificate Awarded', 'December 2, 2026'],
];

export default function Timeline() {
  return (
    <section id="timeline" className="lace-section lace-timeline">
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">Key dates</span>
          <h2>From opening event to certificate.</h2>
        </Assemble>
        <ol className="timeline-grid">
          {MILESTONES.map(([title, date], index) => (
            <li key={title}>
              <Assemble className="timeline-card">
                <span className="timeline-card__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{title}</h3>
                <time>{date}</time>
              </Assemble>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
