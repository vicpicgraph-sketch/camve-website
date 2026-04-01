import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;
    setStatus('submitting');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for reaching out! Your message has been sent successfully.');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } finally {
      btn.innerHTML = originalHtml;
      btn.style.opacity = '1';
      btn.disabled = false;
    }
  };

  return (
    <div className="contact-page">
      <section id="contact" className="section bg-light">
        <div className="container contact-container">

          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="contact-desc">
              Whether you have a question about our services, pricing, need a consultation, or anything else, our team is ready to answer all your inquiries.
            </p>

            <div className="info-item">
              <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4>Head Office</h4>
                <p>No.30 Vellalar street, Kodambakkam, Chennai 600024</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-phone"></i></div>
              <div>
                <h4>Phone Number</h4>
                <p>+91 9688602250</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <h4>Email Address</h4>
                <p>camve88@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h2>Send us a Message</h2>
              <form id="contactForm" onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
