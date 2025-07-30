import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const zoomObserverOptions = {
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      rootMargin: '0px 0px -100px 0px'
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

    // Zoom effect observer for special sections
    const zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        if (ratio > 0.3) {
          entry.target.classList.add('active');
          entry.target.classList.remove('zoom-out');
        } else if (ratio < 0.1 && entry.target.classList.contains('active')) {
          entry.target.classList.add('zoom-out');
        }
      });
    }, zoomObserverOptions);

    // Support multiple animation types
    const animationTypes = [
      '.reveal', 
      '.reveal-fade', 
      '.reveal-slide-left', 
      '.reveal-slide-right', 
      '.reveal-scale', 
      '.reveal-rotate'
    ];

    const zoomTypes = [
      '.zoom-section',
      '.zoom-fade-in',
      '.zoom-slide-up'
    ];

    const allElements: Element[] = [];
    const zoomElements: Element[] = [];

    // Regular animations
    animationTypes.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        allElements.push(el);
        observer.observe(el);
      });
    });

    // Zoom animations
    zoomTypes.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        zoomElements.push(el);
        zoomObserver.observe(el);
      });
    });

    return () => {
      allElements.forEach(el => {
        observer.unobserve(el);
      });
      zoomElements.forEach(el => {
        zoomObserver.unobserve(el);
      });
    };
  }, []);
}
