import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronDown, 
  Package, 
  Car, 
  Sparkles, 
  ShoppingBag, 
  Home as HomeIcon, 
  Wrench, 
  Zap,
  ArrowRight,
  User,
  ShoppingBag as CartIcon
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useBookingModal } from '../../context/BookingModalContext';
import { Logo } from '../common/Logo';

export const MobileNavbar = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const { cartCount, setIsCartOpen } = useCart();
  const { openBooking } = useBookingModal();

  const services = [
    { name: 'Parcel Delivery', slug: 'parcel-delivery', icon: Package },
    { name: 'Cab / Ride', slug: 'cab-ride', icon: Car },
    { name: 'Home Cleaning', slug: 'home-cleaning', icon: HomeIcon },
    { name: 'Plumbing', slug: 'plumbing', icon: Wrench },
    { name: 'Electrical Services', slug: 'electrical-services', icon: Zap },
    { name: 'Beauty & Salon', slug: 'beauty-salon', icon: Sparkles },
    { name: 'Lifestyle Products', slug: 'lifestyle-products', icon: ShoppingBag },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-background/95 backdrop-blur-2xl"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/70">
            <div onClick={handleLinkClick}>
              <Logo className="h-8" />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  setIsCartOpen(true);
                }}
                className="relative p-2 text-primary"
                aria-label="View Cart"
              >
                <CartIcon className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-primary text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 rounded-full text-primary hover:bg-black/5 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links Scroll Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            <div className="space-y-2">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block text-2xl font-display font-bold text-primary hover:text-black py-2"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block text-2xl font-display font-bold text-primary hover:text-black py-2"
              >
                About
              </Link>

              {/* Collapsible Services */}
              <div className="py-2 border-y border-border/60 my-2">
                <button
                  type="button"
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  className="w-full flex items-center justify-between text-2xl font-display font-bold text-primary py-2"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted transition-transform duration-300 ${
                      servicesExpanded ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-2 pt-2 space-y-3 pb-3"
                    >
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onClick={handleLinkClick}
                            className="flex items-center gap-3 text-sm font-medium text-muted hover:text-primary py-1.5 transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span>{s.name}</span>
                          </Link>
                        );
                      })}
                      <Link
                        to="/services"
                        onClick={handleLinkClick}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary pt-2 underline underline-offset-4"
                      >
                        <span>View All Services Directory</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/partner"
                onClick={handleLinkClick}
                className="block text-2xl font-display font-bold text-primary hover:text-black py-2"
              >
                Become a Partner
              </Link>

              <Link
                to="/careers"
                onClick={handleLinkClick}
                className="block text-lg font-medium text-muted hover:text-primary py-1"
              >
                Careers
              </Link>

              <Link
                to="/faq"
                onClick={handleLinkClick}
                className="block text-lg font-medium text-muted hover:text-primary py-1"
              >
                FAQ & Help
              </Link>

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block text-lg font-medium text-muted hover:text-primary py-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Mobile Drawer CTA */}
          <div className="p-6 border-t border-border/80 bg-white space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-border text-sm font-semibold text-primary hover:border-primary transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Log In</span>
              </Link>
              <Link
                to="/partner"
                onClick={handleLinkClick}
                className="flex items-center justify-center py-3 px-4 rounded-full border border-border text-sm font-semibold text-primary hover:border-primary transition-colors"
              >
                Partner Up
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                openBooking();
              }}
              className="w-full py-4 px-6 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:bg-black transition-all"
            >
              <span>Instant Service Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
