import Link from 'next/link';
import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import Button from '../../components/ui/Button/Button';
import {
  ServiceFinalCTASection,
  ServiceRelatedSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
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

const CANONICAL = 'https://excelaccessconsultant.com/excel-dashboard-development';
const PROVIDER_ID = 'https://excelaccessconsultant.com/#localbusiness';
const sectionStyle = { paddingBlock: '3rem' };

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
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: DASHBOARD_FAQS.map((faq) => ({
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
      description:
        'Excel dashboard development services for custom KPI workbooks that refresh from your files and databases.',
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

export default function ExcelDashboardDevelopment() {
  return (
    <div className='page'>
      <ServicePageTracker service='excel-dashboard-development' />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className='page-hero'>
        <div className='container'>
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
        <h2 id='answer-block' className='sr-only'>
          What is an Excel dashboard developer and what do they build?
        </h2>
        <p>
          An Excel dashboard developer builds a workbook that answers fixed business questions with
          charts, PivotTables, and filters. Excel dashboard development services cover the data
          connections, KPI layout, refresh steps, and handover notes so your team can run the file
          without hiring the developer again each month.
        </p>
        <p>
          Excel Access Consultant (EAC) builds these as fixed-price Excel projects. You receive the
          finished file and own it. This page is for a maintained reporting tool, not a one-off chart
          paste. A proper build plans named ranges, refresh steps, and who can open the file when
          next month&apos;s CSV arrives.
        </p>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>What Excel dashboard development services build</h2>
          <p className='text-lead'>
            Custom Excel dashboards for the reporting jobs already common in EAC client work:
            construction, distribution, and finance operations.
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
            job margin. A PivotTable summarizes rows into groups you can filter. Slicers are clickable
            filters that drive those PivotTables and charts together.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Where the data comes from</h2>
          <p className='text-lead'>
            Dashboards only work when the inputs are known. EAC already connects Excel to the sources
            below on existing automation and reporting work.
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
            supports those features, a Power Query and Power Pivot consultant build can refresh
            instead of being rebuilt each month.
          </p>
          <p className='text-muted'>
            {'{{CONFIRM: confirm Power Query and Power Pivot as a standard EAC dashboard delivery method}}'}{' '}
            Until confirmed in writing for your project, refresh may also use VBA helpers and
            connections to Access or SQL Server, which this site already offers under{' '}
            <Link href='/excel-automation' className='text-link'>
              Excel automation
            </Link>
            . An Excel dashboard that refreshes from your data should not require re-pasting every
            monthly export into the chart sheet.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>How a dashboard gets built</h2>
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
            . Automated Excel reports that only need a PDF emailed after consolidation often sit on
            the automation page. Interactive scorecards sit here.
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
            governed access, and the org standard is already Power BI. EAC does not list Power BI
            delivery as a service on this site. An Excel KPI dashboard developer engagement here
            stays inside Microsoft Excel.
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
            These case studies show Excel and Access reporting work already published on the site.
            Facts below match those pages only.
          </p>
          <p className='text-muted'>
            Construction weekly packs, job costing WIP views, and distribution ops workbooks are the
            closest published examples. Each one started from messy multi-file Excel work and ended
            with a reporting surface the team could trust.
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
            {DASHBOARD_FAQS.map((faq) => (
              <article key={faq.question} className='card'>
                <h3>{faq.question}</h3>
                <p className='text-muted'>
                  {faq.question === 'How much does a custom Excel dashboard cost?' ? (
                    <>
                      Cost follows scope: number of data sources, cleanup needed, KPI count, chart
                      layout, and whether VBA refresh or email steps are included. Fixed-price quotes
                      follow the same project bands on the{' '}
                      <Link href='/pricing' className='text-link'>
                        pricing
                      </Link>{' '}
                      page. This page does not list a separate dashboard rate.
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            {'{{CONFIRM: post-handover support window and change process for dashboard projects}}'}{' '}
            Site-wide project pages already describe a 30-day post-delivery window for build work;
            confirm if dashboard engagements use the same rule.
          </p>
        </div>
      </section>

      <ServiceRelatedSection groups={RELATED_GROUPS} />

      <ServiceFinalCTASection
        heading='Ready for automated Excel reports your team can refresh?'
        body={`I have ${TRUST.years} years building Excel tools that operations and finance teams actually open. Book a free consultation with ${CONSULTANTS.displayName}. Bring a sample export and the questions the dashboard must answer.`}
      />
    </div>
  );
}
