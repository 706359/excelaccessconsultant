import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

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
    description:
      'Excel financial modeling consultant. Build and audit forecasting, budgeting, and analysis models. Structured, documented, stakeholder-ready. Free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/financial-modeling` },
};

export default function FinancialModelingLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='Financial Modeling'
        description='Excel financial modeling consultant. Build and audit forecasting, budgeting, and analysis models. Structured, documented, stakeholder-ready. Free consultation.'
        url='https://excelaccessconsultant.com/financial-modeling'
      />
      {children}
    </>
  );
}
