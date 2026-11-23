export default function Countdown() {
  return (
    <div className="lace-countdown" role="status">
      <span className="lace-countdown__label">Event complete</span>
      <p style={{ margin: 0, color: 'var(--lace-muted)', fontSize: '0.9rem' }}>
        LACE 1.0 has concluded. Thank you for being part of it.
      </p>
    </div>
  );
}
