import React from 'react';
import './GraceMotion.css';

export default function GraceMotion() {
  return (
    <section className="grace-motion-section" id="motion">
      {/* Background cinematic looping video or luxury drape visual */}
      <div className="grace-motion-bg">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2400&auto=format&fit=crop" 
          alt="Fusion India Atelier Runway Movement"
          className="grace-motion-img" 
        />
        <div className="grace-motion-scrim" />
      </div>

      {/* Centered Minimal Statement */}
      <div className="grace-motion-content">
        <h2 className="headline-large text-white text-center">
          From raw yarn to global runways. 500+ audited Tier-1 mills.
        </h2>
      </div>
    </section>
  );
}

