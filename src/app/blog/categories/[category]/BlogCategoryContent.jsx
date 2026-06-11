'use client';

import Link from 'next/link';
import SEO from '../../../../components/SEO/SEO';
import PageCTASection from '../../../../components/ui/PageCTASection/PageCTASection';

export default function BlogCategoryContent({ config, posts, resolved }) {
  return (
    <div className='blog-index'>
      <SEO
        title={config.metaTitle}
        description={config.metaDescription}
        url={`https://excelaccessconsultant.com/blog/categories/${resolved}`}
        ogTitle={config.title}
      />

      <section className='blog-index__hero'>
        <div className='blog-index__hero-inner'>
          <Link href='/blog' className='blog-index__back'>
            ← All Blog Posts
          </Link>
          <h1 className='blog-index__title'>{config.title}</h1>
          <p className='blog-index__intro'>{config.metaDescription}</p>
        </div>
      </section>

      <section className='blog-index__list-section'>
        <div className='blog-index__list-inner'>
          <div className='blog-card-grid'>
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className='blog-card'>
                <div className='blog-card__body'>
                  <span className='blog-card__category'>{post.category}</span>
                  <h2 className='blog-card__title'>{post.title}</h2>
                  <p className='blog-card__excerpt'>{post.excerpt}</p>
                  <div className='blog-card__meta'>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTASection
        heading='Need Help with Your Excel or Access Project?'
        subtext='Book a free consultation or request a fixed-price estimate. No pressure. Just an honest assessment of what will work for your data.'
        phoneLocation={`blog-category-${resolved}`}
      />
    </div>
  );
}
