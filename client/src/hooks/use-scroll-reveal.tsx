import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    let scrollVelocity = 0;
    let ticking = false;
    let isFirstScroll = true;
    let hasInitiallyActivated = false;

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const zoomObserverOptions = {
      threshold: [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95],
      rootMargin: '0px 0px -30px 0px'
    };

    // Ultra-smooth scroll tracking with immediate first-scroll activation
    const updateScrollDirection = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          scrollVelocity = Math.abs(currentScrollY - lastScrollY);
          scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
          lastScrollY = currentScrollY;
          
          // First scroll - immediately activate all visible elements
          if (isFirstScroll && scrollVelocity > 0) {
            isFirstScroll = false;
            activateVisibleElements();
          }
          
          // Apply smooth transform to body for momentum feel
          document.body.style.transform = `translateY(${scrollVelocity * -0.1}px)`;
          setTimeout(() => {
            document.body.style.transform = 'translateY(0px)';
          }, 50);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Immediately activate all elements currently in viewport
    const activateVisibleElements = () => {
      const zoomElements = document.querySelectorAll('.zoom-section, .zoom-fade-in, .zoom-slide-up');
      zoomElements.forEach((element: Element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If element is in viewport, activate it immediately
        if (rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
          requestAnimationFrame(() => {
            element.classList.add('active');
            element.classList.remove('zoom-out', 'reverse');
            (element as HTMLElement).style.setProperty('--scroll-direction', 'down');
            (element as HTMLElement).style.transform = (element as HTMLElement).style.transform || 'translate3d(0, 0, 0)';
          });
        }
      });
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
        
        if (ratio > 0.2) {
          // Element entering viewport - ultra-smooth activation
          requestAnimationFrame(() => {
            element.classList.add('active');
            element.classList.remove('zoom-out', 'reverse');
            element.style.setProperty('--scroll-direction', scrollDirection);
            element.style.setProperty('--scroll-velocity', `${Math.min(scrollVelocity / 10, 1)}`);
            
            // Force hardware acceleration
            element.style.transform = element.style.transform || 'translate3d(0, 0, 0)';
          });
        } else if (ratio < 0.1) {
          // Element leaving viewport - buttery smooth deactivation
          const delay = Math.max(0, 50 - scrollVelocity * 0.5);
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

    // Immediate activation check for elements already visible on page load
    setTimeout(() => {
      if (!hasInitiallyActivated) {
        activateVisibleElements();
        hasInitiallyActivated = true;
        // Mark page as loaded for CSS animations
        document.body.classList.add('page-loaded');
      }
    }, 100);

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
