import React from 'react';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Experience.css';

const Experience = () => {
  const [ref] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const experiences = [
    {
      company: 'CHI',
      role: 'Senior Backend Engineer',
      duration: '2022 - Present',
      logo: 'CHI',
      logoClass: 'chi-logo',
      description: 'Leading backend development for enterprise applications, implementing microservices architecture and optimizing database performance.',
      achievements: [
        { metric: '50', symbol: '+', label: 'APIs Developed' },
        { metric: '99', symbol: '%', label: 'Uptime Achieved' },
        { metric: '40', symbol: '%', label: 'Performance Boost' }
      ]
    },
    {
      company: 'Noise',
      role: 'Backend Developer',
      duration: '2021 - 2022',
      logo: 'N',
      logoClass: 'noise-logo',
      description: 'Developed scalable backend solutions for IoT devices and mobile applications, working with real-time data processing.',
      achievements: [
        { metric: '100', symbol: 'K+', label: 'Users Supported' },
        { metric: '25', symbol: '+', label: 'Features Built' },
        { metric: '30', symbol: '%', label: 'Load Reduction' }
      ]
    },
    {
      company: 'BitCS',
      role: 'Junior Developer',
      duration: '2020 - 2021',
      logo: 'B',
      logoClass: 'bitcs-logo',
      description: 'Started my journey in backend development, learning best practices and contributing to various client projects.',
      achievements: [
        { metric: '15', symbol: '+', label: 'Projects Completed' },
        { metric: '5', symbol: '+', label: 'Technologies Learned' },
        { metric: '95', symbol: '%', label: 'Client Satisfaction' }
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I've Done So Far</p>
          <h2 className="section-title">Work Experience</h2>
        </div>
        
        <div className="vertical-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card" 
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 200}
            >
              <div className="timeline-connector"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className={`company-logo ${exp.logoClass}`}>
                    {exp.logo}
                  </div>
                  <div className="experience-info">
                    <h4>{exp.role}</h4>
                    <h5>{exp.company}</h5>
                    <p className="duration">{exp.duration}</p>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement">
                      <div className="achievement-metric">
                        <span 
                          className="metric-number" 
                          data-target={achievement.metric.replace(/[^0-9]/g, '')}
                        >
                          0
                        </span>
                        <span className="metric-symbol">{achievement.symbol}</span>
                      </div>
                      <p>{achievement.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
