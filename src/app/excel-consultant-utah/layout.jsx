const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Excel VBA Consultant in Utah | Robert Terry',
  description:
    'Excel VBA consultant based in Springville, Utah. Serving Salt Lake City, Provo, Ogden, and all of Utah. 20+ years automating business processes. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/excel-consultant-utah`,
    title: 'Excel VBA Consultant in Utah | Robert Terry',
    description:
      'Excel VBA consultant based in Springville, Utah. Serving Salt Lake City, Provo, Ogden, and all of Utah. 20+ years automating business processes. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel VBA Consultant in Utah | Robert Terry',
    description:
      'Excel VBA consultant based in Springville, Utah. 20+ years experience. Free consultation.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/excel-consultant-utah` },
};

export default function ExcelConsultantUtahLayout({ children }) {
  return children;
}
