const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Excel VBA Developer | Hire VBA Programmer',
  description:
    'Excel VBA developer services. Custom VBA macros, automation scripts, Excel programming. 20+ years experience. Fixed pricing. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/vba-development`,
    title: 'Excel VBA Developer | Hire VBA Programmer',
    description:
      'Excel VBA developer services. Custom VBA macros, automation scripts, Excel programming. 20+ years experience. Fixed pricing. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel VBA Developer | Hire VBA Programmer',
    description: 'Excel VBA developer services. Custom VBA macros, automation scripts, Excel programming. 20+ years experience.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/vba-development` },
};

export default function VBADevelopmentLayout({ children }) {
  return children;
}
