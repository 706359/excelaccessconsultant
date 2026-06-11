import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Operational Stability & Data Governance | ExcelAccessConsultant',
  description:
    'I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting for finance and operations. You work with me directly.',
  openGraph: {
    type: 'website',
    url: `${BASE}/about`,
    title: 'Operational Stability & Data Governance | ExcelAccessConsultant',
    description:
      'I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting for finance and operations.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operational Stability & Data Governance | ExcelAccessConsultant',
    description: 'I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/about` },
};

export default function AboutLayout({ children }) {
  return children;
}
