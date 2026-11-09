import React from 'react';
import './HeroAsmara.css';

export default function HeroAsmara() {
  return (
    <section className="hero-asmara">
      <div className="container hero-asmara-inner">
        
        {/* ── Top Editorial Running Line ── */}
        <div className="hero-asmara-topbar">
          <div className="topbar-left">
            <span className="pulsing-record-dot" />
            <span className="topbar-kicker">GLOBAL APPAREL SOURCING & DESIGN CONGLOMERATE</span>
          </div>
          <div className="topbar-right">
            <span>GURUGRAM HQ · NEW YORK · HAMBURG · STOCKHOLM</span>
          </div>
        </div>

        {/* ── Monumental Haute-Couture Title ── */}
        <div className="hero-asmara-header">
          <span className="hero-asmara-pretitle">Bespoke Design · Ethical Scale · Industrial Precision</span>
          <h1 className="hero-asmara-display">
            The Sourcing <em>Atelier</em> <br />
            for Global Fashion.
          </h1>
          <p className="hero-asmara-lead">
            Partnering with Europe and North America’s preeminent fashion retailers to design, develop, and manufacture market-defining apparel collections.
          </p>
        </div>

        {/* ── Fluid Editorial Fashion Triptych (Borderless) ── */}
        <div className="hero-asmara-triptych">
          
          {/* Card 1: Tailored Silhouette */}
          <div className="triptych-item triptych-main">
            <div className="triptych-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
                alt="Haute Couture Outerwear"
                className="triptych-photo"
              />
            </div>
            <div className="triptych-meta">
              <span className="triptych-fig">SERIES 01</span>
              <strong className="triptych-title">STRUCTURED OUTERWEAR</strong>
              <span className="triptych-desc">Italian virgin wool & recycled cashmere blends</span>
            </div>
          </div>

          {/* Card 2: Fabric Tactility & Weave */}
          <div className="triptych-item triptych-sub">
            <div className="triptych-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
                alt="Tactile Textile Weave"
                className="triptych-photo"
              />
            </div>
            <div className="triptych-meta">
              <span className="triptych-fig">SERIES 02</span>
              <strong className="triptych-title">SUSTAINABLE RAW FIBERS</strong>
              <span className="triptych-desc">GOTS organic cotton & certified closed-loop dyes</span>
            </div>
          </div>

          {/* Card 3: 3D Virtual Prototyping */}
          <div className="triptych-item triptych-portrait hide-sm">
            <div className="triptych-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
                alt="Digital 3D Design Simulation"
                className="triptych-photo"
              />
            </div>
            <div className="triptych-meta">
              <span className="triptych-fig">SERIES 03</span>
              <strong className="triptych-title">DIGITAL ATELIER</strong>
              <span className="triptych-desc">48-hour 3D virtual sample turnarounds</span>
            </div>
          </div>

        </div>

        {/* ── Editorial Footnote Trio ── */}
        <div className="hero-asmara-credo">
          <div className="credo-block">
            <span className="credo-index">01 / CONCEPT</span>
            <h4 className="credo-heading">The Right Product</h4>
            <p className="credo-body">Curated seasonal collections, European catwalk forecasting, and tactile sample curation.</p>
          </div>
          <div className="credo-block">
            <span className="credo-index">02 / SCALE</span>
            <h4 className="credo-heading">The Right Price</h4>
            <p className="credo-body">Industrial volume across 500+ audited mills without sacrificing ethical compliance.</p>
          </div>
          <div className="credo-block">
            <span className="credo-index">03 / PERFORMANCE</span>
            <h4 className="credo-heading">The Right Performance</h4>
            <p className="credo-body">Zero-defect inline audits, accredited lab testing, and flawless door-to-door logistics.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

