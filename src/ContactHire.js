import "./Projects.css";
import "./FreelanceForm.css";
import "./Style.css";

import {
  FaGithub,
  FaDribbble,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";

import HireForm from "./HireForm";

function ContactHire() {
  return (
    <section className="ContactHire">
      <div className="container">
        <div className="section-heading">
          <span className="badge">⦿ Seeking Opportunities</span>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Open to new opportunities in Frontend Development and UI/UX Design.
          </p>
        </div>

        <div className="about-grid">
          {/* Left */}
          <div className="about-content">
            <p className="subtitle">
              <strong>Email:</strong>{" "}
              <a href="mailto:vanshikawork0070@gmail.com?subject=Project%20Inquiry">
                vanshikawork0070@gmail.com
              </a>
            </p>

            <p className="subtitle">
              <strong>Location:</strong> New Delhi, India
            </p>


            <a href="/Vanshika_Manav_resume_Web Designer  UIUX Designer  Front-End Developer.pdf" download>
  <button className="btn-white">
    Download Resume
  </button>
</a>


<br />
            <hr />

            
<br />

            <div className="social-icons">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDribbble />
              </a>

              <a
                href="https://behance.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              
            </div>

            
            
            <div className="availability1">

              <span className="dot"></span>

              <span>Available for work</span>

            </div>

 
          </div>
          

          {/* Right */}
          <div className="form-card">
            <HireForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHire;

