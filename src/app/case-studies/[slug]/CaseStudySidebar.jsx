'use client';

import ArticleSidebar from '../../../components/ui/ArticleSidebar/ArticleSidebar';

export default function CaseStudySidebar({ study, otherStudies, accent = 'primary' }) {
  const sections = [];

  if (otherStudies.length > 0) {
    sections.push({
      title: 'More Case Studies',
      links: otherStudies.map((other) => ({
        href: `/case-studies/${other.slug}`,
        title: other.title,
        description: other.industry,
      })),
    });
  }

  sections.push({
    title: 'Related Service',
    links: [
      {
        href: study.relatedService,
        title: study.relatedServiceLabel,
        description: 'Explore the service behind this project',
      },
    ],
  });

  return (
    <ArticleSidebar
      accent={accent}
      sections={sections}
      backLink={{ href: '/case-studies', label: '← View All Case Studies' }}
    />
  );
}
