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

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */

const SITE = 'https://excelaccessconsultant.com';
const CANONICAL = `${SITE}/excel-to-access-conversion`;
const PAGE_TITLE = 'Excel to Access Conversion Services | Fixed Price | EAC';
const PAGE_DESCRIPTION =
  'Convert Excel to Access with a US-based consultant. Normalized tables, forms, reports, multi-user setup. Fixed price from $1,500. Free consultation.';
// TODO: create this 1200x630 image. If the file does not exist, social shares show no image.
const OG_IMAGE = `${SITE}/images/og/excel-to-access-conversion.png`;

const sectionStyle = { paddingBlock: '3rem' };

/* ------------------------------------------------------------------ */
/* Metadata (Next.js App Router)                                       */
/* ------------------------------------------------------------------ */

export const metadata = {
  // "absolute" stops the layout title template from appending the site name twice.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  // Google ignores the keywords tag. Kept only for Bing and internal reference.
  keywords: [
    'excel to access conversion',
    'excel to access conversion services',
    'convert excel to access',
    'convert excel to access database',
    'excel to access migration',
    'convert spreadsheet to database',
    'excel to access consultant',
    'hire access developer',
  ],
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    siteName: 'Excel Access Consultant',
    locale: 'en_US',
    title: 'Excel to Access Conversion Services | EAC',
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Excel spreadsheet converted into a multi-user Microsoft Access database',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel to Access Conversion Services | EAC',
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

/* ------------------------------------------------------------------ */
/* Structured data: one connected @graph                               */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE}/#localbusiness`;
const WEBSITE_ID = `${SITE}/#website`;
const PERSON_ID = `${SITE}/#founder`;
const SERVICE_ID = `${CANONICAL}#service`;
const WEBPAGE_ID = `${CANONICAL}#webpage`;
const BREADCRUMB_ID = `${CANONICAL}#breadcrumb`;

const pageGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: CONSULTANTS.displayName,
      url: `${SITE}/about`,
      jobTitle: 'Microsoft Access and Excel Developer',
      worksFor: { '@id': ORG_ID },
    },
    {
      '@type': 'Service',
      '@id': SERVICE_ID,
      name: 'Excel to Access Conversion',
      serviceType: 'Excel to Access database conversion',
      url: CANONICAL,
      description:
        'Excel to Access conversion for US businesses. Spreadsheets become normalized Access tables with forms, queries, reports, validation and multi-user setup. Fixed price. The client owns all files.',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'United States' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Focused Excel to Access conversion',
          url: `${SITE}/pricing`,
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
          url: `${SITE}/pricing`,
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
          url: `${SITE}/pricing`,
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 8000,
            priceCurrency: 'USD',
          },
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': WEBPAGE_ID,
      url: CANONICAL,
      name: 'Excel to Access Conversion Services',
      description: PAGE_DESCRIPTION,
      inLanguage: 'en-US',
      dateModified: PAGE_UPDATED,
      isPartOf: { '@type': 'WebSite', '@id': WEBSITE_ID, name: 'Excel Access Consultant', url: SITE },
      about: { '@id': SERVICE_ID },
      mainEntity: { '@id': SERVICE_ID },
      breadcrumb: { '@id': BREADCRUMB_ID },
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': BREADCRUMB_ID,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Excel to Access Conversion', item: CANONICAL },
      ],
    },
  ],
};

// Escape "<" so no string in the data can close the script tag early.
const jsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

/* ------------------------------------------------------------------ */
/* Page content                                                        */
/* ------------------------------------------------------------------ */

