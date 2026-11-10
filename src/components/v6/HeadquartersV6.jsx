import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeadquartersV6.css';

gsap.registerPlugin(ScrollTrigger);

const buildingImg = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop';

const campusZones = [
  {
    id: 1,
    title: 'Main Floor & Atrium',
    tag: 'ZONE 01',
    desc: '40,000 sq.ft open-plan coordination hub connecting merchandisers, buyers, and factory supervisors.',
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Pattern & CAD Studio',
    tag: 'ZONE 02',
    desc: 'High-precision Gerber & Lectra CAD marker grading, digital 3D virtual fittings, and pattern drafting.',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Master Sample Room',
    tag: 'ZONE 03',
    desc: 'Dedicated prototype atelier crafting golden-seal master samples within 10–14 days of tech pack sign-off.',
    src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'QA & Fabric Testing Lab',
    tag: 'ZONE 04',
    desc: 'In-house physical and chemical testing: tensile strength, yarn count, color fastness, shrinkage, and AQL 1.5 inspection.',
    src: 'https://images.unsplash.com/photo-1517502884422-a509f0e63e51?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Executive & Client Lounge',
    tag: 'ZONE 05',
    desc: 'Bespoke European buyer presentation suite featuring current seasonal runs, fabric swatches, and live video feeds.',
    src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Design Collaboration Lab',
    tag: 'ZONE 06',
    desc: 'Creative workspace for co-developing capsule collections alongside visiting European creative directors.',
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function HeadquartersV6({ id = 'headquarters' }) {
  const [entered, setEntered] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=750',
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
        }
      });

      tl.fromTo(stage,
        { opacity: 0.2, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' },
        0
      );

      tl.to({}, { duration: 0.4 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-page-surface-dark v6-hq-section" id={id} ref={sectionRef} data-nav-theme="dark">
      <div className="v6-hq-container" ref={stageRef}>
        
        {/* Section Header */}
        <div className="v6-hq-header">
          <div className="v6-hq-eyebrow">
            <span className="v6-eyebrow-red-dot" />
            <span>UDYOG VIHAR, SECTOR 20, GURUGRAM // 40,000 SQ.FT</span>
          </div>
          <div className="v6-hq-title-row">
            <h2 className="v6-hq-title">
              HEAD OFFICE & SAMPLING CAMPUS<span className="text-red-500">.</span>
            </h2>
            <div className="v6-hq-actions">
              {entered ? (
                <button 
                  type="button" 
                  className="v6-hq-toggle-btn"
                  onClick={() => setEntered(false)}
                >
                  ← VIEW CAMPUS EXTERIOR
                </button>
              ) : (
                <button 
                  type="button" 
                  className="v6-hq-toggle-btn active"
                  onClick={() => setEntered(true)}
                >
                  EXPLORE INTERIOR ZONES (6) →
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stage Content: Exterior vs Interior Grid */}
        <div className="v6-hq-stage-wrap">
          
          {!entered ? (
            /* Exterior Grand View */
            <div 
              className="v6-hq-exterior-card"
              onClick={() => setEntered(true)}
              role="button"
              tabIndex={0}
            >
              <img 
                src={buildingImg} 
                alt="Fusion India Corporate Campus Gurugram" 
                className="v6-hq-exterior-img"
              />
              <div className="v6-hq-exterior-scrim" />
              
              <div className="v6-hq-exterior-cta-box">
                <div className="v6-hq-play-ring">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 3l14 9-14 9V3z" fill="#ffffff"/>
                  </svg>
                </div>
                <div className="v6-hq-cta-text">
                  <span className="v6-hq-cta-main">CLICK TO EXPLORE CAMPUS INSIDE</span>
                  <span className="v6-hq-cta-sub">Pattern CAD Labs • 14-Day Sample Rooms • In-House QA Facility</span>
                </div>
              </div>

              {/* Bottom Specs Strip */}
              <div className="v6-hq-bottom-chips">
                <div className="v6-hq-chip">
                  <span className="v6-chip-dot" />
                  <span>40,000 SQ.FT CAMPUS</span>
                </div>
                <div className="v6-hq-chip">
                  <span className="v6-chip-dot" />
                  <span>500+ AUDITED ATELIERS</span>
                </div>
                <div className="v6-hq-chip">
                  <span className="v6-chip-dot" />
                  <span>AQL 1.5 CERTIFIED TESTING</span>
                </div>
              </div>
            </div>
          ) : (
            /* Interior 6-Zone Gallery Grid */
            <div className="v6-hq-interior-grid">
              {campusZones.map((zone, idx) => (
                <div 
                  key={zone.id} 
                  className="v6-hq-zone-card"
                  onClick={() => setLightboxIdx(idx)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="v6-zone-img-wrap">
                    <img src={zone.src} alt={zone.title} className="v6-zone-img" />
                    <div className="v6-zone-tag">{zone.tag}</div>
                    <div className="v6-zone-zoom-hint">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                  <div className="v6-zone-info">
                    <h3 className="v6-zone-title">{zone.title}</h3>
                    <p className="v6-zone-desc">{zone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Fullscreen Interactive Lightbox */}
      {lightboxIdx !== null && (
        <div className="v6-hq-lightbox" onClick={() => setLightboxIdx(null)}>
          <button 
            type="button" 
            className="v6-lightbox-close" 
            onClick={() => setLightboxIdx(null)}
            aria-label="Close"
          >
            ✕
          </button>
          
          <button 
            type="button" 
            className="v6-lightbox-prev" 
            onClick={(e) => { 
              e.stopPropagation(); 
              setLightboxIdx((lightboxIdx - 1 + campusZones.length) % campusZones.length); 
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="v6-lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <img 
              src={campusZones[lightboxIdx].src} 
              alt={campusZones[lightboxIdx].title} 
              className="v6-lightbox-img" 
            />
            <div className="v6-lightbox-caption">
              <span className="v6-caption-tag">{campusZones[lightboxIdx].tag}</span>
              <h3 className="v6-caption-title">{campusZones[lightboxIdx].title}</h3>
              <p className="v6-caption-desc">{campusZones[lightboxIdx].desc}</p>
            </div>
          </div>

          <button 
            type="button" 
            className="v6-lightbox-next" 
            onClick={(e) => { 
              e.stopPropagation(); 
              setLightboxIdx((lightboxIdx + 1) % campusZones.length); 
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
