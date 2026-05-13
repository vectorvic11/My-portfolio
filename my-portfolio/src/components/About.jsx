import './About.css';
import img1 from '../assets/image1.jpg'; // Ensure this is a portrait high-res image

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* IMAGE LEFT */}
        <div className="about-image">
          <div className="image-box">
            <img src={img1} alt="Profile" />
          </div>
        </div>

        {/* CONTENT RIGHT */}
        <div className="about-content">
          <span className="about-label">About</span>
          
          <h1 className="about-title">
            Designing with intent.<br />
            Building with craft.
          </h1>

          <p className="about-text">
            I'm a developer and designer with a focus on premium, conversion-focused websites.
            I care about typography, motion, and the small details that make digital products feel considered.
          </p>

          <p className="about-text">
            Currently open to internships and freelance collaborations with brands and startups
            who value craft.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>1+</h3>
              <p>Years coding</p>
            </div>

            <div className="stat">
              <h3>5+</h3>
              <p>Projects shipped</p>
            </div>

            <div className="stat">
              <h3>3</h3>
              <p>Happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}