import React from 'react';
import './MotionV5.css';

export default function MotionV5({ id = 'motion' }) {
  return (
    <section className="v5-motion-section" id={id}>
      {/* Background Elevator Scene matching the reference recording and screenshot */}
      <div className="v5-motion-bg">
        <img 
          src="/images/v5-elevator.jpg" 
          alt="From photo to video. Ready for Reels and TikTok."
          className="v5-motion-img" 
        />
        <div className="v5-motion-elevator-scrim" />
      </div>

      {/* Screen-reader accessible heading without duplicate visual overlay */}
      <h2 className="v5-sr-only">
        From photo to video. Ready for Reels and TikTok.
      </h2>
    </section>
  );
}
