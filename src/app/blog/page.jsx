import Link from 'next/link';
import { Suspense } from 'react';
import { ALL_BLOG_CATEGORY_SLUGS, BLOG_CATEGORIES } from '../../constants/blogCategories';
import { getBlogListingPosts } from './[slug]/listing';
import BlogPageClient from './BlogPageClient';

export default function BlogPage() {
  const posts = getBlogListingPosts();

  return (
    <div className='page'>
      {/* Always in HTML for crawlers / no-JS (outside useSearchParams Suspense) */}
      <section className='blog-ssr-hub' data-blog-ssr='true'>
        <div className='container'>
          <h2 className='sr-only'>All blog posts</h2>
          <nav className='blog-ssr-hub__categories' aria-label='Blog categories'>
            {ALL_BLOG_CATEGORY_SLUGS.map((slug) => (
              <Link
                key={slug}
                href={`/blog/categories/${slug}`}
                className='text-link text-link--underline'
              >
                {BLOG_CATEGORIES[slug].title}
              </Link>
            ))}
          </nav>
          <ul className='blog-ssr-hub__posts'>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Suspense fallback={null}>
        <BlogPageClient initialPosts={posts} />
      </Suspense>
    </div>
  );
}
