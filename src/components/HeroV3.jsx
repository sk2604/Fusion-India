import React from 'react';
import './HeroV3.css';

export default function HeroV3() {
  return (
    <section className="hero-v3">
      <div className="container hero-v3-inner">
        
        {/* ── Editorial Header Kicker ── */}
        <div className="hero-v3-kicker">
          <span className="kicker-badge">EST. 1998 — GLOBAL APPAREL POWERHOUSE</span>
          <span className="kicker-cities">GURUGRAM · HAMBURG · STOCKHOLM · NEW YORK</span>
        </div>

        {/* ── High-Fashion Editorial Headline ── */}
        <div className="hero-v3-headline-block">
          <h1 className="hero-v3-serif-title">
            The Art of Global <br />
            <span className="hero-italic">Fashion Sourcing</span> & Production.
          </h1>
          <p className="hero-v3-curated-lead">
            Fusion India translates international runway directions into ethically manufactured, scalable collections for the world’s most iconic fashion retailers.
          </p>
        </div>

        {/* ── Fluid Fashion Visual Composition (Borderless & Layered) ── */}
        <div className="hero-v3-canvas">
          
          {/* Visual 1: Large Runway / Tailoring Model */}
          <div className="canvas-item canvas-main">
            <div className="canvas-img-box">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
                alt="Haute Couture Outerwear Collection"
                className="canvas-photo"
              />
            </div>
            <div className="canvas-caption">
              <span className="cap-index">FIG. 01</span>
              <strong className="cap-label">TAILORED COLLECTION</strong>
              <span className="cap-sub">MILANO WOOL & RECYCLED CASHMERE</span>
            </div>
          </div>

          {/* Visual 2: Fabric Tactility & Drape */}
          <div className="canvas-item canvas-secondary">
            <div className="canvas-img-box">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
                alt="Artisanal Fabric Craft"
                className="canvas-photo"
              />
            </div>
            <div className="canvas-caption">
              <span className="cap-index">FIG. 02</span>
              <strong className="cap-label">FIBER INNOVATION</strong>
              <span className="cap-sub">GOTS ORGANIC & CIRCULAR DYES</span>
            </div>
          </div>

          {/* Visual 3: Editorial Portrait / Silhouette */}
          <div className="canvas-item canvas-portrait hide-sm">
            <div className="canvas-img-box">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop"
                alt="Minimalist Fashion Silhouette"
                className="canvas-photo"
              />
            </div>
            <div className="canvas-caption">
              <span className="cap-index">FIG. 03</span>
              <strong className="cap-label">SEASONAL RUNWAY</strong>
              <span className="cap-sub">SS/26 DIRECTIONAL PROTOTYPES</span>
            </div>
          </div>

        </div>

        {/* ── Editorial Philosophy Trio (Borderless & Spacious) ── */}
        <div className="hero-v3-credo">
          <div className="credo-col">
            <span className="credo-num">01 / DISCIPLINE</span>
            <h3 className="credo-title">The Right Product</h3>
            <p className="credo-text">Precision pattern drafting, European seasonal forecasting, and tactile sample prototyping.</p>
          </div>
          <div className="credo-col">
            <span className="credo-num">02 / SCALE</span>
            <h3 className="credo-title">The Right Price</h3>
            <p className="credo-text">Deep industrial volume across 500+ compliant mills without ever sacrificing fabric integrity.</p>
          </div>
          <div className="credo-col">
            <span className="credo-num">03 / TRUST</span>
            <h3 className="credo-title">The Right Performance</h3>
            <p className="credo-text">Zero-defect inline audits, certified chemical testing, and dependable seasonal logistics.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
