import React from 'react';
import './FAQV5.css';

const faqs = [
  {
    q: 'What apparel categories does Fusion India manufacture?',
    a: 'We specialize in tailored outerwear (wool coats, trench coats), men’s and women’s tailoring (jackets, trousers), circular organic denim, heavyweight knitted jersey, fine silk garments, and handcrafted leather accessories across our audited Gurugram campus and certified tier-1 mills.'
  },
  {
    q: 'How does an audited production run work from tech pack?',
    a: 'You upload the tech pack and fabric specs. Our Gurugram lab engineers the CAD marker, pattern grading, and completes proto-samples within 10–14 days. Following your golden seal approval, bulk manufacturing is calibrated across audited mills.'
  },
  {
    q: 'Can you source certified organic and sustainable fabrics?',
    a: 'Yes. Over 70% of our production runs utilize GOTS-certified organic cotton, BCI cotton, OEKO-TEX Standard 100 dyes, European linen, and recycled wool with complete traceability documentation.'
  },
  {
    q: 'What are your Minimum Order Quantities (MOQs)?',
    a: 'Our flexible structure accommodates 300 to 500 units per style/colorway for specialized outerwear and tailoring, scaling seamlessly to 50,000+ units for seasonal retail rollouts.'
  },
  {
    q: 'Which factory social and technical audits do you maintain?',
    a: 'Our facilities and Tier-1 mill partners hold active Sedex SMETA 4-Pillar, BSCI Grade-A, ISO 9001/14001, and GOTS certifications, fully compliant with stringent EU Corporate Sustainability Due Diligence (CSDDD) rules.'
  },
  {
    q: 'Do you handle DDP customs clearance and European delivery?',
    a: 'Yes. We offer complete DDP (Delivered Duty Paid) service. We manage Indian export, sea/air shipping, EU import clearance, tariff payment, and palletized dock delivery direct to your warehouse in Germany, Scandinavia, or the UK.'
  }
];

export default function FAQV5({ id = 'faq' }) {
  return (
    <section className="v5-page-surface-white v5-faq-section" id={id}>
      <div className="v5-container v5-px">
        
        {/* 2-Column Sticky Grid matching 00:34-00:35 in video */}
        <div className="v5-faq-grid">
          
          {/* Left Column (Sticky) */}
          <div className="v5-faq-col-left">
            <div className="v5-faq-sticky-box">
              <h2 className="headline-large text-black">
                Direct apparel sourcing for campaigns, lookbooks and retail shops
              </h2>
              <p className="body-default text-neutral-500 mt-5 max-w-[40ch]">
                An atelier sourcing partner for fashion brands: audited garment manufacturing, fabric development, and quality-calibrated container logistics. No middleman agencies, zero batch variance.
              </p>
            </div>
          </div>

          {/* Right Column (Accordion with + rotating to ×) */}
          <div className="v5-faq-col-right">
            <div className="v5-accordion-wrap">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group v5-faq-item">
                  <summary className="v5-faq-summary">
                    <span className="body-large font-medium text-black">
                      {faq.q}
                    </span>
                    <span className="v5-faq-circle-btn" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="body-default text-neutral-500 v5-faq-answer">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>

        {/* 3 Columns Below FAQ matching 00:36 in video */}
        <div className="v5-faq-bottom-3col">
          <div className="v5-bottom-col">
            <h3 className="headline-small text-black">
              Outerwear & Tailoring: Direct from campus
            </h3>
            <p className="body-small text-neutral-500 mt-3">
              Double-face virgin wool, tailored canvas construction, and custom horn hardware engineered for European fashion labels.
            </p>
          </div>

          <div className="v5-bottom-col">
            <h3 className="headline-small text-black">
              Circular Denim: Low-impact ozone washes
            </h3>
            <p className="body-small text-neutral-500 mt-3">
              Shuttle-loomed selvedge denim with closed-loop water treatment and GOTS-certified sustainable organic cotton.
            </p>
          </div>

          <div className="v5-bottom-col">
            <h3 className="headline-small text-black">
              Series Production: Scaled container logistics
            </h3>
            <p className="body-small text-neutral-500 mt-3">
              Hundreds of styles per season with verified AQL 1.5 inspection and end-to-end European DDP warehouse delivery.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

