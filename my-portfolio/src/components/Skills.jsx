import './Skills.css';

const skills = [
  "Local SEO Optimization", "Google Business Profile Setup", "AI-Search Visibility", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS",
  "Node.js", "PostgreSQL", "UI Design", "Branding", "Figma", "Responsive Design"
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        
        <div className="skills-header">
          <span className="toolkit-label">SKILLS</span>
          <h2 className="skills-main-title">Skills & expertise</h2>
        </div>

        <div className="skills-flex">
          {skills.map((skill, index) => (
            <div key={index} className="skill-pill">
              {skill}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}