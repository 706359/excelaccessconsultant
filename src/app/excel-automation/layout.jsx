import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Excel VBA Automation Services | ExcelAccessConsultant',
  description:
    'Excel VBA automation consultant. I build custom VBA solutions that eliminate repetitive Excel work, consolidation, reporting, and workflows. Fixed price. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/excel-automation`,
    title: 'Excel VBA Automation Services | ExcelAccessConsultant',
    description:
      'Excel VBA automation consultant. I build custom VBA solutions that eliminate repetitive Excel work, consolidation, reporting, and workflows. Fixed price. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel VBA Automation Services | ExcelAccessConsultant',
    description:
      'Excel VBA automation consultant. I build custom VBA solutions that eliminate repetitive Excel work, consolidation, reporting, and workflows. Fixed price. Free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/excel-automation` },
};

export default function ExcelAutomationLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='Excel VBA Process Automation'
        description='Excel VBA automation consultant. I build custom VBA solutions that eliminate repetitive Excel work, consolidation, reporting, and workflows. Fixed price. Free consultation.'
        url='https://excelaccessconsultant.com/excel-automation'
      />
      {children}
    </>
  );
}
