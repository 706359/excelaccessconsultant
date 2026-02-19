import './styles/global.css'
import Layout from './components/Layout'

// Note: Using IBM Plex Sans from global.css, not Inter

export const metadata = {
  metadataBase: new URL('https://excelaccessconsultant.com'),
  title: 'Excel VBA Consultant | Access Database Expert',
  description: 'Excel VBA & Access database consultant. 20+ years. Fix broken spreadsheets, build stable databases, automate tasks. Nationwide service. Free consultation.',
  keywords: 'excel vba consultant, access database consultant, Excel consulting, Access consulting, Excel automation, VBA programming, MS Access database, Excel expert, Access expert, database repair, spreadsheet automation, Excel macros, Access database development, Excel VBA consultant Utah, Access database consultant Springville',
  authors: [{ name: 'ExcelAccessConsultant' }],
  openGraph: {
    type: 'website',
    url: 'https://excelaccessconsultant.com/',
    title: 'Excel VBA Consultant & Access Database Consultant | ExcelAccessConsultant',
    description: 'Excel VBA & Access database consultant. 20+ years. Fix broken spreadsheets, build stable databases, automate tasks. Nationwide service. Free consultation.',
    images: [{ url: 'https://excelaccessconsultant.com/logo.png', width: 512, height: 512, alt: 'ExcelAccessConsultant' }],
    siteName: 'ExcelAccessConsultant',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel VBA Consultant & Access Database Consultant | ExcelAccessConsultant',
    description: 'Excel VBA & Access database consultant. 20+ years. Fix broken spreadsheets, build stable databases, automate tasks.',
    images: ['https://excelaccessconsultant.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://excelaccessconsultant.com/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9ZT461HGG8" />
        
        {/* Structured Data - schema.org LocalBusiness (valid properties only) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://excelaccessconsultant.com/#localbusiness",
              "name": "ExcelAccessConsultant.com",
              "image": "https://excelaccessconsultant.com/logo.png",
              "description": "Excel & Access Consulting for Finance Teams. Turn your 3-day accounting close into 10 minutes. 200+ automation projects delivered since 2010.",
              "url": "https://excelaccessconsultant.com",
              "telephone": "+1-801-616-3702",
              "email": "rob@excelaccessconsultant.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Springville",
                "addressRegion": "UT",
                "postalCode": "84663",
                "addressCountry": "US"
              },
              "founder": {
                "@type": "Person",
                "name": "Robert Terry"
              },
              "foundingDate": "2010",
              "priceRange": "$",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              }
            }),
          }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
