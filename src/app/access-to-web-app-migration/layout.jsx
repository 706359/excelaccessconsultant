import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Convert Access Database to Web App | EAC',
  description:
    'Convert Access database to web application with Excel Access Consultant. SQL/Azure back end, web forms, fixed-price migration. Book a free consultation.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${BASE}/access-to-web-app-migration`,
    title: 'Convert Access Database to Web Application | Excel Access Consultant',
    description:
      'Convert Access database to web application with Excel Access Consultant. SQL/Azure back end, web forms, fixed-price migration. Book a free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Access Database to Web Application | Excel Access Consultant',
    description:
      'Convert Access database to web application with Excel Access Consultant. SQL/Azure back end, web forms, fixed-price migration. Book a free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/access-to-web-app-migration` },
};

export default function AccessToWebAppMigrationLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='Access to Web Application Migration'
        description='Convert Access database to web application with Excel Access Consultant. SQL Server or Azure SQL back end, web forms, fixed-price migration.'
        url='https://excelaccessconsultant.com/access-to-web-app-migration'
      />
      {children}
    </>
  );
}
