import { useEffect } from 'react';

const ReviewSchema = ({ reviews }) => {
  useEffect(() => {
    if (!reviews || reviews.length === 0) return;

    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://excelaccessconsultant.com/#localbusiness",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": reviews.length.toString()
      },
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author || "Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating || "5"
        },
        "reviewBody": review.text
      }))
    };

    // Remove existing review schema if present
    const existingSchema = document.querySelector('script[data-review-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new review schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-review-schema', 'true');
    script.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(script);

    return () => {
      const schema = document.querySelector('script[data-review-schema]');
      if (schema) {
        schema.remove();
      }
    };
  }, [reviews]);

  return null;
};

export default ReviewSchema;
