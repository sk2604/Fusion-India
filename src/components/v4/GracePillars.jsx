import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ZoomIn, Check, Layers, Cpu, Radio, Sparkles } from 'lucide-react';
import './GracePillars.css';

// The 7 Consistent Scenes for a single garment (Grace-exact feature)
const consistentScenes = [
  {
    id: 1,
    title: 'STUDIO WALK // 3/4 VIEW',
    tag: 'EDITORIAL POSE 01',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Structured silhouette in continuous forward motion. Natural gabardine drape.'
  },
  {
    id: 2,
    title: 'SEATED // ARCHITECTURAL ROOM',
    tag: 'SCENE 02',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Seated tension test. Zero pulling across lapels or shoulder seams.'
  },
  {
    id: 3,
    title: 'CROUCH // ACCENT TOTE',
    tag: 'STREET EDITORIAL 03',
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    caption: 'Paired with handcrafted Tuscan calfskin tote bag. Color harmonic.'
  },
  {
    id: 4,
    title: 'FRONT CLOSE // ARMS CROSSED',
    tag: 'STUDIO FRONT 04',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    caption: 'Double-breasted horn button alignment and clean chest canvassing.'
  },
  {
    id: 5,
    title: 'REAR DRAPE // BACK VIEW',
    tag: 'FIT INSPECTION 05',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Center back vent opening and blade ease validated on avatar.'
  },
  {
    id: 6,
    title: 'MACRO WEAVE // SEAM DETAIL',
    tag: 'CLOSE-UP 06',
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop',
    caption: '13.5 oz selvedge twill grain and saddle topstitching.'
  },
  {
    id: 7,
    title: 'ORIGINAL CAD FLAT PACKSHOT',
    tag: 'BLUEPRINT SOURCE',
    img: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1200&auto=format&fit=crop',
    caption: 'The original 2D tech pack from which all 6 campaign scenes were engineered.'
  }
];

