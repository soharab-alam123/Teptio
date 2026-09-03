import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Cake, 
  Navigation, 
  Box,
  Star
} from 'lucide-react';
import { Button } from '../common/Button';
import { useBookingModal } from '../../context/BookingModalContext';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const DeliveryDetailView = ({ service }) => {
  const { openBooking } = useBookingModal();
  const [weightTier, setWeightTier] = useState('light');
  const [isFragile, setIsFragile] = useState(false);

  const calculateEstimate = () => {
    let base = weightTier === 'light' ? 49 : weightTier === 'medium' ? 89 : 149;
    if (isFragile) base += 40;
    return base;
  };

  // 4 Delivery Cards (Exact Blueprint from Screenshot)
  const deliverySolutions = [
    {
      id: 'doc-key-express',
      name: 'Document & Key Express',
      desc: 'Point-to-point courier handoff with direct digital pin authentication.',
      price: '49',
      duration: '25–35 MINS',
      durationBg: 'bg-[#FFF1EF] text-[#D92C1C] border border-[#D92C1C]/20',
      popular: true,
      icon: FileText,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF] border border-[#D92C1C]/30',
      btnBg: 'bg-[#D92C1C] hover:bg-[#B82315] text-white',
      priceColor: 'text-[#D92C1C]',
      cardBorder: 'border border-[#E5E1DD]',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'standard-parcel',
      name: 'Standard Parcel (up to 5kg)',
      desc: 'Point-to-point courier handoff with direct digital pin authentication.',
      price: '89',
      duration: '40–50 MINS',
      durationBg: 'bg-[#FFF9E6] text-[#D97706] border border-[#FFD400]/40',
      popular: false,
      icon: Package,
      iconColor: 'text-[#D97706]',
      iconBg: 'bg-[#FFF9E6] border border-[#FFD400]/40',
      btnBg: 'bg-[#EAB308] hover:bg-[#CA8A04] text-white',
      priceColor: 'text-[#D97706]',
      cardBorder: 'border border-[#E5E1DD]',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'fragile-cake',
      name: 'Fragile / Cake Delivery',
      desc: 'Point-to-point courier handoff with direct digital pin authentication.',
      price: '129',
      duration: '30–45 MINS',
      durationBg: 'bg-[#FFF1EF] text-[#D92C1C] border border-[#D92C1C]/20',
      popular: false,
      icon: Cake,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF] border border-[#D92C1C]/30',
      btnBg: 'bg-[#D92C1C] hover:bg-[#B82315] text-white',
      priceColor: 'text-[#D92C1C]',
      cardBorder: 'border-2 border-[#D92C1C] shadow-card',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'multi-stop',
      name: 'Multi-Stop Business Route',
      desc: 'Point-to-point courier handoff with direct digital pin authentication.',
      price: '199',
      duration: 'SCHEDULED',
      durationBg: 'bg-[#F3E8FF] text-[#7C3AED] border border-[#7C3AED]/30',
      popular: false,
      icon: Navigation,
      iconColor: 'text-[#7C3AED]',
      iconBg: 'bg-[#F3E8FF] border border-[#7C3AED]/30',
      btnBg: 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white',
      priceColor: 'text-[#7C3AED]',
      cardBorder: 'border border-[#E5E1DD]',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Quick Interactive Delivery Calculator / Booking Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E1DD] shadow-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E1DD]">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#D92C1C] uppercase block mb-1">
              Hyperlocal Dispatch
            </span>
            <h3 className="font-extrabold text-2xl text-[#111111] tracking-tight uppercase">
              ESTIMATE YOUR PARCEL ROUTE
            </h3>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs text-[#666666] block">Estimated Instant Fare</span>
            <span className="font-extrabold text-3xl text-[#111111] tracking-tight tabular-nums">
              <span className="text-[#D92C1C]">₹</span>{calculateEstimate()}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-2">
              Weight Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'light', label: '< 2kg' },
                { id: 'medium', label: '2–5kg' },
                { id: 'heavy', label: '5–15kg' }
              ].map(w => (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setWeightTier(w.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    weightTier === w.id
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#F6F4F1] text-[#555555] border-[#E5E1DD] hover:border-[#111111]'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-2">
              Handling Requirements
            </label>
            <button
              type="button"
              onClick={() => setIsFragile(!isFragile)}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all cursor-pointer ${
                isFragile
                  ? 'bg-[#FFF1EF] border-[#D92C1C] text-[#D92C1C]'
                  : 'bg-[#F6F4F1] border-[#E5E1DD] text-[#555555]'
              }`}
            >
              <span>Fragile / Cake Cushioning</span>
              <span className="font-bold">{isFragile ? '+₹40' : 'Off'}</span>
            </button>
          </div>

          <div className="flex items-end">
            <Button
              variant="primary"
              fullWidth
              size="md"
              arrow
              onClick={() => openBooking(service)}
            >
              Book Delivery Now
            </Button>
          </div>
        </div>
      </div>

      {/* TAILORED DELIVERY SOLUTIONS (Exact Blueprint from Screenshot) */}
      <div>
        
        {/* Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-widest text-[#D92C1C] mb-2">
            <span className="w-8 h-0.5 bg-[#FFD400] rounded-full" />
            <span>TAILORED DELIVERY SOLUTIONS</span>
            <span className="w-8 h-0.5 bg-[#FFD400] rounded-full" />
          </div>

          <h3 className="font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight leading-tight">
            Delivering what matters, <span className="text-[#D92C1C]">your way.</span>
          </h3>

          <p className="text-sm sm:text-base text-[#666666] font-normal mt-2">
            Fast, reliable & secure delivery options designed for every need.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverySolutions.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`group rounded-3xl bg-white ${card.cardBorder} shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                <div>
                  {/* Top Photo Frame */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-50 flex items-center justify-center p-3">
                    <ImageWithFallback
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Top-Left Duration / Type Pill */}
                    <div className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full ${card.durationBg} text-[10px] font-bold flex items-center gap-1 shadow-xs`}>
                      <Clock className="w-3 h-3" />
                      <span>{card.duration}</span>
                    </div>

                    {/* Top-Right Popular Badge */}
                    {card.popular && (
                      <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-[#111111] text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-xs">
                        <span>POPULAR</span>
                        <Star className="w-2.5 h-2.5 fill-current text-[#FFD400]" />
                      </div>
                    )}
                  </div>

                  {/* Overlapping Circular Center Icon Badge */}
                  <div className="relative -mt-7 mb-3 flex justify-center z-10">
                    <div className={`w-14 h-14 rounded-full bg-white ${card.iconBg} shadow-md flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-5 pb-2 text-center">
                    <h4 className="font-extrabold text-base sm:text-lg text-[#111111] tracking-tight leading-snug">
                      {card.name}
                    </h4>

                    <p className="text-xs text-[#666666] leading-relaxed mt-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Price and Book Action */}
                <div className="p-5 pt-3">
                  <div className="border-t border-dashed border-[#E5E1DD] mb-4" />

                  <div className="flex items-center justify-between gap-2">
                    <div className="text-left">
                      <span className="text-[11px] text-[#888888] block">From</span>
                      <span className={`font-extrabold text-2xl ${card.priceColor} tracking-tight tabular-nums block -mt-1`}>
                        ₹{card.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openBooking({ id: 'parcel-delivery', title: card.name })}
                      className={`inline-flex items-center gap-1.5 ${card.btnBg} font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm hover:shadow-card active:scale-95 transition-all duration-200 cursor-pointer`}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 4 Trust Features Strip (Exact Blueprint Match) */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-[#E5E1DD] p-5 sm:p-6 mt-12 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Secure Deliveries
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Digital PIN & OTP verified for every delivery.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF9E6] border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  On-Time Guarantee
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Timely delivery or flat ₹50 credit.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Live Tracking
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Real-time tracking & delivery updates.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF9E6] border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Safe Handling
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Trained partners for careful & secure deliveries.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
