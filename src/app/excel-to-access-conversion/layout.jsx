import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Convert Excel to Access Database | EAC',
  description:
    'Convert Excel to Access database with Excel Access Consultant. Fixed-price migration, multi-user forms, reports & data cleanup. Book a free consultation.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${BASE}/excel-to-access-conversion`,
    title: 'Convert Excel to Access Database | Excel Access Consultant',
    description:
      'Convert Excel to Access database with Excel Access Consultant. Fixed-price migration, multi-user forms, reports & data cleanup. Book a free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Excel to Access Database | Excel Access Consultant',
    description:
      'Convert Excel to Access database with Excel Access Consultant. Fixed-price migration, multi-user forms, reports & data cleanup. Book a free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/excel-to-access-conversion` },
};

export default function ExcelToAccessConversionLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='Excel to Access Conversion'
        description='Convert Excel to Access database with Excel Access Consultant. Fixed-price migration, multi-user forms, reports and data cleanup.'
        url='https://excelaccessconsultant.com/excel-to-access-conversion'
      />
      {children}
    </>
  );
}
