
import "./Style.css";

import AboutFreelance from "./AboutFreelance";
import Projectsfreelance from "./Projectsfreelance";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactFreelance from "./ContactFreelance";


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
       <Projectsfreelance  from="freelance" />
        <Services />
        <Testimonials />
         <ContactFreelance />
    </>
  );
}

export default Freelance;