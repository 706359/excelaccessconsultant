import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Access Database Migration & Modernization | Migrate Access to SQL',
  description:
    'Access database migration and modernization consultant. Migrate Access to SQL Server, Azure SQL, or hybrid architectures without data loss. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/database-migration`,
    title: 'Access Database Migration | Migrate Access to SQL',
    description:
      'Access to SQL Server migration consultant. Plan and execute database migrations without data loss. Better performance and scalability. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Database Migration | Migrate Access to SQL',
    description:
      'Access to SQL Server migration consultant. Plan and execute database migrations without data loss. Better performance and scalability. Free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/database-migration` },
};

export default function DatabaseMigrationLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='Database Migration and Modernization'
        description='Access database migration and modernization consultant. Migrate Access to SQL Server without data loss. Better performance and scalability. Free consultation.'
        url='https://excelaccessconsultant.com/database-migration'
      />
      {children}
    </>
  );
}
