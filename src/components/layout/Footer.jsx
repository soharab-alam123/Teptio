import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { useCMS } from '../../context/CMSContext';

export const Footer = () => {
  const { settings, footerConfig } = useCMS();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeService, setActiveService] = useState('Cab & Ride');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const servicesLinks = footerConfig?.servicesLinks?.length > 0
    ? footerConfig.servicesLinks
    : [
        { name: 'Parcel Delivery', path: '/services/parcel-delivery' },
        { name: 'Cab & Ride', path: '/services/cab-ride' },
        { name: 'Beauty & Salon', path: '/services/beauty-salon' },
        { name: 'Home Cleaning', path: '/services/home-cleaning' },
        { name: 'Lifestyle Products', path: '/services/lifestyle-products' },
        { name: 'Plumbing Services', path: '/services/plumbing' },
        { name: 'Electrical Services', path: '/services/electrical-services' },
      ];

  const companyLinks = footerConfig?.companyLinks?.length > 0
    ? footerConfig.companyLinks
    : [
        { name: 'About Us', path: '/about' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Partner With Us', path: '/partner' },
        { name: 'Contact Us', path: '/contact' },
      ];

  const supportLinks = footerConfig?.supportLinks?.length > 0
    ? footerConfig.supportLinks
    : [
        { name: 'FAQ & Help Center', path: '/faq' },
        { name: 'Safety & Trust', path: '/about' },
        { name: 'Privacy Policy', path: '/about' },
        { name: 'Terms of Service', path: '/about' },
      ];

  const brandHeadline = footerConfig?.brandHeadline || 'One App. Endless Possibilities.';
  const brandDescription = footerConfig?.brandDescription || 'Tepito is your all-in-one platform for everyday services, lifestyle needs, and trusted solutions. We bring convenience, reliability, and value together — all in one app.';
  const phone = footerConfig?.contactInfo?.phone || settings?.phone || '+91 80099 22000';
  const emailAddr = footerConfig?.contactInfo?.email || settings?.email || 'info@tepito.in';
  const companyName = footerConfig?.contactInfo?.companyName || settings?.address?.companyName || 'Tepito India Private Limited';
  const street = footerConfig?.contactInfo?.address || settings?.address?.street || 'H.NO. 2358-38 GALI SHACHHADA PATANALA CHOWK LUCKNOW UP 226003';
  const socials = { ...settings?.socialLinks, ...footerConfig?.socialLinks };

  return (
    <footer className="w-full">

      {/* 1. Main Footer Body (Deep Midnight Theme - Compact Height) */}
      <div className="bg-[#050B17] text-gray-300 pt-10 sm:pt-12 pb-5 sm:pb-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 12-Column Grid: 4 (Brand & Contact) + 5 (Services/Company/Support) + 3 (Stay Updated & Social) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">

            {/* Column 1: Brand Info, Description & Contact Details (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-5 pr-0 lg:pr-2">
              {/* Tepito Logo */}
              <Logo className="h-10 sm:h-11" />

              {/* Headline */}
              <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                {brandHeadline}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed max-w-sm">
                {brandDescription}
              </p>

              {/* Contact Us Details Placed Below Description */}
              <div className="space-y-3 pt-2 text-xs">
                <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
                  Contact Us
                </h4>

                <div className="space-y-2.5">
                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#D92C1C] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">
                      {phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#D92C1C] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <a href={`mailto:${emailAddr}`} className="text-gray-300 hover:text-white transition-colors font-medium whitespace-nowrap">
                      {emailAddr}
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 pt-0.5">
                    <div className="w-7 h-7 rounded-full bg-[#D92C1C] text-white flex items-center justify-center flex-shrink-0 shadow-xs mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-[11.5px] text-gray-400 leading-snug">
                      <p className="text-gray-200 font-semibold">{companyName}</p>
                      <p className="text-gray-300 leading-relaxed">{street}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Columns 2, 3, 4: Our Services, Company, Support (lg:col-span-5) */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">

              {/* Our Services */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
                    Our Services
                  </h4>
                  <div className="w-4 h-0.5 bg-[#D92C1C] rounded-full mt-1" />
                </div>

                <ul className="space-y-1.5 pt-1">
                  {servicesLinks.map((item) => {
                    const isItemActive = activeService === item.name;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          onMouseEnter={() => setActiveService(item.name)}
                          className={`group flex items-center justify-between text-xs transition-all duration-200 outline-none focus:outline-none ${isItemActive
                            ? 'px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D92C1C]/25 to-transparent border border-[#D92C1C]/40 text-white font-semibold shadow-xs'
                            : 'text-gray-400 hover:text-white py-1'
                            }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <ChevronRight className={`w-3 h-3 ${isItemActive ? 'text-[#D92C1C]' : 'text-[#D92C1C] group-hover:translate-x-0.5 transition-transform'}`} />
                            <span>{item.name}</span>
                          </span>
                          {isItemActive && (
                            <div className="w-4.5 h-4.5 rounded-full bg-[#D92C1C] flex items-center justify-center text-white shadow-2xs flex-shrink-0">
                              <ArrowRight className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
                    Company
                  </h4>
                  <div className="w-4 h-0.5 bg-[#D92C1C] rounded-full mt-1" />
                </div>

                <ul className="space-y-2 pt-1">
                  {companyLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="group flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors outline-none focus:outline-none py-0.5"
                      >
                        <ChevronRight className="w-3 h-3 text-[#D92C1C] group-hover:translate-x-0.5 transition-transform" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
                    Support
                  </h4>
                  <div className="w-4 h-0.5 bg-[#D92C1C] rounded-full mt-1" />
                </div>

                <ul className="space-y-2 pt-1">
                  {supportLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="group flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors outline-none focus:outline-none py-0.5"
                      >
                        <ChevronRight className="w-3 h-3 text-[#D92C1C] group-hover:translate-x-0.5 transition-transform" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Column 5: Right Column - Stay Updated Card + Separate Follow Us Section */}
            <div className="lg:col-span-3 w-full space-y-6">

              {/* Stay Updated Card */}
              <div className="bg-[#0C1527] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3.5 shadow-xl">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
                    Stay Updated
                  </h4>
                  <Send className="w-3.5 h-3.5 text-[#D92C1C]" />
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  Subscribe to get the latest updates, offers, and news delivered to your inbox.
                </p>

                <form onSubmit={handleSubscribe} className="pt-1">
                  <div className="relative flex items-center bg-[#060B16] border border-white/15 focus-within:border-[#D92C1C] rounded-full p-1.5 pl-3.5 transition-colors">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full text-xs text-white placeholder-gray-500 bg-transparent outline-none pr-2"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="w-7 h-7 rounded-full bg-[#D92C1C] hover:bg-[#B91C1C] text-white flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 cursor-pointer shadow-xs"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {subscribed && (
                    <span className="text-[10px] text-[#10B981] font-semibold flex items-center gap-1 pt-2">
                      <CheckCircle2 className="w-3 h-3" /> Subscribed successfully!
                    </span>
                  )}
                </form>
              </div>

              {/* SEPARATE Follow Us (Outside Card with Rich Brand Colors) */}
              <div className="pt-1">
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-display font-extrabold text-sm text-white tracking-tight">
                    Follow Us
                  </h4>
                  <div className="w-4 h-0.5 bg-[#D92C1C] rounded-full" />
                </div>

                <div className="flex items-center gap-2.5">
                  {/* Instagram */}
                  {socials?.instagram && (
                    <a
                      href={socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shadow-md shadow-[#DD2A7B]/25 hover:shadow-lg hover:shadow-[#DD2A7B]/40 hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  )}

                  {/* Facebook */}
                  {socials?.facebook && (
                    <a
                      href={socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-[#1877F2] hover:bg-[#166fe5] flex items-center justify-center text-white shadow-md shadow-[#1877F2]/25 hover:shadow-lg hover:shadow-[#1877F2]/40 hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  )}

                  {/* Twitter / X */}
                  {socials?.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="w-9 h-9 rounded-full bg-[#111111] hover:bg-black border border-white/20 flex items-center justify-center text-white shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}

                  {/* LinkedIn */}
                  {socials?.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="w-9 h-9 rounded-full bg-[#0A66C2] hover:bg-[#084e96] flex items-center justify-center text-white shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Merged Bottom Copyright & Legal Links Bar */}
          <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-400">
            <p className="text-gray-400 font-medium">
              {footerConfig?.copyrightText || `© ${new Date().getFullYear()} Tepito India Private Limited. All rights reserved.`}
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="hover:text-[#D92C1C] font-medium transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/about"
                className="hover:text-[#D92C1C] font-medium transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
