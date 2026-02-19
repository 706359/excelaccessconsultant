const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Case Studies - Excel & Access Automation Success Stories',
  description:
    'Excel & Access automation case studies. See how we cut manual work from hours to minutes. 200+ projects completed.',
  openGraph: {
    type: 'website',
    url: `${BASE}/case-studies`,
    title: 'Case Studies - Excel & Access Automation Success Stories',
    description:
      'Excel & Access automation case studies. See how we cut manual work from hours to minutes. 200+ projects completed.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies - Excel & Access Automation Success Stories',
    description: 'Excel & Access automation case studies. Hours to minutes. 200+ projects completed.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/case-studies` },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
