
import "./Style.css";
import "./About.css";
import { Link } from "react-router-dom";

function About1() {
  return (
    <section className="about" id="about">
      <div className="container">
        
        <div className="about-grid">

          {/* Left */}
          <div className="about-image-card">
            <img
              src="/images/profile.webp"
              alt="Vanshika Manav"
            />
          </div>

          {/* Right */}

          <div className="about-content">
            <div className="section-heading">
                  <span className="badge">
                    ✦ Behind The Work
                  </span>
                  <h2>More Than Just <span>Code</span></h2>
                  <p>I design with purpose and build with intention.</p>
            </div>

            <p>Hi, I'm Vanshika — a web designer and frontend developer who enjoys turning ideas into websites that feel clear, useful, and thoughtfully designed.</p>

            <p>
              I work across design and development, which means I can think about both how a website looks and how it actually works.
            </p>

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
           
            <div className="btn-direction ">
                <Link to="/allboutme" className="btn-white">
                    More About Me
                </Link>
            </div>
        </div>

      </div>
    </div>
  </section>
  );
}

export default About1;






