import React from 'react';

/**
 * RedCurveUnderline Component
 * Renders the exact organic curved red brush underline matching Tepito's design language.
 */
export const RedCurveUnderline = ({
  className = 'w-full h-3 text-[#D92C1C]',
  strokeWidth = 3.5
}) => {
  return (
    <svg
      className={`absolute -bottom-2 sm:-bottom-2.5 left-0 overflow-visible pointer-events-none ${className}`}
      viewBox="0 0 100 12"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M 2 4 C 30 11, 70 11, 98 4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RedCurveUnderline;
