import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS as initialFaqs } from '../../data/faqs';
import { api } from '../../services/api';

export const FAQSection = () => {
  const [faqsList, setFaqsList] = useState(initialFaqs);
  const [openId, setOpenId] = useState(1);

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

  const homeFaqs = faqsList.slice(0, 5);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FFFDFC] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-mono font-bold tracking-wider uppercase text-[#111111] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
            Clear Answers
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#111111] tracking-tight uppercase">
            FREQUENTLY ASKED.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3D3D3D]">
            Everything you need to know about booking, security, and standards in Lucknow.
          </p>
        </div>

        {/* Accordion Cards matching reference design */}
        <div className="space-y-4">
          {homeFaqs.map((faq) => {
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
          })}
        </div>

        {/* Bottom Link to Full FAQ */}
        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#D92C1C] group border-b-2 border-[#111111] hover:border-[#D92C1C] pb-0.5 transition-all duration-200"
          >
            <span>Browse Complete Help Center & Questions</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
