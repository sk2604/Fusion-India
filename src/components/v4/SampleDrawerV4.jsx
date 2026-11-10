import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ShieldCheck, Check } from 'lucide-react';
import './SampleDrawerV4.css';

export default function SampleDrawerV4({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    category: 'DENIM & OUTERWEAR',
    moq: '500 - 2,500 PCS',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      <div className="drawer-v4-backdrop" onClick={onClose}>
        <motion.div 
          className="drawer-v4-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="drawer-v4-topbar">
            <div className="drawer-badge">
              <ShieldCheck size={14} className="text-white" />
              <span>FUSION INDIA SOURCING INTAKE</span>
            </div>
            <button 
              type="button" 
              className="drawer-close-btn"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Content */}
          <div className="drawer-v4-body">
            {!submitted ? (
              <>
                <div className="drawer-head">
                  <h2>Request Sourcing Intake & Swatches</h2>
                  <p>
                    Connect directly with our 40,000 sq.ft Gurugram manufacturing campus. 
                    Receive physical master prototypes, fabric swatch cards, and FOB costings within 72 hours.
                  </p>
                </div>

                <form className="drawer-form" onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>YOUR NAME</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Henrik Lindqvist"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>FASHION BRAND / BUYING HOUSE</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Atelier Stockholm"
                      value={formData.brand}
                      onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>CORPORATE WORK EMAIL</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="henrik@atelierstockholm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>PRIMARY PRODUCT DIVISION</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="DENIM & OUTERWEAR">Circular Denim & Selvedge Outerwear</option>
                      <option value="WOMEN’S ATELIER">Women's Atelier Silks & Contemporary Dresses</option>
                      <option value="MEN’S TAILORING">Men's Sartorial Wool & Suiting</option>
                      <option value="LEATHER GOODS">Tuscan Leather Totes & Handbags</option>
                      <option value="ORGANIC COTTON">GOTS Organic Cotton Essentials & Fleece</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>ESTIMATED PRODUCTION VOLUME (PER STYLE)</label>
                    <select 
                      value={formData.moq}
                      onChange={(e) => setFormData({...formData, moq: e.target.value})}
                    >
                      <option value="150 - 500 PCS">150 - 500 pcs (Capsule Sampling)</option>
                      <option value="500 - 2,500 PCS">500 - 2,500 pcs (Standard Production)</option>
                      <option value="2,500 - 10,000 PCS">2,500 - 10,000 pcs (Commercial Scale)</option>
                      <option value="10,000+ PCS">10,000+ pcs (Enterprise Volume)</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>PRODUCTION REQUIREMENTS OR TARGET FOB PRICING</label>
                    <textarea 
                      rows={3}
                      placeholder="Specify fabric weights, target delivery season, or specific mill certifications..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="drawer-submit-btn">
                    <span>TRANSMIT BRIEF TO GURUGRAM HQ</span>
                    <Send size={15} />
                  </button>

                  <div className="drawer-guarantee">
                    <ShieldCheck size={14} className="text-white" />
                    <span>STRICT NON-DISCLOSURE (NDA) & DIRECT AUDITED MILL TRACEABILITY</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="drawer-success">
                <div className="success-icon-wrap">
                  <Check size={32} />
                </div>
                <h3>Sourcing Intake Registered</h3>
                <p>
                  Thank you, {formData.name}. Your specifications for <strong>{formData.brand}</strong> have 
                  been routed directly to our Chief Sourcing Officer at the Gurugram Campus.
                </p>
                <span className="success-node">FUSION INDIA // GURUGRAM CAMPUS DISPATCH CONFIRMED</span>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
