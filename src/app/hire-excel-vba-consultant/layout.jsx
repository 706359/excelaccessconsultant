import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround',
  description:
    'Hire an experienced Excel VBA consultant. 20+ years, 500+ projects. Fixed price, clear scope, no surprises. Free 30-minute consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/hire-excel-vba-consultant`,
    title: 'Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround',
    description:
      'Hire an experienced Excel VBA consultant. 20+ years, 500+ projects. Fixed price, clear scope, no surprises. Free 30-minute consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround',
    description:
      'Hire an experienced Excel VBA consultant. 20+ years, 500+ projects. Free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/hire-excel-vba-consultant` },
};

export default function HireExcelVBAConsultantLayout({ children }) {
  return children;
}
