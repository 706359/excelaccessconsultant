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
        "All kinds—startups to big companies, any industry. I tailor what I build to your setup. If you run on Excel and Access, I can probably help.",
    },
    {
      question: 'How long does a typical project take?',
      answer:
        "Depends on scope. Simple automations: a few weeks. Bigger database work: a few months. I'll give you a realistic timeline when we talk.",
    },
    {
      question: 'Do you provide training for the solutions you build?',
      answer:
        "Yes. I write docs, walk you through how it works, and I'm available if something breaks. You shouldn't need me to babysit it forever.",
    },
    {
      question: 'Can you work with our existing systems and data?',
      answer:
        "Yes. Most of my work is improving what you already have. I'll look at your current files and databases and build something that fits in.",
    },
    {
      question: 'What kind of support do you offer after project completion?',
      answer:
        "Ongoing support when you need it—bug fixes, tweaks, questions. We can set up ad hoc or a regular maintenance arrangement. Your call.",
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer:
        "I follow standard best practices: access controls, no unnecessary copies, compliance in mind. Tell me your requirements and we'll design for them.",
    },
    {
      question: 'What is your pricing model?',
      answer:
        "Depends on the job. I give you a quote after we scope it. Fixed price for builds, or hourly for advisory—whatever fits your situation.",
    },
    {
      question: 'Do you offer remote services?',
      answer:
        "Yes. I work remotely with screen sharing, secure file transfer, whatever you use. I've been doing remote long before it was the norm.",
    },
    {
      question: 'Can you help with urgent or time-sensitive projects?',
      answer:
        "Sometimes, yes. Planning is better when we can, but if you're in a pinch, reach out. We'll see what's possible.",
    },
    {
      question: 'What makes your solutions different from off-the-shelf software?',
      answer:
        "I build for your process, not a generic one. It plugs into what you have, does exactly what you need, and we can change it as you grow. No bloat, no lock-in.",
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
              Something not covered? Reach out—I'll answer your questions directly.
            </p>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white hover:text-white font-semibold px-8 py-4 text-base rounded-lg transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
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
