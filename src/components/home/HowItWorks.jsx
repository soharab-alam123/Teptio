import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'CHOOSE',
      desc: 'Pick the service you need from rides, deliveries, salon pampering, home cleaning, plumbing or electrical.',
      highlight: '7 curated services'
    },
    {
      number: '02',
      title: 'BOOK',
      desc: 'Select your time, exact location in Lucknow, and view upfront fixed pricing without unexpected surges.',
      highlight: 'Instant or scheduled'
    },
    {
      number: '03',
      title: 'CONNECT',
      desc: 'Get matched with a certified background-checked specialist en route in real time with live GPS & OTP.',
      highlight: 'Live GPS & OTP'
    },
    {
      number: '04',
      title: 'DONE',
      desc: 'Relax. We have got it handled with guaranteed satisfaction, fixed warranty, and zero hassle.',
      highlight: 'Zero hassle'
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-y border-[#E5E1DD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-[12px] font-mono font-bold tracking-wider uppercase text-[#111111] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
            Effortless Flow
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight uppercase">
            HOW IT WORKS.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3D3D3D]">
            Four simple steps from request to verified completion in Lucknow.
          </p>
        </div>

        {/* 4 Steps Timeline Grid with Interactive Card Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-[#FFFDFC] rounded-2xl p-6 border border-[#E5E1DD] shadow-xs hover:shadow-2xl hover:shadow-[#D92C1C]/15 hover:border-[#D92C1C] hover:-translate-y-2 active:scale-98 transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-3xl text-[#D92C1C] transition-transform duration-300 group-hover:scale-110 inline-block">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] group-hover:text-[#D92C1C] bg-[#F6F4F1] group-hover:bg-[#FFF1EF] px-2.5 py-1 rounded-md border border-[#E5E1DD] group-hover:border-[#D92C1C]/30 transition-colors duration-200">
                    {step.highlight}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#111111] group-hover:text-[#D92C1C] uppercase tracking-tight mb-2 transition-colors duration-200">
                  {step.title}
                </h3>

                <p className="text-[14px] text-[#3D3D3D] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E1DD] flex items-center justify-between text-xs font-semibold text-[#111111]">
                <span className="group-hover:text-[#D92C1C] transition-colors">Step 0{idx + 1}</span>
                <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#D92C1C] group-hover:translate-x-1.5 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
