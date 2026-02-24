const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Access Database Consultant | MS Access Expert',
  description:
    'Access database consultant. Build stable databases, fix crashes, optimize performance. 20+ years. Fixed pricing. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/access-consulting`,
    title: 'Access Database Consultant | MS Access Expert',
    description:
      'Access database consultant. Build stable databases, fix crashes, optimize performance. 20+ years. Fixed pricing. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Database Consultant | MS Access Expert',
    description:
      'Access database consultant. Build stable databases, fix crashes, optimize performance. 20+ years. Fixed pricing. Free consultation.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/access-consulting` },
};

export default function AccessConsultingLayout({ children }) {
  return children;
}
