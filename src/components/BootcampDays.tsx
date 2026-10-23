'use client';
import { BOOTCAMP_DAYS, LACE, PEOPLE } from '@/lib/config';
import { dayLabel, useBc } from '@/lib/bootcamp';

/** The 21 day cards. Status (today / done / upcoming) follows Lagos time. */
export function DayGrid() {
  const bc = useBc();
  return (
    <>
      {BOOTCAMP_DAYS.map((d) => {
        let st: 'today' | 'past' | 'next' = 'next';
        if (bc?.state === 'done') st = 'past';
        else if (bc?.state === 'live')
          st = bc.idx === d.day ? 'today' : bc.idx > d.day ? 'past' : 'next';
        const label =
          st === 'today'
            ? 'Live today'
            : st === 'past'
              ? bc?.state === 'done'
                ? 'Completed'
                : 'Done'
              : 'Upcoming';
        return (
          <article className={`dcard ${st} reveal`} id={`day-${d.day}`} key={d.day}>
            <div className="dfly">
              <div className="brand">Hammet {'·'} LACE Bootcamp</div>
              <div className="big">
                DAY {d.day}
                <small>OF 21 {'·'} LEADERSHIP &amp; SALES</small>
              </div>
              {d.topic ? (
                <div className="tp">{d.topic}</div>
              ) : (
                <div className="tp tba">Topic to be added</div>
              )}
              {d.speaker ? (
                <div className="sp withs">
                  {PEOPLE[d.speaker] ? (
                    <span className="av-wrap">
                      <span className="av-ring" />
                      <span className="av">
                        <img src={PEOPLE[d.speaker]} alt={d.speaker} />
                      </span>
                    </span>
                  ) : null}
                  <span>With {d.speaker}</span>
                </div>
              ) : null}
              <div className="when">
                {dayLabel(d.day)} {'·'} {LACE.bootcamp.time}
              </div>
              {d.flyer ? (
                <img className="real" loading="lazy" src={d.flyer} alt={`Day ${d.day} flyer`} />
              ) : null}
            </div>
            <div className="dbody">
              <div className="row">
                <b>Day {d.day}</b>
                <span className="st">{label}</span>
              </div>
              {d.selar ? (
                <a
                  className="btn btn-primary"
                  href={d.selar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Day {d.day} on Selar
                </a>
              ) : (
                <>
                  {/* No Selar link yet: set `selar` for this day in lib/config.ts and the button switches on. */}
                  <a
                    className="btn btn-primary"
                    aria-disabled="true"
                    tabIndex={-1}
                    data-slot={`day-${d.day}-selar`}
                  >
                    Get Day {d.day} on Selar
                  </a>
                  <div className="slot">Selar link coming soon</div>
                </>
              )}
            </div>
          </article>
        );
      })}
    </>
  );
}

/** Moving gallery of previous bootcamp speakers (edit `bootcampSpeakers` in lib/config.ts). */
export function SpeakerMarquee() {
  const one = (s: (typeof LACE.bootcampSpeakers)[number], i: number) => (
    <div className={'spk' + (s.photo ? '' : ' ph-empty')} key={i}>
      <div className="av-wrap">
        <div className="av-ring" />
        <div className="av">
          {s.photo ? (
            <img src={s.photo} alt={s.name} />
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="8" r="4.2" />
              <path d="M3.5 21c.6-4.6 4-7.2 8.5-7.2s7.9 2.6 8.5 7.2z" />
            </svg>
          )}
        </div>
      </div>
      <b>{s.name}</b>
      <span>{s.role}</span>
    </div>
  );
  return <>{[...LACE.bootcampSpeakers, ...LACE.bootcampSpeakers].map(one)}</>;
}
