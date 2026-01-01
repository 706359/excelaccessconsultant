import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function About() {

  return (
    <div className='bg-base min-h-screen text-slate-900 font-sans selection:bg-excel selection:text-white'>
      <SEO
        title='Operational Stability & Data Governance | ExcelAccessConsultant'
        description='We replace fragile spreadsheets with robust, audit-ready systems. Senior-level consulting for US finance and operations teams.'
        keywords='operational stability, data governance, Excel consulting, Access consulting, audit-ready systems, business continuity, risk mitigation'
      />

      {/* Navigation */}
      <nav className='flex justify-between items-center px-6 md:px-8 py-6 border-b border-slate-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm'>
        <Link
          to='/'
          className='flex items-center'
        >
          <img
            src='/logo.png'
            alt='ExcelAccessConsultant - Expert Excel and Access Consulting Services'
            className='h-12 w-auto'
          />
        </Link>
        <div className='hidden md:flex items-center gap-8'>
          <Link
            to='/'
            className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
          >
            Home
          </Link>
          <Link to='/about' className='text-slate-900 text-sm font-medium'>
            About
          </Link>
          <a
            href='/#services'
            className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
          >
            Services
          </a>
          <a
            href='/#faq'
            className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
          >
            FAQ
          </a>
          <a href='/#contact' className='btn-primary'>
            Schedule a Free Consultation
          </a>
        </div>
        <button className='md:hidden text-slate-700'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>

      <main>
        {/* Header Section */}
        <section className='relative max-w-5xl mx-auto px-6 py-24 text-center'>
          <div className='absolute inset-0 -z-10 bg-excel/5 rounded-full blur-3xl'></div>

          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 font-display'>
            A Specialist for Complex Enterprises.
          </h1>
          <p className='text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Direct access to 17+ years of enterprise-level Excel and Access expertise.
          </p>
        </section>

        {/* About Robert Terry */}
        <section className='py-24'>
          <div className='max-w-4xl mx-auto px-6'>
            <div className='space-y-8 text-lg text-slate-700 leading-relaxed'>
              <p>
                I'm Robert Terry. For over 17 years, I've worked at the intersection of
                business logic and Microsoft technology.
              </p>
              <p>
                My approach is straightforward: I find the friction in your data processes and build systems
                that get rid of it.
              </p>
              <p>
                When you hire me, you're not getting just a programmer. You're getting a business
                partner who actually understands how your operations work.
              </p>
            </div>

            <div className='mt-16 grid md:grid-cols-2 gap-8'>
              <div className='card'>
                <h3 className='text-xl font-bold mb-4 font-display'>Direct Principal Access</h3>
                <p className='text-slate-600 leading-relaxed'>
                  Every conversation is with me. No account managers, no junior developers, no
                  outsourcing. The person who understands your business is the same person
                  writing your code.
                </p>
              </div>

              <div className='card'>
                <h3 className='text-xl font-bold mb-4 font-display'>Code Ownership</h3>
                <p className='text-slate-600 leading-relaxed'>
                  You own 100% of what I build. No licenses, no lock-in, no recurring fees. The
                  systems I build are yours, period.
                </p>
              </div>

              <div className='card'>
                <h3 className='text-xl font-bold mb-4 font-display'>Transparent Pricing</h3>
                <p className='text-slate-600 leading-relaxed mb-4'>
                  Clear scope, clear milestones, clear expectations. No surprises, no hidden costs.
                </p>
                <div className='pt-4 border-t border-slate-200'>
                  <div className='text-excel text-2xl font-bold mb-2'>$90/hour</div>
                  <div className='text-slate-600 text-sm'>Advisory</div>
                  <div className='text-slate-600 text-sm mt-2'>
                    Builds: Fixed-price after consultation
                  </div>
                </div>
              </div>

              <div className='card'>
                <h3 className='text-xl font-bold mb-4 font-display'>Enterprise Security</h3>
                <p className='text-slate-600 leading-relaxed'>
                  All work happens in your IT environment. Your data never leaves your
                  firewall. I'm ready to sign corporate NDAs right away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className='py-24 bg-slate-50 border-y border-slate-200'>
          <div className='max-w-4xl mx-auto px-6'>
            <h2 className='text-4xl md:text-5xl font-bold mb-12 font-display text-center'>
              Specialization Over Generalization
            </h2>

            <div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
              <p>
                I'm not a creative designer. I'm not generalist IT support. I'm a specialist in
                the Microsoft Data Stack—Excel, Access, VBA, and SQL Server.
              </p>
              <p>
                This focus means I understand the deep technical constraints and possibilities of
                these platforms. I know how to push Excel to its limits without breaking it. I know how
                to build Access databases that scale to hundreds of users. I know how to write
                VBA that runs reliably for years.
              </p>
              <p>
                When your business depends on these tools, you need someone who's spent decades
                mastering them, not someone who can &quot;also do Excel&quot; among a dozen other
                technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-24'>
          <div className='max-w-4xl mx-auto px-6'>
            <h2 className='text-4xl md:text-5xl font-bold mb-12 font-display text-center'>
              How I Work
            </h2>

            <div className='space-y-8'>
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>01</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display'>Understand</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Deep-dive audit of your current logic, workflows, and pain points. I
                      don't assume—I verify how your business actually works.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>02</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display'>Design</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Structural architecture of the database or automation system. This includes
                      data models, user interfaces, and error-handling that actually works.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>03</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display'>Build</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Development in a sandbox environment. You'll see progress at each
                      milestone, and we can tweak things before final deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>04</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display'>Handover</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Complete documentation, training, and support. Your team will know how to
                      use and maintain the system on their own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 bg-slate-50 border-y border-slate-200'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-8 font-display'>
              Ready to Eliminate Operational Friction?
            </h2>
            <p className='text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed'>
              Talk about your Excel or Access challenges directly with me.
            </p>
            <a href='/#contact' className='btn-primary text-base px-8 py-4'>
              Schedule a Free Consultation
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-slate-100 border-t border-slate-200 py-12'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div>
              <div className='text-xl font-bold tracking-tight mb-4 font-display text-slate-900'>
                ExcelAccessConsultant
              </div>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Professional Excel and MS Access consulting for enterprise operations.
              </p>
            </div>
            <div>
              <h4 className='font-bold mb-4 text-sm text-slate-900'>Links</h4>
              <ul className='space-y-2 text-slate-600 text-sm'>
                <li>
                  <Link to='/' className='hover:text-slate-900 transition-colors'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/about' className='hover:text-slate-900 transition-colors'>
                    About
                  </Link>
                </li>
                <li>
                  <a href='/#services' className='hover:text-slate-900 transition-colors'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='/#faq' className='hover:text-slate-900 transition-colors'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='/#contact' className='hover:text-slate-900 transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='pt-8 border-t border-slate-200 text-center text-slate-500 text-sm'>
            <p>© 2026 ExcelAccessConsultant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
