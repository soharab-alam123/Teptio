import React, { useState } from 'react';
import { 
  Home, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Bath, 
  Flame, 
  Armchair, 
  Layers,
  Leaf,
  ClipboardCheck,
  Award,
  Wind
} from 'lucide-react';
import { Button } from '../common/Button';
import { useBookingModal } from '../../context/BookingModalContext';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const CleaningDetailView = ({ service }) => {
  const { openBooking } = useBookingModal();
  const [bhk, setBhk] = useState('3bhk');
  const [cleaningScope, setCleaningScope] = useState('deep');

  const rates = {
    '1bhk': { regular: 1499, deep: 2499, moveIn: 3499 },
    '2bhk': { regular: 1999, deep: 2999, moveIn: 4199 },
    '3bhk': { regular: 2499, deep: 3499, moveIn: 4999 },
    'villa': { regular: 3999, deep: 5999, moveIn: 7999 },
  };

  const currentPrice = rates[bhk][cleaningScope];

  // 5 Specialized Area Treatment Cards (Matching previous blueprint)
  const specializedCards = [
    {
      id: 'full-apartment',
      duration: '4–5 HOURS',
      titleLine1: 'Full Apartment Deep Clean',
      titleHighlight: '(2–3 BHK)',
      desc: 'Hospital-grade disinfection with specialized degreasers and anti-microbial surface coating.',
      price: '3,499',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'kitchen-degreasing',
      duration: '2 HOURS',
      titleLine1: 'Intense Kitchen',
      titleHighlight: 'Degreasing & Chimney',
      desc: 'Hospital-grade disinfection with specialized degreasers and anti-microbial surface coating.',
      price: '1,499',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'bathroom-restoration',
      duration: '90 MINS',
      titleLine1: 'Bathroom Anti-Scale &',
      titleHighlight: 'Grout Restoration',
      desc: 'Hospital-grade disinfection with specialized degreasers and anti-microbial surface coating.',
      price: '899',
      icon: Bath,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'sofa-shampooing',
      duration: '75 MINS',
      titleLine1: 'Sofa & Upholstery',
      titleHighlight: 'Thermal Shampooing',
      desc: 'German injection-extraction deep foam wash lifting stubborn stains, allergens, and odors.',
      price: '799',
      icon: Armchair,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'balcony-window',
      duration: '60 MINS',
      titleLine1: 'Balcony & Window',
      titleHighlight: 'Track Restoration',
      desc: 'High-pressure steam jetting for grime removal, sill sanitization, and streak-free glass polish.',
      price: '599',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80'
    }
  ];

  // 4 Standards Cards (Exact match to user's latest uploaded blueprint)
  const standardPromises = [
    {
      num: '01',
      title: 'Non-Toxic Green Formulas',
      desc: 'Safe for toddlers, infants, and pets with zero harsh chlorine residue.',
      icon: Leaf,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF]',
      dashColor: 'bg-[#D92C1C]',
      bottomBorder: 'border-b-4 border-[#D92C1C]'
    },
    {
      num: '02',
      title: 'High-Pressure Steamers',
      desc: 'Thermal 140°C steam extraction for tile grout, mattress sanitizing, and grease.',
      icon: Wind,
      iconColor: 'text-[#D97706]',
      iconBg: 'bg-[#FFF9E6]',
      dashColor: 'bg-[#FFD400]',
      bottomBorder: 'border-b-4 border-[#FFD400]'
    },
    {
      num: '03',
      title: 'Standardized 64-Point Audit',
      desc: 'Supervised checklist inspection with photo verification before handover.',
      icon: ClipboardCheck,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF]',
      dashColor: 'bg-[#D92C1C]',
      bottomBorder: 'border-b-4 border-[#D92C1C]'
    },
    {
      num: '04',
      title: 'Insurance Shield Included',
      desc: 'Full liability protection for high-value interior furnishings and fixtures.',
      icon: ShieldCheck,
      iconColor: 'text-[#D97706]',
      iconBg: 'bg-[#FFF9E6]',
      dashColor: 'bg-[#FFD400]',
      bottomBorder: 'border-b-4 border-[#FFD400]'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-24">
      
      {/* 1. Interactive Size & Scope Configurator */}
      <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 border border-[#E5E1DD] shadow-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E1DD]">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#D92C1C] uppercase block mb-1">
              Sanitization Calculator
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight uppercase">
              CONFIGURE YOUR CLEANING PACKAGE
            </h3>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs text-[#666666] block">Fixed Carpet Estimate</span>
            <span className="font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight tabular-nums">
              <span className="text-[#D92C1C]">₹</span>{currentPrice.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Home Size */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-3">
              1. Select Home Layout
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: '1bhk', label: '1 BHK' },
                { id: '2bhk', label: '2 BHK' },
                { id: '3bhk', label: '3 BHK' },
                { id: 'villa', label: 'Villa / 4+' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setBhk(item.id)}
                  className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                    bhk === item.id
                      ? 'bg-[#111111] text-white border-[#111111] shadow-sm'
                      : 'bg-[#F6F4F1] text-[#4A4A4A] border-[#E5E1DD] hover:border-[#111111]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cleaning Scope */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-3">
              2. Cleaning Intensity
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'regular', label: 'Standard' },
                { id: 'deep', label: 'Deep Sanitization' },
                { id: 'moveIn', label: 'Move-in' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCleaningScope(item.id)}
                  className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                    cleaningScope === item.id
                      ? 'bg-[#111111] text-white border-[#111111] shadow-sm'
                      : 'bg-[#F6F4F1] text-[#4A4A4A] border-[#E5E1DD] hover:border-[#111111]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5E1DD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#555555]">
            ✓ Includes German vacuum extraction, 140°C thermal steam, and non-toxic hospital disinfectants.
          </div>
          <Button
            variant="primary"
            size="lg"
            arrow
            onClick={() => openBooking({ id: 'home-cleaning', title: `Home Cleaning (${bhk.toUpperCase()} - ${cleaningScope})` })}
          >
            Schedule Cleaning Crew
          </Button>
        </div>
      </div>

      {/* 2. 5 Specialized Area Treatments (Matching Blueprint) */}
      <div>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-widest text-[#D92C1C] mb-2">
            <span className="w-8 h-0.5 bg-[#D92C1C] rounded-full" />
            <span>SPECIALIZED AREA TREATMENTS</span>
            <span className="w-8 h-0.5 bg-[#D92C1C] rounded-full" />
          </div>

          <h3 className="font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight leading-tight">
            Targeted care for every space.
          </h3>

          <p className="text-sm sm:text-base text-[#666666] font-normal mt-2">
            Deep cleaning solutions for specific areas with professional-grade results.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specializedCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="group rounded-3xl bg-white border border-[#E5E1DD] shadow-card hover:shadow-elevated hover:border-[#D92C1C] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Photo with Top-Left Duration Pill */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={card.image}
                      alt={card.titleLine1}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Top-Left Duration Pill */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#D92C1C] text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{card.duration}</span>
                    </div>
                  </div>

                  {/* Overlapping Circular Center Icon Badge */}
                  <div className="relative -mt-7 mb-3 flex justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#D92C1C]/40 shadow-md flex items-center justify-center text-[#D92C1C] group-hover:scale-110 group-hover:border-[#D92C1C] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-6 pb-2 text-center">
                    <h4 className="font-extrabold text-lg sm:text-xl text-[#111111] tracking-tight leading-snug">
                      {card.titleLine1} <br />
                      <span className="text-[#D92C1C]">{card.titleHighlight}</span>
                    </h4>

                    <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed mt-2.5">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Dashed Line & Bottom Price/Action */}
                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-dashed border-[#E5E1DD] my-4" />

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-[#888888] block leading-none">
                        STARTING AT
                      </span>
                      <span className="font-extrabold text-2xl text-[#111111] tracking-tight tabular-nums block mt-1">
                        <span className="text-[#D92C1C]">₹</span>{card.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBooking({ id: 'home-cleaning', title: `${card.titleLine1} ${card.titleHighlight}` })}
                      className="inline-flex items-center gap-1.5 bg-[#D92C1C] hover:bg-[#B82315] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-card active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
