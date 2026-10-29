import { BRAND_LOGO_OG, SITE_URL } from '../../config/brand';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;
const TITLE = 'Excel VBA Consultant in Utah | Database Solutions Utah County';
const DESCRIPTION =
  'Excel VBA consultant based in Springville, Utah. Excel Solutions Serving Salt Lake City, Provo, Ogden, and all of Utah. 20+ years automating business processes. Free consultation.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${BASE}/excel-consultant-utah`,
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
  alternates: { canonical: `${BASE}/excel-consultant-utah` },
};

export default function ExcelConsultantUtahLayout({ children }) {
  return children;
}
