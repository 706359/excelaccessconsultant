'use client';

import Link from 'next/link';
import CaseStudyShell from './CaseStudyShell';

export default function CaseStudyContent({ study, otherStudies }) {
  return (
    <CaseStudyShell study={study} otherStudies={otherStudies}>
      <h2>The Problem</h2>
      {study.problem.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>The Solution</h2>
      {study.solution.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <h2>The Outcome</h2>
      <p>{study.outcome}</p>

      <div className='blog-metrics'>
        <div className='blog-metrics__grid'>
          {study.metrics.map((m) => (
            <div key={m.label} className='blog-metrics__item'>
              <div className='blog-metrics__value'>{m.value}</div>
              <div className='blog-metrics__label'>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <blockquote className='blog-blockquote'>
        <p>&ldquo;{study.testimonial.quote}&rdquo;</p>
        <footer>&mdash; {study.testimonial.attribution}</footer>
      </blockquote>

      <p>
        <Link href={study.relatedService}>See {study.relatedServiceLabel} →</Link>
      </p>
    </CaseStudyShell>
  );
}
