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

const CANONICAL = 'https://excelaccessconsultant.com/access-to-web-app-migration';
const sectionStyle = { paddingBlock: '3rem' };

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Access to Web Application Migration',
  serviceType: 'Access database to web application conversion',
  url: CANONICAL,
  description:
    'Convert Access database to web application: migrate data to SQL Server or Azure SQL, rebuild forms as web-based interfaces, rewrite VBA as application logic. Fixed-price projects from Excel Access Consultant (EAC).',
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
      name: 'Focused Access migration (SQL / hybrid)',
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
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 12000,
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
      name: 'Access to Web App Migration',
      item: CANONICAL,
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Convert Access Database to Web Application',
  url: CANONICAL,
  description:
    'Convert Access database to web application with Excel Access Consultant. SQL/Azure back end, web forms, fixed-price migration.',
  dateModified: PAGE_UPDATED,
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Excel Access Consultant',
    url: 'https://excelaccessconsultant.com',
  },
  about: {
    '@type': 'Service',
    name: 'Access to Web Application Migration',
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

export default function AccessToWebAppMigration() {
  return (
    <div className='page'>
      <ServicePageTracker service='access-to-web-app-migration' />
      <FAQSchema faqs={WEB_FAQS} />
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
          <h1 className='page-hero__title'>
            Convert Access Database to Web Application
          </h1>
          <p className='page-hero__lead'>
            Hire Excel Access Consultant (EAC) to migrate Access to web app architecture—SQL Server
            or Azure SQL for data, web-based screens for your team—so remote users stop depending on
            a fragile shared .accdb file.
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
        <h2 id='direct-answer'>Can an Access database be converted to a web app?</h2>
        <p>
          Yes. You can convert Access database to web application systems by moving tables to SQL
          Server or Azure SQL and rebuilding forms as browser-based interfaces. Access itself does
          not run in a browser—Microsoft discontinued Access web apps—so this is a planned rebuild
          of UI and VBA, not an upload. Excel Access Consultant (EAC) scopes that work at a fixed
          price after a free consultation.
        </p>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Signs it is time to move Access to the web</h2>
          <p className='text-lead'>
            If several of these are true every week, staying on a desktop-only Access model is the
            risk—not a temporary inconvenience.
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
            Concurrency limits alone do not always require a web UI—see{' '}
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

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>What gets migrated when you replace Access with a web application</h2>
          <p className='text-lead'>
            Access to web app migration services deliver a working system of record your staff can
            use—not a slide deck. Here is what clients typically receive.
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
            Microsoft&apos;s own guidance is clear that tools like SSMA move tables and data—not
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
            . UI and logic rebuild is where specialist delivery matters.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Our Access to web app migration process</h2>
          <p className='text-lead'>
            Same discipline as other EAC migrations: honest readiness review, fixed price after
            scope, validated data move, then cutover with support.
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
            Split Access architecture often comes first—see{' '}
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

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Architecture options: hybrid SQL, custom web, or Power Apps</h2>
          <p className='text-lead'>
            Move Access online only as far as the business needs. These paths compete on remote
            access, scale, customization, and ongoing cost—not marketing labels.
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
            .{' '}
            <strong>
              [PLACEHOLDER: confirm EAC web-app stack and delivery model]
            </strong>{' '}
            — for example whether custom UI work is delivered primarily with .NET, another modern
            web stack, partnered build, or scoped case-by-case. Until confirmed, treat &quot;web
            forms / web-based interfaces&quot; as the accurate public claim.
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
            . This page is for buyers who need a commercial web-application path—not a Power
            Platform sales pitch.
          </p>
        </div>
      </section>

      <MidPageCTA
        heading='Need Access database remote multi-user web access?'
        subtext='Send the .accdb (or a sanitized copy) and who uses it. I will recommend hybrid SQL, a web UI rebuild, or staying on optimized Access—then quote a fixed price.'
      />

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Proof from Access modernization projects</h2>
          <p className='text-lead'>
            Published case studies below are SQL Server / hybrid migrations—not claims that those
            clients received a full browser rebuild. They show EAC&apos;s data migration, cutover,
            and multi-user delivery. Web UI rebuilds are scoped when browser access is a hard
            requirement.
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

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Cost and timeline to convert Access database to web application</h2>
          <p>
            Drivers that move both budget and calendar: number of forms and reports, VBA complexity,
            data volume, integrations, user roles, and any compliance-driven process controls your
            IT team requires. Hybrid SQL-back-end projects follow the migration bands already
            published for{' '}
            <Link href='/database-migration' className='text-link'>
              Access database migration
            </Link>
            : roughly $3,000–$5,000 for smaller scopes, $5,000–$12,000 when form/report work is
            included, and $12,000+ for large or Azure-oriented programs (about 3–12 weeks depending
            on complexity).
          </p>
          <p>
            Fuller rebuilds that replace Access with a web application UI typically cost more than
            hybrid alone. Planning content on this site cites about $10,000–$25,000+ for custom web
            or .NET-style front-end paths, with longer timelines when every screen and macro must be
            redesigned. Power Apps rebuilds can land higher still once licensing is included.
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

      <section className='container' style={sectionStyle}>
        <h2>Security, access, and data safety</h2>
        <p>
          On server-backed projects, EAC sets up SQL Server (or Azure SQL) logins, roles, and
          permissions so view/edit rights follow your business rules—not a single shared file
          password. Migrations keep the original Access database as an untouched backup through
          testing. Cloud SQL paths add the backup and remote-access posture that comes with a
          managed server database. EAC does not claim HIPAA, SOC 2, or other formal certifications
          on this site; if your industry needs a specific control framework, that scope is defined
          with your IT team during discovery.
        </p>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>When not to migrate to a web app</h2>
          <p>
            If the database mostly works, users are under practical Access concurrency limits, and
            everyone is fine on desktop PCs, a full web rebuild is usually the wrong spend. Fix
            crashes, indexes, and split architecture first—see{' '}
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
            ). I talk clients out of migration when optimization is enough—that is the same advice
            in{' '}
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

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Access to web app migration FAQ</h2>
          <p className='text-lead'>
            Direct answers for buyers evaluating Access web conversion consultant engagements.
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
        body={`${TRUST.years} years helping US teams stabilize Access and migrate when the platform no longer fits. Book a free consultation with ${CONSULTANTS.displayName}—you get an honest path (optimize, hybrid SQL, or web UI), a fixed-price plan when work is justified, and ownership of what is delivered.`}
      />
    </div>
  );
}
