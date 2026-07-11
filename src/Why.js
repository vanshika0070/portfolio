import "./Why.css";

function Why() {
  return (
    <section  id="why-me" className="why">
      <div className="container">

        <div className="section-heading">

          <span className="badge">
            ⦿ Why choose me
          </span>

          <h2>
          Why Clients Keep <span> Coming Back</span>
          </h2>

          <p>
           Clarity, speed, and design that performs.
          </p>

        </div>

        <div className="why-grid">

          {/* Card 1 */}

          <div className="why-card card1">
            <h2>01.</h2>

            <h3>
              PROVEN DESIGN
              <br />
              THAT
              <br />
              CONVERTS
            </h3>

            <ul>
              <li>✓ Designed for clarity</li>
              <li>✓ Focused on user actions</li>
            </ul>
          </div>

          {/* Card 2 */}

          <div className="why-card card2">

            <h2>02.</h2>

            <h3>
              BUILT TO SCALE WITH
              <br />
              YOUR BUSINESS
            </h3>

            <ul>
              <li>✓ Easy to update later</li>
              <li>✓ Future-ready design</li>
            </ul>

            <img
              src="/images/person.png"
              alt=""
            />

          </div>

          {/* Card 3 */}

          <div className="why-card card3">

            <h2>03.</h2>

            <h3>
              CLEAR
              <br />
              COMMUNICATION.
            </h3>

            <ul>
              <li>✓ Fast communication</li>
              <li>✓ Full transparency</li>
            </ul>

          </div>

          {/* Card 4 */}

          <div className="why-card card4">

            <h2>04.</h2>

            <h3>
              DELIVERED
              <br />
              ON TIME.
            </h3>

            <ul>
              <li>✓ Reliable timelines</li>
              <li>✓ No delays</li>
            </ul>

          </div>

          {/* Card 5 */}

          <div className="why-card card5">

            <h2>05.</h2>

            <h3>
              DESIGN +
              <br />
              DEVELOPMENT
            </h3>

            <ul>
              <li>✓ From design to live website</li>
              <li>✓ No handoff issues</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Why;