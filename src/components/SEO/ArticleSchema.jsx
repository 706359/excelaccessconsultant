import { CONSULTANTS } from '../../constants/site';

export default function ArticleSchema({ headline, description, datePublished, dateModified, url }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    author: {
      '@type': 'Person',
      name: CONSULTANTS.displayName,
      url: 'https://excelaccessconsultant.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ExcelAccessConsultant',
      logo: {
        '@type': 'ImageObject',
        url: 'https://excelaccessconsultant.com/eaclogo.png',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    url,
    description,
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
