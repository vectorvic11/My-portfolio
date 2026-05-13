import './Navbar.css';

export default function Navbar() {
  const whatsappLink = `https://wa.me/2349081341624`; // Format: country code + number (no + or spaces)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Far Left */}
        <div className="navbar-brand">
          <a href="#home">
            Victor Osita<span className="brand-dot">.</span>
          </a>
        </div>

        {/* Center Links */}
        <div className="navbar-links">
          <a href="#projects" className="nav-item">Work</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>

        {/* Far Right */}
        <div className="navbar-action">
          <a href="#contact" className="hire-btn">
            Hire me
          </a>
        </div>

      </div>
    </nav>
  );
}