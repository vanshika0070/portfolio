import "./Style.css";
import "./About.css";
import { Link } from "react-router-dom";
import WhyAbout from "./WhyAbout";


const personalStats = [
  {
    title: "Curious",
    description: "Exploring new ideas and figuring out how things work.",
  },
  {
    title: "Problem Solver",
    description: "Turning messy problems into clear solutions.",
  },
  {
    title: "Detail Oriented",
    description: "Small details can make a big difference.",
  },
  {
    title: "Collaborative",
    description: "Good work usually comes from good communication.",
  },
];

const approach = [
  {
    number: "01.",
    title: "DISCOVER",
    description: [
      "We understand your goals, audience, content, and what the website needs to achieve.",
    ],
    icon: "✦",
  },
  {
    number: "02.",
    title: "DESIGN & BUILD",
    description: [
      "I turn the direction into a polished, responsive website.",
    ],
    icon: "</>",
  },
  {
    number: "03.",
    title: "LAUNCH",
    description: [
      "We refine the final details, make sure everything works, and get your website ready to go live.",
    ],
    icon: "•••",
  },
];

const skills = [
  {
    number: "01.",
    title: "FRONTEND DEVELOPMENT",
    descriptions: [
      "Responsive websites with clean, maintainable code.",
    ],
    icon: "✦",
  },
  {
    number: "02.",
    title: "UI/UX DESIGN",
    descriptions: [
      "Interfaces that are clean, intuitive, and visual design.",
    ],
    icon: "</>",
  },
  {
    number: "03.",
    title: "WEBSITE DESIGN",
    descriptions: [
      "Complete website designs built around your brand and goals.",
    ],
    icon: "•••",
  },
];

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "WordPress",
  "Figma",
  "VS Code",
  "Framer",
];

function AllBoutMe() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <span className="separator">/</span>

        <span className="current">About Me</span>
      </div>

      {/* About */}
      <section className="about">
        <div className="container">
          <div className="about-grid">

            {/* Image */}
            <div className="about-image-card">
              <img
                src="/images/profile.webp"
                alt="Vanshika Manav"
              />
            </div>

            {/* Content */}
            <div className="about-content">
              <div className="section-heading">
                <span className="badge">✦ My Story</span>
                <h2>Person behind the <span>Projects</span></h2>
                <p>A little more about how I got here and what drives the way I work.</p>
              </div>

              <p>
                My journey into web design and development started
                with curiosity. I liked figuring out why some websites
                felt easy to use while others didn't — and that
                curiosity slowly turned into a passion for building
                them myself.
              </p>

              <p>
                Today, I work across design and frontend development,
                with a focus on creating websites that are clear,
                responsive, and enjoyable to use.
              </p>

              <div className="stat">
                {personalStats.map((stat) => (
                  <div className="stat-card" key={stat.title}>
                    <h3>{stat.title}</h3>
                    <p>{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* Approach */}
      <section className="approach">
        <div className="container">

          <div className="section-heading">
            <span className="badge">✦ My Approach</span>
            <h2>How I <span>Work</span></h2>
            <p>A simple process from understanding the idea to bringing it to life.</p>
          </div>

          {/* Approach Cards */}
          <div className="grid">
            {approach.map((item) => (
              <article
                className="why-card"
                key={item.number}
              >
                <div className="why-card-top">
                  <span className="why-number">
                    {item.number}
                  </span>

                  <div className="why-icon">
                    {item.icon}
                  </div>
                </div>

                <div className="why-card-content">
                  <h3>{item.title}</h3>

                  <span className="why-line"></span>

                  <ul>
                    {item.description.map((point) => (
                      <li key={point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>





      {/* Skills */}
      <section className="skills">
        <div className="container">

          <div className="section-heading">
            <span className="badge">✦ Skills</span>
            <h2>Design + <span>Development</span></h2>
            <p>The skills I use to turn ideas into polished, responsive websites.</p>
          </div>

          {/* Skills Cards */}
          <div className="grid">
            {skills.map((skill) => (
              <article
                className="why-card"
                key={skill.number}
              >
                <div className="why-card-top">
                  <span className="why-number">
                    {skill.number}
                  </span>

                  <div className="why-icon">
                    {skill.icon}
                  </div>
                </div>

                <div className="why-card-content">
                  <h3>{skill.title}</h3>

                  <span className="why-line"></span>

                  <ul>
                    {skill.descriptions.map((description) => (
                      <li key={description}>
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Tools */}
      <section className="tools">
        <div className="container">

          <div className="section-heading">
            <span className="badge">✦ Tools</span>

            <h2>
              Tools <span>I Work</span> With
            </h2>

            <p>
              The tools I use throughout the design and development
              process.
            </p>
          </div>

          <div className="tools-box">
            <div className="tools-list">
              {tools.map((tool) => (
                <span className="tool" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Me */}
      <WhyAbout />

    </>
  );
}

export default AllBoutMe;