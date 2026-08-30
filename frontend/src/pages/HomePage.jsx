import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

export default function HomePage() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'PTIX'
  const indexRef = useRef(0)

  useReveal()

  useEffect(() => {
    indexRef.current = 0
    setDisplayText('')
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setDisplayText(fullText.slice(0, indexRef.current + 1))
        indexRef.current++
      } else {
        clearInterval(interval)
      }
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title reveal">
          <span className="typing-container">
            <span className="static-text">PROM</span><span className="dynamic-text">{displayText}</span>
          </span>
        </h1>
        <p className="hero-subtitle reveal reveal-delay-1">
          Custom AI agents and automation workflows that save you 40+ hours
          per month. Built by Pragyan Khanal. Trusted by 30+ businesses.
        </p>
        <div className="hero-cta reveal reveal-delay-2">
          <Link to="/" className="btn-primary">Book Free Consultation</Link>
          <Link to="/services" className="btn-secondary">View Our Work</Link>
        </div>

        <div className="trust-indicators reveal reveal-delay-3">
          <div className="trust-item">
            <span className="trust-check">&#10003;</span>
            <span>50+ Automations Built</span>
          </div>
          <div className="trust-item">
            <span className="trust-check">&#10003;</span>
            <span>30+ Happy Clients</span>
          </div>
          <div className="trust-item">
            <span className="trust-check">&#10003;</span>
            <span>1,500+ Hours Saved</span>
          </div>
          <div className="trust-item">
            <span className="trust-check">&#10003;</span>
            <span>98% Client Satisfaction</span>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay-4">
          <div className="agent-row agent-row-1">
            <div className="agent-float af-1">
              <div className="agent-icon ai-agent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 1 4 4v1h2a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.73l-.5.29V14a2 2 0 0 1-2 2h-1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3H9a2 2 0 0 1-2-2v-2.98l-.5-.29A2 2 0 0 1 6 9V8a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4z"/><circle cx="9.5" cy="9.5" r="1" fill="currentColor"/><circle cx="14.5" cy="9.5" r="1" fill="currentColor"/></svg>
              </div>
              <span className="agent-label">AI Agent</span>
            </div>

            <div className="agent-float af-2">
              <div className="agent-icon whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <span className="agent-label">WhatsApp</span>
            </div>

            <div className="agent-float af-3">
              <div className="agent-icon slack">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
              </div>
              <span className="agent-label">Slack</span>
            </div>

            <div className="agent-float af-4">
              <div className="agent-icon email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
              </div>
              <span className="agent-label">Gmail</span>
            </div>

            <div className="agent-float af-5">
              <div className="agent-icon social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </div>
              <span className="agent-label">Instagram</span>
            </div>
          </div>

          <div className="agent-row agent-row-2">
            <div className="agent-float af-6">
              <div className="agent-icon workflow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="5" cy="6" r="3"/><circle cx="19" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M7.5 7.5l3 7.5m6-7.5l-3 7.5"/></svg>
              </div>
              <span className="agent-label">n8n</span>
            </div>

            <div className="agent-float af-7">
              <div className="agent-icon calendar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><rect x="7" y="14" width="3" height="3" rx="0.5" fill="currentColor" stroke="none"/></svg>
              </div>
              <span className="agent-label">Calendar</span>
            </div>

            <div className="agent-float af-8">
              <div className="agent-icon analytics">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 20h18"/><path d="M5 16l4-5 3 3 5-7 4 5"/></svg>
              </div>
              <span className="agent-label">Analytics</span>
            </div>

            <div className="agent-float af-9">
              <div className="agent-icon notion">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.552 0 .046-.152-.086-.21l-1.323-.902c-.65-.466-.56-.56-1.174-.56l-12.807.839c-.458.035-.527.175-.277.403l1.032.756zm.793 3.081v10.94c0 .465.232.643.636.594l11.365-1.103c.402-.035.471-.231.471-.69V6.354c0-.466-.086-.668-.515-.632l-11.956.722c-.39.023-.636.187-.636.651zm11.575 4.874c.086.422-.232.668-.725.69l-1.215.058c-.086 0-.163-.046-.163-.151 0-.035.023-.08.058-.116l.838-.49c.231-.163.515-.175.658-.058l.549.067zm.594 1.556c.104.355-.151.56-.515.624l-1.225.197c-.105.023-.175-.023-.21-.116-.023-.058-.012-.129.046-.187l.838-.691c.175-.14.392-.163.594-.035l.472.208zm-3.77 2.352c.175.345.046.624-.312.722l-1.37.503c-.105.035-.21-.012-.255-.104-.035-.08-.024-.175.046-.244l1.057-1.092c.151-.163.355-.187.563-.116l.271.331zm-5.496 2.02c.046.175.012.345-.105.48l-.769.863c-.08.105-.197.14-.312.105-.08-.035-.14-.105-.163-.21 0-.035-.023-.08.012-.129l.792-.95c.105-.129.255-.175.402-.14l.143.012z"/></svg>
              </div>
              <span className="agent-label">Notion</span>
            </div>

            <div className="agent-float af-10">
              <div className="agent-icon discord">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </div>
              <span className="agent-label">Discord</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="wc-section">
        <div className="wc-container">
          <div className="wc-left">
            <h2 className="wc-heading">AUTOMATE YOUR BUSINESS.<br />SCALE WITHOUT HIRING.</h2>
            <p className="wc-subtitle">Custom AI agents and automation workflows that save you 40+ hours per month. Built by Pragyan Khanal. Trusted by 30+ businesses.</p>
            <div className="wc-grid">
              <div className="wc-item">
                <div className="wc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <div className="wc-item-text">
                  <span className="wc-item-title">Fast Delivery</span>
                  <span className="wc-item-desc">3-5 days for most automations</span>
                </div>
              </div>
              <div className="wc-item">
                <div className="wc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className="wc-item-text">
                  <span className="wc-item-title">Affordable Pricing</span>
                  <span className="wc-item-desc">Starting at Rs. 8,400</span>
                </div>
              </div>
              <div className="wc-item">
                <div className="wc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="wc-item-text">
                  <span className="wc-item-title">Personalized Service</span>
                  <span className="wc-item-desc">Custom-built for your business</span>
                </div>
              </div>
              <div className="wc-item">
                <div className="wc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div className="wc-item-text">
                  <span className="wc-item-title">Proven Results</span>
                  <span className="wc-item-desc">50+ automations delivered</span>
                </div>
              </div>
              <div className="wc-item">
                <div className="wc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div className="wc-item-text">
                  <span className="wc-item-title">Complete Training</span>
                  <span className="wc-item-desc">Docs, videos & live training</span>
                </div>
              </div>
              <div className="wc-item">
                <div className="wc-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div className="wc-item-text">
                  <span className="wc-item-title">Global Support</span>
                  <span className="wc-item-desc">Nepal-based, worldwide reach</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wc-right">
            <div className="wc-photos">
              <div className="wc-photo wc-photo-1">
                <div className="wc-photo-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><circle cx="12" cy="16" r="1"/></svg>
                  <span>AI Automation</span>
                </div>
              </div>
              <div className="wc-photo wc-photo-2">
                <div className="wc-photo-inner">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  <span>Custom Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="team-section">
        <div className="team-header reveal">
          <span className="section-overline">The People Behind PROMPTIX</span>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Passionate builders dedicated to automating your business.</p>
        </div>
        <div className="team-grid">
          <div className="team-card reveal">
            <div className="team-card-img">
              <img src="/Pragyan Khanal.png" alt="Pragyan Khanal" />
            </div>
            <div className="team-card-info">
              <h3 className="team-card-name">Pragyan Khanal</h3>
              <p className="team-card-role">Co-Founder</p>
              <p className="team-card-desc">AI Agent Developer & Automation Specialist. Also a frontend developer building sleek, responsive interfaces.</p>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-1">
            <div className="team-card-img">
              <img src="/Sagar Dahal.png" alt="Sagar Dahal" />
            </div>
            <div className="team-card-info">
              <h3 className="team-card-name">Sagar Dahal</h3>
              <p className="team-card-role">Co-Founder</p>
              <p className="team-card-desc">Full Stack Developer & Graphic Designer. Powers the backend and crafts the visual identity of PROMPTIX.</p>
            </div>
          </div>
          <div className="team-card reveal reveal-delay-2">
            <div className="team-card-img">
              <img src="/Sandesh Shiwakoti.png" alt="Sandesh Shiwakoti" />
            </div>
            <div className="team-card-info">
              <h3 className="team-card-name">Sandesh Shiwakoti</h3>
              <p className="team-card-role">Founder</p>
              <p className="team-card-desc">Digital Marketer & Company Program Handler. Drives growth and ensures smooth operations across all projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee — sits just above the footer */}
      <div className="hero-marquee">
        <div className="marquee-track">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="marquee-content">
              <span>Automations</span><span className="dot">&#x2022;</span>
              <span>AI Agents</span><span className="dot">&#x2022;</span>
              <span>WhatsApp Bot</span><span className="dot">&#x2022;</span>
              <span>Gmail Automation</span><span className="dot">&#x2022;</span>
              <span>Workflow</span><span className="dot">&#x2022;</span>
              <span>Slack Integration</span><span className="dot">&#x2022;</span>
              <span>n8n Workflows</span><span className="dot">&#x2022;</span>
              <span>Content Generation</span><span className="dot">&#x2022;</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
