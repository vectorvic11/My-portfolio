import img1 from '../assets/Screenshot1.png';
import img2 from '../assets/Screenshot2.png';
import img3 from '../assets/Screenshot3.png';
import img4 from '../assets/Screenshot4.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "Asaba Houses Scout",
    type: "Real Estate Platform",
    description: "PropTech Solutions Platform: A high-speed property listing platform optimized for Google Search. Built to help agencies reduce marketing costs by 40% through organic search visibility and a mobile-first user experience.",
    tech: "REACT + TAILWIND CSS + vite",
    image: img1,
    liveLink: "https://asabahousescout.com.ng",
    codeLink: "https://github.com/vectorvic11/asabahousescout.git",
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