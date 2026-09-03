import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal Component
 * Smoothly reveals content when scrolled into the viewport with high-performance Framer Motion.
 */
export const ScrollReveal = ({
  children,
  className = '',
  variant = 'fade-up', // 'fade-up', 'fade-in', 'scale-up', 'slide-left', 'slide-right'
  delay = 0,
  duration = 0.65,
  once = true,
  amount = 0.15
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.94, y: 20 },
          visible: { opacity: 1, scale: 1, y: 0 }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -35 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 35 },
          visible: { opacity: 1, x: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollStagger Component
 * Automatically applies staggered reveal animations to its child items when scrolled into view.
 */
export const ScrollStagger = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
  amount = 0.15
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem Component
 * Child of ScrollStagger to animate in sequence
 */
export const StaggerItem = ({ children, className = '', y = 25 }) => {
  const itemVariants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
