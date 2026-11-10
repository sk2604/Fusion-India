import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './GraceHero.css';

const words = ['You', 'design', 'what', 'the', 'world', 'wears.'];

export default function GraceHero({ onExplore }) {
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % words.length);
    }, 550);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="grace-hero">
      {/* Background Cinematic Visual */}
      <div className="grace-hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop" 
          alt="Fusion India Atelier" 
          className="grace-hero-img"
        />
        <div className="grace-hero-scrim" />
      </div>

      {/* Center Slogan (Grace Typography & Stance, Real Sourcing Content) */}
      <div className="grace-hero-content">
        <motion.span 
          className="grace-kicker-label"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A GLOBAL SOURCING ATELIER // EST. 1998
        </motion.span>

        <h1 className="grace-hero-headline">
          <span className="grace-kinetic-word">{words[activeWordIdx]}</span>
          <span className="grace-headline-rest">
            manufactured at audited scale.
          </span>
        </h1>

        <motion.p 
          className="grace-hero-sub"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Direct supply chain partner linking European runway vision to audited Indian manufacturing.<br />
          Women’s atelier, men’s tailoring, fine leather goods, and sustainable outerwear.
        </motion.p>

        <motion.div 
          className="grace-hero-cta"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            type="button" 
            className="grace-btn-white"
            onClick={onExplore}
          >
            <span>EXPLORE SOURCING DIVISIONS</span>
            <ArrowDown size={14} />
          </button>
        </motion.div>
      </div>

      {/* Floating Bottom Ticker */}
      <div className="grace-hero-bottom-bar">
        <span className="bar-unit">GURUGRAM HQ // 40,000 SQ.FT CAMPUS</span>
        <span className="bar-unit">SCANDINAVIA • GERMANY • NORTH AMERICA</span>
        <span className="bar-unit">500+ AUDITED TIER-1 MILLS</span>
      </div>
    </section>
  );
}
