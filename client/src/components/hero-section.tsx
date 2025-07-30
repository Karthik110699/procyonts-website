import { useState, useEffect } from "react";

export default function HeroSection() {
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
    // Rotate through services
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % procyonServices.length);
    }, 2000);

    return () => clearInterval(serviceInterval);
  }, [procyonServices.length]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Wave Background */}
      <div className="wave-container">
        <div className="glow-effect"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="wave-particle"></div>
        <div className="energy-line"></div>
        <div className="energy-line"></div>
      </div>
      
      <div className="relative z-10 flex min-h-screen">
        {/* Left Side Content */}
        <div className="w-1/2 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-xl">
            
            {/* Fixed Innovative Text */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
                <span className="block animated-gradient-text mb-2">
                  AI-Powered Solutions?
                </span>
                <span className="block">Procyon's Your Partner!</span>
              </h1>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-procyon-emerald hover:bg-emerald-700 rounded-lg font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
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


    </section>
  );
}
