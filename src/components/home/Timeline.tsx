export default function Timeline() {
  return (
    <>
      <section className="tl pad">
        <div className="wrap">
          <div className="sechead reveal">
            <span className="eyebrow">Your certification path, week by week</span>{' '}
            <h2>A two-week intensive, then a compulsory exam.</h2>
            <p className="lead">
              Training runs Monday 2 to Friday 13 November 2026, fully virtual.
            </p>
          </div>
          <div
            className="tl-wrap grid reveal"
            id="tlwrap"

          >
            <div className="tl-line"></div>
            <div className="tl-card">
              <div className="tl-dot"></div>
              <div className="tl-box">
                <div className="tl-date">1 to 21 Oct</div>
                <h3>21 Days Leadership and Sales Bootcamp</h3>
                <p>
                  A pre-training for members of the LACE Taskforce. Free, with 13+ guest trainers.
                </p>
              </div>
            </div>
            <div className="tl-card">
              <div className="tl-dot"></div>
              <div className="tl-box">
                <div className="tl-date">Sat 31 Oct</div>
                <h3>Opening Ceremony</h3>
                <p>
                  A physical AI training event at 10 Kayode Alabi, Ogba, Lagos, with the Group AI
                  Consultation in the afternoon and a meal.
                </p>
              </div>
            </div>
            <div className="tl-card">
              <div className="tl-dot"></div>
              <div className="tl-box">
                <div className="tl-date">2 to 6 Nov</div>
                <h3>Intensive week one</h3>
                <p>
                  5-day intensive training on three topics: a full intro to AI, Generative AI, and
                  AI tools used to improve work.
                </p>
              </div>
            </div>
            <div className="tl-card">
              <div className="tl-dot"></div>
              <div className="tl-box">
                <div className="tl-date">9 to 13 Nov</div>
                <h3>Intensive week two</h3>
                <p>
                  One session for career personnel and four for business personnel, led by leaders
                  from across industry.
                </p>
              </div>
            </div>
            <div className="tl-card">
              <div className="tl-dot"></div>
              <div className="tl-box">
                <div className="tl-date">Sat 14 Nov</div>
                <h3>Assessment exam</h3>
                <p>Score above average to earn your AI certification.</p>
              </div>
            </div>
          </div>
          <div
            className="grid wk reveal"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '24px' }}
          >
            <div className="card">
              <h3>Week two: for career professionals</h3>
              <div className="sub">One session</div>
              <div className="mc">
                <b>Executive Presence: a personal branding masterclass for career professionals</b>
                <span className="withs">
                  <span className="avs">
                    <span className="av-wrap" style={{ '--s': '30px' }}>
                      <span className="av-ring"></span>
                      <span className="av">
                        <img src="/assets/people/sopuruchukwu.jpg" alt="Mr Sopuruchukwu Emeka" />
                      </span>
                    </span>
                    <span className="av-wrap" style={{ '--s': '30px' }}>
                      <span className="av-ring"></span>
                      <span className="av">
                        <img src="/assets/people/prince.png" alt="Mr Prince Obinna" />
                      </span>
                    </span>
                  </span>
                  <span>With Mr Sopuruchukwu Emeka and Mr Prince Obinna.</span>
                </span>
              </div>
            </div>
            <div className="card">
              <h3>Week two: for business owners</h3>
              <div className="sub">Four private masterclasses</div>
              <div className="mc">
                <b>
                  How to use AI to track the flow or leakage of funds in your business, even without
                  a Chief Finance Officer
                </b>
                <span className="withs">
                  <span className="avs">
                    <span className="av-wrap" style={{ '--s': '30px' }}>
                      <span className="av-ring"></span>
                      <span className="av">
                        <img src="/assets/people/angel.jpg" alt="Ms Angel Nwafor" />
                      </span>
                    </span>
                  </span>
                  <span>With Ms Angel Nwafor.</span>
                </span>
              </div>
              <div className="mc">
                <b>How to prepare your business for investments and business grants</b>
                <span className="withs">
                  <span className="avs">
                    <span className="av-wrap" style={{ '--s': '30px' }}>
                      <span className="av-ring"></span>
                      <span className="av">
                        <img src="/assets/people/prince.png" alt="Mr Prince Obinna" />
                      </span>
                    </span>
                  </span>
                  <span>With Mr Prince Obinna.</span>
                </span>
              </div>
              <div className="mc">
                <b>How to use your business money to triple your sales in 30 days</b>
                <span className="withs">
                  <span className="avs">
                    <span className="av-wrap" style={{ '--s': '30px' }}>
                      <span className="av-ring"></span>
                      <span className="av">
                        <img src="/assets/people/sopuruchukwu.jpg" alt="Mr Sopuruchukwu Emeka" />
                      </span>
                    </span>
                  </span>
                  <span>With Mr Sopuruchukwu Emeka.</span>
                </span>
              </div>
              <div className="mc">
                <b>
                  Where and how to get grants and raise business investment for your company
                  (practical)
                </b>
                <span className="withs">
                  <span className="avs">
                    <span className="av-wrap" style={{ '--s': '30px' }}>
                      <span className="av-ring"></span>
                      <span className="av">
                        <img src="/assets/people/chiemela.jpg" alt="Mrs Chiemela Anosike" />
                      </span>
                    </span>
                  </span>
                  <span>With Mrs Chiemela Anosike.</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mod-box reveal">
            <h3 style={{ fontSize: '22px', marginBottom: '6px' }}>The modalities</h3>
            <p style={{ margin: '0 0 24px', color: 'var(--muted)' }}>
              How the training is delivered.
            </p>
            <div className="mod-row" style={{ '--k': '0', '--w': '40%' }}>
              <span>Live instruction</span>
              <div className="mbar">
                <i></i>
              </div>
              <em>40%</em>
            </div>
            <div className="mod-row" style={{ '--k': '1', '--w': '25%' }}>
              <span>Hands-on AI practice</span>
              <div className="mbar">
                <i></i>
              </div>
              <em>25%</em>
            </div>
            <div className="mod-row" style={{ '--k': '2', '--w': '15%' }}>
              <span>Case studies</span>
              <div className="mbar">
                <i></i>
              </div>
              <em>15%</em>
            </div>
            <div className="mod-row" style={{ '--k': '3', '--w': '10%' }}>
              <span>Group AI Consultation (panel session)</span>
              <div className="mbar">
                <i></i>
              </div>
              <em>10%</em>
            </div>
            <div className="mod-row" style={{ '--k': '4', '--w': '10%' }}>
              <span>Assessments and quizzes</span>
              <div className="mbar">
                <i></i>
              </div>
              <em>10%</em>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
