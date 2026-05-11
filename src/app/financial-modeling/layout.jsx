import ServiceSchema from '../../components/SEO/ServiceSchema';

const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Financial Modeling Consultant | Excel Financial Models',
  description:
    'Excel financial modeling consultant. Build and audit forecasting, budgeting, and analysis models. Structured, documented, stakeholder-ready. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/financial-modeling`,
    title: 'Financial Modeling Consultant | Excel Financial Models',
    description:
      'Excel financial modeling consultant. Build and audit forecasting, budgeting, and analysis models. Structured, documented, stakeholder-ready. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Modeling Consultant | Excel Financial Models',
    description: 'Excel financial modeling consultant. Build and audit forecasting, budgeting, and analysis models. Structured, documented, stakeholder-ready. Free consultation.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/financial-modeling` },
};

export default function FinancialModelingLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType="Financial Modeling"
        description="Excel financial modeling consultant. Build and audit forecasting, budgeting, and analysis models. Structured, documented, stakeholder-ready. Free consultation."
        url="https://excelaccessconsultant.com/financial-modeling"
      />
      {children}
    </>
  );
}
