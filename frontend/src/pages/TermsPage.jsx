import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Home
        </Link>

        <h1 className="legal-title">Terms & Conditions</h1>
        <p className="legal-date">Last Updated: August 31, 2026</p>

        <p>Welcome to <strong>Promptix</strong>. We are an AI automation and technology service provider based in <strong>Damak, Jhapa, Nepal</strong>. These Terms govern your access to our website and use of our services. By using our website or purchasing our services, you agree to these Terms.</p>

        <p>We provide AI automation, website development, app development, graphic design, digital marketing, videography, consulting, and training services. Exact deliverables, pricing, and timelines are defined in each project agreement. Quotes are based on information available at the time and may change if the scope changes or additional features are requested. Payments must be made according to the specified schedule, and we may require advance payment before work begins. Late payments may result in paused work, delayed delivery, or project termination.</p>

        <p>You agree to provide accurate requirements, content, access, and feedback within a reasonable period. We are not responsible for delays caused by your late responses or missing information. Additional requests beyond the agreed scope are treated as Change Requests with extra charges. AI systems may depend on external services we don't control, and AI output may vary. We do not guarantee specific business results like revenue, leads, or rankings. Upon full payment, ownership of custom deliverables transfers to you. We may display completed work in our portfolio unless you request otherwise. Refunds and cancellations are governed by our Refund & Cancellation Policy. These Terms are governed by the laws of Nepal.</p>

        <p><strong>By using our services, you acknowledge that you have read, understood, and agree to these Terms.</strong> Contact us at Damak, Jhapa, Nepal for any questions before purchasing or commencing a service.</p>
      </div>
    </section>
  )
}
