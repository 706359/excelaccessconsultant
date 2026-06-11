import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Thank You - ExcelAccessConsultant',
  description:
    "Thanks for reaching out. We received your message and will reply within one business day. Check your email for confirmation.",
  openGraph: {
    type: 'website',
    url: `${BASE}/thank-you`,
    title: 'Thank You - ExcelAccessConsultant',
    description:
      "Thanks for reaching out. We received your message and will reply within one business day. Check your email for confirmation.",
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You - ExcelAccessConsultant',
    description:
      "Thanks for reaching out. We received your message and will reply within one business day. Check your email for confirmation.",
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/thank-you` },
};

export default function ThankYouLayout({ children }) {
  return children;
}
