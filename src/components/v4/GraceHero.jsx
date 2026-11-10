import React, { useEffect, useState } from 'react';
import './GraceHero.css';

export default function GraceHero({ onExplore }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Grace scroll transformations
  const heroOpacity = Math.max(0, 1 - scrollY / 700);
  const heroScale = 1 + scrollY * 0.0003;
  const sloganBlur = Math.min(14, scrollY * 0.03);
  const sloganY = scrollY * 0.2;

  return (
    <div className="grace-hero-wrapper" id="hero">
      {/* Pinned Fullscreen Hero Background */}
      <div 
        className="grace-hero-fixed"
        style={{ opacity: heroOpacity }}
      >
        <div 
          className="grace-hero-bg"
          style={{ transform: `scale(${heroScale})` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop" 
            alt="Fusion India High Fashion Atelier" 
            className="grace-hero-img"
          />
          <div className="grace-hero-overlay" />
        </div>

        {/* Minimal Centered Grace Slogan */}
        <div 
          className="grace-hero-slogan-wrap"
          style={{
            transform: `translateY(${sloganY}px)`,
            filter: `blur(${sloganBlur}px)`
          }}
        >
          <p className="headline-large text-white text-center">
            Physical craft at audited global scale.
          </p>
        </div>

        {/* Scroll indicator prompt */}
        <div className="grace-hero-scroll-prompt" onClick={onExplore}>
          <span className="label">SCROLL TO EXPLORE</span>
          <span className="grace-scroll-line" />
        </div>
      </div>

      {/* 100vh spacer so the next page-surface section smoothly scrolls over it */}
      <div className="grace-hero-spacer" />
    </div>
  );
}
