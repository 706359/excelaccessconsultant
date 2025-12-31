# ExcelAccessConsultant Website

A professional, production-ready website built with React 18 and Vite for a consulting and automation business.

## Features

- **Modern Design**: Clean, professional design with Excel green theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Token-Based Design System**: Following Raavito Design System principles
- **React Router**: Client-side routing for seamless navigation
- **Component-Based Architecture**: Reusable, maintainable components
- **Production Ready**: Optimized for performance and SEO

## Tech Stack

- **React 18**: Latest React features
- **Vite**: Fast build tool and dev server
- **React Router DOM**: Client-side routing
- **CSS Modules**: Scoped component styles
- **Design System**: Token-first architecture

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Button/
│   ├── Card/
│   ├── ContactForm/
│   ├── Footer/
│   ├── Header/
│   └── Section/
├── pages/              # Page components
│   ├── About/
│   ├── Contact/
│   ├── FAQ/
│   ├── Home/
│   ├── PrivacyPolicy/
│   └── Services/
├── tokens/             # Design system tokens
│   ├── core.css
│   └── semantic.css
├── utilities/          # Atomic utility classes
│   └── utilities.css
├── styles/             # Global styles
│   └── global.css
├── App.jsx            # Main app component with routing
└── main.jsx           # Entry point
```

## Design System

This project follows a token-first design system:

1. **Core Tokens** (`tokens/core.css`): Numeric values (colors, spacing, typography)
2. **Semantic Tokens** (`tokens/semantic.css`): Component-specific tokens
3. **Utilities** (`utilities/utilities.css`): Atomic utility classes only
4. **Components**: Component-specific styles using tokens

## Pages

- **Home**: Hero section, trust indicators, services preview, why choose us, dashboard visuals, CTA
- **About**: Company mission, approach, values
- **Services**: Overview and individual service pages
  - Excel Automation
  - MS Access Development
  - Data Processing & Reporting
- **FAQ**: Frequently asked questions with accordion interface
- **Contact**: Contact form with business details
- **Privacy Policy**: Privacy policy and data handling information

## Customization

### Colors

Update the brand colors in `src/tokens/core.css`:
- `--color-brand-green`: Primary brand color
- `--color-brand-charcoal`: Secondary color
- `--color-brand-red`: Accent color (use sparingly)

### Content

Update page content in the respective page components in `src/pages/`.

### Contact Information

Update contact details in:
- `src/components/Footer/Footer.jsx`
- `src/pages/Contact/Contact.jsx`
- `src/pages/PrivacyPolicy/PrivacyPolicy.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.

