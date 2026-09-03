import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [initialService, setInitialService] = useState('')

  const openBooking = (service = '') => {
    setInitialService(service)
    setIsOpen(true)
  }

  const closeBooking = () => {
    setIsOpen(false)
    setInitialService('')
  }

  return (
    <BookingContext.Provider value={{ isOpen, initialService, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}
