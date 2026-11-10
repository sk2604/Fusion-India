import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModularFusionLogo from './ModularFusionLogo';
import './DoorAndBloomV6.css';

gsap.registerPlugin(ScrollTrigger);

// 6 Clean Studio Campaign Photos matching reference Image 4 (gracefashion.ai)
// High-res, authentic luxury apparel & tailoring photography
const bloomShots = [
  {
    id: 1,
    division: 'ATELIER OUTERWEAR',
    spec: 'Double-Face Virgin Wool Overcoat',
    baseAngle: (0 / 6) * 2 * Math.PI, // 12 o'clock
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    division: 'CANVAS TAILORING',
    spec: 'Structured Half-Canvas Suit',
    baseAngle: (1 / 6) * 2 * Math.PI, // 2 o'clock
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    division: 'CIRCULAR DENIM',
    spec: 'Shuttle-Loomed 14oz Selvedge',
    baseAngle: (2 / 6) * 2 * Math.PI, // 4 o'clock
    img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    division: 'LUXURY KNITWEAR',
    spec: '450 GSM Organic Cotton Fleece',
    baseAngle: (3 / 6) * 2 * Math.PI, // 6 o'clock
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    division: 'LEATHER & ACCENTS',
    spec: 'Tuscan Calfskin & Bespoke Trims',
    baseAngle: (4 / 6) * 2 * Math.PI, // 8 o'clock
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    division: 'SILK & DRAPING',
    spec: '22mm Mulberry Silk Bias Cut',
    baseAngle: (5 / 6) * 2 * Math.PI, // 10 o'clock
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function DoorAndBloomV6({ id = 'blooming', onSelectShot }) {
  const sectionRef = useRef(null);
  const [bloomProgress, setBloomProgress] = useState(0);
  const [doorOpacity, setDoorOpacity] = useState(1);
  const [doorScale, setDoorScale] = useState(1);
  const [rotationOffset, setRotationOffset] = useState(0);
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
        end: '+=3200',
        pin: true,
        anticipatePin: 1,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;

          // ─── Phase 1: Solid First Frame HOLD (0.00 -> 0.22) ───
          // Modular geometric block logo stays rock-solid in center with 0 movement
          if (p <= 0.22) {
            setDoorScale(1);
            setDoorOpacity(1);
          } 
          // ─── Phase 2: Exponential Zoom In into dark universe (0.22 -> 0.52) ───
          else if (p <= 0.52) {
            const t = (p - 0.22) / 0.30; // 0 to 1
            const easedScale = 1 + Math.pow(t, 2.4) * 24;
            setDoorScale(easedScale);
            setDoorOpacity(Math.max(0, 1 - Math.pow(t, 1.5) * 1.3));
          } 
          else {
            setDoorScale(25);
            setDoorOpacity(0);
          }

          // ─── Phase 3: Radial Blooming & Clockwise Orbit Rotation (0.42 -> 0.90) ───
          if (p < 0.42) {
            setBloomProgress(0);
            setRotationOffset(0);
          } else if (p <= 0.90) {
            const bT = (p - 0.42) / 0.48; // 0 to 1
            const easedBloom = 1 - Math.pow(1 - bT, 2.2);
            setBloomProgress(easedBloom);
            // Slow clockwise rotation matching reference (45 degrees over bloom duration)
            setRotationOffset(bT * (Math.PI / 3.5));
          } else {
            // Hold in full bloom & full orbit at the end
            setBloomProgress(1);
            setRotationOffset(Math.PI / 3.5);
          }

          // Dynamically toggle navbar theme on the section element
          if (el) {
            const isDark = p > 0.32;
            el.setAttribute('data-nav-theme', isDark ? 'dark' : 'light');
          }
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Generous orbit radius to ensure cards never crowd or overlap center text
  const orbitRadiusX = isMobile ? 32 : 36; // in vw
  const orbitRadiusY = isMobile ? 28 : 31; // in vh

  return (
    <section 
      className="v6-door-section v6-dot-grid" 
      id={id} 
      ref={sectionRef}
      data-nav-theme={doorOpacity > 0.4 ? 'light' : 'dark'}
    >
      
      {/* ─── 1. DOOR ZOOM OVERLAY: MODULAR GEOMETRIC "fusion" LOGO (MATCHING IMAGE 10) ─── */}
      <div 
        className="v6-door-zoom-layer"
        style={{
          opacity: doorOpacity,
          pointerEvents: doorOpacity > 0.05 ? 'auto' : 'none',
          display: doorOpacity <= 0 ? 'none' : 'flex'
        }}
      >
        <div className="v6-door-fusion-portal">
          <ModularFusionLogo scale={doorScale} />
        </div>
      </div>

      {/* ─── 2. BLOOMING GARMENT STAGE (MATCHING REFERENCE IMAGE 4) ─── */}
      <div className="v6-bloom-stage" data-nav-theme="dark">
        
        {/* Center Minimal Statement with Master Sample Packshot Capsule */}
        <div className="v6-bloom-center-statement">
          <h2 className="v6-bloom-statement-title">
            <span>From your tech pack</span>{' '}
            <span className="v6-bloom-packshot-capsule">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&auto=format&fit=crop" 
                alt="Master Atelier Sample" 
                className="v6-bloom-packshot-thumb"
                data-pin-nopin="true"
                data-pin-no-hover="true"
              />
            </span>{' '}
            <span>to verified production runs.</span>
          </h2>
          <p className="v6-bloom-statement-sub">
            In weeks, not seasons. Engineered across 500+ audited ethical mills.
          </p>
        </div>

        {/* 6 Clean Portrait Cards Orbiting Clockwise Around Center with Breathing Room */}
        <div className="v6-bloom-orbit-system">
          {bloomShots.map((shot) => {
            // Calculate orbital position with clockwise rotation
            const currentAngle = shot.baseAngle + rotationOffset;
            const distance = 0.2 + 0.8 * bloomProgress;
            const currentX = Math.cos(currentAngle) * orbitRadiusX * distance;
            const currentY = Math.sin(currentAngle) * orbitRadiusY * distance;
            const cardScale = 0.72 + 0.28 * bloomProgress;
            const isHovered = hoveredShot === shot.id;

            return (
              <div 
                key={shot.id} 
                className={`v6-bloom-flying-card ${isHovered ? 'hovered' : ''}`}
                style={{
                  transform: `translate(calc(-50% + ${currentX}vw), calc(-50% + ${currentY}vh)) scale(${isHovered ? cardScale * 1.06 : cardScale})`,
                  opacity: bloomProgress > 0.05 ? 1 : bloomProgress * 20,
                  pointerEvents: bloomProgress > 0.3 ? 'auto' : 'none'
                }}
                onMouseEnter={() => setHoveredShot(shot.id)}
                onMouseLeave={() => setHoveredShot(null)}
                onClick={() => onSelectShot && onSelectShot(shot)}
                role="button"
                tabIndex={0}
              >
                {/* Clean, un-crowded portrait card matching reference Image 4 */}
                <div className="v6-bloom-card-box">
                  <img 
                    src={shot.img} 
                    alt={shot.division} 
                    className="v6-bloom-photo-img"
                    loading="lazy"
                    data-pin-nopin="true"
                    data-pin-no-hover="true"
                  />
                  {/* Subtle clean bottom tag only on hover */}
                  <div className="v6-bloom-card-caption">
                    <span className="v6-caption-title">{shot.division}</span>
                    <span className="v6-caption-spec">{shot.spec}</span>
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
