import { Assemble } from '@/components/lace/Assemble';

const MILESTONES = [
  ['Nov 7 2026', 'Opening Event'],
  ['Virtual from 8-20 November', 'Intensive AI training'],
  ['Nov 21 2026', 'Certification Exam'],
  ['December 2, 2026', 'AI Certificate Awarded'],
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
          {MILESTONES.map(([date, title], index) => (
            <li key={title}>
              <Assemble className="timeline-card">
                <span className="timeline-card__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <time>{date}</time>
                <h3>{title}</h3>
              </Assemble>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
