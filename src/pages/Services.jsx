import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Tag,
  Zap,
  Lock,
  Headphones,
  Car,
  Package,
  Home as HomeIcon,
  Wrench,
  ShoppingBag,
  MapPin,
  Star,
  Scissors,
  Calendar,
  Check
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useBookingModal } from '../context/BookingModalContext';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { useCMS } from '../context/CMSContext';
import { api } from '../services/api';

export const Services = () => {
  const navigate = useNavigate();
  const { openBooking } = useBookingModal();
  const { services: cmsServices } = useCMS();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Lucknow, UP');

  // Popular Services List dynamic from CMS with fallback
  const defaultPopularServices = [
    {
      id: 'parcel-delivery',
      slug: 'parcel-delivery',
      title: 'Parcel Delivery',
      desc: 'Fast & secure delivery service',
      price: '₹49',
      rating: '4.9',
      icon: Package,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF]',
      circleBg: 'bg-[#FFF5F3]'
    },
    {
      id: 'cab-ride',
      slug: 'cab-ride',
      title: 'Cab / Ride',
      desc: 'Comfortable rides, anytime',
      price: '₹89',
      rating: '4.8',
      icon: Car,
      iconColor: 'text-[#111111]',
      iconBg: 'bg-[#F1F5F9]',
      circleBg: 'bg-[#F8FAFC]'
    },
    {
      id: 'beauty-salon',
      slug: 'beauty-salon',
      title: 'Beauty / Salon',
      desc: 'Salon at home by experts',
      price: '₹349',
      rating: '4.9',
      icon: Scissors,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF]',
      circleBg: 'bg-[#FFF5F3]'
    },
    {
      id: 'home-cleaning',
      slug: 'home-cleaning',
      title: 'Home Cleaning',
      desc: 'Professional home cleaning',
      price: '₹499',
      rating: '4.8',
      icon: HomeIcon,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#ECFDF5]',
      circleBg: 'bg-[#F0FDF4]'
    },
    {
      id: 'plumbing',
      slug: 'plumbing',
      title: 'Plumber Services',
      desc: 'Expert plumbing solutions',
      price: '₹149',
      rating: '4.7',
      icon: Wrench,
      iconColor: 'text-[#111111]',
      iconBg: 'bg-[#F3F4F6]',
      circleBg: 'bg-[#F9FAFB]'
    },
    {
      id: 'electrical-services',
      slug: 'electrical-services',
      title: 'Electricians Services',
      desc: 'Safe & reliable electrical work',
      price: '₹149',
      rating: '4.8',
      icon: Zap,
      iconColor: 'text-[#D97706]',
      iconBg: 'bg-[#FEF3C7]',
      circleBg: 'bg-[#FFFBEB]'
    }
  ];

  const popularServices = cmsServices?.length > 0
    ? cmsServices.map((srv, idx) => ({
        id: srv.slug || srv.id,
        slug: srv.slug || srv.id,
        title: srv.title,
        desc: srv.tagline || srv.shortDesc || srv.description,
        price: srv.startingPrice || '₹99',
        rating: '4.9',
        icon: defaultPopularServices[idx]?.icon || Package,
        iconColor: defaultPopularServices[idx]?.iconColor || 'text-[#D92C1C]',
        iconBg: defaultPopularServices[idx]?.iconBg || 'bg-[#FFF1EF]',
        circleBg: defaultPopularServices[idx]?.circleBg || 'bg-[#FFF5F3]',
      }))
    : defaultPopularServices;

  // How It Works Steps matching Tepito branding
  const steps = [
    {
      number: '01',
      title: 'Choose a Service',
      desc: 'Select the service you need from our wide range of categories.',
      icon: (
        <svg className="w-6 h-6 text-[#D92C1C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Pick Your Service',
      desc: 'Compare professionals, pricing & ratings. Pick the best for you.',
      icon: (
        <svg className="w-6 h-6 text-[#D92C1C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Book Instantly',
      desc: 'Choose your preferred time and confirm your booking instantly.',
      icon: <Calendar className="w-6 h-6 text-[#D92C1C]" />
    },
    {
      number: '04',
      title: 'Get It Done',
      desc: 'Professional arrives on time and gets the job done right.',
      icon: <Check className="w-6 h-6 text-[#D92C1C]" strokeWidth={2.5} />
    }
  ];

  // Service category-specific distinct image resolver
  const getServiceCategoryFallbackImage = (slug = '', idx = 0) => {
    const s = slug.toLowerCase();
    if (s.includes('parcel') || s.includes('courier') || s.includes('delivery')) {
      return 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80';
    }
    if (s.includes('cab') || s.includes('ride') || s.includes('car')) {
      return 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80';
    }
    if (s.includes('salon') || s.includes('beauty') || s.includes('spa')) {
      return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80';
    }
    if (s.includes('clean') || s.includes('home')) {
      return 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80';
    }
    if (s.includes('plumb') || s.includes('leak') || s.includes('pipe')) {
      return 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80';
    }
    if (s.includes('electr') || s.includes('wire') || s.includes('switch')) {
      return 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80';
    }
    const defaults = [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'
    ];
    return defaults[idx % defaults.length];
  };

  // Recommended Near You dynamic from CMS services with distinct category images
  const recommendedServices = cmsServices?.length > 0
    ? cmsServices.slice(0, 4).map((srv, idx) => ({
        title: srv.title,
        slug: srv.slug || srv.id,
        rating: '4.9',
        reviewCount: 140 + idx * 28,
        price: srv.startingPrice?.replace(/[^0-9]/g, '') || '99',
        image: srv.image || getServiceCategoryFallbackImage(srv.slug || srv.title, idx)
      }))
    : [
        {
          title: 'Home Deep Cleaning',
          slug: 'home-deep-cleaning',
          rating: '4.9',
          reviewCount: 128,
          price: '499',
          image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'AC / Plumbing Repair',
          slug: 'plumbing-solutions',
          rating: '4.9',
          reviewCount: 98,
          price: '149',
          image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Salon at Home',
          slug: 'salon-at-home',
          rating: '4.9',
          reviewCount: 156,
          price: '349',
          image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'
        },
        {
          title: 'Parcel Delivery',
          slug: 'parcel-delivery',
          rating: '4.9',
          reviewCount: 312,
          price: '49',
          image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80'
        }
      ];

  // Why Choose Us Cards matching screenshot 3
  const whyChooseFeatures = [
    {
      icon: ShieldCheck,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF]',
      title: 'Verified Professionals',
      desc: 'Every professional is background verified and trusted.'
    },
    {
      icon: Tag,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      title: 'Transparent Pricing',
      desc: 'No hidden charges. What you see is what you pay.'
    },
    {
      icon: Zap,
      iconColor: 'text-[#D97706]',
      iconBg: 'bg-amber-50',
      title: 'Quick Booking',
      desc: 'Book in just a few clicks and get instant confirmation.'
    },
    {
      icon: Lock,
      iconColor: 'text-[#111111]',
      iconBg: 'bg-gray-100',
      title: 'Secure Payments',
      desc: '100% secure payments via multiple trusted methods.'
    },
    {
      icon: Headphones,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF]',
      title: '24/7 Support',
      desc: "We're here for you anytime you need help."
    }
  ];

  // Popular Search keywords
  const popularKeywords = [
    'Parcel Delivery',
    'Cab Ride',
    'Home Cleaning',
    'Plumber',
    'Salon at Home',
    'Electrician'
  ];

  // Customer Reviews dynamic from API with fallback
  const [reviewsList, setReviewsList] = useState([
    {
      rating: 5,
      text: 'Booking a plumber was incredibly easy in Gomti Nagar. The professional arrived on time and fixed the issue quickly.',
      author: 'Rahul Kumar',
      city: 'Gomti Nagar, Lucknow',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
    },
    {
      rating: 5,
      text: 'Amazing salon service at home! Very professional, sterile kit and friendly staff in Hazratganj.',
      author: 'Priya Singh',
      city: 'Hazratganj, Lucknow',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
    },
    {
      rating: 5,
      text: 'Parcel delivered in 28 mins across Lucknow in perfect condition. Super reliable!',
      author: 'Amit Verma',
      city: 'Indira Nagar, Lucknow',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80'
    }
  ]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.getTestimonials();
        if (res.success && res.data?.length > 0) {
          setReviewsList(res.data.map(t => ({
            rating: t.rating || 5,
            text: t.quote || t.text,
            author: t.name || t.author,
            city: t.location || t.role || 'Lucknow',
            avatar: t.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
          })));
        }
      } catch (err) {
        console.warn('Reviews fallback:', err.message);
      }
    };
    fetchReviews();
  }, []);

  const reviews = reviewsList;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const matched = popularServices.find(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matched) {
        navigate(`/services/${matched.slug}`);
      } else {
        const target = document.getElementById('popular-services');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeywordClick = (keyword) => {
    setSearchQuery(keyword);
    const target = document.getElementById('popular-services');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Services | Tepito - Whatever You Need, We'll Get It Done"
        description="Trusted professionals for everyday services, all in one place. Parcel Delivery, Cab/Ride, Beauty & Salon, Home Cleaning, Plumber, and Electricians."
      />

      <div className="bg-[#FFFDFC] min-h-screen text-[#111111] font-sans">
        
        {/* ======================================================== */}
        {/* SECTION 1: HERO SECTION (Exact Match with Tepito Red)    */}
        {/* ======================================================== */}
        <section className="pt-28 sm:pt-32 pb-16 lg:pb-20 relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFFDFC] to-white border-b border-[#E5E1DD]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Heading, Search & Value Prop */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF1EF] border border-[#FECACA] text-[#D92C1C] text-xs font-bold tracking-wide shadow-2xs">
                  <span>All Your Needs, One Platform</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#111111] leading-[1.12] tracking-tight">
                  Whatever You Need, <br />
                  <span className="text-[#D92C1C]">We'll Get It Done.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-[#555555] max-w-xl leading-relaxed">
                  Trusted professionals for everyday services, all in one place.
                </p>

                {/* Search Bar + Location Box */}
                <form onSubmit={handleSearchSubmit} className="pt-2">
                  <div className="bg-white rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-xl shadow-black/5 border border-[#E5E1DD] focus-within:border-[#D92C1C] flex flex-col sm:flex-row items-stretch sm:items-center gap-2 transition-all">
                    
                    {/* Search Service Input */}
                    <div className="flex items-center gap-2.5 px-3 py-2 flex-1">
                      <Search className="w-5 h-5 text-[#888888] flex-shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="What service do you need?"
                        className="w-full text-sm text-[#111111] placeholder-[#888888] bg-transparent outline-none"
                      />
                    </div>

                    <div className="h-6 w-[1px] bg-[#E5E1DD] hidden sm:block" />

                    {/* Location Selector */}
                    <div className="flex items-center gap-2 px-3 py-2 sm:w-44 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#D92C1C] flex-shrink-0" />
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full text-xs sm:text-sm font-semibold text-[#111111] bg-transparent outline-none cursor-pointer"
                      >
                        <option value="Patna, Bihar">Patna, Bihar</option>
                        <option value="Lucknow, UP">Lucknow, UP</option>
                        <option value="Delhi, NCR">Delhi, NCR</option>
                      </select>
                    </div>

                    {/* Find a Service Button */}
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl sm:rounded-full bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs sm:text-sm font-bold shadow-md shadow-red-600/20 transition-all duration-200 active:scale-95 flex-shrink-0 flex items-center justify-center cursor-pointer"
                    >
                      Find a Service
                    </button>
                  </div>
                </form>

                {/* 3 Checkpoint Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-[#444444]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D92C1C] fill-[#FFF1EF]" />
                    <span>Verified Professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D92C1C] fill-[#FFF1EF]" />
                    <span>Affordable Pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D92C1C] fill-[#FFF1EF]" />
                    <span>Quick & Easy Booking</span>
                  </div>
                </div>

              </div>

              {/* Right Column: 3D Mockup Composition in Tepito Red */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full max-w-lg">
                  <div className="rounded-3xl overflow-hidden shadow-2xl shadow-red-950/10 border border-[#F2EFEA] bg-white">
                    <ImageWithFallback
                      src="/images/services_hero_red.jpg"
                      alt="Tepito Red All-In-One Services"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 2: POPULAR SERVICES (Exact Match to Screenshot 1)*/}
        {/* ======================================================== */}
        <section id="popular-services" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#FECACA] text-[11px] font-extrabold tracking-wider uppercase">
                WHAT WE OFFER
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight">
                Popular Services
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                Complete range of everyday services at your fingertips
              </p>
            </div>

            {/* 7 Services Cards Carousel / Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {popularServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    key={service.id}
                    className="group bg-white rounded-2xl border border-[#E5E1DD] p-4 flex flex-col justify-between items-center text-center shadow-2xs hover:shadow-xl hover:shadow-red-500/10 hover:border-[#D92C1C] transition-all duration-300"
                  >
                    <div className="w-full flex flex-col items-center space-y-3">
                      {/* Circular Icon Container */}
                      <div className={`w-16 h-16 rounded-full ${service.circleBg} flex items-center justify-center p-3 shadow-inner group-hover:scale-110 transition-transform duration-300 border border-[#F2EFEA]`}>
                        <div className={`w-10 h-10 rounded-full ${service.iconBg} flex items-center justify-center ${service.iconColor}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1">
                        <h3 className="font-bold text-sm text-[#111111] group-hover:text-[#D92C1C] transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-[11px] text-[#666666] leading-tight min-h-[30px]">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    {/* Price & Star Rating */}
                    <div className="w-full pt-4 space-y-3">
                      <div className="flex items-center justify-between text-xs px-1">
                        <div className="text-left">
                          <span className="text-[10px] text-[#888888] block">Starting at</span>
                          <span className="font-extrabold text-[#D92C1C] text-sm">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-1 font-bold text-[#111111] text-xs">
                          <Star className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]" />
                          <span>{service.rating}</span>
                        </div>
                      </div>

                      {/* Book Now Button in Tepito Red */}
                      <button
                        type="button"
                        onClick={() => openBooking({ id: service.id, title: service.title })}
                        className="w-full py-2 px-3 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1 shadow-sm group-hover:shadow-md cursor-pointer active:scale-95"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 3: HOW TEPITO WORKS (Exact Match to Screenshot 2)*/}
        {/* ======================================================== */}
        <section className="py-16 sm:py-20 bg-[#FAF9F6] border-t border-[#E5E1DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#FECACA] text-[11px] font-extrabold tracking-wider uppercase">
                HOW TEPITO WORKS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight">
                How Tepito Works ?
              </h2>
            </div>

            {/* 4 Steps Timeline Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center space-y-3 group">
                  
                  {/* Step Icon Badge */}
                  <div className="w-16 h-16 rounded-full bg-[#FFF1EF] border border-[#FECACA] group-hover:bg-[#D92C1C] text-[#D92C1C] group-hover:text-white flex items-center justify-center shadow-xs transition-all duration-300">
                    <div className="scale-110 group-hover:scale-125 group-hover:text-white transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <span className="font-extrabold text-[#D92C1C] text-sm tracking-wider">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-bold text-base text-[#111111]">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-[#666666] leading-relaxed max-w-xs">
                    {step.desc}
                  </p>

                  {/* Connector Arrow for desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 text-[#FECACA]">
                      <ArrowRight className="w-5 h-5 text-[#D92C1C]/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 4: RECOMMENDED NEAR YOU (Screenshot 2 bottom)   */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#FECACA] text-[11px] font-extrabold tracking-wider uppercase">
                TOP SERVICES NEAR YOU
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight">
                Recommended Near You
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                Top rated services in your area
              </p>
            </div>

            {/* 4 Cards Grid with Real Imagery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedServices.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-[#E5E1DD] overflow-hidden shadow-2xs hover:shadow-xl hover:shadow-red-500/10 hover:border-[#D92C1C] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Card Image */}
                    <div className="h-44 w-full overflow-hidden bg-[#FAF9F6]">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-base text-[#111111] group-hover:text-[#D92C1C] transition-colors">
                        {item.title}
                      </h3>

                      {/* Rating + Count */}
                      <div className="flex items-center gap-1 text-xs text-[#666666]">
                        <Star className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]" />
                        <span className="font-bold text-[#111111]">{item.rating}</span>
                        <span>({item.reviewCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strip: Price + View Details */}
                  <div className="p-4 pt-2 border-t border-[#F2EFEA] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#888888] block">Starting at</span>
                      <span className="font-extrabold text-[#D92C1C] text-sm">₹{item.price}</span>
                    </div>

                    <Link
                      to={`/services/${item.slug}`}
                      className="px-3.5 py-1.5 rounded-full border border-[#E5E1DD] hover:border-[#D92C1C] hover:bg-[#D92C1C] text-[#111111] hover:text-white text-xs font-bold transition-all duration-200 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Services Button */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => {
                  const target = document.getElementById('popular-services');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-[#FFF1EF] hover:bg-[#D92C1C] border border-[#FECACA] hover:border-[#D92C1C] text-[#D92C1C] hover:text-white text-xs font-bold transition-all duration-200 shadow-2xs cursor-pointer active:scale-95"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 5: BEST DEALS & OFFERS (Screenshot 3 top)       */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-20 bg-[#FAF9F6] border-t border-[#E5E1DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#FECACA] text-[11px] font-extrabold tracking-wider uppercase">
                DEALS & OFFERS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight">
                Best Deals & Offers
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                Grab the best offers on your favorite services
              </p>
            </div>

            {/* 4 Offers Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Card 1: Featured 20% OFF Gradient Tepito Red Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#B82315] via-[#D92C1C] to-[#C72314] text-white p-5 flex flex-col justify-between shadow-lg shadow-red-600/20 relative overflow-hidden group">
                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-semibold text-red-100">First Service?</span>
                  <h3 className="font-extrabold text-2xl tracking-tight leading-tight">
                    Get 20% OFF
                  </h3>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-white/20 border border-white/30 text-[11px] font-bold tracking-wider">
                    Use code: TEPITO20
                  </div>
                </div>

                <div className="pt-4 flex items-end justify-between relative z-10">
                  <button
                    type="button"
                    onClick={() => openBooking({ id: 'promo-20', title: 'First Service 20% OFF' })}
                    className="px-4 py-2 rounded-full bg-white text-[#D92C1C] text-xs font-bold hover:bg-[#FFF1EF] transition-all flex items-center gap-1 shadow-md cursor-pointer active:scale-95"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <div className="w-16 h-16 relative -mb-1 -mr-1">
                    <ImageWithFallback
                      src="/images/gift_box_red.jpg"
                      alt="Gift Box"
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2: Home Cleaning 20% OFF */}
              <div className="bg-white rounded-2xl border border-[#E5E1DD] p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group hover:border-[#D92C1C]">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-[#111111]">Home Cleaning</h3>
                    <span className="font-extrabold text-emerald-600 text-lg block">20% OFF</span>
                    <p className="text-xs text-[#666666]">On all cleaning services</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <HomeIcon className="w-6 h-6" />
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="button"
                    onClick={() => openBooking({ id: 'home-cleaning', title: 'Home Cleaning (20% OFF)' })}
                    className="w-full py-2 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Card 3: Salon Services 15% OFF */}
              <div className="bg-white rounded-2xl border border-[#E5E1DD] p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group hover:border-[#D92C1C]">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-[#111111]">Salon Services</h3>
                    <span className="font-extrabold text-[#D92C1C] text-lg block">15% OFF</span>
                    <p className="text-xs text-[#666666]">On all salon & beauty services</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C]">
                    <Scissors className="w-6 h-6" />
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="button"
                    onClick={() => openBooking({ id: 'beauty-salon', title: 'Salon Services (15% OFF)' })}
                    className="w-full py-2 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Card 4: Parcel Delivery ₹50 OFF */}
              <div className="bg-white rounded-2xl border border-[#E5E1DD] p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group hover:border-[#D92C1C]">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-[#111111]">Parcel Delivery</h3>
                    <span className="font-extrabold text-emerald-600 text-lg block">₹50 OFF</span>
                    <p className="text-xs text-[#666666]">On orders above ₹199</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                    <Package className="w-6 h-6" />
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="button"
                    onClick={() => openBooking({ id: 'parcel-delivery', title: 'Parcel Delivery (₹50 OFF)' })}
                    className="w-full py-2 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95 shadow-xs"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 6: WHY CHOOSE TEPITO (Screenshot 3 middle)      */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#FECACA] text-[11px] font-extrabold tracking-wider uppercase">
                WHY CHOOSE TEPITO
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight">
                Why Choose Tepito?
              </h2>
            </div>

            {/* 5 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {whyChooseFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5E1DD] p-5 flex flex-col items-center text-center space-y-3 shadow-2xs hover:shadow-lg hover:border-[#D92C1C] transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} flex items-center justify-center ${feat.iconColor} shadow-2xs`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm text-[#111111] leading-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 7: SEARCH WHAT YOU NEED (Screenshot 3 mid-bottom)*/}
        {/* ======================================================== */}
        <section className="py-14 bg-[#FAF9F6] border-t border-[#E5E1DD]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#FECACA] text-[11px] font-extrabold tracking-wider uppercase">
                SEARCH WHAT YOU NEED
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Not sure what you need?
              </h2>
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
              <div className="bg-white rounded-full p-2 border border-[#E5E1DD] focus-within:border-[#D92C1C] flex items-center shadow-lg shadow-black/5 transition-all">
                <Search className="w-5 h-5 text-[#888888] ml-4 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search "plumber", "cleaning", "salon"...'
                  className="w-full px-3 py-1.5 text-xs sm:text-sm text-[#111111] placeholder-[#888888] bg-transparent outline-none"
                />
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Popular Search Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="text-xs font-bold text-[#444444] mr-1">Popular searches:</span>
              {popularKeywords.map((kw, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleKeywordClick(kw)}
                  className="px-3 py-1 rounded-full bg-white hover:bg-[#FFF1EF] border border-[#E5E1DD] hover:border-[#D92C1C] text-[#555555] hover:text-[#D92C1C] text-xs font-semibold transition-all cursor-pointer shadow-2xs active:scale-95"
                >
                  {kw}
                </button>
              ))}
            </div>

          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 8: CUSTOMER REVIEWS (Screenshot 3 bottom)       */}
        {/* ======================================================== */}
        <section className="py-16 sm:py-20 bg-white border-t border-[#E5E1DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#FECACA] text-[11px] font-extrabold tracking-wider uppercase">
                CUSTOMER REVIEWS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight">
                Loved by Thousands of Customers
              </h2>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E5E1DD] p-6 space-y-4 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between hover:border-[#D92C1C]"
                >
                  <div className="space-y-3">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-[#EAB308]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#EAB308]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#F2EFEA]">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#E5E1DD]"
                    />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#111111]">{rev.author}</h4>
                      <span className="text-[11px] text-[#666666]">{rev.city}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Dots Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D92C1C]" />
              <span className="w-2 h-2 rounded-full bg-[#E5E1DD]" />
              <span className="w-2 h-2 rounded-full bg-[#E5E1DD]" />
            </div>

          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 9: BECOME A TEPITO PARTNER (Screenshot 4 top)   */}
        {/* ======================================================== */}
        <section className="py-12 sm:py-16 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#FFF1EF] via-[#FAF6F0] to-[#FAF7F2] border border-[#FECACA] p-6 sm:p-10 lg:p-12 shadow-2xs overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left: Partner Portrait */}
                <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FFF1EF] flex-shrink-0">
                    <ImageWithFallback
                      src="/images/partner_portrait_red.jpg"
                      alt="Become a Tepito Partner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="md:col-span-5 lg:col-span-6 space-y-4 text-center md:text-left">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                    Become a Tepito Partner
                  </h2>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-lg">
                    Join thousands of professionals and grow your business with more customers and flexible opportunities.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-xs font-bold text-[#222222]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D92C1C] fill-[#FFF1EF]" />
                      <span>More Customers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D92C1C] fill-[#FFF1EF]" />
                      <span>Flexible Schedule</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D92C1C] fill-[#FFF1EF]" />
                      <span>Secure Payments</span>
                    </div>
                  </div>
                </div>

                {/* Right: CTA Button */}
                <div className="md:col-span-3 flex justify-center md:justify-end">
                  <Link
                    to="/partner"
                    className="px-7 py-3.5 rounded-full bg-[#D92C1C] hover:bg-[#B82315] text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-600/25 transition-all duration-200 flex items-center gap-2 active:scale-95 whitespace-nowrap"
                  >
                    <span>Become a Partner</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ======================================================== */}
        {/* SECTION 10: BOTTOM CTA BAR (Screenshot 4 bottom)        */}
        {/* ======================================================== */}
        <section className="pb-16 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#B82315] via-[#D92C1C] to-[#C72314] text-white p-6 sm:p-8 shadow-xl shadow-red-950/15 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-xs">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                    Need Something Done?
                  </h3>
                  <p className="text-xs sm:text-sm text-red-100 font-medium">
                    Tepito has you covered.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const target = document.getElementById('popular-services');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3 rounded-full bg-white hover:bg-[#FFF1EF] text-[#D92C1C] text-xs sm:text-sm font-bold shadow-md transition-all duration-200 flex items-center gap-2 flex-shrink-0 cursor-pointer active:scale-95"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};
