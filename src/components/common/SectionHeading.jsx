import React from 'react';

export const SectionHeading = ({
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
  titleClassName = '',
}) => {
  const isDark = theme === 'dark';

  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-2xl ${alignments[align]} ${className}`}>
      {tag && (
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 transition-all duration-200 ${
            isDark
              ? 'bg-white/10 text-white border border-white/15'
              : 'bg-[#F6F4F1] text-[#111111] border border-[#E5E1DD]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
          {tag}
        </span>
      )}

      {title && (
        <h2
          className={`font-display font-extrabold tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-snug uppercase ${isDark ? 'text-white' : 'text-primary'
            } ${titleClassName}`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`mt-2 text-xs sm:text-sm md:text-base font-normal leading-relaxed ${isDark ? 'text-slate-300' : 'text-muted'
            }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
