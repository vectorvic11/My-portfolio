import img1 from '../assets/Screenshot1.png';
import img2 from '../assets/Screenshot2.png';
import img3 from '../assets/Screenshot3.png';
import img4 from '../assets/Screenshot4.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "Lumen",
    type: "SaaS Landing",
    description: "A high-converting SaaS landing page designed to communicate product value and drive user engagement.",
    tech: "REACT + TAILWIND",
    image: img1,
    liveLink: "https://dribbble.com",
    codeLink: "#",
  },
  {
    id: 2,
    name: "Olanin",
    type: "Fashion Store",
    description: "Editorial e-commerce experience for a luxury fashion label focused on premium aesthetics.",
    tech: "NEXT.JS + SHOPIFY",
    image: img2,
    liveLink: "https://dexstitches.com",
    codeLink: "#",
  },
  {
    id: 3,
    name: "Dashboard",
    type: "Analytics Tool",
    description: "Real-time data analytics with interactive charts and comprehensive reporting features.",
    tech: "REACT + NODE.JS",
    image: img3,
    liveLink: "https://www.forex.com",
    codeLink: "#",
  },
  {
    id: 4,
    name: "Fintech",
    type: "Mobile Banking",
    description: "Clean banking UI design focused on seamless usability and secure financial management.",
    tech: "FIGMA + UI DESIGN",
    image: img4,
    liveLink: "https://www.go2bank.com",
    codeLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        
        {/* Updated Header Structure */}
        <header className="projects-header">
          <div className="header-left">
            <span className="selected-work-label">SELECTED WORK</span>
            <h2 className="header-title">Projects that ship.</h2>
          </div>
          <div className="header-right">
            <p>A small set of products built with care from concept to launch.</p>
          </div>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.name} />
              </div>
              
              <div className="project-info">
                <div className="project-title-row">
                  <h3>{project.name} — <span>{project.type}</span></h3>
                  <span className="tech-stack">{project.tech}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-actions">
                  <a href={project.liveLink} target="_blank" className="btn-pill btn-white">Live</a>
                  <a href={project.codeLink} target="_blank" className="btn-pill btn-outline">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}