import React, { useState } from 'react';
import './OfficeGallery.css';

// Demo building exterior (360 feel)
const buildingImg = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop';

// Head office interior gallery
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    caption: 'Main Floor'
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    caption: 'Collaboration Zone'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    caption: 'Design Studio'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    caption: 'Sample Room'
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop',
    caption: 'Executive Lounge'
  },
  {
    src: 'https://images.unsplash.com/photo-1517502884422-a509f0e63e51?q=80&w=2070&auto=format&fit=crop',
    caption: 'QA Lab'
  },
];

export default function OfficeGallery() {
  const [entered, setEntered] = useState(false);
  const [lightbox, setLightbox] = useState(null); // index of open image

  return (
    <section className="office-section">
      <div className="container">
        <div className="office-header">
          <span className="office-eyebrow">Udyog Vihar, Sector 20, Gurgaon</span>
          <h2 className="text-title">HEAD OFFICE.</h2>
        </div>

        {/* Building exterior — click to enter */}
        <div
          className={`building-wrap ${entered ? 'building-entered' : ''}`}
          onClick={() => setEntered(true)}
          title="Click to explore inside"
        >
          <img src={buildingImg} alt="Fusion India Head Office" className="building-img" />
          <div className="building-overlay">
            {!entered ? (
              <div className="building-cta">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                  <path d="M17 13l7 7-7 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>EXPLORE INSIDE</span>
              </div>
            ) : (
              <div className="building-entered-hint">
                <span>FUSION INDIA — HEAD OFFICE</span>
              </div>
            )}
          </div>
        </div>

        {/* Gallery grid — visible after entering */}
        <div className={`office-gallery-grid ${entered ? 'gallery-visible' : ''}`}>
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="gallery-cell"
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.caption} />
              <div className="gallery-cell-overlay">
                <span>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {entered && (
          <button className="office-back-btn" onClick={() => setEntered(false)}>
            ← Back to Exterior
          </button>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="office-lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button
            className="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
          >‹</button>
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[lightbox].src} alt={galleryImages[lightbox].caption} />
            <p className="lightbox-caption">{galleryImages[lightbox].caption}</p>
          </div>
          <button
            className="lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
          >›</button>
        </div>
      )}
    </section>
  );
}
