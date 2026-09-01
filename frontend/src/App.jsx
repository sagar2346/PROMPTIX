import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import PlansPage from './pages/PlansPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import TermsPage from './pages/TermsPage'
import ScrollToTop from './components/ScrollToTop'

const legalPaths = ['/privacy-policy', '/refund-policy', '/terms-conditions']

export default function App() {
  const { pathname } = useLocation()
  const isLegal = legalPaths.includes(pathname)

  return (
    <>
      <div className="page-transition-overlay"></div>
      <div className="page-wrapper">
        <div className="content-card">
          <ScrollToTop />
          {!isLegal && <Navbar />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
          </Routes>
          {!isLegal && <Footer />}
        </div>
      </div>
    </>
  )
}
