'use client';

import Link from 'next/link';
import PageCTASection from '../../../../components/ui/PageCTASection/PageCTASection';
import { CONSULTANTS } from '../../../../constants/site';
import { getBlogAccent } from '../../../../utils/contentAccents';
import BlogPostSidebar from '../BlogPostSidebar';

export default function BlogPostShell({ post, children }) {
  const accent = getBlogAccent(post.category);

  return (
    <div className='page'>
      <section className='page-hero'>
        <div className='container'>
          <span className={accent === 'primary' ? 'chip-primary' : 'chip-secondary'}>
            {post.category}
          </span>
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
