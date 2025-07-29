import { useState, useEffect } from "react";

export default function HeroSection() {
  const [poweredByVisible, setPoweredByVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
  const procyonServices = [
    "SalesForce",
    "ServiceNow", 
    "SAP",
    "Cloud Solutions",
    "AI & ML",
    "Data Analytics",
    "Staff Augmentation",
    "Government Services"
  ];

  useEffect(() => {
    // Show "Powered by" on interaction/scroll
    const handleInteraction = () => {
      setPoweredByVisible(true);
    };

    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);
    
    // Auto show after 3 seconds
    const timer = setTimeout(() => setPoweredByVisible(true), 3000);

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Rotate through services
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % procyonServices.length);
    }, 2000);

    return () => clearInterval(serviceInterval);
  }, [procyonServices.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Static */}
        <div className="w-1/2 bg-gradient-to-br from-gray-900 via-blue-900 to-procyon-dark">
          <div className="absolute inset-0 bg-gradient-to-r from-procyon-dark/90 to-transparent"></div>
        </div>
        {/* Right Side - Motion Graphics */}
        <div className="w-1/2 bg-gradient-to-bl from-blue-800 via-emerald-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-procyon-dark/20"></div>
        </div>
      </div>

      {/* Motion Graphics - Right Side Only */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {/* Morphing Shapes */}
          <div className="absolute top-20 right-16 w-48 h-48 bg-gradient-to-r from-blue-500/25 to-emerald-500/15 animate-morphing blur-md" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-32 right-8 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/10 animate-morphing blur-lg" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-emerald-500/25 to-blue-500/15 animate-morphing blur-sm" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Floating Particles */}
          <div className="absolute top-24 right-24 w-4 h-4 bg-blue-400/80 rounded-full animate-particle-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-48 right-40 w-3 h-3 bg-emerald-400/80 rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-48 right-20 w-5 h-5 bg-purple-400/80 rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-64 right-48 w-2 h-2 bg-pink-400/80 rounded-full animate-particle-float" style={{ animationDelay: '3s' }}></div>
          
          {/* Animated SVG Lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rightGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.2)" />
              </linearGradient>
            </defs>
            <path d="M0,200 Q200,50 400,150 T800,100" stroke="url(#rightGradient1)" strokeWidth="3" fill="none" opacity="0.7">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" 
                values="M0,200 Q200,50 400,150 T800,100;M0,150 Q200,250 400,100 T800,200;M0,200 Q200,50 400,150 T800,100" />
            </path>
          </svg>
          
          {/* Pulsing Orbs */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-500/60 rounded-full animate-pulse-glow" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-emerald-500/60 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side Content */}
        <div className="w-1/2 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-xl">
            
            {/* Fixed Innovative Text */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6">
                <span className="block mb-2">Digital Services, Product Engineering,</span>
                <span className="block mb-2">Staffing, or</span>
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  AI-Powered Solutions?
                </span>
                <span className="block">Procyon is Your Partner.</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Boost productivity and accelerate innovation today with AI embedded in every phase of the software development cycle.
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Take the leap today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-400/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Motion Graphics Space */}
        <div className="w-1/2 relative flex items-center justify-center">
          {/* Floating Service Names */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-bold text-white/20 mb-4 transition-all duration-500">
                {procyonServices[currentServiceIndex]}
              </div>
              
              {/* Service Icons/Indicators */}
              <div className="flex justify-center space-x-2">
                {procyonServices.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? 'bg-blue-400 scale-150' 
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Service-themed particles */}
          <div className="absolute inset-0">
            {procyonServices.map((service, index) => (
              <div
                key={service}
                className={`absolute transition-all duration-1000 ${
                  index === currentServiceIndex ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                }`}
                style={{
                  top: `${20 + (index * 10)}%`,
                  right: `${15 + (index * 8)}%`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-particle-float">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white/60 whitespace-nowrap">
                    {service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive "Powered by" Badge */}
      {poweredByVisible && (
        <div className="fixed bottom-8 right-8 z-20 transition-all duration-500 transform">
          <div className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/30 to-emerald-600/30 backdrop-blur-md border border-blue-500/40 rounded-full animate-gradient-shift overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-emerald-500/15 to-purple-500/15 animate-gradient-shift"></div>
            
            {/* Pulsing Dot */}
            <div className="relative w-2 h-2 mr-3">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
            </div>
            
            {/* Text */}
            <span className="relative text-sm font-semibold bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Powered by Procyon
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
