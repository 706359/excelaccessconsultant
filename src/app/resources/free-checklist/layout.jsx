import { SITE_URL } from '../../../config/brand';
import { metadata as freeChecklistMetadata } from '../../free-checklist/layout';

export const metadata = {
  ...freeChecklistMetadata,
  openGraph: {
    ...freeChecklistMetadata.openGraph,
    url: `${SITE_URL}/free-resources`,
  },
  alternates: { canonical: `${SITE_URL}/free-resources` },
};

export default function ResourcesFreeChecklistLayout({ children }) {
  return children;
}
