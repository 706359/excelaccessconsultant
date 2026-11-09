import Link from 'next/link';
import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import Button from '../../components/ui/Button/Button';
import {
  ServiceFinalCTASection,
  ServiceRelatedSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
import { BRAND_LOGO_OG } from '../../config/brand';
import {
  BUILD_STEPS,
  DASHBOARD_FAQS,
  DASHBOARD_TYPES,
  DATA_SOURCES,
  PAGE_REVIEWED,
  PROOF_CASES,
  RELATED_GROUPS,
  SERVICE_COMPARE,
} from '../../constants/excelDashboardDevelopmentPage';
import { CONSULTANTS, CTA, TRUST } from '../../constants/site';

const SITE = 'https://excelaccessconsultant.com';
const CANONICAL = `${SITE}/excel-dashboard-development`;
const PROVIDER_ID = `${SITE}/#localbusiness`;
// Prefer dedicated OG art when present; brand logo keeps shares from going blank.
const OG_IMAGE = BRAND_LOGO_OG;
const sectionStyle = { paddingBlock: '3rem' };

const PAGE_TITLE = 'Excel Dashboard Development Services | Excel Access Consultant';
const PAGE_DESCRIPTION =
  'Custom Excel dashboard development: KPI workbooks with PivotTables and charts that refresh from your data. Fixed-price quotes, you own the file.';

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'Excel dashboard development services',
    'Excel dashboard developer',
    'custom Excel dashboard',
    'Excel KPI dashboard developer',
    'Excel dashboard consultant',
    'Excel dashboard developer for small business',
    'Excel reporting dashboard',
    'Excel dashboard that refreshes from your data',
  ],
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    siteName: 'Excel Access Consultant',
    locale: 'en_US',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

/*
 * FAQ: one source of truth for BOTH the visible page and the FAQPage schema.
 * `text` is plain text (links flattened) and must match what `body` shows.
 * Do not rename the cost question below; the override is matched on that exact string.
 */
const FAQ_OVERRIDES = {
  'How much does a custom Excel dashboard cost?': {
    text: 'Cost follows scope: number of data sources, cleanup needed, KPI count, chart layout, and whether VBA refresh or email steps are included. Fixed-price quotes follow the project bands on the pricing page.',
    body: (
      <>
        Cost follows scope: number of data sources, cleanup needed, KPI count, chart layout, and
        whether VBA refresh or email steps are included. Fixed-price quotes follow the project bands
        on the{' '}
        <Link href='/pricing' className='text-link'>
          pricing
        </Link>{' '}
        page.
      </>
    ),
  },
};

const FAQS = DASHBOARD_FAQS.map((faq) => {
  const override = FAQ_OVERRIDES[faq.question];
  return {
    question: faq.question,
    text: override ? override.text : faq.answer,
    body: override ? override.body : faq.answer,
  };
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Excel Dashboard Development Services',
      serviceType: 'Excel dashboard development services',
      url: CANONICAL,
      description:
        'Custom Microsoft Excel dashboards and reporting workbooks with refreshable data, KPIs, PivotTables, charts, and documented handover.',
      provider: { '@id': PROVIDER_ID },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
      audience: {
        '@type': 'BusinessAudience',
        audienceType:
          'Small and mid-size operations and finance teams that report from Microsoft Excel',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.text,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Excel Dashboard Development Services',
          item: CANONICAL,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Excel Dashboard Development Services',
      description: PAGE_DESCRIPTION,
      inLanguage: 'en-US',
      dateModified: PAGE_REVIEWED,
      lastReviewed: PAGE_REVIEWED,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Excel Access Consultant',
        url: SITE,
      },
      about: { '@id': `${CANONICAL}#service` },
      mainEntity: { '@id': `${CANONICAL}#faq` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      author: {
        '@type': 'Person',
        name: CONSULTANTS.displayName,
        url: `${SITE}/about`,
        jobTitle: 'Excel and Microsoft Access Consultant',
      },
      reviewedBy: {
        '@type': 'Person',
        name: CONSULTANTS.displayName,
        url: `${SITE}/about`,
      },
    },
  ],
};

