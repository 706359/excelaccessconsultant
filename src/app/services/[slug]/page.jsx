import { notFound } from 'next/navigation';
import { resolveServiceSlug, SERVICE_SLUGS } from '../../../constants/serviceRoutes';

const BASE = 'https://excelaccessconsultant.com';

import AccessConsulting from '../../access-consulting/page';
import AccessDatabaseRepair from '../../access-database-repair/page';
import DatabaseMigration from '../../database-migration/page';
import ExcelAutomation from '../../excel-automation/page';
import FinancialModeling from '../../financial-modeling/page';
import VbaDevelopment from '../../vba-development/page';

import AccessConsultingLayout from '../../access-consulting/layout';
import AccessDatabaseRepairLayout from '../../access-database-repair/layout';
import DatabaseMigrationLayout from '../../database-migration/layout';
import ExcelAutomationLayout from '../../excel-automation/layout';
import FinancialModelingLayout from '../../financial-modeling/layout';
import VbaDevelopmentLayout from '../../vba-development/layout';

import { metadata as accessConsultingMeta } from '../../access-consulting/layout';
import { metadata as accessDatabaseRepairMeta } from '../../access-database-repair/layout';
import { metadata as databaseMigrationMeta } from '../../database-migration/layout';
import { metadata as excelAutomationMeta } from '../../excel-automation/layout';
import { metadata as financialModelingMeta } from '../../financial-modeling/layout';
import { metadata as vbaDevelopmentMeta } from '../../vba-development/layout';

const SERVICE_ROUTES = {
  'excel-automation': {
    Page: ExcelAutomation,
    Layout: ExcelAutomationLayout,
    metadata: excelAutomationMeta,
  },
  'access-consulting': {
    Page: AccessConsulting,
    Layout: AccessConsultingLayout,
    metadata: accessConsultingMeta,
  },
  'access-database-repair': {
    Page: AccessDatabaseRepair,
    Layout: AccessDatabaseRepairLayout,
    metadata: accessDatabaseRepairMeta,
  },
  'financial-modeling': {
    Page: FinancialModeling,
    Layout: FinancialModelingLayout,
    metadata: financialModelingMeta,
  },
  'database-migration': {
    Page: DatabaseMigration,
    Layout: DatabaseMigrationLayout,
    metadata: databaseMigrationMeta,
  },
  'vba-development': {
    Page: VbaDevelopment,
    Layout: VbaDevelopmentLayout,
    metadata: vbaDevelopmentMeta,
  },
};

export function generateStaticParams() {
  return SERVICE_SLUGS.flatMap((slug) => [{ slug }, { slug: `${slug}.html` }]);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resolved = resolveServiceSlug(slug);
  const route = SERVICE_ROUTES[resolved];
  if (!route) return {};
  return {
    ...route.metadata,
    alternates: {
      ...route.metadata.alternates,
      canonical: `${BASE}/${resolved}`,
    },
  };
}

export default async function ServiceAliasPage({ params }) {
  const { slug } = await params;
  const resolved = resolveServiceSlug(slug);
  const route = SERVICE_ROUTES[resolved];
  if (!route) notFound();

  const { Page, Layout } = route;
  return (
    <Layout>
      <Page />
    </Layout>
  );
}
