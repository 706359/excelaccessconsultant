import Link from 'next/link';
import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import Button from '../../components/ui/Button/Button';
import {
  ServiceFinalCTASection,
  ServiceRelatedSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
import {
  FAILURE_CAUSES,
  PAGE_REVIEWED,
  REAL_ERRORS,
  RELATED_GROUPS,
  REPAIR_FAQS,
  REPAIR_STEPS,
  SEND_CHECKLIST,
  SERVICE_COMPARE,
  WHAT_WE_FIX,
} from '../../constants/excelMacroRepairPage';
import { CONSULTANTS, CTA } from '../../constants/site';

const CANONICAL = 'https://excelaccessconsultant.com/excel-macro-repair';
const PROVIDER_ID = 'https://excelaccessconsultant.com/#localbusiness';
const sectionStyle = { paddingBlock: '3rem' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Excel Macro Repair',
      serviceType: 'Excel macro repair',
      url: CANONICAL,
      description:
        'Fix broken Excel macro and VBA code: runtime errors, compile errors, 64-bit updates, and macros that stopped after a file, PC, or Excel change.',
      provider: { '@id': PROVIDER_ID },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: REPAIR_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://excelaccessconsultant.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Excel Macro Repair',
          item: CANONICAL,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Fix a Broken Excel Macro',
      description:
        'Fix broken Excel macro code: runtime errors, 64-bit updates, and macros that stopped after a file or Excel change.',
      dateModified: PAGE_REVIEWED,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Excel Access Consultant',
        url: 'https://excelaccessconsultant.com',
      },
      about: { '@id': `${CANONICAL}#service` },
      author: {
        '@type': 'Person',
        name: CONSULTANTS.displayName,
      },
    },
  ],
};

