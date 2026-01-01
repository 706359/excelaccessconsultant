/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Enterprise dark palette
        slate: {
          50: '#F8FAFC',
          400: '#94A3B8',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Brand colors - MS Access Red/Maroon (Primary)
        excel: '#A32228', // MS Access red/maroon
        'excel-hover': '#8a1c21', // Darker red for hover
        access: '#A32228',
        'access-hover': '#8a1c21',
        // Base background - light professional gray
        base: '#f5f7fa',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        display: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};
