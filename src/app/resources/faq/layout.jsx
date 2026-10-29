import { SITE_URL } from '../../../config/brand';
import { metadata as faqMetadata } from '../../faq/layout';

export const metadata = {
  ...faqMetadata,
  openGraph: {
    ...faqMetadata.openGraph,
    url: `${SITE_URL}/faq`,
  },
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function ResourcesFaqLayout({ children }) {
  return children;
}
