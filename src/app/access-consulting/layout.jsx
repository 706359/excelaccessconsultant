import ServiceSchema from '../../components/SEO/ServiceSchema';

const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export const metadata = {
  title: 'Access Database Consultant | MS Access Expert',
  description:
    'MS Access database consultant. Fix crashes, multi-user conflicts, slow queries. Design and rebuild Access databases that run reliably. 20+ years experience. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/access-consulting`,
    title: 'Access Database Consultant | MS Access Expert',
    description:
      'MS Access database consultant. Fix crashes, multi-user conflicts, slow queries. Design and rebuild Access databases that run reliably. 20+ years experience. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Database Consultant | MS Access Expert',
    description:
      'MS Access database consultant. Fix crashes, multi-user conflicts, slow queries. Design and rebuild Access databases that run reliably. 20+ years experience. Free consultation.',
    images: [`${BASE}/logo.png`],
  },
  alternates: { canonical: `${BASE}/access-consulting` },
};

export default function AccessConsultingLayout({ children }) {
  return (
    <>
      <ServiceSchema
        serviceType="Access Database Development"
        description="MS Access database consultant. Fix crashes, multi-user conflicts, slow queries. Design and rebuild Access databases that run reliably. 20+ years experience. Free consultation."
        url="https://excelaccessconsultant.com/access-consulting"
      />
      {children}
    </>
  );
}
