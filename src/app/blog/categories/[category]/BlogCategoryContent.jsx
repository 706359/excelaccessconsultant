'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import SEO from '../../../../components/SEO/SEO';
import BlogPostGrid from '../../../../components/blog/BlogPostGrid';
import ContactCTAs, {
  CTA_BUTTON_VARIANTS,
} from '../../../../components/ui/ContactCTAs/ContactCTAs';
import FilterChipBar from '../../../../components/ui/FilterChipBar/FilterChipBar';
import PageCTASection from '../../../../components/ui/PageCTASection/PageCTASection';
import ScrollReveal from '../../../../components/ui/ScrollReveal/ScrollReveal';
import { getBlogAccent } from '../../../../utils/contentAccents';

function getCategoryFilters(posts) {
  const counts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(counts).sort();

  return [
    { id: 'all', label: 'All in Topic', count: posts.length, accent: 'primary' },
    ...categories.map((category) => ({
      id: category,
      label: category,
      count: counts[category],
      accent: getBlogAccent(category),
    })),
  ];
}

export default function BlogCategoryContent({ config, posts, resolved }) {
  const filterOptions = useMemo(() => getCategoryFilters(posts), [posts]);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'all') return posts;
    return posts.filter((post) => post.category === activeFilter);
  }, [activeFilter, posts]);

  return (
    <div className='page'>
      <SEO
        title={config.metaTitle}
        description={config.metaDescription}
        url={`https://excelaccessconsultant.com/blog/categories/${resolved}`}
        ogTitle={config.title}
      />

      <section className='page-hero page-hero--centered'>
        <div className='container'>
          <Link href='/blog' className='text-link text-link--underline'>
            ← All Blog Posts
          </Link>
          <span className='chip-primary lead-magnet-hero__eyebrow'>{config.title}</span>
          <h1 className='page-hero__title page-hero__title--compact'>{config.title}</h1>
          <p className='page-hero__lead'>{config.metaDescription}</p>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} center />
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--white page-section--border'>
        <div className='container'>
          {filterOptions.length > 2 && (
            <>
              <FilterChipBar
                label='Filter by category'
                options={filterOptions}
                value={activeFilter}
                onChange={setActiveFilter}
              />
              <p className='filter-bar__results'>
                Showing {filteredPosts.length} of {posts.length} posts
                {activeFilter !== 'all' ? ` in ${activeFilter}` : ''}
              </p>
            </>
          )}

          <BlogPostGrid posts={filteredPosts} />
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Need Help with Your Excel or Access Project?'
        subtext='Book a free consultation or request a fixed-price estimate. No pressure. Just an honest assessment of what will work for your data.'
      />
    </div>
  );
}
