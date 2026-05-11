export default function ServiceSchema({ serviceType, description, url }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: 'ExcelAccessConsultant',
      url: 'https://excelaccessconsultant.com',
    },
    areaServed: 'US',
    description,
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
