import "./About.css";
import "./Style.css";
import "./Contact.css";


function Contact() {
  return (
    <section className="about">
      {/* LEFT */}

      <div className="about-cell">
        <img
          src="/images/contact.webp"
          alt="Interior of Lazeez fine dining restaurant"
          className="hero-img"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">
                 Get in touch for dining, events, and enquiries.
          </p>

          <h1 className="hero-title">
            We’d Love to<br />
           Host You 
          </h1>

          <a href="/menu" className="btn">
            Discover Flavours
          </a>
        </div>
      </div>

      {/* RIGHT */}

      <div className="about-col">
       <div className="blocks">

  {/* TOP STRIP */}
  <div className="top-strip">

    <div className="info-cell">
      <span className="cell-eyebrow">Operating Hours</span>
      <span className="cell-value">Tuesday — Sunday</span>
      <span className="cell-sub">Closed on Mondays</span>
    </div>

    <div className="info-cell">
      <span className="cell-eyebrow">Service Hours</span>
      <span className="cell-value">17:00 — 23:00</span>
      <span className="cell-sub">Last seating at 22:00</span>
    </div>

  </div>

  {/* ADDRESS STRIP */}
  <div className="address-strip">

    <div className="address-cell">
      <span className="cell-eyebrow">Address</span>
      <span className="cell-value">
        Worldmark 1, Aerocity<br />
        New Delhi — 110037
      </span>
    </div>

    <div className="address-cell">
      <span className="cell-eyebrow">Telephone</span>
      <span className="cell-value">
        <a href="tel:+918860993732">+91 88609 93732</a>
      </span>
    </div>

    <div className="address-cell">
      <span className="cell-eyebrow">Email</span>
      <span className="cell-value">
        <a href="mailto:lazeez.restaurant@gmail.com">
          lazeez.restaurant@gmail.com
        </a>
      </span>
    </div>

  </div>

  {/* LINKS */}
  <div className="link-row">

    <a className="link-cell" href="/policies">
      <span className="link-label">House Policies</span>
      <span className="link-arrow">→</span>
    </a>

   <a
  className="link-cell"
  href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="link-label">Instagram</span>
  <span className="link-arrow">→</span>
</a>

  </div>

</div>

        <div className="locks">

          {/* MAP */}
          <div className="map-cell">
            <div className="map-bg"></div>

            <svg
              className="map-streets"
              viewBox="0 0 700 280"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <line x1="0" y1="90" x2="700" y2="90" stroke="#242018" strokeWidth="8" />
              <line x1="0" y1="190" x2="700" y2="190" stroke="#1e1c14" strokeWidth="5" />
              <line x1="180" y1="0" x2="180" y2="280" stroke="#242018" strokeWidth="6" />
              <line x1="380" y1="0" x2="380" y2="280" stroke="#1e1c14" strokeWidth="4" />
              <line x1="520" y1="0" x2="520" y2="280" stroke="#242018" strokeWidth="10" />
              <line x1="0" y1="140" x2="700" y2="140" stroke="#1a1810" strokeWidth="3" />

              <rect x="200" y="100" width="160" height="70" fill="#161510" rx="2" />
              <rect x="400" y="30" width="100" height="50" fill="#141310" rx="2" />
              <rect x="40" y="110" width="120" height="60" fill="#161510" rx="2" />
              <rect x="540" y="100" width="140" height="70" fill="#141310" rx="2" />

              <line x1="0" y1="90" x2="700" y2="90" stroke="var(--text-highlight)" strokeWidth="0.5" opacity="0.15" />
              <line x1="520" y1="0" x2="520" y2="280" stroke="var(--text-highlight)" strokeWidth="0.5" opacity="0.1" />
            </svg>

            <div className="pin">
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 14, height: 14 }}>
                <div className="pin-pulse"></div>
                <div className="pin-dot"></div>
              </div>
            </div>

            <div className="map-label">
              <div className="map-address-tag">
                <span className="map-sub">Worldmark 1, Aerocity</span>
                <span className="map-title">New Delhi</span>
              </div>

              <a
                className="btn"
                href="https://maps.google.com/?q=Worldmark+1+Aerocity+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </a>
            </div>
          </div>

          {/* RESERVATION CTA */}
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

export default Contact;