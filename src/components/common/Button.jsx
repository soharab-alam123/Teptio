import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  arrow = false,
  upArrow = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full group select-none tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-3 gap-2",
    lg: "text-base px-7 py-4 gap-2.5",
    xl: "text-lg px-8 py-5 gap-3 font-semibold",
  };

  const variants = {
    primary: "bg-[#D92C1C] text-white hover:bg-[#B82315] active:scale-[0.98] shadow-sm",
    black: "bg-[#111111] text-white hover:bg-black active:scale-[0.98] shadow-sm",
    accent: "bg-[#D92C1C] text-white hover:bg-[#B82315] active:scale-[0.98] shadow-sm",
    secondary: "bg-white text-[#111111] border border-[#E5E1DD] hover:border-[#D92C1C] hover:text-[#D92C1C] hover:bg-gray-50 active:scale-[0.98]",
    dark: "bg-[#111111] text-white hover:bg-black active:scale-[0.98] shadow-sm",
    outline: "bg-transparent text-[#111111] border border-[#E5E1DD] hover:border-[#D92C1C] hover:text-[#D92C1C] active:scale-[0.98]",
    ghost: "bg-transparent text-[#111111] hover:text-[#D92C1C] p-0 rounded-none underline-offset-4 hover:underline",
  };

  const combinedClasses = `
    ${baseStyles}
    ${sizeStyles[size] || sizeStyles.md}
    ${variants[variant] || variants.primary}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
    ${className}
  `.trim();

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />}
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {upArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
