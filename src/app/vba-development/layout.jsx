import ServiceSchema from '../../components/SEO/ServiceSchema';

import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

const TITLE = 'Hire a VBA Developer | Excel VBA Programmer & Consultant';
const DESCRIPTION =
  'Hire an Excel VBA developer or consultant for custom macros, automation, and broken-code fixes. Fixed price, full source code ownership.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${BASE}/vba-development`,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/vba-development` },
};

export default function VBADevelopmentLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType='VBA Development'
        description={DESCRIPTION}
        url='https://excelaccessconsultant.com/vba-development'
      />
      {children}
    </>
  );
}
