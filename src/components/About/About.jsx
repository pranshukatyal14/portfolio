import React from "react";
import "./About.css";
import resumePDF from "../../assets/Pranshu_Katyal_Resume.pdf"; 
// place your resume in src/assets/

// If you want a Lottie animation, install: npm install lottie-react
import Lottie from "lottie-react";
import serverAnim from "../../assets/animations/server.json"; 
// download a JSON Lottie file (e.g., from lottiefiles.com) into src/assets/animations/

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">

        {/* LEFT SIDE: Animation */}
        <div className="about-visual">
          <Lottie animationData={serverAnim} loop={true} className="about-lottie" />
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-intro">
            I’m <span className="highlight">Pranshu Katyal</span>, a{" "}
            <strong>Backend Engineer</strong> with{" "}
            <strong>3.5+ years of experience</strong> in building scalable
            microservices, APIs, and cloud-native systems. I specialize in{" "}
            <span className="highlight">Node.js, TypeScript, and AWS</span>, 
            creating solutions that power millions of users reliably.
          </p>

          <p className="about-details">
            At <strong>Care Health Insurance</strong>, I’m modernizing enterprise 
            systems and improving API performance by <strong>40%</strong>, ensuring{" "}
            <strong>99.95% uptime</strong>. Previously at Noise, I worked on IoT-ready 
            backends supporting <strong>100K+ users</strong>, and began at BitCS, 
            contributing to multiple client projects.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-card">
              <h3>3.5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>2.5M+</h3>
              <p>Daily Users Served</p>
            </div>
            <div className="stat-card">
              <h3>99.95%</h3>
              <p>System Uptime</p>
            </div>
          </div>

          {/* CV Button */}
          <div className="about-actions">
            <a href={resumePDF} download className="btn-primary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
