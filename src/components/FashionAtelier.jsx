import React from 'react';
import './FashionAtelier.css';

export default function FashionAtelier({ theme = 'light' }) {
  return (
    <section className={`atelier-section ${theme === 'dark' ? 'atelier-dark' : 'atelier-light'}`}>
      <div className="container atelier-container">
        
        {/* Editorial Statement */}
        <div className="atelier-lead-block">
          <span className="atelier-kicker">INFRASTRUCTURE & ATELIER</span>
          <h2 className="atelier-serif-quote">
            "We do not broker factories. We engineer the bridge between European design vision and audited ethical scale."
          </h2>
        </div>

        {/* Visual Diptych (Grand High-Fashion Sizing) */}
        <div className="atelier-diptych">
          <div className="diptych-card diptych-large">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
              alt="Fusion India Headquarters Atelier"
              className="diptych-photo"
            />
            <div className="diptych-badge">
              <span className="badge-tag">GURUGRAM CAMPUS</span>
              <span className="badge-name">40,000 SQ.FT SOURCING & DESIGN HUB</span>
            </div>
          </div>

          <div className="diptych-card diptych-small">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
              alt="Design Studio & Sample Room"
              className="diptych-photo"
            />
            <div className="diptych-badge">
              <span className="badge-tag">ATELIER LAB</span>
              <span className="badge-name">LOREM IPSUM DOLOR SIT AMET SAMPLE LAB</span>
            </div>
          </div>
        </div>

        {/* Minimalist 4-Figure Credo Bar (Safe Clearance Above Switcher) */}
        <div className="atelier-figures">
          <div className="figure-unit">
            <strong className="figure-num">15<sup>+</sup></strong>
            <span className="figure-label">YEARS OF DISCIPLINE</span>
          </div>
          <div className="figure-unit">
            <strong className="figure-num">500<sup>+</sup></strong>
            <span className="figure-label">AUDITED TIER-1 MILLS</span>
          </div>
          <div className="figure-unit">
            <strong className="figure-num">20<sup>+</sup></strong>
            <span className="figure-label">GLOBAL MARKETS SERVED</span>
          </div>
          <div className="figure-unit">
            <strong className="figure-num">10M<sup>+</sup></strong>
            <span className="figure-label">ANNUAL GARMENTS SHIPPED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
