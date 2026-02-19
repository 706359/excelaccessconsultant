const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Contact | ExcelAccessConsultant.com',
  description:
    'Get in touch for a free consultation. Excel VBA automation and Access database consulting. Call 801-616-3702 or email rob@excelaccessconsultant.com',
  openGraph: {
    type: 'website',
    url: `${BASE}/contact`,
    title: 'Contact | ExcelAccessConsultant.com',
    description:
      'Get in touch for a free consultation. Excel VBA automation and Access database consulting. Call 801-616-3702 or email rob@excelaccessconsultant.com',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | ExcelAccessConsultant.com',
    description: 'Get in touch for a free consultation. Excel VBA automation and Access database consulting.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/contact` },
};

export default function ContactLayout({ children }) {
  return children;
}
