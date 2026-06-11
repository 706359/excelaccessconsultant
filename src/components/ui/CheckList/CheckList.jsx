import { ICON_SIZE } from '../../../constants/iconSizes';
import { IconCheck } from '../Icons/Icons';

export function CheckList({ items, accent = 'secondary', className = '' }) {
  const listClass = ['checklist', className].filter(Boolean).join(' ');
  const iconClass = `checklist__icon checklist__icon--${accent}`;

  return (
    <ul className={listClass}>
      {items.map((item) => (
        <li key={item} className='checklist__item'>
          <IconCheck className={iconClass} size={ICON_SIZE.md} aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default CheckList;
