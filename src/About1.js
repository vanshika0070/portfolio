
import "./Style.css";
import "./About.css";
import { Link } from "react-router-dom";

function About1() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="section-heading">

          <span className="badge">
            ⦿ Expert Designer
          </span>

          <h2>
            Meet the Designer <span>Behind</span>
            <br />
            <span>the Work</span>
          </h2>

          <p>
            Creating Digital Experiences with Purpose and Precision
          </p>

        </div>

      <div className="about-grid">

          {/* Left */}

          <div className="about-image-card">

            <img
              src="/images/profile.webp"
              alt="Vanshika Manav"
            />

            <div className="availability">

              <span className="dot"></span>

              <span>Available for work</span>

            </div>

          </div>

          {/* Right */}

          <div className="about-content">

            <h3>
              Hi, I'm <span>Vanshika Manav</span>
            </h3>

            <p className="subtitle">
              I design and build websites that turn visitors into customers.
            </p>

            <hr />

            <p className="description">
              My work goes beyond visuals—every website is crafted with a
              focus on clarity, usability, and conversions. From structure
              to interaction, every detail is designed to perform.
            </p>

            <div className="btn-direction align-content-start">
                    <Link to="/AllBoutMe" className="btn-white">
                     Learn more about me
                    </Link>
            </div>
          </div>



        </div>

        
         



      </div>

      <div className="stats">

          <div className="stat-card">
            <h3>2+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="stat-card">
            <h3>5+</h3>
            <p>Clients Served</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Delivered</p>
          </div>

        </div>
    </section>
  );
}

export default About1;