import React from 'react';
import './GraceFAQ.css';

const faqs = [
  {
    q: 'What apparel categories does Fusion India manufacture?',
    a: 'We specialize in tailored outerwear (wool coats, trench coats), men’s and women’s tailoring (jackets, trousers), circular organic denim, heavyweight knitted jersey, fine silk garments, and handcrafted leather accessories across our audited Gurugram campus and certified tier-1 mills.'
  },
  {
    q: 'What are your Minimum Order Quantities (MOQs)?',
    a: 'Our flexible structure allows 300 to 500 units per style/colorway for specialized outerwear and tailoring, scaling seamlessly to 50,000+ units for seasonal retail rollouts and basic programs.'
  },
  {
    q: 'Can you source certified organic and sustainable fabrics?',
    a: 'Yes. Over 70% of our production runs utilize GOTS-certified organic cotton, BCI cotton, OEKO-TEX Standard 100 dyes, European linen, and recycled wool with complete traceability documentation.'
  },
  {
    q: 'What is the standard turnaround time for samples and production?',
    a: 'Proto-samples and fit garments are completed within 10–14 business days from tech-pack submission. Production bulk lead time is typically 60–90 days depending on fabric milling, with expedited air-freight options available.'
  },
  {
    q: 'Which factory social and technical audits do you maintain?',
    a: 'Our facilities and Tier-1 mill partners hold active Sedex SMETA 4-Pillar, BSCI Grade-A, ISO 9001/14001, and GOTS certifications, fully compliant with stringent EU Corporate Sustainability Due Diligence (CSDDD) rules.'
  },
  {
    q: 'Do you deliver on DDP terms to European distribution centers?',
    a: 'Yes. We offer complete DDP (Delivered Duty Paid) service. We handle all Indian customs export, sea/air shipping, EU import clearance, tariff payment, and palletized dock delivery direct to your warehouse in Germany, Scandinavia, or the UK.'
  }
];

export default function GraceFAQ() {
  return (
    <section className="page-surface grace-faq-section" id="faq">
      <div className="grace-container grace-px grace-py-large">
        
        {/* 2 Column Sticky Layout */}
        <div className="grace-faq-grid">
          
          {/* Left Sticky Column */}
          <div className="grace-faq-col-left">
            <div className="grace-faq-sticky">
              <h2 className="headline-large text-black">
                Direct apparel sourcing & manufacturing.
              </h2>
              <p className="body-default text-neutral-500 mt-5 max-w-[40ch]">
                Everything European fashion houses, retail groups, and D2C brands verify prior to placing production purchase orders.
              </p>
            </div>
          </div>

          {/* Right Accordion Column */}
          <div className="grace-faq-col-right">
            <div className="grace-accordion-wrap">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group grace-faq-item">
                  <summary className="grace-faq-summary">
                    <span className="body-large font-medium text-black">
                      {faq.q}
                    </span>
                    <span className="grace-faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="body-default text-neutral-500 grace-faq-answer">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>

        {/* 3 Sourcing Division Cards Below FAQ */}
        <div className="grace-faq-bottom-cards">
          
          <div className="grace-faq-card">
            <h3 className="headline-small text-black">
              Tailored Outerwear & Suits
            </h3>
            <p className="body-small text-neutral-500 mt-3">
              Double-face wool, half-canvas jackets, trench coats, and custom horn/metal hardware for premium European labels.
            </p>
          </div>

          <div className="grace-faq-card">
            <h3 className="headline-small text-black">
              Organic Knits & Fine Jersey
            </h3>
            <p className="body-small text-neutral-500 mt-3">
              GOTS certified loopback fleece, combed single-jersey, and pure mulberry silk blouses engineered for zero torquing.
            </p>
          </div>

          <div className="grace-faq-card">
            <h3 className="headline-small text-black">
              Circular Denim & Leather
            </h3>
            <p className="body-small text-neutral-500 mt-3">
              Shuttle-loomed selvedge denim with low-impact ozone washing and vegetable-tanned Tuscan calfskin accessories.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
