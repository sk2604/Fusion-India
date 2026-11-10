import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModularFusionLogo from './ModularFusionLogo';
import './DoorAndBloomV6.css';

gsap.registerPlugin(ScrollTrigger);

// 6 Authentic Product Divisions matching Fusion India's Collections (fcindia.com)
// Studio-lit editorial product photography for each division
const fusionCollections = [
  {
    id: 1,
    tag: 'DIV 01',
    category: 'LADIES WEAR',
    sub: 'Tops, Blouses, Hi-Fashion & Dresses',
    spec: 'Silk, Linen & Bias Cuts',
    baseAngle: (0 / 6) * 2 * Math.PI, // 12 o'clock
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    tag: 'DIV 02',
    category: "MEN'S WEAR",
    sub: 'Shirts, Hoodies & Tailoring',
    spec: 'Fine Egyptian Cotton & French Terry',
    baseAngle: (1 / 6) * 2 * Math.PI, // 2 o'clock
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    tag: 'DIV 03',
    category: 'ACCESSORIES & LEATHER',
    sub: 'Handbags, Belts & Footwear',
    spec: 'Full-Grain & Bespoke Trims',
    baseAngle: (2 / 6) * 2 * Math.PI, // 4 o'clock
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    tag: 'DIV 04',
    category: 'SOFT GOODS',
    sub: 'Home Textiles & Living Linens',
    spec: 'Jacquard Weaves & Organic Percale',
    baseAngle: (3 / 6) * 2 * Math.PI, // 6 o'clock
    img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    tag: 'DIV 05',
    category: 'HARD GOODS',
    sub: 'Ceramics, Marble & Stoneware',
    spec: 'Hand-Carved Marble & Tableware',
    baseAngle: (4 / 6) * 2 * Math.PI, // 8 o'clock
    img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    tag: 'DIV 06',
    category: 'ATHLEISURE & YOGA',
    sub: 'Activewear & Seamless Knits',
    spec: '4-Way Stretch Technical Poly',
    baseAngle: (5 / 6) * 2 * Math.PI, // 10 o'clock
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop'
  }
];

