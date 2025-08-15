import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Projects.css';

const Projects = () => {
  const [ref] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Node.js and React, featuring user authentication, payment integration, and admin dashboard.',
      tags: ['Node.js', 'React', 'MongoDB', 'Stripe API'],
      icon: '🛒',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time messaging application with Socket.io, featuring private messaging, group chats, and file sharing capabilities.',
      tags: ['Socket.io', 'Express', 'React', 'PostgreSQL'],
      icon: '💬',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'API Management System',
      description: 'A comprehensive API management system with rate limiting, authentication, monitoring, and analytics dashboard.',
      tags: ['Express.js', 'Redis', 'JWT', 'Docker'],
      icon: '🔧',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Cloud Storage Service',
      description: 'A secure cloud storage service with file encryption, sharing capabilities, and AWS S3 integration.',
      tags: ['AWS S3', 'Node.js', 'Multer', 'JWT'],
      icon: '☁️',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Task Management Tool',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      tags: ['React', 'Node.js', 'WebSockets', 'MySQL'],
      icon: '📋',
      liveLink: '#',
      sourceLink: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with data visualization, real-time metrics, and customizable reports.',
      tags: ['Chart.js', 'React', 'Express', 'MongoDB'],
      icon: '📊',
      liveLink: '#',
      sourceLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">My Work</p>
          <h2 className="section-title">Projects</h2>
        </div>
        
        <p className="projects-description">
          Following projects showcase my skills and experience through real-world examples 
          of my work. Each project is briefly described with links to code repositories 
          and live demos. It reflects my ability to solve complex problems, work with 
          different technologies, and manage projects effectively.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="project-image">
                <div className="project-3d-element">
                  <div className="rotating-cube">
                    <div className="cube-side front">{project.icon}</div>
                    <div className="cube-side back">{project.icon}</div>
                    <div className="cube-side right">{project.icon}</div>
                    <div className="cube-side left">{project.icon}</div>
                    <div className="cube-side top">{project.icon}</div>
                    <div className="cube-side bottom">{project.icon}</div>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">
                    Live Demo →
                  </a>
                  <a href={project.sourceLink} className="project-link">
                    Source Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
