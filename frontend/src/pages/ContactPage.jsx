import { useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function ContactPage() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.message || 'Failed to send message')
        setLoading(false)
        return
      }

      setSuccess(true)
      setLoading(false)
    } catch {
      setError('Server error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left reveal">
          <span className="section-overline">Get in Touch</span>
          <h1 className="contact-title">Build Your Business<br />With Us</h1>
          <p className="contact-subtitle">
            Ready to automate your workflow? Let's discuss how AI agents
            can save you 40+ hours every month.
          </p>

          <div className="contact-trust">
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <span className="contact-trust-value">50+</span>
                <span className="contact-trust-label">Automations Built</span>
              </div>
            </div>
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <span className="contact-trust-value">30+</span>
                <span className="contact-trust-label">Happy Clients</span>
              </div>
            </div>
            <div className="contact-trust-item">
              <div className="contact-trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <span className="contact-trust-value">24h</span>
                <span className="contact-trust-label">Response Time</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card reveal reveal-delay-1">
          {success ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>Message sent!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-row-2">
                <div className="auth-field">
                  <label className="auth-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="auth-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="auth-field">
                  <label className="auth-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="auth-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="auth-field">
                <label className="auth-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="auth-input"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="auth-field">
                <label className="auth-label">Message</label>
                <textarea
                  name="message"
                  className="auth-input contact-textarea"
                  placeholder="Tell us about your project..."
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="auth-error">{error}</p>}

              <button type="submit" className="auth-btn auth-btn-primary contact-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
