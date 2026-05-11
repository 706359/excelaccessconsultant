import Layout from './components/Layout';
import './styles/global.css';

// Note: Using IBM Plex Sans from global.css, not Inter

export const metadata = {
  metadataBase: new URL('https://excelaccessconsultant.com'),
  title: 'Excel VBA Consultant & Access Database Consultant | Robert Terry',
  description:
    'Excel VBA and Access database consultant with 20+ years experience. Fix broken spreadsheets, automate reports, build stable databases. Fixed price. Free 30-min consultation.',
  authors: [{ name: 'ExcelAccessConsultant' }],
  openGraph: {
    type: 'website',
    url: 'https://excelaccessconsultant.com/',
    title: 'Excel VBA Consultant & Access Database Consultant | Robert Terry',
    description:
      'Excel VBA and Access database consultant with 20+ years experience. Fix broken spreadsheets, automate reports, build stable databases. Fixed price. Free 30-min consultation.',
    images: [
      {
        url: 'https://excelaccessconsultant.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ExcelAccessConsultant - Excel VBA & Access Database Consultant',
      },
    ],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel VBA Consultant & Access Database Consultant | Robert Terry',
    description:
      'Excel VBA and Access database consultant with 20+ years experience. Fix broken spreadsheets, automate reports, build stable databases. Fixed price. Free 30-min consultation.',
    images: ['https://excelaccessconsultant.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://excelaccessconsultant.com/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Google Fonts - IBM Plex Sans */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
        {/* Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              try {
                gtag('consent', 'default', {
                  'analytics_storage': 'denied'
                });
                gtag('js', new Date());
                gtag('config', 'G-9ZT461HGG8', {
                  'send_page_view': true
                });
              } catch (error) {
                console.debug('Google Analytics initialization blocked:', error);
              }
            `,
          }}
        />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-9ZT461HGG8' />

        {/* Structured Data - schema.org LocalBusiness + Person */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://excelaccessconsultant.com/#localbusiness',
                  name: 'ExcelAccessConsultant',
                  url: 'https://excelaccessconsultant.com',
                  logo: 'https://excelaccessconsultant.com/logo.png',
                  image: 'https://excelaccessconsultant.com/logo.png',
                  description:
                    'Excel VBA and Access database consultant with 20+ years experience serving businesses nationwide.',
                  telephone: '+18016163702',
                  email: 'rob@excelaccessconsultant.com',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Springville',
                    addressRegion: 'UT',
                    addressCountry: 'US',
                  },
                  areaServed: 'US',
                  priceRange: '$90/hour',
                  openingHours: 'Mo-Fr 09:00-17:00',
                  sameAs: [],
                },
                {
                  '@type': 'Person',
                  name: 'Robert Terry',
                  jobTitle: 'Excel VBA & Access Database Consultant',
                  url: 'https://excelaccessconsultant.com/about',
                  worksFor: {
                    '@type': 'LocalBusiness',
                    name: 'ExcelAccessConsultant',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Springville',
                    addressRegion: 'UT',
                  },
                  knowsAbout: [
                    'Excel VBA',
                    'Microsoft Access',
                    'SQL Server',
                    'Financial Modeling',
                    'Database Migration',
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
