
import "./Style.css";
import "./About.css";

function AboutFreelance() {
  return (
    <section className="about">
      <div className="container">
        
      <div className="aboutfull-grid">

        <div className="section-heading">
          <span className="badge">✦ Freelance Web Design </span>
          <h2>A Website Built For <span>Your Business</span></h2>
          <p>I help businesses and startups create websites that look professional, communicate clearly, and support real business goals.</p>
        </div>

          {/* Right */}

        <div className="about-content">
            <h3>What You Get</h3>

            <ul>
              <li>⚡ Strategy-focused design</li>
              <li>⚡ Design + development together</li>
              <li>⚡ Responsive across devices</li>
              <li>⚡ Clear communication</li>
              <li>⚡ Clean, maintainable code</li>
            </ul>
          </div>

          <br/>

          <hr/>

          <br/>

          <div className="statsFL">
                <div className="stat-card">
                  <h3>Website Design</h3>
                  <p>Modern user-friendly designs that reflect your brand.</p>
                </div>

                <div className="stat-card">
                  <h3>Frontend Development</h3>
                  <p>fast, responsive websites built with clean codes and attention to detail.</p>
                </div>

                <div className="stat-card">
                  <h3>Landing Pages</h3>
                  <p>High converting landing pages for your product or campaigns.</p>
                </div>

                <div className="stat-card">
                  <h3>Website Redesign</h3>
                  <p>Improve your current webiste so it looks better and works smoothly.</p>
                </div>
            </div>

            <div className="btn-direction">
                <a href="#services"  className="btn-white">
                  See My Services
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}

export default AboutFreelance;





