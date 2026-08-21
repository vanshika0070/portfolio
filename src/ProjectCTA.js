
import { Link } from "react-router-dom";
import "./Select.css";

const ProjectCTA = () => {
  return (
    <section className="project-cta">
      <div className="project-cta-content">

        {/* Left Content */}
        <div className="section-heading">
          <p className="ctatext">LET'S WORK TOGETHER </p>
          <h2>Like What <span>You</span> See?</h2>

          <p>
            Have a project in mind? Let’s create something
            <br className="desktop-break" />
            that works for your goals.
          </p>
        </div>


        {/* Right Content */}
        <div className="project-cta-right">

          <Link to="/freelance" className="btn-white">
                    Start a Freelance Project
          </Link>

          <div className="resume-link">
            <span>Looking to Hire?</span>

            <Link to="/hire" >
                    View My Resume
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;