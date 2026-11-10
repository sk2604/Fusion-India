import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DoorAndBloomV5.css';

gsap.registerPlugin(ScrollTrigger);

const bloomShots = [
  {
    id: 1,
    title: 'Runway Motion',
    targetX: 0,
    targetY: -28, // in vh above center
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Studio Lookbook',
    targetX: 25, // in vw right of center
    targetY: -16, // in vh above center
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Tailored Editorial',
    targetX: 28, // in vw right of center
    targetY: 15, // in vh below center
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Atelier Fitting',
    targetX: 0,
    targetY: 28, // in vh below center
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Hardware & Draping',
    targetX: -28, // in vw left of center
    targetY: 15, // in vh below center
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Precision Cut',
    targetX: -25, // in vw left of center
    targetY: -16, // in vh above center
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop'
  }
];

export default function DoorAndBloomV5({ id = 'blooming', onSelectShot }) {
  const sectionRef = useRef(null);
  const [bloomProgress, setBloomProgress] = useState(0);
  const [doorOpacity, setDoorOpacity] = useState(1);
  const [doorScale, setDoorScale] = useState(1);
  const [hoveredShot, setHoveredShot] = useState(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=2200',
        pin: true,
        anticipatePin: 1,
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;

          // Phase 1: Door Zoom (0.00 -> 0.26)
          const dT = Math.min(p / 0.24, 1);
          setDoorScale(1 + dT * 6);
          setDoorOpacity(Math.max(0, 1 - dT * 1.3));

          // Phase 2: Radial Blooming (0.16 -> 0.85)
          const bT = Math.min(Math.max((p - 0.16) / 0.65, 0), 1);
          // Smooth cubic ease out
          const eased = 1 - Math.pow(1 - bT, 2.5);
          setBloomProgress(eased);
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v5-door-section v5-dot-grid" id={id} ref={sectionRef}>
      
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

        {/* 6 Blooming Photos Radiating From True Center Outward */}
        <div className="v5-bloom-orbit-system">
          {bloomShots.map((shot) => {
            const distanceFactor = 0.2 + 0.8 * bloomProgress;
            const currentX = shot.targetX * distanceFactor;
            const currentY = shot.targetY * distanceFactor;
            const photoScale = 0.65 + 0.35 * bloomProgress;
            const isHovered = hoveredShot === shot.id;

            return (
              <div 
                key={shot.id} 
                className={`v5-bloom-flying-card ${isHovered ? 'hovered' : ''}`}
                style={{
                  transform: `translate(calc(-50% + ${currentX}vw), calc(-50% + ${currentY}vh)) scale(${isHovered ? photoScale * 1.08 : photoScale})`,
                  opacity: bloomProgress > 0.05 ? 1 : bloomProgress * 20,
                  pointerEvents: bloomProgress > 0.2 ? 'auto' : 'none'
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

    </section>
  );
}
