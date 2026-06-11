import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;

export const metadata = {
  title: 'Free Excel & Access Resources | ExcelAccessConsultant',
  description:
    'Download free Excel automation checklists, Access database health guides, and VBA best practices. Instant access, no spam.',
  openGraph: {
    type: 'website',
    url: `${BASE}/free-checklist`,
    title: 'Free Excel & Access Resources',
    description:
      'Free guides for Access database health, Excel automation readiness, and VBA best practices.',
    images: [BRAND_LOGO_OG],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  alternates: { canonical: `${BASE}/free-checklist` },
};

export default function FreeChecklistLayout({ children }) {
  return children;
}
