import { useState } from 'react';
import './ContactForm.css';
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

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
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
    }, 1000);
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
          Thank you! Your message has been sent. We'll respond within one business day.
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

