import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const Input = ({
  label,
  error,
  icon: Icon,
  className = '',
  containerClassName = '',
  id,
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const isPassword = type === 'password';
  const effectiveType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`flex flex-col w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center justify-between"
        >
          <span>{label}</span>
          {props.required && <span className="text-accent-dark text-[10px] font-mono font-bold">*Required</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 pointer-events-none text-muted flex items-center justify-center">
            <Icon className="w-4 h-4 text-gray-500" />
          </div>
        )}
        <input
          id={inputId}
          type={effectiveType}
          className={`w-full bg-white border border-border text-primary rounded-xl px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 ${
            Icon ? 'pl-10' : ''
          } ${isPassword ? 'pr-11' : ''} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 text-gray-400 hover:text-gray-700 p-1 rounded-lg transition-colors cursor-pointer"
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>

      {error && <span className="text-xs text-red-500 mt-1 font-medium">{error}</span>}
    </div>
  );
};
