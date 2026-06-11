import FAQAccordion from '../ui/FAQAccordion/FAQAccordion';

const FAQ_ITEMS = [
  { q: 'Who do you work with?', a: 'Companies that use Excel and Access every day to run their business. If your spreadsheets are critical to operations, I can help.' },
  { q: 'Why hire a solo consultant instead of an agency?', a: 'Agencies hand your project to junior developers. I do the work myself. You get 20 years of experience, not someone learning on your dime.' },
  { q: 'Do you work with existing systems?', a: 'Yes. Most of what I do is fixing or improving stuff that already exists. I rarely start from scratch unless you want me to.' },
  { q: 'How long do projects take?', a: "Depends on what you need. Simple automations? A few days to a week. Big database projects? Usually 4 to 8 weeks. I'll give you a timeline when we talk." },
  { q: 'Do you provide documentation?', a: "Yes. I write documentation that explains how things work. You shouldn't need me to explain it every time you use it." },
  { q: 'Can you help with urgent issues?', a: "If I'm available, yes. I've done plenty of emergency fixes. Call me and we'll figure it out." },
  { q: 'Do you work remotely?', a: "Yes. I work remotely. We'll use screen sharing, secure file transfer, whatever works for you. I've been doing remote work long before it was trendy." },
];

export default function HomeFAQSection() {
  return (
    <section id='faq' className='home-faq-section'>
      <div className='service-section__inner'>
        <div className='home-faq-section__header'>
          <h2 className='home-faq-section__title'>Frequently Asked Questions</h2>
        </div>
        <FAQAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
