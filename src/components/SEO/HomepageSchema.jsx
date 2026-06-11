import { HOME_FAQS } from '../../constants/homeFaq';
import { HOME_TESTIMONIALS } from '../../constants/homeTestimonials';

function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function buildReviewSchema() {
  const reviews = HOME_TESTIMONIALS.map((t) => ({
    author: `${t.author}, ${t.subtitle}`,
    rating: '5',
    text: t.quote,
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AggregateRating',
        itemReviewed: { '@id': 'https://excelaccessconsultant.com/#localbusiness' },
        ratingValue: '5',
        bestRating: '5',
        reviewCount: reviews.length.toString(),
      },
      ...reviews.map((review) => ({
        '@type': 'Review',
        itemReviewed: { '@id': 'https://excelaccessconsultant.com/#localbusiness' },
        author: {
          '@type': 'Person',
          name: review.author || 'Client',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating || '5',
          bestRating: '5',
        },
        reviewBody: review.text,
      })),
    ],
  };
}

/** Server-rendered homepage FAQ + Review JSON-LD */
export default function HomepageSchema() {
  const faqSchema = buildFaqSchema();
  const reviewSchema = buildReviewSchema();

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
