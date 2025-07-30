import { useState, useEffect } from "react";
import HeroSection from "./hero-section";
import FourPillarsSection from "./four-pillars-section";
import ServicesSection from "./services-section";
import AboutSection from "./about-section";
import TestimonialsSection from "./testimonials-section";
import ClientsSection from "./clients-section";

export default function ZoomViewport() {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { component: HeroSection, name: "hero" },
    { component: FourPillarsSection, name: "pillars" },
    { component: ServicesSection, name: "services" },
    { component: AboutSection, name: "about" },
    { component: TestimonialsSection, name: "testimonials" },
    { component: ClientsSection, name: "clients" }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const sectionHeight = window.innerHeight;
          const totalHeight = sectionHeight * sections.length;
          
          // Calculate current section and progress within that section
          const exactSection = Math.min(scrollY / sectionHeight, sections.length - 1);
          const newSection = Math.floor(exactSection);
          const progress = exactSection - newSection;
          
          setCurrentSection(newSection);
          setScrollProgress(progress);
          
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
          const isActive = index === currentSection;
          const isNext = index === currentSection + 1;
          
          // Calculate scale and opacity based on scroll progress
          let scale = 0.1;
          let opacity = 0;
          
          if (isActive) {
            scale = 0.1 + (0.9 * (1 - scrollProgress));
            opacity = 1 - scrollProgress * 0.3;
          } else if (isNext) {
            scale = 0.1 + (0.9 * scrollProgress);
            opacity = scrollProgress;
          }
          
          return (
            <div
              key={section.name}
              className="zoom-section-container"
              style={{
                opacity,
                transform: `scale(${scale}) translateZ(${scale < 1 ? -500 + (scale * 500) : 0}px)`,
                zIndex: isActive ? 10 : isNext ? 9 : 1,
                pointerEvents: isActive ? 'auto' : 'none',
                transition: 'none' // Remove transition for smooth scroll-based animation
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
          {sections.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection 
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