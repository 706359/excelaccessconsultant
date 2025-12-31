import './Card.css';

const Card = ({ 
  children, 
  className = '',
  hover = false,
  ...props 
}) => {
  const baseClass = 'Card';
  const hoverClass = hover ? 'Card--hover' : '';
  const classes = `${baseClass} ${hoverClass} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;

