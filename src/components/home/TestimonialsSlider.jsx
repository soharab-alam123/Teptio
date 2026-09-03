import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

export const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-12 sm:py-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-mono font-bold tracking-wider uppercase text-[#111111] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
              Verified Stories
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-primary tracking-tight uppercase">
              WHAT PEOPLE SAY.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-border bg-white hover:border-primary flex items-center justify-center text-primary transition-all duration-200 active:scale-95 cursor-pointer shadow-subtle"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-border bg-white hover:border-primary flex items-center justify-center text-primary transition-all duration-200 active:scale-95 cursor-pointer shadow-subtle"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Big Editorial Testimonial Carousel Card */}
        <div className="bg-white rounded-3xl sm:rounded-4xl border border-border shadow-elevated p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Subtle Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-primary to-accent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Quote Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-1 text-accent-dark">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <blockquote className="font-semibold text-base sm:text-lg md:text-xl text-[#111111] leading-relaxed tracking-tight">
                  "{current.quote}"
                </blockquote>

                <div className="pt-2 flex items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent-dark" />
                    <span>Verified User • {current.serviceUsed}</span>
                  </div>
                </div>
              </div>

              {/* Right Profile Info */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 p-6 rounded-2xl bg-[#F7F7F3] border border-border/80">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-border"
                />
                <div>
                  <h4 className="font-display font-bold text-lg text-primary tracking-tight">
                    {current.author}
                  </h4>
                  <p className="text-xs text-muted font-medium">
                    {current.role}
                  </p>
                  <p className="text-xs text-gray-500 font-mono mt-1">
                    {current.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-border/60">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
