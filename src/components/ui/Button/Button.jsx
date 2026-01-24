import { createElement } from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  as: Component,
  ...props
}) => {
  // Base button classes
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-colors rounded-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed';

  // Variant classes
  const variantClasses = {
    primary: 'bg-excel hover:bg-excel-hover text-white hover:text-white',
    'primary-green': 'bg-excel-green hover:bg-excel-green-hover text-white hover:text-white',
    secondary:
      'text-excel hover:text-excel-hover border border-excel hover:border-excel-hover bg-white hover:bg-excel hover:text-white',
    'secondary-green':
      'text-excel-green hover:text-excel-green-hover border-2 border-excel-green hover:border-excel-green-hover bg-white hover:bg-excel-green hover:text-white',
    outline: 'border-2 border-excel text-excel hover:bg-excel hover:text-white bg-transparent',
    'outline-green': 'border-2 border-excel-green text-excel-green hover:bg-excel-green hover:text-white bg-transparent',
    'outline-white': 'border-2 border-white text-white hover:bg-white/20 bg-transparent',
    ghost: 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 bg-transparent',
  };

  // Size classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
  };

  const classes =
    `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.medium} ${className}`.trim();

  // If Component is provided (like Link or 'a'), use it instead of button
  if (Component) {
    // If Component is a string (like 'a'), use createElement for HTML elements
    if (typeof Component === 'string') {
      return createElement(
        Component,
        {
          className: classes,
          onClick,
          ...props,
        },
        children
      );
    }
    // If Component is a React component (like Link), render it normally
    return (
      <Component className={classes} onClick={onClick} {...props}>
        {children}
      </Component>
    );
  }

  // Default to button element
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
