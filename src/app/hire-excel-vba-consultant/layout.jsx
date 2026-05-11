const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround',
  description:
    'Hire an experienced Excel VBA consultant. 20+ years, 500+ projects. Fixed price, clear scope, no surprises. Free 30-minute consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/hire-excel-vba-consultant`,
    title: 'Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround',
    description:
      'Hire an experienced Excel VBA consultant. 20+ years, 500+ projects. Fixed price, clear scope, no surprises. Free 30-minute consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround',
    description:
      'Hire an experienced Excel VBA consultant. 20+ years, 500+ projects. Free consultation.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/hire-excel-vba-consultant` },
};

export default function HireExcelVBAConsultantLayout({ children }) {
  return children;
}
