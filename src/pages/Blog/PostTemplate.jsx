import { Link } from 'react-router-dom';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function PostTemplate({ post }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Related blog posts - can be customized per post or use defaults
  const relatedPosts = post.relatedPosts || [
    {
      title: 'Excel Automation Cost: What to Expect in 2026',
      slug: 'excel-automation-cost-what-to-expect',
    },
    {
      title: 'How to Speed Up Slow Excel Spreadsheets',
      slug: 'how-to-speed-up-slow-excel-spreadsheets',
    },
    {
      title: 'Common Excel VBA Mistakes (And How to Fix Them)',
      slug: 'common-excel-vba-mistakes-and-how-to-fix-them',
    },
  ];

  // Related services based on category
  const getRelatedServices = () => {
    const category = post.category?.toLowerCase() || '';
    if (category.includes('excel') || category.includes('automation')) {
      return [
        { title: 'Excel Automation', link: '/excel-automation' },
        { title: 'VBA Development', link: '/vba-development' },
      ];
    } else if (category.includes('access') || category.includes('database')) {
      return [
        { title: 'Access Consulting', link: '/access-consulting' },
        { title: 'Database Migration', link: '/database-migration' },
      ];
    } else if (category.includes('financial')) {
      return [
        { title: 'Financial Modeling', link: '/financial-modeling' },
        { title: 'Excel Automation', link: '/excel-automation' },
      ];
    }
    return [
      { title: 'Excel Automation', link: '/excel-automation' },
      { title: 'Access Consulting', link: '/access-consulting' },
    ];
  };

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        keywords={post.keywords}
        url={`https://excelaccessconsultant.com/blog/${post.slug}`}
        ogTitle={post.ogTitle}
      />

      {post.faqs && <FAQSchema faqs={post.faqs} />}

      {/* Article Header */}
      <article className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Header Section - Full Width */}
          <div className='max-w-7xl mx-auto px-6 mb-8'>
            <div className='mb-4'>
              <span className='inline-block px-3 py-1 bg-excel/10 text-excel text-sm font-semibold rounded'>
                {post.category}
              </span>
            </div>
            <h1 className='text-display-lg md:text-display-xl lg:text-display-2xl font-extrabold mb-6 font-display text-slate-900'>
              {post.title}
            </h1>
            <div className='flex items-center gap-4 text-slate-600 text-sm'>
              <span>By Robert Terry</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Two Column Layout: Content + Sidebar */}
          <div className='grid lg:grid-cols-[1fr_320px] gap-6 lg:gap-8'>
            {/* Main Article Content */}
            <div className='max-w-none'>
              <div className='prose prose-lg max-w-none text-slate-700 leading-relaxed'>
                {post.content}
              </div>

              {/* CTA Section */}
              <div className='mt-8 bg-slate-100 p-8 rounded-lg border border-slate-200'>
                <h3 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Ready to Automate Your Excel Work?
                </h3>
                <p className='text-slate-700 mb-6'>
                  If you recognized any of these signs, automation could save you hours every week.
                  Get a free consultation to see how.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link
                    to='/contact'
                    className='bg-excel hover:bg-excel-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
                  >
                    Schedule Free Consultation
                  </Link>
                  <a
                    href='tel:8016163702'
                    className='bg-white hover:bg-slate-50 text-excel border-2 border-excel px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
                  >
                    Call 801-616-3702
                  </a>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Quick Links */}
            <aside className='lg:sticky lg:top-24 h-fit space-y-6'>
              {/* Quick Links - Related Posts */}
              <div className='bg-white border border-slate-200 rounded-lg p-6 shadow-sm'>
                <h3 className='text-heading-sm font-bold mb-4 font-display text-slate-900'>
                  Related Articles
                </h3>
                <ul className='space-y-3'>
                  {relatedPosts.map((relatedPost, index) => (
                    <li key={index}>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className='text-body-base text-slate-700 hover:text-primary transition-colors duration-micro block leading-relaxed'
                      >
                        {relatedPost.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Services */}
              <div className='bg-white border border-slate-200 rounded-lg p-6 shadow-sm'>
                <h3 className='text-heading-sm font-bold mb-4 font-display text-slate-900'>
                  Related Services
                </h3>
                <ul className='space-y-3'>
                  {getRelatedServices().map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.link}
                        className='text-body-base text-slate-700 hover:text-primary transition-colors duration-micro block leading-relaxed'
                      >
                        {service.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact CTA */}
              <div className='bg-primary/10 border-2 border-primary/20 rounded-lg p-6'>
                <h3 className='text-heading-sm font-bold mb-3 font-display text-slate-900'>
                  Need Help?
                </h3>
                <p className='text-body-sm text-slate-700 mb-4'>
                  Get a free consultation to discuss your project.
                </p>
                <div className='space-y-3'>
                  <Link
                    to='/contact'
                    className='block w-full bg-primary hover:bg-primary-hover text-white px-4 py-3 text-sm font-medium transition-colors rounded-md text-center'
                  >
                    Free Consultation
                  </Link>
                  <a
                    href='tel:8016163702'
                    className='block w-full bg-white hover:bg-slate-50 text-primary border-2 border-primary px-4 py-3 text-sm font-medium transition-colors rounded-md text-center'
                  >
                    Call 801-616-3702
                  </a>
                </div>
              </div>

              {/* All Blog Posts Link */}
              <div className='bg-slate-50 border border-slate-200 rounded-lg p-6'>
                <Link
                  to='/blog'
                  className='text-body-base text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
                >
                  ← View All Blog Posts
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostTemplate;
