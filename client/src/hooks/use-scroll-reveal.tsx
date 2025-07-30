import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const zoomObserverOptions = {
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      rootMargin: '0px 0px -100px 0px'
    };

    // Track scroll direction
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a small delay for natural feel
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0');
          setTimeout(() => {
            entry.target.classList.add('active');
            entry.target.classList.remove('reverse');
          }, delay);
        } else if (entry.target.classList.contains('active')) {
          // Element is leaving viewport - add reverse animation
          entry.target.classList.add('reverse');
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    // Enhanced zoom effect observer with bidirectional support
    const zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        const element = entry.target as HTMLElement;
        
        if (ratio > 0.3) {
          // Element entering viewport
          element.classList.add('active');
          element.classList.remove('zoom-out', 'reverse');
          element.style.setProperty('--scroll-direction', scrollDirection);
        } else if (ratio < 0.1) {
          // Element leaving viewport
          if (scrollDirection === 'up' && element.classList.contains('active')) {
            // Scrolling up - reverse the zoom effect
            element.classList.add('reverse');
            element.classList.remove('active');
          } else if (scrollDirection === 'down' && element.classList.contains('active')) {
            // Scrolling down - zoom out effect
            element.classList.add('zoom-out');
            element.classList.remove('active');
          }
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
      window.removeEventListener('scroll', updateScrollDirection);
      allElements.forEach(el => {
        observer.unobserve(el);
      });
      zoomElements.forEach(el => {
        zoomObserver.unobserve(el);
      });
    };
  }, []);
}
