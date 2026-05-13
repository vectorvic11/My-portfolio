import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} Victor Osita. All rights reserved.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/victor-osita-egbe" target="_blank" rel="noreferrer" title="LinkedIn"> LinkedIn
            </a>
           <a href="https://github.com/vectorvic11"target="_blank" rel="noreferrer" title="GitHub"> GitHub
           </a>
            <a href="mailto:victoregbe2018@gmail.com" title="Email">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
