import React from 'react';
import './OfficeGalleryV1.css';

const images = [
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
];

export default function OfficeGalleryV1() {
  return (
    <section className="office-section-v1">
      <div className="container">
        <h2 className="text-title mb-4 text-center">HEAD OFFICE.</h2>
        <p className="text-caption text-center mb-8" style={{ color: 'var(--gray)' }}>
          Udyog Vihar, Sector 20, Gurgaon
        </p>

        <div className="office-grid-v1">
          {images.map((img, i) => (
            <div key={i} className={`office-img-wrapper-v1 item-${i}`}>
              <img src={img} alt={`Infrastructure ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

