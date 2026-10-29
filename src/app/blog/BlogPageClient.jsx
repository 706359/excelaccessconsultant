'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import BlogPostGrid from '../../components/blog/BlogPostGrid';
import SEO from '../../components/SEO/SEO';
import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../../components/ui/ContactCTAs/ContactCTAs';
import FilterChipBar from '../../components/ui/FilterChipBar/FilterChipBar';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import ScrollReveal from '../../components/ui/ScrollReveal/ScrollReveal';
import { getBlogCategoryFilters } from '../../constants/blogFilters';

function resolveInitialFilter(categoryParam, filterOptions) {
  if (!categoryParam) return 'all';
  const match = filterOptions.find(
    (option) => option.id.toLowerCase() === categoryParam.toLowerCase(),
  );
  return match ? match.id : 'all';
}

export default function BlogPageClient({ initialPosts = [] }) {
  const searchParams = useSearchParams();
  const filterOptions = useMemo(() => getBlogCategoryFilters(), []);
  const [activeFilter, setActiveFilter] = useState(() =>
    resolveInitialFilter(searchParams.get('category'), filterOptions),
  );

  useEffect(() => {
    document.documentElement.classList.add('blog-hub-enhanced');
    return () => document.documentElement.classList.remove('blog-hub-enhanced');
  }, []);

  const filteredPosts = useMemo(() => {
    if (!activeFilter || activeFilter === 'all') return initialPosts;
    return initialPosts.filter(
      (post) => post.categorySlug === activeFilter || post.category === activeFilter,
    );
  }, [activeFilter, initialPosts]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    const nextUrl = filterId === 'all' ? '/blog' : `/blog?category=${encodeURIComponent(filterId)}`;
    window.history.replaceState(null, '', nextUrl);
  };

  return (
    <>
      <SEO
        title='Blog - Excel & Access Automation Tips & Guides'
        description='Excel VBA and Access database tips, tutorials, and guides. Practical tips from 20+ years of client work.'
        url='https://excelaccessconsultant.com/blog'
        ogTitle='Excel & Access Automation Blog'
      />

      <section className='page-hero page-hero--centered'>
        <div className='container'>
          <span className='chip-primary lead-magnet-hero__eyebrow'>Guides &amp; Tips</span>
          <h1 className='page-hero__title page-hero__title--compact'>
            Excel &amp; Access Automation Blog
          </h1>
          <p className='page-hero__lead'>
            Tips, tutorials, and guides to help you automate Excel work, fix Access databases, and
            improve productivity. Practical notes from 20+ years of client work.
          </p>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} center />
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--white page-section--border'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Latest Posts</h2>
            <p className='section-header__desc'>
              Filter by topic to find guides on Excel automation, Access databases, and database
              migration.
            </p>
          </div>

          <FilterChipBar
            label='Filter by topic'
            options={filterOptions}
            value={activeFilter}
            onChange={handleFilterChange}
          />

          <p className='filter-bar__results'>
            Showing {filteredPosts.length} of {initialPosts.length} posts
            {activeFilter !== 'all' ? ` in ${activeFilter}` : ''}
          </p>

          <BlogPostGrid posts={filteredPosts} />
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Need Help with Your Excel or Access Project?'
        subtext='Book a free consultation or request a fixed-price estimate. No pressure. Just an honest assessment of what will work for your data.'
      />
    </>
  );
}
