import { SITE_URL } from '../../../config/brand';
import { metadata as faqMetadata } from '../../faq/layout';

export const metadata = {
  ...faqMetadata,
  alternates: { canonical: `${SITE_URL}/resources/faq` },
};

export default function ResourcesFaqLayout({ children }) {
  return children;
}
