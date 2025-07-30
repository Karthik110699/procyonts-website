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
            // Each section should be triggered at viewport intervals
            const triggerStart = index * viewportHeight;
            const triggerEnd = triggerStart + viewportHeight;
            
            // Calculate the progress for this section based on scroll position
            let scale: number;
            let opacity: number;
            let zIndex: number;
            
            if (scrollY < triggerStart) {
              // Section hasn't started yet
              scale = 0.3;
              opacity = 0;
              zIndex = 1;
            } else if (scrollY >= triggerStart && scrollY < triggerEnd) {
              // Section is in view and transitioning
              const progress = (scrollY - triggerStart) / viewportHeight;
              
              if (progress <= 0.5) {
                // First half: zoom in (0.3 to 1.0)
                scale = 0.3 + (0.7 * progress * 2);
                opacity = progress * 2;
                zIndex = 10;
              } else {
                // Second half: zoom out (1.0 to 1.5)
                const exitProgress = (progress - 0.5) * 2;
                scale = 1.0 + (0.5 * exitProgress);
                opacity = 1 - exitProgress;
                zIndex = 5;
              }
            } else {
              // Section has finished
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
        
        {/* Section indicator with labels for debugging */}
        <div className="fixed bottom-8 right-8 z-20 flex flex-col space-y-2">
          {sections.map((section, index) => {
            const isActive = sectionsData[index]?.opacity > 0.5;
            return (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 w-16 text-right">{section.name}</span>
                <div
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
              </div>
            );
          })}
        </div>

        {/* Debug info */}
        <div className="fixed top-8 left-8 z-20 text-xs text-gray-400 bg-black/50 p-2 rounded">
          <div>Scroll: {Math.round(window.scrollY || 0)}px</div>
          <div>ViewHeight: {window.innerHeight}px</div>
          {sectionsData.map((data, index) => (
            <div key={index}>
              {sections[index].name}: scale={data.scale.toFixed(2)}, opacity={data.opacity.toFixed(2)}
            </div>
          ))}
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