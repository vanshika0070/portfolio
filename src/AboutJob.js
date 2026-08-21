import "./Style.css";
import "./About.css";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiWordpress,
  SiFigma,
  SiGithub,
  SiFramer,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function AboutJob() {
  return (
    <section className="about">
      <div className="container">

        <div className="aboutfull-grid">

          <div className="section-heading">
            <span className="badge">✦ Frontend Designer & Developer</span>
            <h2>A Designer Who Can <span>Build</span> </h2>
            <p>Frontend development, UI/UX design, and the ability to take a website from idea to implementation.</p>
          </div>

          <div className="about-content">
            <p>I build fast, responsive, and accessible websites with a strong focus on design quality, performance, and clean code.</p>
          </div>

        </div>


        <div className="aboutjob-grid">

          {/* Left */}
          <div className="about-content">
            <h3>Core Skills</h3>

            <ul>
              <li>⚡ Frontend Development</li>
              <li>⚡ UI/UX Design</li>
              <li>⚡ Responsive Web Design</li>
              <li>⚡ React Development</li>
              <li>⚡ WordPress Development</li>
            </ul>
          </div>


          {/* Divider */}
          <hr />


          {/* Right */}

          <div className="about-content">
            <h3>Tools & Technologies</h3>

            <div className="tooltech">

  <div className="stat-card">
    <SiHtml5 className="tech-icon html-icon" />
    <p>HTML5</p>
  </div>

  <div className="stat-card">
    <SiCss className="tech-icon css-icon" />
    <p>CSS</p>
  </div>

  <div className="stat-card">
    <SiJavascript className="tech-icon js-icon" />
    <p>JavaScript</p>
  </div>

  <div className="stat-card">
    <SiReact className="tech-icon react-icon" />
    <p>React</p>
  </div>
  
  <div className="stat-card">
    <SiFigma className="tech-icon figma-icon" />
    <p>Figma</p>
  </div>

  <div className="stat-card">
    <SiFramer className="tech-icon framer-icon" />
    <p>Framer</p>
  </div>

  <div className="stat-card">
    <SiWordpress className="tech-icon wordpress-icon" />
    <p>WordPress</p>
  </div>

  <div className="stat-card">
    <SiGithub className="tech-icon github-icon" />
    <p>GitHub</p>
  </div>

  <div className="stat-card">
    <VscVscode className="tech-icon vscode-icon" />
    <p>VS Code</p>
  </div>

</div>
          </div>
          
          <hr/>

        </div>

        <div className="aboutjobb-grid">

          {/* Left */}
          <div className="about-content">
            <div className="btn-direction">
              <a href="#featured-work" className="btn-white">
                View My Work
              </a>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
}

export default AboutJob;










