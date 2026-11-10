import React from 'react';
import { ShieldCheck, Award, CheckCircle, Sparkles } from 'lucide-react';
import './BrandTrustV4.css';

const brandLogos = [
  'ZARA', 'H&M GROUP', 'MANGO', 'COS', 'ACNE STUDIOS', 
  'TOMMY HILFIGER', 'MASSIMO DUTTI', 'SELECTED HOMME', 'ARKET'
];

const certifications = [
  { name: 'SEDEX SMETA', desc: '4-Pillar Ethical & Labour Audit' },
  { name: 'GOTS ORGANIC', desc: 'Global Organic Textile Standard' },
  { name: 'OEKO-TEX 100', desc: 'Harmful Substance Tested' },
  { name: 'BSCI AMFORI', desc: 'Social Compliance Audited' },
  { name: 'ISO 9001:2015', desc: 'Quality Management System' }
];

export default function BrandTrustV4() {
  return (
    <section className="trust-v4">
      <div className="container trust-v4-container">
        
        {/* Core Slogan Banner */}
        <div className="slogan-card">
          <span className="slogan-kicker">THE FUSION INDIA CREDO</span>
          <h2 className="slogan-quote">
            "The Right Product — The Right Price — The Right Performance."
          </h2>
          <p className="slogan-author">
            FUSION INDIA // EST. 1998 // GURUGRAM CAMPUS
          </p>
        </div>

        {/* Brand Logos Infinite Marquee */}
        <div className="trust-marquee-wrap">
          <span className="marquee-label">TRUSTED BY TIER-1 GLOBAL APPAREL BUYING HOUSES</span>
          
          <div className="trust-marquee">
            <div className="marquee-track">
              {brandLogos.concat(brandLogos).map((b, i) => (
                <div key={i} className="brand-logo-unit">
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certification Badges Grid */}
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <div key={i} className="cert-card">
              <div className="cert-icon-wrap">
                <ShieldCheck size={20} className="text-emerald" />
              </div>
              <div className="cert-info">
                <strong>{c.name}</strong>
                <span>{c.desc}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
