export default function ServiceHowItWorks({ steps, accent = 'primary', children }) {
  if (!steps?.length) return null;

  const numClass =
    accent === 'secondary' ? 'text-step-num text-step-num--secondary' : 'text-step-num';

  return (
    <section className='page-section page-section--compact page-section--white'>
      <div className='container'>
        <h2>How It Works</h2>
        <div className='step-list'>
          {steps.map((step, index) => (
            <div key={step.title} className='step-item'>
              <div className={numClass}>{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p className='text-muted'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        {children}
      </div>
    </section>
  );
}
