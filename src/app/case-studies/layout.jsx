import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Case Studies - Excel & Access Automation Success Stories',
  description:
    'Excel & Access automation case studies. See how we cut manual work from hours to minutes. 500+ projects completed.',
  openGraph: {
    type: 'website',
    url: `${BASE}/case-studies`,
    title: 'Case Studies - Excel & Access Automation Success Stories',
    description:
      'Excel & Access automation case studies. See how we cut manual work from hours to minutes. 500+ projects completed.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - Excel & Access Automation Success Stories',
    description: 'Excel & Access automation case studies. Hours to minutes. 500+ projects completed.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/case-studies` },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
