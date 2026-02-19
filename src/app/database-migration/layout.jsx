const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Access Database Migration | Migrate Access to SQL',
  description:
    'Access to SQL Server migration. Optimize performance, scale to more users. 20+ years. Fixed pricing. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/database-migration`,
    title: 'Access Database Migration | Migrate Access to SQL',
    description:
      'Access to SQL Server migration. Optimize performance, scale to more users. 20+ years. Fixed pricing. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Database Migration | Migrate Access to SQL',
    description: 'Access to SQL Server migration. Optimize performance, scale users. 20+ years. Fixed pricing. Free consultation.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/database-migration` },
};

export default function DatabaseMigrationLayout({ children }) {
  return children;
}
