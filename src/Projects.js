import "./Projects.css";
import "./Style.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "BankeAuction",
    desc: "Streamlined user experience for easier property discovery and navigation.",
    image: "/images/bankeauction.avif",
    tags: ["UI/UX", "Web Design"],
    slug: "bankeauction",
    liveLink: "https://www.bankeauctions.com/",
  },
  {
    id: 2,
    title: "Lazeez Restaurant",
    desc: "A modern restaurant website designed for effortless dining reservations.",
    image: "/images/lazeez.avif",
    tags: ["React.js", "Frontend"],
   slug: "lazeez",
    liveLink: "https://lazeez-restaurant-lilac.vercel.app/",
  },
];

function Projects({ from = "home" })  {
  return (
    <section className="projects" id="featured-work">
      <div className="container">
        <div className="section-heading">
          <span className="badge">⦿ My Projects</span>

          <h2>
            Websites Built to <span>Convert</span>
          </h2>

          <p>Real websites designed &amp; built for clients</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-column" key={project.id}>
              <Link
  to={`/${project.slug}`}
  state={{ from }}
  className="project-card"
>
                <div className="project-image">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                  <button
                    type="button"
                    className="hover-btn"
                  >
                    View Project
                  </button>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.desc}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-footer"
              >
                <span>View Live Site</span>

                <div className="arrow">→</div>
              </a>
            </div>
          ))}
        </div>

        <div className="btn-direction">
          <Link to="/Projectsall" className="btn-white">
            View All Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;