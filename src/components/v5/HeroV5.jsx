import React, { useState, useEffect } from 'react';
import './HeroV5.css';

export default function HeroV5({ onExplore }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroScale = 1 + scrollY * 0.0003;
  const heroOpacity = Math.max(0, 1 - scrollY / 700);

  return (
    <section className="v5-hero-wrapper" id="hero">
      <div 
        className="v5-hero-fixed"
        style={{ opacity: heroOpacity }}
      >
        {/* Background Visual (Warm golden high-fashion lighting matching frame 00:00) */}
        <div 
          className="v5-hero-bg"
          style={{ transform: `scale(${heroScale})` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop" 
            alt="Fusion India Atelier" 
            className="v5-hero-img"
          />
          <div className="v5-hero-overlay" />
        </div>

        {/* Center Stylized Brand Statement (Matching frame 00:01 in video) */}
        <div className="v5-hero-center-box">
          <h1 className="v5-hero-logo">
            <span className="v5-hero-logo-main">fusion</span>
            <span className="v5-hero-logo-sub">Atelier studio.</span>
          </h1>
          <p className="v5-hero-tagline">
            Physical craft at audited global scale.
          </p>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="v5-hero-scroll-btn" onClick={onExplore}>
          <span className="label">SCROLL TO EXPLORE</span>
          <span className="v5-scroll-line" />
        </div>
      </div>

      {/* Spacer so next white surface scrolls over it */}
      <div className="v5-hero-spacer" />
    </section>
  );
}
