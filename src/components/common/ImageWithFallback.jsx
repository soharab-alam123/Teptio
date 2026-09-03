import React, { useState } from 'react';

const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80";

export const ImageWithFallback = ({
  src,
  alt = 'Tepito Service',
  fallbackSrc = DEFAULT_FALLBACK,
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [error, setError] = useState(false);

  return (
    <img
      src={error || !src ? fallbackSrc : src}
      alt={alt}
      loading={loading}
      onError={() => {
        if (!error) setError(true);
      }}
      className={className}
      {...props}
    />
  );
};
