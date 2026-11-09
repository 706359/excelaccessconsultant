import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Microsoft Access Support Services | Excel Access Consultant',
  description:
    'Microsoft Access support services for fixes, locking issues, and small changes on live .accdb files. Advisory at $90/hour. Book a free consultation.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${BASE}/access-database-support`,
    title: 'Microsoft Access Support Services | Excel Access Consultant',
    description:
      'Microsoft Access support services for fixes, locking issues, and small changes on live .accdb files. Advisory at $90/hour. Book a free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Access Support Services | Excel Access Consultant',
    description:
      'Microsoft Access support services for fixes, locking issues, and small changes on live .accdb files. Advisory at $90/hour. Book a free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/access-database-support` },
};

export default function AccessDatabaseSupportLayout({ children }) {
  return children;
}
