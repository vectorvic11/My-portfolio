import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        {/* Huge Name Header */}
        <h1 className="hero-display-name">Victor Osita</h1>

        {/* Professional Title */}
        <h2 className="hero-job-title">
          Full-Stack Developer <span className="gold-accent">& Designer</span>
        </h2>

        {/* Subtitle / Bio */}
        <p className="hero-description">
          I build clean, high-converting websites for brands and startups 
          where minimal design meets premium craft.
        </p>

        {/* Action Buttons */}
        <div className="hero-action-group">
          <a href="#projects" className="btn-pill btn-white">
            View My Work <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn-pill btn-outline">
            Contact Me
          </a>
        </div>

        {/* Bottom Scroll Text */}
        <div className="scroll-hint">
          SCROLL
        </div>
        
      </div>
    </section>
  );
}