import React, { useState } from 'react';
import './BloomingGarmentV5.css';

const surroundingShots = [
  {
    id: 1,
    title: 'Runway Walk',
    role: 'Top Center',
    posClass: 'pos-top-center',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Studio Lookbook',
    role: 'Top Right',
    posClass: 'pos-top-right',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Editorial Campaign',
    role: 'Right',
    posClass: 'pos-right',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Atelier Interior',
    role: 'Bottom Center',
    posClass: 'pos-bottom-center',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Crouch & Hardware',
    role: 'Bottom Left',
    posClass: 'pos-bottom-left',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Front Fitting Spec',
    role: 'Left',
    posClass: 'pos-left',
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop'
  }
];

export default function BloomingGarmentV5({ id = 'blooming', onSelectShot }) {
  const [activeShot, setActiveShot] = useState(null);

  return (
    <section className="v5-dot-grid v5-blooming-section" id={id}>
      <div className="v5-container v5-px v5-blooming-container">
        
        {/* The Blooming Circular Stage (Desktop) */}
        <div className="v5-blooming-stage">
          
          {/* Center Statement with Packshot Icon (Matching 00:16 in video) */}
          <div className="v5-blooming-center-statement">
            <p className="subheadline text-white text-center">
              <span>From your tech pack</span>{' '}
              <span className="v5-packshot-capsule">
                <img 
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=300&auto=format&fit=crop" 
                  alt="Approved Tech Pack Sample" 
                  className="v5-packshot-thumb"
                />
              </span>{' '}
              <span>to an entire verified production run. In weeks.</span>
            </p>
          </div>

          {/* 6 Blooming Photos Surrounding Center */}
          <div className="v5-blooming-orbit-grid">
            {surroundingShots.map((shot) => (
              <div 
                key={shot.id} 
                className={`v5-bloom-card ${shot.posClass} ${activeShot === shot.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveShot(shot.id)}
                onMouseLeave={() => setActiveShot(null)}
                onClick={() => onSelectShot && onSelectShot(shot)}
              >
                <div className="v5-bloom-card-inner">
                  <img 
                    src={shot.img} 
                    alt={shot.title} 
                    className="v5-bloom-img"
                  />
                  <span className="v5-bloom-tag">{shot.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