export default function GracePillars({ id = 'pillars' }) {
  const [activeScene, setActiveScene] = useState(consistentScenes[0]);
  const [zoomActive, setZoomActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="grace-pillars-wrap" id={id}>
      
      {/* ─── PILLAR 1: JEDES DETAIL SITZT (EVERY DETAIL FITS) ─── */}
      <section className="pillar-block pillar-detail">
        <div className="container pillar-container">
          <div className="pillar-grid">
            
            {/* Left Text */}
            <div className="pillar-text-col">
              <span className="pillar-mono-tag">01 // PRECISION CRAFT</span>
              <h2 className="pillar-headline">
                Every detail fits.<br />
                <em>Seams, buttons, prints.</em>
              </h2>
              <p className="pillar-body">
                Seams, horn buttons, lining tension, and mill prints: exactly the piece you produce and deliver. 
                Hover your mouse over the swatch to inspect the microscopic textile grain.
              </p>
              
              <div className="pillar-spec-list">
                <div className="p-spec-item">
                  <Check size={16} className="text-white" />
                  <span>Zero pulling or distortion across grading sizes</span>
                </div>
                <div className="p-spec-item">
                  <Check size={16} className="text-white" />
                  <span>AQL 1.5 inline master inspection standard</span>
                </div>
                <div className="p-spec-item">
                  <Check size={16} className="text-white" />
                  <span>Direct physical match from 40,000 sq.ft Gurugram lab</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Zoom Box */}
            <div className="pillar-visual-col">
              <div 
                className={`macro-zoom-card ${zoomActive ? 'active' : ''}`}
                onMouseEnter={() => setZoomActive(true)}
                onMouseLeave={() => setZoomActive(false)}
                onMouseMove={handleMouseMove}
              >
                <img 
                  src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1400&auto=format&fit=crop" 
                  alt="Garment Fabric Detail"
                  className="macro-base-img"
                  style={zoomActive ? {
                    transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                    transform: 'scale(2.4)'
                  } : {}}
                />

                <div className="macro-hud-overlay">
                  <div className="macro-badge">
                    <ZoomIn size={13} />
                    <span>{zoomActive ? 'MACRO SCANNING (2.4X)' : 'HOVER TO ZOOM DETAIL'}</span>
                  </div>
                  <span className="macro-tech-tag">480 GSM // TWILL WEAVE VALIDATED</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PILLAR 2: DASSELBE MODEL. JEDE SZENE. (THE SAME PIECE. EVERY SCENE.) ─── */}
      <section className="pillar-block pillar-scenes">
        <div className="container pillar-container">
          
          <div className="scenes-header">
            <span className="pillar-mono-tag">02 // COHERENT EDITORIAL CAMPAIGN</span>
            <h2 className="pillar-headline">
              The same piece. <em>Every scene.</em>
            </h2>
            <p className="pillar-body">
              Engineered exclusively for your brand. One master tech pack produces complete 
              lookbooks, studio frontals, movement walks, and flat packshots without casting calls.
            </p>
          </div>

          {/* Interactive Scene Viewer */}
          <div className="scenes-interactive-grid">
            
            {/* Main Stage Image */}
            <div className="scene-stage-wrap">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeScene.id}
                  className="stage-img-box"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={activeScene.img} alt={activeScene.title} className="stage-img" />
                  
                  <div className="stage-card-caption">
                    <span className="scene-badge">{activeScene.tag}</span>
                    <h3>{activeScene.title}</h3>
                    <p>{activeScene.caption}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 7 Thumbnails Carousel Track */}
            <div className="scenes-thumbs-track">
              {consistentScenes.map((scene) => (
                <button
                  key={scene.id}
                  type="button"
                  className={`scene-thumb-btn ${activeScene.id === scene.id ? 'active' : ''}`}
                  onClick={() => setActiveScene(scene)}
                >
                  <div className="thumb-img-wrap">
                    <img src={scene.img} alt={scene.title} />
                  </div>
                  <div className="thumb-info">
                    <span className="t-tag">{scene.tag}</span>
                    <strong className="t-name">{scene.title}</strong>
                  </div>
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ─── PILLAR 3: PASST IN DEINE SYSTEME (FITS INTO YOUR SYSTEMS) ─── */}
      <section className="pillar-block pillar-orbit">
        <div className="container pillar-container">
          <div className="pillar-grid">
            
            {/* Left: The Grace Orbit Graphic */}
            <div className="orbit-visual-col">
              <div className="orbit-system-wrapper">
                
                {/* Central Hub */}
                <div className="orbit-center-node">
                  <span className="node-logo-text">FUSION</span>
                  <span className="node-sub">ATELIER CORE</span>
                </div>

                {/* Rotating Rings with Satellites */}
                <div className="orbit-ring ring-1 covered-orbit-spin">
                  <div className="satellite sat-1 covered-orbit-counter">
                    <span>3D CLO / CAD</span>
                  </div>
                  <div className="satellite sat-2 covered-orbit-counter">
                    <span>ERP / SAP</span>
                  </div>
                </div>

                <div className="orbit-ring ring-2 covered-orbit-counter">
                  <div className="satellite sat-3 covered-orbit-spin">
                    <span>500+ MILLS</span>
                  </div>
                  <div className="satellite sat-4 covered-orbit-spin">
                    <span>GLOBAL DC</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Text */}
            <div className="pillar-text-col">
              <span className="pillar-mono-tag">03 // SEAMLESS INTEGRATION</span>
              <h2 className="pillar-headline">
                Fits into <em>your systems</em>.
              </h2>
              <p className="pillar-body">
                Tech packs in, certified production containers out. Connects directly to your PLM, 
                digital asset manager, and regional distribution networks across Europe and North America.
              </p>
              
              <div className="pipeline-chips">
                <span>PLM / CAD Integration</span>
                <span>EDI Direct Mill Link</span>
                <span>Automated Customs Clearance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
