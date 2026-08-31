import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { servicePricing } from '../data/content'

function ServiceCard({ service }) {
  return (
    <div className="service-price-card">
      <div className="service-price-header">
        <h3 className="service-price-name">{service.name}</h3>
        <p className="service-price-desc">{service.desc}</p>
      </div>
      <div className="service-price-body">
        <div className="service-price-amount">
          {service.oldPrice && <span className="service-old-price">{service.oldPrice}</span>}
          <span className="service-current-price">{service.price}</span>
          <span className="service-unit">{service.unit}</span>
        </div>
        <ul className="service-price-features">
          {service.features.map((f, i) => (
            <li key={i}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              {f}
            </li>
          ))}
        </ul>
        <div className="service-price-footer">
          <span className="service-delivery">Delivery: {service.delivery}</span>
          <a href="/contact" className="service-cta-btn">Get Started</a>
        </div>
      </div>
    </div>
  )
}

function CategorySection({ category, isOpen, onToggle, index }) {
  return (
    <div id={`pricing-cat-${index}`} className={`pricing-category ${isOpen ? 'open' : ''}`}>
      <button className="pricing-category-header" onClick={onToggle}>
        <div className="pricing-category-icon">{category.icon}</div>
        <h2 className="pricing-category-title">{category.category}</h2>
        <svg className="pricing-category-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div className={`pricing-category-content ${isOpen ? 'show' : ''}`}>
        <div className="pricing-category-grid">
          {category.services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PlansPage() {
  useReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    const wasOpen = openIndex === index
    setOpenIndex(wasOpen ? null : index)
    if (!wasOpen && typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        const el = document.getElementById(`pricing-cat-${index}`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    }
  }

  return (
    <section className="plans-page">
      <div className="plans-container">
        <div className="section-header">
          <span className="section-overline">Pricing</span>
          <h2 className="section-title">Service Plans & Pricing</h2>
          <p className="section-subtitle">
            Click a service category to view pricing details.
          </p>
        </div>

        <div className="pricing-categories">
          {servicePricing.map((cat, i) => (
            <CategorySection
              key={i}
              index={i}
              category={cat}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <div className="pricing-footer-cta">
          <h3>Need something custom?</h3>
          <p>We build tailored solutions. Tell us what you need and we'll create a plan just for you.</p>
          <a href="/contact" className="pricing-footer-btn">Request Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
