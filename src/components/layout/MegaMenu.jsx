import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Car, 
  Sparkles, 
  ShoppingBag, 
  Home as HomeIcon, 
  Wrench, 
  Zap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

const defaultCategories = [
  {
    group: 'MOVEMENT',
    services: [
      {
        name: 'Parcel Delivery',
        slug: 'parcel-delivery',
        desc: 'City-wide courier in under 45 mins',
        icon: Package,
        tag: 'Express',
        image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=250&q=80'
      },
      {
        name: 'Cab / Ride',
        slug: 'cab-ride',
        desc: 'Spotless cars & zero cancellations',
        icon: Car,
        tag: 'No Surge',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=250&q=80'
      }
    ]
  },
  {
    group: 'HOME',
    services: [
      {
        name: 'Home Cleaning',
        slug: 'home-cleaning',
        desc: 'Deep cleaning & steam sanitization',
        icon: HomeIcon,
        tag: 'Eco',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=250&q=80'
      },
      {
        name: 'Plumbing',
        slug: 'plumbing',
        desc: 'Acoustic leak sonar & fixtures',
        icon: Wrench,
        tag: '30D Warranty',
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=250&q=80'
      },
      {
        name: 'Electrical Services',
        slug: 'electrical-services',
        desc: 'Licensed wiremen & switch repairs',
        icon: Zap,
        tag: 'Certified',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=250&q=80'
      }
    ]
  },
  {
    group: 'LIFESTYLE',
    services: [
      {
        name: 'Beauty & Salon',
        slug: 'beauty-salon',
        desc: 'Sterile single-use home salon luxury',
        icon: Sparkles,
        tag: 'Luxury',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=250&q=80'
      },
      {
        name: 'Lifestyle Products',
        slug: 'lifestyle-products',
        desc: 'Curated home & wellness essentials',
        icon: ShoppingBag,
        tag: '90m Delivery',
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=250&q=80'
      }
    ]
  }
];

export const MegaMenu = ({ isOpen, onClose }) => {
  const { services: cmsServices } = useCMS();
  if (!isOpen) return null;

  const categories = defaultCategories;

  return (
    <>
      {/* Dimmed Backdrop Overlay to completely hide background content bleed */}
      <div 
        className="fixed inset-0 top-[68px] sm:top-[76px] bg-black/40 backdrop-blur-xs z-40 transition-opacity"
        onClick={onClose}
      />

      {/* 100% Solid Opaque White MegaMenu Panel */}
      <div 
        className="absolute top-full left-0 right-0 w-full bg-white border-b-2 border-[#E5E1DD] shadow-2xl py-8 z-50 transition-all duration-200"
        onMouseLeave={onClose}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main 3 Vertical Groups */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((cat, idx) => (
                <div key={idx} className="space-y-3.5">
                  <span className="text-[12px] font-mono font-bold tracking-wider text-[#111111] uppercase block border-b border-[#E5E1DD] pb-2">
                    {cat.group}
                  </span>
                  
                  <div className="space-y-2">
                    {cat.services.map((srv) => {
                      const IconComponent = srv.icon;
                      return (
                        <Link
                          key={srv.slug}
                          to={`/services/${srv.slug}`}
                          onClick={onClose}
                          className="group flex items-center gap-3 p-2.5 rounded-2xl bg-white hover:bg-[#FFF1EF] border border-[#E5E1DD] hover:border-[#D92C1C] transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer"
                        >
                          {/* Exact Service Photographic Thumbnail */}
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E5E1DD] group-hover:border-[#D92C1C]/40 flex-shrink-0 relative bg-[#F6F4F1]">
                            <img
                              src={srv.image}
                              alt={srv.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[14px] font-bold text-[#111111] group-hover:text-[#D92C1C] tracking-tight">
                                {srv.name}
                              </span>
                              {srv.tag && (
                                <span className="text-[9px] font-mono font-bold px-2 py-0.5 bg-[#F6F4F1] text-[#666666] group-hover:bg-white group-hover:text-[#D92C1C] rounded-full border border-gray-200">
                                  {srv.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[12px] text-[#666666] group-hover:text-[#3D3D3D] truncate mt-0.5">
                              {srv.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Spotlight Column */}
            <div className="lg:col-span-3 bg-[#F6F4F1] p-6 rounded-3xl border border-[#E5E1DD] flex flex-col justify-between h-full shadow-2xs">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#D92C1C] text-[11px] font-bold uppercase tracking-wider mb-3 border border-[#D92C1C]/25 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Network</span>
                </div>
                
                <h4 className="font-display font-black text-xl text-[#111111] leading-snug">
                  One Account. All Everyday Services.
                </h4>
                
                <p className="text-[13px] text-[#666666] mt-2 leading-relaxed">
                  Enjoy transparent pricing, verified master specialists, and instant tracking across all 7 essential urban services in Lucknow.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#E5E1DD]">
                <Link
                  to="/services"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111111] hover:text-[#D92C1C] group tracking-tight transition-colors"
                >
                  <span>Explore all services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#D92C1C]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
