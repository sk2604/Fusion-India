import React from 'react';
import './MotionV5.css';

export default function MotionV5({ id = 'motion' }) {
  return (
    <section className="v5-motion-section" id={id}>
      {/* Background Elevator Scene matching the user's exact uploaded image */}
      <div className="v5-motion-bg">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2400&auto=format&fit=crop" 
          alt="Fusion India Atelier Runway Movement"
          className="v5-motion-img" 
        />
        <div className="v5-motion-elevator-scrim" />
      </div>

      {/* Centered White Headline Matching Screenshot */}
      <div className="v5-motion-content">
        <h2 className="headline-large text-white text-center">
          From flat pattern to fluid runway. Ready for global retail.
        </h2>
      </div>
    </section>
  );
}
