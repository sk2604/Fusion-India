import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Magnetic from './Magnetic';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled(scrolled);
      if (window.scrollY > 60 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // V4 and V5 have their own dedicated fixed mix-blend-difference navbars
  if (location.pathname === '/v4' || location.pathname === '/grace' || location.pathname === '/v5') {
    return null;
  }

  return (
    <>
      <nav className={`navbar-premium ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-container">
          <Magnetic>
            <div className="magnetic-wrapper">
              <Link to="/" className="nav-logo">
                FUSION<span className="logo-dot">.</span>
              </Link>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="magnetic-wrapper">
              <button
                className="nav-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? 'CLOSE' : 'MENU'}
              </button>
            </div>
          </Magnetic>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="nav-overlay"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container nav-menu-container">
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}>
                <Link to="/v4" onClick={() => setIsOpen(false)}>✨ V4 // GRACE AI FASHION OS</Link>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.22, duration: 0.5 }}>
                <Link to="/" onClick={() => setIsOpen(false)}>DARK (2) // EDITORIAL RUNWAY</Link>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.28, duration: 0.5 }}>
                <Link to="/v3" onClick={() => setIsOpen(false)}>WHITE (V3) // ATELIER HOUSE</Link>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.34, duration: 0.5 }}>
                <Link to="/v2" onClick={() => setIsOpen(false)}>DARK (V2) // STUDIO SOURCING</Link>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
                <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT & INTAKE</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
