const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Operational Stability & Data Governance | ExcelAccessConsultant',
  description:
    'I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting for finance and operations—you work with me directly.',
  openGraph: {
    type: 'website',
    url: `${BASE}/about`,
    title: 'Operational Stability & Data Governance | ExcelAccessConsultant',
    description:
      'I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting for finance and operations.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operational Stability & Data Governance | ExcelAccessConsultant',
    description: 'I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/about` },
};

export default function AboutLayout({ children }) {
  return children;
}
