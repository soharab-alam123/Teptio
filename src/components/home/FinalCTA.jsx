import React from 'react';
import { Link } from 'react-router-dom';

export const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#B82315] via-[#D92C1C] to-[#C72314] text-white relative overflow-hidden">
      {/* Subtle decorative background light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/[0.12] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main Title (Matching reference image) */}
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
          Join Our Team
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-[15px] sm:text-[17px] text-white/95 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
          We're always looking for talented individuals and certified specialists who share our mission of transforming everyday urban living across Lucknow through technology. Explore open positions and grow with us.
        </p>

        {/* Two Pill Buttons (Matching reference layout) */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Button 1: Solid White Pill */}
          <Link
            to="/partner"
            className="px-8 py-3.5 rounded-full bg-white text-[#D92C1C] font-display font-bold text-[15px] hover:bg-[#F6F4F1] hover:shadow-lg transition-all duration-200 shadow-sm active:scale-95"
          >
            Partner with Us
          </Link>

          {/* Button 2: Glassy Outline Pill */}
          <Link
            to="/careers"
            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 font-display font-bold text-[15px] backdrop-blur-xs transition-all duration-200 active:scale-95"
          >
            Download App
          </Link>
        </div>

      </div>
    </section>
  );
};
