import { useState, useEffect } from 'react'

const serviceOptions = [
  { value: 'WhatsApp AI Agent', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5m0 0a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1z"/></svg> },
  { value: 'Workflow Automation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { value: 'Social Media Automation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { value: 'Custom AI Agent', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg> },
  { value: 'Landing Page', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { value: 'Business Website', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { value: 'E-commerce Store', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
  { value: 'Mobile App', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> },
  { value: 'Logo & Branding', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
  { value: 'SEO', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { value: 'Video Editing', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { value: 'Other', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg> },
]

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      if (initialService) {
        setFormData(prev => ({ ...prev, service: initialService }))
        setTimeout(() => setStep(2), 100)
      }
    } else {
      document.body.style.overflow = ''
      setStep(1)
      setFormData({ name: '', email: '', phone: '', business: '', service: '', message: '' })
      setStatus('idle')
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen, initialService])

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

    const params = new URLSearchParams()
    params.append('timestamp', new Date().toLocaleString())
    params.append('name', formData.name)
    params.append('email', formData.email)
    params.append('phone', formData.phone)
    params.append('business', formData.business)
    params.append('service', formData.service)
    params.append('message', formData.message)

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwqs_c1FcJ1LD2VuWL-kTm2C-MgS-yolMxJnL-z5EjlkISRG1YbkYXqBukYddsDPU87/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: params
        }
      )
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  const selectedIcon = serviceOptions.find(s => s.value === formData.service)?.icon

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="booking-success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Thank you, {formData.name.split(' ')[0]}!</h3>
            <p>We've received your inquiry and will get back to you within 24 hours.</p>
            <button className="booking-done-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className="booking-content">
            <div className="booking-header">
              <h2>{step === 1 ? 'Select a Service' : 'Your Details'}</h2>
              <p>{step === 1 ? 'Choose what you need help with' : 'Fill in your information to get started'}</p>
            </div>

            <div className="booking-progress">
              <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                <span>1</span>
              </div>
              <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                <span>2</span>
              </div>
            </div>

            {step === 1 && (
              <div className="booking-step fade-in">
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
              <form className="booking-step fade-in" onSubmit={handleSubmit}>
                <div className="selected-service-tag">
                  <span className="selected-service-icon">{selectedIcon}</span>
                  {formData.service}
                  <button type="button" className="tag-change" onClick={() => setStep(1)}>Change</button>
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98XXXXXXXX"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Business Name</label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                    />
                  </div>
                </div>

                <div className="form-field full-width">
                  <label>Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Brief description of what you need..."
                    rows="3"
                  />
                </div>

                <button
                  type="submit"
                  className="booking-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
                </button>

                {status === 'error' && (
                  <p className="modal-error">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
