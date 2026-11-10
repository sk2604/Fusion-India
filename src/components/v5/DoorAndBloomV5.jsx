import React, { useRef, useState, useEffect } from 'react';
import './DoorAndBloomV5.css';

const bloomShots = [
  {
    id: 1,
    title: 'Runway Motion',
    targetX: 0,
    targetY: -26, // in vh
    unit: 'vh',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Studio Lookbook',
    targetX: 25, // in vw
    targetY: -14, // in vh
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Tailored Editorial',
    targetX: 29, // in vw
    targetY: 6, // in vh
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Atelier Interior',
    targetX: 0,
    targetY: 26, // in vh
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Hardware & Draping',
    targetX: -25, // in vw
    targetY: 14, // in vh
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Precision Fitting',
    targetX: -29, // in vw
    targetY: -6, // in vh
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop'
  }
];

export default function DoorAndBloomV5({ id = 'blooming', onSelectShot }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hoveredShot, setHoveredShot] = useState(null);

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ─── PHASE 1: DOOR ZOOM TRANSITION (progress 0.0 -> 0.32) ───
  // White aperture zooms open from scale 1 -> 8 and fades
  const doorT = Math.min(progress / 0.30, 1);
  const doorScale = 1 + doorT * 7;
  const doorOpacity = Math.max(0, 1 - doorT * 1.3);

  // ─── PHASE 2: PACKSHOT & BLOOMING SCROLL ANIMATION (progress 0.28 -> 1.0) ───
  const bloomT = Math.min(Math.max((progress - 0.28) / 0.65, 0), 1);
  // Cubic easing for realistic spring blooming feel
  const easedBloom = bloomT < 0.5 ? 4 * bloomT * bloomT * bloomT : 1 - Math.pow(-2 * bloomT + 2, 3) / 2;

  // Center statement opacity
  const centerTextOpacity = Math.min(1, Math.max(0, (progress - 0.22) * 4));
  const centerTextScale = 0.9 + 0.1 * Math.min(1, (progress - 0.22) * 2.5);

  return (
    <section className="v5-door-bloom-wrap" id={id} ref={containerRef}>
      <div className="v5-door-sticky v5-dot-grid">
        
        {/* ─── 1. DOOR ZOOM OVERLAY (FRAMES 00:12-00:13) ─── */}
        <div 
          className="v5-door-zoom-layer"
          style={{
            transform: `scale(${doorScale})`,
            opacity: doorOpacity,
            pointerEvents: doorOpacity > 0.05 ? 'auto' : 'none',
            display: doorOpacity <= 0 ? 'none' : 'flex'
          }}
        >
          <div className="v5-door-words-row">
            <span className="v5-door-side-text">From raw fiber</span>
            <div className="v5-door-cutout-monogram">
              <span className="v5-door-cutout-char">FI</span>
            </div>
            <span className="v5-door-side-text">we engineer it.</span>
          </div>
        </div>

        {/* ─── 2. BLOOMING GARMENT STAGE (FRAMES 00:14-00:19) ─── */}
        <div className="v5-bloom-stage">
          
          {/* Center Statement with Packshot Icon (matching 00:16) */}
          <div 
            className="v5-bloom-center-statement"
            style={{
              opacity: centerTextOpacity,
              transform: `scale(${centerTextScale})`
            }}
          >
            <p className="subheadline text-white text-center">
              <span>From your tech pack</span>{' '}
              <span className="v5-bloom-packshot-capsule">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop" 
                  alt="Approved Tech Pack Sample" 
                  className="v5-bloom-packshot-thumb"
                />
              </span>{' '}
              <span>to an entire verified production run. In weeks.</span>
            </p>
          </div>

          {/* 6 Blooming Photos that Radiate Outward on Scroll */}
          <div className="v5-bloom-orbit-system">
            {bloomShots.map((shot) => {
              // Calculate radial position driven by scroll easedBloom
              const currentX = shot.targetX * easedBloom;
              const currentY = shot.targetY * easedBloom;
              const photoScale = 0.2 + 0.8 * easedBloom;
              const photoOpacity = Math.min(1, easedBloom * 2.2);

              return (
                <div 
                  key={shot.id} 
                  className={`v5-bloom-flying-card ${hoveredShot === shot.id ? 'hovered' : ''}`}
                  style={{
                    transform: `translate(${currentX}vw, ${currentY}vh) scale(${hoveredShot === shot.id ? photoScale * 1.1 : photoScale})`,
                    opacity: photoOpacity,
                    pointerEvents: easedBloom > 0.4 ? 'auto' : 'none'
                  }}
                  onMouseEnter={() => setHoveredShot(shot.id)}
                  onMouseLeave={() => setHoveredShot(null)}
                  onClick={() => onSelectShot && onSelectShot(shot)}
                >
                  <div className="v5-bloom-card-box">
                    <img 
                      src={shot.img} 
                      alt={shot.title} 
                      className="v5-bloom-photo-img"
                    />
                    <span className="v5-bloom-tag-label">{shot.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
