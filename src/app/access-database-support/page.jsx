import Link from 'next/link';
import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import Button from '../../components/ui/Button/Button';
import {
  ServiceFinalCTASection,
  ServiceRelatedSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
import { BRAND_LOGO_OG } from '../../config/brand';
import {
  PAGE_REVIEWED,
  PROOF_CASES,
  RELATED_GROUPS,
  SERVICE_COMPARE,
  SUPPORT_AUDIENCE,
  SUPPORT_COVERS,
  SUPPORT_FAQS,
  SUPPORT_STEPS,
} from '../../constants/accessDatabaseSupportPage';
import { CONSULTANTS, CTA, TRUST } from '../../constants/site';

const SITE = 'https://excelaccessconsultant.com';
const CANONICAL = `${SITE}/access-database-support`;
const PROVIDER_ID = `${SITE}/#localbusiness`;
// Prefer dedicated OG art when present; fall back to brand logo so shares are never blank.
const OG_IMAGE = BRAND_LOGO_OG;
const sectionStyle = { paddingBlock: '3rem' };

const PAGE_TITLE = 'Microsoft Access Support Services | Excel Access Consultant';
const PAGE_DESCRIPTION =
  'Ongoing Microsoft Access support: bug fixes, multi-user locking, reports, backups and maintenance for live .accdb databases. $90/hr or fixed-price quotes.';

export const metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'Microsoft Access support services',
    'Access database support',
    'Access database maintenance',
    'Access database troubleshooting',
    'Access developer on retainer',
    'legacy Access database support',
    'inherited Access database support',
    'Access multi-user locking errors',
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
 */
const FAQ_OVERRIDES = {
  'How much does Access database support cost?': {
    text: 'Cost depends on urgency, how complex the VBA and linked tables are, and whether you need one fix or ongoing help. Advisory and diagnostic work is $90/hour. Larger scoped changes get a fixed-price quote before coding starts. See the pricing page for how quotes are structured.',
    body: (
      <>
        Cost depends on urgency, how complex the VBA and linked tables are, and whether you need one
        fix or ongoing help. Advisory and diagnostic work is $90/hour. Larger scoped changes get a
        fixed-price quote before coding starts. See the{' '}
        <Link href='/pricing' className='text-link'>
          pricing
        </Link>{' '}
        page for how quotes are structured.
      </>
    ),
  },
  'How many users can Access handle?': {
    text: 'With a proper split design, many teams run in the teens to low dozens of concurrent users. Past that range, performance and locking risk rise. I cover practical limits in the blog post on Access with 50 users.',
    body: (
      <>
        With a proper split design, many teams run in the teens to low dozens of concurrent users.
        Past that range, performance and locking risk rise. I cover practical limits in the blog post
        on{' '}
        <Link href='/blog/can-access-handle-50-users' className='text-link'>
          Access with 50 users
        </Link>
        .
      </>
    ),
  },
  'What if the database is corrupted?': {
    text: 'That is repair work. I assess whether compact and repair, recovery, or a rebuild is needed, then quote before recovery starts. Use Access database repair for files that will not open or keep crashing.',
    body: (
      <>
        That is repair work. I assess whether compact and repair, recovery, or a rebuild is needed,
        then quote before recovery starts. Use{' '}
        <Link href='/access-database-repair' className='text-link'>
          Access database repair
        </Link>{' '}
        for files that will not open or keep crashing.
      </>
    ),
  },
};

const FAQS = SUPPORT_FAQS.map((faq) => {
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
      name: 'Microsoft Access Support Services',
      serviceType: 'Microsoft Access support services',
      url: CANONICAL,
      description:
        'Ongoing Microsoft Access support for bug fixes, multi-user locking issues, small changes, reports, backups, and maintenance on live .accdb systems.',
      provider: { '@id': PROVIDER_ID },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Small businesses that run daily operations on Microsoft Access',
      },
      offers: {
        '@type': 'Offer',
        name: 'Advisory and diagnostic work',
        url: `${SITE}/pricing`,
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '90',
          priceCurrency: 'USD',
          unitText: 'HOUR',
        },
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
          name: 'Microsoft Access Support Services',
          item: CANONICAL,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Microsoft Access Support Services',
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
        jobTitle: 'Microsoft Access Consultant',
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

export default function AccessDatabaseSupport() {
  return (
    <div className='page'>
      <ServicePageTracker service='access-database-support' />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLdString }} />

      <section className='page-hero'>
        <div className='container'>
          <nav aria-label='Breadcrumb' className='text-muted-sm' style={{ marginBottom: '1rem' }}>
            <Link href='/' className='text-link'>
              Home
            </Link>{' '}
            <span aria-hidden='true'>/</span>{' '}
            <span aria-current='page'>Microsoft Access Support Services</span>
          </nav>
          <h1 className='page-hero__title'>Microsoft Access Support Services</h1>
          <p className='page-hero__lead'>
            Keep a live Microsoft Access database working: bug fixes, locking-error fixes, small
            changes, and maintenance when your team depends on it every day.
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
        <h2 id='answer-block'>What are Microsoft Access support services?</h2>
        <p>
          Microsoft Access support services are ongoing help for a database your business already
          uses. I fix bugs, locking conflicts, slow forms, and small change requests. I also check
          backups and document how the system works. This is Access database support for day-to-day
          operations, not a full rewrite.
        </p>
        <p>
          Excel Access Consultant (EAC) works remotely with copies of your .accdb when possible, for
          businesses in the United States, Canada, and the United Kingdom. You stay in control of
          production cutover. Advisory work is billed at $90/hour. Larger change sets get a
          fixed-price quote before coding starts.
        </p>
        <div className='highlight-box' style={{ marginTop: '1.5rem' }}>
          <p>
            <strong>Quick facts</strong>
          </p>
          <ul className='highlight-box__list'>
            <li>
              <strong>Best for:</strong> live .accdb systems with bugs, locking errors, slow forms,
              or pending small changes.
            </li>
            <li>
              <strong>Delivery:</strong> remote, working on a copy of your file where possible.
            </li>
            <li>
              <strong>Rate:</strong> $90/hour for advisory and diagnostic work; fixed-price quotes
              for larger changes.
            </li>
            <li>
              <strong>Engagement:</strong> on-demand, monthly retainer, or project plus support.
            </li>
            <li>
              <strong>Not covered here:</strong> corrupted files (see Access database repair),
              rebuilds, and SQL Server migrations.
            </li>
          </ul>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>What Microsoft Access support services cover</h2>
          <p className='text-lead'>
            Support keeps your .accdb usable. It is Access database maintenance services plus
            troubleshooting when something breaks mid-day.
          </p>
          <div className='grid-2'>
            {SUPPORT_COVERS.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            If the file is corrupted or will not open, that is{' '}
            <Link href='/access-database-repair' className='text-link'>
              Access database repair
            </Link>
            , not routine support.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Who this is for</h2>
          <p className='text-lead'>
            Access support for small business teams that rely on one system and cannot wait for a
            rebuild project to start.
          </p>
          <div className='grid-2'>
            {SUPPORT_AUDIENCE.map((item) => (
              <article key={item.title} className='card card--interactive'>
                <h3>{item.title}</h3>
                <p className='text-muted'>{item.description}</p>
              </article>
            ))}
          </div>
          <p className='text-muted' style={{ marginTop: '1.5rem' }}>
            Inherited Access database support usually starts with a short review of the front end
            (forms, queries, reports, VBA) and the back end (tables on the network share or server).
            Linked tables are connections from the front end to those tables. A split database keeps
            those parts separate so more than one person can work at once with less file damage risk.
          </p>
          <p className='text-muted'>
            Multi-user Access means several people open the same data at the same time. Record
            locking decides whether one person can edit a row while another views it. When locking is
            wrong, staff see errors during busy periods even though the file looked fine the day
            before. Ongoing support for a legacy Access database focuses on those operating problems
            first.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>How Access database support works</h2>
          <p className='text-lead'>
            You get a clear path from the first call to a fixed change, with notes your team can
            keep.
          </p>
          <ol className='stack stack--lg' style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {SUPPORT_STEPS.map((step, index) => (
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
          <div className='highlight-box' style={{ marginTop: '1.5rem' }}>
            <p>
              <strong>Engagement options</strong>
            </p>
            <ul className='highlight-box__list'>
              <li>
                <strong>On-demand:</strong> fixes billed at $90/hour for diagnosis and short tasks.
              </li>
              <li>
                <strong>Monthly retainer:</strong> a set block of hours each month, quoted after a
                short review of your database.{' '}
                <Link href={CTA.primaryHref} className='text-link'>
                  Ask for a retainer quote
                </Link>
                .
              </li>
              <li>
                <strong>Project plus support:</strong> fixed-price build work, followed by a 30-day
                post-delivery support window, with advisory help after that.
              </li>
            </ul>
          </div>
          <p className='text-muted' style={{ marginTop: '1rem' }}>
            An Access developer on retainer is useful when change requests arrive every week. Pure
            firefighting can stay on-demand. An Access database retainer is not a blank check. I
            agree with you what hours cover, what rolls over, and what becomes a separate fixed-price
            project.
          </p>
          <p className='text-muted'>
            For a practical checklist you can run between support calls, use the{' '}
            <Link href='/blog/access-database-maintenance-checklist' className='text-link'>
              Access database maintenance checklist
            </Link>
            . It covers backups, compact and repair, front-end versions, and lock files.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Support, repair, consulting or migration: which one do you need?</h2>
          <p className='text-lead'>
            Pick the service that matches the problem. Mixing them on one page would hide the real
            next step.
          </p>
          <div className='blog-table-wrap'>
            <table>
              <caption className='sr-only'>
                Comparison of Access support, repair, consulting, and migration services
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
            Larger redesigns belong under{' '}
            <Link href='/access-consulting' className='text-link'>
              Access consulting
            </Link>
            . Moving tables to a SQL Server back end belongs under{' '}
            <Link href='/database-migration' className='text-link'>
              database migration
            </Link>
            .
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>When support is not enough</h2>
          <p>
            Support will not fix a platform limit. If concurrent users keep rising, the back-end file
            nears practical size limits, or remote staff need a browser instead of desktop Access, it
            is time to plan migration or modernization. Read{' '}
            <Link href='/blog/when-to-migrate-from-access' className='text-link'>
              when to migrate from Access
            </Link>{' '}
            and{' '}
            <Link href='/blog/can-access-handle-50-users' className='text-link'>
              whether Access can handle 50 users
            </Link>
            .
          </p>
          <p>
            Other signals: weekly corruption after network drops, report runtimes that block the
            warehouse or finance close, or IT requiring server-side backups you cannot get from a
            shared .accdb alone. For a SQL Server or Azure SQL back end while keeping Access forms,
            start with{' '}
            <Link href='/database-migration' className='text-link'>
              Access database migration
            </Link>
            . For a browser rebuild path, see{' '}
            <Link href='/access-to-web-app-migration' className='text-link'>
              Access to web app migration
            </Link>
            . Until those limits show up, Access database troubleshooting and light maintenance are
            usually the cheaper path.
          </p>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Related work</h2>
          <p className='text-lead'>
            These published case studies show Access systems that need stability, multi-user design,
            and ongoing care after go-live.
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
          <h2>Access database support FAQ</h2>
          <p className='text-lead'>
            Direct answers for owners who need ongoing support for a legacy Access database.
          </p>
          <div className='stack stack--lg'>
            {FAQS.map((faq) => (
              <article key={faq.question} className='card'>
                <h3>{faq.question}</h3>
                <p className='text-muted'>{faq.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceRelatedSection groups={RELATED_GROUPS} />

      <ServiceFinalCTASection
        heading='Need an Access database retainer or on-demand help?'
        body={`I have ${TRUST.years} years working on Microsoft Access systems that businesses run every day. Book a free consultation with ${CONSULTANTS.displayName}. Bring the error message and a copy of the file when you can.`}
      />
    </div>
  );
}
