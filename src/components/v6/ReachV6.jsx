import React, { useState, useEffect, useRef } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import createGlobe from 'cobe';
import './ReachV6.css';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const hubs = [
  {
    id: 'in',
    name: 'India (HQ)',
    city: 'Gurugram',
    role: 'Manufacturing & QA Powerhouse',
    detail: 'Corporate headquarters, QA testing labs, and 500+ audited factory network across Tirupur, Noida & Jaipur.',
    coordinates: [78.9629, 20.5937],
    boxX: 18,
    boxY: -10,
    boxWidth: 155,
    lineX: 12,
    lineY: 0,
    isHQ: true,
    phi: 1.35
  },
  {
    id: 'de',
    name: 'Germany',
    city: 'Hamburg',
    role: 'European Logistics & Sourcing',
    detail: 'Central European logistics node ensuring rapid warehousing, customs clearance, and duty-paid dock delivery.',
    coordinates: [10.4515, 51.1657],
    boxX: -155,
    boxY: -10,
    boxWidth: 145,
    lineX: -10,
    lineY: 0,
    isHQ: false,
    phi: 0.18
  },
  {
    id: 'sca',
    name: 'Scandinavia',
    city: 'Copenhagen',
    role: 'Design & Sourcing Hub',
    detail: 'Nordic design partnerships, seasonal forecasting, and technical buyer relations across Sweden, Denmark & Norway.',
    coordinates: [14.3986, 61.6422],
    boxX: 20,
    boxY: -35,
    boxWidth: 145,
    lineX: 14,
    lineY: -8,
    isHQ: false,
    phi: 0.25
  },
  {
    id: 'na',
    name: 'North America',
    city: 'New York',
    role: 'Retail & Distribution Partners',
    detail: 'Strategic retail accounts, replenishment logistics, and fulfillment channels across USA and Canada.',
    coordinates: [-95.7129, 37.0902],
    boxX: -155,
    boxY: -35,
    boxWidth: 145,
    lineX: -10,
    lineY: -8,
    isHQ: false,
    phi: 4.8
  }
];

