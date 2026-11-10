import React from 'react';
import './CutoutTransitionV6.css';

export default function CutoutTransitionV6() {
  return (
    <section className="v6-cutout-section">
      <div className="v6-cutout-container">
        <span className="v6-cutout-left-text">From raw fiber</span>
        
        {/* Giant Monogram / Geometric Cutout (Matching 00:12 in video) */}
        <div className="v6-cutout-brand">
          <span className="v6-cutout-word">FUSION</span>
        </div>
        
        <span className="v6-cutout-right-text">we engineer it.</span>
      </div>
    </section>
  );
}

