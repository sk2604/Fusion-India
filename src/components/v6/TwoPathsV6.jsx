import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TwoPathsV6.css';

gsap.registerPlugin(ScrollTrigger);

export default function TwoPathsV6({ id = 'paths', onSelectFOB, onSelectDDP, onRequestDeck }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=750',
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
        }
      });

      tl.fromTo(header,
        { opacity: 0, y: -20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
        0
      );

      tl.fromTo(cardsRef.current,
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.15, ease: 'power2.out' },
        0.1
      );

      tl.to({}, { duration: 0.3 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="v6-page-surface-white v6-paths-section" id={id} ref={sectionRef} data-nav-theme="light">
      <div className="v6-container v6-px v6-paths-container">
        
        {/* Top Headline */}
        <div className="v6-paths-header" ref={headerRef}>
          <h2 className="v6-paths-title">
            <span className="v6-title-line">Direct FOB.</span>
            <span className="v6-title-line">Or full DDP concierge.</span>
          </h2>
          <p className="v6-paths-desc">
            Same Indian manufacturing excellence, two flexible fulfillment models tailored to your supply chain.
          </p>
        </div>

        {/* 2 Big Cards with Pinned 100vh Proportions */}
        <div className="v6-paths-grid">
          
          {/* Card 1: FOB */}
          <div className="v6-path-col" ref={addToCards}>
            <div className="group v6-path-card" onClick={onSelectFOB} role="button" tabIndex={0}>
              <div className="v6-path-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Direct FOB Sourcing" 
                  className="v6-path-img"
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
              </div>
              <p className="v6-path-tag">FOB DIRECT</p>
              <h3 className="v6-path-card-title">
                Your team directs freight.
              </h3>
              <p className="v6-path-body">
                Full production oversight from our 40,000 sq.ft Gurugram campus. Handover at Mumbai / Delhi JNPT ports with verified AQL 1.5 inspection.
              </p>
              <p className="v6-link-underline">
                Explore FOB terms <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

          {/* Card 2: DDP */}
          <div className="v6-path-col" ref={addToCards}>
            <div className="group v6-path-card" onClick={onSelectDDP} role="button" tabIndex={0}>
              <div className="v6-path-img-wrap">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" 
                  alt="Full DDP Concierge" 
                  className="v6-path-img"
                  data-pin-nopin="true"
                  data-pin-no-hover="true"
                />
              </div>
              <p className="v6-path-tag">FULL DDP CONCIERGE</p>
              <h3 className="v6-path-card-title">
                We produce & deliver for you.
              </h3>
              <p className="v6-path-body">
                You send tech packs and briefs. We handle raw material, manufacturing, EU customs clearance, and palletized delivery direct to your European warehouse.
              </p>
              <p className="v6-link-underline">
                Go to service <span aria-hidden="true">→</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="v6-paths-bottom-bar">
          <p>
            Hundreds of styles per season?{' '}
            <span 
              className="text-black font-semibold underline underline-offset-4 cursor-pointer"
              onClick={onRequestDeck}
              role="button"
              tabIndex={0}
            >
              Request our Complete Sourcing Playbook →
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
