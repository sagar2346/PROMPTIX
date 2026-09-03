import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { faqData, whyChooseData } from '../data/content'

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item reveal ${index > 0 ? `reveal-delay-${index}` : ''} ${open ? 'open' : ''}`}>
      <button className="faq-question" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{item.question}</span>
        <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  useReveal()

  return (
    <>
      <section className="faq-section">
        <div className="faq-container">
          <div className="section-header">
            <span className="section-overline">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about working with PROMPTIX.
            </p>
          </div>

          <div className="faq-grid">
            {faqData.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <div className="section-header">
            <span className="section-overline">Why Us</span>
            <h2 className="section-title">Why Businesses Choose PROMPTIX</h2>
            <p className="section-subtitle">
              We deliver real results, not just promises.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseData.map((item, i) => (
              <div key={i} className={`why-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                <div className="card-inner">
                  <div className="why-icon">{item.icon}</div>
                  <h3 className="why-heading">{item.title}</h3>
                  <p className="why-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
