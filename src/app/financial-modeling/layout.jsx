const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Financial Modeling Consultant | Excel Financial Models',
  description:
    'Financial modeling consultant. Build accurate Excel financial models, forecasts, and budgets. 20+ years experience. Fixed pricing. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/financial-modeling`,
    title: 'Financial Modeling Consultant | Excel Financial Models',
    description:
      'Financial modeling consultant. Build accurate Excel financial models, forecasts, and budgets. 20+ years experience. Fixed pricing. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Modeling Consultant | Excel Financial Models',
    description: 'Financial modeling consultant. Build accurate Excel financial models, forecasts, and budgets. 20+ years experience.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/financial-modeling` },
};

export default function FinancialModelingLayout({ children }) {
  return children;
}
