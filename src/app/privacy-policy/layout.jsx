import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Privacy Policy | ExcelAccessConsultant.com',
  description:
    'Privacy Policy for ExcelAccessConsultant.com. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    type: 'website',
    url: `${BASE}/privacy-policy`,
    title: 'Privacy Policy | ExcelAccessConsultant.com',
    description:
      'Privacy Policy for ExcelAccessConsultant.com. Learn how we collect, use, and protect your personal information.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | ExcelAccessConsultant.com',
    description: 'Privacy Policy for ExcelAccessConsultant.com.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/privacy-policy` },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
