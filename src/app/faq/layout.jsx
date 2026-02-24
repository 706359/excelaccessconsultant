const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

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
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/faq` },
};

export default function FAQLayout({ children }) {
  return children;
}
