import "./Style.css";
import "./About.css";
import { Link } from "react-router-dom";
import Why from "./Why";
import Select from "./Select";

function AllBoutMe() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <span className="separator">/</span>

        <span className="current">
          About Me
        </span>
      </div>

      <section className="why" >
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
              a web designer and frontend developer focused on building modern, responsive websites for businesses and startups.
              </p>

              <hr />

             <p className="description">I combine design and development to create websites that are clean, easy to use, and built with performance in mind. By handling both UI design and frontend development, I ensure consistency from concept to launch.</p>

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

      

{/* Approach */}

       <section className="Approach">
      <div className="container">

        <div className="section-heading">

          <h2>🧭My Approach</h2>

        </div>

        <div className="why-grid">

          {/* Card 1 */}

          <div className="why-card cardnew">
            <h2>01.</h2>

            <h4>Understand project goals and users first</h4>

          </div>

          {/* Card 2 */}

          <div className="why-card cardnew">

            <h2>02.</h2>

            <h4>Focus on simple, clear design structure</h4>

            <img
              src="/images/person.png"
              alt=""
            />

          </div>

          {/* Card 3 */}

          <div className="why-card cardnew">

            <h2>03.</h2>

            <h4>Build with usability and performance in mind</h4>

          </div>

          {/* Card 4 */}

          <div className="why-card cardnew">

            <h2>04.</h2>

            <h4>Create responsive, mobile-friendly websites</h4>

          </div>

          {/* Card 5 */}

          <div className="why-card cardnew">

            <h2>05.</h2>

            <h4>Keep communication clear throughout the process</h4>

          </div>

          <div className="why-card cardnew">

            <h2>06.</h2>

            <h4>Keep communication clear throughout the process</h4>

          </div>

        </div>

      </div>
    </section>


{/* skills */}


     <section className="skills">
      <div className="container">

        <div className="section-heading">

          <h2>🛠️  Skills & What I Deliver</h2>

        </div>

        <div className="why-grid">

          {/* Card 1 */}

          <div className="why-card cardnew">
            <h3>UI/UX Design</h3>

            <h4>Create clean, user-focused designs that improve clarity and usability</h4>

          </div>

          {/* Card 2 */}

          <div className="why-card cardnew">

            <h3>Web Design</h3>

            <h4>Build websites that work smoothly on all screen sizes</h4>

            <img
              src="/images/person.png"
              alt=""
            />

          </div>

          {/* Card 3 */}

          <div className="why-card cardnew">

            <h3>Frontend Dev.</h3>

            <h4>Turn designs into functional, interactive websites</h4>

          </div>

          {/* Card 4 */}

          <div className="why-card cardnew">

            <h3>Website Structure</h3>

            <h4>Design clear layouts for better flow and engagement</h4>

          </div>

          {/* Card 5 */}

          <div className="why-card cardnew">

            <h3>Landing Page </h3>

            <h4>Design pages focused on engagement and conversions</h4>

          </div>

          <div className="why-card cardnew">

            <h3>Speed Optimization</h3>

            <h4>Keep communication clear throughout the process</h4>

          </div>

        </div>

      </div>
    </section>

{/* tools */}

    <section className="tools">
  <div className="container ">

    <div className="section-heading">
      <h2>⚙️ Tools & Technologies</h2>
    </div>

    <div className="tools-box">

      <div className="tools-list">

        <span className="tool">HTML</span>
        <span className="tool">CSS</span>
        <span className="tool">JavaScript</span>
        <span className="tool">React.js</span>
        <span className="tool">WordPress</span>
        <span className="tool">Figma</span>
        <span className="tool">VS Code</span>
        <span className="tool">Framer</span>

      </div>

    </div>

  </div>
</section>

<Why />

      <Select />
    </>
  );
}

export default AllBoutMe;