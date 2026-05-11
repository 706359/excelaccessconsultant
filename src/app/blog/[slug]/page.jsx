import { notFound } from 'next/navigation';
import ArticleSchema from '../../../components/SEO/ArticleSchema';
import { POST_META, SLUG_TO_COMPONENT, ALL_SLUGS } from './registry';
import AuthorBio from './components/AuthorBio';

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const meta = POST_META[slug];
  if (!meta) return { title: 'Blog | ExcelAccessConsultant' };
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.description,
      url: `https://excelaccessconsultant.com/blog/${slug}`,
    },
    alternates: { canonical: `https://excelaccessconsultant.com/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const loader = SLUG_TO_COMPONENT[slug];
  if (!loader) notFound();
  const meta = POST_META[slug];
  const PostComponent = await loader();
  return (
    <>
      <ArticleSchema
        headline={meta.ogTitle || meta.title}
        description={meta.description}
        datePublished={meta.datePublished || '2025-01-01'}
        dateModified={meta.dateModified}
        url={`https://excelaccessconsultant.com/blog/${slug}`}
      />
      <PostComponent />
      <AuthorBio />
    </>
  );
}
