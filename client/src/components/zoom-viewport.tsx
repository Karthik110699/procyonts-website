import { useState, useEffect } from "react";
import HeroSection from "./hero-section";
import FourPillarsSection from "./four-pillars-section";
import ServicesSection from "./services-section";
import AboutSection from "./about-section";
import TestimonialsSection from "./testimonials-section";
import ClientsSection from "./clients-section";

export default function ZoomViewport() {
  const [sectionsData, setSectionsData] = useState<Array<{scale: number, opacity: number, zIndex: number}>>([]);

  const sections = [
    { component: HeroSection, name: "hero" },
    { component: FourPillarsSection, name: "pillars" },
    { component: ServicesSection, name: "services" },
    { component: AboutSection, name: "about" },
    { component: TestimonialsSection, name: "testimonials" },
    { component: ClientsSection, name: "clients" }
  ];

  useEffect(() => {
    // Initialize sections data
    setSectionsData(sections.map(() => ({ scale: 0.3, opacity: 0, zIndex: 1 })));
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          
          const newSectionsData = sections.map((_, index) => {
            const sectionStart = index * viewportHeight;
            const sectionEnd = (index + 1) * viewportHeight;
            
            // Calculate how much of this section is visible
            const progress = Math.max(0, Math.min(1, (scrollY - sectionStart + viewportHeight) / (viewportHeight * 2)));
            
            // CredMoney-style scaling: starts small, grows to full size, then shrinks as it exits
            let scale: number;
            let opacity: number;
            let zIndex: number;
            
            if (scrollY < sectionStart - viewportHeight) {
              // Before section appears
              scale = 0.3;
              opacity = 0;
              zIndex = 1;
            } else if (scrollY >= sectionStart - viewportHeight && scrollY < sectionStart) {
              // Section is entering (zoom in)
              const enterProgress = (scrollY - (sectionStart - viewportHeight)) / viewportHeight;
              scale = 0.3 + (0.7 * enterProgress); // 0.3 to 1.0
              opacity = enterProgress;
              zIndex = 10;
            } else if (scrollY >= sectionStart && scrollY < sectionEnd) {
              // Section is active and visible
              scale = 1.0;
              opacity = 1;
              zIndex = 10;
            } else if (scrollY >= sectionEnd && scrollY < sectionEnd + viewportHeight) {
              // Section is exiting (zoom out)
              const exitProgress = (scrollY - sectionEnd) / viewportHeight;
              scale = 1.0 + (0.5 * exitProgress); // 1.0 to 1.5 (zoom out)
              opacity = 1 - exitProgress;
              zIndex = 5;
            } else {
              // After section has exited
              scale = 1.5;
              opacity = 0;
              zIndex = 1;
            }
            
            return { scale, opacity, zIndex };
          });
          
          setSectionsData(newSectionsData);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <>
      {/* Fixed viewport where sections appear */}
      <div className="zoom-viewport">
        <div className="wireframe-overlay"></div>
        <div className="morphing-bg"></div>
        
        {sections.map((section, index) => {
          const Component = section.component;
          const sectionData = sectionsData[index] || { scale: 0.3, opacity: 0, zIndex: 1 };
          
          return (
            <div
              key={section.name}
              className="zoom-section-container"
              style={{
                opacity: sectionData.opacity,
                transform: `scale(${sectionData.scale})`,
                zIndex: sectionData.zIndex,
                pointerEvents: sectionData.opacity > 0.5 ? 'auto' : 'none',
                transition: 'none',
                transformOrigin: 'center center'
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-none">
                  <Component />
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Section indicator */}
        <div className="fixed bottom-8 right-8 z-20 flex flex-col space-y-2">
          {sections.map((_, index) => {
            const isActive = sectionsData[index]?.opacity > 0.5;
            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                onClick={() => {
                  window.scrollTo({
                    top: index * window.innerHeight,
                    behavior: 'smooth'
                  });
                }}
                style={{ cursor: 'pointer' }}
              />
            );
          })}
        </div>
      </div>

      {/* Invisible scroll triggers */}
      <div className="scroll-trigger-container">
        {sections.map((section, index) => (
          <div key={`trigger-${section.name}`} className="scroll-trigger" />
        ))}
      </div>
    </>
  );
}