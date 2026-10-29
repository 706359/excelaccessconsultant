'use client';

import { POST_SHORT_TITLES } from '../../constants/relatedContent';
import { getBlogAccent } from '../../utils/contentAccents';
import StretchedCsItem from '../ui/StretchedCsItem/StretchedCsItem';

export default function BlogPostGrid({ posts, emptyMessage = 'No posts match this filter.' }) {
  if (!posts.length) {
    return <p className='text-muted filter-bar__empty'>{emptyMessage}</p>;
  }

  return (
    <div className='cs-grid'>
      {posts.map((post) => {
        const accent = getBlogAccent(post.category);
        const shortTitle = POST_SHORT_TITLES[post.slug] || post.title;

        return (
          <StretchedCsItem
            key={post.id ?? post.slug}
            href={`/blog/${post.slug}`}
            accent={accent}
            num={String(post.id ?? '').padStart(2, '0') || undefined}
            industry={post.category}
            title={shortTitle}
            outcome={post.excerpt}
          >
            <p className='text-muted-sm'>
              {post.date
                ? `${new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })} · `
                : ''}
              {post.readTime || ''}
            </p>
          </StretchedCsItem>
        );
      })}
    </div>
  );
}
