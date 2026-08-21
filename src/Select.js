import "./Style.css";
import "./Select.css";

import { Link } from "react-router-dom";

function Why() {
  return (
    <section className="why">
      <div className="container">

        <div className="section-heading">
          <h2>What brings <span>you here?</span></h2>
          <p>Whether you're looking for someone to build your website or <br/>looking for a frontend designer to join your team, you're in the right place.</p>
        </div>

        <div className="why-buttons">

  <div className="hero-buttons">

    <div className="buttons">
                  <div className="button-group">
                  <Link to="/freelance" className="btn-white">
                    Start a Project
                  </Link>
                  <small>Discuss your project</small>
                </div>

                <div className="button-group">
                  <Link to="/hire" className="btn-dark">
                    View My Resume
                  </Link>
                  <small>See my Experience</small>
                </div>
                </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default Why;