import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Zap, 
  CreditCard, 
  Award, 
  Navigation,
  Car,
  Package,
  Wrench,
  Star,
  Smartphone,
  Check,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { useBookingModal } from '../context/BookingModalContext';

export const HowItWorksPage = () => {
  const { openBooking } = useBookingModal();
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 4 Interactive Master Steps
  const steps = [
    {
      id: 0,
      number: '01',
      tag: 'Step 1 • Selection',
      title: 'Choose Your Service',
      summary: 'Pick from 7 verified essentials in seconds.',
      desc: 'No confusing phone calls or untrusted directories. Choose a cab, courier dispatch, salon care, or licensed repair with 1 tap.',
      icon: Zap
    },
    {
      id: 1,
      number: '02',
      tag: 'Step 2 • Upfront Rate',
      title: 'Review Locked Price',
      summary: 'Itemized rate cards with zero hidden surge.',
      desc: 'The exact amount you see is the exact amount you pay. Never worry about rain surges, driver negotiations, or unexpected tariffs.',
      icon: CreditCard
    },
    {
      id: 2,
      number: '03',
      tag: 'Step 3 • Live Dispatch',
      title: 'Track GPS & 2-Factor OTP',
      summary: 'Watch your specialist arrive with verified safety.',
      desc: 'Follow live map telemetry in Gomti Nagar, Hazratganj, and across Lucknow. Two-factor OTP ensures safe and confirmed handoffs.',
      icon: Navigation
    },
    {
      id: 3,
      number: '04',
      tag: 'Step 4 • Completion',
      title: 'Inspect & 30-Day Warranty',
      summary: 'Pay after job is done with free redo protection.',
      desc: 'Pay effortlessly via UPI, cards, or cash. All repairs and maintenance are shielded with our 30-Day Quality Assurance Guarantee.',
      icon: ShieldCheck
    }
  ];

  // Auto advance every 4 seconds unless hovered
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <>
      <SEO
        title="How It Works — The Interactive Tepito Experience"
        description="Experience the seamless Tepito journey: Select, Lock Price, Live GPS Tracking, and 30-Day Warranty protection across Lucknow."
      />

      <main className="pt-28 sm:pt-36 pb-24 bg-[#FFFDFC] text-[#111111] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb items={[{ label: 'How It Works' }]} />

          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-[11px] font-semibold uppercase tracking-wider text-[#111111] mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
              <span>The Platform Standard</span>
              <span className="text-[#888888]">•</span>
              <span>Lucknow</span>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-[#111111] tracking-tight uppercase leading-[1.06]">
              HOW TEPITO WORKS. <br />
              <span className="text-[#D92C1C]">EFFORTLESS IN EVERY WAY.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed mt-4 max-w-xl mx-auto">
              Click through the 4 live stages below to see how our platform handles everyday city services with speed, transparency, and guaranteed quality.
            </p>
          </div>

          {/* Interactive Live Product Studio (Left Steps + Right Live Phone UI) */}
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F6F4F1] p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[3rem] border border-[#E5E1DD] shadow-card mb-20 relative"
          >
            
            {/* Left Column: 4 Clickable Step Cards */}
            <div className="lg:col-span-6 space-y-3.5">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const StepIcon = step.icon;

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                      isActive
                        ? 'bg-white border-2 border-[#D92C1C] shadow-elevated -translate-y-0.5'
                        : 'bg-white/70 border border-[#E5E1DD] hover:bg-white hover:border-[#D92C1C]/50 shadow-2xs'
                    }`}
                  >
                    {/* Animated Progress Bar on Active Step */}
                    {isActive && isAutoPlaying && (
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4.2, ease: 'linear' }}
                        className="absolute bottom-0 left-0 h-1 bg-[#D92C1C]"
                      />
                    )}

                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-mono font-extrabold text-sm flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#FFF1EF] text-[#D92C1C] border border-[#D92C1C]/30 shadow-xs'
                          : 'bg-[#F6F4F1] text-[#777777]'
                      }`}>
                        {step.number}
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-[11px] font-bold uppercase tracking-wider font-mono ${
                            isActive ? 'text-[#D92C1C]' : 'text-[#888888]'
                          }`}>
                            {step.tag}
                          </span>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#D92C1C] animate-pulse" />
                          )}
                        </div>

                        <h3 className="font-extrabold text-base sm:text-lg text-[#111111] tracking-tight">
                          {step.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed pt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Live Interactive Device Preview */}
            <div className="lg:col-span-6 flex justify-center items-center py-4">
              <div className="w-full max-w-[340px] sm:max-w-[380px] bg-[#111111] p-4 sm:p-5 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-[#222222] relative">
                
                {/* Device Speaker Notch */}
                <div className="w-24 h-4 bg-[#222222] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black/40 mr-2" />
                  <div className="w-8 h-1 bg-white/10 rounded-full" />
                </div>

                {/* Simulated Screen Body */}
                <div className="bg-white rounded-3xl p-5 min-h-[440px] flex flex-col justify-between text-[#111111] relative overflow-hidden">
                  
                  <AnimatePresence mode="wait">
                    
                    {/* SCREEN 1: SERVICE SELECTOR */}
                    {activeStep === 0 && (
                      <motion.div
                        key="screen-1"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-[#E5E1DD]">
                          <div>
                            <span className="text-[10px] font-mono uppercase text-[#777777] font-bold block">Lucknow Central</span>
                            <span className="font-extrabold text-sm text-[#111111]">What do you need today?</span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                        </div>

                        {/* Interactive Service Options */}
                        <div className="grid grid-cols-2 gap-2.5 pt-1">
                          <div className="p-3 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/40 text-left">
                            <Car className="w-5 h-5 text-[#D92C1C] mb-1.5" />
                            <span className="font-bold text-xs text-[#111111] block">City Ride</span>
                            <span className="text-[10px] text-[#D92C1C] font-semibold">From ₹49</span>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] text-left">
                            <Package className="w-5 h-5 text-[#EA580C] mb-1.5" />
                            <span className="font-bold text-xs text-[#111111] block">Express Parcel</span>
                            <span className="text-[10px] text-[#666666]">From ₹39</span>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] text-left">
                            <Sparkles className="w-5 h-5 text-[#DB2777] mb-1.5" />
                            <span className="font-bold text-xs text-[#111111] block">Salon at Home</span>
                            <span className="text-[10px] text-[#666666]">From ₹299</span>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] text-left">
                            <Wrench className="w-5 h-5 text-[#2563EB] mb-1.5" />
                            <span className="font-bold text-xs text-[#111111] block">Home Repairs</span>
                            <span className="text-[10px] text-[#666666]">From ₹89</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E5E1DD] flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#D92C1C]" />
                            <span className="font-medium text-[#4A4A4A] truncate">Gomti Nagar, Ext 4</span>
                          </div>
                          <span className="text-[10px] text-[#D92C1C] font-bold">Edit</span>
                        </div>
                      </motion.div>
                    )}

                    {/* SCREEN 2: LOCKED RATE CARD */}
                    {activeStep === 1 && (
                      <motion.div
                        key="screen-2"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3.5"
                      >
                        <div className="pb-2 border-b border-[#E5E1DD] flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#111111]">Transparent Rate Card</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#16A34A]">Locked Fare</span>
                        </div>

                        {/* Itemized Fare Receipt Mockup */}
                        <div className="space-y-2 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E1DD] text-xs">
                          <div className="flex justify-between text-[#555555]">
                            <span>Standard Base Fare</span>
                            <span className="font-semibold text-[#111111]">₹120.00</span>
                          </div>
                          <div className="flex justify-between text-[#555555]">
                            <span>Doorstep Transit Guarantee</span>
                            <span className="font-semibold text-[#111111]">₹18.00</span>
                          </div>
                          <div className="flex justify-between text-[#16A34A]">
                            <span>Rain / Peak Surge Tariff</span>
                            <span className="font-bold">₹0.00 (Waived)</span>
                          </div>
                          <div className="pt-2 border-t border-[#E5E1DD] flex justify-between font-extrabold text-sm text-[#111111]">
                            <span>Final Total Payable</span>
                            <span className="text-[#D92C1C]">₹138.00</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#FFF1EF] border border-[#D92C1C]/30 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#D92C1C] flex-shrink-0" />
                          <span className="text-[11px] font-semibold text-[#D92C1C]">Price will NOT change post booking</span>
                        </div>
                      </motion.div>
                    )}

                    {/* SCREEN 3: LIVE GPS TELEMETRY & OTP */}
                    {activeStep === 2 && (
                      <motion.div
                        key="screen-3"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3.5"
                      >
                        {/* Live Map Coordinate Simulation */}
                        <div className="h-32 rounded-2xl bg-[#E5E1DD] relative overflow-hidden border border-[#D5D1CD] flex items-center justify-center">
                          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:12px_12px]" />
                          
                          {/* Pulsing GPS Dot */}
                          <div className="relative flex items-center justify-center">
                            <span className="w-8 h-8 rounded-full bg-[#D92C1C]/20 animate-ping absolute" />
                            <div className="w-6 h-6 rounded-full bg-[#D92C1C] text-white flex items-center justify-center text-[10px] font-bold shadow-md relative z-10">
                              <Car className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          <span className="absolute bottom-2 left-2 bg-white/95 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold text-[#111111]">
                            GPS: 26.8467° N, 80.9462° E
                          </span>
                        </div>

                        {/* Specialist Info */}
                        <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E5E1DD] flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                              alt="Captain"
                              className="w-10 h-10 rounded-full object-cover border border-[#E5E1DD]"
                            />
                            <div>
                              <span className="font-bold text-xs text-[#111111] block">Mohammad Imran</span>
                              <div className="flex items-center gap-1 text-[10px] text-[#666666]">
                                <Star className="w-3 h-3 fill-[#FFD400] text-[#FFD400]" />
                                <span className="font-bold text-[#111111]">4.95</span>
                                <span>• 2,400+ jobs</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] text-[#666666] block font-mono">CONFIRMATION OTP</span>
                            <span className="font-mono font-extrabold text-sm text-[#D92C1C] tracking-wider">7492</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* SCREEN 4: COMPLETION & 30-DAY SHIELD */}
                    {activeStep === 3 && (
                      <motion.div
                        key="screen-4"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 text-center py-2"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto shadow-sm">
                          <Check className="w-7 h-7 stroke-[2.5]" />
                        </div>

                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A34A] block">
                            Service Verified & Completed
                          </span>
                          <h4 className="font-extrabold text-base text-[#111111] mt-0.5">
                            Everything Done Right
                          </h4>
                        </div>

                        {/* 30-Day Shield Certificate Mockup */}
                        <div className="p-3.5 rounded-2xl bg-[#FFF9E6] border border-[#FFD400]/40 text-left space-y-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#111111]">
                            <Award className="w-4 h-4 text-[#D97706]" />
                            <span>30-Day Quality Assurance Active</span>
                          </div>
                          <p className="text-[11px] text-[#666666] leading-relaxed">
                            Full rework or refund protected until 30 days post-completion.
                          </p>
                        </div>

                        <div className="flex items-center justify-center gap-1 text-[#FFD400]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  {/* Device Bottom Button */}
                  <div className="pt-4 border-t border-[#E5E1DD]">
                    <button
                      type="button"
                      onClick={() => openBooking()}
                      className="w-full py-2.5 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                    >
                      Test Drive Booking →
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* 3 High-Impact Trust Pillars (Matching User's Reference Card Design!) */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D92C1C] font-mono block mb-1">
                BUILT FOR REAL LIFE
              </span>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Why Lucknow Trusts Our Flow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="rounded-[2rem] bg-white p-8 border border-[#E5E1DD] shadow-2xs hover:shadow-card hover:border-[#D92C1C] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xl text-[#111111] tracking-tight">
                    Zero Cancellation Lock
                  </h3>
                  <div className="w-10 h-1 bg-[#D92C1C] rounded-full my-3" />
                  <p className="text-sm text-[#555555] leading-relaxed">
                    Once a specialist or captain accepts your request, your slot is guaranteed. No last-minute driver drops or cancelled technicians.
                  </p>
                </div>
                <div className="pt-6">
                  <span className="text-xs font-bold text-[#D92C1C] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more →
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[2rem] bg-white p-8 border border-[#E5E1DD] shadow-2xs hover:shadow-card hover:border-[#D92C1C] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xl text-[#111111] tracking-tight">
                    100% Police Verified
                  </h3>
                  <div className="w-10 h-1 bg-[#D92C1C] rounded-full my-3" />
                  <p className="text-sm text-[#555555] leading-relaxed">
                    Every driver, beautician, electrician, and cleaner undergoes strict government background verification and identity screening.
                  </p>
                </div>
                <div className="pt-6">
                  <span className="text-xs font-bold text-[#D92C1C] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more →
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-[2rem] bg-white p-8 border border-[#E5E1DD] shadow-2xs hover:shadow-card hover:border-[#D92C1C] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-xl text-[#111111] tracking-tight">
                    30-Day Quality Warranty
                  </h3>
                  <div className="w-10 h-1 bg-[#D92C1C] rounded-full my-3" />
                  <p className="text-sm text-[#555555] leading-relaxed">
                    If anything isn't executed to 100% perfection, our certified team returns for a complimentary rework or instant fee protection.
                  </p>
                </div>
                <div className="pt-6">
                  <span className="text-xs font-bold text-[#D92C1C] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more →
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom High-Conversion Action Banner */}
          <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#111111] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-elevated">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                <span>Ready To Experience It?</span>
              </div>

              <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight">
                BOOK YOUR FIRST LUCKNOW SERVICE IN SECONDS.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto font-normal">
                Join over 50,000 satisfied households across Lucknow who trust Tepito for rides, deliveries, salon pampering, and home maintenance.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openBooking()}
                  arrow
                >
                  Book A Service Now
                </Button>
                <Button
                  to="/services"
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  View All Rates
                </Button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
