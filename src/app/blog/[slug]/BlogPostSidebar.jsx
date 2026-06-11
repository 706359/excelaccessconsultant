'use client';

import Link from 'next/link';
import { BLOG_SIDEBAR_CONFIG } from './blogSidebarConfig';
import { POST_META } from './registry';

export default function BlogPostSidebar({ currentSlug }) {
  const config = BLOG_SIDEBAR_CONFIG[currentSlug];
  if (!config) return null;

  const { relatedArticles, relatedServices } = config;

  return (
    <aside className='blog-sidebar'>
      <div className='blog-sidebar__panel'>
        <h3 className='blog-sidebar__title'>Related Articles</h3>
        <ul className='blog-sidebar__list'>
          {relatedArticles.slice(0, 2).map((slug) => {
            const meta = POST_META[slug];
            const title = meta?.ogTitle || meta?.title?.split('|')[0]?.trim() || slug;
            return (
              <li key={slug}>
                <Link href={`/blog/${slug}`} className='blog-sidebar__link'>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='blog-sidebar__panel'>
        <h3 className='blog-sidebar__title'>Related Services</h3>
        <ul className='blog-sidebar__list'>
          {relatedServices.slice(0, 2).map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className='blog-sidebar__link'>
                {label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='blog-sidebar__cta'>
        <h3 className='blog-sidebar__title'>Need Help?</h3>
        <p className='blog-sidebar__cta-text'>Get a free consultation to discuss your project.</p>
        <Link href='/contact' className='blog-sidebar__cta-button'>
          Free Consultation
        </Link>
      </div>

      <div className='blog-sidebar__back'>
        <Link href='/blog' className='blog-sidebar__back-link'>
          ← View All Blog Posts
        </Link>
      </div>
    </aside>
  );
}
