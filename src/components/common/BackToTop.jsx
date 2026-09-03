import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll Back to Top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white border border-[#E5E1DD] shadow-card hover:shadow-elevated flex items-center justify-center text-[#111111] hover:bg-[#D92C1C] hover:text-white hover:border-[#D92C1C] transition-all duration-300 hover:-translate-y-1 active:scale-95 group cursor-pointer"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
