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
  const variantClasses = {
    primary: 'btn btn--primary',
    secondary: 'btn btn--secondary',
    access: 'btn btn--access',
    'primary-green': 'btn btn--primary',
    'secondary-green': 'btn btn--secondary',
    outline: 'btn btn--secondary',
    'outline-access': 'btn btn--outline-access',
    'outline-green': 'btn btn--outline-access',
    'outline-white': 'btn btn--outline-white',
    inverse: 'btn btn--inverse',
    ghost: 'btn btn--ghost',
  };

  const sizeClasses = {
    small: 'btn--small',
    medium: '',
    large: 'btn--large',
  };

  const classes = `${variantClasses[variant] || variantClasses.primary} ${
    sizeClasses[size] || ''
  } ${className}`.trim();

  if (Component) {
    if (typeof Component === 'string') {
      return createElement(
        Component,
        {
          className: classes,
          onClick,
          ...props,
        },
        children,
      );
    }
    return (
      <Component className={classes} onClick={onClick} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
