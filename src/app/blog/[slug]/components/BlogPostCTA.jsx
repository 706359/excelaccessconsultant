import ContactCTAs from '../../../../components/ui/ContactCTAs/ContactCTAs';

const ACCESS_SLUGS = new Set([
  'why-your-access-database-keeps-crashing',
  'access-vs-sql-server-when-to-migrate',
  'access-database-repair-guide',
  'is-microsoft-access-still-relevant-2026',
  'access-vs-power-apps-when-to-stay-on-access',
  'when-to-migrate-from-access',
  'access-vs-excel-when-to-use-each',
]);

export default function BlogPostCTA({ slug }) {
  const green = !ACCESS_SLUGS.has(slug);

  return (
    <section className='blog-post-cta blog-post-cta--below'>
      <div className='blog-post-cta__inner'>
        <h2 className='blog-post-cta__title'>Need Help With Your Excel or Access Process?</h2>
        <p className='blog-post-cta__text'>
          Book a free consultation or request a fixed-price estimate. I&apos;ll review your
          situation and outline a clear path forward.
        </p>
        <div className='blog-post-cta__actions'>
          <ContactCTAs green={green} />
        </div>
      </div>
    </section>
  );
}
