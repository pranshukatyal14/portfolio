import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Modal from './components/Modal/Modal';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const { handleScroll } = useScrollAnimation();

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, [handleScroll]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Introduction />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Modal />
    </div>
  );
}

export default App;
