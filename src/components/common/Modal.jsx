import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop with smooth fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Modal Container: Compact, controlled dimensions, NO jarring scale jump */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`relative w-full ${maxWidth} bg-[#FFFDFC] rounded-2xl border border-[#E5E1DD] shadow-xl p-5 sm:p-6 z-10 my-6 max-h-[90vh] overflow-y-auto`}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-3 border-b border-[#E5E1DD] mb-4">
              <div>
                {title && (
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#111111] tracking-tight">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-[13px] text-[#666666] mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-full text-[#666666] hover:text-[#D92C1C] hover:bg-[#F6F4F1] transition-colors -mr-1 -mt-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
