import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of businesses do you work with?',
      answer:
        "We work with businesses of all sizes, from small startups to large enterprises, across various industries. Our solutions are tailored to each client's specific needs, regardless of their industry or company size.",
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on complexity and scope. Simple automation projects can be completed in a few weeks, while more complex database systems may take several months. We provide detailed timelines during our initial consultation based on your specific requirements.',
    },
    {
      question: 'Do you provide training for the solutions you build?',
      answer:
        'Yes, we provide comprehensive training for all solutions we deliver. This includes documentation, hands-on training sessions, and ongoing support to ensure your team can effectively use and maintain the systems we build.',
    },
    {
      question: 'Can you work with our existing systems and data?',
      answer:
        "Absolutely. We specialize in integrating with existing systems and can work with your current data formats, databases, and workflows. We'll analyze your existing setup and design solutions that complement and enhance what you already have.",
    },
    {
      question: 'What kind of support do you offer after project completion?',
      answer:
        'We offer ongoing support and maintenance services. This includes bug fixes, updates, enhancements, and technical assistance. Support packages can be tailored to your needs, from ad-hoc support to regular maintenance agreements.',
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer:
        'Data security is a top priority. We follow best practices for data handling, implement proper access controls, and ensure compliance with relevant privacy regulations. We can discuss specific security requirements during our consultation.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'Pricing depends on project scope, complexity, and requirements. We provide detailed quotes after understanding your specific needs. We offer both fixed-price projects and hourly consulting arrangements, depending on what works best for your situation.',
    },
    {
      question: 'Do you offer remote services?',
      answer:
        "Yes, we work with clients remotely and can provide all our services through online collaboration tools. We're experienced in remote project delivery and can accommodate different time zones as needed.",
    },
    {
      question: 'Can you help with urgent or time-sensitive projects?',
      answer:
        "We understand that business needs can be urgent. While we always recommend proper planning for best results, we can accommodate time-sensitive projects. Please contact us to discuss your timeline and we'll work with you to find a solution.",
    },
    {
      question: 'What makes your solutions different from off-the-shelf software?',
      answer:
        'Our solutions are custom-built specifically for your business processes and workflows. Unlike generic software, our solutions are tailored to your exact needs, integrate seamlessly with your existing systems, and can evolve as your business grows. You get exactly what you need, nothing more, nothing less.',
    },
  ];

  return (
    <div className='FAQ'>
      <Section background='secondary' className='FAQ-hero'>
        <div className='FAQHero'>
          <h1 className='FAQHero-title'>Frequently Asked Questions</h1>
          <p className='FAQHero-subtitle'>
            Find answers to common questions about our services and how we work.
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
                  onClick={() => toggleQuestion(index)}
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
            <Link to='/contact' className='FAQ-cta-link'>
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQ;
