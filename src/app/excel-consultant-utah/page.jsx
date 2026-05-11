'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';

export default function ExcelConsultantUtah() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ExcelAccessConsultant.com',
    description:
      'Excel VBA and Access Database consultant based in Springville, Utah. Serving businesses across Utah with custom automation, database development, and financial modeling solutions.',
    founder: {
      '@type': 'Person',
      name: 'Robert Terry',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Springville',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.1652,
      longitude: -111.6107,
    },
    telephone: '801-616-3702',
    email: 'rob@excelaccessconsultant.com',
    url: 'https://excelaccessconsultant.com',
    areaServed: [
      { '@type': 'State', name: 'Utah' },
      { '@type': 'City', name: 'Salt Lake City' },
      { '@type': 'City', name: 'Provo' },
      { '@type': 'City', name: 'Ogden' },
      { '@type': 'City', name: 'Park City' },
      { '@type': 'City', name: 'St. George' },
    ],
    priceRange: '$$',
    foundingDate: '2004',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
    knowsAbout: [
      'Excel VBA',
      'Microsoft Access',
      'Database Development',
      'Financial Modeling',
      'Business Automation',
    ],
  };

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title='Excel VBA Consultant in Utah | Robert Terry'
        description='Excel VBA consultant based in Springville, Utah. Serving Salt Lake City, Provo, Ogden, and all of Utah. 20+ years automating business processes. Free consultation.'
        url='https://excelaccessconsultant.com/excel-consultant-utah'
        ogTitle='Excel VBA Consultant in Utah | Robert Terry'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Excel VBA Consultant Serving Utah Businesses
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-4 leading-relaxed'>
            I&apos;m Robert Terry, an Excel VBA and Access Database consultant based in Springville, Utah. For over 20 years, I&apos;ve helped Utah businesses eliminate manual spreadsheet work, build custom databases, and automate reporting processes that save thousands of hours every year.
          </p>
          <p className='text-lg text-slate-700 mb-8 leading-relaxed'>
            Whether you&apos;re in Salt Lake City, Provo, Ogden, Park City, St. George, or anywhere in Utah, I provide the same hands-on consulting service — with the added benefit of being local. In-person meetings available in Utah County and the Wasatch Front.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button variant='primary' size='large' as={Link} href='/contact'>
              Schedule Free Consultation
            </Button>
            <Button variant='secondary' size='large' as='a' href='tel:8016163702'>
              Call 801-616-3702
            </Button>
          </div>
        </div>
      </section>

      {/* Services for Utah Businesses */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Services for Utah Businesses
          </h2>
          <p className='text-body-lg text-slate-700 mb-8'>
            From small businesses in Provo to enterprise teams in Salt Lake City, I deliver solutions tailored to how Utah companies actually work. Every project includes training so your team can maintain and extend what I build.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Link href='/excel-automation' className='card group block'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900 group-hover:text-primary transition-colors'>
                Excel VBA Automation
              </h3>
              <p className='text-body-base text-slate-600'>
                Turn hours of manual Excel work into one-click automation. Report generation, data consolidation, multi-file processing, and dashboard updates — all handled automatically.
              </p>
            </Link>
            <Link href='/access-consulting' className='card group block'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900 group-hover:text-primary transition-colors'>
                Access Database Development
              </h3>
              <p className='text-body-base text-slate-600'>
                Custom Access databases that replace fragile spreadsheets. Multi-user forms, automated reports, and reliable data storage for your growing business.
              </p>
            </Link>
            <Link href='/vba-development' className='card group block'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900 group-hover:text-primary transition-colors'>
                VBA Development
              </h3>
              <p className='text-body-base text-slate-600'>
                Custom VBA code for Excel, Access, Word, and Outlook. From simple macros to full-scale applications with user forms, error handling, and documentation.
              </p>
            </Link>
            <Link href='/financial-modeling' className='card group block'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900 group-hover:text-primary transition-colors'>
                Financial Modeling
              </h3>
              <p className='text-body-base text-slate-600'>
                Budgets, forecasts, and scenario analyses built in Excel. Clean structure, clear assumptions, and automated updates so your models stay accurate.
              </p>
            </Link>
            <Link href='/database-migration' className='card group block'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900 group-hover:text-primary transition-colors'>
                Database Migration
              </h3>
              <p className='text-body-base text-slate-600'>
                Migrate from Access to SQL Server, cloud platforms, or modern web apps. Preserve your data integrity and business logic through the transition.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hire a Local Consultant */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Why Hire a Local Utah Consultant
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                  Same Time Zone, Same Business Hours
                </h3>
                <p className='text-body-base text-slate-600'>
                  No waiting overnight for responses. I work Mountain Time, same as you. When you have a question or need a quick change, I&apos;m available during your business hours — not on the other side of the world.
                </p>
              </div>
              <div>
                <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                  In-Person Meetings Available
                </h3>
                <p className='text-body-base text-slate-600'>
                  Based in Springville, I can meet face-to-face for kickoff meetings, training sessions, or complex requirements gathering. Available throughout Utah County and the Wasatch Front. Remote meetings work great too for clients statewide.
                </p>
              </div>
            </div>
            <div className='space-y-6'>
              <div>
                <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                  Understands Utah Business Landscape
                </h3>
                <p className='text-body-base text-slate-600'>
                  From construction companies in Lehi to financial firms in Salt Lake, I understand how Utah businesses operate. I&apos;ve worked with local manufacturers, healthcare providers, property managers, and tech startups across the state.
                </p>
              </div>
              <div>
                <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                  Ongoing Local Support
                </h3>
                <p className='text-body-base text-slate-600'>
                  Your automation isn&apos;t a one-and-done project. As your business grows and changes, I&apos;m here locally to update, expand, and support your solutions. Most of my Utah clients have worked with me for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            How It Works
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                1
              </div>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Free Consultation
              </h3>
              <p className='text-body-base text-slate-600'>
                We talk through your current process, identify bottlenecks, and discuss what automation can do. 30 minutes, no obligation, no sales pressure.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                2
              </div>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Fixed-Price Proposal
              </h3>
              <p className='text-body-base text-slate-600'>
                You get a clear scope document with a fixed price and timeline. No hourly billing surprises. You know exactly what you&apos;re getting and what it costs before we start.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4'>
                3
              </div>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Build, Train & Support
              </h3>
              <p className='text-body-base text-slate-600'>
                I build and test your solution, train your team, and provide documentation. After delivery, I&apos;m available for questions and adjustments as your needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            Serving All of Utah
          </h2>
          <p className='text-body-lg text-slate-700 mb-6'>
            While I&apos;m based in Springville (Utah County), I serve clients throughout the entire state. Most projects are handled remotely with screen-sharing and phone calls. In-person meetings are available along the Wasatch Front.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              'Salt Lake City',
              'Provo',
              'Ogden',
              'Park City',
              'St. George',
              'Logan',
              'Lehi',
              'Orem',
              'Sandy',
              'West Jordan',
              'Draper',
              'American Fork',
            ].map((city) => (
              <div key={city} className='text-body-base text-slate-700 flex items-center gap-2'>
                <span className='text-primary font-bold'>•</span> {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-12 md:py-16 bg-primary'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-white'>
            Schedule a Free Consultation
          </h2>
          <p className='text-body-lg text-white/90 mb-8'>
            Let&apos;s discuss your Excel or Access project. 30 minutes, no cost, no obligation. I&apos;ll tell you exactly what&apos;s possible and what it would take.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button variant='secondary' size='large' as={Link} href='/contact'>
              Contact Me Online
            </Button>
            <Button variant='secondary' size='large' as='a' href='tel:8016163702'>
              Call 801-616-3702
            </Button>
          </div>
          <p className='text-white/80 text-body-sm mt-6'>
            Or email directly:{' '}
            <a href='mailto:rob@excelaccessconsultant.com' className='underline text-white'>
              rob@excelaccessconsultant.com
            </a>
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className='py-8 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-md font-bold mb-4 font-display text-slate-900'>
            Learn More
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Link href='/excel-automation' className='text-primary hover:underline font-medium'>
              Excel Automation Services
            </Link>
            <Link href='/access-consulting' className='text-primary hover:underline font-medium'>
              Access Database Consulting
            </Link>
            <Link href='/vba-development' className='text-primary hover:underline font-medium'>
              VBA Development
            </Link>
            <Link href='/case-studies' className='text-primary hover:underline font-medium'>
              Case Studies
            </Link>
            <Link href='/contact' className='text-primary hover:underline font-medium'>
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
