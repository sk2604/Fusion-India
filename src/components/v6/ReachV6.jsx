import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import './ReachV6.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const hubs = [
  {
    id: 'in',
    name: '★ INDIA (HQ)',
    city: 'GURUGRAM',
    role: 'Manufacturing & QA Powerhouse',
    detail: 'Corporate headquarters, QA testing labs, and 500+ audited factory network across Tirupur, Noida & Jaipur.',
    coordinates: [78.9629, 20.5937],
    boxX: 18,
    boxY: -12,
    boxWidth: 165,
    lineX: 12,
    lineY: 0,
    isHQ: true
  },
  {
    id: 'de',
    name: 'GERMANY',
    city: 'HAMBURG',
    role: 'European Logistics & Sourcing',
    detail: 'Central European logistics node ensuring rapid warehousing, customs clearance, and duty-paid dock delivery.',
    coordinates: [10.4515, 51.1657],
    boxX: -165,
    boxY: -10,
    boxWidth: 155,
    lineX: -10,
    lineY: 0,
    isHQ: false
  },
  {
    id: 'sca',
    name: 'SCANDINAVIA',
    city: 'COPENHAGEN',
    role: 'Design & Sourcing Hub',
    detail: 'Nordic design partnerships, seasonal forecasting, and technical buyer relations across Sweden, Denmark & Norway.',
    coordinates: [14.3986, 61.6422],
    boxX: 20,
    boxY: -35,
    boxWidth: 160,
    lineX: 14,
    lineY: -8,
    isHQ: false
  },
  {
    id: 'na',
    name: 'NORTH AMERICA',
    city: 'NEW YORK',
    role: 'Retail & Distribution Partners',
    detail: 'Strategic retail accounts, replenishment logistics, and fulfillment channels across USA and Canada.',
    coordinates: [-95.7129, 37.0902],
    boxX: -165,
    boxY: -35,
    boxWidth: 160,
    lineX: -10,
    lineY: -8,
    isHQ: false
  }
];

