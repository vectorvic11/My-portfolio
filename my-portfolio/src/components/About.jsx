import './About.css';
import img1 from '../assets/image1.jpeg'; // Ensure this is a portrait high-res image

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
            I help service businesses across the UK, North America, and Europe solve the 'invisible website' problem.
            
            If your business has strong reviews but isn't ranking on the first page of Google, I build the direct path to get you there. I specialize in ultra-fast, mobile-ready sites engineered with Local SEO Schema and 95+ Google PageSpeed scores to turn search traffic into paying customers.
          </p>

          <p className="about-text">
            Currently open to freelance collaborations with brands and startups
            who value craft.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Project Shipped</p>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>

            <div className="stat">
              <h3>90+</h3>
              <p>Average Lighthouse Speed Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}