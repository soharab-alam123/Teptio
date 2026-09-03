import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Providers & Global Context
import { AuthProvider } from './context/AuthContext';
import { CMSProvider } from './context/CMSContext';
import { CartProvider } from './context/CartContext';
import { BookingModalProvider } from './context/BookingModalContext';
import { ScrollToTop } from './utils/scroll';

// Premium UX Enhancements
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { BackToTop } from './components/common/BackToTop';
import { ScrollReveal } from './components/common/ScrollReveal';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { BookingModal } from './components/layout/BookingModal';

// Pre-Footer Showcases (Rendered globally across all pages)
import { AppShowcase } from './components/home/AppShowcase';
import { FinalCTA } from './components/home/FinalCTA';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PartnerPage } from './pages/PartnerPage';
import { CareersPage } from './pages/CareersPage';
import { CareerDetailPage } from './pages/CareerDetailPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AdminDashboard } from './pages/AdminDashboard';

// Layout wrapper to handle Navbar, Pre-Footer Showcases, and Footer display
const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/admin';

  return (
    <div className="min-h-screen flex flex-col bg-background text-primary selection:bg-accent selection:text-primary font-sans">
      <ScrollToTop />
      <ScrollProgressBar />
      <BackToTop />
      {!isAuthPage && <Navbar />}
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:slug" element={<CareerDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Pre-Footer Global Showcases rendered on all pages */}
      {!isAuthPage && (
        <>
          <ScrollReveal variant="fade-up" amount={0.12} duration={0.75}>
            <AppShowcase />
          </ScrollReveal>
          <ScrollReveal variant="scale-up" amount={0.12} duration={0.75}>
            <FinalCTA />
          </ScrollReveal>
          <Footer />
        </>
      )}

      {/* Global Interactive Overlays */}
      <CartDrawer />
      <BookingModal />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <CMSProvider>
          <CartProvider>
            <BookingModalProvider>
              <AppLayout />
            </BookingModalProvider>
          </CartProvider>
        </CMSProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