export default function ReachV6({ id = 'reach' }) {
  const [activeHub, setActiveHub] = useState('in');

  return (
    <section className="v6-page-surface-dark v6-reach-section" id={id} data-nav-theme="dark">
      <div className="v6-container v6-px">
        
        {/* ─── 1. SECTION HEADER (V1 EDITORIAL AUTHORITY) ─── */}
        <div className="v6-reach-header">
          <div className="v6-reach-header-left">
            <div className="v6-reach-eyebrow">
              <span className="v6-eyebrow-red-dot" />
              <span>GLOBAL FOOTPRINT & LOGISTICS</span>
            </div>
            <h2 className="v6-reach-main-title">
              OUR REACH<span className="v6-title-dot">.</span>
            </h2>
          </div>

          <div className="v6-reach-header-right">
            <p className="v6-reach-subtext">
              Direct operations connecting European and North American retail partners to precision manufacturing hubs across the Indian subcontinent.
            </p>
          </div>
        </div>

        {/* ─── 2. V1 HIGH-CONTRAST 2D WORLD LOGISTICS MAP (100% VISIBLE LABELS) ─── */}
        <div className="v6-reach-map-wrapper">
          <ComposableMap
            projectionConfig={{ scale: 175, center: [12, 25] }}
            width={840}
            height={430}
            className="v6-presence-svg-map"
          >
            {/* World Landmasses */}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#15151a"
                    stroke="#23232b"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#1d1d24', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Strategic Pins with Permanent High-Visibility Callouts */}
            {hubs.map((hub) => (
              <Marker
                key={hub.id}
                coordinates={hub.coordinates}
                onClick={() => setActiveHub(hub.id)}
                className="v6-map-marker-group"
              >
                {/* Subtle Beacon Ping Wave */}
                <circle
                  r={hub.isHQ ? 11 : 8}
                  className={hub.isHQ ? "v6-pulse-hq" : "v6-pulse-sub"}
                />

                {/* Core Dot */}
                <circle
                  r={hub.isHQ ? 5 : 3.5}
                  fill={hub.isHQ ? '#e50914' : '#ffffff'}
                />
                <circle r={1.2} fill="#09090b" />

                {/* Hairline Connection */}
                <line
                  x1={0}
                  y1={0}
                  x2={hub.lineX}
                  y2={hub.lineY}
                  stroke={hub.isHQ ? '#e50914' : 'rgba(255, 255, 255, 0.5)'}
                  strokeWidth={0.8}
                  strokeDasharray="2,2"
                />

                {/* Permanent Callout Card with High-Contrast Bold Text */}
                <g
                  transform={`translate(${hub.boxX}, ${hub.boxY})`}
                  className={`v6-map-callout-card ${activeHub === hub.id ? 'active' : ''}`}
                >
                  <rect
                    x="0"
                    y="0"
                    width={hub.boxWidth}
                    height="34"
                    rx="3"
                    fill={activeHub === hub.id ? "rgba(22, 22, 28, 0.98)" : "rgba(14, 14, 18, 0.95)"}
                    stroke={hub.isHQ ? "#e50914" : activeHub === hub.id ? "#ffffff" : "rgba(255, 255, 255, 0.22)"}
                    strokeWidth={hub.isHQ || activeHub === hub.id ? "1.2" : "0.8"}
                    filter="drop-shadow(0 4px 12px rgba(0,0,0,0.5))"
                  />
                  
                  {/* Color Accent Bar */}
                  <rect
                    x="0"
                    y="0"
                    width="3.5"
                    height="34"
                    fill={hub.isHQ ? "#e50914" : "#ffffff"}
                  />

                  {/* Location Title (Large, Bold, High Contrast) */}
                  <text
                    x="12"
                    y="14"
                    fill="#ffffff"
                    className="v6-map-callout-title"
                  >
                    {hub.name}
                  </text>

                  {/* Role / Subtitle */}
                  <text
                    x="12"
                    y="26"
                    fill="#a0a0a8"
                    className="v6-map-callout-subtitle"
                  >
                    {hub.role.toUpperCase()}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* ─── 3. STRATEGIC HUBS GRID & METRICS (V1 STYLE: INTERACTIVE CARDS) ─── */}
        <div className="v6-reach-bottom-bar">
          
          {/* Key Metrics Strip */}
          <div className="v6-reach-stats-strip">
            <div className="v6-presence-stat-box">
              <span className="v6-stat-giant">04<sup>+</sup></span>
              <span className="v6-stat-desc">Strategic Global Hubs</span>
            </div>
            <div className="v6-stat-divider-vert" />
            <div className="v6-presence-stat-box">
              <span className="v6-stat-giant">20<sup>+</sup></span>
              <span className="v6-stat-desc">Countries Served</span>
            </div>
            <div className="v6-stat-divider-vert" />
            <div className="v6-presence-stat-box">
              <span className="v6-stat-giant">500<sup>+</sup></span>
              <span className="v6-stat-desc">Audited Tier-1 Mills</span>
            </div>
          </div>

          {/* Interactive 4 Hub Switcher Cards */}
          <div className="v6-presence-hubs-grid">
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className={`v6-hub-card ${activeHub === hub.id ? 'active' : ''}`}
                onClick={() => setActiveHub(hub.id)}
                role="button"
                tabIndex={0}
              >
                <div className="v6-hub-card-top">
                  <span className={`v6-hub-dot ${hub.isHQ ? 'hq' : ''}`} />
                  <span className="v6-hub-card-name">{hub.name}</span>
                  {hub.isHQ && <span className="v6-hub-badge-hq">HQ</span>}
                </div>
                <div className="v6-hub-card-city">{hub.city}</div>
                <div className="v6-hub-card-role">{hub.role}</div>
                <p className="v6-hub-card-detail">{hub.detail}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