// Escape "<" so the JSON can never close the script tag early.
const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c');

function formatReviewed(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function ExcelDashboardDevelopment() {
  return (
    <div className='page'>
      <ServicePageTracker service='excel-dashboard-development' />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLdString }} />

      <section className='page-hero'>
        <div className='container'>
          <nav aria-label='Breadcrumb' className='text-muted-sm' style={{ marginBottom: '1rem' }}>
            <Link href='/' className='text-link'>
              Home
            </Link>{' '}
            <span aria-hidden='true'>/</span>{' '}
            <span aria-current='page'>Excel Dashboard Development Services</span>
          </nav>
          <h1 className='page-hero__title'>Excel Dashboard Development Services</h1>
          <p className='page-hero__lead'>
            Custom Microsoft Excel dashboards that refresh from your data so weekly reporting is not
            a rebuild from scratch.
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
        <h2 id='answer-block'>What is an Excel dashboard developer and what do they build?</h2>
        <p>
          An Excel dashboard developer builds a workbook that answers fixed business questions with
          charts, PivotTables, and filters. Excel dashboard development services cover the data
          connections, KPI layout, refresh steps, and handover notes so your team can run the file
          without hiring the developer again each month.
        </p>
        <p>
          Excel Access Consultant (EAC) is an Excel dashboard consultant for businesses in the
          United States, Canada, and the United Kingdom. EAC builds these as fixed-price Excel
          projects. You receive the finished file and own it. This is a maintained reporting tool,
          not a one-off chart paste. A proper build plans named ranges, refresh steps, and who can
          open the file when next month&apos;s CSV arrives.
        </p>
        <div className='highlight-box' style={{ marginTop: '1.5rem' }}>
          <p>
            <strong>Quick facts</strong>
          </p>
          <ul className='highlight-box__list'>
            <li>
              <strong>Best for:</strong> weekly or monthly KPI reporting that currently means
              rebuilding charts by hand.
            </li>
            <li>
              <strong>You receive:</strong> a finished Excel workbook you own, with handover notes so
              your team can run it.
            </li>
            <li>
              <strong>Pricing:</strong> fixed-price quote based on scope. See the pricing page.
            </li>
            <li>
              <strong>Built with:</strong> Microsoft Excel: PivotTables, slicers, and charts, plus
              Power Query and Power Pivot where your desktop Excel supports them.
            </li>
            <li>
              <strong>Service area:</strong> United States, Canada, and the United Kingdom.
            </li>
            <li>
              <strong>Not covered here:</strong> Power BI dashboards. This service stays inside
              Microsoft Excel.
            </li>
          </ul>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>What Excel dashboard development services build</h2>
          <p className='text-lead'>
            Custom Excel dashboards for reporting jobs common in construction, distribution, and
            finance operations.
          </p>
          <div className='grid-2'>
            {DASHBOARD_TYPES.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            A KPI is a number leadership watches on purpose, such as open orders, inventory turns, or
            job margin. A PivotTable summarizes rows into groups you can filter. Slicers are
            clickable filters that drive those PivotTables and charts together.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Where the data for your Excel dashboard comes from</h2>
          <p className='text-lead'>
            Dashboards only work when the inputs are known. EAC connects Excel to the sources below
            on automation and reporting projects.
          </p>
          <div className='grid-2'>
            {DATA_SOURCES.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            Power Query is Excel&apos;s tool for pulling and cleaning data before it lands on a sheet
            or in a Data Model. A Data Model is the in-workbook store of related tables used for
            analysis. Power Pivot is the Excel feature set for building that model and writing DAX
            measures (calculations stored with the model). When your Windows desktop Excel license
            supports those features, a Power Query and Power Pivot build can refresh instead of being
            rebuilt each month.
          </p>
          <p className='text-muted'>
            The refresh method is agreed in writing at the start of each project: Power Query and
            Power Pivot where your desktop Excel supports them, VBA helpers, or connections to Access
            or SQL Server (see{' '}
            <Link href='/excel-automation' className='text-link'>
              Excel automation
            </Link>
            ). An Excel dashboard that refreshes from your data should not require re-pasting every
            monthly export into the chart sheet.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>How an Excel dashboard gets built</h2>
          <p className='text-lead'>
            The build starts with the questions you need answered, then the data, then the layout.
            Charts come after the numbers match.
          </p>
          <ol className='stack stack--lg' style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {BUILD_STEPS.map((step, index) => (
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
            If the hard part is a repeating consolidate-and-email job rather than a live scorecard,
            start with{' '}
            <Link href='/excel-automation' className='text-link'>
              Excel reporting automation
            </Link>{' '}
            instead. If you need a forecast model with scenarios, see{' '}
            <Link href='/financial-modeling' className='text-link'>
              financial modeling
            </Link>
            . Reports that only need a PDF emailed after consolidation usually belong on the
            automation page. Interactive scorecards belong here.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Excel dashboard or Power BI?</h2>
          <p className='text-lead'>
            Excel is the right tool when the workbook is the product your team already trusts. Power
            BI fits a different kind of program.
          </p>
          <p>
            Choose Excel when managers must keep working offline, when the dashboard must live next
            to existing project files, or when you want a custom file you own after a fixed-price
            build. Choose a broader BI platform when IT owns cloud datasets, many viewers need
            governed access, and the org standard is already Power BI. EAC builds Excel dashboards;
            this service does not include Power BI development.
          </p>
          <p className='text-muted'>
            Microsoft documents that advanced Power Pivot model creation is a desktop Excel feature,
            and that Excel for the web can view many Power Pivot tables and charts but cannot create
            Power Pivot data models or new external connections. Plan Windows desktop Excel when
            those capabilities matter. See{' '}
            <a
              href='https://learn.microsoft.com/en-us/office365/servicedescriptions/office-online-service-description/excel-online'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Learn: Excel for the web service description
            </a>{' '}
            and{' '}
            <a
              href='https://support.microsoft.com/en-us/office/learn-to-use-power-query-and-power-pivot-in-excel-42d895c2-d1d7-41d0-88da-d1ed7ecc102d'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Support: Power Query and Power Pivot in Excel
            </a>
            .
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Dashboards, automation or financial models: which do you need?</h2>
          <p className='text-lead'>
            Use this table to pick the hire path. Mixing them into one vague project usually wastes
            budget.
          </p>
          <div className='blog-table-wrap'>
            <table>
              <caption className='sr-only'>
                Comparison of Excel dashboard development, Excel automation, financial modeling, and
                VBA development
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
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            Button-driven macros that sit under a dashboard often use{' '}
            <Link href='/vba-development' className='text-link'>
              VBA development
            </Link>
            . The dashboard page stays focused on the reporting surface and refresh design. If you
            need both a scorecard and a Friday email pack, I can sequence the work: dashboard first,
            then automation around the same data.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Related work</h2>
          <p className='text-lead'>
            These published case studies show Excel and Access reporting work from real client
            projects.
          </p>
          <p className='text-muted'>
            Construction weekly packs, job costing WIP views, and distribution ops workbooks are the
            closest examples. Each one started from messy multi-file Excel work and ended with a
            reporting surface the team could trust.
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
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Excel dashboard FAQ</h2>
          <p className='text-lead'>
            Direct answers for buyers who need an Excel dashboard developer for small business or
            mid-size operations teams.
          </p>
          <div className='stack stack--lg'>
            {FAQS.map((faq) => (
              <article key={faq.question} className='card'>
                <h3>{faq.question}</h3>
                <p className='text-muted'>{faq.body}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            Post-handover support and how changes are handled are confirmed in your written quote.
          </p>
        </div>
      </section>

      <ServiceRelatedSection groups={RELATED_GROUPS} />

      <ServiceFinalCTASection
        heading='Need an Excel dashboard your team can refresh?'
        body={`I have ${TRUST.years} years building Excel tools that operations and finance teams actually open. Book a free consultation with ${CONSULTANTS.displayName}. Bring a sample export and the questions the dashboard must answer.`}
      />
    </div>
  );
}
