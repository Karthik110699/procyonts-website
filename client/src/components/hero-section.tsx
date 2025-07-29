import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const textRotations = [
    {
      line1: "The Rise of AI-Driven",
      line2: "Software Development",
      description: "Boost productivity and accelerate innovation today with AI embedded in every phase of the software development cycle."
    },
    {
      line1: "AI-driven Salesforce solutions",
      line2: "for tomorrow's enterprises", 
      description: "Procyon Technostructure transforms challenges into opportunities with tailored IT solutions."
    },
    {
      line1: "Transform your workflows",
      line2: "with ServiceNow",
      description: "A cloud-based platform that streamlines operations, automates tasks, and boosts productivity."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textRotations.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [textRotations.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-procyon-dark/95 to-blue-900/90"></div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Animated Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <div className="mb-4">
                <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  {textRotations[currentTextIndex].line1}
                </span>
              </div>
              <div>
                <span className="block text-white">
                  {textRotations[currentTextIndex].line2}
                </span>
              </div>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {textRotations[currentTextIndex].description}
            </p>
          </div>

          {/* Powered by Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Powered by Procyon
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Take the leap today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-500/10 hover:border-blue-400"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-3">
            {textRotations.map((_, index) => (
              <div
                key={index}
                className={`w-12 h-1 rounded-full transition-all duration-500 ${
                  index === currentTextIndex 
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500' 
                    : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
