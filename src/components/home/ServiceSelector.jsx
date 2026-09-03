import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  Award,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { useBookingModal } from '../../context/BookingModalContext';
import { useCMS } from '../../context/CMSContext';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const ServiceSelector = () => {
  const navigate = useNavigate();
  const { openBooking } = useBookingModal();
  const { homePageContent } = useCMS();
  const [activeService, setActiveService] = useState('beauty-salon');
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Exact 7 Services with icons removed as requested
  const services = [
    {
      id: 'cab-ride',
      name: 'Rides',
      desc: 'Book a ride, any time, anywhere.',
      dashColor: 'bg-[#D92C1C]',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=500&q=80',
      link: '/services/cab-ride'
    },
    {
      id: 'parcel-delivery',
      name: 'Delivery',
      desc: 'Fast & reliable parcel delivery.',
      dashColor: 'bg-[#EA580C]',
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=500&q=80',
      link: '/services/parcel-delivery'
    },
    {
      id: 'beauty-salon',
      name: 'Beauty',
      desc: 'Salon & beauty experts at home.',
      dashColor: 'bg-[#D92C1C]',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80',
      link: '/services/beauty-salon'
    },
    {
      id: 'home-cleaning',
      name: 'Home',
      desc: 'Cleaning, repairs & home services.',
      dashColor: 'bg-[#16A34A]',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80',
      link: '/services/home-cleaning'
    },
    {
      id: 'plumbing',
      name: 'Plumbing',
      desc: 'Plumbing experts at your service.',
      dashColor: 'bg-[#2563EB]',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=500&q=80',
      link: '/services/plumbing'
    },
    {
      id: 'electrical-services',
      name: 'Electrical',
      desc: 'Electrical solutions you can trust.',
      dashColor: 'bg-[#EAB308]',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80',
      link: '/services/electrical-services'
    },
    {
      id: 'lifestyle-products',
      name: 'Lifestyle',
      desc: 'Essentials & more at your doorstep.',
      dashColor: 'bg-[#9333EA]',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80',
      link: '/services/lifestyle-products'
    }
  ];

  const defaultStats = [
    { value: 10, suffix: 'K+', label: 'Happy Customers', icon: Users },
    { value: 25, suffix: 'K+', label: 'Services Completed', icon: Award },
    { value: 500, suffix: '+', label: 'Service Partners', icon: ShieldCheck },
    { value: '24/7', suffix: '', label: 'Customer Support', icon: Headphones }
  ];

  const statIcons = [Users, Award, ShieldCheck, Headphones];
  const cmsStatsSection = homePageContent?.sections?.find(s => s.sectionKey === 'stats' || s.sectionKey === 'statsBanner');
  const cmsStats = cmsStatsSection?.items || homePageContent?.stats;

  const stats = defaultStats.map((def, idx) => {
    const cmsItem = Array.isArray(cmsStats) ? cmsStats[idx] : null;
    return {
      value: cmsItem?.value !== undefined && cmsItem?.value !== '' ? cmsItem.value : def.value,
      suffix: cmsItem?.suffix !== undefined ? cmsItem.suffix : def.suffix,
      label: cmsItem?.label !== undefined && cmsItem?.label !== '' ? cmsItem.label : def.label,
      icon: statIcons[idx % statIcons.length]
    };
  });

  // Fast continuous 1-second auto-slide as requested ("jaldi jaldi slide ho 1 sec")
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  const handleCardClick = (srv) => {
    setActiveService(srv.id);
    openBooking({ id: srv.id, title: srv.name });
  };

  return (
    <section className="pt-6 sm:pt-8 pb-16 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Slide Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#D92C1C] font-mono">
                EXPLORE TEPITO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#111111] tracking-tight leading-tight">
              What do you <span className="text-[#D92C1C]">need</span> today?
            </h2>

            <p className="text-sm sm:text-[15px] text-[#666666] font-normal mt-1.5">
              Choose a service and we'll take care of the rest.
            </p>
          </div>

          {/* Manual Slider Navigation Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={slideLeft}
              aria-label="Slide left"
              className="w-10 h-10 rounded-full border border-[#E5E1DD] bg-white hover:border-[#D92C1C] hover:text-[#D92C1C] flex items-center justify-center text-[#111111] transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={slideRight}
              aria-label="Slide right"
              className="w-10 h-10 rounded-full border border-[#E5E1DD] bg-white hover:border-[#D92C1C] hover:text-[#D92C1C] flex items-center justify-center text-[#111111] transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Auto-Sliding Cards Track with Soft Edge Masks */}
        <div className="relative mb-14">
          {/* Subtle edge fades so cards enter and exit gracefully without harsh cut-offs */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#FFFDFC] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#FFFDFC] to-transparent z-10" />

          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 no-scrollbar [&::-webkit-scrollbar]:hidden select-none px-2"
          >
            {services.map((srv) => {
              const isActive = activeService === srv.id;

              return (
                <div
                  key={srv.id}
                  onClick={() => handleCardClick(srv)}
                  className={`group rounded-[1.75rem] p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-white via-white to-[#FAF8F5] transition-all duration-300 cursor-pointer w-[230px] sm:w-[250px] flex-shrink-0 relative overflow-hidden ${isActive
                    ? 'border-2 border-[#D92C1C] shadow-xl shadow-[#D92C1C]/15 -translate-y-2'
                    : 'border border-[#E5E1DD] shadow-xs hover:border-[#D92C1C] hover:shadow-2xl hover:shadow-[#D92C1C]/15 hover:-translate-y-2.5 active:scale-98'
                    }`}
                >
                  <div>
                    {/* Realistic Photo with Smooth 700ms Zoom */}
                    <div className="h-32 sm:h-36 rounded-2xl overflow-hidden border border-[#E5E1DD]/70 bg-[#F6F4F1] mb-3.5 relative">
                      <ImageWithFallback
                        src={srv.image}
                        alt={srv.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Color Accent Line with Dynamic Hover Expansion */}
                    <div className={`w-8 h-1 ${srv.dashColor} rounded-full mb-2.5 transition-all duration-300 group-hover:w-16 group-hover:bg-[#D92C1C]`} />

                    {/* Service Title */}
                    <h3 className="font-extrabold text-base sm:text-lg text-[#111111] tracking-tight group-hover:text-[#D92C1C] transition-colors leading-snug">
                      {srv.name}
                    </h3>

                    {/* Short Subtitle */}
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2 mt-1">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Bottom Circular Arrow Action Button */}
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#D92C1C] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Book Now
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                      ? 'bg-[#D92C1C] text-white shadow-xs scale-105'
                      : 'bg-[#EFECE8] text-[#555555] group-hover:bg-[#D92C1C] group-hover:text-white group-hover:scale-115 group-hover:shadow-md'
                      }`}>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Black Horizontal Stats Banner (Exact Match to Screenshot) */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#111111] text-white p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} ${idx > 1 ? 'pt-4 sm:pt-0' : ''}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D92C1C] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight tabular-nums leading-none">
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </div>
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
