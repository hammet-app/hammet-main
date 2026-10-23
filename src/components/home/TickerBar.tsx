import { Ticker } from '@/components/Static';
import { LaceFlyerSection } from '@/components/Flyers';

export default function TickerBar() {
  return (
    <>
      <div className="tk">
        <div className="ticker" aria-hidden="true">
          <Ticker></Ticker>
        </div>
      </div>
      <div className="wrap" style={{ padding: '0 24px' }}>
        <div className="stats">
          <div className="stat reveal" style={{ '--d': '0' }}>
            <b data-count="2">0</b>
            <span>weeks of certification training</span>
          </div>
          <div className="stat reveal" style={{ '--d': '1' }}>
            <b data-count="3">0</b>
            <span>practical AI courses</span>
          </div>
          <div className="stat reveal" style={{ '--d': '2' }}>
            <b data-count="8">0</b>
            <span>facilitators and speakers</span>
          </div>
          <div className="stat reveal" style={{ '--d': '3' }}>
            <b data-count="4">0</b>
            <span>private masterclasses for business owners</span>
          </div>
        </div>
      </div>
      <LaceFlyerSection></LaceFlyerSection>
    </>
  );
}
