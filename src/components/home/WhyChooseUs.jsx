import React from 'react';
import { ShieldCheck, Clock, Award, Headphones, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

import { useCMS } from '../../context/CMSContext';

export const WhyChooseUs = () => {
  const { homePageContent } = useCMS();
  const whyData = homePageContent?.sections?.[1] || {};
  const sectionTitle = whyData.title || 'BUILT FOR REAL LIFE.';
  const sectionSubtitle = whyData.subtitle || 'Urban life is demanding enough. Your daily services should just work — reliably, safely, and without friction.';

  const defaultPillars = [
    {
      title: 'Rigorous Background Vetting',
      desc: 'Every driver, plumber, electrician, and salon specialist undergoes criminal record checks, trade-skill assessments, and identity verification.',
      icon: ShieldCheck
    },
    {
      title: 'Predictable Upfront Pricing',
      desc: 'No hidden surcharge surprises. You see the transparent, fixed rate before booking — with digital invoice tracking sent immediately to your phone.',
      icon: Award
    },
    {
      title: 'Real-Time Telemetry Tracking',
      desc: 'Watch your cab or courier move live on the map. Get live ETAs and verified OTP handshakes for complete accountability.',
      icon: Clock
    },
    {
      title: 'Human Support in 60 Seconds',
      desc: 'No endless automated robot loops. When something needs attention, reach an empathetic, empowered resolution specialist in seconds.',
      icon: Headphones
    }
  ];

  const pillars = whyData.items?.length > 0
    ? whyData.items.map((item, idx) => ({
        title: item.title,
        desc: item.desc,
        icon: defaultPillars[idx]?.icon || ShieldCheck,
      }))
    : defaultPillars;

  return (
    <section className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              tag="The Platform Standard"
              title={sectionTitle}
              subtitle={sectionSubtitle}
            />

            {/* 2-Column Specs Layout with Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white border border-[#E5E1DD] shadow-xs hover:border-[#D92C1C] hover:shadow-xl hover:shadow-[#D92C1C]/10 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F6F4F1] border border-[#E5E1DD] flex items-center justify-center text-[#111111] group-hover:bg-[#D92C1C] group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-[#111111] group-hover:text-[#D92C1C] transition-colors tracking-tight">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[12.5px] text-[#555555] leading-relaxed pt-2 pl-10">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-End Lifestyle Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E1DD] shadow-card hover:shadow-2xl hover:border-[#D92C1C]/40 hover:-translate-y-1.5 bg-white aspect-[4/3] max-h-80 group transition-all duration-500 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                alt="Tepito professional standards"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Badge with Hover Scale */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between transition-transform duration-300 group-hover:scale-102">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#666666] uppercase block">
                    Quality Assurance
                  </span>
                  <span className="font-display font-bold text-xs text-[#111111]">
                    100% Service Redo Guarantee
                  </span>
                </div>
                <Sparkles className="w-4 h-4 text-[#FFD400] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
