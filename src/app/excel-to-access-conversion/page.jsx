import Link from 'next/link';
import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import FAQSchema from '../../components/SEO/FAQSchema';
import Button from '../../components/ui/Button/Button';
import {
  MidPageCTA,
  ServiceFinalCTASection,
  ServiceRelatedSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
import {
  COMPARISON_ROWS,
  CONVERSION_DELIVERABLES,
  CONVERSION_FAQS,
  CONVERSION_SIGNS,
  CONVERSION_STEPS,
  PAGE_UPDATED,
  PROOF_CASES,
  RELATED_GROUPS,
} from '../../constants/excelToAccessConversionPage';
import { CONSULTANTS, CTA, TRUST } from '../../constants/site';

const CANONICAL = 'https://excelaccessconsultant.com/excel-to-access-conversion';
const sectionStyle = { paddingBlock: '3rem' };

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Excel to Access Conversion',
  serviceType: 'Excel to Access database conversion',
  url: CANONICAL,
  description:
    'Convert Excel spreadsheets to Microsoft Access databases with normalized tables, forms, queries, reports, validation, and multi-user setup. Fixed-price projects from Excel Access Consultant (EAC).',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Excel Access Consultant',
    alternateName: 'EAC',
    url: 'https://excelaccessconsultant.com',
    founder: { '@type': 'Person', name: CONSULTANTS.displayName },
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Focused Excel to Access conversion',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 1500,
        maxPrice: 3000,
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'Offer',
      name: 'Multi-user Excel to Access conversion',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 3000,
        maxPrice: 8000,
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'Offer',
      name: 'Large or multi-department conversion',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 8000,
        priceCurrency: 'USD',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
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
      name: 'Excel to Access Conversion',
      item: CANONICAL,
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Convert Excel to Access Database',
  url: CANONICAL,
  description:
    'Convert Excel to Access database with Excel Access Consultant. Fixed-price migration, multi-user forms, reports and data cleanup.',
  dateModified: PAGE_UPDATED,
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Excel Access Consultant',
    url: 'https://excelaccessconsultant.com',
  },
  about: {
    '@type': 'Service',
    name: 'Excel to Access Conversion',
  },
  author: {
    '@type': 'Person',
    name: CONSULTANTS.displayName,
  },
};

