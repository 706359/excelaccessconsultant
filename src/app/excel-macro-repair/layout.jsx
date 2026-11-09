import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export const metadata = {
  title: 'Fix Broken Excel Macros | Excel Macro Repair | EAC',
  description:
    'Fix broken Excel macro code: runtime errors, 64-bit updates, and macros that stopped after a file or Excel change. Book a free consultation.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${BASE}/excel-macro-repair`,
    title: 'Fix Broken Excel Macros | Excel Macro Repair | EAC',
    description:
      'Fix broken Excel macro code: runtime errors, 64-bit updates, and macros that stopped after a file or Excel change. Book a free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix Broken Excel Macros | Excel Macro Repair | EAC',
    description:
      'Fix broken Excel macro code: runtime errors, 64-bit updates, and macros that stopped after a file or Excel change. Book a free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/excel-macro-repair` },
};

export default function ExcelMacroRepairLayout({ children }) {
  return children;
}
