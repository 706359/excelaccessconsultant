'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import { BLOG_POSTS } from '../../constants/blogPosts';

export default function BlogPage() {
  return (
    <div className='blog-index'>
      <SEO
        title='Blog - Excel & Access Automation Tips & Guides'
        description='Excel VBA and Access database tips, tutorials, and guides. Practical tips from 20+ years of client work.'
        url='https://excelaccessconsultant.com/blog'
        ogTitle='Excel & Access Automation Blog'
      />

      <section className='blog-index__hero'>
        <div className='blog-index__hero-inner'>
          <h1 className='blog-index__title'>Excel & Access Automation Blog</h1>
          <p className='blog-index__intro'>
            Tips, tutorials, and guides to help you automate Excel work, fix Access databases, and
            improve productivity. Practical notes from 20+ years of client work.
          </p>
        </div>
      </section>

      <section className='blog-index__list-section'>
        <div className='blog-index__list-inner'>
          <div className='blog-card-grid'>
            {BLOG_POSTS.map((post) => (
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
          <div className='blog-index__coming-soon'>
            <div className='blog-index__coming-soon-card'>
              <h3 className='blog-index__coming-soon-title'>More Posts Coming Soon</h3>
              <p className='blog-index__coming-soon-text'>
                New blog posts published weekly. Subscribe to get notified when new content is
                available.
              </p>
              <Button variant='primary' size='medium' as={Link} href='/contact'>
                Get Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PageCTASection
        heading='Need Help with Your Excel or Access Project?'
        subtext='Book a free consultation or request a fixed-price estimate. No pressure. Just an honest assessment of what will work for your data.'
        phoneLocation='blog-index'
      />
    </div>
  );
}