const FILE_TYPES = [
  {
    title: 'Inventory and stock trackers',
    description:
      'One long sheet becomes items, locations and transactions, so counts stay correct when several people update them.',
  },
  {
    title: 'Customer and order logs',
    description:
      'Customers, orders and line items move into related tables. No more retyping the same name in ten places.',
  },
  {
    title: 'Job costing and project trackers',
    description:
      'Jobs, labor, materials and invoices tie together, with reports that update without copy and paste.',
  },
  {
    title: 'Billing and accounting workbooks',
    description:
      'Invoice and payment records get validation rules, so totals match and old entries are not overwritten.',
  },
  {
    title: 'Scheduling and time-tracking sheets',
    description:
      'Entry forms replace free-typed cells. Each person works in their own view of the same data.',
  },
  {
    title: 'Macro-heavy workbooks',
    description:
      'Excel VBA logic is reviewed and rebuilt in Access as queries or VBA, so the rules your team relies on keep working.',
  },
];

const COST_ROWS = [
  {
    scope: 'Focused conversion',
    fit: 'A few sheets, fairly clean data',
    price: '$1,500 to $3,000',
    time: 'About 1 to 3 weeks',
  },
  {
    scope: 'Multi-user Access database',
    fit: 'Forms, queries, reports, data cleanup',
    price: '$3,000 to $8,000',
    time: 'About 3 to 6 weeks',
  },
  {
    scope: 'Large or multi-department rebuild',
    fit: 'Many sheets, several teams, heavy macros',
    price: '$8,000 and up',
    time: 'Scoped after discovery',
  },
];

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
        dangerouslySetInnerHTML={{ __html: jsonLd(pageGraph) }}
      />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Excel to Access Conversion Services</h1>
          <p className='page-hero__lead'>
            We convert Excel spreadsheets into Access databases your whole team can use at the same
            time. You get clean tables, data entry forms, queries, reports and a multi-user setup.
            Your business rules carry over. Nothing gets rewritten from scratch.
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
            <span>{TRUST.years} years building Access databases</span>
            <span aria-hidden='true'>•</span>
            <time dateTime={PAGE_UPDATED}>Last updated: {formatUpdated(PAGE_UPDATED)}</time>
          </div>
        </div>
      </section>

      <section className='container' style={sectionStyle} aria-labelledby='direct-answer'>
        <h2 id='direct-answer'>Can Excel be converted to an Access database?</h2>
        <p>
          Yes. An Excel workbook can be converted into a Microsoft Access database. Each sheet
          becomes one or more related tables, keys are cleaned up, relationships are defined, and
          forms, queries and reports take over the manual work. It is a design job, not a file
          rename, so data rules and multi-user setup are planned before any data is imported. EAC
          does this at a fixed price after a free consultation.
        </p>
        <p>
          The Access import wizard copies rows. It does not fix duplicate keys, merged cells or
          repeating columns, and that is where most DIY conversions go wrong.
        </p>
        <ul className='stack' style={{ marginTop: '1.25rem' }}>
          <li>
            <strong>Price:</strong> $1,500 to $8,000 and up, fixed after discovery.
          </li>
          <li>
            <strong>Timeline:</strong> about 1 to 6 weeks for most projects.
          </li>
          <li>
            <strong>You get:</strong> normalized tables, forms, queries, reports and a multi-user
            setup.
          </li>
          <li>
            <strong>You own:</strong> 100% of the files. No hosted subscription.
          </li>
        </ul>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Signs you have outgrown Excel</h2>
          <p className='text-lead'>
            If several of these happen every week, the spreadsheet is the problem, not you. That is
            when an Excel to Access migration pays for itself.
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
            Not sure whether to move at all? Read{' '}
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
          <h2>What we convert and what you get</h2>
          <p className='text-lead'>
            Our Excel to Access conversion services turn working spreadsheets into a database your
            staff can use every day. You get files you own, not a subscription.
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
            Work after go-live, such as repairs, performance tuning or new features, falls under{' '}
            <Link href='/access-consulting' className='text-link'>
              Access database consulting
            </Link>
            . If a file ever corrupts,{' '}
            <Link href='/access-database-repair' className='text-link'>
              Access database repair
            </Link>{' '}
            stabilizes it before we add anything new.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Spreadsheets we convert most often</h2>
          <p className='text-lead'>
            If your workbook looks like one of these, it is a good candidate to convert Excel to an
            Access database.
          </p>
          <div className='grid-2'>
            {FILE_TYPES.map((item) => (
              <article key={item.title} className='card'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Our Excel to Access conversion process</h2>
          <p className='text-lead'>
            Discovery first. A fixed price once scope is clear. Then design, import, forms and
            training.
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
            Multi-user Access usually means a split front end and back end. See{' '}
            <Link href='/blog/access-database-multi-user-setup' className='text-link'>
              Access multi-user setup
            </Link>{' '}
            and{' '}
            <Link href='/blog/access-front-end-back-end-architecture' className='text-link'>
              Access front-end and back-end architecture
            </Link>{' '}
            for how that works.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Excel vs Access: when conversion wins</h2>
          <p className='text-lead'>
            Excel stays the right tool for models and analysis. Access wins for shared, repeat data
            entry.
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
            Microsoft describes Access as a desktop database for structured data and forms. For the
            basics, see{' '}
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
            . For the full decision guide, read{' '}
            <Link href='/blog/access-vs-excel-when-to-use-each' className='text-link'>
              when to use Access vs Excel
            </Link>
            .
          </p>
        </div>
      </section>

      <MidPageCTA
        heading='Has a spreadsheet outgrown Excel?'
        subtext='Send a sample workbook through the contact form. We will tell you whether conversion, automation or SQL Server is the right fit, then quote a fixed price.'
      />

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Results from Excel-to-database projects</h2>
          <p className='text-lead'>These outcomes come from published EAC case studies.</p>
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
            Another inventory project that stayed in Access after a rebuild:{' '}
            <Link href='/case-studies/manufacturing-inventory-tracking' className='text-link'>
              manufacturing inventory tracking for 15 concurrent users
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        className='page-section page-section--compact page-section--white'
        aria-labelledby='cost-timeline'
      >
        <div className='container'>
          <h2 id='cost-timeline'>Excel to Access conversion cost and timeline</h2>
          <p className='text-lead'>
            Price follows scope. Every project gets a fixed quote after the free consultation.
          </p>
          <div className='blog-table-wrap'>
            <table>
              <caption className='sr-only'>
                Typical price and timeline for Excel to Access conversion by project size
              </caption>
              <thead>
                <tr>
                  <th scope='col'>Project size</th>
                  <th scope='col'>Typical fit</th>
                  <th scope='col'>Typical price</th>
                  <th scope='col'>Typical timeline</th>
                </tr>
              </thead>
              <tbody>
                {COST_ROWS.map((row) => (
                  <tr key={row.scope}>
                    <th scope='row'>{row.scope}</th>
                    <td>{row.fit}</td>
                    <td>{row.price}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.25rem' }}>
            Four things move both cost and calendar: the number of sheets and macros, duplicate or
            dirty keys, how many people need to use it at once, and whether Excel stays in place for
            analysis. Advisory questions outside a build are $90 per hour.
          </p>
          <p className='text-muted'>
            See all ranges on the{' '}
            <Link href='/pricing' className='text-link'>
              pricing page
            </Link>
            , estimate what staying manual costs with the{' '}
            <Link href='/resources/calculator' className='text-link'>
              spreadsheet ROI calculator
            </Link>
            , or read the{' '}
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
          Access is the wrong target if you need dozens of people writing at once, browser or mobile
          access, or you are close to the 2 GB Access file limit. In those cases we recommend{' '}
          <Link href='/database-migration' className='text-link'>
            database migration to SQL Server or a web app
          </Link>{' '}
          instead. For practical limits, read{' '}
          <Link href='/blog/can-access-handle-50-users' className='text-link'>
            can Access handle 50 users
          </Link>
          . If Access will not hold up for your case, we say so before you spend anything.
        </p>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Excel to Access conversion FAQ</h2>
          <p className='text-lead'>
            Straight answers to the questions buyers ask before they convert a spreadsheet to a
            database.
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
        body={`${TRUST.years} years helping US teams move from Excel to databases they own. Book a free consultation with ${CONSULTANTS.displayName}. You get a clear yes or no on Access, a fixed price if it fits, and full ownership of the files.`}
      />
    </div>
  );
}
