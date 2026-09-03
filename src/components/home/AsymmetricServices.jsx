import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Car, 
  Sparkles, 
  Home as HomeIcon, 
  ShoppingBag, 
  Wrench, 
  Zap, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export const AsymmetricServices = () => {
  const services = [
    {
      colSpan: 'md:col-span-7',
      slug: 'parcel-delivery',
      number: '01',
      badge: '45-Min Express Delivery',
      headline: 'Instant Doorstep Courier',
      title: 'Parcel & Document Delivery',
      desc: 'Send keys, urgent papers, packages, or client parcels across Lucknow. Pickup from your door in 8 minutes with live GPS and secure OTP pin verification.',
      price: 'From ₹49',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
      bullets: ['Doorstep pickup under 8 mins', 'Live GPS & OTP delivery code']
    },
    {
      colSpan: 'md:col-span-5',
      slug: 'cab-ride',
      number: '02',
      badge: 'Zero Cancellations',
      headline: 'Guaranteed City Rides',
      title: 'Cabs & Airport Rides',
      desc: 'Clean, sanitized sedans with polite verified drivers and locked upfront fares across Hazratganj, Gomti Nagar & Airport.',
      price: 'From ₹89',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80',
      bullets: ['Zero driver cancellations', 'Fixed transparent route fares']
    },
    {
      colSpan: 'md:col-span-4',
      slug: 'beauty-salon',
      number: '03',
      badge: 'Salon at Home',
      headline: 'Sealed Sterile Kits',
      title: 'Beauty & Salon Care',
      desc: 'Top certified aestheticians bringing salon luxury, facials, waxing, and hair styling directly to your home.',
      price: 'From ₹499',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      bullets: ['Single-use sterile tools', 'Zero cleanup mess left behind']
    },
    {
      colSpan: 'md:col-span-4',
      slug: 'home-cleaning',
      number: '04',
      badge: 'Home & Sofa Care',
      headline: 'Professional Steam Cleaning',
      title: 'Deep Home Cleaning',
      desc: 'Complete home deep cleaning, sofa shampooing, and bathroom restoration using German machines and non-toxic formulas.',
      price: 'From ₹899',
      icon: HomeIcon,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      bullets: ['High-temp steam degreasing', 'Safe for kids & pets']
    },
    {
      colSpan: 'md:col-span-4',
      slug: 'lifestyle-products',
      number: '05',
      badge: '90-Min Delivery',
      headline: 'Everyday Essentials',
      title: 'Curated Home Living',
      desc: 'Artisanal homeware, stoneware, wellness products, and organic living goods delivered to your doorstep in 90 mins.',
      price: 'From ₹149',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      bullets: ['Eco-friendly packaging', 'Delivered in under 90 mins']
    },
    {
      colSpan: 'md:col-span-6',
      slug: 'plumbing',
      number: '06',
      badge: '30-Day Warranty',
      headline: 'Leak Detection & Pipe Repairs',
      title: 'Plumbing Services',
      desc: 'Expert plumbers for water leaks, tap fittings, toilet restorations, and drainage blockages across Lucknow with 30-day warranty.',
      price: 'From ₹199',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      bullets: ['Acoustic sonar leak detection', '30-day redo warranty']
    },
    {
      colSpan: 'md:col-span-6',
      slug: 'electrical-services',
      number: '07',
      badge: 'Certified Electricians',
      headline: 'Licensed Wiremen',
      title: 'Electrical Repairs',
      desc: 'Certified electricians for short-circuit emergencies, switchboard changes, fan fittings, and inverter wiring setups.',
      price: 'From ₹149',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      bullets: ['Police verified electricians', 'Zero surge emergency rates']
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, Non-AI Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 pb-6 border-b border-[#E5E1DD]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Our Services in Lucknow
            </div>
            <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight uppercase">
              BOOK TRUSTED EVERYDAY SERVICES.
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#D92C1C] group tracking-tight self-start md:self-auto border-b-2 border-[#111111] hover:border-[#D92C1C] pb-0.5 transition-all duration-200"
          >
            <span>Browse All Services</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Asymmetric Cards Grid with ALWAYS VISIBLE Images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {services.map((item) => {
            const isLarge = item.colSpan.includes('7') || item.colSpan.includes('5');

            return (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className={`${item.colSpan} group rounded-3xl border border-[#E5E1DD] bg-white p-5 sm:p-5.5 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:shadow-[#D92C1C]/15 hover:border-[#D92C1C] hover:-translate-y-2 active:scale-98 transition-all duration-300 ease-out relative overflow-hidden`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#FFF1EF] group-hover:bg-[#D92C1C] text-[#D92C1C] group-hover:text-white border border-[#D92C1C]/20 font-bold text-xs flex items-center justify-center transition-colors duration-200">
                        {item.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#111111] bg-[#F6F4F1] group-hover:bg-red-50 group-hover:text-[#D92C1C] px-2.5 py-0.5 rounded-full border border-[#E5E1DD] transition-colors duration-200">
                        {item.badge}
                      </span>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-[#111111] flex items-center justify-center transition-all duration-300 group-hover:bg-[#D92C1C] group-hover:text-white group-hover:border-[#D92C1C] group-hover:scale-115 group-hover:shadow-xs">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Dedicated Compact Photo Container (Reduced Height) */}
                  <div className={`relative rounded-xl overflow-hidden border border-[#E5E1DD] mb-3 bg-gray-100 ${
                    isLarge ? 'h-36 sm:h-40' : 'h-28 sm:h-32'
                  }`}>
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Floating Price Pill */}
                    <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E1DD] shadow-xs text-[11px] font-bold text-[#111111] transition-transform duration-300 group-hover:scale-105">
                      <span className="text-[#666666] font-normal mr-1">From</span>
                      <span className="text-[#D92C1C]">{item.price.replace('From ', '')}</span>
                    </div>
                  </div>

                  {/* Copy Area */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D92C1C] block">
                      {item.headline}
                    </span>
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#111111] tracking-tight group-hover:text-[#D92C1C] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#4A4A4A] leading-snug line-clamp-2 pt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Bullet Points */}
                <div className="pt-3 border-t border-[#E5E1DD] mt-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#666666] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D92C1C] flex-shrink-0" />
                    <span className="truncate">{item.bullets[0]}</span>
                  </div>
                  <span className="text-xs font-bold text-[#D92C1C] flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                    View →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
