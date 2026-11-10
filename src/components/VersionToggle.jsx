import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './VersionToggle.css';

export default function VersionToggle() {
  const location = useLocation();
  const path = location.pathname;

  const isV6 = path === '/v6';
  const isV5 = path === '/v5';
  const isV4 = path === '/v4' || path === '/grace';
  const isV3 = path === '/v3' || path === '/white';
  const isV2 = path === '/v2' || path === '/dark2' || path === '/';
  const isV1 = path === '/v1' || path === '/old';

  return (
    <div className="version-toggle-container">
      <div className="version-toggle-bar">
        <span className="vt-label">DESIGN:</span>
        <Link
          to="/v6"
          className={`vt-pill ${isV6 ? 'active' : ''}`}
          title="V6: Active Development & Customizations"
        >
          V6
        </Link>
        <Link
          to="/v5"
          className={`vt-pill ${isV5 ? 'active' : ''}`}
          title="V5: Grace Editorial Recording Baseline"
        >
          V5
        </Link>
        <Link
          to="/v4"
          className={`vt-pill ${isV4 ? 'active' : ''}`}
          title="V4: Grace Editorial Minimal"
        >
          V4
        </Link>
        <Link
          to="/v3"
          className={`vt-pill ${isV3 ? 'active' : ''}`}
          title="V3: White Luxury Fashion House"
        >
          V3
        </Link>
        <Link
          to="/"
          className={`vt-pill ${isV2 ? 'active' : ''}`}
          title="V2: Dark Luxury Editorial"
        >
          V2
        </Link>
        <Link
          to="/v1"
          className={`vt-pill ${isV1 ? 'active' : ''}`}
          title="V1: Original Atelier Clothes Rack"
        >
          V1
        </Link>
      </div>
    </div>
  );
}
