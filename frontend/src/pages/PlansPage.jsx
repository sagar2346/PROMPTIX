import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { pricingPlans } from '../data/content'

function PricingCard({ plan, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={`pricing-card ${plan.popular ? 'popular' : ''} reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}>
      <div className={`pricing-card-inner ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <div className="pricing-card-front">
          <div className="card-inner">
            {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
            {plan.offer && <div className="offer-badge" dangerouslySetInnerHTML={{ __html: plan.offer }}></div>}
            <span className="plan-badge">{plan.badge}</span>
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-click">Click to see pricing</p>
            <div className="plan-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
        <div className="pricing-card-back">
          <div className="card-inner">
            {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
            {plan.offer && <div className="offer-badge" dangerouslySetInnerHTML={{ __html: plan.offer }}></div>}
            <span className="plan-badge">{plan.badge}</span>
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-pricing">
              <div className="plan-price-row">
                <span className="price-label">{plan.setupLabel || 'One-time Setup'}</span>
                <span className="price-value">
                  {plan.oldSetup && <span className="old-price">{plan.oldSetup}</span>}
                  {plan.setup}
                </span>
              </div>
              {plan.monthly && (
                <div className="plan-price-row">
                  <span className="price-label">Monthly Cost</span>
                  <span className="price-value">
                    {plan.oldMonthly && <span className="old-price">{plan.oldMonthly}</span>}
                    {plan.monthly}
                  </span>
                </div>
              )}
            </div>
            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}><span className="check">&#10003;</span> {f}</li>
              ))}
            </ul>
            <div className="plan-delivery">{plan.delivery}</div>
            <Link to="/" className="plan-btn" onClick={(e) => e.stopPropagation()}>
              {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PlansPage() {
  useReveal()

  return (
    <section className="pricing pricing-page">
      <div className="pricing-container">
        <div className="section-header">
          <span className="section-overline">Pricing</span>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. No surprises. Choose the plan that fits your
            business.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>

        <div className="pricing-info">
          <div className="info-card reveal">
            <div className="card-inner">
              <h4 className="info-title">Payment Terms</h4>
              <ul className="info-list">
                <li>50% upfront to start</li>
                <li>50% upon delivery</li>
                <li>Monthly plans billed on 1st</li>
              </ul>
            </div>
          </div>
          <div className="info-card reveal reveal-delay-1">
            <div className="card-inner">
              <h4 className="info-title">Payment Methods</h4>
              <div className="payment-methods">
                <span className="payment-badge">eSewa</span>
                <span className="payment-badge">Khalti</span>
                <span className="payment-badge">Bank Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
