import React, { useCallback, useMemo } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Projects.css';

const Projects = () => {
  const [ref] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Memoize projects data to prevent re-renders
  const projects = useMemo(() => [
    {
      title: 'NoiseFit Application',
      description: 'A full-featured e-commerce platform built with Node.js and React, featuring user authentication, payment integration, and admin dashboard.',
      tags: ['Node.js', 'React', 'MongoDB', 'Stripe API'],
      icon: '🛒'
    },
    {
      title: 'Care Health Insurance Web Application',
      description: 'A real-time messaging application with Socket.io, featuring private messaging, group chats, and file sharing capabilities.',
      tags: ['Socket.io', 'Express', 'React', 'PostgreSQL'],
      icon: '💬'
    },
    {
      title: 'Noise Connect',
      description: 'A comprehensive API management system with rate limiting, authentication, monitoring, and analytics dashboard.',
      tags: ['Express.js', 'Redis', 'JWT', 'Docker'],
      icon: '🔧'
    },
    
  ], []);

  // Ultra-optimized project card component - REMOVED buttons
  const ProjectCard = useCallback(({ project, index }) => (
    <div 
      className="project-card"
      data-aos="fade-up"
      key={`project-${index}`}
    >
      <div className="project-image">
        <div className="project-3d-element">
          {/* ULTRA PERFORMANCE: Simplified cube - no complex 3D sides */}
          <div className="rotating-cube">
            {project.icon}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={`tag-${index}-${tagIndex}`} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* REMOVED: project-links section completely */}
      </div>
    </div>
  ), []);

  return (
    <section className="projects-section" ref={ref}>
      <div className="projects-header">
        <span className="section-subtitle">My Work</span>
        <h3 className="section-title">
          <span className="gradient-text">Projects</span>
        </h3>
      </div>

      <div className="projects-container">
        <p className="projects-description">
          Following projects showcase my skills and experience through real-world examples 
          of my work. Each project is briefly described with links to code repositories 
          and live demos. It reflects my ability to solve complex problems, work with 
          different technologies, and manage projects effectively.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;