'use client';

import Link from 'next/link';
import CaseStudyShell from './CaseStudyShell';

function linkifyText(text, links = []) {
  if (!links.length) return text;
  const parts = [];
  let remaining = text;
  let key = 0;
  for (const { phrase, href } of links) {
    const idx = remaining.indexOf(phrase);
    if (idx === -1) continue;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push(
      <Link key={`bl-${key++}`} href={href} className='text-link'>
        {phrase}
      </Link>
    );
    remaining = remaining.slice(idx + phrase.length);
  }
  if (remaining) parts.push(remaining);
  return parts.length ? parts : text;
}

export default function CaseStudyContent({ study, otherStudies }) {
  const bodyLinks = study.bodyLinks || [];
  return (
    <CaseStudyShell study={study} otherStudies={otherStudies}>
      <h2>The Problem</h2>
      {study.problem.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{linkifyText(paragraph, bodyLinks)}</p>
      ))}

      <h2>The Solution</h2>
      {study.solution.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{linkifyText(paragraph, bodyLinks)}</p>
      ))}

      <h2>The Outcome</h2>
      <p>{linkifyText(study.outcome, bodyLinks)}</p>

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

      <div className='related-tile stretched-card'>
        <h3>
          <Link href={study.relatedService} className='stretched-link'>
            {study.relatedServiceLabel}
          </Link>
        </h3>
        <p className='text-muted-sm'>See how this service applies to projects like this one.</p>
      </div>
    </CaseStudyShell>
  );
}
