import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const addHoverEffect = () => setHovered(true);
    const removeHoverEffect = () => setHovered(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const handleHoverElements = () => {
      const elements = document.querySelectorAll('a, button, input, textarea, .interactive');
      elements.forEach((el) => {
        el.addEventListener('mouseenter', addHoverEffect);
        el.addEventListener('mouseleave', removeHoverEffect);
      });
    };

    handleHoverElements();

    // Re-bind when DOM changes
    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        className={`custom-cursor-dot ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-ring ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
