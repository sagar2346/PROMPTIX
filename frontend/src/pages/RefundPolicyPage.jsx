import { Link } from 'react-router-dom'

export default function RefundPolicyPage() {
  return (
    <section className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Home
        </Link>

        <h1 className="legal-title">Refund & Cancellation Policy</h1>
        <p className="legal-date">Last Updated: August 31, 2026</p>

        <p><strong>Promptix</strong> provides custom AI automation, web development, app development, graphic design, digital marketing, and videography services from <strong>Damak, Jhapa, Nepal</strong>. Because our services are custom and labor-intensive, this policy considers the work already performed, resources committed, and the project stage when handling refunds and cancellations.</p>

        <p>If you cancel before any work begins, you are eligible for a refund after deducting payment-processing charges and any third-party costs already incurred. Once work has commenced, the advance payment becomes non-refundable to the extent it has been earned through work performed. This includes requirements gathering, planning, design, programming, automation configuration, testing, and deployment. For milestone-based projects, once a milestone is delivered, approved, or put into active use, its payment is non-refundable.</p>

        <p>If you cancel during an ongoing project, we deduct the value of work completed, hours used, and third-party costs, and may refund any remaining eligible balance. Change of mind, business strategy shifts, or deciding not to use the completed system do not qualify for refunds. If we fail to deliver due to our fault, we will provide corrective work, project credit, or a partial/full refund depending on circumstances. Bug fixes are handled during the support period and do not automatically create a right to refund. Refund requests must be submitted in writing and are reviewed within 3 business days. Approved refunds are processed within 7 business days. This policy operates under the laws of Nepal.</p>

        <p><strong>Our Commitment:</strong> We aim to provide a fair balance between protecting our clients and protecting the time and resources committed to their projects.</p>
      </div>
    </section>
  )
}
