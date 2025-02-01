import React from "react";

const Volatility = () => {
  return (
    <>
      <div className="header">
        <h3> VolatilityX</h3>
      </div>

      <div className="heropage page">
        <h1>VolatilityX</h1>
        <p className="subtext">Your Autonomous Market Ally</p>

        {/* <Link className="no-underline" to="https://x.com/Cyphur"> */}
        <div className="twitter cards__header">
          {/* <FontAwesomeIcon
              icon={faSquareXTwitter}
              className="twittericon"
              style={{ fontSize: "1em", color: "#ffffff" }} // Customize size and color
            /> */}
          @cyphurai
        </div>
        {/* </Link> */}

        <img
          style={{ marginTop: "30px" }}
          src="K5U2RwzDr4hOMTTW8ZRVE8d7TDw.svg"
          alt=""
        />

        <p className="finetext">
          VolatilityX gives you a direct line to unbiased, data-driven market
          intelligence. Instead of pricey terminals or gated research, our
          autonomous AI agents share clear, fact-based analysis right where you
          already spend your time. Whether you’re scrolling through your feed or
          diving into a TikTok short, you’ll find understandable,
          up-to-the-minute insights designed to help you navigate an
          ever-changing financial world.
        </p>
      </div>

      <div className="page2 page">
        <div className="text-div">
          <h1 className="header-text">
            Real-time financial insights and market commentary
          </h1>
          <p className="subtext">
            Stay ahead in the financial game with VolatilityX’s precision-driven
            updates. From live market sentiment to actionable forecasts,
            transform your investment strategy with unparalleled clarity.
          </p>
        </div>
      </div>

      <div className="page4--container">
        <div className="page4--top top">
          <div className="glass-card">
            <img src="nw2ChRbU5xBIIMB4XKdlpLfQeA.svg" alt="" />
          </div>

          <div className="top--text">
            <h3>
              <span className="gradient-text"> Instant Access</span>
            </h3>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Unusual Flows:</strong>
              </span>{" "}
              Get alerts on unexpected trading volumes and market movements.
            </p>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Volume Surges:</strong>
              </span>{" "}
              Instantly identify spikes in trading activity to uncover new
              opportunities.{" "}
            </p>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Corporate Releases:</strong>
              </span>{" "}
              Stay ahead with timely updates on earnings reports, announcements,
              and major developments.{" "}
            </p>
          </div>
        </div>
        <div className="page4--top top">
          <div className="top--text">
            <h3>
              <span className="gradient-text"> Fundamental Deepdives</span>
            </h3>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Earnings Results:</strong>
              </span>{" "}
              Comprehensive yet concise analysis of quarterly and annual
              reports.{" "}
            </p>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Company Information:</strong>
              </span>{" "}
              Deep insights into business models, strategies, and competitive
              positioning.
            </p>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Insider Trades:</strong>
              </span>{" "}
              Track executive transactions to gauge market confidence.
            </p>
          </div>

          <div className="glass-card">
            <img src="3scgeKGbEfK9qanQIwgfPDowlE.png" alt="" />
          </div>
        </div>
        <div className="page4--top top">
          <div className="glass-card">
            <img src="hyDzKZeXAKIBztQJLownnkIOIqo.png" alt="" />
          </div>

          <div className="top--text">
            <h3>
              <span className="gradient-text"> Market Insights</span>
            </h3>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Macro Factors:</strong>
              </span>{" "}
              Keep track of global economic shifts, including GDP trends and
              central bank policies.{" "}
            </p>
            <p className="finetext">
              <div className="bullet"></div>
              <span>
                <strong>Insider Trades:</strong>
              </span>{" "}
              Track executive transactions to gauge market confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="page2 page">
        <div className="text-div">
          <h1 className="header-text">Built on Data, Powered by Principles </h1>
          <p className="subtext">
            VolatilityX never trades on emotion or hidden motives; it’s
            committed to transparency and grounded in verified data. Every
            insight can be traced back to objective inputs
          </p>
        </div>
      </div>

      <div className="page4--container">
        <div className="page5--top">
          <div className="glass-card-d">
            <img src="d5AovGR8MrnpQbC2dnfEDmQF0c.svg" alt="" />

            <div className="top--text">
              <h3>
                <span className="gradient-text"> Equities Analysis</span>
              </h3>
              <p className="finetext">
                {/* <div className="bullet"></div> */}
                {/* <span>
                  <strong>Unusual Flows:</strong>
                </span>{" "} */}
                Comprehensive coverage of blue-chip and emerging growth stocks.
                Analyze sector trends and performance to uncover investment
                opportunities.{" "}
              </p>
            </div>
          </div>
          <div className="glass-card-d">
            <img src="Hj0OZCVAkATHwwJm7S0FJnqcMo.svg" alt="" />

            <div className="top--text">
              <h3>
                <span className="gradient-text"> Equities Analysis</span>
              </h3>
              <p className="finetext">
                {/* <div className="bullet"></div> */}
                {/* <span>
                  <strong>Unusual Flows:</strong>
                </span>{" "} */}
                Comprehensive coverage of blue-chip and emerging growth stocks.
                Analyze sector trends and performance to uncover investment
                opportunities.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volatility;
