import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function Blog() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: '10 Signs You Need Excel Automation',
      slug: '10-signs-you-need-excel-automation',
      excerpt:
        'Is your team spending too much time on manual Excel work? Here are 10 clear signs that automation could save you hours every week.',
      date: '2024-01-15',
      category: 'Excel Automation',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Why Your Access Database Keeps Crashing (And How to Fix It)',
      slug: 'why-your-access-database-keeps-crashing',
      excerpt:
        'Access database crashes are frustrating and costly. Learn the common causes of Access database crashes and how to fix them permanently.',
      date: '2024-02-20',
      category: 'Access Database',
      readTime: '10 min read',
    },
    {
      id: 3,
      title: 'Excel Automation Cost: What to Expect in 2025',
      slug: 'excel-automation-cost-what-to-expect',
      excerpt:
        'Wondering how much Excel automation costs? Get realistic pricing expectations for 2025 and understand what factors affect the cost.',
      date: '2024-04-10',
      category: 'Excel Automation',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'How to Speed Up Slow Excel Spreadsheets',
      slug: 'how-to-speed-up-slow-excel-spreadsheets',
      excerpt:
        'Is your Excel file taking forever to open or calculate? Learn proven techniques to speed up slow spreadsheets and improve performance.',
      date: '2024-05-22',
      category: 'Excel Tips',
      readTime: '9 min read',
    },
    {
      id: 5,
      title: 'Access vs SQL Server: When to Migrate Your Database',
      slug: 'access-vs-sql-server-when-to-migrate',
      excerpt:
        'Should you migrate from Access to SQL Server? Learn when Access is sufficient and when SQL Server migration makes sense for your business.',
      date: '2024-06-18',
      category: 'Database Migration',
      readTime: '11 min read',
    },
    {
      id: 6,
      title: 'Common Excel VBA Mistakes (And How to Fix Them)',
      slug: 'common-excel-vba-mistakes-and-how-to-fix-them',
      excerpt:
        'Avoid these 10 common Excel VBA mistakes that cause errors, slow performance, and code that breaks. Learn how to fix them with expert tips.',
      date: '2024-08-05',
      category: 'VBA Development',
      readTime: '10 min read',
    },
    {
      id: 7,
      title: 'Financial Modeling Best Practices: Build Accurate, Reliable Models',
      slug: 'financial-modeling-best-practices',
      excerpt:
        'Learn financial modeling best practices to build accurate, reliable Excel financial models. Expert tips from 15+ years of finance consulting.',
      date: '2024-09-12',
      category: 'Financial Modeling',
      readTime: '12 min read',
    },
    {
      id: 8,
      title: 'Excel Reporting Automation: Complete Guide',
      slug: 'excel-reporting-automation-complete-guide',
      excerpt:
        'Complete guide to automating Excel reports. Learn how to automate monthly reports, consolidate data, and generate dashboards automatically.',
      date: '2024-11-08',
      category: 'Excel Automation',
      readTime: '13 min read',
    },
  ];

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title='Blog - Excel & Access Automation Tips & Guides'
        description='Excel and Access automation tips, tutorials, and guides. Learn how to automate Excel work, fix Access databases, and improve productivity. Expert advice from 20+ years of experience.'
        keywords='excel automation tips, access database tips, excel tutorials, vba guides, excel automation blog, access database blog'
        url='https://excelaccessconsultant.com/blog'
        ogTitle='Excel & Access Automation Blog'
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Excel & Access Automation Blog
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed'>
            Tips, tutorials, and guides to help you automate Excel work, fix Access databases, and
            improve productivity. Expert advice from 20+ years of experience.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className='bg-white rounded-lg border border-slate-200 shadow-sm transition-shadow duration-200 overflow-hidden'
              >
                <div className='p-6'>
                  <div className='mb-3'>
                    <span className='inline-block px-3 py-1 bg-excel/10 text-excel text-xs font-semibold rounded'>
                      {post.category}
                    </span>
                  </div>
                  <h2 className='text-heading-lg font-bold mb-3 font-display text-slate-900 line-clamp-2'>
                    {post.title}
                  </h2>
                  <p className='text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between text-xs text-slate-500 mb-4'>
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className='text-excel hover:text-excel-hover font-semibold text-sm inline-flex items-center gap-2'
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className='mt-8 text-center'>
            <div className='bg-white p-8 rounded-lg border border-slate-200 max-w-7xl mx-auto'>
              <h3 className='text-2xl font-bold mb-4 font-display text-slate-900'>
                More Posts Coming Soon
              </h3>
              <p className='text-slate-600 mb-6'>
                New blog posts published weekly. Subscribe to get notified when new content is
                available.
              </p>
              <Link
                to='/contact'
                className='bg-excel hover:bg-excel-hover text-white px-6 py-3 text-sm font-medium transition-colors rounded-md inline-block'
              >
                Get Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-8 md:py-12 bg-slate-100 text-slate-900 relative overflow-hidden'>
        <div className='relative z-10'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
              Need Help with Your Excel or Access Project?
            </h2>
            <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
              Get a free consultation to discuss your automation needs. No obligation, just honest
              advice.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Link
                to='/contact'
                className='bg-primary hover:bg-primary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md'
              >
                Schedule Free Consultation
              </Link>
              <a
                href='tel:8016163702'
                className='bg-white hover:bg-slate-100 text-primary border-2 border-primary px-8 py-4 text-base font-medium transition-colors rounded-md'
              >
                Call 801-616-3702
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
