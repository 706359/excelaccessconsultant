
const Section = ({ 
  children, 
  className = '',
  background = 'primary',
  ...props 
}) => {
  const baseClass = 'Section';
  const bgClass = `Section--bg-${background}`;
  const classes = `${baseClass} ${bgClass} ${className}`.trim();

  return (
    <section className={classes} {...props}>
      <div className="Section-inner">
        {children}
      </div>
    </section>
  );
};

export default Section;