function formatUpdated(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function ExcelToAccessConversion() {
  return (
    <div className='page'>
      <ServicePageTracker service='excel-to-access-conversion' />
      <FAQSchema faqs={CONVERSION_FAQS} />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Convert Excel to Access Database</h1>
          <p className='page-hero__lead'>
            Hire Excel Access Consultant (EAC) to convert Excel to Access database systems your
            team can share—normalized tables, data entry forms, queries, reports, and multi-user
            setup—without rewriting your business rules from scratch.
          </p>
          <div className='contact-ctas contact-ctas--stack'>
            <Button variant='primary' size='large' as={Link} href={CTA.primaryHref}>
              {CTA.primary}
            </Button>
            <Button variant='outline-access' size='large' as={Link} href='/pricing'>
              See fixed-price ranges
            </Button>
          </div>
          <div className='content-meta' style={{ marginTop: '1.25rem' }}>
            <Link href='/about'>By {CONSULTANTS.displayName}</Link>
            <span aria-hidden='true'>•</span>
            <span>Reviewed by {CONSULTANTS.displayName}</span>
            <span aria-hidden='true'>•</span>
            <time dateTime={PAGE_UPDATED}>Last updated: {formatUpdated(PAGE_UPDATED)}</time>
          </div>
        </div>
      </section>

      <section className='container' style={sectionStyle} aria-labelledby='direct-answer'>
        <h2 id='direct-answer'>Can Excel be converted to an Access database?</h2>
        <p>
          Yes. Microsoft Excel workbooks can be converted into a Microsoft Access database by
          turning sheets into relational tables, cleaning keys, defining relationships, and building
          forms, queries, and reports for daily use. Conversion is a design project—not a file
          rename—so data integrity and multi-user Access setup are planned before import. Excel
          Access Consultant (EAC) delivers that work at a fixed price after a free consultation.
        </p>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Signs you have outgrown Excel</h2>
          <p className='text-lead'>
            If several of these show up every week, you are past spreadsheet limits—not failing at
            Excel. That is when Excel to Access migration pays for itself.
          </p>
          <ul className='stack stack--lg'>
            {CONVERSION_SIGNS.map((sign) => (
              <li key={sign} className='check-row'>
                <div className='check-row__icon'>
                  <span aria-hidden='true'>✓</span>
                </div>
                <p className='text-muted'>{sign}</p>
              </li>
            ))}
          </ul>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            For a deeper decision framework (keep Excel vs move), read{' '}
            <Link href='/blog/access-vs-excel-when-to-use-each' className='text-link'>
              Access vs Excel: when to use each
            </Link>
            . If automation alone would fix the pain, start with{' '}
            <Link href='/excel-automation' className='text-link'>
              Excel VBA automation services
            </Link>{' '}
            instead of a full conversion.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>What we convert—and what you get</h2>
          <p className='text-lead'>
            Excel to Access conversion services turn operational spreadsheets into a maintainable
            database your staff can use every day. Deliverables are concrete files you own, not a
            hosted subscription.
          </p>
          <div className='grid-2'>
            {CONVERSION_DELIVERABLES.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            Ongoing Access work after go-live—repairs, performance, or extensions—sits under{' '}
            <Link href='/access-consulting' className='text-link'>
              Access database consulting
            </Link>
            . If a converted file later corrupts,{' '}
            <Link href='/access-database-repair' className='text-link'>
              Access database repair
            </Link>{' '}
            stabilizes it before we rebuild features.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Our Excel to Access conversion process</h2>
          <p className='text-lead'>
            Same engagement style as other EAC builds: discovery first, fixed price after scope is
            clear, then design → import → forms → training.
          </p>
          <ol className='stack stack--lg' style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {CONVERSION_STEPS.map((step, index) => (
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
            Multi-user Access after conversion usually means a split front end and back end. See{' '}
            <Link href='/blog/access-database-multi-user-setup' className='text-link'>
              Access multi-user setup
            </Link>{' '}
            and{' '}
            <Link href='/blog/access-front-end-back-end-architecture' className='text-link'>
              Access front-end / back-end architecture
            </Link>{' '}
            for how that pattern works.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Excel vs Access: when conversion wins</h2>
          <p className='text-lead'>
            Honest comparison for business buyers. Excel should stay for models and analysis; Access
            wins for shared transactional work.
          </p>
          <div className='blog-table-wrap'>
            <table>
              <caption className='sr-only'>
                Comparison of Microsoft Excel and Microsoft Access for concurrent users, integrity,
                relationships, reporting, scale, cost, and fit
              </caption>
              <thead>
                <tr>
                  <th scope='col'>Factor</th>
                  <th scope='col'>Microsoft Excel</th>
                  <th scope='col'>Microsoft Access</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.factor}>
                    <th scope='row'>{row.factor}</th>
                    <td>{row.excel}</td>
                    <td>{row.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            Microsoft documents Access as a desktop database for structured data and forms; Excel
            remains the stronger free-form analysis grid. For product basics, see{' '}
            <a
              href='https://support.microsoft.com/en-us/access/basic-tasks-for-an-access-desktop-database'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Support: basic tasks for an Access desktop database
            </a>{' '}
            and{' '}
            <a
              href='https://support.microsoft.com/en-us/excel/move-data-from-excel-to-access'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Support: move data from Excel to Access
            </a>
            . Full decision narrative:{' '}
            <Link href='/blog/access-vs-excel-when-to-use-each' className='text-link'>
              when to use Access vs Excel
            </Link>
            .
          </p>
        </div>
      </section>

      <MidPageCTA
        heading='Ready to replace a fragile spreadsheet with a database?'
        subtext='Send sample workbooks on the contact form. I will tell you whether conversion, automation, or SQL Server is the honest fit—then quote a fixed price.'
      />

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Proof from Excel-to-database projects</h2>
          <p className='text-lead'>
            Outcomes below are taken from published EAC case studies—not hypotheticals.
          </p>
          <div className='grid-3'>
            {PROOF_CASES.map((study) => (
              <article key={study.href} className='related-tile stretched-card'>
                <p className='card__metric' style={{ marginBottom: '0.5rem' }}>
                  {study.metric}
                </p>
                <h3>
                  <Link href={study.href} className='stretched-link'>
                    {study.title}
                  </Link>
                </h3>
                <p className='text-muted-sm'>{study.outcome}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            Related inventory work that stayed in Access after a rebuild:{' '}
            <Link href='/case-studies/manufacturing-inventory-tracking' className='text-link'>
              manufacturing inventory tracking for 15 concurrent users
            </Link>
            .
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Cost and timeline to convert Excel to Access</h2>
          <p>
            Price tracks scope the same way as other Access and Excel projects on this site.
            Focused conversions (limited sheets, clearer data) typically land in the $1,500–$3,000
            band. Multi-user Access databases with forms, queries, reports, and cleanup commonly
            fall in $3,000–$8,000. Large or multi-department rebuilds start at $8,000+. Advisory
            questions outside a build are $90/hour.
          </p>
          <p>
            Duration follows complexity: simple conversions often take about 1–3 weeks; multi-user
            systems with forms and validation commonly take 3–6 weeks; larger rebuilds run longer.
            Drivers that move both cost and calendar: number of sheets and macros, duplicate or
            dirty keys, how many concurrent users you need, and whether Excel remains for analysis
            via linked tables.
          </p>
          <p className='text-muted'>
            See published ranges on the{' '}
            <Link href='/pricing' className='text-link'>
              pricing page
            </Link>
            , estimate the cost of staying manual with the{' '}
            <Link href='/resources/calculator' className='text-link'>
              spreadsheet ROI calculator
            </Link>
            , or browse{' '}
            <Link href='/faq' className='text-link'>
              common project questions
            </Link>{' '}
            before you book.
          </p>
        </div>
      </section>

      <section className='container' style={sectionStyle}>
        <h2>When Access is not the right answer</h2>
        <p>
          Converting Excel to Access is the wrong goal if you already need dozens of concurrent
          writers, heavy browser or mobile clients, or you are near Access file-size and
          concurrency limits. In those cases I recommend{' '}
          <Link href='/database-migration' className='text-link'>
            database migration to SQL Server or a web app path
          </Link>{' '}
          instead of forcing desktop Access. Practical limits are covered in{' '}
          <Link href='/blog/can-access-handle-50-users' className='text-link'>
            can Access handle 50 users
          </Link>
          . Saying no to Access when it will not hold is part of how Excel Access Consultant (EAC)
          earns trust.
        </p>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Excel to Access conversion FAQ</h2>
          <p className='text-lead'>
            Direct answers for buyers evaluating convert spreadsheet to database projects.
          </p>
          <div className='stack stack--lg'>
            {CONVERSION_FAQS.map((faq) => (
              <article key={faq.question} className='card'>
                <h3>{faq.question}</h3>
                <p className='text-muted'>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceRelatedSection groups={RELATED_GROUPS} />

      <ServiceFinalCTASection
        heading='Ready to convert your spreadsheet to a multi-user Access database?'
        body={`${TRUST.years} years helping US teams upgrade Excel to database systems they own. Book a free consultation with ${CONSULTANTS.displayName}—you get a clear yes/no on Access, a fixed-price path when it fits, and 100% ownership of the files.`}
      />
    </div>
  );
}
