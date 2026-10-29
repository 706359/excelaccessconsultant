import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Access Database Consultant | Access Data Consulting',
  description:
    'Hire an MS Access database consultant to fix crashes, repair corruption or migrate to SQL Server. 20+ years of Microsoft Access experience. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/access-consulting`,
    title: 'Access Database Consultant & Microsoft Access Experts',
    description:
      'Hire an MS Access database consultant to fix crashes, repair corruption or migrate to SQL Server. 20+ years of Microsoft Access experience. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Database Consultant & Microsoft Access Experts',
    description:
      'Hire an MS Access database consultant to fix crashes, repair corruption or migrate to SQL Server. 20+ years of Microsoft Access experience. Free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/access-consulting` },
};

export default function AccessConsultingLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='Access Database Development'
        description='Hire an MS Access database consultant to fix crashes, repair corruption or migrate to SQL Server. 20+ years of Microsoft Access experience. Free consultation.'
        url='https://excelaccessconsultant.com/access-consulting'
      />
      {children}
    </>
  );
}
