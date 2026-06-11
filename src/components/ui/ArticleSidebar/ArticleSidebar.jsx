'use client';

import Link from 'next/link';
import { CTA } from '../../../constants/site';
import Button from '../Button/Button';

export default function ArticleSidebar({ accent = 'primary', sections = [], backLink }) {
  const accentClass = accent === 'secondary' ? ' service-sidebar__accent--secondary' : '';

  return (
    <div className='service-sidebar stack stack--md'>
      {sections.map((section) => (
        <div key={section.title} className='service-sidebar__card'>
          <div className='service-sidebar__header'>
            <div className={`service-sidebar__accent${accentClass}`} aria-hidden='true' />
            <h2 className='service-sidebar__title'>{section.title}</h2>
          </div>
          <div className='service-sidebar__examples'>
            {section.links.map(({ href, title, description }) => (
              <Link key={href} href={href} className='service-sidebar__link'>
                <h3 className='service-sidebar__link-title'>{title}</h3>
                {description && <p className='service-sidebar__link-desc'>{description}</p>}
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className='service-sidebar__card'>
        <div className='service-sidebar__header'>
          <div className={`service-sidebar__accent${accentClass}`} aria-hidden='true' />
          <h2 className='service-sidebar__title'>Need Help?</h2>
        </div>
        <p className='service-sidebar__tagline'>
          Book a free consultation to discuss your Excel or Access project.
        </p>
        <Button
          variant='primary'
          size='large'
          as={Link}
          href={CTA.primaryHref}
          className='btn--full'
        >
          {CTA.primary}
        </Button>
      </div>

      {backLink && (
        <Link href={backLink.href} className='text-link text-link--underline'>
          {backLink.label}
        </Link>
      )}
    </div>
  );
}
