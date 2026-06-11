import { notFound } from 'next/navigation';
import CaseStudyTracker from '../../../components/Analytics/CaseStudyTracker';
import { ALL_CASE_STUDY_SLUGS, CASE_STUDIES, resolveCaseStudySlug } from '../registry';
import CaseStudyContent from './CaseStudyContent';

import { BRAND_LOGO_OG, SITE_URL } from '../../../config/brand';
import { CONSULTANTS } from '../../../constants/site';

const BASE = SITE_URL;
const OG_IMAGE = BRAND_LOGO_OG;

export function generateStaticParams() {
  const params = [];
  for (const slug of ALL_CASE_STUDY_SLUGS) {
    params.push({ slug });
    params.push({ slug: `${slug}.html` });
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resolved = resolveCaseStudySlug(slug);
  const study = CASE_STUDIES[resolved];
  if (!study) return {};

  const canonicalSlug = study.canonicalSlug || study.slug;
  const url = `${BASE}/case-studies/${canonicalSlug}`;
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    openGraph: {
      type: 'article',
      url,
      title: study.metaTitle,
      description: study.metaDescription,
      images: [OG_IMAGE],
      siteName: 'ExcelAccessConsultant',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: study.metaTitle,
      description: study.metaDescription,
      images: [BRAND_LOGO_OG.url],
    },
    alternates: { canonical: url },
  };
}

function ArticleSchema({ study }) {
  const canonicalSlug = study.canonicalSlug || study.slug;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.metaDescription,
    author: { '@type': 'Person', name: CONSULTANTS.displayName },
    publisher: {
      '@type': 'Organization',
      name: 'ExcelAccessConsultant.com',
      logo: { '@type': 'ImageObject', url: BRAND_LOGO_OG.url },
    },
    mainEntityOfPage: `${BASE}/case-studies/${canonicalSlug}`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-11',
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const resolved = resolveCaseStudySlug(slug);
  const study = CASE_STUDIES[resolved];
  if (!study) notFound();

  const canonicalKey = study.canonicalSlug || study.slug;
  const otherStudies = ALL_CASE_STUDY_SLUGS.filter((s) => {
    const item = CASE_STUDIES[s];
    const itemCanonical = item.canonicalSlug || item.slug;
    return itemCanonical !== canonicalKey && !item.canonicalSlug;
  })
    .slice(0, 2)
    .map((s) => CASE_STUDIES[s]);

  return (
    <>
      <CaseStudyTracker slug={study.canonicalSlug || study.slug} />
      <ArticleSchema study={study} />
      <CaseStudyContent study={study} otherStudies={otherStudies} />
    </>
  );
}
