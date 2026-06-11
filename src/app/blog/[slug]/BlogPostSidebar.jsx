'use client';

import ArticleSidebar from '../../../components/ui/ArticleSidebar/ArticleSidebar';
import { BLOG_SIDEBAR_CONFIG } from './blogSidebarConfig';
import { POST_META } from './registry';

export default function BlogPostSidebar({ currentSlug, accent = 'primary' }) {
  const config = BLOG_SIDEBAR_CONFIG[currentSlug];
  if (!config) return null;

  const { relatedArticles, relatedServices } = config;

  const sections = [
    {
      title: 'Related Articles',
      links: relatedArticles.slice(0, 3).map((slug) => {
        const meta = POST_META[slug];
        const title = meta?.ogTitle || meta?.title?.split('|')[0]?.trim() || slug;
        return {
          href: `/blog/${slug}`,
          title,
        };
      }),
    },
    {
      title: 'Related Services',
      links: relatedServices.slice(0, 3).map(({ href, label }) => ({
        href,
        title: label,
      })),
    },
  ];

  return (
    <ArticleSidebar
      accent={accent}
      sections={sections}
      backLink={{ href: '/blog', label: '← View All Blog Posts' }}
    />
  );
}
