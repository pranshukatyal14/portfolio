import { useCallback, useRef } from 'react';

export const useScrollAnimation = () => {
  const observedElements = useRef(new Set());
  const countersAnimated = useRef(new Set());

  const animateElement = useCallback((element) => {
    if (observedElements.current.has(element)) return;
    
    const delay = parseInt(element.getAttribute('data-aos-delay')) || 0;
    
    setTimeout(() => {
      element.classList.add('animate');
      observedElements.current.add(element);
    }, delay);
  }, []);

  const animateCounter = useCallback((element) => {
    const target = parseInt(element.getAttribute('data-target'));
    if (isNaN(target)) return;
    
    const duration = 2000;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(target * easeOutExpo);
      
      element.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, []);

  const handleScroll = useCallback(() => {
    // Handle scroll animations
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
      if (observedElements.current.has(element)) return;
      
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        animateElement(element);
      }
    });

    // Handle counter animations
    const counterElements = document.querySelectorAll('.metric-number[data-target]');
    counterElements.forEach((counter, index) => {
      if (countersAnimated.current.has(counter)) return;
      
      const elementTop = counter.getBoundingClientRect().top;
      const elementVisible = 200;
      
      if (elementTop < window.innerHeight - elementVisible) {
        setTimeout(() => {
          animateCounter(counter);
          countersAnimated.current.add(counter);
        }, index * 50);
      }
    });
  }, [animateElement, animateCounter]);

  return { handleScroll };
};
