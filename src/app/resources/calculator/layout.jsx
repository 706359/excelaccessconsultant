import { BRAND_LOGO_OG, SITE_URL } from '../../../config/brand';

export const metadata = {
  title: 'Manual Work ROI Calculator | ExcelAccessConsultant',
  description:
    'Estimate how much manual Excel and Access work costs your team each year. Free ROI calculator from ExcelAccessConsultant.com.',
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/resources/calculator`,
    title: 'Manual Work ROI Calculator | ExcelAccessConsultant',
    description:
      'Estimate how much manual Excel and Access work costs your team each year. Free ROI calculator from ExcelAccessConsultant.com.',
    images: [BRAND_LOGO_OG],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manual Work ROI Calculator | ExcelAccessConsultant',
    description:
      'Estimate how much manual Excel and Access work costs your team each year. Free ROI calculator from ExcelAccessConsultant.com.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${SITE_URL}/resources/calculator` },
};

export default function ResourcesCalculatorLayout({ children }) {
  return children;
}
