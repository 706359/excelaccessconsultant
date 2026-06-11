import { SITE_URL } from '../config/brand';

export const SERVICE_SLUGS = [
  'excel-automation',
  'access-consulting',
  'access-database-repair',
  'financial-modeling',
  'database-migration',
  'vba-development',
];

export const SERVICE_CANONICAL = Object.fromEntries(
  SERVICE_SLUGS.map((slug) => [slug, `${SITE_URL}/${slug}`]),
);

export function resolveServiceSlug(slug) {
  return slug.replace(/\.html$/i, '');
}
