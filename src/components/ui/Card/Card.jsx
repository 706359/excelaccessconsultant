const Card = ({ 
  children, 
  className = '',
  hover = false,
  image = null,
  imageAlt = '',
  ...props 
}) => {
  const baseClasses = 'card';
  const hoverClasses = hover ? 'hover:-translate-y-1' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {image && (
        <div className='relative overflow-hidden rounded-t-card -mx-md -mt-md mb-md'>
          <img
            src={image}
            alt={imageAlt}
            className='card-image'
            loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-standard'></div>
        </div>
      )}
      <div className={image ? '' : ''}>
        {children}
      </div>
    </div>
  );
};

export default Card;

