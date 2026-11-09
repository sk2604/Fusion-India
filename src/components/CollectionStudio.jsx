import React, { useState } from 'react';
import './CollectionStudio.css';

const collections = [
  {
    id: 'outerwear',
    num: '01',
    category: 'STRUCTURED OUTERWEAR',
    title: 'The Milano Double-Face Overcoat',
    headline: 'Architectural drape engineered for European winter retail.',
    desc: 'Crafted from virgin wool blended with circular cashmere. Seamless double-face construction with hand-finished interior seams, horn buttons, and tailored lapel stability.',
    modelImg: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop',
    swatchImg: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    specs: {
      fiber: '85% Virgin Wool · 15% Recycled Cashmere',
      weight: '480 GSM Double-Face Weave',
      origin: 'Kashmir Spinning Mills & Panipat Weaving',
      proto: '48-Hour CLO 3D Simulation',
      cert: 'RWS (Responsible Wool) · OEKO-TEX 100'
    }
  },
  {
    id: 'knits',
    num: '02',
    category: 'GOTS ORGANIC KNITWEAR',
    title: 'The Heavyweight Loopback Sweatshirt',
    headline: 'Zero-shrinkage organic fleece developed for high-street leaders.',
    desc: 'Combed long-staple organic cotton knitted on circular high-gauge frames. Pre-shrunk with natural enzyme wash, 1x1 heavy rib cuffs, and flatlock reinforced stress points.',
    modelImg: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop',
    swatchImg: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
    specs: {
      fiber: '100% GOTS Certified Organic Cotton',
      weight: '420 GSM French Terry Loopback',
      origin: 'Coimbatore Organic Farms & Tirupur Dyeing',
      proto: 'Digital Fit Avatar Testing',
      cert: 'GOTS · BCI Cotton · Fair Trade Audited'
    }
  },
  {
    id: 'denim',
    num: '03',
    category: 'CIRCULAR DENIM & TWILL',
    title: 'The Selvedge Relaxed Trousers',
    headline: 'Zero-liquid discharge denim with laser ozone wash aesthetics.',
    desc: 'Raw shuttle-loom selvedge denim woven with recycled cotton fill. Washed exclusively using water-saving ozone technology, reducing fresh water consumption by 92% per garment.',
    modelImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop',
    swatchImg: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    specs: {
      fiber: '78% Organic Cotton · 20% Post-Consumer Cotton · 2% Elastane',
      weight: '13.5 oz Shuttle Loom Selvedge',
      origin: 'Ahmedabad Sustainable Denim Mills',
      proto: 'Virtual Laser Wash Mapping',
      cert: 'Cradle to Cradle Certified · ZDHC Level 3'
    }
  },
  {
    id: 'linen',
    num: '04',
    category: 'CONTEMPORARY RESORT & LINEN',
    title: 'The Normandy Flax Tailored Shirt',
    headline: 'Breathable luxury engineered for Scandinavian summer collections.',
    desc: 'Pure European certified flax spun and tailored in India. Natural slub texture, mother-of-pearl buttons, and double-needle armhole stitching designed for timeless drape.',
    modelImg: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop',
    swatchImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    specs: {
      fiber: '100% Certified European Flax',
      weight: '165 GSM Yarn-Dyed Plain Weave',
      origin: 'Normandy Grown · Spun in Ludhiana',
      proto: '3D Drape & Flow Analysis',
      cert: 'Masters of Linen · OEKO-TEX Standard 100'
    }
  }
];

export default function CollectionStudio() {
  const [activeTab, setActiveTab] = useState(0);
  const cur = collections[activeTab];

  return (
    <section className="studio-section">
      <div className="container">
        
        {/* Header */}
        <div className="studio-header">
          <div className="studio-header-left">
            <span className="studio-kicker">IN-HOUSE PRODUCT STUDIOS</span>
            <h2 className="studio-title">
              Curated Collections & Material Mastery<span className="title-dot">.</span>
            </h2>
          </div>
          <p className="studio-lead">
            We don’t just broker factories — our in-house ateliers design and develop ready-to-adopt seasonal collections using traceable fibers and 3D digital simulation.
          </p>
        </div>

        {/* Minimalist Studio Category Selector */}
        <div className="studio-nav">
          {collections.map((col, idx) => (
            <button
              key={col.id}
              className={`studio-nav-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span className="nav-num">{col.num}</span>
              <span className="nav-name">{col.category}</span>
            </button>
          ))}
        </div>

        {/* Interactive Studio Stage */}
        <div className="studio-stage" key={cur.id}>
          
          {/* Left: High-Fashion Model Portrait */}
          <div className="stage-model-side">
            <div className="stage-model-frame">
              <img src={cur.modelImg} alt={cur.title} className="stage-model-img" />
              <div className="stage-floating-tag">
                <span className="tag-season">FW '26 CURATED SPEC</span>
                <strong className="tag-title">{cur.title}</strong>
              </div>
            </div>
          </div>

          {/* Right: Technical Spec & Material Swatch */}
          <div className="stage-spec-side">
            
            <div className="spec-heading-block">
              <span className="spec-cat-pill">{cur.category}</span>
              <h3 className="spec-garment-title">{cur.title}</h3>
              <p className="spec-headline">"{cur.headline}"</p>
              <p className="spec-body">{cur.desc}</p>
            </div>

            {/* Tactile Swatch & Lab Analysis */}
            <div className="spec-swatch-card">
              <div className="swatch-img-box">
                <img src={cur.swatchImg} alt="Textile Swatch Texture" />
                <span className="swatch-zoom-tag">MACRO WEAVE</span>
              </div>
              <div className="swatch-meta">
                <div className="spec-row">
                  <span className="spec-key">FIBER BLEND</span>
                  <strong className="spec-val">{cur.specs.fiber}</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-key">FABRIC WEIGHT</span>
                  <strong className="spec-val">{cur.specs.weight}</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-key">MILL REGION</span>
                  <strong className="spec-val">{cur.specs.origin}</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-key">3D PROTOTYPE</span>
                  <strong className="spec-val">{cur.specs.proto}</strong>
                </div>
                <div className="spec-row">
                  <span className="spec-key">AUDIT BADGES</span>
                  <strong className="spec-val cert-badge">{cur.specs.cert}</strong>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

