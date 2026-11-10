import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Sliders, Layers, Eye, RefreshCw, 
  Check, FileText, ArrowRight, ShieldCheck, Cpu 
} from 'lucide-react';
import './StudioPlaygroundV4.css';

const garmentPresets = [
  {
    id: 'denim',
    name: 'RAW JAPANESE SELVEDGE',
    category: 'DENIM & OUTERWEAR',
    flatImg: 'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1200&auto=format&fit=crop',
    modelImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    gsm: '420 GSM (13.5 oz)',
    yarn: 'Ring-Spun Zimbabwe Long-Staple',
    millNode: 'Unit 02 (Gurugram Selvedge Division)',
    auditScore: '99.2% SEDEX SMETA',
    moq: '300 units',
    leadTime: '18 Days to Cargo'
  },
  {
    id: 'silk',
    name: 'LIQUID CHARMEUSE SLIP GOWN',
    category: 'WOMEN’S ATELIER',
    flatImg: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    modelImg: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    gsm: '22mm Pure Mulberry Silk',
    yarn: 'Grade 6A Raw Filament',
    millNode: 'Unit 01 (Atelier Couture Lab)',
    auditScore: '100% GOTS & OEKO-TEX',
    moq: '150 units',
    leadTime: '12 Days to Cargo'
  },
  {
    id: 'coat',
    name: 'DOUBLE-FACE VIRGIN WOOL COAT',
    category: 'TAILORING',
    flatImg: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
    modelImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    gsm: '480 GSM Double-Faced',
    yarn: 'Super 130s Merino & Cashmere Blend',
    millNode: 'Unit 03 (Men’s Sartorial Plant)',
    auditScore: '98.8% BSCI Audited',
    moq: '200 units',
    leadTime: '21 Days to Cargo'
  },
  {
    id: 'leather',
    name: 'TUSCAN CALFSKIN OVERSIZED TOTE',
    category: 'LEATHER GOODS',
    flatImg: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
    modelImg: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop',
    gsm: '1.4mm Full-Grain Vegetable Tanned',
    yarn: 'Hand-Waxed Linen Stitching',
    millNode: 'Unit 04 (Leather Craft Guild)',
    auditScore: 'LWG Gold Rated Tannery',
    moq: '100 units',
    leadTime: '14 Days to Cargo'
  }
];

const modelAesthetics = [
  { id: 'nordic', label: 'Nordic Editorial' },
  { id: 'milan', label: 'Milan High-Fashion' },
  { id: 'paris', label: 'Parisian Minimal' },
  { id: 'tokyo', label: 'Tokyo Avant-Garde' }
];

const sceneLighting = [
  { id: 'studio', label: 'Diffusion Softbox 5600K' },
  { id: 'golden', label: 'Golden Hour Sunlight' },
  { id: 'noir', label: 'High-Contrast Cyber Noir' }
];

