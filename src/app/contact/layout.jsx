import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';
import { CTA } from '../../constants/site';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;
const CONTACT_DESCRIPTION = `Get in touch for a free consultation. Excel VBA automation and Access database consulting. Call ${CTA.phone} or email rob@excelaccessconsultant.com`;

export const metadata = {
  title: 'Contact | ExcelAccessConsultant.com',
  description: CONTACT_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${BASE}/contact`,
    title: 'Contact | ExcelAccessConsultant.com',
    description: CONTACT_DESCRIPTION,
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | ExcelAccessConsultant.com',
    description:
      'Get in touch for a free consultation. Excel VBA automation and Access database consulting.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/contact` },
};

export default function ContactLayout({ children }) {
  return children;
}
