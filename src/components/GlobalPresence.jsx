import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import './GlobalPresence.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const hubs = [
  {
    id: 'na',
    name: 'North America',
    role: 'Retail & Distribution Partners',
    detail: 'Strategic retail accounts and fulfillment channels across USA and Canada.',
    coordinates: [-95.7129, 37.0902],
    boxX: -145,
    boxY: -38,
    boxWidth: 135,
    lineX: -10,
    lineY: -8,
    isHQ: false,
  },
  {
    id: 'de',
    name: 'Germany',
    role: 'European Logistics & Sourcing',
    detail: 'Central European logistics node ensuring rapid warehousing and delivery.',
    coordinates: [10.4515, 51.1657],
    boxX: -145,
    boxY: -10,
    boxWidth: 135,
    lineX: -10,
    lineY: 0,
    isHQ: false,
  },
  {
    id: 'sca',
    name: 'Scandinavia',
    role: 'Design & Sourcing Hub',
    detail: 'Nordic design partnerships, seasonal forecasting, and brand relations.',
    coordinates: [14.3986, 61.6422],
    boxX: 20,
    boxY: -35,
    boxWidth: 135,
    lineX: 15,
    lineY: -8,
    isHQ: false,
  },
  {
    id: 'in',
    name: 'India (HQ)',
    role: 'Manufacturing & QA Powerhouse',
    detail: 'Corporate headquarters, QA testing labs, and 500+ factory audit network.',
    coordinates: [78.9629, 20.5937],
    boxX: 22,
    boxY: -10,
    boxWidth: 145,
    lineX: 16,
    lineY: 0,
    isHQ: true,
  },
];

export default function GlobalPresence() {
  const [activeHub, setActiveHub] = useState('in');

  return (
    <section className="presence-section">
      <div className="container">
        
        {/* ── 1. Top Section Header ── */}
        <div className="presence-header">
          <div className="presence-header-left">
            <div className="presence-eyebrow">
              <span className="eyebrow-dot" />
              <span>GLOBAL FOOTPRINT & LOGISTICS</span>
            </div>
            <h2 className="presence-main-title">
              OUR REACH<span className="title-dot">.</span>
            </h2>
          </div>
          <div className="presence-header-right">
            <p className="presence-subtext">
              Direct operations connecting European and North American retail partners to precision manufacturing hubs across the Indian subcontinent.
            </p>
          </div>
        </div>

        {/* ── 2. Full Map with Direct Visible Callouts ── */}
        <div className="presence-map-wrapper">
          <ComposableMap
            projectionConfig={{ scale: 165, center: [10, 25] }}
            width={820}
            height={420}
            className="presence-svg-map"
          >
            {/* World Landmasses */}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#151518"
                    stroke="#232328"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#1d1d22', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Strategic Pins with Permanent Readable Labels */}
            {hubs.map((hub) => (
              <Marker
                key={hub.id}
                coordinates={hub.coordinates}
                onClick={() => setActiveHub(hub.id)}
                className="map-marker-group"
              >
                {/* Subtle Beacon Ping Wave */}
                <circle
                  r={hub.isHQ ? 11 : 8}
                  className="pulse-wave"
                />

                {/* Core Dot */}
                <circle
                  r={hub.isHQ ? 4 : 3}
                  fill="#F3F3F0"
                />
                <circle r={1.2} fill="#09090B" />

                {/* Connecting Line */}
                <line
                  x1={0}
                  y1={0}
                  x2={hub.lineX}
                  y2={hub.lineY}
                  stroke="rgba(243, 243, 240, 0.4)"
                  strokeWidth={0.8}
                  strokeDasharray="2,2"
                />

                {/* Permanent Callout Card Directly on the Map */}
                <g
                  transform={`translate(${hub.boxX}, ${hub.boxY})`}
                  className={`map-callout-card ${activeHub === hub.id ? 'active' : ''}`}
                >
                  <rect
                    x="0"
                    y="0"
                    width={hub.boxWidth}
                    height="32"
                    rx="2"
                    fill="rgba(18, 18, 22, 0.94)"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="0.8"
                  />
                  {/* Subtle left bar */}
                  <rect
                    x="0"
                    y="0"
                    width="2.5"
                    height="32"
                    fill="rgba(243, 243, 240, 0.6)"
                  />

                  {/* Location Title */}
                  <text
                    x="9"
                    y="13"
                    fill="#F3F3F0"
                    className="map-callout-title"
                  >
                    {hub.name.toUpperCase()}
                  </text>

                  {/* Role / Subtitle */}
                  <text
                    x="9"
                    y="24"
                    fill="#8E8E95"
                    className="map-callout-subtitle"
                  >
                    {hub.role.toUpperCase()}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* ── 3. Bottom Row: Stats & Strategic Hub Strip ── */}
        <div className="presence-bottom-bar">
          
          {/* Key Metrics */}
          <div className="presence-stats-column">
            <div className="presence-stat-box">
              <span className="stat-giant">04+</span>
              <span className="stat-desc">Strategic Global Hubs</span>
            </div>
            <div className="stat-divider-vert" />
            <div className="presence-stat-box">
              <span className="stat-giant">20+</span>
              <span className="stat-desc">International Markets</span>
            </div>
            <div className="stat-divider-vert" />
            <div className="presence-stat-box">
              <span className="stat-giant">100%</span>
              <span className="stat-desc">Quality Audit Assurance</span>
            </div>
          </div>

          {/* Interactive 4-Hub Switcher */}
          <div className="presence-hubs-grid">
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className={`hub-card ${activeHub === hub.id ? 'active' : ''}`}
                onClick={() => setActiveHub(hub.id)}
              >
                <div className="hub-card-top">
                  <span className="hub-dot" />
                  <span className="hub-card-name">{hub.name}</span>
                  {hub.isHQ && <span className="hub-badge-hq">HQ</span>}
                </div>
                <div className="hub-card-role">{hub.role}</div>
                <p className="hub-card-detail">{hub.detail}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
