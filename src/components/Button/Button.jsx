import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  type = 'button',
  onClick,
  className = '',
  as: Component,
  ...props 
}) => {
  const baseClass = 'Button';
  const variantClass = `Button--${variant}`;
  const sizeClass = `Button--${size}`;
  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  // If Component is provided (like Link), use it instead of button
  if (Component) {
    return (
      <Component 
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    );
  }

  // Default to button element
  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

