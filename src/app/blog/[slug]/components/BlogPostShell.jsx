'use client';

import Link from 'next/link';
import PageCTASection from '../../../../components/ui/PageCTASection/PageCTASection';
import { BLOG_CATEGORIES } from '../../../../constants/blogCategories';
import { CONSULTANTS } from '../../../../constants/site';
import { getBlogAccent } from '../../../../utils/contentAccents';
import { getBlogListingPosts } from '../listing';
import BlogPostSidebar from '../BlogPostSidebar';

const LISTING_BY_SLUG = Object.fromEntries(getBlogListingPosts().map((p) => [p.slug, p]));

const CATEGORY_SLUG_BY_POST = {};
for (const [categorySlug, config] of Object.entries(BLOG_CATEGORIES)) {
  for (const slug of config.postSlugs || []) {
    CATEGORY_SLUG_BY_POST[slug] = categorySlug;
  }
}

export default function BlogPostShell({ post, children }) {
  const listing = LISTING_BY_SLUG[post.slug];
  const categorySlug =
    post.categorySlug || listing?.categorySlug || CATEGORY_SLUG_BY_POST[post.slug] || null;
  const categoryLabel =
    (categorySlug && BLOG_CATEGORIES[categorySlug]?.title) || listing?.category || post.category;
  const accent = getBlogAccent(categoryLabel);

  return (
    <div className='page'>
      <section className='page-hero'>
        <div className='container'>
          {categorySlug ? (
            <Link
              href={`/blog/categories/${categorySlug}`}
              className={accent === 'primary' ? 'chip-primary' : 'chip-secondary'}
            >
              {categoryLabel}
            </Link>
          ) : (
            <span className={accent === 'primary' ? 'chip-primary' : 'chip-secondary'}>
              {categoryLabel}
            </span>
          )}
          <h1 className='page-hero__title page-hero__title--compact'>{post.title}</h1>
          <div className='content-meta'>
            <Link href='/about'>By {CONSULTANTS.displayName}</Link>
            <span aria-hidden='true'>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span aria-hidden='true'>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className='page-section page-section--white page-section--border'>
        <div className='container'>
          <div className='grid-sidebar'>
            <div className='grid-sidebar__main blog-content'>{children}</div>
            <div className='grid-sidebar__aside'>
              <BlogPostSidebar currentSlug={post.slug} accent={accent} />
            </div>
          </div>
        </div>
      </section>

      <PageCTASection
        heading='Need Help With Your Excel or Access Process?'
        subtext="Book a free consultation or request a fixed-price estimate. I'll review your situation and outline a clear path forward."
      />
    </div>
  );
}
