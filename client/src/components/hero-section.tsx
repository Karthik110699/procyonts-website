import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "AI in the cloud",
      subtitle: "where innovation meets intelligence",
      description: "Leverage cloud-based AI to unlock real-time insights, boost innovation, and stay agile in a fast-changing market.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      ctaText: "Contact Us",
      ctaLink: "#contact"
    },
    {
      title: "AI-driven Salesforce solutions",
      subtitle: "for tomorrow's enterprises",
      description: "Procyon Technostructure transforms challenges into opportunities with tailored IT solutions.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      ctaText: "Call us Now",
      ctaLink: "#contact"
    },
    {
      title: "Transform your workflows",
      subtitle: "with ServiceNow",
      description: "A cloud-based platform that streamlines operations, automates tasks, and boosts productivity, helping businesses work smarter and faster.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      ctaText: "Revolutionize workflows",
      ctaLink: "#services"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-procyon-dark/90 to-blue-900/70"></div>
          </div>
        </div>
      ))}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Slide Content */}
          <div key={currentSlide} className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="block gradient-text">{heroSlides[currentSlide].title}</span>
              <span className="block text-white">{heroSlides[currentSlide].subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              {heroSlides[currentSlide].description}
            </p>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 font-semibold text-lg">
                Powered by Procyon
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={heroSlides[currentSlide].ctaLink} 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {heroSlides[currentSlide].ctaText}
              </a>
              <a href="#services" className="border-2 border-blue-600 hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </a>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto bg-gray-700 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-100 ease-linear"
              style={{
                width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-amber-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
