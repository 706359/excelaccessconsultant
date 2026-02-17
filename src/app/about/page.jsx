'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';

export default function About() {
  return (
    <div className='bg-base min-h-screen text-slate-900 font-sans'>
      <SEO
        title='Operational Stability & Data Governance | ExcelAccessConsultant'
        description='I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting for finance and operations—you work with me directly.'
        keywords='operational stability, data governance, Excel consulting, Access consulting, audit-ready systems, business continuity, risk mitigation'
        url='https://excelaccessconsultant.com/about'
        ogTitle='Operational Stability & Data Governance | ExcelAccessConsultant'
      />

      <div>
        <section className='relative max-w-7xl mx-auto px-6 py-8 md:py-12 text-center'>
          <div className='absolute inset-0 -z-10 bg-excel/5 rounded-full blur-3xl'></div>

          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 font-display'>
            Excel & Access Consulting
          </h1>
          <p className='text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            15+ years of hands-on Excel and Access work for finance and operations teams. You work
            with me directly; no middlemen.
          </p>
        </section>

        <section className='py-8 md:py-12'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='space-y-8 text-lg text-slate-700 leading-relaxed'>
              <p>
                I&apos;m Robert Terry. For over 20 years, I&apos;ve worked at the intersection of
                business logic and Microsoft technology.
              </p>
              <p>
                My approach is straight forward: I find the friction in your data processes and
                build systems that get rid of it.
              </p>
              <p>
                When you hire me, you&apos;re not getting just a programmer. You&apos;re getting a
                business partner who actually understands how your operations work.
              </p>
            </div>

            <div className='mt-8 md:mt-12 grid md:grid-cols-2 gap-5 md:gap-6'>
              <div className='card'>
                <h3 className='text-heading-lg font-bold mb-4 font-display'>
                  Direct Principal Access
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  Every conversation is with me. No account managers, no junior developers, no
                  outsourcing. The person who understands your business is the same person writing
                  your code.
                </p>
              </div>

              <div className='card'>
                <h3 className='text-heading-lg font-bold mb-4 font-display'>Code Ownership</h3>
                <p className='text-slate-600 leading-relaxed'>
                  You own 100% of what I build. No licenses, no lock-in, no recurring fees. The
                  systems I build are yours, period.
                </p>
              </div>

              <div className='card'>
                <h3 className='text-heading-lg font-bold mb-4 font-display'>Transparent Pricing</h3>
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
                <h3 className='text-heading-lg font-bold mb-4 font-display'>Enterprise Security</h3>
                <p className='text-slate-600 leading-relaxed'>
                  All work happens in your IT environment. Your data never leaves your firewall.
                  I&apos;m ready to sign corporate NDAs right away.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-8 md:py-12 bg-slate-50 border-y border-slate-200'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-center'>
              Specialization Over Generalization
            </h2>

            <div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
              <p>
                I&apos;m not a creative designer. I&apos;m not generalist IT support. I&apos;m a
                specialist in the Microsoft Data Stack: Excel, Access, VBA, and SQL Server.
              </p>
              <p>
                This focus means I understand the deep technical constraints and possibilities of
                these platforms. I know how to push Excel to its limits without breaking it. I know
                how to build Access databases that scale to hundreds of users. I know how to write
                VBA that runs reliably for years.
              </p>
              <p>
                When your business depends on these tools, you need someone who&apos;s spent decades
                mastering them, not someone who can &quot;also do Excel&quot; among a dozen other
                technologies.
              </p>
            </div>
          </div>
        </section>

        <section className='py-8 md:py-12'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-center'>
              How I Work
            </h2>

            <div className='space-y-8'>
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>01</div>
                  <div className='flex-1'>
                    <h3 className='text-heading-lg font-bold mb-3 font-display'>Understand</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Deep-dive audit of your current logic, workflows, and pain points. I
                      don&apos;t assume; I verify how your business actually works.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>02</div>
                  <div className='flex-1'>
                    <h3 className='text-heading-lg font-bold mb-3 font-display'>Design</h3>
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
                    <h3 className='text-heading-lg font-bold mb-3 font-display'>Build</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Development in a sandbox environment. You&apos;ll see progress at each
                      milestone, and we can tweak things before final deployment.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>04</div>
                  <div className='flex-1'>
                    <h3 className='text-heading-lg font-bold mb-3 font-display'>Handover</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Complete documentation, training, and support. Your team will know how to use
                      and maintain the system on their own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-8 md:py-12 bg-slate-100 border-y border-slate-200'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display'>
              Ready to Eliminate Operational Friction?
            </h2>
            <p className='text-lg text-slate-600 mb-8 max-w-7xl mx-auto leading-relaxed'>
              Talk about your Excel or Access challenges directly with me.
            </p>
            <Button variant='primary' size='large' as={Link} href='/contact'>
              Schedule a Free Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
