import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, MapPin, Radio, Clock, Plane } from 'lucide-react';
import './ReachTelemetryV4.css';

const globalNodes = [
  {
    id: 'hq',
    code: 'IN-DEL-01',
    name: 'INDIA GLOBAL HQ & ATELIER',
    location: 'Gurugram, Udyog Vihar, Haryana',
    role: 'Central Manufacturing Core & Design Campus',
    area: '40,000 Sq.Ft Campus',
    mills: '500+ Audited Tier-1 Mills',
    leadTime: '72 Hrs Master Sample',
    cert: 'SEDEX SMETA, GOTS, ISO 9001',
    status: 'ACTIVE HQ (LIVE)',
    isHQ: true
  },
  {
    id: 'ger',
    code: 'DE-HAM-02',
    name: 'GERMANY DISTRIBUTION NODE',
    location: 'Hamburg / Munich Logistics Corridor',
    role: 'Central European Warehousing & Customs Clearance',
    area: 'Regional Hub',
    mills: 'Direct Cargo Link',
    leadTime: '48 Hrs Regional Road Freight',
    cert: 'EU CE / REACH Compliant',
    status: 'OPERATIONAL',
    isHQ: false
  },
  {
    id: 'scan',
    code: 'SE-STO-03',
    name: 'SCANDINAVIA DESIGN PARTNERSHIP',
    location: 'Stockholm & Copenhagen Buying Hub',
    role: 'Nordic Brand Alliances & Seasonal Trend Forecasting',
    area: 'Creative Buying Node',
    mills: 'Nordic Retail Partners',
    leadTime: 'Real-Time Sync',
    cert: 'Nordic Swan / GOTS Standards',
    status: 'OPERATIONAL',
    isHQ: false
  },
  {
    id: 'usa',
    code: 'US-NYC-04',
    name: 'NORTH AMERICA FULFILLMENT',
    location: 'New York & Los Angeles Distribution',
    role: 'USA & Canada Retail Accounts & Direct-to-DC',
    area: 'East/West Coast Warehousing',
    mills: 'Major US Retail Partners',
    leadTime: 'Express Air & Sea Freight',
    cert: 'WRAP / Fair Labor Certified',
    status: 'OPERATIONAL',
    isHQ: false
  }
];

export default function ReachTelemetryV4() {
  const [activeNode, setActiveNode] = useState(globalNodes[0]);

  return (
    <section className="reach-v4">
      <div className="container reach-v4-container">
        
        {/* Head */}
        <div className="reach-v4-head">
          <div className="head-left">
            <span className="reach-kicker">GLOBAL TELEMETRY // 04 STRATEGIC HUBS</span>
            <h2 className="reach-title">
              Cross-Continental <em>Supply Grid</em>.
            </h2>
          </div>
          <div className="head-right">
            <div className="live-status-card">
              <span className="live-radar-ping" />
              <span>ALL 4 HUBS LIVE & SYNCHRONIZED</span>
            </div>
          </div>
        </div>

        {/* Interactive Telemetry Dashboard */}
        <div className="reach-dashboard-grid">
          
          {/* Left Column: Interactive Node Selector */}
          <div className="nodes-selector-col">
            <div className="nodes-list">
              {globalNodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={`node-card-btn ${activeNode.id === node.id ? 'active' : ''}`}
                  onClick={() => setActiveNode(node)}
                >
                  <div className="node-btn-top">
                    <span className="node-code">{node.code}</span>
                    {node.isHQ ? (
                      <span className="hq-tag">★ HQ CORE</span>
                    ) : (
                      <span className="node-status-dot" />
                    )}
                  </div>
                  <h4 className="node-btn-title">{node.name}</h4>
                  <span className="node-btn-loc">{node.location}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Node Telemetry Deep-Dive */}
          <div className="node-detail-card">
            <div className="detail-glow" />

            <div className="detail-topbar">
              <div className="topbar-left">
                <span className="detail-node-code">{activeNode.code}</span>
                <span className="detail-sep">//</span>
                <span className="detail-status">{activeNode.status}</span>
              </div>
              <div className="topbar-right">
                <span className="loc-pill">
                  <MapPin size={12} /> {activeNode.location}
                </span>
              </div>
            </div>

            <div className="detail-hero">
              <h3 className="detail-name">{activeNode.name}</h3>
              <p className="detail-role">{activeNode.role}</p>
            </div>

            {/* Metrics 4-Box */}
            <div className="detail-metrics-grid">
              <div className="detail-box">
                <span className="d-label">INFRASTRUCTURE FOOTPRINT</span>
                <strong className="d-val">{activeNode.area}</strong>
              </div>
              <div className="detail-box">
                <span className="d-label">AUDITED NETWORK</span>
                <strong className="d-val text-cyan">{activeNode.mills}</strong>
              </div>
              <div className="detail-box">
                <span className="d-label">LEAD TIME GUARANTEE</span>
                <strong className="d-val text-emerald">{activeNode.leadTime}</strong>
              </div>
              <div className="detail-box">
                <span className="d-label">ETHICAL AUDIT COMPLIANCE</span>
                <strong className="d-val">{activeNode.cert}</strong>
              </div>
            </div>

            {/* Live Operational Status Bar */}
            <div className="detail-footer">
              <div className="footer-channel">
                <Radio size={14} className="text-purple" />
                <span>DIRECT SECURE EDI & ERP DATA LINK TO GURUGRAM ATELIER</span>
              </div>
              <div className="footer-freight">
                <Plane size={14} className="text-cyan" />
                <span>EXPEDITED CUSTOMS CORRIDOR</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

