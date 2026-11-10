import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PillarsV6.css';

gsap.registerPlugin(ScrollTrigger);

export default function PillarsV6({ id = 'pillars', onExploreSpecs }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const colsRef = useRef([]);
  colsRef.current = [];

  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const addToCols = (el) => {
    if (el && !colsRef.current.includes(el)) colsRef.current.push(el);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  // ─── PINNED GSAP SCROLLTRIGGER SNAP & REVEAL ───
  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=1600',
          pin: true,
          anticipatePin: 1,
          scrub: 0.65,
        }
      });

      // Header glides down with unblur
      tl.fromTo(header,
        { opacity: 0, y: -25, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
        0
      );

      // 3 Monumental Pillar Columns stagger in with upward glide and unblur
      tl.fromTo(colsRef.current,
        { opacity: 0, y: 50, filter: 'blur(12px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75, stagger: 0.12, ease: 'power2.out' },
        0.1
      );

      // Solid hold before release
      tl.to({}, { duration: 0.4 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-dot-grid v6-pillars-section" id={id} ref={sectionRef} data-nav-theme="dark">
      <div className="v6-container v6-px v6-pillars-inner">
        
        {/* Top Editorial Section Header */}
        <div className="v6-pillars-header" ref={headerRef}>
          <div className="v6-pillars-eyebrow">
            <span className="v6-eyebrow-red-dot" />
            <span>ATELIER MANUFACTURING STANDARDS</span>
          </div>
          <h2 className="v6-pillars-main-title">
            Engineered to runway perfection<span className="text-red-500">.</span>
          </h2>
        </div>

        {/* 3 Monumental Pillar Columns with Large, Luxurious Proportions */}
        <div className="v6-pillars-grid">
          
          {/* ─── COLUMN 1: PRECISION IN EVERY SEAM ─── */}
          <div className="v6-pillar-col" ref={addToCols}>
            <h3 className="v6-pillar-heading">
              Precision in every seam.
            </h3>
            
            {/* Monumental Macro Detail Zoom Card */}
            <div 
              className="v6-pillar-card-lens"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Tailored Wool Texture & Pick Stitching" 
                className="v6-macro-img"
                data-pin-nopin="true"
                data-pin-no-hover="true"
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isHovered ? 'scale(2.2)' : 'scale(1)'
                }}
              />
              <span className="v6-lens-tag">
                {isHovered ? '2.2X MACRO ZOOM' : 'HOVER TO INSPECT WEAVE'}
              </span>
            </div>

            <p className="v6-pillar-desc">
              Yarn count, stitch density, button tensile, color fastness: tested and inspected to AQL 1.5 standard.
            </p>
          </div>

          {/* ─── COLUMN 2: GOLDEN SAMPLE. ZERO DEVIATION ─── */}
          <div className="v6-pillar-col" ref={addToCols}>
            <h3 className="v6-pillar-heading">
              Golden sample. Zero deviation.
            </h3>

            {/* 2x2 Grid of Atelier Production Stages */}
            <div className="v6-pillar-card v6-grid-2x2">
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop" 
                  alt="CAD Grading" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">PATTERN CAD</span>
              </div>
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop" 
                  alt="Master Tailoring Lab" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">SAMPLE LAB</span>
              </div>
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800&auto=format&fit=crop" 
                  alt="Fabric Wash & Color Lab" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">DYE & WASH</span>
              </div>
              <div className="v6-cell">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" 
                  alt="Approved Golden Seal Overcoat" 
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
                <span className="v6-cell-tag">GOLDEN SEAL</span>
              </div>
            </div>

            <p className="v6-pillar-desc">
              Every production run calibrated to your approved golden seal. Consistent fit and hand-feel across bulk deliveries.
            </p>
          </div>

          {/* ─── COLUMN 3: GLOBAL COMPLIANCE. BUILT IN. ─── */}
          <div className="v6-pillar-col" ref={addToCols}>
            <h3 className="v6-pillar-heading">
              Global compliance. Built in.
            </h3>

            {/* Perfect Circular Compliance Radar */}
            <div className="v6-pillar-card v6-orbit-card">
              <div className="v6-orbit-stage">
                
                <span className="v6-ring v6-ring-outer" />
                <span className="v6-ring v6-ring-mid" />
                <span className="v6-ring v6-ring-inner" />

                <div className="v6-orbit-center">
                  <span className="v6-center-glyph">fi</span>
                </div>

                <div className="v6-orbit-spin v6-orbit-track">
                  <div className="v6-node v6-n1">
                    <span className="v6-orbit-counter v6-node-pill">GOTS</span>
                  </div>
                  <div className="v6-node v6-n2">
                    <span className="v6-orbit-counter v6-node-pill">SEDEX</span>
                  </div>
                  <div className="v6-node v6-n3">
                    <span className="v6-orbit-counter v6-node-pill">BSCI</span>
                  </div>
                  <div className="v6-node v6-n4">
                    <span className="v6-orbit-counter v6-node-pill">OEKO-TEX</span>
                  </div>
                  <div className="v6-node v6-n5">
                    <span className="v6-orbit-counter v6-node-pill">ISO 9001</span>
                  </div>
                  <div className="v6-node v6-n6">
                    <span className="v6-orbit-counter v6-node-pill">AQL 1.5</span>
                  </div>
                </div>

              </div>
            </div>

            <p className="v6-pillar-desc">
              Audited ethical facilities adhering to European standards. 100% verified traceability from raw yarn to final shipment.
            </p>
          </div>

        </div>

        {/* Bottom Link */}
        <div className="v6-pillars-bottom-link">
          <button 
            type="button" 
            className="v6-link-white-arrow"
            onClick={onExploreSpecs}
          >
            Explore factory audit certifications <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
