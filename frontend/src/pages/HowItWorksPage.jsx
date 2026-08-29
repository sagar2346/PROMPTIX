import useReveal from '../hooks/useReveal'
import { howItWorksSteps } from '../data/content'

export default function HowItWorksPage() {
  useReveal()

  return (
    <section className="how-it-works how-page">
      <div className="how-container">
        <div className="section-header">
          <span className="section-overline">Process</span>
          <h2 className="section-title">How We Work Together</h2>
          <p className="section-subtitle">
            A streamlined 5-step process from consultation to ongoing support.
          </p>
        </div>

        <div className="how-grid">
          {howItWorksSteps.map((step, i) => (
            <div key={i} className={`how-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
              <div className="card-inner">
                <span className="how-step-num">{i + 1}</span>
                <div className="how-icon">{step.icon}</div>
                <h3 className="how-heading">{step.title}</h3>
                <p className="how-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
