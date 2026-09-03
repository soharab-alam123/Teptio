/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFDFC',    // Warm White
        'background-soft': '#F6F4F1',
        primary: '#111111',       // Deep Black
        accent: '#D92C1C',        // Tepito Red
        'accent-dark': '#B82315',
        'accent-light': '#FFF1EF',
        yellow: {
          brand: '#FFD400',
        },
        muted: '#3D3D3D',         // Dark Gray readable text
        border: '#E5E1DD',        // Light Gray border
        surface: {
          light: '#FFFFFF',
          card: '#FFFFFF',
          subtle: '#F6F4F1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Inter', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(17, 17, 17, 0.04), 0 1px 2px 0 rgba(17, 17, 17, 0.02)',
        'card': '0 4px 12px -2px rgba(17, 17, 17, 0.06), 0 2px 4px -1px rgba(17, 17, 17, 0.03)',
        'elevated': '0 12px 28px -4px rgba(17, 17, 17, 0.08), 0 4px 8px -2px rgba(17, 17, 17, 0.03)',
      }
    },
  },
  plugins: [],
}
