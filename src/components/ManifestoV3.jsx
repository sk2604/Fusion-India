import React, { useState, useEffect, useRef } from 'react';
import './ManifestoV3.css';

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

const chapters = [
  {
    id: 'csr',
    num: '01',
    label: 'ETHICAL FOUNDATION',
    quote: 'Integrity is not an option; it is woven into every yard of fabric.',
    text: 'Every facility across our 500+ partner network adheres to strict global labour standards — audited living wages, certified workplace safety, closed-loop water treatment, and zero compromise on human dignity.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    tag: 'GLOBAL AUDIT STANDARDS'
  },
  {
    id: 'mission',
    num: '02',
    label: 'STRATEGIC VISION',
    quote: 'European design sensibility, delivered at global manufacturing scale.',
    text: 'We connect the world’s leading retail groups across Scandinavia, Germany, and the Americas to the craftsmanship of the Indian subcontinent, engineering seamless sourcing with rapid sample turnarounds.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    tag: 'FULL VALUE CHAIN MASTERY'
  },
  {
    id: 'innovation',
    num: '03',
    label: 'MATERIAL & 3D PROTO',
    quote: 'Redefining garment prototyping through digital craft.',
    text: 'From GOTS-certified organic cotton to 3D virtual pattern draping, our in-house studios accelerate sampling timelines from months to days, drastically reducing waste before a single meter of fabric is cut.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
    tag: 'SUSTAINABLE INNOVATION'
  }
];

export default function ManifestoV3() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  const cur = chapters[activeIdx];

  const y15 = useCounter(15, 1400, started);
  const m500 = useCounter(500, 1400, started);
  const c20 = useCounter(20, 1400, started);
  const g10 = useCounter(10, 1400, started);

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

  return (
    <section className="manifesto-v3" ref={sectionRef}>
      <div className="container">
        
        {/* ── Top Editorial Manifesto Statement ── */}
        <div className="manifesto-v3-header">
          <span className="manifesto-v3-meta">CHAPTER 02 — THE MANIFESTO</span>
          <h2 className="manifesto-v3-serif-heading">
            We are <em>Fusion India</em>. <br />
            Architects of the modern apparel value chain.
          </h2>
        </div>

        {/* ── Asymmetric Fashion Lookbook ── */}
        <div className="manifesto-v3-showcase">
          
          {/* Left: Oversized Fashion Portrait with Soft Caption */}
          <div className="manifesto-v3-visual-side">
            <div className="lookbook-frame">
              <img
                src={cur.image}
                alt={cur.label}
                className="lookbook-photo"
                key={cur.id}
              />
              <div className="lookbook-overlay-tag">
                <span className="tag-code">{cur.tag}</span>
                <span className="tag-edition">SPRING / SUMMER '26</span>
              </div>
            </div>
          </div>

          {/* Right: Borderless Narrative & Interactive Index */}
          <div className="manifesto-v3-text-side">
            
            {/* Interactive Clean Fashion Index */}
            <div className="lookbook-nav">
              {chapters.map((ch, idx) => (
                <button
                  key={ch.id}
                  className={`lookbook-tab ${activeIdx === idx ? 'active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="tab-idx">[{ch.num}]</span>
                  <span className="tab-name">{ch.label}</span>
                </button>
              ))}
            </div>

            {/* Narrative Content */}
            <div className="lookbook-body" key={cur.id}>
              <blockquote className="lookbook-quote">
                "{cur.quote}"
              </blockquote>
              <p className="lookbook-para">
                {cur.text}
              </p>
            </div>

            {/* Curated Metrics Grid (Borderless & Serene) */}
            <div className="manifesto-v3-stat-row">
              <div className="stat-unit">
                <span className="stat-num-serif">{y15}<sup>+</sup></span>
                <span className="stat-label-clean">YEARS OF EXCELLENCE</span>
              </div>
              <div className="stat-unit">
                <span className="stat-num-serif">{m500}<sup>+</sup></span>
                <span className="stat-label-clean">AUDITED MILLS</span>
              </div>
              <div className="stat-unit">
                <span className="stat-num-serif">{c20}<sup>+</sup></span>
                <span className="stat-label-clean">GLOBAL MARKETS</span>
              </div>
              <div className="stat-unit">
                <span className="stat-num-serif">{g10}M<sup>+</sup></span>
                <span className="stat-label-clean">ANNUAL GARMENTS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
