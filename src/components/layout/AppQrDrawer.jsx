import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Apple, Play, ArrowRight, Smartphone, QrCode } from 'lucide-react';
import { Logo } from '../common/Logo';

export const AppQrDrawer = ({ isOpen, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Main Drawer Panel seamlessly attached with top-full to header (0px gap) */}
      <div className="absolute top-full left-0 right-0 w-full z-50 bg-white border-b-2 border-[#E5E1DD] shadow-2xl transition-all duration-300 animate-in slide-in-from-top-2 max-h-[calc(100vh-80px)] overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
          
          {/* Close Button on Mobile / Header */}
          <button
            onClick={onClose}
            aria-label="Close QR Drawer"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] flex items-center justify-center text-[#111111] hover:bg-[#D92C1C] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* 2-Column Split: Customer App vs Partner App */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-[#E5E1DD]">
            
            {/* 1. CUSTOMER APP */}
            <div className="flex flex-col items-center text-center pt-2 md:pt-0 md:pr-8">
              <div className="space-y-1.5 mb-6 max-w-sm">
                <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Customer <span className="text-[#D92C1C]">App</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  Book rides, parcel express, salon care, and home restorations across Lucknow instantly.
                </p>
              </div>

              {/* QR Code Container Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#E5E1DD] shadow-card flex flex-col items-center mb-6 relative group">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center bg-white rounded-2xl p-2">
                  {/* Clean Vector SVG QR Code with Tepito Red Center Logo */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Corner Squares */}
                    <rect x="5" y="5" width="26" height="26" rx="4" fill="none" stroke="#111111" strokeWidth="3" />
                    <rect x="11" y="11" width="14" height="14" rx="2" fill="#111111" />

                    <rect x="69" y="5" width="26" height="26" rx="4" fill="none" stroke="#111111" strokeWidth="3" />
                    <rect x="75" y="11" width="14" height="14" rx="2" fill="#111111" />

                    <rect x="5" y="69" width="26" height="26" rx="4" fill="none" stroke="#111111" strokeWidth="3" />
                    <rect x="11" y="75" width="14" height="14" rx="2" fill="#111111" />

                    {/* QR Code Pixel Matrix */}
                    <rect x="36" y="8" width="6" height="6" fill="#111111" />
                    <rect x="46" y="8" width="6" height="12" fill="#111111" />
                    <rect x="56" y="14" width="8" height="6" fill="#111111" />

                    <rect x="36" y="24" width="12" height="6" fill="#111111" />
                    <rect x="54" y="24" width="8" height="8" fill="#111111" />

                    <rect x="8" y="36" width="14" height="6" fill="#111111" />
                    <rect x="26" y="36" width="6" height="14" fill="#111111" />
                    <rect x="68" y="36" width="12" height="6" fill="#111111" />
                    <rect x="84" y="36" width="8" height="14" fill="#111111" />

                    <rect x="8" y="54" width="6" height="10" fill="#111111" />
                    <rect x="18" y="48" width="14" height="6" fill="#111111" />
                    <rect x="68" y="48" width="8" height="12" fill="#111111" />
                    <rect x="82" y="54" width="10" height="6" fill="#111111" />

                    <rect x="36" y="68" width="14" height="6" fill="#111111" />
                    <rect x="54" y="68" width="8" height="14" fill="#111111" />
                    <rect x="68" y="68" width="12" height="6" fill="#111111" />
                    <rect x="86" y="68" width="6" height="12" fill="#111111" />

                    <rect x="36" y="80" width="8" height="12" fill="#111111" />
                    <rect x="48" y="86" width="12" height="6" fill="#111111" />
                    <rect x="68" y="82" width="14" height="10" fill="#111111" />
                    <rect x="86" y="86" width="6" height="6" fill="#111111" />

                    {/* Center Brand Badge */}
                    <rect x="38" y="38" width="24" height="24" rx="5" fill="#D92C1C" />
                    <text x="50" y="54" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">T</text>
                  </svg>
                </div>

                {/* Elegant Cursive 'Scan Me' Text */}
                <div className="mt-2 text-center">
                  <span className="font-serif italic font-semibold text-base text-[#111111] tracking-wide block">
                    Scan Me
                  </span>
                  <span className="text-[10px] text-[#777777] font-mono uppercase">
                    iOS & Android Compatible
                  </span>
                </div>
              </div>

              {/* App Store / Google Play Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <a
                  href="#google-play"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5E1DD] hover:border-[#D92C1C] text-[#111111] shadow-2xs hover:shadow-xs transition-all text-xs font-semibold"
                >
                  <Play className="w-4 h-4 fill-[#111111]" />
                  <span>Google Play</span>
                </a>
                <a
                  href="#app-store"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5E1DD] hover:border-[#D92C1C] text-[#111111] shadow-2xs hover:shadow-xs transition-all text-xs font-semibold"
                >
                  <Apple className="w-4 h-4" />
                  <span>App Store</span>
                </a>
              </div>
            </div>

            {/* 2. PARTNER APP */}
            <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:pl-8">
              <div className="space-y-1.5 mb-6 max-w-sm">
                <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Partner <span className="text-[#D92C1C]">App</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                  Manage incoming requests, track daily payouts, and grow your fleet earnings in Lucknow.
                </p>
              </div>

              {/* QR Code Container Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#E5E1DD] shadow-card flex flex-col items-center mb-6 relative group">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center bg-white rounded-2xl p-2">
                  {/* Clean Vector SVG QR Code with Tepito Yellow Center Logo */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Corner Squares */}
                    <rect x="5" y="5" width="26" height="26" rx="4" fill="none" stroke="#111111" strokeWidth="3" />
                    <rect x="11" y="11" width="14" height="14" rx="2" fill="#111111" />

                    <rect x="69" y="5" width="26" height="26" rx="4" fill="none" stroke="#111111" strokeWidth="3" />
                    <rect x="75" y="11" width="14" height="14" rx="2" fill="#111111" />

                    <rect x="5" y="69" width="26" height="26" rx="4" fill="none" stroke="#111111" strokeWidth="3" />
                    <rect x="11" y="75" width="14" height="14" rx="2" fill="#111111" />

                    {/* QR Code Pixel Matrix */}
                    <rect x="36" y="8" width="6" height="6" fill="#111111" />
                    <rect x="46" y="8" width="6" height="12" fill="#111111" />
                    <rect x="56" y="14" width="8" height="6" fill="#111111" />

                    <rect x="36" y="24" width="12" height="6" fill="#111111" />
                    <rect x="54" y="24" width="8" height="8" fill="#111111" />

                    <rect x="8" y="36" width="14" height="6" fill="#111111" />
                    <rect x="26" y="36" width="6" height="14" fill="#111111" />
                    <rect x="68" y="36" width="12" height="6" fill="#111111" />
                    <rect x="84" y="36" width="8" height="14" fill="#111111" />

                    <rect x="8" y="54" width="6" height="10" fill="#111111" />
                    <rect x="18" y="48" width="14" height="6" fill="#111111" />
                    <rect x="68" y="48" width="8" height="12" fill="#111111" />
                    <rect x="82" y="54" width="10" height="6" fill="#111111" />

                    <rect x="36" y="68" width="14" height="6" fill="#111111" />
                    <rect x="54" y="68" width="8" height="14" fill="#111111" />
                    <rect x="68" y="68" width="12" height="6" fill="#111111" />
                    <rect x="86" y="68" width="6" height="12" fill="#111111" />

                    <rect x="36" y="80" width="8" height="12" fill="#111111" />
                    <rect x="48" y="86" width="12" height="6" fill="#111111" />
                    <rect x="68" y="82" width="14" height="10" fill="#111111" />
                    <rect x="86" y="86" width="6" height="6" fill="#111111" />

                    {/* Center Brand Badge with Yellow Accent */}
                    <rect x="38" y="38" width="24" height="24" rx="5" fill="#111111" />
                    <text x="50" y="54" fill="#FFD400" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">PRO</text>
                  </svg>
                </div>

                {/* Elegant Cursive 'Scan Me' Text */}
                <div className="mt-2 text-center">
                  <span className="font-serif italic font-semibold text-base text-[#111111] tracking-wide block">
                    Scan Me
                  </span>
                  <span className="text-[10px] text-[#777777] font-mono uppercase">
                    Partner Driver & Specialist APK
                  </span>
                </div>
              </div>

              {/* Action Buttons: Google Play & Learn More */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <a
                  href="#google-play-partner"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5E1DD] hover:border-[#D92C1C] text-[#111111] shadow-2xs hover:shadow-xs transition-all text-xs font-semibold"
                >
                  <Play className="w-4 h-4 fill-[#111111]" />
                  <span>Google Play</span>
                </a>

                <Link
                  to="/partner"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111111] hover:bg-[#D92C1C] text-white shadow-2xs transition-all text-xs font-semibold"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
