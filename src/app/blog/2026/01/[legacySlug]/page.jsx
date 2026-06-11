import { notFound } from 'next/navigation';
import BlogReadTracker from '../../../../../components/Analytics/BlogReadTracker';
import ArticleSchema from '../../../../../components/SEO/ArticleSchema';
import AuthorBio from '../../../[slug]/components/AuthorBio';
import {
  LEGACY_DATED_BLOG_SLUGS,
  POST_META,
  SLUG_TO_COMPONENT,
  resolveBlogSlug,
} from '../../../[slug]/registry';

function resolveLegacyDatedSlug(legacySlug) {
  const clean = legacySlug.replace(/\.html$/i, '');
  return LEGACY_DATED_BLOG_SLUGS[clean] || resolveBlogSlug(clean);
}

export function generateStaticParams() {
  return Object.keys(LEGACY_DATED_BLOG_SLUGS).flatMap((legacySlug) => [
    { legacySlug },
    { legacySlug: `${legacySlug}.html` },
  ]);
}

export async function generateMetadata({ params }) {
  const { legacySlug } = await params;
  const canonical = resolveLegacyDatedSlug(legacySlug);
  const meta = POST_META[canonical];
  if (!meta) return { title: 'Blog | ExcelAccessConsultant' };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.description,
      url: `https://excelaccessconsultant.com/blog/${canonical}`,
    },
    alternates: { canonical: `https://excelaccessconsultant.com/blog/${canonical}` },
  };
}

export default async function LegacyDatedBlogPage({ params }) {
  const { legacySlug } = await params;
  const canonical = resolveLegacyDatedSlug(legacySlug);
  const loader = SLUG_TO_COMPONENT[canonical];
  if (!loader) notFound();

  const meta = POST_META[canonical];
  const PostComponent = await loader();

  return (
    <>
      <ArticleSchema
        headline={meta.ogTitle || meta.title}
        description={meta.description}
        datePublished={meta.datePublished || '2025-01-01'}
        dateModified={meta.dateModified}
        url={`https://excelaccessconsultant.com/blog/${canonical}`}
      />
      <BlogReadTracker slug={canonical} />
      <PostComponent />
      <AuthorBio />
    </>
  );
}
