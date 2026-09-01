import { useState, useEffect } from 'react'
import { initGoogleAuth, signIn, appendToSheet, isSignedIn } from '../services/googleSheets'

const SHEET_ID = '18JIni1v1Q8Mn9BuHPdXvDG3XYLU33kp7CAjlNKHU59g'

const serviceOptions = [
  { value: 'WhatsApp AI Agent', icon: '📱' },
  { value: 'Workflow Automation', icon: '⚡' },
  { value: 'Social Media Automation', icon: '📣' },
  { value: 'Custom AI Agent', icon: '🤖' },
  { value: 'Landing Page', icon: '🖥️' },
  { value: 'Business Website', icon: '🌐' },
  { value: 'E-commerce Store', icon: '🛒' },
  { value: 'Mobile App', icon: '📲' },
  { value: 'Logo & Branding', icon: '🎨' },
  { value: 'SEO', icon: '🔍' },
  { value: 'Video Editing', icon: '🎬' },
  { value: 'Other', icon: '💬' },
]

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [googleReady, setGoogleReady] = useState(false)

  useEffect(() => {
    initGoogleAuth().then(() => setGoogleReady(true))
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setStep(1)
      setFormData({ name: '', email: '', phone: '', business: '', service: '', message: '' })
      setStatus('idle')
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceSelect = (value) => {
    setFormData({ ...formData, service: value })
    setTimeout(() => setStep(2), 300)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      if (!isSignedIn()) {
        await signIn()
      }

      const row = [
        new Date().toLocaleString(),
        formData.name,
        formData.email,
        formData.phone,
        formData.business,
        formData.service,
        formData.message
      ]

      await appendToSheet(SHEET_ID, row)
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const canProceedStep1 = formData.service !== ''

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="booking-left">
          <div className="booking-brand">
            <span className="booking-logo">PROMPTIX</span>
          </div>
          <h2 className="booking-title">Let's Build Something<br /><span>Amazing Together</span></h2>
          <p className="booking-desc">Tell us about your project and we'll get back to you within 24 hours with a custom plan.</p>
          <div className="booking-stats">
            <div className="booking-stat">
              <span className="booking-stat-num">50+</span>
              <span className="booking-stat-label">Projects Done</span>
            </div>
            <div className="booking-stat">
              <span className="booking-stat-num">30+</span>
              <span className="booking-stat-label">Happy Clients</span>
            </div>
            <div className="booking-stat">
              <span className="booking-stat-num">24h</span>
              <span className="booking-stat-label">Response Time</span>
            </div>
          </div>
        </div>

        <div className="booking-right">
          {status === 'success' ? (
            <div className="booking-success">
              <div className="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Booking Confirmed!</h3>
              <p>We've received your details and will contact you within 24 hours.</p>
              <button className="booking-done-btn" onClick={onClose}>Done</button>
            </div>
          ) : (
            <>
              <div className="booking-steps">
                <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>
                  <span>1</span>
                  <label>Service</label>
                </div>
                <div className="step-line"></div>
                <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>
                  <span>2</span>
                  <label>Details</label>
                </div>
              </div>

              {step === 1 && (
                <div className="booking-step-content fade-in">
                  <h3>What do you need help with?</h3>
                  <div className="service-grid">
                    {serviceOptions.map((s) => (
                      <button
                        key={s.value}
                        className={`service-option ${formData.service === s.value ? 'selected' : ''}`}
                        onClick={() => handleServiceSelect(s.value)}
                      >
                        <span className="service-option-icon">{s.icon}</span>
                        <span className="service-option-label">{s.value}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <form className="booking-step-content fade-in" onSubmit={handleSubmit}>
                  <div className="booking-service-tag">
                    {serviceOptions.find(s => s.value === formData.service)?.icon} {formData.service}
                    <button type="button" className="tag-edit" onClick={() => setStep(1)}>Change</button>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98XXXXXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Business Name</label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Tell us about your project</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What problem do you want to solve? What tools do you currently use?"
                      rows="3"
                    />
                  </div>

                  <button
                    type="submit"
                    className="booking-submit"
                    disabled={status === 'sending' || !googleReady}
                  >
                    {status === 'sending' ? (
                      <span className="btn-loading">Submitting...</span>
                    ) : (
                      <>Book Free Consultation</>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="modal-error">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
