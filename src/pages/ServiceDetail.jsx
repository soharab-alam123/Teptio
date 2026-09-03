import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ShieldCheck, Check, Clock, Plus, Minus, Star, Leaf, Wind, ClipboardCheck, Award } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { SERVICES_DATA } from '../data/services';
import { useBookingModal } from '../context/BookingModalContext';

// Views
import { DeliveryDetailView } from '../components/services/DeliveryDetailView';
import { RideDetailView } from '../components/services/RideDetailView';
import { BeautyDetailView } from '../components/services/BeautyDetailView';
import { LifestyleDetailView } from '../components/services/LifestyleDetailView';
import { CleaningDetailView } from '../components/services/CleaningDetailView';
import { PlumbingDetailView } from '../components/services/PlumbingDetailView';
import { ElectricalDetailView } from '../components/services/ElectricalDetailView';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const { openBooking } = useBookingModal();
  const [openFaqId, setOpenFaqId] = useState(0);

  const normalizeSlug = (s) => {
    if (!s) return '';
    const map = {
      'cab-rides': 'cab-ride',
      'cabs': 'cab-ride',
      'ride': 'cab-ride',
      'salon-at-home': 'beauty-salon',
      'beauty': 'beauty-salon',
      'salon': 'beauty-salon',
      'home-deep-cleaning': 'home-cleaning',
      'cleaning': 'home-cleaning',
      'plumbing-solutions': 'plumbing',
      'plumber': 'plumbing',
      'licensed-electrician': 'electrical-services',
      'electrician': 'electrical-services',
      'lifestyle': 'lifestyle-products',
      'store': 'lifestyle-products',
    };
    return map[s] || s;
  };

  const normalized = normalizeSlug(slug);
  const service = SERVICES_DATA.find((s) => s.slug === normalized || s.slug === slug || s.id === slug || s.id === normalized);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (idx) => {
    setOpenFaqId(openFaqId === idx ? null : idx);
  };

  const renderServiceSpecificUI = () => {
    switch (service.slug) {
      case 'parcel-delivery':
        return <DeliveryDetailView service={service} />;
      case 'cab-ride':
        return <RideDetailView service={service} />;
      case 'beauty-salon':
        return <BeautyDetailView service={service} />;
      case 'lifestyle-products':
        return <LifestyleDetailView service={service} />;
      case 'home-cleaning':
        return <CleaningDetailView service={service} />;
      case 'plumbing':
        return <PlumbingDetailView service={service} />;
      case 'electrical-services':
        return <ElectricalDetailView service={service} />;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title={`${service.title} | Tepito`}
        description={service.shortDescription}
      />

      <main className="pt-32 sm:pt-40 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb
            items={[
              { label: 'Services', to: '/services' },
              { label: service.title }
            ]}
          />

          {/* Editorial Service Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/25 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                <span>{service.badge}</span>
                <span>•</span>
                <span>{service.category}</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-[0.98]">
                {service.headline}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted font-normal max-w-xl leading-relaxed">
                {service.description}
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
                {service.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-[10px] font-mono text-muted uppercase block">
                      {stat.label}
                    </span>
                    <span className="font-display font-extrabold text-2xl text-primary font-mono">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                {service.slug !== 'lifestyle-products' && (
                  <Button
                    variant="primary"
                    size="lg"
                    arrow
                    onClick={() => openBooking(service)}
                  >
                    {service.cta}
                  </Button>
                )}
                <div className="flex items-center gap-2 text-xs text-muted font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Quality Assurance Shield Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right Lifestyle Photography Frame */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#E5E1DD] shadow-elevated aspect-[4/5] bg-white group">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Features Grid: THE STANDARD YOU CAN EXPECT (Exact Blueprint Match) */}
          <section className="mb-20 sm:mb-28">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center gap-3 mb-2.5">
                <span className="w-8 h-0.5 bg-[#FFD400] rounded-full" />
                <span className="px-4 py-1 rounded-full border border-[#D92C1C]/40 bg-[#FFF1EF]/60 text-xs font-bold tracking-wider uppercase text-[#D92C1C]">
                  OUR PROMISE
                </span>
                <span className="w-8 h-0.5 bg-[#FFD400] rounded-full" />
              </div>

              <h3 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#111111] tracking-tight uppercase leading-tight">
                THE STANDARD <span className="text-[#D92C1C]">YOU CAN EXPECT</span>
              </h3>

              <p className="text-sm sm:text-base text-[#666666] font-normal mt-2">
                Every service we deliver is backed by quality, safety, and trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {service.features.map((feat, i) => {
                const icons = [Leaf, Wind, ClipboardCheck, ShieldCheck];
                const Icon = icons[i % icons.length];
                const isRed = i % 2 === 0;

                return (
                  <div
                    key={i}
                    className={`group rounded-3xl bg-white p-7 border border-[#E5E1DD] shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden ${
                      isRed ? 'border-b-4 border-[#D92C1C]' : 'border-b-4 border-[#FFD400]'
                    }`}
                  >
                    {/* Top-Left Red Number Badge */}
                    <div className="w-7 h-7 rounded-lg bg-[#D92C1C] text-white font-extrabold text-xs flex items-center justify-center absolute top-4 left-4 shadow-xs">
                      0{i + 1}
                    </div>

                    <div className="pt-4 pb-2">
                      {/* Circular Centered Icon Badge */}
                      <div className={`w-16 h-16 rounded-full ${
                        isRed ? 'bg-[#FFF1EF]' : 'bg-[#FFF9E6]'
                      } flex items-center justify-center mx-auto mb-4 border border-black/5 group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 ${isRed ? 'text-[#D92C1C]' : 'text-[#D97706]'}`} />
                      </div>

                      {/* Colored Dash */}
                      <div className={`w-7 h-1 ${isRed ? 'bg-[#D92C1C]' : 'bg-[#FFD400]'} rounded-full mx-auto mb-3.5`} />

                      {/* Title */}
                      <h4 className="font-extrabold text-base sm:text-lg text-[#111111] tracking-tight leading-snug">
                        {feat.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed mt-2.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom 4 Trust Badges Strip */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E5E1DD] p-5 sm:p-6 shadow-2xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E1DD]">
                
                <div className="flex items-center gap-3 sm:pr-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D92C1C] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                      Verified Professionals
                    </span>
                    <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                      Background-checked & trained experts
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:px-4 pt-4 sm:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9E6] border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                      Quality Assured
                    </span>
                    <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                      Service quality you can rely on
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:px-4 pt-4 sm:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                      On-Time, Every Time
                    </span>
                    <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                      Punctual service, always
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:pl-4 pt-4 sm:pt-0">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF9E6] border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-xs">
                    <span className="font-extrabold text-sm">₹</span>
                  </div>
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                      Transparent Pricing
                    </span>
                    <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                      No hidden charges, ever
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Interactive Dynamic Service UI (Rate calculators, cart, tier selector) */}
          <section className="mb-20 sm:mb-28">
            {renderServiceSpecificUI()}
          </section>

          {/* Service FAQ Accordion */}
          {service.faq && service.faq.length > 0 && (
            <section className="max-w-4xl mx-auto mb-20">
              <div className="text-center mb-10">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#666666] block mb-1">
                  Questions
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#111111] tracking-tight uppercase">
                  ABOUT {service.title}
                </h3>
              </div>

              <div className="space-y-4">
                {service.faq.map((item, idx) => {
                  const isOpen = openFaqId === idx;
                  return (
                    <div
                      key={idx}
                      className={`group rounded-2xl bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.09)] hover:border-[#D92C1C]/60 overflow-hidden ${
                        isOpen
                          ? 'shadow-[0_8px_25px_-5px_rgba(217,44,28,0.08)] border border-[#D92C1C]/40 ring-1 ring-[#D92C1C]/20'
                          : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-[#E5E1DD]/80'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-4.5 sm:px-7 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span
                          className={`font-display font-bold text-[15px] sm:text-[16px] tracking-tight transition-colors duration-200 group-hover:text-[#D92C1C] ${
                            isOpen ? 'text-[#D92C1C]' : 'text-[#111111]'
                          }`}
                        >
                          {item.q}
                        </span>

                        {/* Circular Pill Toggle Button with hover scale & red highlight */}
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:bg-[#FFF1EF] group-hover:text-[#D92C1C] ${
                            isOpen
                              ? 'bg-[#FFF1EF] text-[#D92C1C]'
                              : 'bg-[#F6F4F1] text-[#777777]'
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-7 pb-5 pt-2 text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed border-t border-[#F0ECE7]">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Bottom Dispatch CTA Banner */}
          <section className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#222222]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                <span className="text-xs font-mono uppercase font-bold text-[#FFD400]">
                  Prompt Arrival in Lucknow Guaranteed
                </span>
              </div>
              <h4 className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase text-white">
                READY TO BOOK {service.title}?
              </h4>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mt-1">
                Instant match with certified local specialists in under 60 seconds across Lucknow.
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => openBooking(service)}
            >
              Book {service.title} Now
            </Button>
          </section>

        </div>
      </main>
    </>
  );
};
