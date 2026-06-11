'use client';

export default function FilterChipBar({
  label = 'Filter',
  options,
  value,
  onChange,
  className = '',
}) {
  return (
    <div className={`filter-bar ${className}`.trim()} role='group' aria-label={label}>
      <span className='filter-bar__label'>{label}</span>
      <div className='filter-bar__chips'>
        {options.map(({ id, label: optionLabel, count, accent = 'primary' }) => {
          const isActive = value === id;

          return (
            <button
              key={id}
              type='button'
              className={`filter-chip filter-chip--${accent}${isActive ? ' filter-chip--active' : ''}`}
              aria-pressed={isActive}
              onClick={() => onChange(id)}
            >
              {optionLabel}
              {typeof count === 'number' && (
                <span className='filter-chip__count' aria-hidden='true'>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
