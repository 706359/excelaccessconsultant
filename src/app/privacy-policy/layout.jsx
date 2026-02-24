const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

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
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/privacy-policy` },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
