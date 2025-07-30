import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay for natural feel
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
        }
      });
    }, observerOptions);

    // Support multiple animation types
    const animationTypes = [
      '.reveal', 
      '.reveal-fade', 
      '.reveal-slide-left', 
      '.reveal-slide-right', 
      '.reveal-scale', 
      '.reveal-rotate'
    ];

    const allElements: Element[] = [];
    animationTypes.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        allElements.push(el);
        observer.observe(el);
      });
    });

    return () => {
      allElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
}
