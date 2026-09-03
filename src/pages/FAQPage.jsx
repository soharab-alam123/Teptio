import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { FAQS as initialFaqs, FAQ_CATEGORIES } from '../data/faqs';
import { Button } from '../components/common/Button';
import { api } from '../services/api';

export const FAQPage = () => {
  const [faqsList, setFaqsList] = useState(initialFaqs);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await api.getFAQs();
        if (res.success && res.data?.length > 0) {
          setFaqsList(res.data);
        }
      } catch (err) {
        console.warn('Using default FAQs fallback:', err.message);
      }
    };
    fetchFAQs();
  }, []);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  const filteredFaqs = faqsList.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category?.toLowerCase() === selectedCategory?.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="FAQ & Help Center | Tepito"
        description="Find answers to all questions regarding our multi-service platform, safety standards, pricing, and bookings."
      />

      <main className="pt-32 sm:pt-40 pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb items={[{ label: 'Help & FAQ' }]} />

          {/* Page Hero */}
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-border text-xs font-semibold tracking-wider uppercase text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Knowledge Hub
            </span>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-primary tracking-tighter uppercase leading-[0.98]">
              HOW CAN WE HELP YOU?
            </h1>

            <p className="text-base sm:text-lg text-muted font-normal max-w-xl mx-auto">
              Everything you need to know about our services, safety vetting, pricing transparency, and cancellation policies.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto pt-2">
              <Search className="w-5 h-5 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g., OTP code, cancellations, refund)..."
                className="w-full bg-white border border-border rounded-full pl-12 pr-6 py-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-subtle"
              />
            </div>

            {/* Category Tabs with clean wrapping (Zero clipping) */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4 pb-2 max-w-4xl mx-auto px-2">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-muted hover:text-primary border border-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion FAQ list */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-border space-y-3">
                <HelpCircle className="w-10 h-10 text-muted mx-auto" />
                <h3 className="font-display font-bold text-xl text-primary">
                  No matching questions found
                </h3>
                <p className="text-xs text-muted max-w-xs mx-auto">
                  Try adjusting your search query or connect with our 24/7 human support team.
                </p>
                <div className="pt-2">
                  <Button to="/contact" variant="primary" size="sm">
                    Contact Support
                  </Button>
                </div>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`group rounded-2xl bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.09)] hover:border-[#D92C1C]/60 overflow-hidden ${
                      isOpen
                        ? 'shadow-[0_8px_25px_-5px_rgba(217,44,28,0.08)] border border-[#D92C1C]/40 ring-1 ring-[#D92C1C]/20'
                        : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border border-[#E5E1DD]/80'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      className="w-full px-6 py-4.5 sm:px-7 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-display font-bold text-[15px] sm:text-[16px] tracking-tight transition-colors duration-200 group-hover:text-[#D92C1C] ${
                          isOpen ? 'text-[#D92C1C]' : 'text-[#111111]'
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Circular Pill Toggle Button with hover scale & red highlight */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:bg-[#FFF1EF] group-hover:text-[#D92C1C] ${
                          isOpen
                            ? 'bg-[#FFF1EF] text-[#D92C1C]'
                            : 'bg-[#F6F4F1] text-[#777777]'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-7 pb-5 pt-2 text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed border-t border-[#F0ECE7]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>

          {/* Still Need Assistance Banner */}
          <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-border text-center space-y-4">
            <h3 className="font-display font-extrabold text-2xl text-primary uppercase tracking-tight">
              CANNOT FIND WHAT YOU ARE LOOKING FOR?
            </h3>
            <p className="text-xs sm:text-sm text-muted max-w-md mx-auto">
              Our 24/7 resolution officers respond within 45 seconds to resolve any query or custom errand request.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="lg" arrow>
                Speak with Human Support
              </Button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};
