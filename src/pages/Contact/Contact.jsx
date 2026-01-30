import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';
import ToastContainer from '../../components/ui/Toast/ToastContainer';
import '../../styles/global.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1); // 1 = service selection, 2 = detailed info
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaTimeLeft, setCaptchaTimeLeft] = useState(120); // 2 minutes in seconds
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
    // Generate single-digit math problems for user-friendly verification
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let num1, num2, answer, question;

    switch (operation) {
      case '+':
        // Addition: 1-9 + 1-9 (results: 2-18)
        num1 = Math.floor(Math.random() * 9) + 1; // 1-9
        num2 = Math.floor(Math.random() * 9) + 1; // 1-9
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        break;
      case '-':
        // Subtraction: single digits, ensure positive result
        num1 = Math.floor(Math.random() * 9) + 1; // 1-9
        num2 = Math.floor(Math.random() * num1) + 1; // 1 to num1 (ensures num1 >= num2)
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
    setCaptchaTimeLeft(120); // Reset timer to 2 minutes
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Captcha expiration timer - only show warnings if user has interacted with form
  useEffect(() => {
    if (captchaTimeLeft <= 0) {
      // Only show warning if user has interacted with the form
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
          // Only show warning if user has interacted with the form
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

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setFieldErrors({ name: '', email: '', message: '' });

    // Validate form fields
    if (!validateForm()) {
      showToast('Please fill in all required fields correctly.', 'error', 5000);
      return;
    }

    // Validate captcha
    const userAnswer = parseInt(captchaInput.trim());
    if (isNaN(userAnswer) || userAnswer !== captchaAnswer) {
      setCaptchaError(true);
      showToast('Incorrect answer. Please try again.', 'error', 5000);
      generateCaptcha(); // Generate new captcha on error
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
          'The contact service is temporarily unavailable. Please email rob@excelaccessconsultant.com or call 801-616-3702.',
          'error',
          8000
        );
        return;
      }

      if (response.ok && data.success) {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSelectedService('');
        setFormStep(1);
        navigate('/thank-you');
      } else {
        setIsSubmitting(false);
        const errorMessage = data.error || data.message || 'Failed to send message. Please try again.';
        showToast(errorMessage, 'error', 8000);
      }
    } catch (error) {
      setIsSubmitting(false);
      showToast(
        'Network error. Please check your connection and try again, or email rob@excelaccessconsultant.com / call 801-616-3702.',
        'error',
        8000
      );
    }
  };

  const handleInputChange = (e) => {
    setHasInteractedWithForm(true); // Mark that user has interacted with form
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title='Contact | ExcelAccessConsultant.com'
        description='Get in touch for a free consultation. Excel VBA automation and Access database consulting. Call 801-616-3702 or email rob@excelaccessconsultant.com'
        keywords='excel consultant contact, access database help, vba automation contact, excel automation quote'
        url='https://excelaccessconsultant.com/contact'
        ogTitle='Contact - ExcelAccessConsultant.com'
      />

      <div className='bg-base min-h-screen text-slate-800 font-sans selection:bg-primary selection:text-white'>
        {/* Pricing & Contact Section */}
        <section id='contact' className='py-8 md:py-12 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-8 md:mb-16'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                Let&apos;s Get to Work.
              </h2>
              <p className='text-body-lg text-slate-600 max-w-[44rem] mx-auto leading-relaxed'>
                Tell me what&apos;s broken or what you need built. I&apos;m based in Springville, Utah, and work with
                clients nationwide. I&apos;ll look at your project and get back to you within 24 hours so we can
                see if we&apos;re a good fit.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch'>
              {/* Pricing Content */}
              <div className='flex flex-col'>
                <h3 className='text-heading-md md:text-heading-lg font-bold mb-6 font-display text-slate-900'>
                  Pricing
                </h3>
                <div className='bg-white border border-slate-200 shadow-card p-md rounded-card space-y-6 flex-1 flex flex-col min-h-0'>
                  <div>
                    <h4 className='text-heading-sm md:text-heading-md font-bold mb-4 font-display text-slate-900'>
                      Free consultation
                    </h4>
                    <p className='text-slate-600'>
                      Let&apos;s talk about your problem. No charge for the first conversation.
                    </p>
                  </div>

                  <div className='pt-4 border-t border-slate-200'>
                    <div className='text-primary text-3xl font-bold mb-2'>$90/hour</div>
                    <div className='text-body-sm text-slate-600 mb-4'>
                      For consulting and diagnostic work
                    </div>
                  </div>

                  <div className='pt-4 border-t border-slate-200 space-y-3 text-slate-600'>
                    <p>• Most projects are fixed-price once we agree on scope</p>
                    <p>• No monthly fees or licenses</p>
                    <p>• You own everything I build</p>
                  </div>

                  <div className='pt-4 border-t border-slate-200'>
                    <p className='text-slate-600'>
                      I tell you what it costs before I start. No surprises.
                    </p>
                  </div>

                  <div className='pt-6 border-t border-slate-200'>
                    <div className='space-y-3'>
                      <div>
                        <p className='text-sm font-medium text-slate-700 mb-1'>Phone</p>
                        <a
                          href='tel:8016163702'
                          className='text-primary font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded'
                        >
                          801-616-3702
                        </a>
                      </div>
                      <div>
                        <p className='text-body-sm font-medium text-slate-700 mb-1'>Email</p>
                        <a
                          href='mailto:rob@excelaccessconsultant.com'
                          className='text-primary font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded'
                        >
                          rob@excelaccessconsultant.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className='flex flex-col'>
                <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
                  Get Started
                </h2>
                <div className='card flex-1 flex flex-col min-h-0'>
                  {/* Step Indicator */}
                  <div className='mb-6 flex items-center gap-2'>
                    <div
                      className={`flex-1 h-1.5 rounded-full transition-all duration-standard ${formStep >= 1 ? 'bg-primary' : 'bg-slate-200'}`}
                    ></div>
                    <div
                      className={`flex-1 h-1.5 rounded-full transition-all duration-standard ${formStep >= 2 ? 'bg-primary' : 'bg-slate-200'}`}
                    ></div>
                  </div>
                  <div className='mb-6 text-body-sm text-slate-600 font-medium'>
                    Step {formStep} of 2
                  </div>

                  {formStep === 1 ? (
                    /* Step 1: Service Selection */
                    <div className='space-y-6'>
                      <div>
                        <h3 className='text-heading-sm md:text-heading-md font-bold mb-4 font-display text-slate-900'>
                          What do you need help with?
                        </h3>
                        <p className='text-slate-600 mb-6'>
                          Select the service that best matches your needs. You can always change
                          this later.
                        </p>
                        <div className='space-y-3'>
                          {[
                            { value: 'excel-automation', label: 'Excel Automation' },
                            { value: 'access-database', label: 'Access Database Help' },
                            { value: 'financial-modeling', label: 'Financial Modeling' },
                            { value: 'database-migration', label: 'Database Migration' },
                            { value: 'vba-development', label: 'VBA Development' },
                            { value: 'general', label: 'Not Sure / General Inquiry' },
                          ].map((service) => (
                            <label
                              key={service.value}
                              className={`flex items-center p-4 border-2 rounded-card cursor-pointer ${
                                selectedService === service.value
                                  ? 'border-primary bg-primary/5 shadow-md'
                                  : 'border-slate-200'
                              }`}
                            >
                              <input
                                type='radio'
                                name='service'
                                value={service.value}
                                checked={selectedService === service.value}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className='mr-3 w-4 h-4 flex-shrink-0 text-primary border-slate-300 focus:ring-0 focus:ring-offset-0 focus:outline-none'
                              />
                              <span className='text-slate-900 font-medium'>{service.label}</span>
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
                        className='w-full'
                      >
                        Continue →
                      </Button>
                    </div>
                  ) : (
                    /* Step 2: Detailed Information */
                    <form className='space-y-6' onSubmit={handleFormSubmit} noValidate>
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-slate-700 mb-2'
                        >
                          Full Name <span className='text-red-600'>*</span>
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
                          className={`w-full px-4 py-3 bg-white border text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary ${
                            fieldErrors.name && fieldErrors.name.trim() !== ''
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-slate-300 focus:border-primary'
                          }`}
                          placeholder='Your full name'
                        />
                        {fieldErrors.name && fieldErrors.name.trim() !== '' && (
                          <p className='text-red-600 text-sm mt-1'>{fieldErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-slate-700 mb-2'
                        >
                          Email Address <span className='text-red-600'>*</span>
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
                          className={`w-full px-4 py-3 bg-white border text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary ${
                            fieldErrors.email && fieldErrors.email.trim() !== ''
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-slate-300 focus:border-primary'
                          }`}
                          placeholder='your.email@company.com'
                        />
                        {fieldErrors.email && fieldErrors.email.trim() !== '' && (
                          <p className='text-red-600 text-sm mt-1'>{fieldErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-slate-700 mb-2'
                        >
                          Phone Number
                        </label>
                        <input
                          id='phone'
                          name='phone'
                          type='tel'
                          value={formData.phone}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary'
                          placeholder='Your phone number'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='message'
                          className='block text-sm font-medium text-slate-700 mb-2'
                        >
                          What process takes too long? <span className='text-red-600'>*</span>
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
                          className={`w-full px-4 py-3 bg-white border text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary resize-y ${
                            fieldErrors.message && fieldErrors.message.trim() !== ''
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-slate-300 focus:border-primary'
                          }`}
                          placeholder='Describe the process or task that takes too long...'
                        ></textarea>
                        {fieldErrors.message && fieldErrors.message.trim() !== '' && (
                          <p className='text-red-600 text-sm mt-1'>{fieldErrors.message}</p>
                        )}
                      </div>
                      <div>
                        <div className='flex items-center justify-between mb-2'>
                          <label
                            htmlFor='captcha'
                            className='block text-sm font-medium text-slate-700'
                          >
                            Security Check <span className='text-red-600'>*</span>
                          </label>
                          <span
                            className={`text-xs font-medium ${
                              captchaTimeLeft <= 30
                                ? 'text-red-600'
                                : captchaTimeLeft <= 60
                                  ? 'text-yellow-600'
                                  : 'text-slate-500'
                            }`}
                          >
                            {Math.floor(captchaTimeLeft / 60)}:
                            {(captchaTimeLeft % 60).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <div className='flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-50 border border-slate-300 rounded font-mono'>
                            <span className='text-slate-900 font-bold text-xl'>
                              {captchaQuestion}
                            </span>
                            <span className='text-slate-600 text-lg'>=</span>
                          </div>
                          <input
                            id='captcha'
                            type='number'
                            required
                            value={captchaInput}
                            onChange={(e) => {
                              setHasInteractedWithForm(true); // Mark that user has interacted with form
                              setCaptchaInput(e.target.value);
                              setCaptchaError(false);
                            }}
                            className={`w-24 px-4 py-3 bg-white border text-slate-900 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                              captchaError
                                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                : 'border-slate-300'
                            }`}
                            placeholder='?'
                            autoComplete='off'
                          />
                          <button
                            type='button'
                            onClick={generateCaptcha}
                            className='px-3 py-3 text-slate-600 border border-slate-300 rounded'
                            aria-label='Refresh captcha'
                            title='Get a new question'
                          >
                            <svg
                              className='w-5 h-5'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
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
                          <div className='mt-3 p-4 bg-primary rounded-lg shadow-md flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                              <svg
                                className='w-5 h-5 text-white flex-shrink-0'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <p className='text-sm font-semibold text-white'>
                                Incorrect answer. Please try again.
                              </p>
                            </div>
                            <button
                              type='button'
                              onClick={() => setCaptchaError(false)}
                              className='text-white hover:text-slate-200 transition-colors ml-4'
                              aria-label='Dismiss error'
                            >
                              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                <path
                                  fillRule='evenodd'
                                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                        <p className='text-xs text-slate-500 mt-2'>
                          Solve the math problem to verify you&apos;re human
                        </p>
                      </div>
                      <div className='flex gap-3'>
                        <button
                          type='button'
                          onClick={() => setFormStep(1)}
                          className='flex-1 bg-white text-slate-700 border-2 border-slate-300 px-6 py-4 text-base font-medium rounded-md'
                        >
                          ← Back
                        </button>
                        <Button
                          type='submit'
                          variant='primary'
                          size='large'
                          disabled={isSubmitting}
                          className='flex-1 flex items-center justify-center gap-2'
                          aria-label='Submit contact form'
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className='animate-spin h-5 w-5 text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                              >
                                <circle
                                  className='opacity-25'
                                  cx='12'
                                  cy='12'
                                  r='10'
                                  stroke='currentColor'
                                  strokeWidth='4'
                                ></circle>
                                <path
                                  className='opacity-75'
                                  fill='currentColor'
                                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                ></path>
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <span>Send Message</span>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toast Notifications */}
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </>
  );
};

export default Contact;
