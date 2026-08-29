import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">PROMPTIX</Link></li>
              <li><Link to="/" className="footer-link">Automate Your Business</Link></li>
              <li><Link to="/" className="footer-link">About Pragyan</Link></li>
              <li><a href="#" className="footer-link coming-soon">Blog <span className="soon-tag">Coming Soon</span></a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">WhatsApp Agents</Link></li>
              <li><Link to="/services" className="footer-link">Workflow Automation</Link></li>
              <li><Link to="/services" className="footer-link">Form Automation</Link></li>
              <li><Link to="/services" className="footer-link">Social Media Automation</Link></li>
              <li><Link to="/services" className="footer-link">Custom AI Agents</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/how-it-works" className="footer-link">How It Works</Link></li>
              <li><Link to="/plans" className="footer-link">Pricing</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><a href="#" className="footer-link coming-soon">Case Studies <span className="soon-tag">Coming Soon</span></a></li>
              <li><Link to="/" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Refund Policy</a></li>
              <li><a href="#" className="footer-link">NDA Available</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2026 PROMPTIX. All rights reserved.</p>
          <p className="footer-tagline">Built in Nepal. Built for the World.</p>
        </div>
      </div>
    </footer>
  )
}