function formatReviewed(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function ExcelMacroRepair() {
  return (
    <div className='page'>
      <ServicePageTracker service='excel-macro-repair' />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Fix a Broken Excel Macro</h1>
          <p className='page-hero__lead'>
            Excel macro repair for Microsoft Excel VBA when an Excel macro stopped working, throws
            errors, or broke after a file, PC, or Office change.
          </p>
          <div className='contact-ctas contact-ctas--stack'>
            <Button variant='primary' size='large' as={Link} href={CTA.primaryHref}>
              {CTA.primary}
            </Button>
            <Button variant='outline-access' size='large' as={Link} href='/pricing'>
              See pricing
            </Button>
          </div>
          <div className='content-meta' style={{ marginTop: '1.25rem' }}>
            <Link href='/about'>By {CONSULTANTS.displayName}</Link>
            <span aria-hidden='true'>•</span>
            <span>Reviewed by {CONSULTANTS.displayName}</span>
            <span aria-hidden='true'>•</span>
            <time dateTime={PAGE_REVIEWED}>Last reviewed: {formatReviewed(PAGE_REVIEWED)}</time>
          </div>
        </div>
      </section>

      <section className='container' style={sectionStyle} aria-labelledby='answer-block'>
        <h2 id='answer-block' className='sr-only'>
          Can someone fix my broken Excel macro?
        </h2>
        <p>
          Yes. You can hire someone to fix a broken Excel macro when the code throws a VBA error,
          runs the wrong result, or fails after a change. Send the file and the error. I diagnose the
          break, repair the code, test it, and return the workbook with a short note on what changed.
          This Excel VBA debugging service is for existing macros, not a full rebuild.
        </p>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Why Excel macros stop working</h2>
          <p className='text-lead'>
            A macro is a recorded or written VBA routine stored in a workbook or add-in. It usually
            fails because something around the code changed, not because Excel forgot how to run it.
          </p>
          <div className='grid-2'>
            {FAILURE_CAUSES.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <h3 style={{ marginTop: '1.75rem' }}>Errors people actually see</h3>
          <ul className='stack stack--lg' style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
            {REAL_ERRORS.map((msg) => (
              <li key={msg}>
                <code className='text-muted'>{msg}</code>
              </li>
            ))}
          </ul>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            VBA means Visual Basic for Applications, the language behind most Excel macros. The VBA
            editor holds modules, references, and Declare statements. A reference is a linked library
            the project expects. PtrSafe marks a Declare as safe for 64-bit Office.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>What we fix</h2>
          <p className='text-lead'>
            Repair focuses on macros that already exist. The goal is a working button again, with
            notes your team can keep.
          </p>
          <div className='grid-2'>
            {WHAT_WE_FIX.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            Personal macro workbooks and Outlook automation are in scope when they are part of the
            failure. ActiveX controls that only exist on Windows are called out when Mac is involved.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>How I fix a broken Excel macro</h2>
          <p className='text-lead'>
            The process is diagnose first, then edit. Guessing in the live file is how data gets
            hurt.
          </p>
          <ol className='stack stack--lg' style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {REPAIR_STEPS.map((step, index) => (
              <li key={step.title} className='check-row'>
                <div className='check-row__icon'>
                  <span aria-hidden='true'>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p className='text-muted'>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            Chat-style tools can suggest syntax for a short snippet. They cannot open your .xlsm,
            walk linked files, or prove the totals still match. When the macro is undocumented or the
            data matters, a person with the file is the safer path.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Repair or rewrite?</h2>
          <p className='text-lead'>
            Fix the macro when the design still fits the job. Rewrite when the design is the
            problem.
          </p>
          <p>
            Repair is enough when one module fails, a reference is missing, a sheet was renamed, or
            Declare statements need a 64-bit update. Rewrite is better when many modules share
            brittle layouts, nobody can describe the intended behavior, or you need new features the
            old structure cannot hold. Rebuilds are scoped under{' '}
            <Link href='/vba-development' className='text-link'>
              VBA development
            </Link>
            , not as a silent expansion of a small repair quote.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>What to send for a fast answer</h2>
          <p className='text-lead'>
            Clear inputs cut the back-and-forth. This checklist helps me see the break before the
            call.
          </p>
          <ul className='stack stack--lg' style={{ listStyle: 'disc', paddingLeft: '1.25rem' }}>
            {SEND_CHECKLIST.map((item) => (
              <li key={item} className='text-muted'>
                {item}
              </li>
            ))}
          </ul>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            Remove or mask sensitive rows if you must. Say what you removed so test results stay
            honest. {'{{CONFIRM: file transfer and confidentiality terms for Excel macro repair}}'}
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Macro repair, VBA development or a full consultant: which do you need?</h2>
          <p className='text-lead'>
            Use the table to pick the hire path. A broken button is a different job from a new
            automation build.
          </p>
          <div className='blog-table-wrap'>
            <table>
              <caption className='sr-only'>
                Comparison of Excel macro repair, VBA development, Excel automation, and hiring an
                Excel VBA consultant
              </caption>
              <thead>
                <tr>
                  <th scope='col'>Service</th>
                  <th scope='col'>Best for</th>
                  <th scope='col'>What you get</th>
                  <th scope='col'>Page</th>
                </tr>
              </thead>
              <tbody>
                {SERVICE_COMPARE.map((row) => (
                  <tr key={row.service}>
                    <th scope='row'>{row.service}</th>
                    <td>{row.bestFor}</td>
                    <td>{row.youGet}</td>
                    <td>
                      <Link href={row.href} className='text-link'>
                        {row.pageLabel}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Excel macro repair FAQ</h2>
          <p className='text-lead'>
            Direct answers for owners who need to repair broken Excel macro code without a full
            rewrite.
          </p>
          <div className='stack stack--lg'>
            {REPAIR_FAQS.map((faq) => (
              <article key={faq.question} className='card'>
                <h3>{faq.question}</h3>
                <p className='text-muted'>
                  {faq.question === 'How much does Excel macro repair cost?' ? (
                    <>
                      Cost follows how hard the break is to reproduce, how many modules are involved,
                      and whether 64-bit updates, add-ins, or Outlook automation are in play. Quotes
                      follow the same advisory and fixed-price patterns on the{' '}
                      <Link href='/pricing' className='text-link'>
                        pricing
                      </Link>{' '}
                      page. This page does not list a separate repair rate.
                    </>
                  ) : faq.question === 'Is it better to repair or rewrite the macro?' ? (
                    <>
                      Repair when the design still matches the job and the break is local. Rewrite
                      when the code is fragile across many modules, depends on brittle sheet layouts,
                      or needs features the old design cannot hold. Rebuilds belong under{' '}
                      <Link href='/vba-development' className='text-link'>
                        VBA development
                      </Link>
                      .
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            Official notes:{' '}
            <a
              href='https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/ptrsafe-keyword'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Learn on the PtrSafe keyword
            </a>
            , and{' '}
            <a
              href='https://support.microsoft.com/en-us/excel/change-macro-security-settings-in-excel'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Support on Excel macro security settings
            </a>
            .
          </p>
        </div>
      </section>

      <ServiceRelatedSection groups={RELATED_GROUPS} />

      <ServiceFinalCTASection
        heading='Ready to repair a broken Excel macro?'
        body={`Send the file and the error message. Book a free consultation with ${CONSULTANTS.displayName}. You get a clear repair-or-rewrite call and a fixed path before code changes start.`}
      />
    </div>
  );
}
