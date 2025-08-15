import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Introduction.css';

const Introduction = () => {
  const [ref] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const services = [
    {
      icon: '🚀',
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications using Node.js and modern frameworks.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Designing and implementing cloud infrastructure using AWS services for optimal performance.'
    },
    {
      icon: '⚡',
      title: 'API Development',
      description: 'Creating efficient RESTful APIs and GraphQL endpoints for seamless data communication.'
    },
    {
      icon: '🔧',
      title: 'System Architecture',
      description: 'Designing scalable system architectures that can handle high traffic and complex workflows.'
    }
  ];

  return (
    <section id="introduction" className="introduction" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Introduction</p>
          <h2 className="section-title">Overview</h2>
        </div>
        
        <p className="intro-text">
          I'm a skilled backend engineer with 3+ years of experience in Node.js, TypeScript, 
          and AWS cloud solutions. I'm a quick learner and collaborate closely with teams to 
          create efficient, scalable, and high-performance solutions that solve real-world problems. 
          Let's work together to bring your ideas to life!
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                <span className="icon-3d">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
