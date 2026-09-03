import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CalendarCheck, 
  Wallet, 
  Headphones, 
  Users, 
  Play, 
  Home, 
  ChevronRight 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { Textarea } from '../components/common/Textarea';
import { Button } from '../components/common/Button';

import {
  validateName,
  validatePhone,
  validateEmail,
  filterNameInput,
  filterPhoneInput
} from '../utils/validation';

export const PartnerPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Lucknow',
    serviceCategory: 'Parcel Delivery & Fleet',
    experience: '3–5 Years',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Exact reference card design from user image
  const partnerPerks = [
    {
      title: 'Customer success manager',
      desc: "Dedicated support to maximize your daily earnings, bookings, and route efficiency across Lucknow.",
      linkText: 'Learn more'
    },
    {
      title: 'Access our network',
      desc: 'Work with enterprise-certified account managers to bring your service vision to life across all residential zones.',
      linkText: 'Learn more'
    },
    {
      title: '24/7 priority support',
      desc: "Connect with our care team anytime — you'll always have direct on-road help when you need it.",
      linkText: 'Learn more'
    },
    {
      title: 'Instant daily payouts',
      desc: 'Transparent earnings transferred directly to your bank account or UPI daily with zero hidden commission cuts.',
      linkText: 'Learn more'
    },
    {
      title: 'Free master training & kits',
      desc: 'Receive certified skill upskilling, official Tepito uniform, and subsidies on industry-standard tools.',
      linkText: 'Learn more'
    },
    {
      title: 'Comprehensive safety shield',
      desc: 'On-duty accidental insurance cover up to ₹5,00,000 and dedicated roadside emergency backup across Lucknow.',
      linkText: 'Learn more'
    }
  ];

  const handleNameChange = (e) => {
    const sanitized = filterNameInput(e.target.value);
    setFormData(prev => ({ ...prev, fullName: sanitized }));
    if (errors.fullName) {
      setErrors(prev => ({ ...prev, fullName: validateName(sanitized) }));
    }
  };

  const handlePhoneChange = (e) => {
    const sanitized = filterPhoneInput(e.target.value);
    setFormData(prev => ({ ...prev, phone: sanitized }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: validatePhone(sanitized) }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, email: val }));
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const validate = () => {
    const errs = {};
    const nameErr = validateName(formData.fullName);
    if (nameErr) errs.fullName = nameErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) errs.phone = phoneErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) errs.email = emailErr;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await api.applyPartner(formData);
      api.createLead({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.serviceCategory,
        source: 'partner-page',
        message: `Zone: ${formData.city} | Experience: ${formData.experience} | Description: ${formData.description}`,
      }).catch(() => {});

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title="Become a Partner — Join Lucknow's Top Service Fleet | Tepito"
        description="Turn your vocational or transit craft into sustainable earnings. Join Tepito as a certified specialist in Lucknow with daily payouts and full insurance."
      />

      <main className="pt-24 sm:pt-28 pb-24 bg-[#FFFDFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb matching user screenshot: Home > Become a Partner */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm mb-6 sm:mb-8">
            <Link to="/" className="flex items-center gap-1.5 text-[#555555] hover:text-[#111111] transition-colors">
              <Home className="w-3.5 h-3.5 text-[#555555]" />
              <span className="font-medium">Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#D92C1C] font-semibold">Become a Partner</span>
          </nav>

          {/* SECTION: Hero Grid matching User's Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 relative">
            
            {/* Left Column: Badge, Display Headline, Narrative & Dual Buttons */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-5">
              
              {/* Pill Tag: • PARTNER ECOSYSTEM / LUCKNOW HUB */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                <span className="text-[#111111] font-extrabold">PARTNER ECOSYSTEM</span>
                <span className="text-[#666666]">/ LUCKNOW HUB</span>
              </div>

              {/* Exact Headline from User Screenshot */}
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-[#111111] tracking-tight leading-[1.08] uppercase">
                GROW WITH TEPITO. <br />
                <span className="block overflow-hidden pt-1">
                  <motion.span
                    initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#D92C1C] block"
                  >
                    TURN YOUR SKILLS INTO
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#D92C1C] block"
                  >
                    REAL OPPORTUNITY.
                  </motion.span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-[14.5px] sm:text-[15.5px] text-[#4A4A4A] leading-relaxed max-w-xl font-normal">
                We empower master technicians, skilled couriers, salon aestheticians, and chauffeur captains in Lucknow with verified high-frequency bookings, daily direct payouts, and complete accidental insurance.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#D92C1C] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-card hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>Join as a Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#perks"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F6F4F1] border border-[#E5E1DD] hover:border-[#111111] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
                >
                  <div className="w-5 h-5 rounded-full border border-[#888888] flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-[#111111]" />
                  </div>
                  <span>Watch How It Works</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero Visual with Partner Team Photo & Overlapping 4-Feature Card Bar */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center">
              
              {/* Partner Team Image Container */}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-card border border-[#E5E1DD] bg-white">
                <ImageWithFallback
                  src="/images/partner_hero.jpg"
                  alt="Tepito Partner Team in Lucknow"
                  className="w-full h-auto object-cover object-center max-h-[360px] sm:max-h-[420px]"
                  loading="eager"
                />
              </div>

              {/* Overlapping 4-Feature Card Bar (Exact Match to User Screenshot) */}
              <div className="w-[94%] -mt-10 sm:-mt-14 relative z-20 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E1DD] shadow-xl p-4 sm:p-5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F0ECE7]">
                  
                  {/* 1. Verified Bookings */}
                  <div className="pt-2 sm:pt-0 sm:px-3 first:pt-0 first:px-0 text-center sm:text-left flex flex-col items-center sm:items-start group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF1EF] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <CalendarCheck className="w-4 h-4 text-[#D92C1C]" />
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-[13px] text-[#111111] leading-tight">
                      Verified Bookings
                    </h4>
                    <p className="text-[11px] text-[#666666] leading-snug mt-1">
                      Get consistent & high-frequency bookings in your area.
                    </p>
                  </div>

                  {/* 2. Daily Payouts */}
                  <div className="pt-2 sm:pt-0 sm:px-3 text-center sm:text-left flex flex-col items-center sm:items-start group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF1EF] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Wallet className="w-4 h-4 text-[#D92C1C]" />
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-[13px] text-[#111111] leading-tight">
                      Daily Payouts
                    </h4>
                    <p className="text-[11px] text-[#666666] leading-snug mt-1">
                      Earn daily with direct payouts to your bank account.
                    </p>
                  </div>

                  {/* 3. Accidental Insurance */}
                  <div className="pt-2 sm:pt-0 sm:px-3 text-center sm:text-left flex flex-col items-center sm:items-start group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF1EF] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-4 h-4 text-[#D92C1C]" />
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-[13px] text-[#111111] leading-tight">
                      Accidental Insurance
                    </h4>
                    <p className="text-[11px] text-[#666666] leading-snug mt-1">
                      Complete coverage for you and your peace of mind.
                    </p>
                  </div>

                  {/* 4. 24/7 Partner Support */}
                  <div className="pt-2 sm:pt-0 sm:px-3 text-center sm:text-left flex flex-col items-center sm:items-start group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF1EF] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Headphones className="w-4 h-4 text-[#D92C1C]" />
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-[13px] text-[#111111] leading-tight">
                      24/7 Partner Support
                    </h4>
                    <p className="text-[11px] text-[#666666] leading-snug mt-1">
                      Dedicated support whenever you need us, always.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* EXACT REFERENCE CARDS GRID (Matching User's Uploaded Design) */}
          <div id="perks" className="mb-20 scroll-mt-24">
            <div className="flex items-center justify-between gap-4 mb-8 pb-3 border-b border-[#E5E1DD]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                Why Lucknow Specialists Partner With Us:
              </span>
              <span className="text-xs font-semibold text-[#D92C1C]">
                520+ Active Lucknow Partners
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {partnerPerks.map((perk, i) => (
                <div
                  key={i}
                  className="group rounded-[2rem] bg-white p-8 sm:p-9 border border-[#E5E1DD] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-card hover:border-[#D92C1C] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between"
                >
                  <div>
                    {/* Bold Title */}
                    <h3 className="font-bold text-xl sm:text-2xl text-[#111111] tracking-tight group-hover:text-[#D92C1C] transition-colors leading-snug">
                      {perk.title}
                    </h3>

                    {/* Reference Solid Accent Bar Directly Under Title */}
                    <div className="w-10 h-1 bg-[#D92C1C] rounded-full mt-3 mb-5 transition-all duration-300 group-hover:w-16" />

                    {/* Description Copy */}
                    <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>

                  {/* Reference "Learn more →" Link */}
                  <div className="mt-8 pt-4 border-t border-[#F0ECE7]">
                    <span className="text-sm font-bold text-[#D92C1C] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all cursor-pointer">
                      <span>{perk.linkText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Application Form (Clean, Modern White Card) */}
          <div id="apply" className="bg-white rounded-3xl border border-[#E5E1DD] shadow-2xs p-7 sm:p-12 md:p-14 max-w-4xl mx-auto scroll-mt-24">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#D92C1C]/25 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                    Application Received!
                  </h3>
                  <p className="text-sm text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#111111]">{formData.fullName}</strong>. Our Lucknow partner coordinator at Cyber Heights, Gomti Nagar will call you within 24 hours at <strong className="text-[#111111]">+91 {formData.phone}</strong> for document verification and official orientation.
                  </p>
                </div>

                <div className="pt-3">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        city: 'Lucknow',
                        serviceCategory: 'Parcel Delivery & Fleet',
                        experience: '3–5 Years',
                        description: ''
                      });
                      setErrors({});
                    }}
                  >
                    Submit Another Application
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8 pb-4 border-b border-[#E5E1DD]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D92C1C] block mb-1">
                    Onboarding Application
                  </span>
                  <h2 className="font-extrabold text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                    APPLY AS A SERVICE SPECIALIST
                  </h2>
                  <p className="text-xs text-[#666666] mt-1">
                    Join Lucknow's highest-rated network. Verification documents will be collected during your physical orientation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Legal Name *"
                      placeholder="e.g. Ramesh Kumar"
                      required
                      value={formData.fullName}
                      onChange={handleNameChange}
                      error={errors.fullName}
                    />

                    <Input
                      label="Contact Phone (10 digits) *"
                      placeholder="e.g. 9876543210"
                      type="tel"
                      maxLength={10}
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      error={errors.phone}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address *"
                      placeholder="ramesh@example.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleEmailChange}
                      error={errors.email}
                    />

                    <Select
                      label="Operating Zone (Lucknow)"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      options={[
                        { value: 'Lucknow (All Zones)', label: 'All Lucknow Zones' },
                        { value: 'Gomti Nagar', label: 'Gomti Nagar & Trans-Gomti' },
                        { value: 'Hazratganj', label: 'Hazratganj & Central Lucknow' },
                        { value: 'Indira Nagar', label: 'Indira Nagar & Kalyanpur' },
                        { value: 'Aliganj', label: 'Aliganj & Mahanagar' },
                      ]}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Specialist Category"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      options={[
                        { value: 'Parcel Delivery & Fleet', label: 'Parcel Delivery Courier (Two-Wheeler)' },
                        { value: 'Cab & Ride Captain', label: 'Cab & Ride Captain (Sedan / SUV)' },
                        { value: 'Beauty & Salon Specialist', label: 'Beauty & Salon Aesthetician' },
                        { value: 'Home Deep Cleaning Specialist', label: 'Home Deep Cleaning Crew' },
                        { value: 'Master Plumber', label: 'Master Plumber & Pipe Specialist' },
                        { value: 'Licensed Electrician', label: 'Certified Electrician (Class-A/B)' },
                      ]}
                    />

                    <Select
                      label="Trade Experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      options={[
                        { value: '1–2 Years', label: '1 to 2 Years' },
                        { value: '3–5 Years', label: '3 to 5 Years' },
                        { value: '5+ Years', label: '5+ Years (Senior Master)' },
                      ]}
                    />
                  </div>

                  <Textarea
                    label="Brief Description of Your Experience or Tools Owned"
                    placeholder="Mention previous experience, equipment owned, or vehicle model..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      size="md"
                      arrow
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Partner Application'}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </main>
    </>
  );
};
