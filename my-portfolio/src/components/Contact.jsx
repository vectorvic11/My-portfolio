import './Contact.css';

export default function Contact() {
  const emailAddress = "victoregbe2018@gmail.com";
  const whatsappNumber = "2349081341624"; // Format: country code + number (no + or spaces)
  const linkedinProfile = "victor-osita-egbe";

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        
        {/* HEADER */}
        <div className="section-header">
          <span className="contact-tag">CONTACT</span>
          <h2 className="contact-main-title">
            Let’s work <span className="highlight">together.</span>
          </h2>
          <p className="contact-subtext">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        {/* CONTACT CARDS - NOW CLICKABLE */}
        <div className="contact-cards">
          
          {/* Email Card */}
          <a href={`mailto:${emailAddress}`} className="card">
            <p className="card-label">EMAIL</p>
            <h4 className="card-value">{emailAddress}</h4>
          </a>

          {/* WhatsApp Card */}
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="card">
            <p className="card-label">WHATSAPP</p>
            <h4 className="card-value">+234 908 134 1624</h4>
          </a>

          {/* LinkedIn Card */}
          <a href={`https://linkedin.com/in/${linkedinProfile}`} target="_blank" rel="noreferrer" className="card">
            <p className="card-label">LINKEDIN</p>
            <h4 className="card-value">/in/victor-osita-egbe</h4>
          </a>
          
        </div>

        {/* ACTION BUTTON */}
        <div className="contact-action">
          <a href={`mailto:${emailAddress}`} className="send-message-btn">
            Send Message &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}