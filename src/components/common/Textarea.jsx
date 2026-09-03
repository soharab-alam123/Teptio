import React from 'react';

export const Textarea = ({
  label,
  error,
  rows = 4,
  className = '',
  containerClassName = '',
  id,
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={textareaId}
          className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center justify-between"
        >
          <span>{label}</span>
          {props.required && <span className="text-accent-dark text-[10px] font-mono font-bold">*Required</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        rows={rows}
        className={`w-full bg-white border border-border text-primary rounded-xl px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-y transition-all duration-200 ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
        } ${className}`}
        {...props}
      />

      {error && <span className="text-xs text-red-500 mt-1 font-medium">{error}</span>}
    </div>
  );
};
