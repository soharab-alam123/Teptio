import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  Check, 
  ArrowRight, 
  Star, 
  Droplet,
  Award
} from 'lucide-react';
import { Button } from '../common/Button';
import { useBookingModal } from '../../context/BookingModalContext';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const PlumbingDetailView = ({ service }) => {
  const { openBooking } = useBookingModal();

  // 6 Specialized Plumbing Cards (Matching Blueprint)
  const plumbingJobs = [
    {
      id: 'leakage',
      name: 'Concealed Pipe Leakage',
      desc: 'Acoustic leak sonar pinpointing without tile destruction.',
      time: '45 MINS',
      timeBg: 'bg-[#FFF1EF] text-[#D92C1C]',
      imgBg: 'bg-[#FFF1EF]',
      price: '649',
      popular: false,
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'tap',
      name: 'Tap, Mixer & Faucet Replacement',
      desc: 'Precision cartridge seating and ceramic seal fitting.',
      time: '30 MINS',
      timeBg: 'bg-[#FFF9E6] text-[#D97706]',
      imgBg: 'bg-[#FFF9E6]',
      price: '249',
      popular: true,
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'drain',
      name: 'Drain & Toilet Blockage Clearance',
      desc: 'High-torque rotational snake clearing and sanitizing.',
      time: '40 MINS',
      timeBg: 'bg-[#FFF1EF] text-[#D92C1C]',
      imgBg: 'bg-[#FFF1EF]',
      price: '499',
      popular: false,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'geyser',
      name: 'Water Heater & Geyser Servicing',
      desc: 'Anode rod replacement, scale flushing, and thermostat safety check.',
      time: '45 MINS',
      timeBg: 'bg-[#FFF9E6] text-[#D97706]',
      imgBg: 'bg-[#FFF9E6]',
      price: '399',
      popular: false,
      image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'tank',
      name: 'Overhead Tank & Motor Repair',
      desc: 'Automatic float switch wiring, impellor alignment, and booster check.',
      time: '60 MINS',
      timeBg: 'bg-[#FFF1EF] text-[#D92C1C]',
      imgBg: 'bg-[#FFF1EF]',
      price: '799',
      popular: false,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'shower',
      name: 'Shower & Sanitaryware Fitting',
      desc: 'Diverter installation, jet spray alignment, and silicon water-proofing.',
      time: '35 MINS',
      timeBg: 'bg-[#FFF9E6] text-[#D97706]',
      imgBg: 'bg-[#FFF9E6]',
      price: '349',
      popular: false,
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Priority Emergency Callout Banner */}
      <div className="bg-[#FAF9F5] border border-[#E5E1DD] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF1EF] text-[#D92C1C] flex items-center justify-center flex-shrink-0 border border-[#D92C1C]/20">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-extrabold text-lg text-[#111111]">
              Active Water Leak or Burst Pipe?
            </h4>
            <p className="text-xs text-[#666666] mt-0.5">
              Rapid priority dispatch units are available within 25 minutes across Lucknow.
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => openBooking({ id: 'plumbing', title: 'Emergency Plumbing Dispatch' })}
        >
          Dispatch Priority Plumber
        </Button>
      </div>

      {/* SELECT YOUR PLUMBING ISSUE (Exact Blueprint from Screenshot) */}
      <div>
        
        {/* Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D92C1C]/40 bg-[#FFF1EF]/60 text-xs font-bold tracking-wider uppercase text-[#D92C1C] mb-3">
              <span>FIXED TRANSPARENT RATE CARD</span>
            </div>

            <h3 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#111111] tracking-tight uppercase leading-[1.08]">
              SELECT YOUR <br />
              <span className="text-[#D92C1C]">PLUMBING ISSUE</span>
            </h3>

            <p className="text-sm sm:text-base text-[#666666] font-normal mt-2">
              Choose your issue and we'll handle the rest with expert care.
            </p>
          </div>

          {/* Top-Right 30-Day Warranty Badge matching screenshot */}
          <div className="rounded-2xl border border-[#16A34A]/30 bg-[#F0FDF4] p-3.5 sm:px-5 sm:py-3 flex items-center gap-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm text-[#16A34A] block leading-tight">
                30-Day Unconditional Warranty
              </span>
              <span className="text-[11px] text-[#15803D] block mt-0.5">
                On all plumbing services
              </span>
            </div>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plumbingJobs.map((job) => {
            const isMostBooked = job.popular;

            return (
              <div
                key={job.id}
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
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 ${job.timeBg}`}>
                      <Clock className="w-3 h-3" />
                      <span>{job.time}</span>
                    </span>

                    <span className="text-[10px] font-mono font-bold text-[#888888] bg-[#F6F4F1] px-2.5 py-0.5 rounded-full">
                      Warranty 30D
                    </span>
                  </div>

                  {/* Horizontal Split Body: Left Illustration Container + Right Text Content */}
                  <div className="flex items-start gap-4">
                    {/* Square Rounded Illustration Container */}
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${job.imgBg} p-2 flex-shrink-0 flex items-center justify-center overflow-hidden border border-black/5 group-hover:scale-105 transition-transform duration-300`}>
                      <ImageWithFallback
                        src={job.image}
                        alt={job.name}
                        className="w-full h-full object-contain rounded-xl"
                        loading="lazy"
                      />
                    </div>

                    {/* Right Text Content */}
                    <div className="space-y-1.5 flex-1">
                      <h4 className="font-extrabold text-base sm:text-[17px] text-[#111111] tracking-tight leading-snug">
                        {job.name}
                      </h4>
                      <p className="text-xs text-[#666666] leading-relaxed">
                        {job.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Labor Rate + Action Button */}
                <div className="pt-6 mt-6 border-t border-[#E5E1DD] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#888888] block leading-none">
                      LABOR RATE
                    </span>
                    <span className="font-extrabold text-2xl text-[#111111] tracking-tight tabular-nums block mt-1">
                      <span className="text-[#D92C1C]">₹</span>{job.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openBooking({ id: 'plumbing', title: job.name })}
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
                  Upfront Fixed Pricing
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  No hidden charges, what you see is what you pay.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF9E6] border border-[#FFD400]/40 text-[#D97706] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  Expert Plumbers
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Background-verified & highly trained professionals.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1EF] border border-[#D92C1C]/20 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  On-Time Guarantee
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  We respect your time and always show up on time.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#DCFCE7] border border-[#16A34A]/30 text-[#16A34A] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                  30-Day Warranty
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight mt-0.5">
                  Service backed by our unconditional warranty.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
