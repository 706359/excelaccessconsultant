import Link from 'next/link';
import { HOME_SYMPTOM_GROUPS, HOME_SYMPTOM_SCAN_DESC } from '../../constants/homeConversion';
import { ICON_SIZE } from '../../constants/iconSizes';
import { IconCheck } from '../ui/Icons/Icons';
import ScrollReveal from '../ui/ScrollReveal/ScrollReveal';

export default function HomeCommonProblems() {
  return (
    <ScrollReveal
      as='section'
      className='page-section page-section--compact page-section--alt page-section--border'
      aria-labelledby='home-symptom-scan-heading'
    >
      <div className='container'>
        <div className='section-header section-header--lg'>
          <h2 id='home-symptom-scan-heading' className='section-header__title'>
            Sound Familiar?
          </h2>
          <p className='section-header__desc'>{HOME_SYMPTOM_SCAN_DESC}</p>
        </div>

        <div className='home-symptom-scan'>
          {HOME_SYMPTOM_GROUPS.map((group) => (
            <div
              key={group.id}
              className={`home-symptom-panel home-symptom-panel--${group.accent}`}
            >
              <div className='home-symptom-panel__header'>
                <span className={group.accent === 'primary' ? 'chip-primary' : 'chip-secondary'}>
                  {group.label}
                </span>
                <span className='home-symptom-panel__count'>{group.symptoms.length} symptoms</span>
              </div>

              <ul className='home-symptom-panel__list'>
                {group.symptoms.map((symptom) => (
                  <li key={symptom.label}>
                    <Link href={symptom.href} className='home-symptom-panel__link'>
                      <IconCheck
                        className={`checklist__icon checklist__icon--${group.accent}`}
                        size={ICON_SIZE.md}
                        aria-hidden
                      />
                      <span>{symptom.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
