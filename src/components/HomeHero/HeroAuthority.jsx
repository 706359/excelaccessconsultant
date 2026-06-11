import { HERO_AUTHORITY } from '../../constants/homeConversion';

export default function HeroAuthority() {
  return (
    <div className='hero-authority' aria-label='Consultant credentials'>
      <p className='hero-authority__name'>{HERO_AUTHORITY.name}</p>
      <p className='hero-authority__title'>{HERO_AUTHORITY.title}</p>
      <p className='hero-authority__credentials text-muted-sm'>{HERO_AUTHORITY.credentials}</p>
    </div>
  );
}
