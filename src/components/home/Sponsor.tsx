export default function Sponsor() {
  return (
    <>
      <section className="pad" style={{ paddingBottom: '0' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div className="spons reveal">
            <div
              style={{
                flex: '1 1 480px',
                minWidth: '0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                position: 'relative',
                zIndex: '1',
              }}
            >
              <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)' }}>
                Sponsor a seat. Or your whole team.
              </h2>
              <p style={{ margin: '0', fontSize: '17px', color: 'var(--muted)' }}>
                Parents, benefactors and business owners can pay for one student, a group of 5, 10
                or 20, or every member of staff. Equip people with skills that last.
              </p>
            </div>{' '}
            <a
              className="btn btn-primary"
              style={{ position: 'relative', zIndex: '1' }}
              href="mailto:admin@hammetlabs.com?subject=LACE%20sponsorship"
            >
              Talk to us about sponsorship
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
