import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, Check } from 'lucide-react';
import './GracePillars.css';

// 7 Real Production Specialties of Fusion India
const consistentScenes = [
  {
    id: 1,
    title: 'STRUCTURED OVERCOAT // VIRGIN WOOL & CASHMERE',
    tag: 'OUTERWEAR DIVISION 01',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    caption: '480 GSM double-face wool with hand-finished interior seams and horn buttons.'
  },
  {
    id: 2,
    title: 'FLUID SILK CHARMEUSE // WOMEN’S ATELIER',
    tag: 'WOMEN’S ATELIER 02',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    caption: '22mm pure mulberry silk cut on the bias. Flowing drape with French seam finishing.'
  },
  {
    id: 3,
    title: 'HANDCRAFTED TUSCAN TOTE // LEATHER GOODS',
    tag: 'LEATHER GOODS DIVISION 03',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
    caption: '1.4mm vegetable-tanned Tuscan calfskin with bevelled, edge-painted handles.'
  },
  {
    id: 4,
    title: 'ITALIAN WOOL SUITING // MEN’S TAILORING',
    tag: 'SARTORIAL DIVISION 04',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    caption: 'Super 130s half-canvas construction with soft European shoulder padding.'
  },
  {
    id: 5,
    title: 'RAW SELVEDGE DENIM // CIRCULAR APPAREL',
    tag: 'DENIM DIVISION 05',
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop',
    caption: '13.5 oz shuttle-loomed organic denim with red-line selvedge edge.'
  },
  {
    id: 6,
    title: 'GOTS ORGANIC LOOPBACK // HEAVYWEIGHT FLEECE',
    tag: 'ORGANIC BASICS 06',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
    caption: '440 GSM combed organic loopback cotton, pre-shrunk with zero twist torque.'
  },
  {
    id: 7,
    title: 'MASTER CAD PATTERN & TECH-PACK SPEC',
    tag: 'GURUGRAM LAB 07',
    img: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1200&auto=format&fit=crop',
    caption: 'Precision pattern grading and marker yield engineered at our 40,000 sq.ft facility.'
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
      
      {/* ─── PILLAR 1: EVERY DETAIL FITS (PRECISION TEXTILE QUALITY) ─── */}
      <section className="pillar-block pillar-detail">
        <div className="container pillar-container">
          <div className="pillar-grid">
            
            {/* Left Text */}
            <div className="pillar-text-col">
              <span className="pillar-mono-tag">01 // INDUSTRIAL CRAFTSMANSHIP</span>
              <h2 className="pillar-headline">
                Every stitch inspected.<br />
                <em>Seams, buttons, fabrics.</em>
              </h2>
              <p className="pillar-body">
                From precision French seams and horn buttons to double-face wool pressing. 
                Every production garment undergoes rigorous inline AQL 1.5 quality inspection 
                at our 40,000 sq.ft Gurugram facility before dispatch.
              </p>
              
              <div className="pillar-spec-list">
                <div className="p-spec-item">
                  <Check size={16} className="text-white" />
                  <span>100% Inline AQL 1.5 master inspection standard</span>
                </div>
                <div className="p-spec-item">
                  <Check size={16} className="text-white" />
                  <span>Zero pulling or puckering across graded size runs</span>
                </div>
                <div className="p-spec-item">
                  <Check size={16} className="text-white" />
                  <span>Certified Oeko-Tex & GOTS organic chain-of-custody</span>
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
                    <span>{zoomActive ? 'INSPECTING WEAVE (2.4X)' : 'HOVER TO INSPECT FABRIC WEAVE'}</span>
                  </div>
                  <span className="macro-tech-tag">13.5 OZ // SELVEDGE TWILL GRAIN</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PILLAR 2: CONSISTENT QUALITY ACROSS DIVISIONS ─── */}
      <section className="pillar-block pillar-scenes">
        <div className="container pillar-container">
          
          <div className="scenes-header">
            <span className="pillar-mono-tag">02 // MULTI-CATEGORY EXCELLENCE</span>
            <h2 className="pillar-headline">
              Consistent luxury quality. <em>Across every division.</em>
            </h2>
            <p className="pillar-body">
              Fusion is your unified, multi-product sourcing house. From tailored wool coats and silk dresses 
              to full-grain leather bags and denim, produced with unwavering standards.
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

      {/* ─── PILLAR 3: SEAMLESS GLOBAL SUPPLY NETWORK ─── */}
      <section className="pillar-block pillar-orbit">
        <div className="container pillar-container">
          <div className="pillar-grid">
            
            {/* Left: The Grace Orbit Graphic */}
            <div className="orbit-visual-col">
              <div className="orbit-system-wrapper">
                
                {/* Central Hub */}
                <div className="orbit-center-node">
                  <span className="node-logo-text">FUSION</span>
                  <span className="node-sub">GURUGRAM HQ</span>
                </div>

                {/* Rotating Rings with Satellites */}
                <div className="orbit-ring ring-1 covered-orbit-spin">
                  <div className="satellite sat-1 covered-orbit-counter">
                    <span>SCANDINAVIA HUB</span>
                  </div>
                  <div className="satellite sat-2 covered-orbit-counter">
                    <span>GERMANY LOGISTICS</span>
                  </div>
                </div>

                <div className="orbit-ring ring-2 covered-orbit-counter">
                  <div className="satellite sat-3 covered-orbit-spin">
                    <span>500+ AUDITED MILLS</span>
                  </div>
                  <div className="satellite sat-4 covered-orbit-spin">
                    <span>NORTH AMERICA DC</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Text */}
            <div className="pillar-text-col">
              <span className="pillar-mono-tag">03 // GLOBAL LOGISTICS MATRIX</span>
              <h2 className="pillar-headline">
                Fits into <em>your supply chain</em>.
              </h2>
              <p className="pillar-body">
                Tech-packs in, audited production containers out. Direct operational presence 
                linking major European and North American retail distribution centers directly 
                to our manufacturing core in Haryana, India.
              </p>
              
              <div className="pipeline-chips">
                <span>Direct Air & Sea Freight</span>
                <span>Customs Clearance & DDP</span>
                <span>Real-Time Production Tracking</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
