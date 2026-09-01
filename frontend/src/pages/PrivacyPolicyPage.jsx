import { Link } from 'react-router-dom'

export default function PrivacyPolicyPage() {
  return (
    <section className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Home
        </Link>

        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-date">Last Updated: August 31, 2026</p>

        <p>Welcome to <strong>Promptix</strong>, an AI automation and technology service provider based in <strong>Damak, Jhapa, Nepal</strong>. We respect your privacy and are committed to protecting the personal and business information you share with us.</p>

        <p>When you contact us or use our services, we may collect information such as your name, email, phone number, business details, and project requirements. Our website may also automatically collect technical data like IP address, browser type, and cookies to improve your browsing experience. We use this information solely to understand your needs, respond to inquiries, deliver our services, and comply with legal obligations. We do not sell your personal information to anyone. However, we may share it with trusted third-party service providers only when necessary to complete your project, such as AI platforms, hosting services, or payment processors.</p>

        <p>If you provide confidential or sensitive data for an automation project, please inform us beforehand so we can take appropriate security measures. You have the right to ask what personal information we hold, request corrections, ask for deletion, and raise concerns about how your data is used. We retain your information only as long as necessary and protect it through reasonable security practices. Nepal's Privacy Act, 2075 governs the protection of your personal data.</p>

        <p>For any privacy-related questions, contact us through our website or WhatsApp. <strong>Thank you for trusting Promptix.</strong></p>
      </div>
    </section>
  )
}
