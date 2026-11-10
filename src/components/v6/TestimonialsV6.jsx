import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TestimonialsV6.css';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: 'Fusion India has been our most dependable production partner in Asia for over six seasons. From 14-day sample turnaround to 50,000-unit bulk delivery across our European stores, their garment finishing, fabric drape, and AQL 1.5 quality control have been flawless.',
    author: 'Ronald Kloiber',
    role: 'Head of Sourcing & Global Supply, Création Gross GmbH (Carl Gross & Club of Gents)',
    tag: 'Création Gross GmbH // European Retail',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 2,
    quote: 'Finding an ethical factory network in India that understands European luxury tailoring standards was our biggest challenge. Fusion India solved that completely — their 40,000 sq.ft sampling campus and audited tier-1 mills deliver exceptional garment quality every single season.',
    author: 'Frederik Lind',
    role: 'Director of Production & Sourcing, Nordic Retail Group (Copenhagen)',
    tag: 'Nordic Retail Group // Copenhagen Sourcing',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 3,
    quote: 'Their direct DDP delivery direct to our Hamburg warehouse removes all logistics headaches. European customs cleared, duty settled, and containers unloaded exactly on schedule. They are truly our manufacturing backbone in Asia.',
    author: 'Markus Weber',
    role: 'Director of Apparel Supply Chain, Sartorial Hamburg',
    tag: 'Sartorial Hamburg // Logistics & DDP Delivery',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 4,
    quote: "Whether it's complex silk bias cuts, circular selvedge denim, or technical outerwear, Fusion India's fabric sourcing and pattern calibration are second to none. They meet our strictest European chemical and social audit standards without compromise.",
    author: 'Helena Berg',
    role: 'VP Quality & Compliance, Stockholm Apparel House',
    tag: 'Stockholm Apparel House // Fabric & Compliance',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 5,
    quote: 'With Fusion India, we eliminated 3 layers of middleman markups and gained direct atelier communication with zero friction. We accelerated our sample-to-shelf lead time by 4 weeks across our core menswear lines.',
    author: 'Julian Vance',
    role: 'Managing Director, British Tailoring Guild (London)',
    tag: 'British Tailoring Guild // Atelier Sourcing',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85'
  }
];

export default function TestimonialsV6({ id = 'testimonials' }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = testimonials[activeIdx];
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    if (!section || !leftCol) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=700',
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
        }
      });

      tl.fromTo(leftCol,
        { opacity: 0.4, y: 30, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
        0
      );

      tl.to({}, { duration: 0.3 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-page-surface-white v6-testimonials-section" id={id} ref={sectionRef} data-nav-theme="light">
      <div className="v6-testimonials-split">
        
        {/* Left Column: Testimonial & Credentials */}
        <div className="v6-testimonials-col-left" ref={leftColRef}>
          <div className="v6-testimonials-inner">
            
            {/* Top Eyebrow */}
            <div className="v6-testimonials-eyebrow-row">
              <span className="v6-test-tag">CLIENT PERSPECTIVES // EUROPEAN RETAIL LEADERS</span>
            </div>

            {/* Large Quote matching Image 1 heading font style */}
            <div className="v6-quote-box">
              <blockquote className="v6-quote-text">
                “ {current.quote} ”
              </blockquote>

              <div className="v6-quote-author-block">
                <p className="v6-author-name">{current.author}</p>
                <p className="v6-author-role">{current.role}</p>
              </div>

              {/* 5 Slim Horizontal Tabs for interactive testimonial switching */}
              <div className="v6-quote-tabs" role="tablist">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIdx}
                    className={`v6-quote-tab ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  >
                    <span className="v6-quote-tab-bar" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Full-Height Luxury Fashion Imagery */}
        <div className="v6-testimonials-col-right">
          <div className="v6-test-img-stage">
            {testimonials.map((t, i) => (
              <img
                key={t.id}
                src={t.image}
                alt={t.author}
                className={`v6-test-editorial-img ${i === activeIdx ? 'is-active' : ''}`}
                loading="eager"
              />
            ))}
            {/* Subtle luxury overlay badge */}
            <div className="v6-test-img-tag">
              <span>{current.tag}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
