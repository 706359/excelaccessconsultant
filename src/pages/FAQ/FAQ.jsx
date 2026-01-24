import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

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
    <div className='bg-base min-h-screen text-slate-900 font-sans'>
      <SEO
        title='FAQ | ExcelAccessConsultant.com'
        description='Frequently asked questions about Excel and Access consulting services. Get answers about pricing, timelines, support, and more.'
        keywords='excel consultant faq, access database faq, vba automation questions, excel consulting questions'
        url='https://excelaccessconsultant.com/faq'
        ogTitle='Frequently Asked Questions'
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-slate-50 border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-display-lg md:text-display-xl lg:text-display-2xl font-bold mb-4 font-display text-slate-900'>
            Frequently Asked Questions
          </h1>
          <p className='text-lg text-slate-700 max-w-7xl mx-auto leading-relaxed'>
            Find answers to common questions about our services and how we work.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'shadow-md' : ''
                }`}
              >
                <button
                  className='w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200'
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className='text-lg font-bold font-display text-slate-900 pr-4'>
                    {faq.question}
                  </h3>
                  <span className='text-primary text-2xl font-bold flex-shrink-0'>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className='px-6 pb-6'>
                    <p className='text-slate-600 leading-relaxed'>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className='mt-12 text-center bg-slate-50 rounded-lg border border-slate-200 p-8'>
            <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
              Still have questions?
            </h2>
            <p className='text-lg text-slate-700 mb-6 max-w-7xl mx-auto leading-relaxed'>
              We&apos;re here to help. Contact us to discuss your specific needs and get
              personalized answers.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 text-base rounded-lg transition-all duration-standard shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
