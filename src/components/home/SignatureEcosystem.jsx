import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Package,
  Sparkles,
  Home as HomeIcon,
  ShoppingBag,
  Wrench,
  Zap,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Layers,
  Lock
} from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const SignatureEcosystem = () => {
  // Content 100% preserved as requested
  const ecosystemServices = [
    {
      num: '01',
      name: 'Cabs & Rides',
      slug: 'cab-ride',
      icon: Car,
      headline: 'Zero Driver Cancellations',
      desc: 'Spotless sedans with verified drivers and locked upfront fares.',
      stat: '0% Surge',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02',
      name: 'Parcel Delivery',
      slug: 'parcel-delivery',
      icon: Package,
      headline: 'Sub-45 Min Delivery',
      desc: 'Doorstep courier for keys, urgent documents, and retail parcels.',
      stat: '8m Pickup',
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '03',
      name: 'Salon at Home',
      slug: 'beauty-salon',
      icon: Sparkles,
      headline: 'Sterile Single-Use Kits',
      desc: 'Trained beauticians for facials, hair & waxing in your living room.',
      stat: 'Top 1% Pros',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '04',
      name: 'Deep Home Cleaning',
      slug: 'home-cleaning',
      icon: HomeIcon,
      headline: 'German Steam Machines',
      desc: 'Hospital-grade sanitization, sofa shampooing & bathroom deep clean.',
      stat: '64-Pt Checklist',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '05',
      name: 'Plumbing Repairs',
      slug: 'plumbing',
      icon: Wrench,
      headline: '30-Day Service Warranty',
      desc: 'Water leak detection, tap replacement & drainage fixes.',
      stat: 'Fixed Prices',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '06',
      name: 'Electricians',
      slug: 'electrical-services',
      icon: Zap,
      headline: 'Licensed Technicians',
      desc: 'Short circuit repairs, switchboard changes & inverter setups.',
      stat: 'Certified Wiremen',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '07',
      name: 'Everyday Essentials',
      slug: 'lifestyle-products',
      icon: ShoppingBag,
      headline: '90-Min Home Dispatch',
      desc: 'Artisanal homeware, wellness items & curated living essentials.',
      stat: '90m Transit',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const superpowers = [
    {
      icon: Layers,
      title: 'One Saved Address Book',
      desc: 'Save your home or office once. It works automatically whether you book a cab, send a parcel, or call an electrician.'
    },
    {
      icon: ShieldCheck,
      title: '100% Police Verified Experts',
      desc: 'Real background checks, in-person skill testing, and official company IDs before anyone steps through your door.'
    },
    {
      icon: Lock,
      title: 'Locked Prices, Zero Surges',
      desc: 'The price you see is the exact price you pay. No bargaining with drivers, no rain surges, and no surprise charges.'
    }
  ];

  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);

  // Automatic slide interval with pause on hover
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        // Loop back smoothly to start if at or near the end
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Carousel slide handlers
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F6F4F1] text-[#111111] py-16 sm:py-24 relative overflow-hidden border-y border-[#E5E1DD]">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D92C1C]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-[#FFD400]/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean, Editorial Header with Generous Breathing Room */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5E1DD] text-xs font-semibold uppercase tracking-wider text-[#111111] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
            <span>Built for Lucknow</span>
            <span className="text-[#888888] font-normal">•</span>
            <span className="text-[#666666]">One Unified Standard</span>
          </div>

          <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-[#111111] tracking-tight uppercase leading-[1.25] sm:leading-[1.2] pt-1">
            EVERYTHING YOU NEED IN LUCKNOW. <br className="hidden sm:block" />
            <span className="text-[#D92C1C] mt-2 inline-block">
              WITHOUT JUGGLING 7 DIFFERENT APPS.
            </span>
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#4A4A4A] max-w-xl mx-auto leading-relaxed font-normal pt-2">
            Skip the endless cab cancellations, unknown technician numbers, and surprise surge fees. Tepito delivers verified everyday services across Lucknow with transparent upfront fares and guaranteed reliability.
          </p>
        </div>

        {/* 3 Real Human Benefits (Matching Reference Card Design with Elevated Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {superpowers.map((sp, idx) => (
            <div
              key={idx}
              className="group rounded-[2rem] bg-white p-8 sm:p-9 border border-[#E5E1DD] shadow-xs hover:shadow-2xl hover:shadow-[#D92C1C]/12 hover:border-[#D92C1C] hover:-translate-y-2 active:scale-98 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Bold Title on Top */}
                <h3 className="font-bold text-xl sm:text-2xl text-[#111111] tracking-tight group-hover:text-[#D92C1C] transition-colors leading-snug">
                  {sp.title}
                </h3>

                {/* Reference Solid Accent Bar Directly Under Title */}
                <div className="w-10 h-1 bg-[#D92C1C] rounded-full mt-3 mb-5 transition-all duration-300 group-hover:w-20" />

                {/* Body Copy */}
                <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                  {sp.desc}
                </p>
              </div>

              {/* Reference "Learn more →" Link */}
              <div className="mt-8 pt-4 border-t border-[#F0ECE7]">
                <span className="text-sm font-bold text-[#D92C1C] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* REFERENCE SLIDER: 7 LIVE SERVICES IN INTERACTIVE CAROUSEL SLIDES */}
        <div className="mb-12">
          {/* Header with Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-[#E5E1DD]">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                Available across Lucknow right now:
              </span>
              <span className="text-xs font-semibold text-[#111111] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Live GPS Active</span>
              </span>
            </div>

            {/* Slider Next/Prev Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={slideLeft}
                aria-label="Slide Left"
                className="w-8 h-8 rounded-full border border-[#E5E1DD] bg-white hover:border-[#D92C1C] hover:text-[#D92C1C] flex items-center justify-center text-[#111111] transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={slideRight}
                aria-label="Slide Right"
                className="w-8 h-8 rounded-full border border-[#E5E1DD] bg-white hover:border-[#D92C1C] hover:text-[#D92C1C] flex items-center justify-center text-[#111111] transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider Track (Matching User's Reference Slide Layout) */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex items-center gap-5 overflow-x-auto scroll-smooth pb-4 pt-1 no-scrollbar select-none"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {ecosystemServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group relative w-[280px] sm:w-[320px] md:w-[340px] h-[210px] sm:h-[230px] rounded-[2rem] overflow-hidden flex-shrink-0 shadow-sm border border-[#E5E1DD] hover:border-[#D92C1C] hover:shadow-2xl hover:shadow-[#D92C1C]/25 hover:-translate-y-2 active:scale-98 transition-all duration-300 ease-out flex flex-col justify-between p-6"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Full-Bleed Photography with 700ms Zoom */}
                <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-900">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                  />
                  {/* Subtle Dark Gradient Overlay for perfect readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Top Glass Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.stat}
                  </span>
                </div>

                {/* Bottom Title & Circular Arrow Button (Exact Match to User Reference) */}
                <div className="flex items-end justify-between gap-3 relative z-10 text-white">
                  <div className="space-y-0.5">
                    <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-tight group-hover:text-[#FFD400] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1">
                      {item.headline}
                    </p>
                  </div>

                  {/* Circular White Action Arrow Button */}
                  <div className="w-9 h-9 rounded-full bg-white text-[#111111] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#D92C1C] group-hover:text-white group-hover:scale-105 shadow-md">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom City Coverage Bar */}
        <div className="p-4 rounded-2xl bg-white border border-[#E5E1DD] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs text-[#3D3D3D] font-medium">
            <MapPin className="w-4 h-4 text-[#D92C1C] flex-shrink-0" />
            <span>Serving Lucknow: Gomti Nagar • Hazratganj • Indira Nagar • Mahanagar • Aliganj • Chowk • Airport</span>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D92C1C] hover:text-[#B82315] transition-colors whitespace-nowrap"
          >
            <span>Explore All 7 Services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
