import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { useBooking } from '../context/BookingContext'
import { servicePricing } from '../data/content'

export default function PlansPage() {
  useReveal()
  const [activeCategory, setActiveCategory] = useState(0)
  const { openBooking } = useBooking()

  const currentCategory = servicePricing[activeCategory]

  return (
    <section className="plans-page">
      <div className="plans-container">
        <div className="section-header">
          <h2 className="section-title">Service Plans & Pricing</h2>
          <p className="section-subtitle">
            Transparent pricing for every service. Choose what fits your business.
          </p>
        </div>

        <div className="pricing-tabs">
          {servicePricing.map((cat, i) => (
            <button
              key={i}
              className={`pricing-tab ${activeCategory === i ? 'active' : ''}`}
              onClick={() => setActiveCategory(i)}
            >
              <span className="pricing-tab-icon">{cat.icon}</span>
              <span className="pricing-tab-label">{cat.category}</span>
            </button>
          ))}
        </div>

        <div className="pricing-grid">
          {currentCategory.services.map((service, i) => (
            <div key={i} className="pricing-card">
              <div className="pricing-card-top">
                <h3 className="pricing-card-name">{service.name}</h3>
                <p className="pricing-card-desc">{service.desc}</p>
              </div>

              <div className="pricing-card-price">
                {service.oldPrice && (
                  <span className="pricing-old">{service.oldPrice}</span>
                )}
                <span className="pricing-current">{service.price}</span>
                <span className="pricing-unit">{service.unit}</span>
              </div>

              <ul className="pricing-features">
                {service.features.map((f, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pricing-card-bottom">
                <span className="pricing-delivery">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {service.delivery}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>Need something custom? We build tailored solutions for your specific needs.</p>
          <button onClick={() => openBooking('Other')} className="pricing-footer-btn">Request Custom Quote</button>
        </div>
      </div>
    </section>
  )
}
