import { notFound } from 'next/navigation';
import BlogReadTracker from '../../../components/Analytics/BlogReadTracker';
import ArticleSchema from '../../../components/SEO/ArticleSchema';
import AuthorBio from './components/AuthorBio';
import BlogPostCTA from './components/BlogPostCTA';
import {
  ALL_SLUGS,
  getCanonicalBlogSlug,
  POST_META,
  resolveBlogSlug,
  SLUG_TO_COMPONENT,
} from './registry';

export async function generateStaticParams() {
  const params = [];
  for (const slug of ALL_SLUGS) {
    params.push({ slug });
    params.push({ slug: `${slug}.html` });
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resolved = resolveBlogSlug(slug);
  const meta = POST_META[resolved];
  if (!meta) return { title: 'Blog | ExcelAccessConsultant' };
  const canonical = getCanonicalBlogSlug(slug);
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

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const resolved = resolveBlogSlug(slug);
  const canonical = getCanonicalBlogSlug(slug);
  const loader = SLUG_TO_COMPONENT[resolved];
  if (!loader) notFound();
  const meta = POST_META[resolved];
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
      <BlogPostCTA slug={canonical} />
      <AuthorBio />
    </>
  );
}
