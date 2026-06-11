import { BRAND_LOGO_OG } from '../config/brand';
import { CONSULTANTS } from '../constants/site';
import Layout from './components/Layout';
import './styles/global.css';

// Manrope primary; Plus Jakarta Sans fallback

export const metadata = {
  metadataBase: new URL('https://excelaccessconsultant.com'),
  title: `Microsoft Excel Access Consultant | Access Database Expert | ${CONSULTANTS.displayName}`,
  description:
    'Microsoft Access consultant with 20+ years experience. Database development, repair, migration, and Excel VBA automation. Fixed price. Free 30-min consultation.',
  authors: [{ name: 'ExcelAccessConsultant' }],
  openGraph: {
    type: 'website',
    url: 'https://excelaccessconsultant.com/',
    title: `Excel VBA Consultant & Access Database Consultant | ${CONSULTANTS.displayName}`,
    description:
      'Excel VBA and Access database consultant with 20+ years experience. Fix broken spreadsheets, automate reports, build stable databases. Fixed price. Free 30-min consultation.',
    images: [
      {
        url: BRAND_LOGO_OG.url,
        width: BRAND_LOGO_OG.width,
        height: BRAND_LOGO_OG.height,
        alt: BRAND_LOGO_OG.alt,
      },
    ],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Excel VBA Consultant & Access Database Consultant | ${CONSULTANTS.displayName}`,
    description:
      'Excel VBA and Access database consultant with 20+ years experience. Fix broken spreadsheets, automate reports, build stable databases. Fixed price. Free 30-min consultation.',
    images: [BRAND_LOGO_OG.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://excelaccessconsultant.com/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
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
                  logo: BRAND_LOGO_OG.url,
                  image: BRAND_LOGO_OG.url,
                  description:
                    'Excel VBA and Access database consultant with 20+ years experience serving businesses nationwide.',
                  telephone: '+13853863860',
                  email: 'rob@excelaccessconsultant.com',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Springville',
                    addressRegion: 'UT',
                    addressCountry: 'US',
                  },
                  areaServed: { '@type': 'Country', name: 'United States' },
                  priceRange: '$90/hour',
                  openingHours: 'Mo-Fr 09:00-17:00',
                  founder: CONSULTANTS.founders.map((name) => ({
                    '@type': 'Person',
                    name,
                  })),
                  foundingDate: '2005',
                  sameAs: ['https://excelaccessconsultant.com/about'],
                },
                ...CONSULTANTS.founders.map((name) => ({
                  '@type': 'Person',
                  name,
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
                })),
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
