import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // slight delay at 100 before disappearing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1; // random increment for realism
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* We use the same image as the Hero section so it's already cached and loads instantly */}
          <div className="preloader-fashion-bg"></div>
          
          <div className="preloader-overlay-gradient"></div>

          <div className="preloader-content relative-z">
            <div className="preloader-brand-text">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
                  }
                }}
              >
                {"FUSION".split("").map((char, index) => (
                  <span key={index} style={{ display: "inline-block", overflow: "hidden" }}>
                    <motion.span
                      variants={{
                        hidden: { y: "100%" },
                        visible: { 
                          y: "0%", 
                          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
                        }
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              >
                THE APPAREL JOURNEY
              </motion.p>
            </div>
            
            <div className="preloader-progress-wrap">
              <div className="preloader-bar">
                <motion.div 
                  className="preloader-bar-fill"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.2 }}
                />
              </div>
              <div className="preloader-counter">
                {progress > 100 ? 100 : progress}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
