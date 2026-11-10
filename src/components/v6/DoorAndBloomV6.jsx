import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModularFusionLogo from './ModularFusionLogo';
import './DoorAndBloomV6.css';

gsap.registerPlugin(ScrollTrigger);

// 6 Authentic Product Divisions directly matching Fusion India's Collections (fcindia.com)
// Ladies Wear, Men's Wear, Accessories & Leather, Soft Goods, Hard Goods, Athleisure
const fusionCollections = [
  {
    id: 1,
    tag: 'DIVISION 01',
    category: 'LADIES WEAR',
    sub: 'Tops, Blouses, Hi-Fashion & Dresses',
    spec: 'Silk, Linen, Embroidered Rayon & Bias Cuts',
    baseAngle: (0 / 6) * 2 * Math.PI, // 12 o'clock
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    tag: 'DIVISION 02',
    category: "MEN'S WEAR",
    sub: 'Shirts, Hoodies & Tailored Bottoms',
    spec: 'Fine Egyptian Cotton & French Terry Fleece',
    baseAngle: (1 / 6) * 2 * Math.PI, // 2 o'clock
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    tag: 'DIVISION 03',
    category: 'ACCESSORIES & LEATHER',
    sub: 'Handbags, Belts, Scarves & Footwear',
    spec: 'Tuscan Full-Grain & Handcrafted Trims',
    baseAngle: (2 / 6) * 2 * Math.PI, // 4 o'clock
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    tag: 'DIVISION 04',
    category: 'SOFT GOODS',
    sub: 'Home Textiles, Throws & Living Linens',
    spec: 'Jacquard Weaves, Organic Washed Percale',
    baseAngle: (3 / 6) * 2 * Math.PI, // 6 o'clock
    img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    tag: 'DIVISION 05',
    category: 'HARD GOODS',
    sub: 'Ceramics, Marble, Wood & Stoneware',
    spec: 'Hand-Carved Marble & Studio Stoneware',
    baseAngle: (4 / 6) * 2 * Math.PI, // 8 o'clock
    img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    tag: 'DIVISION 06',
    category: 'ATHLEISURE & YOGA',
    sub: 'Performance Activewear & Seamless Knits',
    spec: '4-Way Stretch, Recycled Technical Poly',
    baseAngle: (5 / 6) * 2 * Math.PI, // 10 o'clock
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  }
];

export default function DoorAndBloomV6({ id = 'blooming', onSelectShot }) {
  const sectionRef = useRef(null);
  const [bloomProgress, setBloomProgress] = useState(0);
  const [doorOpacity, setDoorOpacity] = useState(1);
  const [doorScale, setDoorScale] = useState(1);
  const [autoAngle, setAutoAngle] = useState(0);
  const [hoveredShot, setHoveredShot] = useState(null);
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

  // ─── CONTINUOUS AUTO-ROTATION LOOP ───
  // Cards smoothly orbit on their own continuously, pausing gently on hover
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const updateOrbit = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHoveredRef.current && bloomProgressRef.current > 0.05) {
        // Continuous smooth clockwise auto-rotation: 1 full 360 deg turn in ~36 seconds
        autoAngleRef.current = (autoAngleRef.current + delta * 0.175) % (Math.PI * 2);
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
        end: '+=3200',
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
          // ─── Phase 2: Exponential Zoom In into dark universe (0.22 -> 0.52) ───
          else if (p <= 0.52) {
            const t = (p - 0.22) / 0.30;
            const easedScale = 1 + Math.pow(t, 2.4) * 24;
            setDoorScale(easedScale);
            setDoorOpacity(Math.max(0, 1 - Math.pow(t, 1.5) * 1.3));
          } 
          else {
            setDoorScale(25);
            setDoorOpacity(0);
          }

          // ─── Phase 3: Radial Blooming (0.42 -> 0.90) ───
          if (p < 0.42) {
            setBloomProgress(0);
            bloomProgressRef.current = 0;
          } else if (p <= 0.90) {
            const bT = (p - 0.42) / 0.48;
            const easedBloom = 1 - Math.pow(1 - bT, 2.2);
            setBloomProgress(easedBloom);
            bloomProgressRef.current = easedBloom;
          } else {
            setBloomProgress(1);
            bloomProgressRef.current = 1;
          }

          // Dynamically toggle navbar theme on section element
          if (el) {
            const isDark = p > 0.32;
            el.setAttribute('data-nav-theme', isDark ? 'dark' : 'light');
          }
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Generous orbit radius so cards never crowd or overlap center text
  const orbitRadiusX = isMobile ? 32 : 36; // in vw
  const orbitRadiusY = isMobile ? 28 : 31; // in vh

  return (
    <section 
      className="v6-door-section v6-dot-grid" 
      id={id} 
      ref={sectionRef}
      data-nav-theme={doorOpacity > 0.4 ? 'light' : 'dark'}
    >
      
      {/* ─── 1. DOOR ZOOM OVERLAY: MODULAR GEOMETRIC "fusion." LOGO (IMAGE 10) ─── */}
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

      {/* ─── 2. BLOOMING GARMENT & LIFESTYLE STAGE (FUSION INDIA COLLECTIONS) ─── */}
      <div className="v6-bloom-stage" data-nav-theme="dark">
        
        {/* Authentic Fusion India Center Statement */}
        <div className="v6-bloom-center-statement">
          <div className="v6-bloom-category-pills">
            <span className="v6-bloom-pill-tag">GLOBAL SOURCING ECOSYSTEM</span>
          </div>

          <h2 className="v6-bloom-statement-title">
            From Runway Ready Garments{' '}
            <span className="v6-bloom-packshot-capsule">
              <img 
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300&auto=format&fit=crop" 
                alt="Master Atelier Sample" 
                className="v6-bloom-packshot-thumb"
                data-pin-nopin="true"
                data-pin-no-hover="true"
              />
            </span>{' '}
            to Handcrafted Lifestyle Collections.
          </h2>

          <p className="v6-bloom-statement-sub">
            Ladies Wear • Men's Wear • Leather & Accessories • Home Textiles • Hard Goods • Athleisure
          </p>

          <div className="v6-bloom-credo-chips">
            <span className="v6-chip-item">500+ Audited Facilities</span>
            <span className="v6-chip-dot">•</span>
            <span className="v6-chip-item">Direct FOB / Full DDP</span>
            <span className="v6-chip-dot">•</span>
            <span className="v6-chip-item">Zero Quality Tolerance</span>
          </div>
        </div>

        {/* 6 Clean Portrait Cards Auto-Rotating Clockwise Continuously Around Center */}
        <div className="v6-bloom-orbit-system">
          {fusionCollections.map((shot) => {
            // Auto-rotation angle + base angle
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
                  transform: `translate(calc(-50% + ${currentX}vw), calc(-50% + ${currentY}vh)) scale(${isHovered ? cardScale * 1.06 : cardScale})`,
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
                {/* Clean, luxury presentation card */}
                <div className="v6-bloom-card-box">
                  {/* Subtle top division badge */}
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

                  {/* Clean bottom information badge */}
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
