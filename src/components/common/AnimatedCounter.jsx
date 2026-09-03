import React, { useEffect, useState, useRef } from 'react';

export const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
  // If value is non-numeric format like '24/7', render directly with zero distortion
  if (typeof value === 'string' && value.includes('/')) {
    return <span>{value}{suffix}</span>;
  }

  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // Extract numeric part
  const numericTarget = parseInt(String(value).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    let animationFrame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Smooth ease out quart for natural deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = Math.round(easeProgress * numericTarget);
            setCount(currentVal);

            if (progress < 1) {
              animationFrame = window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          animationFrame = window.requestAnimationFrame(step);
          observer.disconnect(); // Run once when scrolled into view
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [numericTarget, duration]);

  // If value is non-numeric like '24/7'
  if (isNaN(numericTarget) || numericTarget === 0) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} className="tabular-nums inline-block">
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};
