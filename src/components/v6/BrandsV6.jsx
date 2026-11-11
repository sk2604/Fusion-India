import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BrandsV6.css';

gsap.registerPlugin(ScrollTrigger);

const brandsRow1 = [
  { name: 'ZARA', origin: 'Inditex Group' },
  { name: 'MANGO', origin: 'Barcelona' },
  { name: 'CARL GROSS', origin: 'Germany' },
  { name: 'H&M', origin: 'Stockholm' },
  { name: 'MUSTANG', origin: 'True Denim' },
  { name: 'SELECTED', origin: 'Bestseller Group' },
];

const brandsRow2 = [
  { name: 'MARC AUREL', origin: 'Premium Womenswear' },
  { name: 'FALKE', origin: 'Luxury Knitwear' },
  { name: 'CLUB OF GENTS', origin: 'Tailoring Germany' },
  { name: 'NEXT', origin: 'United Kingdom' },
  { name: 'VERO MODA', origin: 'Contemporary' },
  { name: 'JACK & JONES', origin: 'Menswear' },
];

export default function BrandsV6({ id = 'brands' }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 960px)', () => {
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

      tl.fromTo(container,
        { opacity: 0.3, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' },
        0
      );

      tl.to({}, { duration: 0.4 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="v6-page-surface-dark v6-brands-section" id={id} ref={sectionRef} data-nav-theme="dark">
      <div className="v6-container v6-px v6-brands-container" ref={containerRef}>
        
        {/* Section Header */}
        <div className="v6-brands-header">
          <div className="v6-brands-eyebrow">
            <span className="v6-eyebrow-red-dot" />
            <span>GLOBAL RETAIL CLIENTELE</span>
          </div>
          <h2 className="v6-brands-main-title">
            Brands we work with<span className="text-red-500">.</span>
          </h2>
          <p className="v6-brands-subtext">
            Trusted by Europe and North America's leading apparel brands and retail conglomerates for high-capacity, ethically audited volume production.
          </p>
        </div>

        {/* Dual-Track Infinite Scrolling Luxury Marquee */}
        <div className="v6-brands-marquee-stage">
          
          {/* Track 1: Leftward Marquee */}
          <div className="v6-brands-track-wrap">
            <div className="v6-brands-track v6-track-left">
              {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, idx) => (
                <div key={`r1-${idx}`} className="v6-brand-card">
                  <span className="v6-brand-title">{brand.name}</span>
                  <span className="v6-brand-origin">{brand.origin}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Rightward Marquee */}
          <div className="v6-brands-track-wrap">
            <div className="v6-brands-track v6-track-right">
              {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, idx) => (
                <div key={`r2-${idx}`} className="v6-brand-card">
                  <span className="v6-brand-title">{brand.name}</span>
                  <span className="v6-brand-origin">{brand.origin}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Sourcing Footnote */}
        <div className="v6-brands-bottom-stats">
          <div className="v6-b-stat">
            <span className="v6-b-num">30+</span>
            <span className="v6-b-label">Years of Partnerships</span>
          </div>
          <div className="v6-b-stat-divider" />
          <div className="v6-b-stat">
            <span className="v6-b-num">50,000+</span>
            <span className="v6-b-label">Units per Production Run</span>
          </div>
          <div className="v6-b-stat-divider" />
          <div className="v6-b-stat">
            <span className="v6-b-num">100%</span>
            <span className="v6-b-label">Audit & AQL 1.5 Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
