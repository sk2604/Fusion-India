import React, { useRef, useState, useEffect } from 'react';
import './GraceDeck.css';

const divisions = [
  {
    id: 1,
    title: 'Tailored Outerwear & Wool Overcoats',
    subtitle: 'Double-face virgin wool, tailored canvas construction, engineered horn hardware.',
    tag: 'DIVISION 01 // ATELIER',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Organic Selvedge Denim & Washes',
    subtitle: '13.5 oz shuttle-loomed organic denim, ozone wash finishing, zero water waste.',
    tag: 'DIVISION 02 // CIRCULAR',
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Fine Leather Goods & Silk Atelier',
    subtitle: 'Vegetable-tanned Tuscan calfskin and 22mm pure mulberry silk cut on the bias.',
    tag: 'DIVISION 03 // LUXURY',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function GraceDeck({ id = 'deck' }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      
      const current = -rect.top;
      const p = Math.min(Math.max(current / totalScrollable, 0), 1);
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate active card index (0, 1, 2)
  const activeIdx = Math.min(Math.floor(progress * divisions.length), divisions.length - 1);
  const activeDivision = divisions[activeIdx];

  // Headline opacity fades out slightly as user scrolls deep into the card reveal
  const headlineOpacity = progress < 0.25 ? 1 : Math.max(0.15, 1 - (progress - 0.25) * 2.5);

  return (
    <section className="page-surface grace-deck-section" id={id} ref={containerRef}>
      <div className="grace-deck-sticky">
        <div className="grace-container grace-px">
          
          {/* Top Big Statement (Grace Headline-XL) */}
          <div 
            className="grace-deck-headline-wrap"
            style={{ opacity: headlineOpacity }}
          >
            <h2 className="headline-xl text-black">
              You design what the world wears. We build it.
            </h2>
          </div>

          {/* Interactive Editorial Center Showcase */}
          <div className="grace-deck-stage">
            <div className="grace-deck-grid">
              
              {/* Left Side: Division Name */}
              <div className="grace-deck-col-left">
                <span className="label text-neutral-400">CORE SOURCING CORE</span>
                <h3 className="headline-medium text-black mt-2">
                  {activeDivision.title}
                </h3>
              </div>

              {/* Center: Square Luxury Photography Card */}
              <div className="grace-deck-card-wrap">
                <div className="grace-deck-card">
                  {divisions.map((div, i) => (
                    <img 
                      key={div.id}
                      src={div.img} 
                      alt={div.title}
                      className={`grace-deck-img ${i === activeIdx ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side: Spec Description */}
              <div className="grace-deck-col-right">
                <p className="label text-neutral-400">{activeDivision.tag}</p>
                <p className="body-default text-neutral-500 mt-2">
                  {activeDivision.subtitle}
                </p>
                
                {/* 3 Step Pill Indicator */}
                <div className="grace-deck-dots">
                  {divisions.map((_, i) => (
                    <span 
                      key={i} 
                      className={`grace-deck-dot ${i === activeIdx ? 'active' : ''}`} 
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
