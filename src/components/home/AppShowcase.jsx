import React from 'react';
import { Apple, Play, Star, QrCode, ShieldCheck, Zap, Navigation } from 'lucide-react';
import { useBookingModal } from '../../context/BookingModalContext';

export const AppShowcase = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F6F4F1] border-y border-[#E5E1DD] relative overflow-hidden">
      {/* Subtle warm decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D92C1C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Supertag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E1DD] text-[11px] font-semibold uppercase tracking-wider text-[#111111] mb-5 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
          <span>Native Mobile Experience</span>
          <span className="text-[#888888]">•</span>
          <span className="text-[#666666]">Lucknow</span>
        </div>

        {/* Headline */}
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#111111] tracking-tight uppercase leading-[1.12] mb-4">
          YOUR SERVICES. <br />
          <span className="text-[#D92C1C]">IN YOUR POCKET.</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          Book a ride. Send an express parcel. Book a salon artist. Schedule certified home repairs. Track specialists live across Lucknow with high-precision GPS on iOS & Android.
        </p>

        {/* App Store & Google Play Download Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10">
          <a
            href="#download-ios"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#111111] hover:bg-black text-white transition-all duration-200 shadow-sm hover:shadow-card hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Apple className="w-7 h-7 flex-shrink-0" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono block leading-none text-gray-300">
                Download on the
              </span>
              <span className="text-sm font-bold tracking-tight leading-tight block mt-0.5">
                App Store
              </span>
            </div>
          </a>

          <a
            href="#download-android"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#111111] hover:bg-black text-white transition-all duration-200 shadow-sm hover:shadow-card hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Play className="w-6 h-6 flex-shrink-0 fill-current" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono block leading-none text-gray-300">
                Get it on
              </span>
              <span className="text-sm font-bold tracking-tight leading-tight block mt-0.5">
                Google Play
              </span>
            </div>
          </a>

          {/* Instant QR Scan Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#E5E1DD] shadow-2xs hover:border-[#D92C1C] transition-colors">
            <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] text-[#D92C1C] flex items-center justify-center flex-shrink-0">
              <QrCode className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono font-bold uppercase text-[#666666] block leading-none">
                Instant Scan
              </span>
              <span className="text-xs font-bold text-[#111111] block mt-0.5">
                Get Lucknow App
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badges & Verified App Stats Row */}
        <div className="pt-8 border-t border-[#E5E1DD] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#4A4A4A] font-medium">
          <div className="flex items-center gap-2">
            <div className="flex text-[#FFD400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-[#111111]">4.9 / 5.0 Rating</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#D5D1CD]" />

          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D92C1C]" />
            <span>50,000+ Active App Installs in UP</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#D5D1CD]" />

          <div className="flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-[#111111]" />
            <span>Live GPS Telemetry & OTP Security</span>
          </div>
        </div>

      </div>
    </section>
  );
};
