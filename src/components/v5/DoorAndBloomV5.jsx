import React, { useRef, useState, useEffect } from 'react';
import './DoorAndBloomV5.css';

const bloomShots = [
  {
    id: 1,
    title: 'Runway Motion',
    targetX: 0,
    targetY: -27, // in vh
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Studio Lookbook',
    targetX: 25, // in vw
    targetY: -15, // in vh
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Tailored Editorial',
    targetX: 28, // in vw
    targetY: 15, // in vh
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Atelier Interior',
    targetX: 0,
    targetY: 27, // in vh
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Hardware & Draping',
    targetX: -28, // in vw
    targetY: 15, // in vh
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Precision Fitting',
    targetX: -25, // in vw
    targetY: -15, // in vh
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

  // Phase 1: White Door Zoom (progress 0.0 -> 0.24)
  const doorT = Math.min(progress / 0.22, 1);
  const doorScale = 1 + doorT * 6;
  const doorOpacity = Math.max(0, 1 - doorT * 1.25);

  // Phase 2: Blooming Radial Photos (progress 0.18 -> 0.85)
  const bloomT = Math.min(Math.max((progress - 0.18) / 0.65, 0), 1);
  // Smooth cubic ease-out
  const easedBloom = 1 - Math.pow(1 - bloomT, 2.5);

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

        {/* ─── 2. BLOOMING GARMENT STAGE ON DOT-GRID (FRAMES 00:14-00:19) ─── */}
        <div className="v5-bloom-stage">
          
          {/* Center Statement with Packshot Capsule (matching frame 00:16) */}
          <div className="v5-bloom-center-statement">
            <p className="v5-bloom-statement-text">
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

          {/* 6 Blooming Photos that Radiate Outward Smoothly */}
          <div className="v5-bloom-orbit-system">
            {bloomShots.map((shot) => {
              // Smooth outward bloom from 30% distance to 100% distance
              const distanceFactor = 0.3 + 0.7 * easedBloom;
              const currentX = shot.targetX * distanceFactor;
              const currentY = shot.targetY * distanceFactor;
              const photoScale = 0.6 + 0.4 * easedBloom;
              const isHovered = hoveredShot === shot.id;

              return (
                <div 
                  key={shot.id} 
                  className={`v5-bloom-flying-card ${isHovered ? 'hovered' : ''}`}
                  style={{
                    transform: `translate(${currentX}vw, ${currentY}vh) scale(${isHovered ? photoScale * 1.08 : photoScale})`,
                    opacity: 1,
                    pointerEvents: easedBloom > 0.15 ? 'auto' : 'none'
                  }}
                  onMouseEnter={() => setHoveredShot(shot.id)}
                  onMouseLeave={() => setHoveredShot(null)}
                  onClick={() => onSelectShot && onSelectShot(shot)}
                  role="button"
                  tabIndex={0}
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
