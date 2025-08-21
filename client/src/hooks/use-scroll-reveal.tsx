import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    let scrollVelocity = 0;
    let ticking = false;

    const observerOptions = {
      threshold: 0.01, // Much lower threshold to trigger earlier
      rootMargin: '300px 0px 300px 0px' // Large margins to trigger before elements are visible
    };

    const zoomObserverOptions = {
      threshold: [0.01, 0.05, 0.15, 0.25, 0.35, 0.5, 0.65, 0.8, 0.95],
      rootMargin: '400px 0px 400px 0px' // Extra large margins for early activation
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

    // Enhanced zoom effect observer with smoother bidirectional support
    const zoomObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        const element = entry.target as HTMLElement;
        
        if (ratio > 0.25) {
          // Element entering viewport - smooth activation with velocity consideration
          requestAnimationFrame(() => {
            element.classList.add('active');
            element.classList.remove('zoom-out', 'reverse');
            element.style.setProperty('--scroll-direction', scrollDirection);
            element.style.setProperty('--scroll-velocity', `${Math.min(scrollVelocity / 10, 1)}`);
          });
        } else if (ratio < 0.15) {
          // Element leaving viewport - smooth deactivation with momentum
          const delay = Math.max(0, 100 - scrollVelocity);
          setTimeout(() => {
            requestAnimationFrame(() => {
              if (scrollDirection === 'up' && element.classList.contains('active')) {
                // Scrolling up - reverse the zoom effect
                element.classList.add('reverse');
                element.classList.remove('active', 'zoom-out');
              } else if (scrollDirection === 'down' && element.classList.contains('active')) {
                // Scrolling down - zoom out effect
                element.classList.add('zoom-out');
                element.classList.remove('active', 'reverse');
              }
            });
          }, delay);
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

    // Auto-activate elements that are already in viewport or near it
    setTimeout(() => {
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      [...allElements, ...zoomElements].forEach(el => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        
        // If element is within 150% of viewport height from current scroll position, activate it
        if (elementTop <= scrollTop + (viewportHeight * 1.5)) {
          const delay = parseInt(el.getAttribute('data-delay') || '0');
          setTimeout(() => {
            el.classList.add('active');
            el.classList.remove('reverse');
          }, delay);
        }
      });
    }, 100); // Small delay to ensure all elements are rendered

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
