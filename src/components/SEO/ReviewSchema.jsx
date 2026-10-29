export default function ReviewSchema({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  const reviewSchema = {
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

  return (
    <script
      type='application/ld+json'
      data-review-schema='true'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}
