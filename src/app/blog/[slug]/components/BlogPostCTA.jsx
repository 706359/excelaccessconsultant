import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../../../../components/ui/ContactCTAs/ContactCTAs';

export default function BlogPostCTA() {
  return (
    <section className='blog-post-cta blog-post-cta--below'>
      <div className='blog-post-cta__inner'>
        <h2 className='blog-post-cta__title'>Need Help With Your Excel or Access Process?</h2>
        <p className='blog-post-cta__text'>
          Book a free consultation or request a fixed-price estimate. I&apos;ll review your
          situation and outline a clear path forward.
        </p>
        <div className='blog-post-cta__actions'>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} />
        </div>
      </div>
    </section>
  );
}
