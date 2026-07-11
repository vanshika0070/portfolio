import "./Style.css";
import "./Select.css";

import { Link } from "react-router-dom";

function Why() {
  return (
    <section className="why">
      <div className="container">

        <div className="section-heading">
          <h2>
          Choose Your <span>Path</span>
          </h2>

        </div>

        <div className="why-buttons">

  <div className="hero-buttons">

    <div className="buttons">
                  <div className="button-group">
                    <Link to="/freelance" className="btn-white">
                      Start a Project
                    </Link>
                    <small>For businesses & startups</small>
                  </div>

                  <div className="button-group">
                    <Link to="/hire" className="btn-dark">
                      View Resume
                    </Link>
                    <small>For hiring & opportunities</small>
                  </div>
                </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default Why;