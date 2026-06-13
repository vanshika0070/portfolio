import "./About.css";
import "./Style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


function About() {
  return (
    <section className="about">
      {/* LEFT */}

      <div className="about-cell">
        <img
          src="/images/restaurant-big.webp"
          alt="Interior of Lazeez fine dining restaurant"
          className="hero-img"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            Where flavour meets elegance.
          </p>

          <h1 className="hero-title">
            The Story <br />
            of Lazeez
          </h1>

          <a href="/menu" className="btn">
            Discover Flavours
          </a>
        </div>
      </div>

      {/* RIGHT */}

      <div className="about-col">
        <div className="bocks">
          {/* STORY CARD */}

          <div className="story-card">
            <div className="story-image">
              <img
                src="/images/about.webp"
                alt="Luxury restaurant interior at Lazeez"
              />
            </div>

            <div className="story-content">
              <div className="badge">
                Since 2025
              </div>

              <h3>
                Fine Dining With Elegant Taste
              </h3>

              <p>
                Located in the heart of Aerocity,
                Lazeez blends timeless culinary traditions
                with contemporary fine dining experiences.
                Every detail is crafted to deliver elegance,
                flavour, and unforgettable hospitality.
              </p>
            </div>

            {/* FEATURES */}

            <div className="feature-grid">
              <div className="feature-box">
                <h4>Signature Dishes</h4>
                <p>Bold flavours beautifully served.</p>
              </div>

              <div className="feature-box">
                <h4>Elegant Space</h4>
                <p>Luxury interiors with warm ambience.</p>
              </div>

              <div className="feature-box">
                <h4>Live Kitchen</h4>
                <p>Freshly prepared by expert chefs.</p>
              </div>

              <div className="feature-box">
                <h4>Premium Service</h4>
                <p>Thoughtful hospitality every visit.</p>
              </div>
            </div>
          </div>

          {/* HEAD CHEF */}

          <div className="story-card">
            <div className="story-image">
              <img
                src="/images/chef.webp"
                alt="Head chef at Lazeez restaurant"
              />
            </div>

            <div className="story-content">
              <div className="badge">
                Head Chef
              </div>

              <h3>
                The Artist Behind Every Dish
              </h3>

              <p>
                Blending authentic flavours with modern techniques,
                our head chef creates refined culinary experiences
                inspired by creativity, passion, and precision.
              </p>
            </div>
          </div>

          {/* TESTIMONIALS */}

        <div className="testimonials">

  <div className="quote-icon">
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
    </svg>
  </div>

  <Swiper
    modules={[Autoplay]}
    slidesPerView={1}
    loop={true}
    allowTouchMove={false}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    }}
  >
    <SwiperSlide>
      <div className="testimonial-slide">
        <p>
          Amazing food, great location, and excellent service!
          The fried items are especially delicious —
          highly recommended!
        </p>

        <h2>Alessia Zanin</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="testimonial-slide">
        <p>
          A perfect spot for a relaxed evening.
          Excellent craft beers and burgers cooked
          just right, paired with great hospitality.
        </p>

        <h2>Daniel Harper</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="testimonial-slide">
        <p>
          A refined place with outstanding food quality
          and a relaxed, elegant atmosphere.
          Truly worth visiting again.
        </p>

        <h2>Olivia Martin</h2>
      </div>
    </SwiperSlide>
  </Swiper>

  <div className="quote-icon">
    <svg viewBox="0 0 24 24" fill="white">
      <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
    </svg>
  </div>

</div>



        </div>
      </div>
    </section>
  );
}

export default About;