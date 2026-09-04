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
          High-Performance Web Developer <span className="gold-accent">& Google Search Expert</span>
        </h2>

        {/* Subtitle / Bio */}
        <p className="hero-description">
          I build high-converting websites that help small businesses rank on Google and turn visitors into customers.
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