import React, { useState } from 'react';
import './ValueChain.css';

const stages = [
  {
    num: '01',
    phase: 'TREND & 3D PROTO',
    title: 'Digital Ideation to 48-Hour Virtual Twin',
    desc: 'Our design hubs analyze European runway directions and consumer sales velocity. Using CLO 3D simulation, we drape virtual fabrics onto customized retailer avatars — finalizing silhouettes and grading before any physical cloth is cut.',
    points: ['Catwalk Trend Synthesis', 'Virtual 3D Avatar Draping', 'Digital Colorway Approvals']
  },
  {
    num: '02',
    phase: 'MATERIAL ARCHITECTURE',
    title: 'Traceable Fibers from Certified Mills',
    desc: 'We procure raw materials directly from audited tier-1 and tier-2 mills across India and the subcontinent. Every batch of GOTS organic cotton, linen, and recycled polyester is tested for tensile strength, pilling, and chemical safety.',
    points: ['GOTS & OEKO-TEX Verification', 'Yarn & Weave Customization', 'Closed-Loop Effluent Controls']
  },
  {
    num: '03',
    phase: 'INDUSTRIAL PRECISION',
    title: 'Manufacturing with Zero-Defect Inline Audits',
    desc: 'Production is distributed across 500+ compliant factories specializing in dedicated categories (outerwear, knitwear, denim). Fusion India station technical QA auditors directly on the factory floor for 100% inline and final AQL 2.5 inspections.',
    points: ['Dedicated Category Facilities', '100% Inline Floor Auditing', 'Lab Certified Colorfastness']
  },
  {
    num: '04',
    phase: 'GLOBAL FULFILLMENT',
    title: 'Consolidated Freight & Direct Door Delivery',
    desc: 'From port customs to European and North American central distribution warehouses. We handle full carton scanning, barcoding, customs clearance, and multi-modal sea/air logistics to ensure 99.4% on-time seasonal delivery.',
    points: ['Multi-Port Consolidation', 'EDI & Real-Time Tracking', '99.4% On-Time Delivery Record']
  }
];

export default function ValueChain() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="chain-section">
      <div className="container">
        
        {/* Header */}
        <div className="chain-header">
          <div className="chain-header-left">
            <span className="chain-kicker">END-TO-END SOURCING PIPELINE</span>
            <h2 className="chain-title">
              How We Engineer Scale<span className="title-dot">.</span>
            </h2>
          </div>
          <p className="chain-lead">
            A frictionless value chain eliminating middleman opacity, compressing sample cycles, and guaranteeing compliance from cotton field to retail rack.
          </p>
        </div>

        {/* 4-Stage Interactive Pipeline */}
        <div className="chain-grid">
          {stages.map((st, idx) => (
            <div
              key={st.num}
              className={`chain-step ${activeStage === idx ? 'active' : ''}`}
              onMouseEnter={() => setActiveStage(idx)}
            >
              <div className="step-top-line" />
              
              <div className="step-num-bar">
                <span className="step-idx">{st.num}</span>
                <span className="step-phase">{st.phase}</span>
              </div>

              <h3 className="step-heading">{st.title}</h3>
              <p className="step-desc">{st.desc}</p>

              <ul className="step-points">
                {st.points.map((pt, i) => (
                  <li key={i} className="step-pt">
                    <span className="pt-dash">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

