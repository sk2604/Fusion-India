import React, { useState } from 'react';
import './TestimonialsV5.css';

const testimonials = [
  {
    id: 1,
    quote: 'Fusion India is an excellent fit for our studio and our way of working. It integrates seamlessly into our existing processes and has consistently impressed both our clients and our team with the quality of the results .',
    author: 'Ronald Kloiber',
    role: 'Officer Online Shop & Operations, Carl Gross & Club of Gents, Création Gross GmbH & Co. KG'
  },
  {
    id: 2,
    quote: 'For our European retail stores, we need continuous premium garment quality without batch deviations. With Fusion India, we accelerated sample approval by 60% and achieved 100% on-time container delivery .',
    author: 'Frederik Lind',
    role: 'Head of Sourcing & Global Supply, Nordic Apparel Group, Copenhagen'
  },
  {
    id: 3,
    quote: 'Fusion India has become our core technical partner for tailored wool overcoats and denim, from runway development to commercial container production, all backed by audited Indian manufacturing .',
    author: 'Markus Weber',
    role: 'Director of Apparel Production, Sartorial Hamburg'
  },
  {
    id: 4,
    quote: 'Their 40,000 sq.ft facility and in-house CAD lab fits naturally into our workflows. They meet our strictest European social and chemical audits while delivering exceptional garment finishing every season .',
    author: 'Helena Berg',
    role: 'VP Sourcing & Sustainability, Stockholm Fashion House'
  },
  {
    id: 5,
    quote: 'With Fusion India, we didn’t just find another supplier; we streamlined our entire Asian supply chain. We now have direct factory communication with zero middleman friction .',
    author: 'Julian Vance',
    role: 'Managing Director, British Tailoring Guild, London'
  }
];

const partners = [
  'CARL GROSS',
  'MUSTANG',
  'NOVA STUDIOS',
  'MARC AUREL',
  'FALKE',
  'and many more'
];

export default function TestimonialsV5({ id = 'testimonials' }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];

  return (
    <section className="v5-page-surface-white v5-testimonials-section" id={id}>
      <div className="v5-container v5-px v5-testimonials-container">
        
        {/* Brand row matching 00:32 in video */}
        <div className="v5-testimonials-brand-row">
          <p className="label text-neutral-400">IN USE AT</p>
          <div className="v5-brand-list">
            {partners.map((p, i) => (
              <span 
                key={i} 
                className={p === 'and many more' ? 'v5-brand-more' : 'v5-brand-item'}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Large Quote matching 00:33 in video */}
        <div className="v5-quote-box">
          <blockquote className="v5-quote-text">
            “ {current.quote} ”
          </blockquote>

          <p className="caption text-neutral-500 mt-6">
            <span className="text-black font-medium">{current.author}</span>, {current.role}
          </p>

          {/* 5 Slim Horizontal Tabs matching video */}
          <div className="v5-quote-tabs" role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeIdx}
                className={`v5-quote-tab ${i === activeIdx ? 'active' : ''}`}
                onClick={() => setActiveIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
              >
                <span className="v5-quote-tab-bar" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
