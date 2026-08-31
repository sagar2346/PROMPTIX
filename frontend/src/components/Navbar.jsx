import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const contentCard = document.querySelector('.content-card')
    if (!contentCard) return
    const handleScroll = () => {
      setScrolled(contentCard.scrollTop > 50)
    }
    contentCard.addEventListener('scroll', handleScroll)
    return () => contentCard.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    if (!menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.classList.remove('menu-open')
  }

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link'

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="PROMPTIX" className="logo-img" />
        </Link>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
          <Link to="/services" className={isActive('/services')} onClick={closeMenu}>Services</Link>
          <Link to="/how-it-works" className={isActive('/how-it-works')} onClick={closeMenu}>How It Works</Link>
          <Link to="/plans" className={isActive('/plans')} onClick={closeMenu}>Plans</Link>
          <Link to="/faq" className={isActive('/faq')} onClick={closeMenu}>FAQ</Link>

          <div className="nav-mobile-cta">
            <Link to="/contact" className="nav-cta" onClick={closeMenu}>Contact Us</Link>
          </div>
        </div>

        <Link to="/contact" className="nav-cta nav-desktop-cta">Contact Us</Link>

        {!menuOpen ? (
          <button className="nav-toggle" onClick={toggleMenu} aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        ) : (
          <button className="nav-close-btn" onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </nav>

      <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </>
  )
}
