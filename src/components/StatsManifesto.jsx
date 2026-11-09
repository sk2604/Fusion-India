import React, { useEffect, useRef, useState } from 'react';
import './StatsManifesto.css';

// Smooth eased animated counter
function useCounter(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { value: 15, suffix: '+', label: 'Years of Expertise', sub: 'EST. 1998' },
  { value: 500, suffix: '+', label: 'Factory Partners', sub: 'PAN-SUBCONTINENT' },
  { value: 20, suffix: '+', label: 'Global Markets', sub: 'EUROPE & AMERICAS' },
  { value: 10, suffix: 'M+', label: 'Annual Garments', sub: 'ZERO DEFECT QA' },
];

const pillars = [
  {
    id: 'csr',
    num: '01',
    label: 'Ethical Trading',
    headline: 'Integrity woven into every process.',
    text: 'Compliance, ethical employment, and sustainability are non-negotiable foundations at Fusion India. Every partner facility adheres strictly to audited international labour norms, living wages, health & safety certifications, and audited fair practices.',
    tag: 'Audited Global Norms',
  },
  {
    id: 'mission',
    num: '02',
    label: 'Strategic Mission',
    headline: 'Global precision, local expertise.',
    text: 'To deliver premier end-to-end design, sourcing, and manufacturing capabilities at competitive scales for iconic apparel retailers across Scandinavia, Germany, the UK, and North America.',
    tag: 'End-to-End Value Chain',
  },
  {
    id: 'vision',
    num: '03',
    label: 'Future Vision',
    headline: 'The definitive one-stop sourcing partner.',
    text: 'Founded by agile thinkers who dared to build a modern supply chain network, Fusion India continues to pioneer multi-category design, sustainable fiber innovation, and next-generation logistics.',
    tag: 'Next-Gen Sourcing',
  },
];

const marqueeItems = [
  'THE RIGHT PRODUCT',
  'THE RIGHT PRICE',
  'THE RIGHT PERFORMANCE',
  'ETHICAL COMPLIANCE',
  'SUSTAINABLE SOURCING',
  'END-TO-END QA',
  'SCANDINAVIA · GERMANY · USA · INDIA',
];

function StatCell({ value, suffix, label, sub, started }) {
  const count = useCounter(value, 1500, started);
  return (
    <div className="stat-cell">
      <div className="stat-cell-top">
        <span className="stat-sub">{sub}</span>
      </div>
      <div className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsManifesto() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const curPillar = pillars[activeTab];

  return (
    <section className="manifesto-section" ref={sectionRef}>
      {/* ── 1. Top Meta Bar ── */}
      <div className="manifesto-meta-bar">
        <div className="container meta-bar-inner">
          <div className="meta-item">
            <span className="meta-badge-dot" />
            <span className="meta-text">SECTION 02 — CORPORATE PROFILE</span>
          </div>
          <div className="meta-item hide-mobile">
            <span className="meta-text">SUPPLY CHAIN EXCELLENCE</span>
          </div>
          <div className="meta-item">
            <span className="meta-text">GURUGRAM · HAMBURG · STOCKHOLM · NEW YORK</span>
          </div>
        </div>
      </div>

      {/* ── 2. Core Body: Fits cleanly in 100vh ── */}
      <div className="manifesto-main-wrap">
        <div className="container manifesto-main-grid">
          
          {/* Left Column: Calm Monumental Branding */}
          <div className="manifesto-left-col">
            <div className="brand-identity-badge">
              <span className="badge-bullet" />
              <span>EST. 1998</span>
              <span className="badge-sep">/</span>
              <span>GLOBAL APPAREL SOURCING</span>
            </div>

            <div className="brand-title-lockup">
              <div className="brand-prefix">WE ARE</div>
              <h2 className="brand-headline">
                FUSION INDIA<span className="brand-period">.</span>
              </h2>
            </div>

            <div className="brand-formula-strip">
              <span className="formula-item">RIGHT PRODUCT</span>
              <span className="formula-dot">·</span>
              <span className="formula-item">RIGHT PRICE</span>
              <span className="formula-dot">·</span>
              <span className="formula-item">RIGHT PERFORMANCE</span>
            </div>

            <p className="brand-intro-text">
              A trusted strategic supply chain partner for the world’s leading fashion retailers. Uniting European design sensibilities with the vast manufacturing excellence of the Indian subcontinent.
            </p>
          </div>

          {/* Right Column: Architectural Console */}
          <div className="manifesto-right-col">
            <div className="pillar-console">
              {/* Tab Selector */}
              <div className="pillar-tabs-header">
                {pillars.map((p, idx) => (
                  <button
                    key={p.id}
                    className={`pillar-nav-btn ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <span className="pillar-btn-num">{p.num}</span>
                    <span className="pillar-btn-name">{p.label}</span>
                    {activeTab === idx && <span className="pillar-btn-active-line" />}
                  </button>
                ))}
              </div>

              {/* Tab Display Panel */}
              <div className="pillar-panel" key={curPillar.id}>
                <div className="pillar-panel-tag-row">
                  <span className="pillar-pill">{curPillar.tag}</span>
                  <span className="pillar-counter">0{activeTab + 1} / 03</span>
                </div>
                <h3 className="pillar-panel-heading">{curPillar.headline}</h3>
                <p className="pillar-panel-body">{curPillar.text}</p>
                <div className="pillar-panel-footer">
                  <span className="pillar-quote-text">
                    "We are proud of the product and relentless about the standards behind it."
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── 3. Bottom Architectural Metrics Strip ── */}
      <div className="manifesto-stats-strip">
        <div className="container stats-strip-grid">
          {stats.map((s, idx) => (
            <StatCell key={idx} {...s} started={started} />
          ))}
        </div>
      </div>

      {/* ── 4. Precision Hairline Marquee ── */}
      <div className="manifesto-ticker-bar">
        <div className="manifesto-ticker-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="ticker-pill">
              {item}
              <span className="ticker-slash">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
