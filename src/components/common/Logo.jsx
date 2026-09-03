import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ className = 'h-7 sm:h-8', link = true }) => {
  const content = (
    <div className="flex items-center gap-1.5 group select-none">
      <img
        src="/logo.jpg"
        alt="Tepito"
        className={`${className} w-auto object-contain rounded-md shadow-xs group-hover:opacity-90 transition-opacity duration-200`}
      />
    </div>
  );

  if (link) {
    return (
      <Link to="/" className="inline-flex items-center focus:outline-none" aria-label="Tepito Home">
        {content}
      </Link>
    );
  }

  return content;
};
