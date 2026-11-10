import React, { useState, useEffect } from 'react';
import './HeroV6.css';

export default function HeroV6({ onExplore }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // V4 Smooth Scroll Transformations with dynamic text blur
  const heroOpacity = Math.max(0, 1 - scrollY / 700);
  const heroScale = 1 + scrollY * 0.0003;
  const sloganBlur = Math.min(14, scrollY * 0.035);
  const sloganY = scrollY * 0.22;

  return (
    <section className="v6-hero-wrapper" id="hero">
      {/* Pinned Fullscreen Hero Background with V4 Parallax & Scale */}
      <div 
        className="v6-hero-fixed"
        style={{ opacity: heroOpacity }}
      >
        <div 
          className="v6-hero-bg"
          style={{ transform: `scale(${heroScale})` }}
        >
          {/* V3 Editorial Campaign Photo */}
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2400&auto=format&fit=crop" 
            alt="Fusion India High Fashion Campaign" 
            className="v6-hero-img"
          />
          <div className="v6-hero-overlay" />
        </div>

        {/* Center Brand Statement with V4 Smooth Parallax & Blur */}
        <div 
          className="v6-hero-center-box"
          style={{
            transform: `translateY(${sloganY}px)`,
            filter: `blur(${sloganBlur}px)`
          }}
        >
          <p className="v6-hero-credo">
            Right Product — Right Price and Right Performance
          </p>
          <h1 className="v6-hero-brand-name">
            FUSION INDIA<span className="v6-hero-dot">.</span>
          </h1>
        </div>

        {/* Scroll Indicator Prompt (Preserved exactly as requested) */}
        <div className="v6-hero-scroll-btn" onClick={onExplore} role="button" tabIndex={0}>
          <span className="label">SCROLL TO EXPLORE</span>
          <span className="v6-scroll-line" />
        </div>
      </div>

      {/* 100vh spacer so the next white surface section smoothly scrolls over it */}
      <div className="v6-hero-spacer" />
    </section>
  );
}
