'use client';

import Link from 'next/link';
import { getBlogAccent } from '../../utils/contentAccents';

const ItemArrow = () => (
  <svg
    className='cs-item__arrow'
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M9 5l7 7-7 7' />
  </svg>
);

export default function BlogPostGrid({ posts, emptyMessage = 'No posts match this filter.' }) {
  if (!posts.length) {
    return <p className='text-muted filter-bar__empty'>{emptyMessage}</p>;
  }

  return (
    <div className='cs-grid'>
      {posts.map((post) => {
        const accent = getBlogAccent(post.category);

        return (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className={`cs-item cs-item--${accent}`}
          >
            <span className='cs-item__num'>{String(post.id).padStart(2, '0')}</span>
            <div className='cs-item__body'>
              <span className='cs-item__industry'>{post.category}</span>
              <h3 className='cs-item__title'>{post.title}</h3>
              <p className='cs-item__outcome'>{post.excerpt}</p>
              <p className='text-muted-sm'>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                · {post.readTime}
              </p>
            </div>
            <ItemArrow />
          </Link>
        );
      })}
    </div>
  );
}
