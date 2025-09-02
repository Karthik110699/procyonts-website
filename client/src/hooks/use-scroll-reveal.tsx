import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    let scrollVelocity = 0;
    let ticking = false;

    // Different settings for Enterprise/Services vs other pages
    const currentPath = window.location.pathname;
    const isEnterpriseOrServicesPage = currentPath.startsWith('/enterprise') || currentPath.startsWith('/services');
    
    const observerOptions = {
      threshold: isEnterpriseOrServicesPage ? 0.05 : 0.1,
      rootMargin: isEnterpriseOrServicesPage ? '300px 0px 300px 0px' : '100px 0px -50px 0px'
    };

    const zoomObserverOptions = {
      threshold: isEnterpriseOrServicesPage ? [0.01, 0.2] : [0.1, 0.4],
      rootMargin: isEnterpriseOrServicesPage ? '400px 0px 400px 0px' : '200px 0px -30px 0px'
    };

    // Track scroll direction and velocity for smoother transitions
    const updateScrollDirection = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          scrollVelocity = Math.abs(currentScrollY - lastScrollY);
          scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Immediate activation for faster loading
          const delay = isEnterpriseOrServicesPage ? 0 : parseInt(entry.target.getAttribute('data-delay') || '0') * 0.3;
          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add('active');
              entry.target.classList.remove('reverse');
            }, delay);
          } else {
            entry.target.classList.add('active');
            entry.target.classList.remove('reverse');
          }
        } else if (entry.target.classList.contains('active')) {
          // Faster reverse animations
          entry.target.classList.add('reverse');
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    // Simplified zoom observer for faster performance
    const zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        const element = entry.target as HTMLElement;
        
        if (ratio > 0.01) {
          // Immediate activation for faster loading
          element.classList.add('active');
          element.classList.remove('zoom-out', 'reverse');
        } else if (ratio === 0 && element.classList.contains('active')) {
          // Fast deactivation when completely out of view
          element.classList.add('reverse');
          element.classList.remove('active', 'zoom-out');
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

    // Optimize performance by removing auto-activation
    // Let intersection observers handle animations naturally

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
