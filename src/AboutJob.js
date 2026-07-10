
import "./Style.css";
import "./About.css";

function AboutJob() {
  return (
    <section className="aboutjob" id="about">
      <div className="container">

        <div className="section-heading">

          <span className="badge">
            ⦿ Expert Designer
          </span>

          <h2>Profile</h2>

          <p>
            Creating Digital Experiences with Purpose and Precision
          </p>

        </div>

      <div className="about-grid">

          {/* Left */}

          <div className="about-content">

            <h3>
              Hi, I'm <span>Vanshika Manav</span>
            </h3>

            <p cl>Web designer and developer focused on building modern, responsive websites with strong attention to usability, performance, and clean design.</p>

            <p>Experienced in both design and development, with the ability to take projects from concept to launch. Comfortable working independently or within a team, with a focus on clear communication and delivering reliable, high-quality work.</p>

                <hr />

                 <div className="btn-direction">
         <a href="#featured-work"  className="btn-white">
            View Portfolio
          </a>
        </div>

          </div>

          {/* Right */}

          <div className="about-content">

  <h3>Skills</h3>
  <div className="container tools">
    <div className="tools-list">
      <span className="tool">UI/UX Design</span>
      <span className="tool">Responsive Web Design</span>
      <span className="tool">Frontend Development</span>
      <span className="tool">Landing Page Design</span>
      <span className="tool">Performance Optimization</span>
      <span className="tool">SEO-Friendly Development</span>
    </div>
  </div>

  <br />
  <hr />

  <h3>Tools & Technologies</h3>
  <div className="container tools">
    <div className="tools-list">
      <span className="tool">HTML5</span>
      <span className="tool">CSS</span>
      <span className="tool">JavaScript (ES6+)</span>
      <span className="tool">React</span>
      <span className="tool">WordPress</span>
      <span className="tool">Figma</span>
      <span className="tool">Framer</span>
      <span className="tool">VS Code</span> 
      <span className="tool">GitHub</span>
    </div>
  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default AboutJob;