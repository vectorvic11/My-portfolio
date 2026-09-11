import img1 from '../assets/apex-preview.webp';
import img2 from '../assets/ecosolar-preview.webp';
import img3 from '../assets/cumbria-preview.webp';
import img4 from '../assets/highland-preview.webp';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "Apex Electrical Services — Manchester",
    type: "Trade & Emergency Landing Page",
    description: "A commercial landing page for a 24/7 emergency electrical contractor in Greater Manchester, UK. Built with sub-second mobile loading, Local Schema.org AI indexing, and achieved a verified 100/100 Google Lighthouse performance score.",
    tech: ["React + Vite", "Tailwind CSS", "100/100 PageSpeed", "Local SEO Schema"],
    image: img1,
    liveLink: "https://apexelectricalmanchester.vercel.app",
    codeLink: "https://github.com/vectorvic11/apexelectricalmanchester",
  },
  {
    id: 2,
    name: "EcoSolar Bristol — Clean Energy Platform",
    type: "Renewables & Battery Storage",
    description: "A high-converting solar and battery installation platform featuring an interactive solar ROI savings calculator. Optimized for Google Local Search with a verified 98/100 mobile PageSpeed score.",
    tech: ["React + Vite", "Tailwind CSS", "Solar ROI Calculator", "98/100 PageSpeed"],
    image: img2,
    liveLink: "https://ecosolarbristol.vercel.app",
    codeLink: "https://github.com/vectorvic11/ecosolarbristol",
  },
  {
    id: 3,
    name: "Cumbria Bathrooms & Heating — Carlisle",
    type: "Showroom & Trade Merchant",
    description: "A luxury showroom and merchant platform featuring 3D virtual design booking, category filtering, and trade account workflows for Lake District plumbers and homeowners.",
    tech: ["React + Vite", "Tailwind CSS", "3D CAD Booking", "Local Cumbria SEO"],
    image: img3,
    liveLink: "https://cumbriabathrooms.vercel.app",
    codeLink: "https://github.com/vectorvic11/cumbriabathrooms",
  },
  {
    id: 4,
    name: "Highland & Co. Property — Birmingham",
    type: "Luxury Lettings & Estate Platform",
    description: "A full-service real estate platform featuring dynamic property search filters, instant landlord rental yield calculator, and ARLA-compliant tenancy booking workflows.",
    tech: ["React + Vite", "Tailwind CSS", "Rental Yield Calculator", "UK PropTech"],
    image: img4,
    liveLink: "https://highlandpropertybirmingham.vercel.app",
    codeLink: "https://github.com/vectorvic11/highlandpropertybirmingham",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
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

                <p className="text-xs font-semibold text-amber-400 tracking-wider uppercase my-2.5">
                  {Array.isArray(project.tech) ? project.tech.join("  •  ") : project.tech}
                </p>
                
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