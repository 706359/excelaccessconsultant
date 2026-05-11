import ServiceSchema from '../../components/SEO/ServiceSchema';

const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

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
    description: 'Custom VBA development for Excel and Access. Build macros, automation scripts, and applications. Fix broken code or build from scratch. Fixed scope, fixed price.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/vba-development` },
};

export default function VBADevelopmentLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType="VBA Development"
        description="Custom VBA development for Excel and Access. Build macros, automation scripts, and applications. Fix broken code or build from scratch. Fixed scope, fixed price."
        url="https://excelaccessconsultant.com/vba-development"
      />
      {children}
    </>
  );
}
