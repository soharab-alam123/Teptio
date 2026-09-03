import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, ShoppingBag, ArrowRight, QrCode, X } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { MobileNavbar } from './MobileNavbar';
import { AppQrDrawer } from './AppQrDrawer';
import { useCart } from '../../context/CartContext';
import { useBookingModal } from '../../context/BookingModalContext';
import { Logo } from '../common/Logo';

import { useCMS } from '../../context/CMSContext';

export const Navbar = () => {
  const { headerConfig } = useCMS();
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrDrawerOpen, setQrDrawerOpen] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  const { openBooking } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setQrDrawerOpen(false);
  }, [location.pathname]);

  const navLinks = headerConfig?.navigation?.length > 0
    ? headerConfig.navigation.filter(item => item.active !== false).map(item => ({
        name: item.title,
        path: item.url,
        isMegaMenu: item.isMegaMenu || item.title === 'Services' || item.url === '/services',
      }))
    : [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', isMegaMenu: true },
        { name: 'Contact', path: '/contact' },
      ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E1DD] shadow-sm py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#E5E1DD]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            
            {/* Left: Brand Logo & Scan / App Trigger (Enlarged & Widened Gap) */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Logo className="h-10 sm:h-11" />

              {/* Scan / App Trigger Button (Larger & More Prominent) */}
              <button
                type="button"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setQrDrawerOpen(!qrDrawerOpen);
                }}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-2xs ${
                  qrDrawerOpen
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-[#F6F4F1] hover:bg-[#FFF1EF] text-[#111111] hover:text-[#D92C1C] border border-[#E5E1DD]'
                }`}
                aria-label="Scan QR Code / Download Mobile Apps"
              >
                {qrDrawerOpen ? (
                  <>
                    <X className="w-4 h-4 text-[#FFD400]" />
                    <span>CLOSE</span>
                  </>
                ) : (
                  <>
                    <QrCode className="w-4 h-4 text-[#D92C1C]" />
                    <span>APP</span>
                    <span className="w-2.5 h-[1.5px] bg-[#CCCCCC] hidden sm:inline-block" />
                  </>
                )}
              </button>
            </div>

            {/* Center: Desktop Navigation Links (Centered in the Navbar) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link, index) => {
                if (link.isMegaMenu) {
                  const isServicesActive = location.pathname.startsWith('/services') || megaMenuOpen;
                  return (
                    <div
                      key={index}
                      className="relative"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setQrDrawerOpen(false);
                          setMegaMenuOpen(!megaMenuOpen);
                        }}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                          isServicesActive
                            ? 'text-[#D92C1C] bg-[#FFF1EF] font-extrabold border border-[#D92C1C]/30 shadow-2xs'
                            : 'text-[#222222] hover:text-[#D92C1C] hover:bg-[#F6F4F1]'
                        }`}
                      >
                        <span>Services</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            megaMenuOpen ? 'rotate-180 text-[#D92C1C]' : ''
                          }`}
                        />
                      </button>
                    </div>
                  );
                }

                const active = isActive(link.path);
                return (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => {
                      setMegaMenuOpen(false);
                      setQrDrawerOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-[15px] font-bold tracking-tight transition-all duration-200 ${
                      active
                        ? 'text-[#D92C1C] bg-[#FFF1EF] font-extrabold border border-[#D92C1C]/30 shadow-2xs'
                        : 'text-[#222222] hover:text-[#D92C1C] hover:bg-[#F6F4F1]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Cart Trigger */}
              <button
                type="button"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setQrDrawerOpen(false);
                  setIsCartOpen(true);
                }}
                className="relative p-2.5 rounded-full text-[#111111] hover:bg-[#F6F4F1] hover:text-[#D92C1C] transition-colors duration-200 cursor-pointer"
                aria-label={`Shopping Cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#D92C1C] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link
                to="/partner"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setQrDrawerOpen(false);
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#3D3D3D] hover:text-[#D92C1C] px-3 py-2 transition-colors duration-200"
              >
                Become a Partner
              </Link>

              <button
                type="button"
                onClick={() => {
                  setMegaMenuOpen(false);
                  setQrDrawerOpen(false);
                  openBooking();
                }}
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 group active:scale-95 shadow-sm hover:shadow-card cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* Mobile QR Scan Trigger */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQrDrawerOpen(!qrDrawerOpen);
                }}
                className={`p-2 rounded-full border transition-colors ${
                  qrDrawerOpen 
                    ? 'bg-[#111111] text-white border-[#111111]' 
                    : 'bg-[#F6F4F1] text-[#111111] border-[#E5E1DD]'
                }`}
                aria-label="Scan QR Code"
              >
                {qrDrawerOpen ? <X className="w-4 h-4 text-[#FFD400]" /> : <QrCode className="w-4 h-4 text-[#D92C1C]" />}
              </button>

              {/* Mobile Cart */}
              <button
                type="button"
                onClick={() => {
                  setQrDrawerOpen(false);
                  setIsCartOpen(true);
                }}
                className="relative p-2 text-[#111111]"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#D92C1C] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => {
                  setQrDrawerOpen(false);
                  setMobileMenuOpen(true);
                }}
                className="p-2 text-[#111111] hover:bg-[#F6F4F1] rounded-lg transition-colors"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* MegaMenu Dropdown */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
        />

        {/* QR App Drawer Overlay (Matching Screenshots 2 & 3) */}
        <AppQrDrawer
          isOpen={qrDrawerOpen}
          onClose={() => setQrDrawerOpen(false)}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileNavbar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
