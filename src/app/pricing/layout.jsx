import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;

export const metadata = {
  title: 'Pricing | Excel & Access Consulting | ExcelAccessConsultant',
  description:
    'Fixed-price Excel VBA automation, Access database, and migration consulting. Simple $1,500–$3,000, Advanced $3,000–$8,000, Enterprise $8,000+. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/pricing`,
    title: 'Consulting Pricing | ExcelAccessConsultant',
    description:
      'Transparent fixed pricing for Excel automation, Access databases, repairs, and migrations. No hourly billing surprises.',
    images: [BRAND_LOGO_OG],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulting Pricing | ExcelAccessConsultant',
    description:
      'Fixed-price Excel and Access consulting. See project tiers and service-specific pricing.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/pricing` },
};

export default function PricingLayout({ children }) {
  return children;
}
