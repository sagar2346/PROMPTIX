import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const card = document.querySelector('.content-card')
    if (card) card.scrollTop = 0
  }, [pathname])
  return null
}
