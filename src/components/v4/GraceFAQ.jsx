import React, { useState } from 'react';
import './GraceFAQ.css';

const faqItems = [
  {
    q: 'What is Fusion’s Digital Atelier & Sourcing Protocol?',
    a: 'Fusion provides a frictionless bridge between international fashion design and certified high-volume manufacturing. We ingest tech packs, 3D CAD, or physical garment samples, calibrate precision drape digitally in CLO 3D, and produce master samples in 72 hours from our 40,000 sq.ft Gurugram facility.'
  },
  {
    q: 'How fast can a physical production sample be delivered to Europe or USA?',
    a: 'Digital avatar drape and grading validation happens in 3 minutes. Physical master prototypes are cut and hand-finished in our Gurugram sample room within 72 hours, then dispatched via express international courier directly to your design studio.'
  },
  {
    q: 'Can we manufacture directly from flat sketches or 3D CLO files?',
    a: 'Yes. Our engineering division accepts raw moodboards, Adobe Illustrator tech packs, DXF pattern files, and native CLO 3D projects. Our pattern masters verify shrinkage allowances, seam tolerances, and zero-waste marker nesting before fabric cutting begins.'
  },
  {
    q: 'What are your production MOQs (Minimum Order Quantities)?',
    a: 'Because we operate our own specialized sample rooms and tier-1 partner mills, we accommodate agile capsule collections starting from 150 to 300 pieces per style, up to enterprise scale runs exceeding 50,000 pieces.'
  },
  {
    q: 'How do you guarantee ethical compliance and zero child labour?',
    a: 'Ethical trading is the foundation of Fusion India. All partner mills and in-house facilities operate under strict SEDEX SMETA 4-pillar audits, BSCI compliance, and GOTS organic certification, guaranteeing fair living wages, safe working environments, and complete chain-of-custody transparency.'
  },
  {
    q: 'Where are your international offices and regional hubs located?',
    a: 'Our global headquarters and central 40,000 sq.ft manufacturing atelier are based in Gurugram (Udyog Vihar), Haryana, India. We maintain dedicated regional operational partnerships across Germany (Hamburg logistics corridor), Scandinavia (Stockholm & Copenhagen buying hub), and North America.'
  }
];

export default function GraceFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="grace-faq-section">
      <div className="container grace-faq-container">
        
        {/* Left Sticky Column */}
        <div className="faq-left-col">
          <div className="faq-sticky-box">
            <span className="faq-kicker">KNOWLEDGE BASE // FAQ</span>
            <h2 className="faq-title">
              Frequently asked <em>sourcing questions</em>.
            </h2>
            <p className="faq-sub">
              Everything you need to know about our digital atelier, 72-hour prototyping, 
              and ethical scale manufacturing.
            </p>
          </div>
        </div>

        {/* Right Accordion Column */}
        <div className="faq-right-col">
          <div className="faq-accordion-list">
            {faqItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openIdx === idx ? 'open' : ''}`}
              >
                <button 
                  type="button" 
                  className="faq-summary-btn"
                  onClick={() => toggle(idx)}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle-circle">
                    <span className="toggle-icon">+</span>
                  </span>
                </button>

                {openIdx === idx && (
                  <div className="faq-answer-box">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