export default function ReachV6({ id = 'reach' }) {
  const [activeHub, setActiveHub] = useState('in');
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState('auto'); // 'auto', 'map', 'globe'
  const canvasRef = useRef(null);
  const globeInstanceRef = useRef(null);
  const targetPhiRef = useRef(1.35);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 860;
      setIsMobile(mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showGlobe = viewMode === 'globe' || (viewMode === 'auto' && isMobile);

  // ─── 3D COBE GLOBE ENGINE (FOR MOBILE & 3D MODE) ───
  useEffect(() => {
    if (!showGlobe || !canvasRef.current) return;

    let phi = targetPhiRef.current;
    let width = 0;
    let pointerInteracting = null;
    let pointerInteractionMovement = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    onResize();
    window.addEventListener('resize', onResize);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(2, window.devicePixelRatio || 1),
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 4.5,
      baseColor: [0.12, 0.12, 0.14],
      markerColor: [1, 0.2, 0.2],
      glowColor: [0.08, 0.08, 0.1],
      markers: [
        { location: [20.5937, 78.9629], size: 0.09 }, // India HQ
        { location: [51.1657, 10.4515], size: 0.06 }, // Germany
        { location: [61.6422, 14.3986], size: 0.06 }, // Scandinavia
        { location: [37.0902, -95.7129], size: 0.06 }  // North America
      ],
      onRender: (state) => {
        // Smoothly auto-rotate or rotate towards target
        if (pointerInteracting === null) {
          phi += 0.0035;
        } else {
          phi += pointerInteractionMovement;
          pointerInteractionMovement = 0;
        }
        state.phi = phi;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    globeInstanceRef.current = globe;

    const canvas = canvasRef.current;
    const handlePointerDown = (e) => {
      pointerInteracting = e.clientX;
    };
    const handlePointerMove = (e) => {
      if (pointerInteracting !== null) {
        const delta = e.clientX - pointerInteracting;
        pointerInteractionMovement = delta * 0.005;
        pointerInteracting = e.clientX;
      }
    };
    const handlePointerUp = () => {
      pointerInteracting = null;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [showGlobe]);

  const handleSelectHub = (hubId) => {
    setActiveHub(hubId);
    const target = hubs.find(h => h.id === hubId);
    if (target && target.phi) {
      targetPhiRef.current = target.phi;
    }
  };

  return (
    <section className="v6-page-surface-dark v6-reach-section" id={id} data-nav-theme="dark">
      <div className="v6-container v6-px">
        
        {/* ─── 1. SECTION HEADER (V1 STYLE: BOLD, VISIBLE, EDITORIAL) ─── */}
        <div className="v6-reach-header">
          <div className="v6-reach-header-left">
            <div className="v6-reach-eyebrow">
              <span className="v6-eyebrow-dot" />
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

            {/* Mode Switcher Toggle */}
            <div className="v6-reach-view-toggle">
              <button 
                type="button"
                className={`v6-toggle-btn ${!showGlobe ? 'active' : ''}`}
                onClick={() => setViewMode('map')}
              >
                🗺️ Logistics Map
              </button>
              <button 
                type="button"
                className={`v6-toggle-btn ${showGlobe ? 'active' : ''}`}
                onClick={() => setViewMode('globe')}
              >
                🌐 3D Globe
              </button>
            </div>
          </div>
        </div>

        {/* ─── 2A. 2D HIGH-CONTRAST LOGISTICS MAP (DESKTOP V1 STYLE) ─── */}
        {!showGlobe ? (
          <div className="v6-reach-map-wrapper">
            <ComposableMap
              projectionConfig={{ scale: 175, center: [12, 25] }}
              width={820}
              height={420}
              className="v6-presence-svg-map"
            >
              {/* World Landmasses */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#141418"
                      stroke="#222228"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#1b1b22', outline: 'none' },
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
                  onClick={() => handleSelectHub(hub.id)}
                  className="v6-map-marker-group"
                >
                  {/* Subtle Beacon Ping Wave */}
                  <circle
                    r={hub.isHQ ? 11 : 8}
                    className={hub.isHQ ? "v6-pulse-hq" : "v6-pulse-sub"}
                  />

                  {/* Core Dot */}
                  <circle
                    r={hub.isHQ ? 4.5 : 3.5}
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

                  {/* Permanent Callout Card with High-Contrast Text */}
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
                      fill={activeHub === hub.id ? "rgba(22, 22, 28, 0.98)" : "rgba(16, 16, 20, 0.94)"}
                      stroke={hub.isHQ ? "#e50914" : activeHub === hub.id ? "#ffffff" : "rgba(255, 255, 255, 0.2)"}
                      strokeWidth={hub.isHQ || activeHub === hub.id ? "1.2" : "0.8"}
                      filter="drop-shadow(0 4px 12px rgba(0,0,0,0.4))"
                    />
                    
                    {/* Color Accent Bar */}
                    <rect
                      x="0"
                      y="0"
                      width="3"
                      height="34"
                      fill={hub.isHQ ? "#e50914" : "#ffffff"}
                    />

                    {/* Location Title */}
                    <text
                      x="11"
                      y="14"
                      fill="#ffffff"
                      className="v6-map-callout-title"
                    >
                      {hub.name.toUpperCase()}
                    </text>

                    {/* Role / Subtitle */}
                    <text
                      x="11"
                      y="26"
                      fill="#999999"
                      className="v6-map-callout-subtitle"
                    >
                      {hub.role.toUpperCase()}
                    </text>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        ) : (
          /* ─── 2B. 3D INTERACTIVE 360° COBE GLOBE (FOR MOBILE & 3D VIEW) ─── */
          <div className="v6-reach-globe-wrapper">
            <div className="v6-globe-canvas-container">
              <canvas
                ref={canvasRef}
                className="v6-cobe-canvas"
              />
              <div className="v6-globe-drag-hint">
                <span>👆 Drag to spin 360°</span>
              </div>
            </div>
          </div>
        )}

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
                onClick={() => handleSelectHub(hub.id)}
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
