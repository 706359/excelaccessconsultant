import { useEffect } from 'react';

const FAQSchema = ({ faqs }) => {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Remove existing FAQ schema if present
    const existingSchema = document.querySelector('script[data-faq-schema]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new FAQ schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-schema', 'true');
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const schema = document.querySelector('script[data-faq-schema]');
      if (schema) {
        schema.remove();
      }
    };
  }, [faqs]);

  return null;
};

export default FAQSchema;

