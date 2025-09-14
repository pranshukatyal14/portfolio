import { useEffect, useRef, useState, useCallback } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  // FIXED: Memoize the options to prevent useEffect dependency issues
  const memoizedOptions = useCallback(() => ({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }), [options.threshold, options.rootMargin]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('[data-aos]');

          // ULTRA PERFORMANCE: Single RAF call instead of multiple timeouts
          requestAnimationFrame(() => {
            elements.forEach((element, index) => {
              // ULTRA PERFORMANCE: Immediate animation without delays
              element.style.transitionDelay = `${index * 0.1}s`;
              element.classList.add('animate');
            });
          });

          // PERFORMANCE: Disconnect immediately after use
          observer.disconnect();
        }
      },
      memoizedOptions()
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, [memoizedOptions]); // FIXED: Now properly includes memoized options

  return [targetRef, isIntersecting];
};