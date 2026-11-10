import React from 'react';
import './MotionV6.css';

export default function MotionV6({ id = 'motion' }) {
  return (
    <section className="v6-motion-section" id={id}>
      {/* Background Elevator Scene matching the reference recording and screenshot */}
      <div className="v6-motion-bg">
        <img 
          src="/images/v6-elevator.jpg" 
          alt="From photo to video. Ready for Reels and TikTok."
          className="v6-motion-img" 
        />
        <div className="v6-motion-elevator-scrim" />
      </div>

      {/* Screen-reader accessible heading without duplicate visual overlay */}
      <h2 className="v6-sr-only">
        From photo to video. Ready for Reels and TikTok.
      </h2>
    </section>
  );
}
