import "./Projects.css";
import "./Style.css";
import "./Breadcrumb.css";
import ProjectCTA from "./ProjectCTA";
import { Link } from "react-router-dom";

export const projectsall = [
  {
  id: 1,
  title: "Fervour",
  desc: "Designed and developed a modern flower e-commerce concept focused on product discovery and user experience.",
  descs: "Fervour is a flower delivery e-commerce concept offering fresh, handcrafted bouquets through a polished and easy-to-navigate online shopping experience.",
  image: "/images/fervour.webp",
  tags: ["UI/UX", "Web Design"],
  slug: "fervour",
  liveLink: "https://vanshika0070.github.io/fervour-blooms/",
  client: "E-commerce Design | Competition Project",
  services: "UI/UX Design, Web Development",

  goal: {
    title: "The Goal",
    text: "The goal was to create a sleek and sophisticated e-commerce experience for an online flower store, combining an elegant visual design with intuitive shopping interactions. The interface was designed to make browsing bouquets, exploring products, and moving through the shopping journey feel simple and engaging.",
    image: "/images/fervour.goal.avif",
  },

  challenge: {
    title: "The Challenge",
    text: "The challenge was to create a polished e-commerce experience using HTML, CSS, and JavaScript while keeping the interface responsive and easy to navigate. This included designing product layouts, interactive quick-view modals, and form-based interactions that felt natural across different screen sizes.",
    image: "/images/fervour.challenge.avif",
  },

  result: {
    title: "The Result",
    text: "The project resulted in a visually refined and responsive e-commerce interface with a clear product hierarchy and engaging interactions. Features such as quick-view modals and structured layouts make product discovery easier while creating a smoother overall shopping experience.",
    image: "/images/fervour.result.avif",
  },
  },

{
  id: 2,
  title: "Lazeez Restaurant",
  desc: "Designed and developed a modern restaurant website focused on menu discovery, reservations, and a premium dining experience.",
  descs: "Lazeez is a premium fine dining restaurant offering rich flavours, elegant ambience, and memorable dining experiences through a polished digital experience.",
  image: "/images/lazeez.avif",
  tags: ["UI/UX", "Frontend"],
  slug: "lazeez",
  liveLink: "https://lazeez-restaurant-lilac.vercel.app/",
  client: "Lazeez Restaurant",
  services: "UI/UX Design, Web Design, React Development",

  goal: {
    title: "The Goal",
    text: "The goal was to create a modern and user-friendly restaurant website that makes exploring the menu and reserving a table simple and seamless. The design needed to communicate Lazeez's premium identity while keeping the overall experience intuitive and approachable.",
    image: "/images/lazeez.goal.avif",
  },

  challenge: {
    title: "The Challenge",
    text: "The main challenge was balancing a premium visual identity with practical usability. The website needed to communicate an upscale dining experience while maintaining clear navigation, responsive layouts, smooth reservation interactions, and an enjoyable experience across different devices.",
    image: "/images/lazeez.challenge.webp",
  },

  result: {
    title: "The Result",
    text: "The final result is a polished and responsive restaurant website built with React. Elegant visuals, structured menu exploration, streamlined reservation interactions, and responsive layouts create a smoother experience while strengthening Lazeez's online presence.",
    image: "/images/lazeez.result.webp",
  },
},

{
  id: 3,
  title: "BankeAuction",
  desc: "Redesigned a property auction platform to simplify property discovery and make auction information easier to navigate.",
  descs: "BankeAuctions is a property auction platform that enables buyers to discover and purchase properties through online auctions.",
  image: "/images/bankeauction.avif",
  tags: ["UI/UX", "Web Design"],
  slug: "bankeauction",
  liveLink: "https://www.bankeauctions.com/",
  client: "Private Sector Bank",
  services: "Website Design, UI/UX Design, Frontend",

  goal: {
    title: "The Goal",
    text: "The goal was to redesign the Banke Auctions platform from the ground up with a focus on usability, clarity, and a more structured user experience. The aim was to make it easier for users to browse properties, understand auction details, and navigate the platform with confidence.",
    image: "/images/bankeauction.goal.avif",
  },

  challenge: {
    title: "The Challenge",
    text: "The platform contained large amounts of complex information, including property listings, legal details, and auction data. The key challenge was organizing this information into a clear and intuitive interface without hiding important details. The experience also needed to feel approachable for users unfamiliar with the auction process.",
    image: "/images/bankeauction.challenge.avif",
  },

  result: {
    title: "The Result",
    text: "The redesigned interface provides a cleaner and more structured experience for exploring property listings and understanding auction information. Improved hierarchy, navigation, and content organization reduce complexity and make the platform easier to use.",
    image: "/images/bankeauction.result.avif",
  },
},

{
  id: 4,
  title: "Dart Creatives",
  desc: "Redesigned a modern agency website to strengthen brand presence and improve client engagement.",
  descs: "Dart Creatives is a creative design agency offering branding, web design, and digital solutions to help businesses build a stronger online presence.",
  image: "/images/dart.webp",
  tags: ["Web Design", "WordPress"],
  slug: "dartcreatives",
  liveLink: "https://dartcreatives.com/",
  client: "Dart Creatives",
  services: "Web Design, Web Development",

  goal: {
    title: "The Goal",
    text: "The goal was to redesign the Dart Creatives website with a more modern and professional visual identity while making its services easier to understand and explore. The focus was on clearer content structure, stronger presentation, and making it easier for potential clients to connect with the agency.",
    image: "/images/dart.goal.webp",
  },

  challenge: {
    title: "The Challenge",
    text: "The existing website contained multiple services and content sections but lacked a clear visual hierarchy and consistent structure. The challenge was to organize the information without overwhelming visitors while working within WordPress, customizing layouts, integrating plugins, and maintaining a smooth browsing experience.",
    image: "/images/dart.challenge.webp",
  },

  result: {
    title: "The Result",
    text: "The redesigned website delivers a more polished and engaging experience that better represents the agency's brand. Improved content hierarchy, clearer messaging, refined layouts, and interactive elements make the site easier to navigate and more effective at communicating its services to potential clients.",
    image: "/images/dart.result.webp",
  },
},

];

function Projectsall() {
  return (
    <>

    <div className="breadcrumb">
  <Link to="/">Home</Link>

  <span className="separator">/</span>

  <span className="current">
    Featured Work
  </span>
</div>

      <section className="projects ">
        <div className="container">
          <div className="section-heading">
             <span className="badge">✦ Selected Work</span>

             <h2>
           Design That <span>Performs</span>
          </h2>


            <p>Real websites designed &amp; built for clients</p>
          </div>

          <div className="projects-grid">
            {projectsall.map((project) => (
              <div className="project-column" key={project.id}>
             <Link
  to={`/projects/${project.slug}`}
  state={{ from: "projectsall" }}
  className="project-card">
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
        </div>
      </section>

      <ProjectCTA />
    </>
  );
}

export default Projectsall;