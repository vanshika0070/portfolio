import AboutJob from "./AboutJob";
import Experience from "./Experience";
import Projects from "./ProjectsHire";
import ContactHire from "./ContactHire";
import "./Style.css";

import { Link } from "react-router-dom";

function Hire() {
  return (
    <>
      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <span className="separator">/</span>

        <span className="current">
          Career
        </span>
      </div>

      <AboutJob />

      <Experience />

      <Projects from="hire" />

      <ContactHire />
    </>
  );
}

export default Hire;