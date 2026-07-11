import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import "./Style.css";

function Banner() {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (buttonRef.current) {
      buttonRef.current.style.left = `${x}px`;
      buttonRef.current.style.top = `${y}px`;
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-8">
            <div className="hero-title">
              <h1>Websites</h1>
              <h1>That</h1>
              <h1 className="gray">Convert.</h1>
              <p>
Fast, responsive websites designed to
help businesses grow online.</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-4">
            <div className="hero-info">
              <span className="tag">
                FOR SMALL BUSINESSES & STARTUPS
              </span>

              <p>I build high-performance websites that are fast, responsive, and designed to grow your business.</p>

              <ul>
                <li>✓ Responsive Design</li>
                <li>✓ SEO Friendly</li>
                <li>✓ Fast Loading</li>
              </ul>

              <p>⭐ Trusted by 5+ clients | 10+ projects delivered</p>

              <div className="hero-buttons">
                <div className="buttons">
                  <div className="button-group">
                    <Link to="/freelance" className="btn-white">
                      Start a Project
                    </Link>
                    <small>For businesses & startups</small>
                  </div>

                  <div className="button-group">
                    <Link to="/hire" className="btn-dark">
                      View Resume
                    </Link>
                    <small>For hiring & opportunities</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="row">
          <a href="/projectsall">
              <div
            className="hero-image"
            onMouseMove={handleMouseMove}
          >
            <img
              src="/images/banner.avif"
              alt="Website Preview"
              className="image"
            />

            <button
              ref={buttonRef}
              className="hover-btn"
            >
              View Project
            </button>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;