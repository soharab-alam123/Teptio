import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Select = ({
  label,
  options = [],
  error,
  className = '',
  containerClassName = '',
  id,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center justify-between"
        >
          <span>{label}</span>
          {props.required && <span className="text-accent-dark text-[10px] font-mono font-bold">*Required</span>}
        </label>
      )}

      <div className="relative flex items-center">
        <select
          id={selectId}
          className={`w-full bg-white border border-border text-primary rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer pr-10 transition-all duration-200 ${
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
          } ${className}`}
          {...props}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-muted absolute right-4 pointer-events-none" />
      </div>

      {error && <span className="text-xs text-red-500 mt-1 font-medium">{error}</span>}
    </div>
  );
};
