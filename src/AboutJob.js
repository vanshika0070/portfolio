
import "./Style.css";
import "./About.css";

function AboutJob() {
  return (
    <section className="aboutjob" id="about">
      <div className="container">

        <div className="section-heading">

          <span className="badge">
            ⦿ Built for Impact
          </span>

          <h2><span>What I Bring </span>to the Table</h2>

          <p>Skills and tools — the essentials, at a glance.</p>

        </div>

      <div className="about-grid">

          {/* Left */}

          <div className="about-content">

            <h3>
              Hi, I'm <span>Vanshika Manav</span>
            </h3>

            <p>Web designer and developer focused on building modern, responsive websites with strong attention to usability, performance, and clean design.</p>

            <p>Comfortable working independently or within a team, with clear communication and a focus on delivering reliable, high-quality work — every time.</p>

                <hr />

                 <div className="btn-direction">
         <a href="#featured-work"  className="btn-white">
            View My Work
          </a>
        </div>

          </div>

          {/* Right */}

          <div className="about-content">

  <h3>Skills</h3>
  <div className="container tools">
    <div className="tools-list">
      <span className="tool">Frontend Development</span> 
      <span className="tool">UI/UX Design</span>  
      <span className="tool">SEO-Friendly Websites</span>
      <span className="tool">Responsive Web Design</span>
      <span className="tool">Landing Page Development</span>
      <span className="tool">Component-Based Development</span>
      <span className="tool">Website Performance Optimization</span>
      <span className="tool">Cross-Browser Compatibility</span>
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