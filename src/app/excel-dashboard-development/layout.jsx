import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Excel Dashboard Development Services | EAC',
  description:
    'Excel dashboard development services for custom KPI workbooks that refresh from your files and databases. Fixed-price builds. Book a free consultation.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${BASE}/excel-dashboard-development`,
    title: 'Excel Dashboard Development Services | Excel Access Consultant',
    description:
      'Excel dashboard development services for custom KPI workbooks that refresh from your files and databases. Fixed-price builds. Book a free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel Dashboard Development Services | Excel Access Consultant',
    description:
      'Excel dashboard development services for custom KPI workbooks that refresh from your files and databases. Fixed-price builds. Book a free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/excel-dashboard-development` },
};

export default function ExcelDashboardDevelopmentLayout({ children }) {
  return children;
}
