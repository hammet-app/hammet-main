import { Assemble } from '@/components/lace/Assemble';

const TRACKS = [
  'LIVE Career Consultation',
  'Full Introduction to AI',
  'Generative AI Mastery',
  'AI Tools Used For Work Improvement',
  'Personal Branding',
  'Where and how to get investment for your business',
  'Using AI to track business finance',
  'Increasing business sales',
  'Compulsory exam then your certificate.',
];

export default function Tracks() {
  return (
    <section id="learn" className="lace-section lace-tracks">
      <div className="lace-wrap">
        <Assemble className="lace-section-heading">
          <span className="lace-eyebrow">The programme</span>
          <h2>Nine tracks, one clear finish.</h2>
        </Assemble>
        <ol className="track-grid">
          {TRACKS.map((track, index) => (
            <li key={track}>
              <Assemble className={`track-card${index === 8 ? ' track-card--final' : ''}`}>
                <span className="track-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{track}</h3>
              </Assemble>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
