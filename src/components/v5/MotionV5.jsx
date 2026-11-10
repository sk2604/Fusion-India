import React from 'react';
import './MotionV5.css';

export default function MotionV5({ id = 'motion' }) {
  return (
    <section className="v5-motion-section" id={id}>
      {/* Background Elevator Scene matching the user's exact uploaded image */}
      <div className="v5-motion-bg">
        <img 
          src="/images/v5-elevator.jpg" 
          alt="From photo to video"
          className="v5-motion-img" 
        />
        <div className="v5-motion-elevator-scrim" />
      </div>

      {/* Centered White Headline Matching Screenshot exactly */}
      <div className="v5-motion-content">
        <h2 className="v5-motion-headline">
          From photo to video. Ready for Reels and TikTok.
        </h2>
      </div>
    </section>
  );
}
