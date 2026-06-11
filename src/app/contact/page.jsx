'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DataSecurityDisclaimer from '../../components/SEO/DataSecurityDisclaimer/DataSecurityDisclaimer';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';
import CheckList from '../../components/ui/CheckList/CheckList';
import ScrollReveal from '../../components/ui/ScrollReveal/ScrollReveal';
import ToastContainer from '../../components/ui/Toast/ToastContainer';
import {
  CONTACT_PROMISES,
  CONTACT_RELATED_LINKS,
  CONTACT_SERVICES,
} from '../../constants/contactPage';
import { CTA, TRUST } from '../../constants/site';
import { trackFormSubmit } from '../../utils/analytics';

const ItemArrow = () => (
  <svg
    className='cs-item__arrow'
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M9 5l7 7-7 7' />
  </svg>
);

export default function Contact() {
  const router = useRouter();
  const [formStep, setFormStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    hoursPerWeek: '',
    bestTimeToCall: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaTimeLeft, setCaptchaTimeLeft] = useState(120);
  const [hasInteractedWithForm, setHasInteractedWithForm] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const showToast = (message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const generateCaptcha = () => {
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let num1, num2, answer, question;

    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 9) + 1;
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        question = `${num1} - ${num2}`;
        break;
      default:
        num1 = 5;
        num2 = 3;
        answer = 8;
        question = '5 + 3';
    }

    setCaptchaQuestion(question);
    setCaptchaAnswer(answer);
    setCaptchaInput('');
    setCaptchaError(false);
    setCaptchaTimeLeft(120);
  };

  useEffect(() => {
    generateCaptcha();
    const params = new URLSearchParams(window.location.search);
    if (params.get('intent') === 'estimate') {
      setFormStep(2);
      setFormData((prev) => ({
        ...prev,
        message: prev.message || 'I would like a fixed-price estimate for my project.',
      }));
    }
  }, []);

  useEffect(() => {
    if (captchaTimeLeft <= 0) {
      if (hasInteractedWithForm) {
        showToast('Captcha expired. Please solve the new problem.', 'warning');
      }
      generateCaptcha();
      return;
    }

    const timer = setInterval(() => {
      setCaptchaTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          if (hasInteractedWithForm) {
            setTimeout(() => {
              showToast('Captcha expired. Please solve the new problem.', 'warning');
            }, 0);
          }
          generateCaptcha();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [captchaTimeLeft, hasInteractedWithForm]);

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setFieldErrors({ name: '', email: '', message: '' });

    if (!validateForm()) {
      showToast('Please fill in all required fields correctly.', 'error', 5000);
      return;
    }

    const userAnswer = parseInt(captchaInput.trim());
    if (isNaN(userAnswer) || userAnswer !== captchaAnswer) {
      setCaptchaError(true);
      showToast('Incorrect answer. Please try again.', 'error', 5000);
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          company: formData.company || '',
          hoursPerWeek: formData.hoursPerWeek || '',
          bestTimeToCall: formData.bestTimeToCall || '',
          service: selectedService || '',
          message: formData.message,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (_) {
        setIsSubmitting(false);
        showToast(
          `The contact service is temporarily unavailable. Please email rob@excelaccessconsultant.com or call ${CTA.phone}.`,
          'error',
          8000,
        );
        return;
      }

      if (response.ok && data.success) {
        trackFormSubmit(selectedService || 'general');
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          hoursPerWeek: '',
          bestTimeToCall: '',
          message: '',
        });
        setSelectedService('');
        setFormStep(1);
        router.push('/thank-you');
      } else {
        setIsSubmitting(false);
        const errorMessage =
          data.error || data.message || 'Failed to send message. Please try again.';
        showToast(errorMessage, 'error', 8000);
      }
    } catch (error) {
      setIsSubmitting(false);
      showToast(
        `Network error. Please check your connection and try again, or email rob@excelaccessconsultant.com / call ${CTA.phone}.`,
        'error',
        8000,
      );
    }
  };

  const handleInputChange = (e) => {
    setHasInteractedWithForm(true);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const captchaTimerClass =
    captchaTimeLeft <= 30
      ? 'captcha-timer captcha-timer--danger'
      : captchaTimeLeft <= 60
        ? 'captcha-timer captcha-timer--warning'
        : 'captcha-timer captcha-timer--normal';

  return (
    <>
      <SEO
        title='Contact | ExcelAccessConsultant.com'
        description={`Get in touch for a free consultation. Excel VBA automation and Access database consulting. Call ${CTA.phone} or email rob@excelaccessconsultant.com`}
        keywords='excel consultant contact, access database help, vba automation contact, excel automation quote'
        url='https://excelaccessconsultant.com/contact'
        ogTitle='Contact - ExcelAccessConsultant.com'
      />

      <div className='page'>
        <section className='page-hero page-hero--centered'>
          <div className='container'>
            <span className='chip-primary lead-magnet-hero__eyebrow'>
              Free 30-Minute Consultation
            </span>
            <h1 className='page-hero__title page-hero__title--compact'>Get in Touch</h1>
            <p className='page-hero__lead'>
              Tell me about your Excel or Access project, a crashing database, a report that eats
              half a day, or a migration you have been putting off. I respond within 24 hours, with{' '}
              {TRUST.years} of experience and {TRUST.projects} completed projects behind every
              recommendation.
            </p>
            <div className='contact-hero__channels'>
              <a href={CTA.phoneHref} className='contact-hero__channel'>
                <span className='contact-hero__channel-label'>Phone</span>
                <span className='contact-hero__channel-value'>{CTA.phone}</span>
              </a>
              <a href='mailto:rob@excelaccessconsultant.com' className='contact-hero__channel'>
                <span className='contact-hero__channel-label'>Email</span>
                <span className='contact-hero__channel-value'>rob@excelaccessconsultant.com</span>
              </a>
            </div>
          </div>
        </section>

        <ScrollReveal
          as='section'
          id='contact'
          className='page-section page-section--alt page-section--border'
        >
          <div className='container'>
            <div className='section-header section-header--lg'>
              <h2 className='section-header__title'>Start Your Project Inquiry</h2>
              <p className='section-header__desc'>
                Two quick steps, pick a service, then share the details. Fixed-price quotes after
                consultation.
              </p>
            </div>

            <div className='contact-grid'>
              <div className='contact-col'>
                <div className='contact-info-card'>
                  <span className='chip-primary'>No-Obligation Call</span>
                  <h2 className='contact-info-card__title'>Free consultation</h2>
                  <p className='contact-info-card__lead'>
                    Let&apos;s talk about your problem. No charge for the first conversation.
                  </p>

                  <div className='contact-info-card__pricing'>
                    <div className='text-price'>$90/hour</div>
                    <div className='text-muted-sm'>For consulting and diagnostic work</div>
                  </div>

                  <CheckList items={CONTACT_PROMISES} accent='primary' />

                  <p className='contact-info-card__note text-muted-sm'>
                    I tell you what it costs before I start. No surprises.
                  </p>

                  <div className='contact-info-card__channels'>
                    <div>
                      <p className='contact-info-card__channel-label'>Phone</p>
                      <a href={CTA.phoneHref} className='text-link text-link--underline'>
                        {CTA.phone}
                      </a>
                    </div>
                    <div>
                      <p className='contact-info-card__channel-label'>Email</p>
                      <a
                        href='mailto:rob@excelaccessconsultant.com'
                        className='text-link text-link--underline'
                      >
                        rob@excelaccessconsultant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='contact-col'>
                <div className='contact-form-card'>
                  <div className='form-progress'>
                    <div
                      className={`form-progress__bar ${formStep >= 1 ? 'form-progress__bar--active' : ''}`}
                    />
                    <div
                      className={`form-progress__bar ${formStep >= 2 ? 'form-progress__bar--active' : ''}`}
                    />
                  </div>
                  <div className='form-step-label'>Step {formStep} of 2</div>

                  {formStep === 1 ? (
                    <div className='stack stack--lg'>
                      <div>
                        <h3>What do you need help with?</h3>
                        <p className='text-muted'>
                          Select the service that best matches your needs. You can always change
                          this later.
                        </p>
                        <div className='service-radio-list'>
                          {CONTACT_SERVICES.map((service) => (
                            <label
                              key={service.value}
                              className={[
                                'service-radio',
                                `service-radio--${service.accent}`,
                                selectedService === service.value ? 'service-radio--selected' : '',
                              ]
                                .filter(Boolean)
                                .join(' ')}
                            >
                              <input
                                type='radio'
                                name='service'
                                value={service.value}
                                checked={selectedService === service.value}
                                onChange={(e) => setSelectedService(e.target.value)}
                              />
                              <span className='service-radio__label'>{service.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <Button
                        type='button'
                        variant='primary'
                        size='large'
                        onClick={() => {
                          if (selectedService) {
                            setFormStep(2);
                          } else {
                            showToast('Please select a service to continue.', 'error', 5000);
                          }
                        }}
                        className='btn--full'
                      >
                        Continue →
                      </Button>
                    </div>
                  ) : (
                    <form className='stack stack--lg' onSubmit={handleFormSubmit} noValidate>
                      <div className='form-group'>
                        <label htmlFor='name' className='form-label'>
                          Full Name <span className='text-required'>*</span>
                        </label>
                        <input
                          id='name'
                          name='name'
                          type='text'
                          value={formData.name}
                          onChange={(e) => {
                            handleInputChange(e);
                            if (fieldErrors.name) {
                              setFieldErrors({ ...fieldErrors, name: '' });
                            }
                          }}
                          className={`input-field ${
                            fieldErrors.name && fieldErrors.name.trim() !== ''
                              ? 'input-field--error'
                              : ''
                          }`}
                          placeholder='Your full name'
                        />
                        {fieldErrors.name && fieldErrors.name.trim() !== '' && (
                          <p className='form-error'>{fieldErrors.name}</p>
                        )}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email' className='form-label'>
                          Email Address <span className='text-required'>*</span>
                        </label>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          value={formData.email}
                          onChange={(e) => {
                            handleInputChange(e);
                            if (fieldErrors.email) {
                              setFieldErrors({ ...fieldErrors, email: '' });
                            }
                          }}
                          className={`input-field ${
                            fieldErrors.email && fieldErrors.email.trim() !== ''
                              ? 'input-field--error'
                              : ''
                          }`}
                          placeholder='your.email@company.com'
                        />
                        {fieldErrors.email && fieldErrors.email.trim() !== '' && (
                          <p className='form-error'>{fieldErrors.email}</p>
                        )}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='phone' className='form-label'>
                          Phone Number
                        </label>
                        <input
                          id='phone'
                          name='phone'
                          type='tel'
                          value={formData.phone}
                          onChange={handleInputChange}
                          className='input-field'
                          placeholder='Your phone number'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='company' className='form-label'>
                          Company Name
                        </label>
                        <input
                          id='company'
                          name='company'
                          type='text'
                          value={formData.company}
                          onChange={handleInputChange}
                          className='input-field'
                          placeholder='Your company'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='hoursPerWeek' className='form-label'>
                          Hours per week on this process
                        </label>
                        <input
                          id='hoursPerWeek'
                          name='hoursPerWeek'
                          type='number'
                          min='0'
                          step='0.5'
                          value={formData.hoursPerWeek}
                          onChange={handleInputChange}
                          className='input-field'
                          placeholder='e.g. 6'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='bestTimeToCall' className='form-label'>
                          Best time to call
                        </label>
                        <select
                          id='bestTimeToCall'
                          name='bestTimeToCall'
                          value={formData.bestTimeToCall}
                          onChange={handleInputChange}
                          className='input-field'
                        >
                          <option value=''>Select a time window</option>
                          <option value='morning'>Morning (8am–12pm MT)</option>
                          <option value='afternoon'>Afternoon (12pm–5pm MT)</option>
                          <option value='evening'>Evening (5pm–7pm MT)</option>
                          <option value='anytime'>Anytime</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='message' className='form-label'>
                          What process takes too long? <span className='text-required'>*</span>
                        </label>
                        <textarea
                          id='message'
                          name='message'
                          rows='5'
                          value={formData.message}
                          onChange={(e) => {
                            handleInputChange(e);
                            if (fieldErrors.message) {
                              setFieldErrors({ ...fieldErrors, message: '' });
                            }
                          }}
                          className={`input-field ${
                            fieldErrors.message && fieldErrors.message.trim() !== ''
                              ? 'input-field--error'
                              : ''
                          }`}
                          placeholder='Describe the process or task that takes too long...'
                        />
                        {fieldErrors.message && fieldErrors.message.trim() !== '' && (
                          <p className='form-error'>{fieldErrors.message}</p>
                        )}
                      </div>
                      <div className='form-group'>
                        <div className='form-label-row'>
                          <label htmlFor='captcha' className='form-label'>
                            Security Check <span className='text-required'>*</span>
                          </label>
                          <span className={captchaTimerClass}>
                            {Math.floor(captchaTimeLeft / 60)}:
                            {(captchaTimeLeft % 60).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <div className='captcha-row'>
                          <div className='captcha-display'>
                            <span className='captcha-display__question'>{captchaQuestion}</span>
                            <span className='captcha-display__equals'>=</span>
                          </div>
                          <input
                            id='captcha'
                            type='number'
                            required
                            value={captchaInput}
                            onChange={(e) => {
                              setHasInteractedWithForm(true);
                              setCaptchaInput(e.target.value);
                              setCaptchaError(false);
                            }}
                            className={`input-field input-field--captcha ${
                              captchaError ? 'input-field--error' : ''
                            }`}
                            placeholder='?'
                            autoComplete='off'
                          />
                          <button
                            type='button'
                            onClick={generateCaptcha}
                            className='captcha-refresh'
                            aria-label='Refresh captcha'
                            title='Get a new question'
                          >
                            <svg
                              className='icon-arrow'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                              />
                            </svg>
                          </button>
                        </div>
                        {captchaError && (
                          <div className='captcha-error-banner'>
                            <div className='captcha-error-banner__content'>
                              <svg
                                className='captcha-error-banner__icon'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <p className='captcha-error-banner__text'>
                                Incorrect answer. Please try again.
                              </p>
                            </div>
                            <button
                              type='button'
                              onClick={() => setCaptchaError(false)}
                              className='captcha-error-banner__dismiss'
                              aria-label='Dismiss error'
                            >
                              <svg
                                className='icon-arrow'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                        <p className='captcha-hint'>
                          Solve the math problem to verify you&apos;re human
                        </p>
                      </div>
                      <div className='form-actions'>
                        <button type='button' onClick={() => setFormStep(1)} className='btn-back'>
                          ← Back
                        </button>
                        <Button
                          type='submit'
                          variant='primary'
                          size='large'
                          disabled={isSubmitting}
                          className='btn--flex'
                          aria-label='Send project details for consultation'
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className='icon-spin'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                aria-hidden='true'
                              >
                                <circle
                                  className='icon-spin__track'
                                  cx='12'
                                  cy='12'
                                  r='10'
                                  stroke='currentColor'
                                  strokeWidth='4'
                                />
                                <path
                                  className='icon-spin__path'
                                  fill='currentColor'
                                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                />
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <span>Send Project Details</span>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as='section'
          className='page-section page-section--white page-section--border'
          delay={80}
        >
          <div className='container'>
            <div className='section-header section-header--lg'>
              <h2 className='section-header__title'>While You Wait</h2>
              <p className='section-header__desc'>
                Free tools and answers to common questions about Excel and Access projects.
              </p>
            </div>
            <div className='cs-grid stagger-group'>
              {CONTACT_RELATED_LINKS.map((link) => (
                <Link key={link.num} href={link.href} className={`cs-item cs-item--${link.accent}`}>
                  <span className='cs-item__num'>{link.num}</span>
                  <div className='cs-item__body'>
                    <span className='cs-item__industry'>{link.industry}</span>
                    <h3 className='cs-item__title'>{link.title}</h3>
                    <p className='cs-item__outcome'>{link.outcome}</p>
                  </div>
                  <ItemArrow />
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <DataSecurityDisclaimer />
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </>
  );
}
