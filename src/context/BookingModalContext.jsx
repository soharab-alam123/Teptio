import React, { createContext, useContext, useState } from 'react';

const BookingModalContext = createContext();

export const BookingModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState(null);

  const openBooking = (serviceData = null) => {
    setService(serviceData || {
      id: 'general',
      title: 'Quick Service Request',
      category: 'Movement'
    });
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        service,
        openBooking,
        closeBooking
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
};
