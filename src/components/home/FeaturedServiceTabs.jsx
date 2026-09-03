import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const FeaturedServiceTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredTabs = [
    {
      number: '01',
      label: 'Delivery',
      slug: 'parcel-delivery',
      headline: 'DOORSTEP TO ANYWHERE IN UNDER 45 MINUTES.',
      description: 'Never worry about forgotten keys, vital contracts, or evening packages. Our express couriers pick up from your doorstep within 8 minutes and deliver directly with PIN security.',
      ctaText: 'Explore Delivery',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Sub-45 min point-to-point transit', 'Two-factor secure OTP handoff', 'Damage protection up to ₹10,000']
    },
    {
      number: '02',
      label: 'Rides',
      slug: 'cab-ride',
      headline: 'ZERO DRIVER CANCELLATIONS. PREDICTABLE FARES.',
      description: 'City commuting without friction. Our professional captains accept your ride with upfront route clarity, meaning you never face last-minute ride cancellations when heading to an important meeting.',
      ctaText: 'Explore Rides',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Chauffeur-trained verified captains', 'Spotless sanitized sedans & SUVs', 'Silent ride toggle for peace of mind']
    },
    {
      number: '03',
      label: 'Beauty',
      slug: 'beauty-salon',
      headline: 'CLINICAL HYGIENE. SALON ARTISTRY AT HOME.',
      description: 'Experience luxury facials, haircuts, and pedicures delivered by top 1% licensed beauticians utilizing sealed, single-use sterile kits in the comfort of your private space.',
      ctaText: 'Explore Beauty',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      highlights: ['100% disposable single-use sterile kits', 'Authentic luxury brands (L’Oréal, O3+)', 'Zero mess post-service cleanup']
    },
    {
      number: '04',
      label: 'Home',
      slug: 'home-cleaning',
      headline: 'DEEP RESTORATION FOR YOUR PRIVATE SANCTUARY.',
      description: 'Our certified cleaning teams deploy German steam extraction, hospital-grade non-toxic disinfectants, and standardized 64-point checklists to leave every room radiant.',
      ctaText: 'Explore Home Care',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Non-toxic formulas safe for kids & pets', 'High-temp steam for grout & upholstery', 'Free 24-hour touch-up redo guarantee']
    },
    {
      number: '05',
      label: 'Lifestyle',
      slug: 'lifestyle-products',
      headline: 'CURATED AESTHETICS FOR CONTEMPORARY LIVING.',
      description: 'Design-forward lifestyle essentials delivered to your door in 90 minutes. Solid brass incense burners, Belgian flax throws, and cold-pressed botanical wellness elixirs.',
      ctaText: 'Explore Lifestyle',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      highlights: ['Plastic-neutral sustainable packaging', 'Hyperlocal 90-minute city transit', 'Handcrafted artisan provenance']
    }
  ];

  const current = featuredTabs[activeIndex];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-xl mb-8">
          <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase block mb-1">
            Spotlight Vertical
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-primary tracking-tight uppercase leading-snug">
            MADE FOR THE WAY YOU LIVE.
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted max-w-md">
            From doorstep deliveries to getting across the city, everyday services are just a few taps away.
          </p>
        </div>

        {/* Content Box with Dynamic Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Side: Animated Text Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1EF] border border-[#D92C1C]/25 text-[#D92C1C] text-xs font-mono font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                  <span>Vertical {current.number}</span>
                  <span>•</span>
                  <span>{current.label}</span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] uppercase tracking-tight leading-snug">
                  {current.headline}
                </h3>

                <p className="text-[#3D3D3D] text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-1">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#D92C1C] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    to={`/services/${current.slug}`}
                    variant="primary"
                    size="md"
                    arrow
                  >
                    {current.ctaText}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Animated Lifestyle Imagery */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E1DD] shadow-subtle bg-[#F6F4F1] aspect-[16/10] max-h-80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.slug}
                  src={current.image}
                  alt={current.label}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Selector Bar */}
        <div className="mt-10 pt-6 border-t border-[#E5E1DD] grid grid-cols-2 sm:grid-cols-5 gap-3">
          {featuredTabs.map((tab, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={tab.number}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`text-left p-3.5 rounded-xl transition-all duration-150 cursor-pointer border ${
                  isActive
                    ? 'bg-[#111111] text-white border-[#111111] shadow-sm'
                    : 'bg-[#F6F4F1] text-[#666666] hover:text-[#111111] border-[#E5E1DD] hover:bg-white'
                }`}
              >
                <span className={`text-[11px] font-mono font-bold block mb-0.5 ${isActive ? 'text-[#FFD400]' : 'text-[#888888]'}`}>
                  {tab.number}
                </span>
                <span className="font-display font-bold text-[13px] tracking-tight block">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
