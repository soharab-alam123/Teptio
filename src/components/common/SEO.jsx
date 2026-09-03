import { useEffect } from 'react';

export const SEO = ({ title, description, overrideTitle = false }) => {
  useEffect(() => {
    // Always enforce exact concise title for home page without truncation
    if (!title || title.includes('Everything You Need')) {
      document.title = 'Tepito — Everything You Need.';
    } else if (overrideTitle || title.startsWith('Tepito')) {
      document.title = title;
    } else {
      document.title = `${title} | Tepito`;
    }

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', description);
      }
    }
  }, [title, description, overrideTitle]);

  return null;
};
