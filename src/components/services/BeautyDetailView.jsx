import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  Clock, 
  ShieldCheck, 
  User, 
  Tag, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '../common/Button';
import { useBookingModal } from '../../context/BookingModalContext';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const BeautyDetailView = ({ service }) => {
  const { openBooking } = useBookingModal();

  // 5 Salon Experience Cards (Honey Wax replaced with Luxury Rose & Milk Pedicure Spa)
  const salonExperiences = [
    {
      id: 'o3-facial',
      name: 'O3+ Luxury Bridal Glow Facial',
      rating: '4.95',
      duration: '75 mins',
      price: '1,899',
      desc: 'Complete setup provided. Beautician carries single-use floor sheets, sanitized tools, and authentic salon products.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      activeBorder: false
    },
    {
      id: 'rose-pedicure',
      name: 'Luxury Rose & Milk Pedicure Spa',
      rating: '4.91',
      duration: '60 mins',
      price: '1,299',
      desc: 'Complete setup provided. Beautician carries single-use floor sheets, sanitized tools, and authentic salon products.',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80',
      activeBorder: true
    },
    {
      id: 'keratin-spa',
      name: 'Keratin Hair Spa & Scalp Detox',
      rating: '4.88',
      duration: '60 mins',
      price: '2,499',
      desc: 'Complete setup provided. Beautician carries single-use floor sheets, sanitized tools, and authentic salon products.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
      activeBorder: false
    },
    {
      id: 'mens-beard-facial',
      name: "Executive Men's Beard Sculpt & Facial",
      rating: '4.89',
      duration: '50 mins',
      price: '1,499',
      desc: 'Complete setup provided. Beautician carries single-use floor sheets, sanitized tools, and authentic salon products.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
      activeBorder: false
    },
    {
      id: 'diamond-skin-polish',
      name: 'Diamond Glow Hydrafacial & Skin Polish',
      rating: '4.96',
      duration: '90 mins',
      price: '2,799',
      desc: 'Complete setup provided. Beautician carries single-use floor sheets, sanitized tools, and authentic salon products.',
      image: 'https://images.unsplash.com/photo-1512290900672-1f4094002621?auto=format&fit=crop&w=600&q=80',
      activeBorder: false
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* POPULAR SALON EXPERIENCES (Exact Blueprint from Screenshot) */}
      <div>
        
        {/* Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="text-sm">👩</span>
              <span>AT-HOME MENU</span>
            </div>

            <h3 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#111111] tracking-tight uppercase leading-[1.08]">
              POPULAR <span className="text-[#D92C1C]">SALON EXPERIENCES</span>
            </h3>

            <p className="text-sm sm:text-base text-[#666666] font-normal mt-2">
              Premium salon treatments at your convenience with complete hygiene & care.
            </p>
          </div>

          {/* Top-Right Floating Sterile Guarantee Card matching screenshot */}
          <div className="rounded-2xl border border-[#D92C1C]/30 bg-[#FFF1EF]/60 p-3.5 sm:px-5 sm:py-3.5 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D92C1C]/30 text-[#D92C1C] flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xs sm:text-sm text-[#111111] block leading-tight">
                100% Sterile Sealed Mono-Dose Sachets
              </span>
              <span className="text-[11px] text-[#777777] block mt-0.5">
                Hygienic. Safe. Trusted.
              </span>
            </div>
          </div>
        </div>

        {/* 5 Cards Grid in 2 Columns matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {salonExperiences.map((item) => (
            <div
              key={item.id}
              className={`group rounded-3xl bg-white p-5 sm:p-6 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col sm:flex-row gap-5 items-stretch ${
                item.activeBorder
                  ? 'border-2 border-[#D92C1C]'
                  : 'border border-[#E5E1DD]'
              }`}
            >
              {/* Left Photo Container */}
              <div className="w-full sm:w-44 h-48 sm:h-auto rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 relative">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Right Content Column */}
              <div className="flex flex-col justify-between flex-1 space-y-3.5">
                <div>
                  {/* Top Metadata Row: Rating & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF1EF] text-[#D92C1C] text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{item.rating}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F6F4F1] text-[#666666] text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-extrabold text-base sm:text-lg text-[#111111] tracking-tight leading-snug">
                    {item.name}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-[#666666] leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>

                {/* 3 Feature Pills matching screenshot */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFF1EF]/60 text-[#D92C1C] text-[10px] font-semibold">
                    <Sparkles className="w-3 h-3" />
                    <span>Premium Products</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFF1EF]/60 text-[#D92C1C] text-[10px] font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Hygienic Setup</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFF1EF]/60 text-[#D92C1C] text-[10px] font-semibold">
                    <User className="w-3 h-3" />
                    <span>Expert Beautician</span>
                  </span>
                </div>

                {/* Bottom Row: Price + Book Action */}
                <div className="pt-3 border-t border-[#E5E1DD] flex items-center justify-between">
                  <span className="font-extrabold text-2xl text-[#111111] tracking-tight tabular-nums">
                    <span className="text-[#D92C1C]">₹</span>{item.price}
                  </span>

                  <button
                    type="button"
                    onClick={() => openBooking({ id: 'beauty-salon', title: item.name })}
                    className="inline-flex items-center gap-1.5 bg-[#D92C1C] hover:bg-[#B82315] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-card active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 4 Trust Features Strip (Exact Blueprint from Screenshot) */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E5E1DD] p-5 sm:p-6 mt-12 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Certified Professionals
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Background verified & trained experts
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Hygienic & Safe
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Single-use kits & sanitized tools
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  On-Time Service
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Punctual & reliable at your door
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                <Tag className="w-5 h-5" />
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

      </div>

    </div>
  );
};
