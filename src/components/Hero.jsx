import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-video', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.8 // Wait for preloader to finish
      }
    }
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-video-container">
        {/* Placeholder for high-end cinematic fashion video/image */}
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="Fusion India Fashion Collection" 
          className="hero-video"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <motion.div 
          className="hero-text-wrap"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="line-mask">
            <motion.h1 variants={item} className="text-huge">FUSION</motion.h1>
          </div>
          <div className="line-mask">
            <motion.h1 variants={item} className="text-huge">INDIA</motion.h1>
          </div>
          <div className="line-mask hero-row-3">
            <motion.h1 variants={item} className="text-huge text-indent">COLLECTION</motion.h1>
            <motion.div variants={item} className="hero-badge">
              <span>EST. 1998</span>
              <span>MARKET LEADER</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
