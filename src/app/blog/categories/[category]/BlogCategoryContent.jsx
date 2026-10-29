'use client';

import Link from 'next/link';
import SEO from '../../../../components/SEO/SEO';
import BlogPostGrid from '../../../../components/blog/BlogPostGrid';
import ContactCTAs, {
  CTA_BUTTON_VARIANTS,
} from '../../../../components/ui/ContactCTAs/ContactCTAs';
import PageCTASection from '../../../../components/ui/PageCTASection/PageCTASection';
import ScrollReveal from '../../../../components/ui/ScrollReveal/ScrollReveal';

export default function BlogCategoryContent({ config, posts, resolved }) {
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
            All articles
          </Link>
          <span className='chip-primary lead-magnet-hero__eyebrow'>{config.title}</span>
          <h1 className='page-hero__title page-hero__title--compact'>{config.title}</h1>
          <p className='page-hero__lead'>
            Guides in this category support{' '}
            <Link href={config.pillarHref} className='text-link text-link--underline'>
              {config.pillarLabel}
            </Link>
            . Browse the articles below for practical next steps.
          </p>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} center />
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--white page-section--border'>
        <div className='container'>
          <p className='filter-bar__results'>
            {posts.length} article{posts.length === 1 ? '' : 's'} in {config.title}
          </p>
          <BlogPostGrid posts={posts} />
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Need Help with Your Excel or Access Project?'
        subtext='Book a free consultation or request a fixed-price estimate. No pressure. Just an honest assessment of what will work for your data.'
      />
    </div>
  );
}
