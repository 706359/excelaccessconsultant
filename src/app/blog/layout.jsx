const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Blog - Excel & Access Automation Tips & Guides',
  description:
    'Excel VBA and Access database tips, tutorials, and guides. Expert advice from 20+ years automating business processes.',
  openGraph: {
    type: 'website',
    url: `${BASE}/blog`,
    title: 'Blog - Excel & Access Automation Tips & Guides',
    description:
      'Excel VBA and Access database tips, tutorials, and guides. Expert advice from 20+ years automating business processes.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Excel & Access Automation Tips & Guides',
    description: 'Excel VBA and Access database tips, tutorials, and guides. Expert advice from 20+ years automating business processes.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/blog` },
};

export default function BlogLayout({ children }) {
  return children;
}
