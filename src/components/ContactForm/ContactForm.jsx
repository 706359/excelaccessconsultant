import { useState } from 'react';
import Button from '../Button/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        
        // Reset status message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', data.error);
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <div className="ContactForm-field">
        <label htmlFor="name" className="ContactForm-label">
          Name <span className="ContactForm-required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="ContactForm-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="ContactForm-field">
        <label htmlFor="email" className="ContactForm-label">
          Business Email <span className="ContactForm-required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="ContactForm-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="ContactForm-field">
        <label htmlFor="company" className="ContactForm-label">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="ContactForm-input"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="ContactForm-field">
        <label htmlFor="message" className="ContactForm-label">
          Message <span className="ContactForm-required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="ContactForm-textarea"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {submitStatus === 'success' && (
        <div className="ContactForm-message ContactForm-message--success">
          Thanks! I got your message and I'll get back to you within one business day.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="ContactForm-message ContactForm-message--error">
          Sorry, there was an error sending your message. Please try again or contact us directly at rob.infodatix@gmail.com
        </div>
      )}

      <div className="ContactForm-actions">
        <Button 
          type="submit" 
          variant="primary" 
          size="large"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

