import React from 'react';
import './CutoutTransitionV5.css';

export default function CutoutTransitionV5() {
  return (
    <section className="v5-cutout-section">
      <div className="v5-cutout-container">
        <span className="v5-cutout-left-text">From raw fiber</span>
        
        {/* Giant Monogram / Geometric Cutout (Matching 00:12 in video) */}
        <div className="v5-cutout-brand">
          <span className="v5-cutout-word">FUSION</span>
        </div>
        
        <span className="v5-cutout-right-text">we engineer it.</span>
      </div>
    </section>
  );
}
