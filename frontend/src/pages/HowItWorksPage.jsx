import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import useScrollReveal from '../hooks/useScrollReveal'
import { howItWorksSteps } from '../data/content'

function StepItem({ step, index }) {
  const ref = useScrollReveal({ threshold: 0.2 })
  const [expanded, setExpanded] = useState(false)
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`timeline-item scroll-reveal ${isEven ? 'timeline-left' : 'timeline-right'}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="timeline-dot">
        <span className="timeline-num">{index + 1}</span>
      </div>
      <div
        className={`timeline-card ${expanded ? 'expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="timeline-icon">{step.icon}</div>
        <h3 className="timeline-heading">{step.title}</h3>
        <div className={`timeline-details ${expanded ? 'show' : ''}`}>
          <p className="timeline-desc">{step.desc}</p>
        </div>
        <span className="timeline-toggle">{expanded ? 'Show less' : 'Click to view details'}</span>
      </div>
    </div>
  )
}

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

        <div className="timeline">
          <div className="timeline-line"></div>
          {howItWorksSteps.map((step, i) => (
            <StepItem key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
