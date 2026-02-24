'use client';

import Link from 'next/link';
import { BLOG_SIDEBAR_CONFIG } from './blogSidebarConfig';
import { POST_META } from './registry';

export default function BlogPostSidebar({ currentSlug }) {
  const config = BLOG_SIDEBAR_CONFIG[currentSlug];
  if (!config) return null;

  const { relatedArticles, relatedServices } = config;

  return (
    <aside className='lg:sticky lg:top-24 h-fit space-y-6'>
      {/* Related Articles - 2 links only */}
      <div className='bg-white border border-slate-200 rounded-lg p-6 shadow-sm'>
        <h3 className='text-heading-sm font-bold mb-4 font-display text-slate-900'>
          Related Articles
        </h3>
        <ul className='space-y-3'>
          {relatedArticles.slice(0, 2).map((slug) => {
            const meta = POST_META[slug];
            const title = meta?.ogTitle || meta?.title?.split('|')[0]?.trim() || slug;
            return (
              <li key={slug}>
                <Link
                  href={`/blog/${slug}`}
                  className='text-body-base text-slate-700 hover:text-primary transition-colors duration-micro block leading-relaxed'
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Related Services - 2 links only */}
      <div className='bg-white border border-slate-200 rounded-lg p-6 shadow-sm'>
        <h3 className='text-heading-sm font-bold mb-4 font-display text-slate-900'>
          Related Services
        </h3>
        <ul className='space-y-3'>
          {relatedServices.slice(0, 2).map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className='text-body-base text-slate-700 hover:text-primary transition-colors duration-micro block leading-relaxed'
              >
                {label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Need Help? */}
      <div className='bg-primary/10 border-2 border-primary/20 rounded-lg p-6'>
        <h3 className='text-heading-sm font-bold mb-3 font-display text-slate-900'>
          Need Help?
        </h3>
        <p className='text-body-sm text-slate-700 mb-4'>
          Get a free consultation to discuss your project.
        </p>
        <div className='space-y-3'>
          <Link
            href='/contact'
            className='block w-full bg-primary hover:bg-primary-hover text-white hover:text-white px-4 py-3 text-sm font-medium transition-colors rounded-md text-center'
          >
            Free Consultation
          </Link>
          <a
            href='tel:8016163702'
            className='block w-full bg-white hover:bg-slate-50 text-primary border-2 border-primary px-4 py-3 text-sm font-medium transition-colors rounded-md text-center'
          >
            Call 801-616-3702
          </a>
        </div>
      </div>

      {/* View All Blog Posts */}
      <div className='bg-slate-50 border border-slate-200 rounded-lg p-6'>
        <Link
          href='/blog'
          className='text-body-base text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
        >
          ← View All Blog Posts
        </Link>
      </div>
    </aside>
  );
}
