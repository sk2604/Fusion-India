import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import './GlobalReachV3.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const hubs = [
  {
    id: 'na',
    name: "NORTH AMERICA",
    coordinates: [-95.7129, 37.0902],
    boxX: -130,
    boxY: -30,
    boxWidth: 120,
    lineX: -8,
    lineY: -8,
    isHQ: false
  },
  {
    id: 'de',
    name: "GERMANY",
    coordinates: [10.4515, 51.1657],
    boxX: -95,
    boxY: 10,
    boxWidth: 85,
    lineX: -6,
    lineY: 6,
    isHQ: false
  },
  {
    id: 'sca',
    name: "SCANDINAVIA",
    coordinates: [14.3986, 61.6422],
    boxX: 16,
    boxY: -26,
    boxWidth: 100,
    lineX: 10,
    lineY: -6,
    isHQ: false
  },
  {
    id: 'in',
    name: "★ INDIA (HQ)",
    coordinates: [78.9629, 20.5937],
    boxX: 18,
    boxY: -8,
    boxWidth: 110,
    lineX: 12,
    lineY: 0,
    isHQ: true
  }
];

export default function GlobalReachV3({ theme = 'light' }) {
  const isDark = theme === 'dark';

  return (
    <section className={`reach-v3-root ${isDark ? 'reach-v3-dark' : 'reach-v3-light'}`} id="reach">
      <div className="container reach-v3-container">
        <div className="reach-v3-split-grid">
          
          {/* Left Column: Haute-Couture Typography & Numbers */}
          <div className="reach-v3-left-col">
            <span className="reach-v3-eyebrow">GLOBAL FOOTPRINT & ATELIER</span>
            <h2 className="reach-v3-heading">
              OUR REACH<span className="reach-v3-red-dot">.</span>
            </h2>
            <p className="reach-v3-body">
              Operating across Scandinavia, Germany, North America, and our manufacturing core in India — bridging European design discipline with audited ethical scale.
            </p>
            
            <div className="reach-v3-stats-row">
              <div className="reach-v3-stat-item">
                <h4 className="reach-v3-stat-num">04<sup>+</sup></h4>
                <span className="reach-v3-stat-label">STRATEGIC HUBS</span>
              </div>
              <div className="reach-v3-stat-sep" />
              <div className="reach-v3-stat-item">
                <h4 className="reach-v3-stat-num">20<sup>+</sup></h4>
                <span className="reach-v3-stat-label">GLOBAL MARKETS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Luxury World Map */}
          <div className="reach-v3-right-col">
            <div className="reach-v3-map-wrapper">
              <ComposableMap
                projectionConfig={{ scale: 165, center: [0, 20] }}
                width={800}
                height={420}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        // Refined warm stone greige in Light mode, sleek charcoal in Dark mode
                        fill={isDark ? '#1a1a1d' : '#e5e3dc'}
                        stroke={isDark ? '#2a2a30' : '#cfccc3'}
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none", transition: 'fill 0.3s ease' },
                          hover: { fill: isDark ? '#26262b' : '#dedad0', outline: "none" },
                          pressed: { outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>

                {hubs.map((m) => (
                  <Marker key={m.id} coordinates={m.coordinates}>
                    {/* Pulsing Beacon Wave */}
                    <circle
                      r={m.isHQ ? 7 : 5}
                      className={m.isHQ ? "reach-pulse-hq" : (isDark ? "reach-pulse-dark" : "reach-pulse-light")}
                    />

                    {/* Solid Core Dot with Inner Contrast */}
                    <circle
                      r={m.isHQ ? 4 : 3}
                      fill={m.isHQ ? '#e50914' : (isDark ? '#ffffff' : '#0a0a0a')}
                    />
                    <circle
                      r={1.2}
                      fill="#ffffff"
                    />

                    {/* Hairline Pointer */}
                    <line
                      x1={0}
                      y1={0}
                      x2={m.lineX}
                      y2={m.lineY}
                      stroke={m.isHQ ? '#e50914' : (isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.35)')}
                      strokeWidth={0.8}
                      strokeDasharray="2,2"
                    />

                    {/* High-End Floating Capsule Badge */}
                    <g transform={`translate(${m.boxX}, ${m.boxY})`}>
                      <rect
                        x="0"
                        y="0"
                        width={m.boxWidth}
                        height="22"
                        rx="4"
                        fill={m.isHQ ? '#e50914' : (isDark ? '#141416' : '#ffffff')}
                        stroke={m.isHQ ? '#e50914' : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)')}
                        strokeWidth="0.8"
                        className={m.isHQ ? "hq-box-shadow" : "card-box-shadow"}
                      />
                      <text
                        x={m.boxWidth / 2}
                        y="12"
                        textAnchor="middle"
                        fill={m.isHQ ? '#ffffff' : (isDark ? '#f5f5f5' : '#0a0a0a')}
                        className={m.isHQ ? "reach-badge-text-hq" : "reach-badge-text"}
                      >
                        {m.name}
                      </text>
                    </g>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
