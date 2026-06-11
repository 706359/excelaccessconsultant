const Card = ({
  children,
  className = '',
  hover = false,
  image = null,
  imageAlt = '',
  ...props
}) => {
  const classes = ['card', hover ? 'card--interactive' : '', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {image && (
        <div className='card__image-wrap'>
          <img src={image} alt={imageAlt} className='card-image' loading='lazy' />
          <div className='card__image-overlay' aria-hidden='true' />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
