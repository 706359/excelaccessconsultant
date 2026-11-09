import Link from 'next/link';
import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import FAQSchema from '../../components/SEO/FAQSchema';
import Button from '../../components/ui/Button/Button';
import {
  MidPageCTA,
  ServiceFinalCTASection,
  ServiceRelatedSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
import { BRAND_LOGO_OG } from '../../config/brand';
import {
  ARCHITECTURE_ROWS,
  PAGE_UPDATED,
  PROOF_CASES,
  RELATED_GROUPS,
  WEB_DELIVERABLES,
  WEB_FAQS,
  WEB_SIGNS,
  WEB_STEPS,
} from '../../constants/accessToWebAppMigrationPage';
import { CONSULTANTS, CTA, TRUST } from '../../constants/site';

const SITE = 'https://excelaccessconsultant.com';
const CANONICAL = `${SITE}/access-to-web-app-migration`;
const PROVIDER_ID = `${SITE}/#localbusiness`;
const sectionStyle = { paddingBlock: '3rem' };

const META_TITLE = 'Convert Access Database to Web App | Fixed Price | EAC';
const META_DESCRIPTION =
  'Convert an Access database to a web app: SQL Server/Azure SQL, browser-based forms, VBA rewritten. Fixed-price quotes from $3,000. Free consultation.';

/* ------------------------------------------------------------------ */
/* Next.js App Router metadata                                         */
/* (If your layout uses a title template, `absolute` prevents          */
/*  "… | EAC | EAC" duplication.)                                      */
/* ------------------------------------------------------------------ */
export const metadata = {
  metadataBase: new URL(SITE),
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  // Google ignores the keywords meta tag; kept for Bing/other crawlers and internal documentation.
  keywords: [
    'convert Access database to web application',
    'migrate Access to web app',
    'Access to web app migration services',
    'replace Access with web application',
    'Access database remote multi-user web access',
    'Access web conversion consultant',
    'Access to SQL Server migration',
    'Access to Azure SQL migration',
    'Access database to .NET web application',
    'Access to Power Apps alternative',
    'Access web app migration cost',
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
    title: 'Convert Access Database to Web Application | Excel Access Consultant',
    description: META_DESCRIPTION,
    locale: 'en_US',
    images: [BRAND_LOGO_OG],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert Access Database to Web Application | EAC',
    description: META_DESCRIPTION,
    images: [BRAND_LOGO_OG.url],
  },
};

/* ------------------------------------------------------------------ */
/* Structured data (single @graph, cross-linked with @id)              */
/* FAQPage schema is still emitted by <FAQSchema />.                   */
/* Provider references the site LocalBusiness @id (root layout).       */
/* ------------------------------------------------------------------ */
const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Access to Web Application Migration',
      serviceType: 'Access database to web application conversion',
      url: CANONICAL,
      description:
        'Convert an Access database to a web application: migrate data to SQL Server or Azure SQL, rebuild forms as browser-based interfaces, and rewrite VBA as application logic. Fixed-price projects from Excel Access Consultant (EAC).',
      provider: { '@id': PROVIDER_ID },
      areaServed: { '@type': 'Country', name: 'United States' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Focused Access migration (SQL / hybrid)',
          url: CANONICAL,
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 3000,
            maxPrice: 5000,
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'Offer',
          name: 'Advanced Access migration with form work',
          url: CANONICAL,
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 5000,
            maxPrice: 12000,
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'Offer',
          name: 'Enterprise Access modernization',
          url: CANONICAL,
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 12000,
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'Offer',
          name: 'Custom web application rebuild (typically $10,000–$25,000+)',
          url: CANONICAL,
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 10000,
            priceCurrency: 'USD',
          },
        },
      ],
      mainEntityOfPage: { '@id': `${CANONICAL}#webpage` },
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      name: 'Convert Access Database to Web Application',
      url: CANONICAL,
      description: META_DESCRIPTION,
      dateModified: PAGE_UPDATED,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Excel Access Consultant',
        url: SITE,
      },
      about: { '@id': `${CANONICAL}#service` },
      mainEntity: { '@id': `${CANONICAL}#service` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      author: { '@type': 'Person', name: CONSULTANTS.displayName },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Access to Web App Migration',
          item: CANONICAL,
        },
      ],
    },
  ],
};

// Escape "<" so no string inside the JSON can close the script tag.
const jsonLd = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

