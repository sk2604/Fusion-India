import React, { useState, useEffect } from 'react';
import './GraceDeck.css';

const divisions = [
  {
    id: 1,
    title: 'Tailored Outerwear & Wool Overcoats',
    spec: 'Double-face virgin wool, tailored half-canvas construction, horn buttons.',
    tag: 'DIVISION 01 // ATELIER SOURCING',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Organic Selvedge Denim & Circular Washes',
    spec: '13.5 oz shuttle-loomed organic denim, low-impact ozone wash, zero water discharge.',
    tag: 'DIVISION 02 // CIRCULAR DENIM',
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Fine Leather Goods & Silk Atelier',
    spec: 'Vegetable-tanned Tuscan calfskin and 22mm pure mulberry silk cut on the bias.',
    tag: 'DIVISION 03 // LUXURY ACCENTS',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function GraceDeck({ id = 'deck', onSelectDivision }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth auto-cycle every 4.8 seconds if user is not hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % divisions.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeDivision = divisions[activeIdx];

  return (
    <section 
      className="page-surface grace-deck-section" 
      id={id}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grace-container grace-px grace-deck-container">
        
        {/* Top Big Statement (Grace Headline-XL) */}
        <div className="grace-deck-headline-wrap">
          <span className="label text-neutral-400">CORE SOURCING CAPABILITIES</span>
          <h2 className="headline-xl text-black mt-2">
            You design what the world wears. We build it.
          </h2>
        </div>

        {/* 3-Column Editorial Stage */}
        <div className="grace-deck-stage">
          <div className="grace-deck-grid">
            
            {/* Left Column: Active Division Title & Interactive Selectors */}
            <div className="grace-deck-col-left">
              <span className="label text-neutral-400">ACTIVE PRODUCTION STREAM</span>
              <h3 className="headline-medium text-black mt-2">
                {activeDivision.title}
              </h3>
              
              {/* Division Selector Pills */}
              <div className="grace-deck-pills-list">
                {divisions.map((div, i) => (
                  <button
                    key={div.id}
                    type="button"
                    className={`grace-division-pill-btn ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => setActiveIdx(i)}
                  >
                    <span className="pill-index">0{i + 1}</span>
                    <span className="pill-title">{div.title.split('&')[0].trim()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Square Luxury Photography Card with Crossfade */}
            <div className="grace-deck-card-wrap">
              <div className="grace-deck-card">
                {divisions.map((div, i) => (
                  <img 
                    key={div.id}
                    src={div.img} 
                    alt={div.title}
                    className={`grace-deck-img ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => onSelectDivision && onSelectDivision(div)}
                  />
                ))}
                <span className="grace-deck-live-tag">
                  {activeDivision.tag}
                </span>
              </div>
            </div>

            {/* Right Column: Specification Details & Progress */}
            <div className="grace-deck-col-right">
              <span className="label text-neutral-400">TECHNICAL SPECIFICATION</span>
              <p className="body-large text-neutral-600 mt-2">
                {activeDivision.spec}
              </p>
              
              <div className="grace-deck-timeline-wrap">
                <span className="caption text-neutral-400">TURNOVER: 10–14 DAYS PROTO / 60 DAYS BULK</span>
                <div className="grace-deck-progress-bar">
                  <div 
                    key={activeIdx} 
                    className={`grace-deck-progress-fill ${isPaused ? 'paused' : 'running'}`} 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
