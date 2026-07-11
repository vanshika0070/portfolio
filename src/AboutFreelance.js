
import "./Style.css";
import "./About.css";

function AboutFreelance() {
  return (
    <section className="why" id="about">
      <div className="container">

        <div className="section-heading">

          <span className="badge">
            ⦿ Freelance Web Designer
          </span>

            <h2>More Than Just <span>Code</span></h2>

          <p>The person, the process, and the thinking behind every project.</p>


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
            I'm a web designer & developer helping businesses and startups grow with modern, responsive, and conversion-focused websites. I create websites that not only look great but also deliver results.
            </p>

            
            <hr />

            <h3>Why Work <span>With Me </span></h3>

            <ul>
              <li>⚡Conversion-focused websites</li>
              <li>⚡ Design & development in one place</li>
              <li>⚡ Fast, smooth project delivery</li>
              <li>⚡ Clean, responsive, and SEO-friendly solutions</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutFreelance;