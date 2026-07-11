import "./Style.css";
import "./About.css";

function AllBoutMe() {
  return (

<section className="tools">
  <div className="container ">

    <div className="section-heading">
        <span className="badge">⦿ Frontend Developer</span>
         <h2>Experience</h2>
          <p>Building fast, responsive, and user-friendly websites.</p>
    </div>

    <div className="tools-box about-content">
          <h4>Dart Creatives (July 2024 – May 2025)</h4>
            <ul>
              <li>⚡Designed and developed modern, responsive websites for clients</li>
              <li>⚡Created clean and user-friendly UI/UX designs</li>
              <li>⚡Improved usability and overall website performance</li>
              <li>⚡Collaborated with team members to deliver projects efficiently</li>
            </ul>

            <br />

            <hr />


          <h4>Learning & Development (June 2025 – Present)</h4>

            <ul>
                <li>⚡Focused on UI/UX design using Figma and Framer.</li>
                <li>⚡Built responsive websites and modern user interfaces with React.js</li>
                <li>⚡Enhanced website usability, accessibility, and performance.</li>
                <li>⚡Currently exploring Generative AI for UI/UX design workflows.</li>
            </ul>

    </div>


  </div>
</section>

  );
}

export default AllBoutMe;