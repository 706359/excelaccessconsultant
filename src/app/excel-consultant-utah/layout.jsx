import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';
import { CONSULTANTS } from '../../constants/site';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;
const TITLE = `Excel VBA Consultant in Utah | ${CONSULTANTS.displayName}`;

export const metadata = {
  title: TITLE,
  description:
    'Excel VBA consultants based in Springville, Utah. Serving Salt Lake City, Provo, Ogden, and all of Utah. 20+ years automating business processes. Free consultation.',
  openGraph: {
    type: 'website',
    url: `${BASE}/excel-consultant-utah`,
    title: TITLE,
    description:
      'Excel VBA consultants based in Springville, Utah. Serving Salt Lake City, Provo, Ogden, and all of Utah. 20+ years automating business processes. Free consultation.',
    images: [OG_IMAGE],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Excel VBA consultants based in Springville, Utah. 20+ years experience. Free consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  alternates: { canonical: `${BASE}/excel-consultant-utah` },
};

export default function ExcelConsultantUtahLayout({ children }) {
  return children;
}
