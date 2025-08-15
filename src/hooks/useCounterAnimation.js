import { useEffect, useRef } from 'react';

export const useCounterAnimation = (targetRef, target, duration = 2000) => {
  const countRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current || isNaN(target)) return;

    const element = targetRef.current;
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
  }, [target, duration]);

  return countRef;
};
