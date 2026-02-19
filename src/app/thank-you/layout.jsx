const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

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
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/thank-you` },
};

export default function ThankYouLayout({ children }) {
  return children;
}
