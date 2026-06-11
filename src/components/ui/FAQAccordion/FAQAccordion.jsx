'use client';

import { useState } from 'react';
import { ICON_SIZE } from '../../../constants/iconSizes';
import { IconMinus, IconPlus } from '../Icons/Icons';

export default function FAQAccordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  const listClass = ['faq-list', 'faq-list--spaced', className].filter(Boolean).join(' ');

  return (
    <div className={listClass}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const question = item.q ?? item.question;
        const answer = item.a ?? item.answer;

        const num = String(i + 1).padStart(2, '0');
        const accent = i % 2 === 0 ? 'primary' : 'secondary';

        return (
          <div key={question} className={`faq-item faq-item--${accent}`}>
            <button
              type='button'
              onClick={() => toggle(i)}
              className='accordion-trigger'
              aria-expanded={isOpen}
            >
              <span className={`cs-item__num faq-item__num`}>{num}</span>
              <span className='accordion-trigger__question'>{question}</span>
              <span className='accordion-trigger__icon' aria-hidden='true'>
                {isOpen ? <IconMinus size={ICON_SIZE.lg} /> : <IconPlus size={ICON_SIZE.lg} />}
              </span>
            </button>
            {isOpen && <p className='accordion-panel'>{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
