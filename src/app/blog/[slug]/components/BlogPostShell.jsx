'use client';

import Link from 'next/link';
import { CONSULTANTS } from '../../../../constants/site';
import BlogPostSidebar from '../BlogPostSidebar';

export default function BlogPostShell({ post, children }) {
  return (
    <div className='blog-page'>
      <article className='blog-article'>
        <div className='blog-article__inner'>
          <header className='blog-article__header'>
            <span className='blog-article__category'>{post.category}</span>
            <h1 className='blog-article__title'>{post.title}</h1>
            <div className='blog-article__meta'>
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
          </header>

          <div className='blog-article__layout'>
            <div className='blog-content'>{children}</div>
            <BlogPostSidebar currentSlug={post.slug} />
          </div>
        </div>
      </article>
    </div>
  );
}
