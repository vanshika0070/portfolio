import "./About.css";
import "./Style.css";
import "./Contact.css";


function Policies() {
  return (
    <section className="about">
      {/* LEFT */}

      <div className="about-cell">
        <img
          src="/images/policies.webp"
          alt="Interior of Lazeez fine dining restaurant"
          className="hero-img"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">
           Thoughtful guidelines for a seamless dining experience.
          </p>

          <h1 className="hero-title">
           Dining with<br />
           Grace & Intention
          </h1>

          <a href="/menu" className="btn">
            Discover Flavours
          </a>
        </div>
      </div>

      {/* RIGHT */}

      <div className="about-col">
          <div className="locks">

          {/* HEADER */}
          <div className="top-strips">
            <div className="info-cells">
              <span className="h2">The Details</span>
              <span className="cell-sub">Six principles</span>
            </div>
          </div>

          {/* BLOCK 1 */}
          <div className="top-strip">

            <div className="info-cells">
              <span className="cell-eyebrow">Reservations</span>
              <span className="cell-sub">
                Tables held <strong>15 minutes</strong> past booking time. Parties of <strong>6+</strong> require a card guarantee. Walk-ins welcomed by availability.
              </span>
            </div>

            <div className="info-cells">
              <span className="cell-eyebrow">Dress Code</span>
              <span className="cell-sub">
                <strong>Smart casual to formal</strong> at all times. Sportswear, activewear, and torn clothing are not permitted on premises.
              </span>
            </div>

          </div>

          {/* BLOCK 2 */}
          <div className="top-strip">

            <div className="info-cells">
              <span className="cell-eyebrow">Dining Etiquette</span>
              <span className="cell-sub">
                Phones on silent. A <strong>non-smoking</strong> venue throughout. Outside wine welcome with a <strong>₹1,500</strong> corkage per bottle.
              </span>
            </div>

            <div className="info-cells">
              <span className="cell-eyebrow">Cancellations</span>
              <span className="cell-sub">
                Please cancel <strong>24 hours prior</strong>. Late cancellations may incur a <strong>₹500 per person</strong> charge. Amend via phone or email only.
              </span>
            </div>

          </div>

          {/* BLOCK 3 */}
          <div className="top-strip">

            <div className="info-cells">
              <span className="cell-eyebrow">Private Events</span>
              <span className="cell-sub">
                Intimate rooms for <strong>8 to 40 guests</strong>. Bespoke menus, a dedicated coordinator, and minimum spends apply.
              </span>
            </div>

            <div className="info-cells">
              <span className="cell-eyebrow">Photography</span>
              <span className="cell-sub">
                Personal photography warmly encouraged. <strong>No flash or tripods</strong>. Commercial shoots require prior written approval.
              </span>
            </div>

          </div>

          {/* QUOTES */}
          <div className="link-row">

            <div className="link-cell">
              <div className="hcard-text">
                "We reserve the right to decline entry
                where our standards are not met"
              </div>
            </div>

            <div className="link-cell">
              <div className="hcard-text">
                "Every guest, every visit — treated as a singular occasion."
              </div>
            </div>

          </div>

          {/* CTA CARD */}
          <a href="/reservation">
            <div className="reservation-card">

              <span className="link-label">Reserve Your Evening</span>

              <h2 className="cta-heading">
                An Unforgettable<br /><em>Table Awaits</em>
              </h2>

              <p className="cta-body">
                For private dining, special occasions,<br />
                or bespoke culinary experiences
              </p>

              <span className="link-arrow">
                Reserve Your Table →
              </span>

            </div>
          </a>

        </div>      
      </div>

    </section>
  );
}

export default Policies;