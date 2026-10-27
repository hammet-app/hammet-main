import { Assemble } from '@/components/lace/Assemble';

export default function Sponsor() {
  return (
    <section id="sponsorship" className="lace-section lace-sponsorship">
      <div className="lace-wrap">
        <Assemble className="sponsorship-panel">
          <div>
            <span className="lace-eyebrow">Sponsorship</span>
            <h2>Sponsor a seat. Or your whole team.</h2>
            <p>
              Parents, benefactors and business owners can pay for one student, a group of 5, 10 or
              20, or every member of staff. Equip people with skills that last.
            </p>
          </div>
          <a href="mailto:hammetedu@gmail.com?subject=LACE%20sponsorship">
            Talk to us about sponsorship <span aria-hidden="true">→</span>
          </a>
        </Assemble>
      </div>
    </section>
  );
}
