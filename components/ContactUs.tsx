import React, { useState } from 'react';
import { apiServices } from '../api/services';
import { sendContactEmails } from '../api/emailService';
import { useForm } from '../hooks/useForm';
import { CONTACT_TOPICS, TOPIC_RECIPIENTS, OFFICE_INFO } from '../data/contact';
import { ScrollReveal } from './shared/ScrollReveal';
import './ContactUs.css';

interface ContactFormData {
  topic: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const ContactUs: React.FC = () => {
  const [errorDetails, setErrorDetails] = useState<string>('');

  const {
    values,
    errors,
    isSubmitting,
    submitStatus,
    setSubmitStatus,
    handleChange,
    handleSubmit
  } = useForm<ContactFormData>({
    initialValues: {
      topic: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false
    },
    validate: (v) => {
      const errs: Partial<Record<keyof ContactFormData, string>> = {};
      if (!v.topic) errs.topic = 'Please select a topic';
      if (!v.name.trim()) errs.name = 'Full name is required';
      if (!v.email.trim()) errs.email = 'Email address is required';
      if (!v.message.trim()) errs.message = 'Message is required';
      return errs;
    },
    onSubmit: async (v) => {
      if (!v.consent) {
        alert('Please accept the data privacy consent to continue.');
        throw new Error('Consent required');
      }

      const recipient = TOPIC_RECIPIENTS[v.topic] || 'info@ovialand.com';
      const emailPayload = {
        ...v,
        recipient_email: recipient,
        date: new Date().toLocaleString('en-PH', { dateStyle: 'long', timeStyle: 'short' }),
      };

      try {
        await sendContactEmails(emailPayload);
      } catch (emailError) {
        console.warn('EmailJS failed, attempting API fallback:', emailError);
        await apiServices.submitContactForm(emailPayload);
      }
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  });

  return (
    <section id="contact-us" className="contact-us-section">
      <div className="contact-us-container">
        <div className="contact-us-content">
          <ScrollReveal animation="fade-right" className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="topic">Topic <span className="required">*</span></label>
                <select
                  id="topic"
                  name="topic"
                  value={values.topic}
                  onChange={handleChange}
                  required
                  className={`form-control ${errors.topic ? 'form-control-error' : ''}`}
                >
                  <option value="">Select a topic</option>
                  {CONTACT_TOPICS.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
                {errors.topic && <span className="text-red-500 text-sm mt-1 block">{errors.topic}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                    className={`form-control ${errors.name ? 'form-control-error' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                    className={`form-control ${errors.email ? 'form-control-error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="+63 XXX XXX XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  required
                  className={`form-control ${errors.message ? 'form-control-error' : ''}`}
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>}
              </div>

              <div className="form-group consent-group">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={values.consent}
                    onChange={handleChange}
                    required
                    className="consent-checkbox"
                  />
                  <span className="consent-text">
                    By clicking, you consent to the collection and processing of the following personal
                    data necessary to address your query. These data are protected under the Data Privacy
                    Act and our Company's Privacy Notice.
                  </span>
                </label>
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <strong>Something went wrong.</strong>
                  {errorDetails && <p>{errorDetails}</p>}
                  <p>Please try again or contact support.</p>
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting || !values.consent}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3>Contact Information</h3>

              <div className="contact-section">
                <h4>Office Address</h4>
                <p className="address">
                  {OFFICE_INFO.address.split(',').map((part, i) => (
                    <React.Fragment key={i}>
                      {part.trim()}
                      {i === 0 ? <br /> : i < OFFICE_INFO.address.split(',').length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="contact-section">
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${OFFICE_INFO.phoneRaw}`}>{OFFICE_INFO.phone}</a>
                </p>
              </div>

              <div className="contact-section">
                <h4>Office Hours</h4>
                <p>{OFFICE_INFO.hours}</p>
              </div>

              <div className="contact-section">
                <h4>Email Addresses</h4>
                <div className="email-list">
                  {OFFICE_INFO.emails.map((item, i) => (
                    <div key={i} className="email-item">
                      <strong>{item.label}:</strong>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
