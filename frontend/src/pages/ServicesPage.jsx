import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { serviceCategories, services } from '../data/content'

function FlipCard({ category }) {
  const [flipped, setFlipped] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const openPanel = (key) => {
    setSelectedService(key)
  }

  const closePanel = () => {
    setSelectedService(null)
  }

  const serviceData = selectedService ? services[selectedService] : null

  return (
    <>
      <div className={`srv-flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="srv-flip-inner">
          <div className="srv-flip-front" onClick={() => setFlipped(true)}>
            {category.badge && <span className="srv-badge">{category.badge}</span>}
            <div className="srv-parent-icon">{category.icon}</div>
            <h3 className="srv-parent-title">{category.title}</h3>
            <p className="srv-parent-desc">{category.description}</p>
            <span className="srv-flip-hint">Click to view services &rarr;</span>
          </div>
          <div className="srv-flip-back">
            <div className="srv-back-header">
              <h3 className="srv-parent-title">{category.title}</h3>
              <span className="srv-back-count">{category.services.length} Services</span>
            </div>
            <div className="srv-children">
              {category.services.map((key) => (
                <div key={key} className="srv-child" onClick={() => openPanel(key)}>
                  <p className="srv-child-name">{services[key].name}</p>
                </div>
              ))}
            </div>
            <Link to="/" className="srv-quote-btn">Get a Quote</Link>
            <button className="srv-back-btn" onClick={() => setFlipped(false)}>&larr; Back</button>
          </div>
        </div>
      </div>

      {/* Service Detail Panel */}
      {selectedService && serviceData && (
        <>
          <div className="srv-panel-overlay open" onClick={closePanel}></div>
          <div className="srv-panel open">
            <div className="srv-panel-header">
              <button className="srv-panel-close" onClick={closePanel}>&times;</button>
              <span className="srv-panel-category">{serviceData.category}</span>
              <div className="srv-panel-icon">{serviceData.icon}</div>
              <h3 className="srv-panel-name">{serviceData.name}</h3>
              <p className="srv-panel-tagline">{serviceData.tagline}</p>
            </div>
            <div className="srv-panel-body">
              <div className="srv-panel-section">
                <span className="srv-panel-label">Overview</span>
                <div className="srv-panel-overview">
                  <p>{serviceData.overview}</p>
                </div>
              </div>
              <div className="srv-panel-section">
                <span className="srv-panel-label">Use Cases</span>
                <div className="srv-panel-pills">
                  {serviceData.useCases.map((uc, i) => (
                    <span key={i}>{uc}</span>
                  ))}
                </div>
              </div>
              <div className="srv-panel-section">
                <span className="srv-panel-label">Tools</span>
                <div className="srv-panel-tags">
                  {serviceData.tools.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="srv-panel-section">
                <span className="srv-panel-label">Delivery Time</span>
                <span className="srv-panel-timeline">{serviceData.timeline}</span>
              </div>
            </div>
            <div className="srv-panel-footer">
              <Link to="/" className="srv-panel-btn srv-panel-btn-primary">Get a Quote</Link>
              <Link to="/" className="srv-panel-btn srv-panel-btn-outline">Book a Call</Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default function ServicesPage() {
  useReveal()

  return (
    <section className="srv-section">
      <div className="srv-inner">
        <div className="srv-header">
          <h2>What We Do</h2>
          <p>Everything your business needs — automation, development, design, and marketing — all in one place.</p>
        </div>
        <div className="srv-parents">
          {serviceCategories.map((cat) => (
            <FlipCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
