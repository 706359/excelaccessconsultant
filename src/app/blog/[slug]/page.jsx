import { notFound } from 'next/navigation';
import { POST_META, SLUG_TO_COMPONENT, ALL_SLUGS } from './registry';

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const meta = POST_META[params.slug];
  if (!meta) return { title: 'Blog | ExcelAccessConsultant' };
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.description,
      url: `https://excelaccessconsultant.com/blog/${params.slug}`,
    },
    alternates: { canonical: `https://excelaccessconsultant.com/blog/${params.slug}` },
  };
}

export default async function BlogPostPage({ params }) {
  const loader = SLUG_TO_COMPONENT[params.slug];
  if (!loader) notFound();
  const PostComponent = await loader();
  return <PostComponent />;
}
