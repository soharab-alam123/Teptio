import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs md:text-sm text-muted mb-6">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-primary transition-colors duration-200"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            {isLast ? (
              <span className="text-primary font-medium truncate max-w-[200px] md:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="hover:text-primary transition-colors duration-200 truncate"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
