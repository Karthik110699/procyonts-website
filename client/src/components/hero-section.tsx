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

      {/* Motion Graphics Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Morphing Shapes */}
        <div className="absolute top-16 left-8 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-emerald-500/20 animate-morphing blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-24 right-16 w-56 h-56 bg-gradient-to-r from-purple-500/25 to-pink-500/15 animate-morphing blur-md" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-500/30 to-blue-500/20 animate-morphing blur-sm" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Drifting Elements */}
        <div className="absolute top-1/4 left-0 w-20 h-20 bg-gradient-to-br from-blue-400/40 to-transparent rounded-full animate-drift" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-2/3 right-0 w-16 h-16 bg-gradient-to-br from-emerald-400/40 to-transparent rounded-full animate-drift" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-purple-400/40 to-transparent rounded-full animate-drift" style={{ animationDelay: '8s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-particle-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-emerald-400 rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-400 rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-60 right-32 w-2 h-2 bg-pink-400 rounded-full animate-particle-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-60 left-1/2 w-3 h-3 bg-amber-400 rounded-full animate-particle-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </linearGradient>
          </defs>
          <path d="M0,300 Q400,100 800,250 T1600,200" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" opacity="0.6">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" 
              values="M0,300 Q400,100 800,250 T1600,200;M0,250 Q400,350 800,150 T1600,300;M0,300 Q400,100 800,250 T1600,200" />
          </path>
          <path d="M1600,400 Q1200,200 800,350 T0,300" stroke="url(#lineGradient2)" strokeWidth="2" fill="none" opacity="0.4">
            <animate attributeName="d" dur="15s" repeatCount="indefinite" 
              values="M1600,400 Q1200,200 800,350 T0,300;M1600,350 Q1200,450 800,250 T0,400;M1600,400 Q1200,200 800,350 T0,300" />
          </path>
        </svg>
        
        {/* Pulsing Orbs */}
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-blue-500/50 rounded-full animate-pulse-glow" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-emerald-500/50 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
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
            <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full animate-gradient-shift overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 animate-gradient-shift"></div>
              
              {/* Pulsing Dot */}
              <div className="relative w-3 h-3 mr-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse-glow"></div>
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              </div>
              
              {/* Text with motion */}
              <span className="relative text-xl font-bold bg-gradient-to-r from-blue-300 via-emerald-300 to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
                Powered by Procyon
              </span>
              
              {/* Floating particles around badge */}
              <div className="absolute -top-2 -left-2 w-1 h-1 bg-blue-400 rounded-full animate-particle-float opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-emerald-400 rounded-full animate-particle-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-0 right-4 w-1 h-1 bg-purple-400 rounded-full animate-particle-float opacity-60" style={{ animationDelay: '2s' }}></div>
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
