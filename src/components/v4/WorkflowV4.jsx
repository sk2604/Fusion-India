import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './WorkflowV4.css';

const steps = [
  {
    step: '01',
    title: 'Digital Spec & 3D Ingestion',
    tag: 'DIGITAL INPUT',
    desc: 'Send your moodboard, tech-pack, or CLO 3D project. Our engineering system validates pattern geometry, shrinkage allowances, and yarn specifications instantly.',
    features: ['CAD / DXF / CLO 3D Compatible', 'Zero-Waste Pattern Grading', 'Automated Yarn Calculation']
  },
  {
    step: '02',
    title: 'Virtual Drape & 72-Hr Master Proto',
    tag: 'ATELIER PROTOTYPE',
    desc: 'Simulate high-fidelity fabric drape and tension mapping on digital avatars, followed by immediate physical cutting in our 40,000 sq.ft Gurugram sample room.',
    features: ['Tensile & Seam Stress Mapping', 'Physical Sample in 72 Hours', 'Zero Courier Dead-Cycles']
  },
  {
    step: '03',
    title: 'Audited Scale & Global Fulfillment',
    tag: 'MASS PRODUCTION',
    desc: 'Ethical manufacturing across 500+ certified Tier-1 mills with inline AQL 1.5 inspection. Shipped with complete customs clearance directly to your regional warehouse.',
    features: ['100% Inline Quality Audits', 'Scandinavia / Germany / USA Hubs', 'SEDEX / GOTS / BSCI Certified']
  }
];

export default function WorkflowV4() {
  return (
    <section className="workflow-v4">
      <div className="container workflow-v4-container">
        
        {/* Head */}
        <div className="workflow-v4-head">
          <span className="wf-kicker">OPERATING PROTOCOL // 3 STEPS</span>
          <h2 className="wf-title">
            From Digital Blueprint to <em>Global Rack</em>.
          </h2>
          <p className="wf-sub">
            A frictionless, transparent supply chain protocol engineered for modern fashion houses.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="workflow-steps-grid">
          {steps.map((s, idx) => (
            <div key={s.step} className="workflow-step-card">
              <div className="step-card-glow" />
              
              <div className="step-card-header">
                <span className="step-number">{s.step}</span>
                <span className="step-tag">{s.tag}</span>
              </div>

              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>

              <div className="step-divider" />

              <ul className="step-features-list">
                {s.features.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} className="feature-check-icon" />
                    <span>{f}</span>
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
