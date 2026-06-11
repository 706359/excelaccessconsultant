'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CONSULTANTS } from '../../constants/site';
import { trackLeadMagnetSignup } from '../../utils/analytics';
import Button from '../ui/Button/Button';
import CheckList from '../ui/CheckList/CheckList';

export default function LeadMagnetCapture({ resource }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resource: resource.id }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      trackLeadMagnetSignup(resource.id);
      setSubmitted(true);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const chipClass = resource.accent === 'primary' ? 'chip-primary' : 'chip-secondary';

  return (
    <div className='lead-magnet-capture' id='download-form'>
      <div className='lead-magnet-capture__preview'>
        <span className={chipClass}>{resource.category}</span>
        <h2 className='lead-magnet-capture__title'>{resource.title}</h2>
        <p className='lead-magnet-capture__desc'>{resource.description}</p>
        <CheckList
          items={resource.features}
          accent={resource.accent}
          className='lead-magnet-capture__list'
        />
        <p className='lead-magnet-capture__related text-muted-sm'>
          Related service:{' '}
          <Link href={resource.serviceHref} className='text-link text-link--underline'>
            {resource.serviceLabel}
          </Link>
        </p>
      </div>

      <div className='lead-magnet-capture__panel'>
        {!submitted ? (
          <form onSubmit={handleSubmit} className='lead-magnet-capture__form'>
            <p className='lead-magnet-capture__form-label'>Enter your work email to download</p>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='you@company.com'
              className='input-field'
              aria-label='Email address'
            />
            {error && <p className='form-error'>{error}</p>}
            <Button
              type='submit'
              variant='primary'
              size='large'
              className='btn--full'
              disabled={loading}
            >
              {loading ? 'Sending…' : `Get ${resource.subtitle}`}
            </Button>
            <p className='lead-magnet-capture__fine text-muted-sm'>
              No spam. By downloading you agree to receive helpful Excel and Access tips from{' '}
              {CONSULTANTS.displayName}. See our <Link href='/privacy-policy'>Privacy Policy</Link>.
            </p>
          </form>
        ) : (
          <div className='lead-magnet-capture__success'>
            <p className='lead-magnet-capture__success-title'>Your guide is ready</p>
            <p className='text-muted-sm'>
              Download started. Save the file for your team, it opens in your browser as a
              printable guide.
            </p>
            <Button
              variant='primary'
              size='large'
              as='a'
              href={resource.downloadPath}
              target='_blank'
              rel='noopener noreferrer'
              className='btn--full'
            >
              Download {resource.title}
            </Button>
            <p className='text-muted-sm'>
              Want a professional review?{' '}
              <Link href='/contact' className='text-link text-link--underline'>
                Book a free consultation →
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
