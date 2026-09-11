import img1 from '../assets/Screenshot1.png';
import img2 from '../assets/apex-preview.webp';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "Apex Electrical Services — Manchester",
    type: "Trade & Emergency Landing Page",
    description: "A commercial landing page for a 24/7 emergency electrical contractor in Greater Manchester, UK. Built with sub-second mobile loading, Local Schema.org AI indexing, and achieved a verified 100/100 Google Lighthouse performance score.",
    tech: ["React + Vite", "Tailwind CSS", "100/100 PageSpeed", "Local SEO Schema"],
    image: img2,
    liveLink: "https://apexelectricalmanchester.vercel.app",
    codeLink: "https://github.com/vectorvic11/apexelectricalmanchester",
  },
  {
    id: 2,
    name: "Asaba Houses Scout",
    type: "Real Estate Platform",
    description: "PropTech Solutions Platform: A high-speed property listing platform optimized for Google Search. Built to help agencies reduce marketing costs by 40% through organic search visibility and a mobile-first user experience.",
    tech: ["React", "Tailwind CSS", "Vite", "SEO Optimized"],
    image: img1,
    liveLink: "https://asabahousescout.vercel.app",
    codeLink: "https://github.com/vectorvic11/asabahousescout.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        
        {/* Header Structure */}
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
                <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
              </div>
              
              <div className="project-info">
                <div className="project-title-row">
                  <h3>{project.name} — <span>{project.type}</span></h3>
                </div>

                {/* Clean, Individual Tech Badges */}
                <div className="tech-stack flex flex-wrap gap-2 my-2.5">
                  {Array.isArray(project.tech) ? (
                    project.tech.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block text-xs px-2.5 py-1 rounded bg-slate-800/80 text-amber-400 border border-slate-700 font-medium"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className="inline-block text-xs px-2.5 py-1 rounded bg-slate-800/80 text-amber-400 border border-slate-700 font-medium">
                      {project.tech}
                    </span>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-actions">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-pill btn-white"
                  >
                    Live
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-pill btn-outline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}