import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Clock,
  CheckCircle2,
  MapPin,
  Award,
  Users,
  HeartHandshake,
  FileText,
  Lock,
  Zap,
  Car,
  Package,
  Home,
  LayoutGrid,
  Play,
  Landmark,
  ChevronRight,
  Headphones,
  Tag,
  Lightbulb
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { useCMS } from '../context/CMSContext';

export const About = () => {
  const { aboutPageContent } = useCMS();
  const aboutHeroData = aboutPageContent?.sections?.[0] || {};
  const aboutHeroTitle = aboutHeroData.title || "BUILT WITH INTENTION FOR LUCKNOW'S MODERN RHYTHM.";
  const aboutHeroDesc = aboutHeroData.description || 'Tepito India Private Limited is a next-generation digital marketplace connecting customers with products and everyday services through one convenient platform. From e-commerce and parcel delivery to home cleaning, beauty & lifestyle products, and cab & ride services, TEPITO brings multiple needs together in one simple, reliable and technology-driven ecosystem.';
  const foundations = [
    {
      num: '01',
      title: 'HUMAN DIGNITY FIRST',
      desc: 'Whether it is a resident whose pipe burst at midnight or a delivery captain navigating summer heat, every protocol is engineered with respect, fair living wages, and genuine empathy.',
      quote: 'People over process, always.',
      quoteIcon: Users,
      borderAccent: 'border-l-4 border-l-[#D92C1C]',
      numBg: 'bg-[#FFF1EF] text-[#D92C1C]',
      dashBg: 'bg-[#D92C1C]',
      dotBg: 'bg-[#D92C1C]',
      icon: HeartHandshake,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF] border border-[#D92C1C]/25',
      quoteBg: 'bg-[#FFF1EF] text-[#D92C1C]',
      illustration: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80'
    },
    {
      num: '02',
      title: 'ZERO SURGE PRICING',
      desc: 'We never weaponize bad weather or midnight hours. Every rate is locked upfront with absolute clarity before you confirm. No hidden charges, no cash bargaining.',
      quote: 'Fair pricing. Always transparent.',
      quoteIcon: ShieldCheck,
      borderAccent: 'border-l-4 border-l-[#FFD400]',
      numBg: 'bg-[#FFF9E6] text-[#D97706]',
      dashBg: 'bg-[#FFD400]',
      dotBg: 'bg-[#FFD400]',
      icon: FileText,
      iconColor: 'text-[#D97706]',
      iconBg: 'bg-[#FFF9E6] border border-[#FFD400]/40',
      quoteBg: 'bg-[#FFF9E6] text-[#D97706]',
      illustration: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=400&q=80'
    },
    {
      num: '03',
      title: 'RADICAL POLICE VERIFICATION',
      desc: 'Every technician, rider, and beautician undergoes biometric government ID screening and comprehensive background verification before entering any home.',
      quote: '100% Background checked.',
      quoteIcon: Lock,
      borderAccent: 'border-l-4 border-l-[#D92C1C]',
      numBg: 'bg-[#FFF1EF] text-[#D92C1C]',
      dashBg: 'bg-[#D92C1C]',
      dotBg: 'bg-[#D92C1C]',
      icon: ShieldCheck,
      iconColor: 'text-[#D92C1C]',
      iconBg: 'bg-[#FFF1EF] border border-[#D92C1C]/25',
      quoteBg: 'bg-[#FFF1EF] text-[#D92C1C]',
      illustration: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80'
    },
    {
      num: '04',
      title: 'SUB-30 MINUTE DISPATCH',
      desc: "Optimized routing across Lucknow's 14 urban sectors ensures your specialist or ride arrives within 20 to 30 minutes, rain or shine.",
      quote: 'Precision city logistics.',
      quoteIcon: Zap,
      borderAccent: 'border-l-4 border-l-[#FFD400]',
      numBg: 'bg-[#FFF9E6] text-[#D97706]',
      dashBg: 'bg-[#FFD400]',
      dotBg: 'bg-[#FFD400]',
      icon: Clock,
      iconColor: 'text-[#D97706]',
      iconBg: 'bg-[#FFF9E6] border border-[#FFD400]/40',
      quoteBg: 'bg-[#FFF9E6] text-[#D97706]',
      illustration: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const impactStats = [
    { value: 45, suffix: 'K+', label: 'Services Completed', sub: 'Across Lucknow City' },
    { value: 520, suffix: '+', label: 'Verified Specialists', sub: 'Captains & Technicians' },
    { value: 99, suffix: '.4%', label: 'On-Time Arrival Rate', sub: 'Sub-30 min dispatches' },
    { value: 4, suffix: '.92', label: 'Customer Rating', sub: 'Out of 5.0 Stars' },
  ];

  const leadership = [
    {
      name: 'Mohammad Anas',
      role: 'Managing Director',
      bio: 'Directing the enterprise roadmap, digital marketplace ecosystem, and long-term expansion for Tepito India Private Limited.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: 'Mohd Mudassir',
      role: 'Director',
      bio: 'Overseeing regulatory compliance, partner operations, quality standards, and customer excellence across Lucknow.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: 'Dr. Meera Sen',
      role: 'Head of Product Design',
      bio: 'Specialist in human-centered ergonomics, frictionless digital ordering, and hyperlocal dispatch interfaces.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: 'Tanvi Singhania',
      role: 'VP of Partner Growth',
      bio: 'Leading vocational certification academies, partner welfare programs, and customer safety compliance in Lucknow.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80'
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Tepito — Lucknow's Unified Everyday Services"
        description="Learn how Tepito re-engineered rides, parcels, salon care, and home restorations in Lucknow into one dependable, high-standard digital platform."
      />

      <main className="pt-24 sm:pt-28 pb-24 bg-[#FFFDFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Exact Breadcrumb from Screenshot: Home > About Us */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm mb-6 sm:mb-8">
            <Link to="/" className="flex items-center gap-1.5 text-[#555555] hover:text-[#111111] transition-colors">
              <Home className="w-3.5 h-3.5 text-[#D92C1C]" />
              <span className="font-medium">Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#D92C1C] font-semibold">About Us</span>
          </nav>

          {/* 2-Column Hero Grid: Left Typography + Right Monument & Floating Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 relative">

            {/* Left Column: Story Typography & Buttons */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge: • THE TEPITO STORY / LUCKNOW, UTTAR PRADESH */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#D92C1C]" />
                <span className="text-[#D92C1C] font-extrabold">THE TEPITO STORY</span>
                <span className="text-[#4A4A4A]">/ LUCKNOW, UTTAR PRADESH</span>
              </div>

              {/* Exact Headline from User Screenshot with Animated Load-In */}
              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#111111] tracking-tight leading-[1.08] uppercase">
                <span className="block">
                  {aboutHeroTitle}
                </span>
              </h1>

              {/* Red Accent Dash Bar with generous vertical breathing room */}
              <div className="w-12 h-1 bg-[#D92C1C] rounded-full my-2" />

              {/* Exact Paragraph from User Screenshot */}
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed max-w-xl font-normal">
                {aboutHeroDesc}
              </p>

              {/* Two Action Buttons: Red "Our Journey" + White "Discover More" */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#story"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#D92C1C] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-card hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full bg-white text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Our Journey</span>
                </a>

                <a
                  href="#foundations"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F6F4F1] border border-[#E5E1DD] hover:border-[#111111] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
                >
                  <Landmark className="w-4 h-4 text-[#666666]" />
                  <span>Discover More</span>
                </a>
              </div>
            </div>

            {/* Right Column: Rumi Darwaza Chamfered Polygon with 5 Floating Feature Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[420px] sm:min-h-[480px]">

              {/* Background Decorative Element: Top-Right Red Curved Shape */}
              <div className="absolute -top-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 bg-[#D92C1C] rounded-bl-[5rem] pointer-events-none z-10 hidden sm:block" />

              {/* Subtle Concentric Rings Graphic Behind Cards */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-red-200/50 pointer-events-none -z-10" />
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-red-100/40 pointer-events-none -z-10" />

              {/* Dotted Grid Pattern Graphic */}
              <div className="absolute left-4 top-10 w-24 h-24 bg-[radial-gradient(#E5E1DD_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none -z-10" />

              {/* The Hero Image (Lucknow Gomti Riverfront & Cityscape) with Diagonal Chamfer Cut */}
              <div
                className="relative w-[300px] sm:w-[380px] md:w-[420px] h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 ml-auto"
                style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
              >
                <ImageWithFallback
                  src="/images/about_lucknow.jpg"
                  alt="Lucknow Gomti Riverfront & Cityscape"
                  className="w-full h-full object-cover object-center scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 5 Floating White Cards (Exact Match to User Screenshot) */}

              {/* 1. Rides Card */}
              <div className="absolute top-4 sm:top-6 left-[14%] sm:left-[18%] z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E1DD] shadow-xl hover:shadow-2xl hover:border-[#D92C1C] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center w-20 sm:w-24 text-center cursor-pointer group">
                <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] group-hover:bg-[#D92C1C] flex items-center justify-center mb-1.5 transition-colors duration-200">
                  <Car className="w-4 h-4 text-[#D92C1C] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-xs font-bold text-[#111111] group-hover:text-[#D92C1C] transition-colors">
                  Rides
                </span>
              </div>

              {/* 2. Delivery Card */}
              <div className="absolute top-[32%] sm:top-[34%] left-[0%] sm:left-[2%] z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E1DD] shadow-xl hover:shadow-2xl hover:border-[#D92C1C] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center w-20 sm:w-24 text-center cursor-pointer group">
                <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] group-hover:bg-[#D92C1C] flex items-center justify-center mb-1.5 transition-colors duration-200">
                  <Package className="w-4 h-4 text-[#D92C1C] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-xs font-bold text-[#111111] group-hover:text-[#D92C1C] transition-colors">
                  Delivery
                </span>
              </div>

              {/* 3. Beauty & Lifestyle Card */}
              <div className="absolute top-[28%] sm:top-[30%] left-[26%] sm:left-[30%] z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E1DD] shadow-xl hover:shadow-2xl hover:border-[#D92C1C] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center w-24 sm:w-28 text-center cursor-pointer group">
                <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] group-hover:bg-[#D92C1C] flex items-center justify-center mb-1.5 transition-colors duration-200">
                  <Sparkles className="w-4 h-4 text-[#D92C1C] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#111111] leading-tight group-hover:text-[#D92C1C] transition-colors">
                  Beauty &<br />Lifestyle
                </span>
              </div>

              {/* 4. Home Services Card */}
              <div className="absolute bottom-6 sm:bottom-8 left-[0%] sm:left-[2%] z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E1DD] shadow-xl hover:shadow-2xl hover:border-[#D92C1C] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center w-20 sm:w-24 text-center cursor-pointer group">
                <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] group-hover:bg-[#D92C1C] flex items-center justify-center mb-1.5 transition-colors duration-200">
                  <Home className="w-4 h-4 text-[#D92C1C] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#111111] leading-tight group-hover:text-[#D92C1C] transition-colors">
                  Home<br />Services
                </span>
              </div>

              {/* 5. And Many More... Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-[26%] sm:left-[30%] z-20 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E1DD] shadow-xl hover:shadow-2xl hover:border-[#D92C1C] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center w-24 sm:w-28 text-center cursor-pointer group">
                <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] group-hover:bg-[#D92C1C] flex items-center justify-center mb-1.5 transition-colors duration-200">
                  <LayoutGrid className="w-4 h-4 text-[#D92C1C] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#111111] leading-tight group-hover:text-[#D92C1C] transition-colors">
                  And Many<br />More...
                </span>
              </div>

            </div>

          </div>

          {/* ================================================================ */}
          {/* SECTION: OUR STORY & OUR VALUES (Exact Match to Image 1)         */}
          {/* ================================================================ */}
          
          {/* 1. OUR STORY: Built to Solve Everyday Problems */}
          <div className="mb-20 sm:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Family Photo with Peach Background Accent */}
              <div className="lg:col-span-6 relative">
                {/* Peach Backdrop Shape */}
                <div className="absolute -top-4 -left-4 w-3/4 h-full bg-[#FFF1EF] rounded-[2.5rem] -z-10" />
                
                {/* Dot Pattern on Bottom Left */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#D92C1C_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-30 -z-10" />

                {/* Main Family Image */}
                <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-white">
                  <ImageWithFallback
                    src="/images/about_family_story.jpg"
                    alt="Indian family using Tepito platform"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Story Narrative + 4 Feature Cards */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold text-[#D92C1C] tracking-widest uppercase block">
                    OUR STORY
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight leading-tight">
                    Built to Solve Everyday <br />
                    <span className="text-[#D92C1C]">Problems</span>
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Tepito was founded with a simple idea – to make everyday services easier to access, more reliable, and hassle-free for everyone. We understand the challenges people face in finding trusted professionals, comparing prices, and managing bookings. That's why we created Tepito – a platform that brings everything you need, right at your fingertips.
                </p>

                {/* 4 Feature Items (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Item 1 */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E1DD] flex items-start gap-3 shadow-2xs hover:border-[#D92C1C] transition-all">
                    <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#111111]">Trusted & Verified</h4>
                      <p className="text-[11px] text-[#666666] leading-snug">All professionals are background verified.</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E1DD] flex items-start gap-3 shadow-2xs hover:border-[#D92C1C] transition-all">
                    <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] flex-shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#111111]">Quick & Easy Booking</h4>
                      <p className="text-[11px] text-[#666666] leading-snug">Book services in just a few clicks.</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E1DD] flex items-start gap-3 shadow-2xs hover:border-[#D92C1C] transition-all">
                    <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] flex-shrink-0 mt-0.5">
                      <Tag className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#111111]">Affordable Pricing</h4>
                      <p className="text-[11px] text-[#666666] leading-snug">Transparent pricing with no hidden charges.</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E1DD] flex items-start gap-3 shadow-2xs hover:border-[#D92C1C] transition-all">
                    <div className="w-8 h-8 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] flex-shrink-0 mt-0.5">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#111111]">Customer First</h4>
                      <p className="text-[11px] text-[#666666] leading-snug">We're always here to help you.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 2. OUR VALUES: 5 Clean White Pillar Cards */}
          <div className="mb-20 sm:mb-24">
            <div className="rounded-3xl bg-white border border-[#E5E1DD] p-6 sm:p-8 lg:p-10 shadow-card">
              
              <div className="text-center mb-8">
                <span className="text-xs font-extrabold text-[#D92C1C] tracking-widest uppercase block">
                  OUR VALUES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                
                {/* Value 1: Trust */}
                <div className="flex flex-col items-center text-center space-y-3 p-3 rounded-2xl hover:bg-[#FAF9F6] transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#FFF1EF] border border-[#FECACA] flex items-center justify-center text-[#D92C1C] shadow-xs">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#111111]">Trust</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    We build trust by verifying every professional and ensuring quality.
                  </p>
                </div>

                {/* Value 2: Reliability */}
                <div className="flex flex-col items-center text-center space-y-3 p-3 rounded-2xl hover:bg-[#FAF9F6] transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#FFF1EF] border border-[#FECACA] flex items-center justify-center text-[#D92C1C] shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#111111]">Reliability</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    We are committed to being dependable every single time.
                  </p>
                </div>

                {/* Value 3: Simplicity */}
                <div className="flex flex-col items-center text-center space-y-3 p-3 rounded-2xl hover:bg-[#FAF9F6] transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#FFF1EF] border border-[#FECACA] flex items-center justify-center text-[#D92C1C] shadow-xs">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#111111]">Simplicity</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Our platform is designed to be simple, fast and easy to use.
                  </p>
                </div>

                {/* Value 4: Innovation */}
                <div className="flex flex-col items-center text-center space-y-3 p-3 rounded-2xl hover:bg-[#FAF9F6] transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#FFF1EF] border border-[#FECACA] flex items-center justify-center text-[#D92C1C] shadow-xs">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#111111]">Innovation</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    We continuously innovate to provide better experiences.
                  </p>
                </div>

                {/* Value 5: Community */}
                <div className="flex flex-col items-center text-center space-y-3 p-3 rounded-2xl hover:bg-[#FAF9F6] transition-all">
                  <div className="w-14 h-14 rounded-full bg-[#FFF1EF] border border-[#FECACA] flex items-center justify-center text-[#D92C1C] shadow-xs">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#111111]">Community</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    We empower local professionals and strengthen communities.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* 4 Core Operating Principles: WHAT WE STAND FOR (Exact Blueprint from Screenshot) */}
          <div className="mb-20 sm:mb-28">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9E6] border border-[#FFD400]/50 text-xs font-bold uppercase tracking-wider text-[#111111] mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                <span>OUR FOUNDATIONS</span>
              </div>
              <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] uppercase tracking-tight">
                WHAT WE <span className="text-[#D92C1C]">STAND FOR.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#666666] mt-2 leading-relaxed">
                Four non-negotiable principles that dictate every algorithm, dispatch, and partnership.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {foundations.map((item) => {
                const Icon = item.icon;
                const QuoteIcon = item.quoteIcon;

                return (
                  <div
                    key={item.num}
                    className={`group rounded-3xl sm:rounded-[2.5rem] bg-white border border-[#E5E1DD] ${item.borderAccent} shadow-card hover:shadow-elevated transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">

                      {/* Left Sub-Column: Number Badge & 3D Illustration */}
                      <div className="sm:col-span-4 flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-4">
                        <span className={`w-11 h-11 rounded-full ${item.numBg} font-mono font-bold text-sm flex items-center justify-center shadow-2xs`}>
                          {item.num}
                        </span>

                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-1.5 border border-black/5 group-hover:scale-105 transition-transform duration-300">
                          <ImageWithFallback
                            src={item.illustration}
                            alt={item.title}
                            className="w-full h-full object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Right Sub-Column: Top Icon, Title, Dash, Description, Quote Pill */}
                      <div className="sm:col-span-8 space-y-2.5">

                        {/* Icon & Corner Dot Row */}
                        <div className="flex items-center justify-between">
                          <div className={`w-10 h-10 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-2xs`}>
                            <Icon className={`w-5 h-5 ${item.iconColor}`} />
                          </div>
                          <span className={`w-2.5 h-2.5 rounded-full ${item.dotBg}`} />
                        </div>

                        {/* Title */}
                        <h3 className="font-extrabold text-lg sm:text-xl text-[#111111] uppercase tracking-tight leading-snug">
                          {item.title}
                        </h3>

                        {/* Colored Dash */}
                        <div className={`w-8 h-1 ${item.dashBg} rounded-full`} />

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Bottom Quote Pill */}
                        <div className={`mt-3.5 p-2.5 px-3 rounded-xl ${item.quoteBg} text-xs font-semibold inline-flex items-center gap-2`}>
                          <QuoteIcon className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{item.quote}</span>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Impact Stats Row */}
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 mb-20 border border-[#222222] shadow-elevated">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-[#FFD400] uppercase tracking-widest block mb-1">
                Measured Performance
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                LUCKNOW BY THE NUMBERS.
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {impactStats.map((stat, idx) => (
                <div key={idx} className="pt-4 sm:pt-0 sm:px-6 text-center space-y-1">
                  <span className="font-display font-black text-3xl sm:text-5xl text-white block tabular-nums tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <h4 className="font-display font-bold text-sm text-[#FFD400] uppercase tracking-wider">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team Grid */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-mono font-bold tracking-wider uppercase text-[#111111] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
                Leadership
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] uppercase tracking-tight">
                THE PEOPLE BEHIND TEPITO.
              </h2>
              <p className="text-[14px] text-[#3D3D3D] mt-1.5 leading-relaxed">
                Operators, engineers, and service veterans dedicated to elevating urban infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl bg-white border border-[#E5E1DD] p-5 shadow-2xs hover:shadow-card hover:border-[#D92C1C] transition-all duration-300 ease-out group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden aspect-square border border-[#E5E1DD] bg-gray-100">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-base text-[#111111] tracking-tight group-hover:text-[#D92C1C] transition-colors">
                        {member.name}
                      </h3>
                      <span className="text-xs font-mono font-bold text-[#D92C1C] block mt-0.5">
                        {member.role}
                      </span>
                    </div>

                    <p className="text-xs text-[#3D3D3D] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================================ */}
          {/* SECTION: WHY CHOOSE TEPITO + EVERYDAY PROBLEMS BANNER (Image 2) */}
          {/* ================================================================ */}
          <div className="mb-20 space-y-8">
            
            {/* 1. WHY CHOOSE TEPITO? 5 Feature Pillars with Dividers */}
            <div className="rounded-3xl bg-white border border-[#E5E1DD] p-6 sm:p-8 lg:p-10 shadow-card">
              <div className="text-center mb-8">
                <span className="text-xs font-extrabold text-[#D92C1C] tracking-widest uppercase block">
                  WHY CHOOSE TEPITO?
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E5E1DD]">
                
                {/* Pillar 1 */}
                <div className="flex flex-col items-center text-center space-y-2 lg:px-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] mb-1">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#111111]">
                    Verified Professionals
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Only experienced and trusted professionals onboard.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="flex flex-col items-center text-center space-y-2 lg:px-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] mb-1">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#111111]">
                    Transparent Pricing
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Clear and upfront pricing with no surprise fees.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="flex flex-col items-center text-center space-y-2 lg:px-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] mb-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#111111]">
                    Easy Booking
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Book your service in just a few simple steps.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="flex flex-col items-center text-center space-y-2 lg:px-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] mb-1">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#111111]">
                    Secure Payments
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Safe and secure payments via multiple payment options.
                  </p>
                </div>

                {/* Pillar 5 */}
                <div className="flex flex-col items-center text-center space-y-2 lg:px-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF1EF] flex items-center justify-center text-[#D92C1C] mb-1">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#111111]">
                    24/7 Support
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    We're here to help you anytime you need us.
                  </p>
                </div>

              </div>
            </div>

            {/* 2. Red Panoramic Banner: Everyday Problems? Tepito Has You Covered */}
            <div className="rounded-3xl bg-gradient-to-r from-[#B82315] via-[#D92C1C] to-[#E03120] text-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-red-950/15 overflow-hidden relative">
              {/* Subtle Dotted Matrix Graphic */}
              <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left: Text & Explore Services Button */}
                <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                    Everyday Problems? <br />
                    <span>Tepito Has You Covered.</span>
                  </h3>

                  <p className="text-sm sm:text-base text-red-100 leading-relaxed max-w-lg">
                    From small tasks to big needs, we're here to make your life easier with reliable services you can trust.
                  </p>

                  <div className="pt-2">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#FFF1EF] text-[#D92C1C] text-sm font-extrabold shadow-lg shadow-black/10 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span>Explore Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: 3D Composition with Phone, Scooter, Bucket, Car */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                  <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xs border border-white/20 p-2">
                    <ImageWithFallback
                      src="/images/services_hero_red.jpg"
                      alt="Tepito Services Solution"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Bottom Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white border border-[#E5E1DD] text-center shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#D92C1C]" />
                <span className="text-xs font-bold text-[#111111]">On-Time Service</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white border border-[#E5E1DD] text-center shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#D92C1C]" />
                <span className="text-xs font-bold text-[#111111]">Quality Guaranteed</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white border border-[#E5E1DD] text-center shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#D92C1C]" />
                <span className="text-xs font-bold text-[#111111]">Hassle-Free Experience</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white border border-[#E5E1DD] text-center shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#D92C1C]" />
                <span className="text-xs font-bold text-[#111111]">Satisfaction Guaranteed</span>
              </div>
            </div>

          </div>

          {/* Bottom Direct CTA */}
          <div className="rounded-3xl bg-[#F6F4F1] border border-[#E5E1DD] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E1DD] text-xs font-mono font-bold uppercase text-[#111111]">
              <HeartHandshake className="w-4 h-4 text-[#D92C1C]" />
              Join the Movement
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#111111] uppercase tracking-tight">
              EXPERIENCE TEPITO TODAY.
            </h3>

            <p className="text-[15px] text-[#3D3D3D] max-w-xl mx-auto leading-relaxed">
              Explore our seven verified service verticals or join our fleet as a certified partner in Lucknow.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Button to="/services" variant="primary" size="md" arrow>
                Explore All Services
              </Button>
              <Button to="/partner" variant="black" size="md">
                Become a Partner
              </Button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
