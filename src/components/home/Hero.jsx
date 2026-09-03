import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useBookingModal } from '../../context/BookingModalContext';
import { 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Car, 
  Package, 
  Sparkles, 
  Home as HomeIcon, 
  Wrench, 
  Zap 
} from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

import { useCMS } from '../../context/CMSContext';

export const Hero = () => {
  const { openBooking } = useBookingModal();
  const { homePageContent } = useCMS();

  const heroData = homePageContent?.sections?.[0] || {};
  const heroBadge = heroData.badge || 'MULTI-SERVICE PLATFORM • LUCKNOW';
  const heroTitle1 = heroData.title || 'EVERYTHING YOU NEED.';
  const heroTitle2 = heroData.subtitle || 'RIGHT WHEN YOU NEED IT.';
  const heroDescription = heroData.description || 'One trusted platform for rides, deliveries, salon pampering, home services and everyday essentials across Lucknow.';
  const heroPrimaryBtn = heroData.buttonText || 'Explore Services';
  const heroSecondaryBtn = heroData.secondaryButtonText || 'Get Started';

  const customImages = heroData.images || {};
  const mainHeroImage = heroData.image || '/images/hero-woman.jpg';

  const floatingSpecialists = [
    {
      id: 'rides',
      title: 'Rides',
      badge: 'Cabs & Rides',
      icon: Car,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF]',
      img: customImages.rides || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
      position: 'top-2 left-0 sm:-left-3 lg:-left-6'
    },
    {
      id: 'delivery',
      title: 'Delivery',
      badge: 'Express Delivery',
      icon: Package,
      iconColor: 'text-[#B45309]',
      iconBg: 'bg-[#FEF3C7]',
      img: customImages.delivery || 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
      position: 'top-[36%] left-0 sm:-left-6 lg:-left-10'
    },
    {
      id: 'beauty',
      title: 'Beauty',
      badge: 'Salon at Home',
      icon: Sparkles,
      iconColor: 'text-[#DB2777]',
      iconBg: 'bg-[#FCE7F3]',
      img: customImages.beauty || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      position: 'bottom-20 left-1 sm:left-1 lg:left-0'
    },
    {
      id: 'home',
      title: 'Home',
      badge: 'Deep Cleaning',
      icon: HomeIcon,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#ECFDF5]',
      img: customImages.home || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      position: 'top-2 right-1 sm:right-1 lg:right-0'
    },
    {
      id: 'plumbing',
      title: 'Plumbing',
      badge: 'Plumber Services',
      icon: Wrench,
      iconColor: 'text-[#2563EB]',
      iconBg: 'bg-[#EFF6FF]',
      img: customImages.plumbing || 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      position: 'top-[36%] right-0 sm:right-1 lg:-right-2'
    },
    {
      id: 'electrical',
      title: 'Electrical',
      badge: 'Certified Electricians',
      icon: Zap,
      iconColor: 'text-[#CA8A04]',
      iconBg: 'bg-[#FEF9C3]',
      img: customImages.electrical || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      position: 'bottom-20 right-1 sm:right-1 lg:right-0'
    }
  ];

  // Cycling slideshow matching user services (Customer + 6 Core Services)
  const heroSlides = [
    {
      id: 'customer',
      serviceId: null,
      title: 'All In One',
      badge: 'Tepito in Lucknow',
      image: mainHeroImage
    },
    ...floatingSpecialists.map((sp) => ({
      id: sp.id,
      serviceId: sp.id,
      title: sp.title,
      badge: sp.badge,
      image: sp.img
    }))
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch image every 3 seconds smoothly
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const currentSlide = heroSlides[activeSlideIndex];

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Exact match to user screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 xl:col-span-6 space-y-5"
          >
            {/* Supertag with Yellow Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-[11px] font-semibold uppercase tracking-wider text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
              <span>{heroBadge}</span>
            </div>

            {/* Exact Headline from User Screenshot with Animated Load-In */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-[#111111] tracking-tight leading-[1.06] uppercase">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="block"
              >
                {heroTitle1}
              </motion.span>
              
              <span className="block overflow-hidden pt-1">
                <motion.span
                  initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#D92C1C] block"
                >
                  {heroTitle2}
                </motion.span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed max-w-lg font-normal">
              {heroDescription}
            </p>

            {/* Action Buttons: Red Explore Services + Ghost Get Started */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-card active:scale-95 cursor-pointer"
              >
                <span>{heroPrimaryBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => openBooking()}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F6F4F1] border border-[#E5E1DD] text-[#111111] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>{heroSecondaryBtn}</span>
              </button>
            </div>

            {/* Three Exact Guarantee Badges (Matching Screenshot) */}
            <div className="pt-6 border-t border-[#E5E1DD] grid grid-cols-3 gap-3 sm:gap-4 text-[#111111]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-xs sm:text-sm text-[#111111] block leading-tight">100%</span>
                  <span className="text-[11px] text-[#666666] leading-tight block">Verified Specialists</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFF9E6] flex items-center justify-center text-[#FFD400] flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#D99B00]" />
                </div>
                <div>
                  <span className="font-extrabold text-xs sm:text-sm text-[#111111] block leading-tight">Sub-30 Min</span>
                  <span className="text-[11px] text-[#666666] leading-tight block">Arrival in Lucknow</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] flex-shrink-0">
                  <span className="font-bold text-xs">₹</span>
                </div>
                <div>
                  <span className="font-extrabold text-xs sm:text-sm text-[#111111] block leading-tight">Fixed</span>
                  <span className="text-[11px] text-[#666666] leading-tight block">Upfront Pricing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Rotating Service Visual matching User Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none pt-4 pb-2">
              
              {/* Soft Organic Backdrop Shape */}
              <div className="absolute inset-0 bg-[#F9F7F4] rounded-[3rem] -z-10 transform -rotate-1" />

              {/* Main Visual Arena */}
              <div 
                className="relative h-[340px] sm:h-[400px] flex items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                
                {/* Solid Red Circular Backdrop (Exact match to screenshot) */}
                <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-[#D92C1C] pointer-events-none shadow-lg" />

                {/* Central Dynamic Service / Customer Rotating Portrait Image */}
                <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide.id}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="w-full h-full relative"
                    >
                      <ImageWithFallback
                        src={currentSlide.image}
                        alt={currentSlide.badge}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                      />
                      
                      {/* Dynamic Badge Pill at Bottom of Circle */}
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-3.5 sm:pb-4">
                        <motion.span 
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[10.5px] sm:text-[11.5px] font-bold text-white px-3.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 shadow-xs"
                        >
                          {currentSlide.badge}
                        </motion.span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 6 Connected Floating Specialist Cards with Synchronized Glow & Click to Switch */}
                {floatingSpecialists.map((sp) => {
                  const Icon = sp.icon;
                  const isActive = currentSlide.serviceId === sp.id;

                  return (
                    <div
                      key={sp.id}
                      onClick={() => {
                        const targetIdx = heroSlides.findIndex((s) => s.serviceId === sp.id);
                        if (targetIdx !== -1) setActiveSlideIndex(targetIdx);
                      }}
                      onMouseEnter={() => {
                        setIsPaused(true);
                        const targetIdx = heroSlides.findIndex((s) => s.serviceId === sp.id);
                        if (targetIdx !== -1) setActiveSlideIndex(targetIdx);
                      }}
                      className={`absolute ${sp.position} z-20 bg-white rounded-2xl p-1.5 pr-3.5 border transition-all duration-300 cursor-pointer select-none flex items-center gap-2.5 ${
                        isActive
                          ? 'border-[#D92C1C] ring-2 ring-[#D92C1C]/40 shadow-xl scale-110 -translate-y-1'
                          : 'border-[#E5E1DD] shadow-card hover:scale-105 hover:border-[#D92C1C] hover:shadow-lg'
                      }`}
                      title={`Click to view ${sp.badge}`}
                    >
                      <img
                        src={sp.img}
                        alt={sp.title}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover"
                      />
                      <div className="flex items-center gap-1.5">
                        <Icon className={`w-3.5 h-3.5 ${sp.iconColor}`} />
                        <span className={`text-xs font-bold ${isActive ? 'text-[#D92C1C]' : 'text-[#111111]'}`}>
                          {sp.title}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D92C1C] animate-ping ml-0.5" />
                        )}
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Slide Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 my-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlideIndex(idx)}
                    aria-label={`Show ${slide.badge}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlideIndex === idx
                        ? 'w-6 bg-[#D92C1C]'
                        : 'w-2 bg-[#E5E1DD] hover:bg-[#999999]'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Bottom Live Network Card (Matching Screenshot) */}
              <div className="relative z-20 mt-3 mx-auto max-w-md bg-white rounded-2xl p-3.5 sm:p-4 border border-[#E5E1DD] shadow-card flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#D92C1C] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-wider text-[#666666] uppercase font-mono">
                      LIVE LUCKNOW NETWORK
                    </span>
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-[#111111] block">
                    520+ Specialists Active in Lucknow
                  </span>
                </div>

                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Specialist" />
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Specialist" />
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Specialist" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#FFF1EF] text-[#D92C1C] border border-[#D92C1C]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D92C1C]" />
                    Online
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
