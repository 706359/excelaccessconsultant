import { notFound } from 'next/navigation';
import { BRAND_LOGO_OG, SITE_URL } from '../../../../config/brand';
import {
  ALL_BLOG_CATEGORY_SLUGS,
  BLOG_CATEGORIES,
  resolveBlogCategorySlug,
} from '../../../../constants/blogCategories';
import { BLOG_POSTS } from '../../../../constants/blogPosts';
import BlogCategoryContent from './BlogCategoryContent';

export function generateStaticParams() {
  return ALL_BLOG_CATEGORY_SLUGS.flatMap((category) => [
    { category },
    { category: `${category}.html` },
  ]);
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const resolved = resolveBlogCategorySlug(category);
  const config = BLOG_CATEGORIES[resolved];
  if (!config) return { title: 'Blog | ExcelAccessConsultant' };

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `${SITE_URL}/blog/categories/${resolved}`,
      images: [BRAND_LOGO_OG],
      siteName: 'ExcelAccessConsultant',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.metaTitle,
      description: config.metaDescription,
      images: [BRAND_LOGO_OG.url],
    },
    alternates: { canonical: `${SITE_URL}/blog/categories/${resolved}` },
  };
}

export default async function BlogCategoryPage({ params }) {
  const { category } = await params;
  const resolved = resolveBlogCategorySlug(category);
  const config = BLOG_CATEGORIES[resolved];
  if (!config) notFound();

  const posts = BLOG_POSTS.filter((post) => config.matchCategories.includes(post.category));

  return <BlogCategoryContent config={config} posts={posts} resolved={resolved} />;
}
