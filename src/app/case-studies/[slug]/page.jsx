import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES, ALL_CASE_STUDY_SLUGS } from '../registry';

const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };

export function generateStaticParams() {
  return ALL_CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const study = CASE_STUDIES[params.slug];
  if (!study) return {};

  const url = `${BASE}/case-studies/${study.slug}`;
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
      images: [`${BASE}/logo.png`],
    },
    alternates: { canonical: url },
  };
}

function ArticleSchema({ study }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.metaDescription,
    author: { '@type': 'Person', name: 'Robert Terry' },
    publisher: {
      '@type': 'Organization',
      name: 'ExcelAccessConsultant.com',
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
    mainEntityOfPage: `${BASE}/case-studies/${study.slug}`,
    datePublished: '2026-01-15',
    dateModified: '2026-05-11',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CaseStudyPage({ params }) {
  const study = CASE_STUDIES[params.slug];
  if (!study) notFound();

  const otherStudies = ALL_CASE_STUDY_SLUGS
    .filter((s) => s !== study.slug)
    .slice(0, 2)
    .map((s) => CASE_STUDIES[s]);

  return (
    <div className="bg-base min-h-screen text-slate-800 font-sans">
      <ArticleSchema study={study} />

      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Case Studies
          </Link>

          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide mb-6">
            {study.industry}
          </span>

          <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl font-extrabold mb-6 font-display text-slate-900 leading-tight">
            {study.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>Robert Terry</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
            <span>ExcelAccessConsultant.com</span>
          </div>
        </div>
      </section>

      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <section className="mb-12">
            <h2 className="text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900">
              The Problem
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              {study.problem.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900">
              The Solution
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              {study.solution.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900">
              The Outcome
            </h2>
            <p className="text-slate-700 leading-relaxed mb-8">{study.outcome}</p>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl md:text-3xl font-bold text-primary font-display mb-1">
                      {m.value}
                    </div>
                    <div className="text-sm text-slate-500 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <blockquote className="bg-slate-50 border-l-4 border-primary rounded-r-xl p-6 md:p-8 mb-12">
            <p className="text-lg text-slate-700 italic leading-relaxed mb-3">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <footer className="text-sm text-slate-500 font-semibold">
              &mdash; {study.testimonial.attribution}
            </footer>
          </blockquote>

          <div className="flex flex-wrap gap-3 text-sm mb-12">
            <Link
              href={study.relatedService}
              className="text-primary hover:text-primary-hover font-medium underline transition-colors"
            >
              Learn more about {study.relatedServiceLabel} →
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/case-studies"
              className="text-primary hover:text-primary-hover font-medium underline transition-colors"
            >
              View all case studies →
            </Link>
          </div>
        </div>
      </article>

      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900">
            Have a Similar Problem?
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto">
            Every business is different, but the approach is the same: understand the problem, build a
            targeted solution, and deliver measurable results. Let&apos;s talk about your situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-md transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:8016163702"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-md transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 801-616-3702
            </a>
          </div>
        </div>
      </section>

      {otherStudies.length > 0 && (
        <section className="py-12 md:py-16 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900">
              More Case Studies
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {otherStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/case-studies/${other.slug}`}
                  className="group block bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-300 transition-colors"
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {other.industry}
                  </span>
                  <h3 className="text-heading-sm font-bold font-display text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {other.title}
                  </h3>
                  <p className="text-sm text-slate-500">{other.metrics[0].label}: {other.metrics[0].value}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
