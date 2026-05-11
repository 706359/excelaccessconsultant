import ServiceSchema from '../../components/SEO/ServiceSchema';

const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Access Database Migration | Migrate Access to SQL',
  description:
    'Access to SQL Server migration consultant. Plan and execute database migrations without data loss. Better performance and scalability. Free consultation.',
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
    description: 'Access to SQL Server migration consultant. Plan and execute database migrations without data loss. Better performance and scalability. Free consultation.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/database-migration` },
};

export default function DatabaseMigrationLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType="Database Migration"
        description="Access to SQL Server migration consultant. Plan and execute database migrations without data loss. Better performance and scalability. Free consultation."
        url="https://excelaccessconsultant.com/database-migration"
      />
      {children}
    </>
  );
}
