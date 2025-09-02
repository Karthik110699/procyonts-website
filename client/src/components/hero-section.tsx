import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function HeroSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentHeroTextIndex, setCurrentHeroTextIndex] = useState(0);
  
  const heroTexts = [
    {
      line1: "Revolutionizing Enterprises with",
      line2: "AI, Talent and Technology!"
    },
    {
      line1: "Empowering Your Business to",
      line2: "Lead the Digital Future!"
    }
  ];
  
  const procyonServices = [
    { name: "ServiceNow", color: "from-green-400 to-green-500", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50", link: "/enterprise/servicenow" },
    { name: "Salesforce", color: "from-white to-green-400", dotColor: "bg-white", shadowColor: "shadow-white/50", link: "/enterprise/salesforce" },
    { name: "SAP Solutions", color: "from-yellow-400 to-green-400", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50", link: "/enterprise/sap" },
    { name: "Government Services", color: "from-green-400 to-yellow-400", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50", link: "/services/government" },
    { name: "Cloud Transformation", color: "from-white to-yellow-400", dotColor: "bg-white", shadowColor: "shadow-white/50", link: "/services/cloud" },
    { name: "AI & Machine Learning", color: "from-green-400 to-green-500", dotColor: "bg-green-400", shadowColor: "shadow-green-400/50", link: "/services/ai-ml" },
    { name: "Data Analytics", color: "from-yellow-400 to-yellow-500", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50", link: "/services/data-analytics" },
    { name: "Staff Augmentation", color: "from-yellow-400 to-white", dotColor: "bg-yellow-400", shadowColor: "shadow-yellow-400/50", link: "/services/staff-augmentation" }
  ];



  useEffect(() => {
    // Rotate through services
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % procyonServices.length);
    }, 2000);

    // Rotate through hero texts
    const heroTextInterval = setInterval(() => {
      setCurrentHeroTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 6000);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(heroTextInterval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Gradient Overlay to merge with glass header */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/20 via-white/10 to-transparent backdrop-blur-sm z-30 pointer-events-none"></div>
      
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
      
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col min-h-screen pt-20">
          {/* Mobile Content - Centered */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 py-4">
            <div className="text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                <span className="block animated-gradient-text mb-2">
                  {heroTexts[currentHeroTextIndex].line1}
                </span>
                <span className="block">
                  {heroTexts[currentHeroTextIndex].line2}
                </span>
              </h1>
              
              {/* Mobile Motion Graphics */}
              <div className="py-2">
                <Link href={procyonServices[currentServiceIndex].link} className="block">
                  <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${procyonServices[currentServiceIndex].color} bg-clip-text text-transparent opacity-40 mb-4 transition-all duration-500 cursor-pointer hover:opacity-60 hover:scale-105 transform relative z-30`}>
                    {procyonServices[currentServiceIndex].name}
                  </div>
                </Link>
                
                {/* Service Indicators - Mobile */}
                <div className="flex justify-center space-x-1.5 relative z-30">
                  {procyonServices.map((service, index) => (
                    <Link key={index} href={service.link} className="block">
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:scale-150 relative z-30 ${
                          index === currentServiceIndex 
                            ? `${service.dotColor} scale-125 ${service.shadowColor} shadow-md` 
                            : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile CTAs at Bottom */}
          <div className="px-4 pb-6 pt-2">
            <div className="flex flex-col space-y-2">
              <a 
                href="#contact" 
                className="group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-base text-white overflow-hidden transition-all duration-300 transform hover:scale-105 text-center"
              >
                <span className="relative z-10">Take the leap today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#services" 
                className="px-6 py-4 border-2 border-white text-white rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:bg-white/10 text-center"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row min-h-screen">
          {/* Left Side Content */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-8 w-full">
              <div className="max-w-xl ml-28 xl:ml-32 2xl:ml-36">
              
              {/* Fixed Innovative Text */}
              <div className="mb-8">
                <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-white mb-6">
                  <span className="block animated-gradient-text mb-2">
                    {heroTexts[currentHeroTextIndex].line1}
                  </span>
                  <span className="block">
                    {heroTexts[currentHeroTextIndex].line2}
                  </span>
                </h1>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row space-x-4 mt-8">
                <a 
                  href="#contact" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-lg text-white overflow-hidden transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <span className="relative z-10">Take the leap today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10 text-center"
                >
                  Explore Services
                </Link>
              </div>
              </div>
            </div>
          </div>

          {/* Right Side - Motion Graphics Space - Desktop Only */}
          <div className="w-1/2 relative flex items-center justify-center min-h-screen">
            {/* Floating Service Names */}
            <div className="absolute inset-0 flex items-center justify-center z-40">
              <div className="text-center">
                <Link href={procyonServices[currentServiceIndex].link} className="block">
                  <div className={`text-7xl font-bold bg-gradient-to-r ${procyonServices[currentServiceIndex].color} bg-clip-text text-transparent opacity-40 mb-4 transition-all duration-500 cursor-pointer hover:opacity-60 hover:scale-105 transform relative z-50`}>
                    {procyonServices[currentServiceIndex].name}
                  </div>
                </Link>
                
                {/* Service Icons/Indicators */}
                <div className="flex justify-center space-x-2 relative z-50">
                  {procyonServices.map((service, index) => (
                    <Link key={index} href={service.link} className="block">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-200 relative z-50 ${
                          index === currentServiceIndex 
                            ? `${service.dotColor} scale-150 ${service.shadowColor} shadow-lg` 
                            : 'bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          
          {/* Service-themed particles */}
          <div className="absolute inset-0 z-40">
            {procyonServices.map((service, index) => (
              <Link key={service.name} href={service.link} className="absolute" style={{
                top: `${20 + (index * 10)}%`,
                right: `${15 + (index * 8)}%`,
              }}>
                <div
                  className={`transition-all duration-1000 cursor-pointer hover:scale-110 relative z-50 ${
                    index === currentServiceIndex ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                  }`}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full animate-particle-float ${service.shadowColor} shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent opacity-90 whitespace-nowrap hover:opacity-100 transition-opacity relative z-50`}>
                      {service.name}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
