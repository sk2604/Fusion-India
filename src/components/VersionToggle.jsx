import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './VersionToggle.css';

export default function VersionToggle() {
  const location = useLocation();
  const path = location.pathname;

  const isV5 = path === '/v5';
  const isV4 = path === '/v4' || path === '/grace';
  const isV1 = path === '/v1' || path === '/old';
  const isV2 = path === '/v2';
  const isV3 = path === '/v3' || path === '/white';
  const isDark2 = !isV1 && !isV2 && !isV3 && !isV4 && !isV5; // Default is / or /dark2

  return (
    <div className="version-toggle-container">
      <div className="version-toggle-bar">
        <span className="vt-label">DESIGN:</span>
        <Link
          to="/v5"
          className={`vt-pill ${isV5 ? 'active' : ''}`}
          title="V5: Exact Screen Recording Design & Animations"
        >
          🔥 V5 (Recording)
        </Link>
        <Link
          to="/v4"
          className={`vt-pill ${isV4 ? 'active' : ''}`}
          title="V4: Grace Editorial Minimal"
        >
          ✨ V4 (Grace)
        </Link>
        <Link
          to="/"
          className={`vt-pill ${isDark2 ? 'active' : ''}`}
          title="Dark (2): 100vh Luxury Fashion Editorial"
        >
          Dark (2)
        </Link>
        <Link
          to="/v3"
          className={`vt-pill ${isV3 ? 'active' : ''}`}
          title="V3: White Luxury Fashion House"
        >
          White (V3)
        </Link>
        <Link
          to="/v2"
          className={`vt-pill ${isV2 ? 'active' : ''}`}
          title="V2: Dark Corporate Studio"
        >
          Dark (V2)
        </Link>
        <Link
          to="/v1"
          className={`vt-pill ${isV1 ? 'active' : ''}`}
          title="V1: Original Atelier Clothes Rack"
        >
          Atelier (V1)
        </Link>
      </div>
    </div>
  );
}
