import React from 'react';
import './MotionV6.css';

export default function MotionV6({ id = 'motion' }) {
  return (
    <section className="v6-motion-section" id={id} data-nav-theme="dark">
      {/* Background Cinematic High-Fashion Video Loop */}
      <div className="v6-motion-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2400&auto=format&fit=crop"
          className="v6-motion-video"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-a-fur-coat-in-an-elevator-41588-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="v6-motion-scrim" />
      </div>

      {/* Centered High-Fashion Atelier Motion Statement */}
      <div className="v6-motion-content">
        <h2 className="v6-motion-headline">
          From master pattern to runway motion. Every drape engineered to move.
        </h2>
        <span className="v6-motion-sub">
          CERTIFIED ATELIER PRODUCTION // 500+ AUDITED MILLS
        </span>
      </div>
    </section>
  );
}
