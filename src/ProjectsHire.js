import "./Projects.css";
import "./Style.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "BankeAuction",
    desc: "Redesigned a property auction platform to simplify property discovery and make auction information easier to navigate.",
    image: "/images/bankeauction.avif",
    tags: ["UI/UX", "Web Design"],
    slug: "bankeauction",
    liveLink: "https://www.bankeauctions.com/",
  },
  {
    id: 2,
    title: "Dart Creatives",
    desc: "Redesigned a modern agency website to strengthen brand presence and improve client engagement.",
    image: "/images/dart.webp",
    tags: ["Web Design", "WordPress"],
    slug: "dartcreatives",
    liveLink: "https://dartcreatives.com/",
  },
];

function Projects({ from = "home" })  {
  return (
    <section className="projects" id="featured-work">
      <div className="container">
        <div className="section-heading">
          <span className="badge">✦ Selected Projects</span>
          <h2>Work That Speaks for <span> Itself</span></h2>n 
          <p>A few projects that show how I approach design, frontend development, and problem-solving.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-column" key={project.id}>
              <Link
  to={`/projects/${project.slug}`}
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
                    View Case Study
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
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;