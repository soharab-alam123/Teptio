import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Star, 
  Percent, 
  FileText, 
  ShieldAlert, 
  CheckCircle2 
} from 'lucide-react';
import { Button } from '../common/Button';
import { useBookingModal } from '../../context/BookingModalContext';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const ElectricalDetailView = ({ service }) => {
  const { openBooking } = useBookingModal();

  // 6 Specialized Electrical Cards (Matching Blueprint)
  const electricalTasks = [
    {
      id: 'fan',
      name: 'Ceiling Fan & Chandelier Installation',
      desc: 'Secure anchor bolting, balance alignment, and speed regulator wiring.',
      price: '199',
      time: '30 MINS',
      timeBg: 'bg-[#F6F4F1] text-[#555555]',
      imgBg: 'bg-[#FFF1EF]',
      boltBg: 'bg-[#D92C1C]',
      licensedColor: 'text-[#D92C1C] bg-[#FFF1EF]',
      popular: false,
      image: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'mcb',
      name: 'MCB Trip & Short Circuit Diagnostics',
      desc: 'Thermal camera wire scanning and circuit isolator repair.',
      price: '399',
      time: '45 MINS',
      timeBg: 'bg-[#FFF9E6] text-[#D97706]',
      imgBg: 'bg-[#FFF9E6]',
      boltBg: 'bg-[#FFD400]',
      licensedColor: 'text-[#D97706] bg-[#FFF9E6]',
      popular: true,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'switchboard',
      name: 'Modular Switchboard Replacement & Wiring',
      desc: 'Flame-retardant socket fitting and earthing verification.',
      price: '299',
      time: '40 MINS',
      timeBg: 'bg-[#F6F4F1] text-[#555555]',
      imgBg: 'bg-[#FFF1EF]',
      boltBg: 'bg-[#D92C1C]',
      licensedColor: 'text-[#D92C1C] bg-[#FFF1EF]',
      popular: false,
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'inverter',
      name: 'Inverter & Battery Power Backup Setup',
      desc: 'Sub-panel changeover switch and deep-cycle battery terminal setup.',
      price: '499',
      time: '45 MINS',
      timeBg: 'bg-[#FFF9E6] text-[#D97706]',
      imgBg: 'bg-[#FFF9E6]',
      boltBg: 'bg-[#FFD400]',
      licensedColor: 'text-[#D97706] bg-[#FFF9E6]',
      popular: false,
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'heavy-power',
      name: 'Heavy Appliance & AC Power Line Setup',
      desc: '4 sq mm heavy-duty fire-safe cable routing with dedicated breaker.',
      price: '599',
      time: '50 MINS',
      timeBg: 'bg-[#F6F4F1] text-[#555555]',
      imgBg: 'bg-[#FFF1EF]',
      boltBg: 'bg-[#D92C1C]',
      licensedColor: 'text-[#D92C1C] bg-[#FFF1EF]',
      popular: false,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'smart-lights',
      name: 'Smart Home Automation & Sensor Lights',
      desc: 'Motion sensor lighting, smart WiFi relay switches, and load balancing.',
      price: '249',
      time: '35 MINS',
      timeBg: 'bg-[#FFF9E6] text-[#D97706]',
      imgBg: 'bg-[#FFF9E6]',
      boltBg: 'bg-[#FFD400]',
      licensedColor: 'text-[#D97706] bg-[#FFF9E6]',
      popular: false,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Safety Protocol Banner */}
      <div className="bg-[#111111] text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-elevated">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFD400] text-xs font-mono font-bold uppercase">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Safety First Protocol</span>
            </div>
            <h4 className="font-extrabold text-2xl sm:text-3xl tracking-tight uppercase">
              GOVERNMENT CLASS-A LICENSED ELECTRICIANS
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
              Every electrician carries insulated IEC 60900 safety tools, FLIR thermal diagnostic cameras, and ₹50,000 accidental damage liability insurance coverage.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openBooking({ id: 'electrical-services', title: 'Electrical Safety Dispatch' })}
            >
              Request Certified Electrician
            </Button>
          </div>
        </div>
      </div>

      {/* COMMONLY REQUESTED FIXES (Exact Blueprint from Screenshot) */}
      <div>
        
        {/* Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-bold uppercase tracking-wider text-[#111111] mb-3">
              <Zap className="w-3.5 h-3.5 text-[#EAB308] fill-current" />
              <span>STANDARD ELECTRICAL RATECARD</span>
            </div>

            <h3 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#111111] tracking-tight uppercase leading-[1.08]">
              COMMONLY <br />
              <span className="text-[#D92C1C]">REQUESTED FIXES</span>
            </h3>

            <p className="text-sm sm:text-base text-[#666666] font-normal mt-2">
              Safe. Reliable. Certified. We fix it right the first time.
            </p>
          </div>

          {/* Top-Right Floating Inspection Fee Card matching screenshot */}
          <div className="rounded-2xl border border-[#FFD400]/50 bg-[#FFF9E6] p-3.5 sm:px-5 sm:py-3.5 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Percent className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xs sm:text-sm text-[#111111] block leading-tight">
                Inspection fee
              </span>
              <span className="text-[11px] text-[#777777] block mt-0.5">
                waived upon job execution
              </span>
            </div>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {electricalTasks.map((task) => {
            const isMostBooked = task.popular;

            return (
              <div
                key={task.id}
                className={`group rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between shadow-card hover:shadow-elevated transition-all duration-300 relative ${
                  isMostBooked 
                    ? 'border-2 border-[#D92C1C]' 
                    : 'border border-[#E5E1DD]'
                }`}
              >
                {/* Most Booked Center Floating Bookmark */}
                {isMostBooked && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D92C1C] text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current text-[#FFD400]" />
                    <span>MOST BOOKED</span>
                  </div>
                )}

                <div>
                  {/* Top Info Badges Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 ${task.timeBg}`}>
                      <Clock className="w-3 h-3" />
                      <span>{task.time}</span>
                    </span>

                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 ${task.licensedColor}`}>
                      <ShieldCheck className="w-3 h-3" />
                      <span>LICENSED</span>
                    </span>
                  </div>

                  {/* Horizontal Split Body: Left Illustration Container + Right Text Content */}
                  <div className="flex items-start gap-4">
                    {/* Square Rounded Illustration Container with Lightning Bolt mini-badge */}
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${task.imgBg} p-2 flex-shrink-0 flex items-center justify-center overflow-hidden border border-black/5 group-hover:scale-105 transition-transform duration-300 relative`}>
                      <ImageWithFallback
                        src={task.image}
                        alt={task.name}
                        className="w-full h-full object-contain rounded-xl"
                        loading="lazy"
                      />

                      {/* Small Circular Lightning Badge in bottom-right corner of image */}
                      <div className={`w-5 h-5 rounded-full ${task.boltBg} text-white flex items-center justify-center absolute bottom-2 right-2 shadow-xs`}>
                        <Zap className="w-3 h-3 fill-current" />
                      </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="space-y-1.5 flex-1">
                      <h4 className="font-extrabold text-base sm:text-[17px] text-[#111111] tracking-tight leading-snug">
                        {task.name}
                      </h4>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        {task.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Starting From + Action Button */}
                <div className="pt-6 mt-6 border-t border-[#E5E1DD] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#888888] block leading-none">
                      STARTING FROM
                    </span>
                    <span className="font-extrabold text-2xl text-[#111111] tracking-tight tabular-nums block mt-1">
                      <span className="text-[#D92C1C]">₹</span>{task.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openBooking({ id: 'electrical-services', title: task.name })}
                    className="inline-flex items-center gap-1.5 bg-[#D92C1C] hover:bg-[#B82315] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-card active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Book Fix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
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
                  Certified Electricians
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Background verified, licensed & trained experts.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF9E6] border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Safe & Compliant
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  All work follows safety standards & guidelines.
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
                  Punctual service with no last-minute delays.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF9E6] border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Transparent Pricing
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Upfront rates with no hidden charges.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