export default function DoorAndBloomV6({ id = 'blooming', onSelectShot }) {
  const sectionRef = useRef(null);
  const [bloomProgress, setBloomProgress] = useState(0);
  const [doorOpacity, setDoorOpacity] = useState(1);
  const [doorScale, setDoorScale] = useState(1);
  const [autoAngle, setAutoAngle] = useState(0);
  const [hoveredShot, setHoveredShot] = useState(null);
  const [exitOpacity, setExitOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const isHoveredRef = useRef(false);
  const autoAngleRef = useRef(0);
  const bloomProgressRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ─── CONTINUOUS SMOOTH AUTO-ROTATION ───
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const updateOrbit = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHoveredRef.current && bloomProgressRef.current > 0.05) {
        // Continuous smooth clockwise auto-rotation (~38 seconds per full turn)
        autoAngleRef.current = (autoAngleRef.current + delta * 0.165) % (Math.PI * 2);
        setAutoAngle(autoAngleRef.current);
      }
      animId = requestAnimationFrame(updateOrbit);
    };

    animId = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(animId);
  }, []);

  // ─── MASTER PINNED GSAP SCROLLTRIGGER ───
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: '+=3000',
        pin: true,
        anticipatePin: 1,
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress;

          // ─── Phase 1: Solid First Frame HOLD (0.00 -> 0.22) ───
          if (p <= 0.22) {
            setDoorScale(1);
            setDoorOpacity(1);
          } 
          // ─── Phase 2: Exponential Zoom In (0.22 -> 0.50) ───
          else if (p <= 0.50) {
            const t = (p - 0.22) / 0.28;
            const easedScale = 1 + Math.pow(t, 2.4) * 24;
            setDoorScale(easedScale);
            setDoorOpacity(Math.max(0, 1 - Math.pow(t, 1.5) * 1.3));
          } 
          else {
            setDoorScale(25);
            setDoorOpacity(0);
          }

          // ─── Phase 3: Radial Blooming (0.42 -> 0.88) ───
          if (p < 0.42) {
            setBloomProgress(0);
            bloomProgressRef.current = 0;
            setExitOpacity(1);
          } else if (p <= 0.88) {
            const bT = (p - 0.42) / 0.46;
            const easedBloom = 1 - Math.pow(1 - bT, 2.2);
            setBloomProgress(easedBloom);
            bloomProgressRef.current = easedBloom;
            setExitOpacity(1);
          } else {
            // Full bloom
            setBloomProgress(1);
            bloomProgressRef.current = 1;
            // Clean exit fadeout so cards don't bleed into next section
            const exitT = (p - 0.88) / 0.12;
            setExitOpacity(Math.max(0, 1 - exitT * 1.5));
          }

          // Dynamically toggle navbar theme
          if (el) {
            const isDark = p > 0.30;
            el.setAttribute('data-nav-theme', isDark ? 'dark' : 'light');
          }
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Generous orbit radius so cards never crowd or overlap center text
  const orbitRadiusX = isMobile ? 33 : 38; // in vw
  const orbitRadiusY = isMobile ? 28 : 32; // in vh

  return (
    <section 
      className="v6-door-section v6-dot-grid" 
      id={id} 
      ref={sectionRef}
      data-nav-theme={doorOpacity > 0.4 ? 'light' : 'dark'}
    >
      
      {/* ─── 1. DOOR ZOOM OVERLAY: MODULAR GEOMETRIC "fusion." LOGO ─── */}
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

      {/* ─── 2. BLOOMING COLLECTIONS STAGE ─── */}
      <div 
        className="v6-bloom-stage" 
        data-nav-theme="dark"
        style={{ opacity: exitOpacity }}
      >
        
        {/* Minimal High-Fashion Center Statement: 2 Clean Lines */}
        <div className="v6-bloom-center-statement">
          <h2 className="v6-bloom-statement-title">
            The Collections.{' '}
            <span className="v6-bloom-packshot-capsule">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&auto=format&fit=crop" 
                alt="Master Atelier Sample" 
                className="v6-bloom-packshot-thumb"
                data-pin-nopin="true"
                data-pin-no-hover="true"
              />
            </span>
          </h2>

          <p className="v6-bloom-statement-sub">
            Six dedicated manufacturing divisions. Crafted in India for global retail.
          </p>
        </div>

        {/* 6 Clean Portrait Cards Auto-Rotating Clockwise Continuously Around Center */}
        <div className="v6-bloom-orbit-system">
          {fusionCollections.map((shot) => {
            const currentAngle = shot.baseAngle + autoAngle;
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
                  transform: `translate(calc(-50% + ${currentX}vw), calc(-50% + ${currentY}vh)) scale(${isHovered ? cardScale * 1.08 : cardScale})`,
                  opacity: bloomProgress > 0.05 ? 1 : bloomProgress * 20,
                  pointerEvents: bloomProgress > 0.3 ? 'auto' : 'none'
                }}
                onMouseEnter={() => {
                  isHoveredRef.current = true;
                  setHoveredShot(shot.id);
                }}
                onMouseLeave={() => {
                  isHoveredRef.current = false;
                  setHoveredShot(null);
                }}
                onClick={() => onSelectShot && onSelectShot(shot)}
                role="button"
                tabIndex={0}
              >
                {/* Clean, sleek luxury presentation card */}
                <div className="v6-bloom-card-box">
                  <div className="v6-card-top-tag">
                    <span className="v6-tag-pill">{shot.tag}</span>
                  </div>

                  <img 
                    src={shot.img} 
                    alt={shot.category} 
                    className="v6-bloom-photo-img"
                    loading="lazy"
                    data-pin-nopin="true"
                    data-pin-no-hover="true"
                  />

                  {/* Clean bottom information badge visible on hover */}
                  <div className="v6-bloom-card-caption">
                    <span className="v6-caption-title">{shot.category}</span>
                    <span className="v6-caption-sub">{shot.sub}</span>
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
