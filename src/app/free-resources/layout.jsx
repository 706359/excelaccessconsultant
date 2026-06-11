import { SITE_URL } from '../../config/brand';
import { metadata as freeChecklistMetadata } from '../free-checklist/layout';

export const metadata = {
  ...freeChecklistMetadata,
  title: 'Free Excel & Access Resources | ExcelAccessConsultant',
  description:
    'Free Excel automation checklists, Access database health checks, and VBA best practices guides. Download instantly.',
  openGraph: {
    ...freeChecklistMetadata.openGraph,
    url: `${SITE_URL}/free-resources`,
    title: 'Free Excel & Access Resources',
  },
  alternates: { canonical: `${SITE_URL}/free-resources` },
};

export default function FreeResourcesLayout({ children }) {
  return children;
}
