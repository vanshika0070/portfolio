import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import "./Style.css";
import FloatingCards from "./FloatingCards";

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

  const handleViewWork = () => {
    const projectsSection = document.getElementById("featured-work");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">

        {/* Hero Heading */}
        <div className="hero-title">
          <h1>Websites</h1>
          <h1>That</h1>
          <h1 className="gray">Convert.</h1>

          <p>
            I design and build websites that look sharp, work smoothly, and help businesses turn visitors into customers.
          </p>
        </div>

        {/* Cards + Info */}
        <div className="hero-bottom">

          <FloatingCards />

          <div className="hero-info">
            <span className="tag">
              WEB DESIGNER & FRONTEND DEVELOPER
            </span>

            <p>
              I combine thoughtful design with clean frontend development to create websites that are easy to use, responsive, and built around your goals.
            </p>

            <p>
              ⭐ 2+ years experience • 10+ websites delivered
            </p>

            <div className="hero-buttons">
              <div className="buttons">

                <div className="button-group">
                  <Link to="/freelance" className="btn-white">
                    Need a website?
                  </Link>
                  <small>Start a Project</small>
                </div>

                <div className="button-group">
                  <Link to="/hire" className="btn-dark">
                    Looking to Hire?
                  </Link>
                  <small>View Resume</small>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Hero Image */}
        <div
          className="hero-image"
          onMouseMove={handleMouseMove}
          onClick={handleViewWork}
        >
          <img
            src="/images/banner.webp"
            alt="Website Preview"
            className="image"
          />

          <button
            ref={buttonRef}
            className="hover-btn"
            type="button"
          >
            View My Work
          </button>
        </div>

      </div>
    </section>
  );
}

export default Banner;