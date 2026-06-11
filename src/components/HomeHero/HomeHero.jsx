'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HERO_STATS, HERO_TRUST_POINTS } from '../../constants/homeHero';
import { ICON_SIZE } from '../../constants/iconSizes';
import { CONSULTANTS, CTA, TRUST } from '../../constants/site';
import useCountUp from '../../utils/useCountUp';
import BrandSubline from '../BrandSubline/BrandSubline';
import Button from '../ui/Button/Button';
import { IconCheck } from '../ui/Icons/Icons';
import HeroAuthority from './HeroAuthority';
import HeroProofOutcomes from './HeroProofOutcomes';
import HeroVisual from './HeroVisual';

function HeroStat({ stat, index }) {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const display = useCountUp(stat.value, { enabled: motionEnabled && /^\d/.test(stat.value) });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setMotionEnabled(!reduced);
  }, []);

  return (
    <>
      {index > 0 && <span className='Hero-stat-divider' aria-hidden='true' />}
      <div className='Hero-stat-item'>
        <span
          className={`Hero-stat-item__value Hero-stat-item__value--compact ${index === 1 ? 'Hero-stat-item__value--access' : 'Hero-stat-item__value--excel'}`}
        >
          {display}
        </span>
        <span className='Hero-stat-item__label'>{stat.label}</span>
      </div>
    </>
  );
}

export default function HomeHero() {
  return (
    <section id='home' className='Hero Hero--viewport' aria-labelledby='hero-heading'>
      <div className='Hero-panel'>
        <div className='Hero-inner'>
          <div className='Hero-grid'>
            <div className='Hero-main'>
              <BrandSubline text={TRUST.eyebrow} className='hero-enter hero-enter-1' />

              <h1 id='hero-heading' className='hero-enter hero-enter-2 Hero-title'>
                <span className='Hero-title__primary'>Microsoft Excel Access Consultant</span>
                <span className='Hero-title__secondary'>
                  for Businesses That Depend on{' '}
                  <span className='Hero-title__highlight'>Excel and Access</span>
                </span>
              </h1>

              <p className='hero-enter hero-enter-3 Hero-subtitle'>{CONSULTANTS.tagline}</p>

              <div
                className='hero-enter hero-enter-4 Hero-stat-row'
                role='list'
                aria-label='Trust metrics'
              >
                {HERO_STATS.map((stat, index) => (
                  <div key={stat.label} className='Hero-stat-item-wrap' role='listitem'>
                    <HeroStat stat={stat} index={index} />
                  </div>
                ))}
              </div>

              <div className='hero-enter hero-enter-5 Hero-cta-row'>
                <Button
                  variant='primary'
                  size='large'
                  as={Link}
                  href={CTA.primaryHref}
                  className='Hero-cta-btn'
                >
                  {CTA.primary}
                </Button>
                <Button
                  variant='outline-access'
                  size='large'
                  as={Link}
                  href={CTA.secondaryHref}
                  className='Hero-cta-btn'
                >
                  {CTA.secondary}
                </Button>
              </div>

              <p className='hero-enter hero-enter-6 Hero-phone'>
                Or call{' '}
                <a href={CTA.phoneHref} className='Hero-phone__link'>
                  {CTA.phone}
                </a>
              </p>
            </div>

            <div className='Hero-side'>
              <aside
                className='Hero-aside hero-enter hero-enter-6'
                aria-label='Consultant credentials and client results'
              >
                <HeroAuthority />
                <HeroProofOutcomes />
                <div className='Hero-trust-row'>
                  {HERO_TRUST_POINTS.map((point) => (
                    <span key={point} className='Hero-trust-chip Hero-trust-chip--compact'>
                      <IconCheck
                        className='Hero-trust-chip__icon'
                        size={ICON_SIZE.xs}
                        aria-hidden
                      />
                      {point}
                    </span>
                  ))}
                </div>
              </aside>
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