function formatUpdated(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

const COST_ROWS = [
  {
    path: 'Focused migration: SQL Server back end, Access front end',
    range: '$3,000–$5,000',
    drivers: 'Number of tables, data volume, light VBA',
  },
  {
    path: 'Advanced migration with form and report work',
    range: '$5,000–$12,000',
    drivers: 'Forms, reports, VBA complexity, user roles',
  },
  {
    path: 'Enterprise or Azure-oriented modernization',
    range: '$12,000+',
    drivers: 'Integrations, security controls, multiple workflows',
  },
  {
    path: 'Custom web application rebuild (browser UI replaces Access screens)',
    range: 'About $10,000–$25,000+',
    drivers: 'Every screen, report, and macro redesigned; longer timeline',
  },
];

export default function AccessToWebAppMigration() {
  return (
    <div className='page'>
      <ServicePageTracker service='access-to-web-app-migration' />
      <FAQSchema faqs={WEB_FAQS} />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: jsonLd(graphSchema) }}
      />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Convert Access Database to Web Application</h1>
          <p className='page-hero__lead'>
            Excel Access Consultant (EAC) converts your Access database to a web application. Data
            moves to SQL Server or Azure SQL, forms are rebuilt as browser-based screens, and VBA
            becomes application logic, so remote teams stop depending on a fragile shared .accdb
            file.
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
            <Link href='/about'>Written and reviewed by {CONSULTANTS.displayName}</Link>
            <span aria-hidden='true'>•</span>
            <time dateTime={PAGE_UPDATED}>Last updated: {formatUpdated(PAGE_UPDATED)}</time>
          </div>
        </div>
      </section>

      <section className='container' style={sectionStyle} aria-labelledby='direct-answer'>
        <h2 id='direct-answer'>Can an Access database be converted to a web app?</h2>
        <p>
          Yes. You can convert an Access database to a web application by moving the tables to SQL
          Server or Azure SQL and rebuilding the forms as browser-based interfaces. Access itself
          does not run in a browser, and Microsoft retired Access web apps, so this is a planned
          rebuild of the user interface and VBA, not a file upload. EAC scopes that work at a fixed
          price after a free consultation.
        </p>
        <ul>
          <li>
            <strong>Data:</strong> tables move to SQL Server or Azure SQL; your original .accdb is
            kept untouched as a backup through testing.
          </li>
          <li>
            <strong>Interface:</strong> Access forms become web-based screens (or stay in Access on
            a hybrid SQL back end if that is enough).
          </li>
          <li>
            <strong>Logic:</strong> VBA and macros are rewritten as application logic.
          </li>
          <li>
            <strong>Price:</strong> fixed-price quotes, from about $3,000 for focused SQL/hybrid
            work to $10,000–$25,000+ for a full web UI rebuild.
          </li>
        </ul>
        <nav aria-label='On this page' className='text-muted' style={{ marginTop: '1.5rem' }}>
          <strong>On this page:</strong>{' '}
          <a href='#signs' className='text-link'>
            Signs to migrate
          </a>{' '}
          ·{' '}
          <a href='#deliverables' className='text-link'>
            What you get
          </a>{' '}
          ·{' '}
          <a href='#process' className='text-link'>
            Process
          </a>{' '}
          ·{' '}
          <a href='#architecture' className='text-link'>
            Architecture options
          </a>{' '}
          ·{' '}
          <a href='#cost' className='text-link'>
            Cost and timeline
          </a>{' '}
          ·{' '}
          <a href='#faq' className='text-link'>
            FAQ
          </a>
        </nav>
      </section>

      <section id='signs' className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Signs it is time to move Access to the web</h2>
          <p className='text-lead'>
            If several of these are true every week, staying on a desktop-only Access model is the
            risk, not a temporary inconvenience.
          </p>
          <div className='grid-2'>
            {WEB_SIGNS.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.symptom}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            Concurrency limits alone do not always require a web UI. See{' '}
            <Link href='/blog/can-access-handle-50-users' className='text-link'>
              whether Access can handle 50 users
            </Link>{' '}
            and{' '}
            <Link href='/blog/when-to-migrate-from-access' className='text-link'>
              when to migrate from Access
            </Link>
            . Corruption that keeps returning may need{' '}
            <Link href='/access-database-repair' className='text-link'>
              Access database repair
            </Link>{' '}
            before any modernization.
          </p>
        </div>
      </section>

      <section id='deliverables' className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>What gets migrated when you replace Access with a web application</h2>
          <p className='text-lead'>
            Access to web app migration services deliver a working system of record your staff can
            use, not a slide deck. Here is what clients typically receive.
          </p>
          <div className='grid-2'>
            {WEB_DELIVERABLES.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            Microsoft&apos;s own guidance is clear that tools like SSMA move tables and data, not
            forms, reports, macros, or VBA. See{' '}
            <a
              href='https://support.microsoft.com/en-us/access/migrate-an-access-database-to-sql-server'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Support: migrate an Access database to SQL Server
            </a>{' '}
            and{' '}
            <a
              href='https://learn.microsoft.com/en-us/sql/ssma/access/migrating-access-databases-to-sql-server-azure-sql-db-accesstosql'
              target='_blank'
              rel='noopener noreferrer'
              className='text-link'
            >
              Microsoft Learn: migrating Access databases to SQL Server and Azure SQL
            </a>
            . The UI and logic rebuild is where specialist delivery matters.
          </p>
        </div>
      </section>

      <section id='process' className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Our Access to web app migration process</h2>
          <p className='text-lead'>
            Same discipline as other EAC migrations: an honest readiness review, a fixed price after
            scope, a validated data move, then cutover with support.
          </p>
          <ol className='stack stack--lg' style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {WEB_STEPS.map((step, index) => (
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
            Split Access architecture often comes first. See{' '}
            <Link href='/blog/access-front-end-back-end-architecture' className='text-link'>
              Access front-end / back-end architecture
            </Link>
            . Ongoing Access work that is not a full web rebuild lives under{' '}
            <Link href='/access-consulting' className='text-link'>
              Access database consulting
            </Link>
            .
          </p>
        </div>
      </section>

      <section id='architecture' className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Architecture options: hybrid SQL, custom web, or Power Apps</h2>
          <p className='text-lead'>
            Move Access online only as far as the business needs. These paths compete on remote
            access, scale, customization, and ongoing cost, not marketing labels.
          </p>
          <div className='blog-table-wrap'>
            <table>
              <caption className='sr-only'>
                Comparison of Access plus SQL Server hybrid, custom web application, and Power Apps
                or Dataverse paths
              </caption>
              <thead>
                <tr>
                  <th scope='col'>Option</th>
                  <th scope='col'>Remote access</th>
                  <th scope='col'>User scale</th>
                  <th scope='col'>Customization</th>
                  <th scope='col'>Ongoing cost drivers</th>
                  <th scope='col'>Best fit</th>
                </tr>
              </thead>
              <tbody>
                {ARCHITECTURE_ROWS.map((row) => (
                  <tr key={row.option}>
                    <th scope='row'>
                      <Link href={row.linkHref} className='text-link'>
                        {row.option}
                      </Link>
                    </th>
                    <td>{row.remote}</td>
                    <td>{row.scale}</td>
                    <td>{row.customization}</td>
                    <td>{row.costDrivers}</td>
                    <td>
                      {row.fit}{' '}
                      <Link href={row.linkHref} className='text-link'>
                        ({row.linkLabel})
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='text-muted' style={{ marginTop: '1.25rem' }}>
            EAC delivers SQL Server and Azure SQL back ends, hybrid Access front ends, and
            web-based form rebuilds as described on{' '}
            <Link href='/database-migration' className='text-link'>
              database migration and modernization
            </Link>
            . The technology used for a custom web interface is chosen per project during discovery,
            based on your users, integrations, and IT environment.
          </p>

          <h3>Power Apps / Dataverse as one alternative</h3>
          <p>
            Power Apps can be the right answer when mobile Microsoft 365 workflows matter more than
            deep Access-style reporting. It is not an automatic upgrade: rebuild cost plus per-user
            or per-app licensing often exceeds keeping Access (or a hybrid SQL back end). Read the
            honest comparison in{' '}
            <Link href='/blog/access-vs-power-apps-when-to-stay-on-access' className='text-link'>
              Access vs Power Apps: when to stay on Access
            </Link>
            . This page is for buyers who need a commercial web-application path, not a Power
            Platform sales pitch.
          </p>
        </div>
      </section>

      <MidPageCTA
        heading='Need Access database remote multi-user web access?'
        subtext='Send the .accdb (or a sanitized copy) and who uses it. I will recommend hybrid SQL, a web UI rebuild, or staying on optimized Access, then quote a fixed price.'
      />

      <section id='proof' className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Proof from Access modernization projects</h2>
          <p className='text-lead'>
            The published case studies below are SQL Server / hybrid migrations, not claims that
            those clients received a full browser rebuild. They show EAC&apos;s data migration,
            cutover, and multi-user delivery. Web UI rebuilds are scoped when browser access is a
            hard requirement.
          </p>
          <div className='grid-3'>
            {PROOF_CASES.map((study) => (
              <article key={study.href} className='related-tile stretched-card'>
                <p className='card__metric' style={{ marginBottom: '0.5rem' }}>
                  {study.metric}
                </p>
                <p className='text-muted-sm' style={{ marginBottom: '0.5rem' }}>
                  {study.note}
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

      <section id='cost' className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>How much does it cost to convert an Access database to a web application?</h2>
          <p>
            Most Access to web app projects fall between about $3,000 and $25,000+, depending on how
            far the rebuild goes. Hybrid SQL-back-end projects take roughly 3–12 weeks; a full web
            UI rebuild takes longer and is timed after the scoping review.
          </p>
          <div className='blog-table-wrap'>
            <table>
              <caption className='sr-only'>
                Typical fixed-price ranges for Access to SQL Server hybrid migration and custom web
                application rebuilds
              </caption>
              <thead>
                <tr>
                  <th scope='col'>Path</th>
                  <th scope='col'>Typical investment</th>
                  <th scope='col'>What moves the price</th>
                </tr>
              </thead>
              <tbody>
                {COST_ROWS.map((row) => (
                  <tr key={row.path}>
                    <th scope='row'>{row.path}</th>
                    <td>{row.range}</td>
                    <td>{row.drivers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.25rem' }}>
            Drivers that move both budget and calendar: the number of forms and reports, VBA
            complexity, data volume, integrations, user roles, and any compliance-driven process
            controls your IT team requires. The hybrid bands match those published for{' '}
            <Link href='/database-migration' className='text-link'>
              Access database migration
            </Link>
            . Power Apps rebuilds can cost more once licensing is included.
          </p>
          <p className='text-muted'>
            See the{' '}
            <Link href='/pricing' className='text-link'>
              pricing page
            </Link>
            , review{' '}
            <Link href='/blog/access-sql-server-migration-cost' className='text-link'>
              Access to SQL Server migration cost factors
            </Link>
            , estimate operational drag with the{' '}
            <Link href='/resources/calculator' className='text-link'>
              spreadsheet ROI calculator
            </Link>
            , or skim the{' '}
            <Link href='/faq' className='text-link'>
              FAQ
            </Link>{' '}
            before you book.
          </p>
        </div>
      </section>

      <section className='container' style={sectionStyle} id='security'>
        <h2>Security, access, and data safety</h2>
        <p>
          On server-backed projects, EAC sets up SQL Server (or Azure SQL) logins, roles, and
          permissions so view and edit rights follow your business rules, not a single shared file
          password. Migrations keep the original Access database as an untouched backup through
          testing. Cloud SQL paths add the backup and remote-access posture that comes with a
          managed server database. EAC does not claim HIPAA, SOC 2, or other formal certifications
          on this site; if your industry needs a specific control framework, that scope is defined
          with your IT team during discovery.
        </p>
      </section>

      <section id='when-not' className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>When not to migrate to a web app</h2>
          <p>
            If the database mostly works, users are under practical Access concurrency limits, and
            everyone is fine on desktop PCs, a full web rebuild is usually the wrong spend. Fix
            crashes, indexes, and split architecture first. See{' '}
            <Link href='/blog/access-database-performance-optimization' className='text-link'>
              Access database performance optimization
            </Link>{' '}
            and{' '}
            <Link href='/blog/can-access-handle-50-users' className='text-link'>
              Access concurrency limits
            </Link>
            . Many teams only need a SQL Server back end while keeping Access screens (
            <Link href='/database-migration' className='text-link'>
              database migration
            </Link>
            ). I talk clients out of migration when optimization is enough, the same advice as in{' '}
            <Link href='/blog/when-to-migrate-from-access' className='text-link'>
              when to migrate from Access
            </Link>{' '}
            and the layered approach in{' '}
            <Link href='/blog/how-to-modernize-access-database' className='text-link'>
              how to modernize an Access database
            </Link>
            .
          </p>
        </div>
      </section>

      <section id='faq' className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Access to web app migration FAQ</h2>
          <p className='text-lead'>
            Direct answers for buyers evaluating an Access web conversion consultant.
          </p>
          <div className='stack stack--lg'>
            {WEB_FAQS.map((faq) => (
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
        heading='Ready to modernize a legacy Access database for the browser?'
        body={`${TRUST.years} years helping US teams stabilize Access and migrate when the platform no longer fits. Book a free consultation with ${CONSULTANTS.displayName}: you get an honest path (optimize, hybrid SQL, or web UI), a fixed-price plan when work is justified, and ownership of what is delivered.`}
      />
    </div>
  );
}
