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
    // Reliable high-res circular denim photo
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop'
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
  const [doorTextOpacity, setDoorTextOpacity] = useState(1);
  const [doorTextBlur, setDoorTextBlur] = useState(0);
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
        end: '+=2800',
        pin: true,
        anticipatePin: 1,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;

          // ─── Phase 1: Solid First Frame HOLD (0.00 -> 0.20) ───
          if (p <= 0.20) {
            setDoorScale(1);
            setDoorOpacity(1);
            setDoorTextBlur(0);
            setDoorTextOpacity(1);
          } 
          // ─── Phase 2: Door Zoom & Plunge into Dot-Grid (0.20 -> 0.52) ───
          else if (p <= 0.52) {
            const t = (p - 0.20) / 0.32; // 0 to 1
            const easedScale = 1 + Math.pow(t, 2.2) * 16;
            setDoorScale(easedScale);
            setDoorOpacity(Math.max(0, 1 - Math.pow(t, 1.4) * 1.25));
            setDoorTextBlur(t * 14);
            setDoorTextOpacity(Math.max(0, 1 - t * 2.2));
          } 
          else {
            setDoorScale(17);
            setDoorOpacity(0);
            setDoorTextOpacity(0);
          }

          // ─── Phase 3: Radial Blooming of 6 Division Packshots (0.44 -> 0.88) ───
          if (p < 0.44) {
            setBloomProgress(0);
          } else if (p <= 0.88) {
            const bT = (p - 0.44) / 0.44; // 0 to 1
            const easedBloom = 1 - Math.pow(1 - bT, 2.2);
            setBloomProgress(easedBloom);
          } else {
            // Hold in full bloom from 0.88 to 1.00
            setBloomProgress(1);
          }
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const xMult = isMobile ? 0.78 : 1.0;
  const yMult = isMobile ? 0.95 : 1.0;

  return (
    <section className="v6-door-section v6-dot-grid" id={id} ref={sectionRef}>
      
      {/* ─── 1. DOOR ZOOM OVERLAY (MATCHING "Around the ai We'll take care of it") ─── */}
      <div 
        className="v6-door-zoom-layer"
        style={{
          opacity: doorOpacity,
          pointerEvents: doorOpacity > 0.05 ? 'auto' : 'none',
          display: doorOpacity <= 0 ? 'none' : 'flex'
        }}
      >
        <div className="v6-door-words-row">
          {/* Left Flank Text */}
          <span 
            className="v6-door-side-text text-right"
            style={{
              opacity: doorTextOpacity,
              filter: `blur(${doorTextBlur}px)`,
              transform: `translateX(-${doorTextBlur * 2}px)`
            }}
          >
            Around the
          </span>

          {/* Center Monumental Cutout Brand Portal (Scales up into dot-grid universe) */}
          <div 
            className="v6-door-fusion-cutout"
            style={{
              transform: `scale(${doorScale})`
            }}
          >
            <div className="v6-fusion-cutout-body">
              <span className="v6-fusion-cutout-logo">fusion</span>
              <span className="v6-fusion-cutout-dot" />
            </div>
          </div>

          {/* Right Flank Text */}
          <span 
            className="v6-door-side-text text-left"
            style={{
              opacity: doorTextOpacity,
              filter: `blur(${doorTextBlur}px)`,
              transform: `translateX(${doorTextBlur * 2}px)`
            }}
          >
            We'll take care of it.
          </span>
        </div>
      </div>

      {/* ─── 2. BLOOMING GARMENT STAGE ON DOT-GRID ─── */}
      <div className="v6-bloom-stage">
        
        {/* Authentic Brand Statement with Master Sample Packshot Capsule */}
        <div className="v6-bloom-center-statement">
          <p className="v6-bloom-statement-text">
            <span>From your tech pack</span>{' '}
            <span className="v6-bloom-packshot-capsule">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&auto=format&fit=crop" 
                alt="Master Atelier Sample" 
                className="v6-bloom-packshot-thumb"
              />
            </span>{' '}
            <span>to verified bulk production. In weeks, not seasons.</span>
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
                    loading="lazy"
                  />
                  <div className="v6-bloom-overlay-info">
                    <span className="v6-bloom-tag">{shot.division}</span>
                    <span className="v6-bloom-spec">{shot.spec}</span>
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
