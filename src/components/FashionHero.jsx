import React from 'react';
import './FashionHero.css';

export default function FashionHero() {
  return (
    <section className="fashion-hero">
      
      {/* Full-Bleed Background Campaign Visual */}
      <div className="fashion-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2400&auto=format&fit=crop"
          alt="Fusion India High Fashion Campaign"
          className="fashion-hero-img"
        />
        <div className="fashion-hero-scrim" />
      </div>

      {/* Floating Editorial Overlays */}
      <div className="fashion-hero-content">
        
        {/* Top Tag */}
        <div className="fashion-hero-top">
          <span className="hero-season-tag">CAMPAIGN 2026 / 2027</span>
          <span className="hero-geo-tag">NEW YORK · STOCKHOLM · HAMBURG · GURUGRAM</span>
        </div>

        {/* Center / Bottom Monumental Title */}
        <div className="fashion-hero-bottom">
          <div className="fashion-hero-brand-lockup">
            <span className="fashion-hero-sub">THE GLOBAL SOURCING ATELIER</span>
            <h1 className="fashion-hero-monumental">
              FUSION INDIA<span className="hero-dot">.</span>
            </h1>
          </div>
          <div className="fashion-hero-action">
            <p className="hero-credo-micro">
              Turning global runway directions into ethically manufactured reality.
            </p>
            <a href="#lookbook" className="hero-explore-pill">
              <span>EXPLORE LOOKBOOK</span>
              <span className="pill-arrow">↓</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

