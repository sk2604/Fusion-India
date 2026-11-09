import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const tabData = [
  {
    id: 'csr',
    title: 'Ethical Trading & CSR',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
    content: 'Ethical Trading, Compliance and CSR are the basic mantras of our business model at Fusion. Our Supply Chain Partners meet all local and international norms (Minimum Wages, Health & Safety, zero child labour). "We are proud of the product and the process behind".'
  },
  {
    id: 'mission',
    title: 'Mission',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>,
    content: 'To bring the best quality products and services at highly competitive prices to our Global Customers across Scandinavia, Germany, Europe and North America.'
  },
  {
    id: 'vision',
    title: 'Vision',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    content: 'Fusion is a Company built up of Young Individuals who together as a cohesive Team "Dared to Dream". We strive to be the undisputed Multi Product One Stop Shop for fashion sourcing.'
  }
];

export default function About() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(tabData[0]);

  // 3D Parallax Mouse Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-reveal', 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: '.about-text-col',
            start: "top 80%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      className="about-section" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container h-full">
        <div className="about-grid">
          
          <div className="about-image-col about-reveal">
            <motion.div 
              className="image-3d-wrapper"
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
            >
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" alt="Fusion Fashion Model" />
              <div className="image-glass-overlay">
                <p>EST. 1998</p>
              </div>
            </motion.div>
          </div>

          <div className="about-text-col">
            <h2 className="text-title about-reveal">WE ARE<br/>FUSION INDIA.</h2>
            
            <div className="about-body about-reveal">
              <p>A Supply Chain Partner bringing in The "Right Product - Right Price and Right Performance". We are a team of Creative, Proactive, and Honest dynamic people bringing you Ethical Trading, Product Security, and Innovation.</p>
            </div>

            {/* Innovative Interactive Tabs */}
            <div className="about-tabs-container about-reveal">
              <div className="tabs-header">
                {tabData.map(tab => (
                  <button 
                    key={tab.id}
                    className={`tab-btn ${activeTab.id === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.icon}
                    <span>{tab.title}</span>
                  </button>
                ))}
              </div>
              <div className="tab-content-box">
                <motion.p
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeTab.content}
                </motion.p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
