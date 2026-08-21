import "./Projects.css";
import "./Style.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Fervour",
    desc: "Designed and developed a modern flower e-commerce concept focused on product discovery and user experience.",
    image: "/images/fervour.webp",
    tags: ["UI/UX", "Web Design"],
    slug: "fervour",
    liveLink: "https://vanshika0070.github.io/fervour-blooms/",
  },
  {
    id: 2,
    title: "Lazeez Restaurant",
    desc: "Modern restaurant website focused on menu discovery, reservations, and a premium dining experience.",
    image: "/images/lazeez.avif",
    tags: ["UI/UX", "Frontend"],
    slug: "lazeez",
    liveLink: "https://lazeez-restaurant-lilac.vercel.app/",
  },
];

function Projects({ from = "home" })  {
  return (
    <section className="projects" id="featured-work">
      <div className="container">
        <div className="section-heading">
          <span className="badge">✦ Client Work</span>
          <h2>Work Built for <span>Real Goals</span></h2>
          <p>A few projects that show how I approach strategy, design, and development.</p>
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