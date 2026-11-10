import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DoorAndBloomV6.css';

gsap.registerPlugin(ScrollTrigger);

const bloomShots = [
  {
    id: 1,
    division: 'ATELIER OUTERWEAR',
    spec: 'Double-Face Virgin Wool Overcoat',
    targetX: 0,
    targetY: -28, // in vh above center
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    division: 'CANVAS TAILORING',
    spec: 'Structured Half-Canvas Suit',
    targetX: 25, // in vw right of center
    targetY: -16, // in vh above center
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    division: 'CIRCULAR DENIM',
    spec: 'Shuttle-Loomed Ozone Wash',
    targetX: 28, // in vw right of center
    targetY: 15, // in vh below center
    img: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    division: 'LUXURY KNITWEAR',
    spec: '450 GSM Organic Cotton Fleece',
    targetX: 0,
    targetY: 28, // in vh below center
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    division: 'LEATHER & ACCENTS',
    spec: 'Tuscan Calfskin & Bespoke Trims',
    targetX: -28, // in vw left of center
    targetY: 15, // in vh below center
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    division: 'SILK & DRAPING',
    spec: '22mm Mulberry Silk Bias Cut',
    targetX: -25, // in vw left of center
    targetY: -16, // in vh above center
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function DoorAndBloomV6({ id = 'blooming', onSelectShot }) {
  const sectionRef = useRef(null);
  const [bloomProgress, setBloomProgress] = useState(0);
  const [doorOpacity, setDoorOpacity] = useState(1);
  const [doorScale, setDoorScale] = useState(1);
  const [hoveredShot, setHoveredShot] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

          // Phase 1: White Door Zoom (0.00 -> 0.25)
          const dT = Math.min(p / 0.24, 1);
          setDoorScale(1 + dT * 6);
          setDoorOpacity(Math.max(0, 1 - dT * 1.3));

          // Phase 2: Radial Blooming (0.16 -> 0.85)
          const bT = Math.min(Math.max((p - 0.16) / 0.65, 0), 1);
          const eased = 1 - Math.pow(1 - bT, 2.5);
          setBloomProgress(eased);
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const xMult = isMobile ? 0.78 : 1.0;
  const yMult = isMobile ? 0.95 : 1.0;

  return (
    <section className="v6-door-section v6-dot-grid" id={id} ref={sectionRef}>
      
      {/* ─── 1. DOOR ZOOM OVERLAY (FRAMES 00:12-00:13) ─── */}
      <div 
        className="v6-door-zoom-layer"
        style={{
          transform: `scale(${doorScale})`,
          opacity: doorOpacity,
          pointerEvents: doorOpacity > 0.05 ? 'auto' : 'none',
          display: doorOpacity <= 0 ? 'none' : 'flex'
        }}
      >
        <div className="v6-door-words-row">
          <span className="v6-door-side-text">From raw fiber</span>
          <div className="v6-door-cutout-monogram">
            <span className="v6-door-cutout-char">FI</span>
          </div>
          <span className="v6-door-side-text">to finished garment.</span>
        </div>
      </div>

      {/* ─── 2. BLOOMING GARMENT STAGE ON DOT-GRID (FRAMES 00:14-00:19) ─── */}
      <div className="v6-bloom-stage">
        
        {/* Center Statement with Tailored Packshot Capsule */}
        <div className="v6-bloom-center-statement">
          <p className="v6-bloom-statement-text">
            <span>From master pattern</span>{' '}
            <span className="v6-bloom-packshot-capsule">
              <img 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop" 
                alt="Golden Seal Master Sample" 
                className="v6-bloom-packshot-thumb"
              />
            </span>{' '}
            <span>to runway-grade bulk production. Delivered across Europe.</span>
          </p>
        </div>

        {/* 6 Blooming Division Photos Radiating From True Center Outward */}
        <div className="v6-bloom-orbit-system">
          {bloomShots.map((shot) => {
            const distanceFactor = 0.2 + 0.8 * bloomProgress;
            const currentX = shot.targetX * xMult * distanceFactor;
            const currentY = shot.targetY * yMult * distanceFactor;
            const photoScale = 0.65 + 0.35 * bloomProgress;
            const isHovered = hoveredShot === shot.id;

            return (
              <div 
                key={shot.id} 
                className={`v6-bloom-flying-card ${isHovered ? 'hovered' : ''}`}
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
                <div className="v6-bloom-card-box">
                  <img 
                    src={shot.img} 
                    alt={shot.division} 
                    className="v6-bloom-photo-img"
                  />
                  <div className="v6-bloom-overlay-info">
                    <span className="v6-bloom-tag-label">{shot.division}</span>
                    <span className="v6-bloom-spec-label">{shot.spec}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
