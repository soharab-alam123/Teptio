import React from 'react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { Users, Award, ShieldCheck, Headphones } from 'lucide-react';

export const TrustStats = () => {
  const stats = [
    {
      value: 10,
      suffix: 'K+',
      label: 'Happy Households',
      sub: 'Verified 4.9-star ratings across Lucknow',
      icon: Users
    },
    {
      value: 45,
      suffix: 'K+',
      label: 'Services Delivered',
      sub: 'Cabs, express parcels & home repairs',
      icon: Award
    },
    {
      value: 520,
      suffix: '+',
      label: 'Vetted Specialists',
      sub: 'Police-verified drivers, plumbers & stylists',
      icon: ShieldCheck
    },
    {
      value: '24/7',
      suffix: '',
      label: 'Lucknow Helpline',
      sub: 'Real human support desk at Cyber Heights',
      icon: Headphones
    }
  ];

  return (
    <section className="bg-[#F6F4F1] text-[#111111] py-14 sm:py-18 relative overflow-hidden border-y border-[#E5E1DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E5E1DD]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E1DD] text-[11px] font-semibold uppercase tracking-wider text-[#111111] mb-2 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              <span>Demonstrated Reliability</span>
              <span className="text-[#666666]">/ Lucknow</span>
            </div>
            <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight uppercase">
              TRUSTED EVERY DAY ACROSS LUCKNOW.
            </h2>
          </div>
          <p className="text-[14px] text-[#4A4A4A] max-w-sm font-normal">
            High standards of safety, verified background vetting, and guaranteed upfront fares for every booking.
          </p>
        </div>

        {/* 4 Clean High-Contrast White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#E5E1DD] shadow-2xs hover:shadow-card hover:border-[#D92C1C] hover:-translate-y-1 transition-all duration-300 ease-out group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] flex items-center justify-center text-[#111111] group-hover:bg-[#FFF1EF] group-hover:text-[#D92C1C] group-hover:border-[#D92C1C]/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                </div>

                <div className="space-y-1.5">
                  <div className="font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight tabular-nums flex items-baseline gap-1">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </div>
                  
                  {/* Red Accent Dash */}
                  <div className="w-8 h-1 bg-[#D92C1C] rounded-full my-2.5 group-hover:w-14 transition-all duration-300" />

                  <h3 className="font-bold text-base text-[#111111] tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-[13px] text-[#555555] leading-relaxed pt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
