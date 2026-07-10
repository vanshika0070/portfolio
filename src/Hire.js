import AboutJob from "./AboutJob";
import Experience from "./Experience";
import Projects from "./Projects";
import ContactHire from "./ContactHire";
import "./Style.css";

import { Link } from "react-router-dom";

function Freelance() {
  return (
    <>

    
    <div className="breadcrumb">
  <Link to="/">Home</Link>

  <span className="separator">/</span>

  <span className="current">
    Get In Touch
  </span>
</div>


      <AboutJob />
       <Experience />
       <Projects from="hire" />
         <ContactHire />
    </>
  );
}

export default Freelance;