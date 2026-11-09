import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import './Navbar.css';

export default function Navbar() {
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
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
              </motion.div>
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
                <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
