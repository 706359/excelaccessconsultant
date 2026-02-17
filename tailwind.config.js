/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - match logo (Excel = green, Access = red) | NO BLUE
        primary: {
          DEFAULT: '#C8102E', // Red - Access (matches logo)
          hover: '#9a0c24', // Darker red for hover
        },
        secondary: {
          DEFAULT: '#107C41', // Green - Excel (matches logo)
          hover: '#0D6535', // Darker green for hover
        },
        // Legacy / aliases (logo-matched)
        excel: '#107C41', // Excel green (logo)
        'excel-hover': '#0D6535',
        access: '#C8102E', // Access red (logo)
        'access-hover': '#9a0c24',
        'excel-green': '#107C41',
        'excel-green-hover': '#0D6535',
        'excel-green-dark': '#0a4d28',
        // Neutrals
        slate: {
          50: '#f9fafb', // Gray 50
          100: '#f3f4f6',
          200: '#e5e7eb', // Border
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Text Secondary
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827', // Text Primary
        },
        base: '#ffffff', // Background
        surface: '#f9fafb', // Surface
      },
      fontFamily: {
        sans: [
          'IBM Plex Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        display: [
          'IBM Plex Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Display Sizes (Hero, Large Headings)
        'display-2xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        // Heading Sizes (Section Titles, Subheadings)
        'heading-xl': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-lg': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-xs': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        // Body Sizes (Content, Paragraphs)
        'body-xl': ['20px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        // Label Sizes (Form Labels, Small Text)
        'label-lg': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'label-base': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        // Standard Spacing Scale (4px base unit) - matches .cursorrules
        0: '0px',
        1: '4px', // 0.25rem - Tight spacing
        2: '8px', // 0.5rem - xs
        3: '12px', // 0.75rem
        4: '16px', // 1rem - sm
        5: '20px', // 1.25rem
        6: '24px', // 1.5rem - md
        8: '32px', // 2rem - lg
        10: '40px', // 2.5rem
        12: '48px', // 3rem - xl
        16: '64px', // 4rem - 2xl
        20: '80px', // 5rem
        24: '96px', // 6rem - 3xl
        // Semantic Spacing (matches .cursorrules)
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.15)',
        nav: '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        micro: '150ms',
        standard: '300ms',
        complex: '500ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      backgroundImage: {
        // NO GRADIENTS - Solid colors only
      },
    },
  },
  plugins: [],
};
