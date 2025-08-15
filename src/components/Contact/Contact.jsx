import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success modal
    const modal = document.getElementById('messageModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    if (modalIcon) modalIcon.textContent = '✅';
    if (modalTitle) modalTitle.textContent = 'Success!';
    if (modalMessage) modalMessage.textContent = 'Your message has been sent successfully! I\'ll get back to you soon.';
    
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
        </div>
        
        <div className="contact-content">
          <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="What's your good name?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="What's your web address?"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="What you want to say?"
                rows="7"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
              <span className="btn-text">
                {isSubmitting ? 'Sending...' : 'Send'}
              </span>
              <span className={`btn-loading ${isSubmitting ? 'show' : 'hidden'}`}>
                ⏳
              </span>
            </button>
          </form>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>pranshukatyal.tech@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                🐙 GitHub
              </a>
              <a href="#" className="social-link">
                💼 LinkedIn
              </a>
              <a href="#" className="social-link">
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
