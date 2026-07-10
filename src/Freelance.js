
import "./Style.css";

import AboutFreelance from "./AboutFreelance";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import FreelanceForm from "./FreelanceForm";


import { Link } from "react-router-dom";

function Freelance() {
  return (
    <>

    
    <div className="breadcrumb">
  <Link to="/">Home</Link>

  <span className="separator">/</span>

  <span className="current">
    Start Your Project
  </span>
</div>


      <AboutFreelance />
       <Projects  from="freelance" />
        <Services />
        <Testimonials />
         <FreelanceForm />
    </>
  );
}

export default Freelance;