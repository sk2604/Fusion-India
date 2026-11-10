import React, { useState, useEffect } from 'react';
import './FlankingShowcaseV5.css';

const items = [
  {
    id: 1,
    left: 'Campaigns',
    right: 'with attitude.',
    tag: 'DIVISION 01 // TAILORED OUTERWEAR',
    sub: 'Double-face virgin wool, tailored canvas construction, horn hardware.',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    left: 'Lookbooks',
    right: 'all of one piece.',
    tag: 'DIVISION 02 // SOURCING SUITE',
    sub: 'From denim and heavy loopback to bespoke leather goods and silk.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    left: 'Product runs,',
    right: 'who sell.',
    tag: 'DIVISION 03 // SCALED PRODUCTION',
    sub: '100% factory calibration across 50,000+ unit European delivery.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function FlankingShowcaseV5({ id = 'showcase', onSelect }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = items[activeIdx];

  return (
    <section 
      className="v5-page-surface-white v5-flanking-section" 
      id={id}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="v5-container v5-px v5-flanking-container">
        
        {/* Top Centered Statement matching frame 00:04 */}
        <div className="v5-flanking-statement">
          <h2 className="headline-xl text-black">
            You design what the world wears. We build it.
          </h2>
        </div>

        {/* 3-Part Flanking Layout matching frames 00:07-00:11 */}
        <div className="v5-flanking-grid">
          
          {/* Left Text */}
          <div className="v5-flank-text v5-flank-left">
            <span className="v5-flank-word">{current.left}</span>
          </div>

          {/* Center Square Photo */}
          <div className="v5-flank-photo-wrap">
            <div className="v5-flank-photo-card" onClick={onSelect}>
              {items.map((item, i) => (
                <img 
                  key={item.id}
                  src={item.img} 
                  alt={item.left}
                  className={`v5-flank-img ${i === activeIdx ? 'active' : ''}`}
                />
              ))}
              <span className="v5-flank-tag">{current.tag}</span>
            </div>
            
            {/* Step Indicators */}
            <div className="v5-flank-pills">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`v5-flank-dot ${i === activeIdx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="v5-flank-text v5-flank-right">
            <span className="v5-flank-word">{current.right}</span>
          </div>

        </div>

      </div>
    </section>
  );
}

