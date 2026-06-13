import "./Banner.css";

function Banner() {
  return (
    <section className="banner" aria-label="Hero section">

      {/* LEFT: HERO PANEL */}
      <div className="hero-cell">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-img.webp"
          aria-hidden="true"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            An experience of elegance, flavor, and tradition
          </p>

          <h1>
            Timeless Taste.
            <br />
            Refined Experience.
          </h1>

          <a href="/Menu" className="btn">
            Discover Flavours
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-col">

        {/* PANEL 1 */}
        <a href="/menu" className="panel menu-panel">
          <img
            src="/images/menu.webp"
            alt="Lazeez menu highlights"
          />

          <div className="panel-overlay"></div>

          <div className="panel-label">
            <span>Specials</span>
          </div>
        </a>

        {/* PANEL 2 */}
        <a href="/Reservation" className="panel reservation-panel">
          <img
            src="/images/reservation.webp"
            alt="Dining experience at Lazeez"
          />

          <div className="panel-overlay"></div>

          <div className="panel-label">
            <span>Reservation</span>
          </div>
        </a>

        {/* PANEL 3 */}
        <a href="/About" className="panel ambiance-panel">
          <img
            src="/images/restaurant.webp"
            alt="Lazeez restaurant ambiance"
          />

          <div className="panel-overlay"></div>

          <div className="panel-label">
            <span>Our Restaurant</span>
          </div>
        </a>

      </div>

    </section>
  );
}

export default Banner;