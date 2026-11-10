import React, { useState } from 'react';
import './GraceFAQ.css';

const faqItems = [
  {
    q: 'What product categories does Fusion India specialize in?',
    a: 'Fusion India is a comprehensive multi-product manufacturing partner specializing in Women’s Atelier (silk charmeuse, contemporary dresses), Men’s Tailoring (wool suiting, formal blazers), Leather Goods & Bags (full-grain Tuscan calfskin totes and crossbody bags), Circular Denim (low-water selvedge jackets and jeans), and Organic Cotton Essentials (GOTS-certified loopback hoodies, tees, and loungewear).'
  },
  {
    q: 'Where is your manufacturing headquarters and sampling facility?',
    a: 'Our global headquarters and central 40,000 sq.ft manufacturing and design campus are based in Gurugram (Udyog Vihar), Haryana, India. We house complete pattern making, master sampling, material testing, and QA divisions on-site, supported by partner distribution hubs in Germany (Hamburg), Scandinavia, and North America.'
  },
  {
    q: 'What are your production Minimum Order Quantities (MOQs)?',
    a: 'We support both fast-turnaround capsule collections and high-volume enterprise production. Capsule trial runs start at 150 to 500 pieces per style, while our audited mill network easily scales to volume orders of 5,000 to 50,000+ units per run.'
  },
  {
    q: 'How fast can a physical master prototype be completed?',
    a: 'Upon receiving your design sketches, CAD files, or physical reference garments, our Gurugram sample room engineers, fits, and finishes your master physical prototype within 72 hours, complete with accurate fabric swatches and trim cards.'
  },
  {
    q: 'How do you ensure ethical trading, fair wages, and compliance?',
    a: 'Ethical trading is the foundation of our business model. All our facilities and tier-1 partner mills adhere strictly to international standards: SEDEX SMETA 4-pillar, BSCI social compliance, and GOTS organic certification, guaranteeing safe working conditions, living wages, and zero child labor.'
  },
  {
    q: 'How do you handle logistics and customs clearance for overseas buyers?',
    a: 'We manage complete FOB, CIF, or DDP shipping. Our direct freight corridors deliver seamlessly into Hamburg and Munich for Central Europe, Stockholm and Copenhagen for Scandinavia, and New York and Los Angeles for North America, with full export documentation and customs clearance.'
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
              Everything you need to know about our Gurugram manufacturing campus, 
              72-hour prototyping, MOQs, and ethical compliance standards.
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
