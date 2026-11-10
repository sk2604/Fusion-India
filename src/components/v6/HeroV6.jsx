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
    <section className="v6-hero-wrapper" id="hero" data-nav-theme="dark">
      {/* Pinned Fullscreen Hero Background with V4 Parallax & Scale */}
      <div 
        className="v6-hero-fixed"
        style={{ opacity: heroOpacity }}
        data-nav-theme="dark"
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
          <div className="v6-hero-scrim" />
        </div>

        {/* Editorial Content Container (Pinned Bottom Lockup matching User Reference) */}
        <div 
          className="v6-hero-content"
          style={{
            transform: `translateY(${sloganY}px)`,
            filter: `blur(${sloganBlur}px)`
          }}
        >
          {/* Bottom Monumental Lockup */}
          <div className="v6-hero-bottom-lockup">
            
            {/* Left: Eyebrow + Monumental Serif Title */}
            <div className="v6-hero-brand-lockup">
              <span className="v6-hero-eyebrow">
                Right Product — Right Price and Right Performance
              </span>
              <h1 className="v6-hero-monumental">
                FUSION INDIA<span className="v6-hero-dot">.</span>
              </h1>
            </div>

            {/* Right: Micro-Credo + Scroll To Explore Action */}
            <div className="v6-hero-action">
              <p className="v6-hero-credo-micro">
                Turning global runway directions into ethically manufactured reality.
              </p>
              
              <div 
                className="v6-hero-explore-cluster"
                onClick={onExplore}
                role="button"
                tabIndex={0}
                aria-label="Scroll to explore"
              >
                <div className="v6-hero-explore-pill">
                  <span>SCROLL TO EXPLORE</span>
                  <span className="v6-pill-arrow">↓</span>
                </div>
                <div className="v6-hero-scroll-line-indicator">
                  <span className="v6-scroll-line" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 100vh spacer so the next white surface section smoothly scrolls over it */}
      <div className="v6-hero-spacer" />
    </section>
  );
}
