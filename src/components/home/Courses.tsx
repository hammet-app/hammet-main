export default function Courses() {
  return (
    <>
      <section id="learn" className="pad">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Your certification path</span>{' '}
            <h2>This is your path to AI certification: three courses, one exam.</h2>
          </div>
          <div className="grid g3">
            <div className="card course tilt reveal" style={{ '--d': '0' }}>
              <div className="top">
                <div className="no">01</div>
                <div className="mod">6 modules</div>
              </div>
              <h3>Full Introduction to AI</h3>
              <p>
                Understand what AI really is, what it can and cannot do, and how it is reshaping
                work and business around you.
              </p>
              <div className="fac">
                <span className="av-wrap" style={{ '--s': '40px' }}>
                  <span className="av-ring"></span>
                  <span className="av">
                    <img src="/assets/people/prince.png" alt="Mr Prince Obinna" />
                  </span>
                </span>
                Facilitator: Mr Prince Obinna
              </div>
            </div>
            <div className="card course tilt reveal" style={{ '--d': '1' }}>
              <div className="top">
                <div className="no">02</div>
                <div className="mod">6 modules</div>
              </div>
              <h3>Generative AI Mastery</h3>
              <p>
                Learn how generative AI works, where it earns its keep and how to use it effectively
                and responsibly in your work.
              </p>
              <div className="fac">
                <span className="av-wrap" style={{ '--s': '40px' }}>
                  <span className="av-ring"></span>
                  <span className="av">
                    <img src="/assets/people/oluebube.jpg" alt="Mr Oluebube Okafor" />
                  </span>
                </span>
                Facilitator: Mr Oluebube Okafor
              </div>
            </div>
            <div className="card course tilt reveal" style={{ '--d': '2' }}>
              <div className="top">
                <div className="no">03</div>
                <div className="mod">7 modules</div>
              </div>
              <h3>AI Tools Used for Work Improvement</h3>
              <p>
                Pick the right AI tool for each task, build repeatable workflows and apply playbooks
                for your own business function.
              </p>
              <div className="fac">
                <span className="av-wrap" style={{ '--s': '40px' }}>
                  <span className="av-ring"></span>
                  <span className="av">
                    <img src="/assets/people/angel.jpg" alt="Ms Angel Nwafor" />
                  </span>
                </span>
                Facilitator: Ms Angel Nwafor
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
