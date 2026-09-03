import React, { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#FFD400] via-[#D92C1C] to-[#D92C1C] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(217,44,28,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
