import React from 'react';
import './GraceTestimonials.css';

const clientLogos = [
  'ZARA', 'H&M', 'MANGO', 'COS', 'ACNE STUDIOS', 'TOMMY HILFIGER', 'ARKET'
];

const testimonials = [
  {
    quote: 'For our online collections and flagship stores, we need continuous high-volume production, ethical compliance, and rapid prototyping. With Fusion, we have',
    highlight: 'drastically accelerated product delivery and brought new articles to market weeks ahead of schedule',
    author: 'Felix Wolf',
    role: 'Head of Sourcing & Operations, European Retail Group'
  },
  {
    quote: 'Fusion has become an indispensable creative and industrial engine for us, spanning tailored apparel, organic cottons, and outerwear, all from',
    highlight: 'one unified, completely audited supply source in Gurugram',
    author: 'Astrid Lindqvist',
    role: 'Creative Director, Nordic Apparel House'
  },
  {
    quote: 'Fusion fits seamlessly into our corporate buying workflow. Their 40,000 sq.ft design campus in India and local presence in Germany consistently convinces our board with',
    highlight: 'flawless garment hand-feel, zero child-labour verification, and transparent FOB pricing',
    author: 'Markus Weber',
    role: 'VP Global Supply Chain, Continental Fashion Brand'
  }
];

export default function GraceTestimonials() {
  return (
    <section className="grace-testimonials-section">
      <div className="container grace-test-container">
        
        {/* Head */}
        <div className="grace-test-head">
          <span className="test-kicker">EXECUTIVE TESTIMONIALS // CLIENT TRUST</span>
          <h2 className="test-title">
            Trusted across <em>European & Global</em> buying houses.
          </h2>
        </div>

        {/* Client Logos Strip */}
        <div className="test-logos-bar">
          <span className="logos-label">IN ACTIVE PRODUCTION FOR:</span>
          <div className="logos-row">
            {clientLogos.map((logo, i) => (
              <span key={i} className="client-logo-item">{logo}</span>
            ))}
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="test-cards-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="grace-quote-card">
              <span className="quote-mark">„</span>
              <p className="quote-body">
                {t.quote} <strong className="quote-bold">{t.highlight}</strong>.
              </p>
              <div className="quote-author-meta">
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