export default function StudioPlaygroundV4({ id = 'studio', onOpenModal }) {
  const [selectedGarment, setSelectedGarment] = useState(garmentPresets[0]);
  const [selectedModel, setSelectedModel] = useState('nordic');
  const [selectedScene, setSelectedScene] = useState('studio');
  const [sliderPos, setSliderPos] = useState(50);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Handle Dragging Slider
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Garment change animation simulation
  const switchGarment = (g) => {
    if (g.id === selectedGarment.id) return;
    setIsGenerating(true);
    setTimeout(() => {
      setSelectedGarment(g);
      setIsGenerating(false);
    }, 450);
  };

  // Trigger export toast
  const handleExportSpec = () => {
    setToastMsg(`Tech-Pack Generated for ${selectedGarment.name} (Ready for Unit 02)`);
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <section className="studio-v4" id={id}>
      <div className="container studio-v4-container">
        
        {/* Section Header */}
        <div className="studio-v4-head">
          <div className="head-left">
            <span className="studio-kicker">FUSION VIRTUAL ATELIER // CORE ENGINE</span>
            <h2 className="studio-title">
              Interactive <em>AI Studio</em> & Spec Engine.
            </h2>
          </div>
          <div className="head-right">
            <p className="studio-desc">
              Experience the transition from 3D CAD pattern geometry to photorealistic runway fitment. 
              Drag the center slider to inspect seam precision.
            </p>
          </div>
        </div>

        {/* Studio Workspace Layout */}
        <div className="studio-workspace">

          {/* Left Controls Column */}
          <div className="studio-controls-panel">
            
            {/* Step 1: Select Garment */}
            <div className="control-group">
              <div className="group-label">
                <span className="num-step">01</span>
                <span>SELECT SILHOUETTE</span>
              </div>
              <div className="garment-pills-stack">
                {garmentPresets.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className={`garment-btn ${selectedGarment.id === g.id ? 'active' : ''}`}
                    onClick={() => switchGarment(g)}
                  >
                    <div className="g-btn-info">
                      <span className="g-cat">{g.category}</span>
                      <strong className="g-name">{g.name}</strong>
                    </div>
                    {selectedGarment.id === g.id && (
                      <span className="g-active-dot" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Model & Aesthetic Persona */}
            <div className="control-group">
              <div className="group-label">
                <span className="num-step">02</span>
                <span>MODEL CASTING PERSONA</span>
              </div>
              <div className="persona-tags-grid">
                {modelAesthetics.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className={`persona-tag ${selectedModel === m.id ? 'active' : ''}`}
                    onClick={() => setSelectedModel(m.id)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Lighting Scenario */}
            <div className="control-group">
              <div className="group-label">
                <span className="num-step">03</span>
                <span>ATELIER LIGHTING CALIBRATION</span>
              </div>
              <div className="lighting-tags-grid">
                {sceneLighting.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`scene-tag ${selectedScene === s.id ? 'active' : ''}`}
                    onClick={() => setSelectedScene(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Center Interactive Split Viewport (Grace Fashion AI Core Feature) */}
          <div 
            className="studio-viewport-card"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Viewport Top Chrome */}
            <div className="viewport-chrome">
              <div className="chrome-badge">
                <Cpu size={13} className="text-purple" />
                <span>REAL-TIME TENSOR DRAPING</span>
              </div>
              <div className="chrome-hint">
                <span>DRAG SLIDER HORIZONTALLY</span>
              </div>
            </div>

            {/* Image Comparison Layer */}
            <div className="split-wrapper">
              
              {/* Layer B: Right Image (Photorealistic Runway Output) */}
              <div className="split-layer layer-model">
                <img 
                  src={selectedGarment.modelImg} 
                  alt="AI Photorealistic Model" 
                  className="split-img"
                  draggable={false}
                />
                <div className="tag-overlay tag-right">
                  <span className="badge-side">OUTPUT</span>
                  <strong>PHOTOREALISTIC RUNWAY</strong>
                </div>
              </div>

              {/* Layer A: Left Image (CAD Pattern & Technical Spec) */}
              <div 
                className="split-layer layer-cad"
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src={selectedGarment.flatImg} 
                  alt="CAD Flat Spec" 
                  className="split-img"
                  draggable={false}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop';
                  }}
                />
                <div className="tag-overlay tag-left">
                  <span className="badge-side">INPUT</span>
                  <strong>3D CAD & GRAIN PATTERN</strong>
                </div>
              </div>

              {/* Draggable Divider Line & Thumb */}
              <div 
                className="split-handle"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="handle-line" />
                <div className="handle-knob">
                  <div className="knob-arrows">⟨ ⟩</div>
                </div>
              </div>

              {/* Generating Loader Overlay */}
              <AnimatePresence>
                {isGenerating && (
                  <motion.div 
                    className="generating-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="loader-box">
                      <RefreshCw size={24} className="spin-icon" />
                      <span>SYNTHESIZING FABRIC DRAPE...</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* Right Sourcing Inspector Panel */}
          <div className="studio-inspector-panel">
            <div className="inspector-head">
              <span className="ins-kicker">MANUFACTURING TELEMETRY</span>
              <h3>Factory Specification</h3>
            </div>

            <div className="telemetry-items-list">
              <div className="telemetry-row">
                <span className="t-key">FABRIC METRIC</span>
                <span className="t-val">{selectedGarment.gsm}</span>
              </div>
              <div className="telemetry-row">
                <span className="t-key">YARN SPEC</span>
                <span className="t-val">{selectedGarment.yarn}</span>
              </div>
              <div className="telemetry-row">
                <span className="t-key">PRODUCTION MILL</span>
                <span className="t-val t-highlight">{selectedGarment.millNode}</span>
              </div>
              <div className="telemetry-row">
                <span className="t-key">ETHICAL COMPLIANCE</span>
                <span className="t-val text-emerald">
                  <ShieldCheck size={14} /> {selectedGarment.auditScore}
                </span>
              </div>
              <div className="telemetry-row">
                <span className="t-key">PRODUCTION MOQ</span>
                <span className="t-val">{selectedGarment.moq}</span>
              </div>
              <div className="telemetry-row">
                <span className="t-key">LEAD TIME</span>
                <span className="t-val text-cyan">{selectedGarment.leadTime}</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="inspector-actions">
              <button 
                type="button" 
                className="btn-export-spec"
                onClick={handleExportSpec}
              >
                <FileText size={16} />
                <span>GENERATE TECH PACK</span>
              </button>

              <button 
                type="button" 
                className="btn-order-sample"
                onClick={onOpenModal}
              >
                <span>REQUEST ATELIER SAMPLE</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="gurugram-seal">
              <span className="seal-dot" />
              <span>GURUGRAM CAMPUS 40,000 SQ.FT DIRECT FACILITY</span>
            </div>

          </div>

        </div>

        {/* Feedback Toast */}
        <AnimatePresence>
          {toastMsg && (
            <motion.div 
              className="studio-toast"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
            >
              <Check size={16} className="text-emerald" />
              <span>{toastMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
