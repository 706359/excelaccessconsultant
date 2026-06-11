import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Excel VBA Developer | Hire VBA Programmer',
  description:
    'Custom VBA development for Excel and Access. Build macros, automation scripts, and applications. Fix broken code or build from scratch. Fixed scope, fixed price.',
  openGraph: {
    type: 'website',
    url: `${BASE}/vba-development`,
    title: 'Excel VBA Developer | Hire VBA Programmer',
    description:
      'Custom VBA development for Excel and Access. Build macros, automation scripts, and applications. Fix broken code or build from scratch. Fixed scope, fixed price.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel VBA Developer | Hire VBA Programmer',
    description:
      'Custom VBA development for Excel and Access. Build macros, automation scripts, and applications. Fix broken code or build from scratch. Fixed scope, fixed price.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/vba-development` },
};

export default function VBADevelopmentLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='VBA Development'
        description='Custom VBA development for Excel and Access. Build macros, automation scripts, and applications. Fix broken code or build from scratch. Fixed scope, fixed price.'
        url='https://excelaccessconsultant.com/vba-development'
      />
      {children}
    </>
  );
}
