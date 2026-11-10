import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './GraceHero.css';

const words = ['You', 'decide', 'what', 'the', 'world', 'sees', 'and', 'wears.'];

export default function GraceHero({ onExplore }) {
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % words.length);
    }, 450);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="grace-hero">
      {/* Background Cinematic Visual */}
      <div className="grace-hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop" 
          alt="Fusion Atelier Model" 
          className="grace-hero-img"
        />
        <div className="grace-hero-scrim" />
      </div>

      {/* Center Slogan (Exact Grace Typography & Framing) */}
      <div className="grace-hero-content">
        <motion.span 
          className="grace-kicker-label"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AN ATELIER WITHOUT LIMITS.
        </motion.span>

        <h1 className="grace-hero-headline">
          <span className="grace-kinetic-word">{words[activeWordIdx]}</span>
          <span className="grace-headline-rest">
            decides what the world wears.
          </span>
        </h1>

        <motion.p 
          className="grace-hero-sub"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          From your tech-pack becomes an entire production run. In days.<br />
          We take care of the ethical scale and audited craft.
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
            <span>EXPLORE THE ATELIER</span>
            <ArrowDown size={14} />
          </button>
        </motion.div>
      </div>

      {/* Floating Bottom Ticker */}
      <div className="grace-hero-bottom-bar">
        <span className="bar-unit">GURUGRAM HQ // 40,000 SQ.FT CAMPUS</span>
        <span className="bar-unit">SCANDINAVIA • GERMANY • NORTH AMERICA</span>
        <span className="bar-unit">500+ AUDITED MILLS</span>
      </div>
    </section>
  );
}
