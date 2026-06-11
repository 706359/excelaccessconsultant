import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Blog - Excel & Access Automation Tips & Guides',
  description:
    'Excel VBA and Access database tips, tutorials, and guides. Practical tips from 20+ years of client work.',
  openGraph: {
    type: 'website',
    url: `${BASE}/blog`,
    title: 'Blog - Excel & Access Automation Tips & Guides',
    description:
      'Excel VBA and Access database tips, tutorials, and guides. Practical tips from 20+ years of client work.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Excel & Access Automation Tips & Guides',
    description: 'Excel VBA and Access database tips, tutorials, and guides. Practical tips from 20+ years of client work.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/blog` },
};

export default function BlogLayout({ children }) {
  return children;
}
