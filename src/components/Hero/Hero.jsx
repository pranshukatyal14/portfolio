import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
      
      const elements = document.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const intensity = (index % 3 + 1) * 0.02;
        const xMove = mouseX * intensity * 50;
        const yMove = mouseY * intensity * 50;
        
        element.style.transform += ` translate(${xMove}px, ${yMove}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map(num => (
          <div key={num} className={`star star-${num}`}></div>
        ))}
      </div>
      
      <div className="hero-3d-container">
        {/* 3D Cubes */}
        <div className="floating-element cube-1">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
        
        <div className="floating-element cube-2">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
        
        {/* 3D Spheres */}
        <div className="floating-element sphere-1"></div>
        <div className="floating-element sphere-2"></div>
        
        {/* 3D Pyramid */}
        <div className="floating-element pyramid-1">
          <div className="pyramid-face face-1"></div>
          <div className="pyramid-face face-2"></div>
          <div className="pyramid-face face-3"></div>
          <div className="pyramid-face face-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-title">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">
                <span className="gradient-text">Pranshu Katyal</span>
              </span>
              <p className="hero-subtitle">
                I'm a skilled backend engineer with 3+ years of experience in Node.js, 
                TypeScript, and AWS cloud solutions. I'm a quick learner and collaborate 
                closely with teams to create efficient, scalable, and high-performance 
                solutions that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
