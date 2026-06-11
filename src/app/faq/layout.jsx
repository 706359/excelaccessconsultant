import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'FAQ | ExcelAccessConsultant.com',
  description:
    'Frequently asked questions about Excel and Access consulting services. Get answers about pricing, timelines, support, and more.',
  openGraph: {
    type: 'website',
    url: `${BASE}/faq`,
    title: 'FAQ | ExcelAccessConsultant.com',
    description:
      'Frequently asked questions about Excel and Access consulting services. Get answers about pricing, timelines, support, and more.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | ExcelAccessConsultant.com',
    description: 'Frequently asked questions about Excel and Access consulting services.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/faq` },
};

export default function FAQLayout({ children }) {
  return children;
}
