import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Testimonials.css';

const Testimonials = () => {
  const [ref] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const testimonials = [
    {
      text: "I thought it was impossible to make a website as beautiful as our product, but John proved me wrong.",
      name: "Sara Lee",
      designation: "CFO of Acme Co",
      avatar: "S"
    },
    {
      text: "I've never met a web developer who truly cares about their clients' success like John does.",
      name: "Chris Brown",
      designation: "COO of DEF Corp",
      avatar: "C"
    },
    {
      text: "After John optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO of 456 Enterprises",
      avatar: "L"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">What Others Say</p>
          <h2 className="section-title">Testimonials</h2>
        </div>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
