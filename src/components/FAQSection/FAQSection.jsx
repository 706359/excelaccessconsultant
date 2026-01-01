import { useState } from 'react';
import Section from '../Section/Section';
import Button from '../Button/Button';

const FAQSection = ({ scrollToSection }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer:
        "I work with businesses of all sizes—from small startups to big companies, across pretty much any industry. Every project is different, and I'll build something that fits your specific needs, no matter what industry you're in or how big your company is.",
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'It really depends on what you need. Simple automation stuff can be done in a few weeks. Bigger database systems might take a few months. When we talk, I'll give you a realistic timeline based on exactly what you're looking for.',
    },
    {
      question: 'Do you provide training for the solutions you build?',
      answer:
        'Absolutely. I'll train your team on everything I build. That includes documentation, hands-on training, and I'm here if you need help later. I want to make sure you can actually use what I build.',
    },
    {
      question: 'Can you work with our existing systems and data?',
      answer:
        "Yes, definitely. I work with what you've already got—your existing data, databases, and workflows. I'll take a look at your current setup and build something that works with it, not against it.",
    },
    {
      question: 'What kind of support do you offer after project completion?',
      answer:
        'I'm here if you need help after the project is done. That includes fixing bugs, updates, adding new features, or just answering questions. We can work out a support arrangement that fits what you need—whether that's calling me when something comes up or a regular maintenance plan.',
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer:
        'I take data security seriously. I follow best practices for handling data, set up proper access controls, and make sure we're compliant with privacy regulations. When we talk, we can go over any specific security requirements you have.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'It depends on what you need—the scope, how complex it is, and your specific requirements. After we talk about your project, I'll give you a detailed quote. I do both fixed-price projects and hourly consulting, whatever works better for you.',
    },
    {
      question: 'Do you offer remote services?',
      answer:
        "Yes, I work with clients remotely all the time. All my services work great through online collaboration tools. I'm used to remote projects and can work with different time zones if needed.",
    },
    {
      question: 'Can you help with urgent or time-sensitive projects?',
      answer:
        "I get it—sometimes you need something done yesterday. While I always recommend planning things out for the best results, I can work with tight deadlines. Give me a call and we'll talk about your timeline. I'll figure out what's possible.",
    },
    {
      question: 'What makes your solutions different from off-the-shelf software?',
      answer:
        'I build everything custom for your business. Off-the-shelf software tries to be everything to everyone, which means it's not really great at anything. What I build fits your exact needs, works with what you've already got, and can grow with your business. You get what you need, period.',
    },
  ];

  return (
    <>
      <Section id='faq' background='secondary' className='FAQ-hero'>
        <div className='FAQHero'>
          <h2 className='Section-heading-small'>FAQ</h2>
          <h1 className='Section-heading-large'>Frequently Asked Questions</h1>
          <p className='Section-description'>
            Answers to the questions I get asked most. If you don't see what you're looking for, just ask.
          </p>
        </div>
      </Section>

      <Section>
        <div className='FAQ-content'>
          <div className='FAQ-list'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`FAQ-item ${openIndex === index ? 'FAQ-item--open' : ''}`}
              >
                <button
                  className='FAQ-question'
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className='FAQ-question-text'>{faq.question}</span>
                  <span className='FAQ-question-icon'>{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className='FAQ-answer'>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='FAQ-cta'>
            <h2 className='FAQ-cta-title'>Still have questions?</h2>
            <p className='FAQ-cta-text'>
              We&apos;re here to help. Contact us to discuss your specific needs and get
              personalized answers.
            </p>
            <Button variant='primary' size='large' onClick={() => scrollToSection('contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQSection;
