import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import './GlobalReach3D.css';

export default function GlobalReach3D() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    const width = canvasRef.current.offsetWidth;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 4,
      baseColor: [0.15, 0.15, 0.15],
      markerColor: [1, 1, 1],
      glowColor: [0.05, 0.05, 0.05],
      markers: [
        { location: [61.6422, 14.3986], size: 0.05 }, // Scandinavia
        { location: [51.1657, 10.4515], size: 0.05 }, // Germany
        { location: [37.0902, -95.7129], size: 0.05 }, // North America
        { location: [20.5937, 78.9629], size: 0.08 }  // India (HQ)
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <section className="presence-3d-section">
      <div className="container">
        <div className="presence-3d-content">
          <div className="presence-3d-text">
            <h2 className="text-title">OUR REACH <br/> (3D VERSION)</h2>
            <p className="presence-3d-desc">
              Operating across Scandinavia, Germany, North America, and our HQ in India. We bring global standards with local expertise, ensuring seamless sourcing and manufacturing worldwide.
            </p>
            <div className="presence-3d-stats">
              <div className="p-stat">
                <h4>4+</h4>
                <span>Global Hubs</span>
              </div>
              <div className="p-stat">
                <h4>20+</h4>
                <span>Countries Served</span>
              </div>
            </div>
          </div>
          
          <div className="globe-container">
            <canvas
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '600px',
                aspectRatio: '1/1',
                margin: '0 auto',
                display: 'block',
                cursor: 'grab'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
