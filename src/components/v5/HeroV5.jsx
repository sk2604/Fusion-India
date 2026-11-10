import React from 'react';
import './HeroV5.css';

export default function HeroV5({ onExplore }) {
  return (
    <section className="v5-hero-wrapper" id="hero">
      <div className="v5-hero-sticky">
        {/* Pinned Atelier Visual (Warm golden lighting matching frame 00:00) */}
        <div className="v5-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop" 
            alt="Fusion India Atelier" 
            className="v5-hero-img"
          />
          <div className="v5-hero-overlay" />
        </div>

        {/* Center Brand Statement (Matching frame 00:01 in video) */}
        <div className="v5-hero-center-box">
          <h1 className="v5-hero-logo">
            <span className="v5-hero-logo-main">fusion</span>
            <span className="v5-hero-logo-sub">Atelier studio.</span>
          </h1>
          <p className="v5-hero-tagline">
            Physical craft at audited global scale.
          </p>
        </div>

        {/* Scroll Prompt */}
        <div className="v5-hero-scroll-btn" onClick={onExplore} role="button" tabIndex={0}>
          <span className="label">SCROLL TO EXPLORE</span>
          <span className="v5-scroll-line" />
        </div>
      </div>
    </section>
  );
}
