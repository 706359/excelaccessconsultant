'use client';

import Link from 'next/link';
import CaseStudyShell from './CaseStudyShell';

export default function CaseStudyContent({ study, otherStudies }) {
  return (
    <CaseStudyShell study={study} otherStudies={otherStudies}>
      <h2>The Problem</h2>
      {study.problem.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <h2>The Solution</h2>
      {study.solution.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <h2>The Outcome</h2>
      <p>{study.outcome}</p>

      <div className='grid-2 grid-2--gap-lg'>
        {study.metrics.map((metric) => (
          <div key={metric.label} className='card card--metric-glass'>
            <div className='card__metric'>{metric.value}</div>
            <div className='card__label'>{metric.label}</div>
          </div>
        ))}
      </div>

      <figure className='testimonial-card'>
        <blockquote className='testimonial-quote'>
          &ldquo;{study.testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className='testimonial-author'>
          <span className='testimonial-author__name'>{study.testimonial.attribution}</span>
        </figcaption>
      </figure>

      <div className='related-tile'>
        <h3>{study.relatedServiceLabel}</h3>
        <p className='text-muted-sm'>See how this service applies to projects like this one.</p>
        <Link href={study.relatedService} className='text-link'>
          View service →
        </Link>
      </div>
    </CaseStudyShell>
  );
}
