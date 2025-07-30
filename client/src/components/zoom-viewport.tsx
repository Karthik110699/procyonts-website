import { useState, useEffect } from "react";
import HeroSection from "./hero-section";
import FourPillarsSection from "./four-pillars-section";
import ServicesSection from "./services-section";
import AboutSection from "./about-section";
import TestimonialsSection from "./testimonials-section";
import ClientsSection from "./clients-section";

export default function ZoomViewport() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
          const newSection = Math.floor(scrollY / sectionHeight);
          
          if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
            if (!isTransitioning) {
              setIsTransitioning(true);
              
              // Delay section change for smooth transition
              setTimeout(() => {
                setCurrentSection(newSection);
                setTimeout(() => {
                  setIsTransitioning(false);
                }, 1000);
              }, 500);
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, isTransitioning, sections.length]);

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
          const isPrev = index === currentSection - 1;
          
          return (
            <div
              key={section.name}
              className={`zoom-section-container ${
                isActive ? 'active' : 
                (isNext || isPrev) ? 'zoom-out' : ''
              }`}
              style={{
                zIndex: isActive ? 10 : isNext ? 5 : isPrev ? 5 : 1,
                transition: `all 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`
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