import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Access Database Repair | Fix Corrupted Access Files',
  description:
    'Access database repair specialist. Fix corrupted files, recover data, stop crashes. 20+ years experience. Fixed-price repair quotes. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/access-database-repair`,
    title: 'Access Database Repair | Fix Corrupted Access Files',
    description:
      'Access database repair specialist. Fix corrupted files, recover data, stop crashes. 20+ years experience. Fixed-price repair quotes. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Database Repair | Fix Corrupted Access Files',
    description:
      'Access database repair specialist. Fix corrupted files, recover data, stop crashes. 20+ years experience. Fixed-price repair quotes.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/access-database-repair` },
};

export default function AccessDatabaseRepairLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='Access Database Repair'
        description='Access database repair specialist. Fix corrupted files, recover data, stop crashes. 20+ years experience. Fixed-price repair quotes. Free consultation.'
        url='https://excelaccessconsultant.com/access-database-repair'
      />
      {children}
    </>
  );
}
