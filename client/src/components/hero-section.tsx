import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
  const procyonServices = [
    { name: "ServiceNow", color: "from-green-400 to-green-500", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50" },
    { name: "Enterprise Architecture", color: "from-white to-yellow-400", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50" },
    { name: "Digital Strategy", color: "from-yellow-400 to-green-400", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50" },
    { name: "IT Staffing", color: "from-green-400 to-yellow-400", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50" },
    { name: "Innovation", color: "from-yellow-400 to-yellow-500", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50" },
    { name: "Product Strategy", color: "from-white to-green-400", dotColor: "bg-white", shadowColor: "shadow-white/50" }
  ];



  useEffect(() => {
    // Rotate through services
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % procyonServices.length);
    }, 2000);

    return () => clearInterval(serviceInterval);
  }, []);

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
      
      <div className="relative z-20 flex min-h-screen">
        {/* Left Side Content */}
        <div className="w-1/2 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-xl">
            
            {/* Fixed Innovative Text */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
                <span className="block animated-gradient-text mb-2">
                  Ideate, Innovate &
                </span>
                <span className="block">Break rules for a better tomorrow</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                We are the brightest star that guides you on the journey to change
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
              >
                Discover our solutions
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Motion Graphics Space */}
        <div className="w-1/2 relative flex items-center justify-center">
          {/* Floating Service Names */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${procyonServices[currentServiceIndex].color} bg-clip-text text-transparent opacity-40 mb-4 transition-all duration-500`}>
                {procyonServices[currentServiceIndex].name}
              </div>
              
              {/* Service Icons/Indicators */}
              <div className="flex justify-center space-x-2">
                {procyonServices.map((service, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentServiceIndex 
                        ? `${service.dotColor} scale-150 ${service.shadowColor} shadow-lg` 
                        : 'bg-white/20'
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
                key={service.name}
                className={`absolute transition-all duration-1000 ${
                  index === currentServiceIndex ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                }`}
                style={{
                  top: `${20 + (index * 10)}%`,
                  right: `${15 + (index * 8)}%`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full animate-particle-float ${service.shadowColor} shadow-lg`}>
                  <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent opacity-90 whitespace-nowrap`}>
                    {service.name}
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
