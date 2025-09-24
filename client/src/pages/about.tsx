import { Users, Target, Award, Globe } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead, { organizationSchema } from "@/components/seo-head";
import worldMapImage from "@assets/image_1758754701814.png";

export default function AboutPage() {
  useScrollReveal();
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = timelineLineRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.4
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const isLeft = element.classList.contains('timeline-item-left');
          
          // Animate the timeline item
          element.classList.add(isLeft ? 'animate-in-left' : 'animate-in-right');
          
          // Activate conic border effect
          const conicBorderCard = element.querySelector('.conic-border');
          if (conicBorderCard) {
            conicBorderCard.classList.add('conic-active');
          }
        }
      });
    }, observerOptions);

    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    // Progressive timeline line fill with smooth animation
    const handleScroll = () => {
      if (!timelineRef.current || !timelineLine) return;
      
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, 
        (viewportHeight - timelineRect.top) / (timelineRect.height + viewportHeight * 0.5)
      ));
      
      timelineLine.style.height = `${scrollProgress * 100}%`;
      
      // Add glowing effect when actively scrolling
      if (scrollProgress > 0 && scrollProgress < 1) {
        timelineLine.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)';
      } else {
        timelineLine.style.boxShadow = '0 0 8px rgba(59, 130, 246, 0.3)';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Procyon Technostructure",
    "description": "Learn about Procyon Technostructure's mission, vision, and 20+ years of excellence in enterprise technology solutions. 250+ experts, global reach.",
    "url": "https://procyon-technostructure.com/about",
    "mainEntity": organizationSchema,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://procyon-technostructure.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://procyon-technostructure.com/about"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="About Procyon Technostructure - 20+ Years of Enterprise Excellence"
        description="Learn about Procyon Technostructure's mission, vision, and 20+ years of excellence in enterprise technology solutions. 250+ expert consultants, 1200+ successful projects worldwide."
        keywords="about Procyon, company history, enterprise consulting, technology leadership, digital transformation experts, IT consulting firm, ServiceNow partners, mission vision values"
        canonicalUrl="https://procyon-technostructure.com/about"
        ogTitle="About Procyon Technostructure - Leading Enterprise Technology Consultants"
        ogDescription="Founded in 2004, Procyon has delivered 1200+ successful projects with 250+ expert consultants. Discover our mission and values."
        structuredData={aboutStructuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden relative">
      {/* Floating Stars Background */}
      <div className="floating-stars-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`floating-star star-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="star-svg"
            >
              <path
                d="M12 2L14.09 8.26L20 8.26L15.64 11.74L17.73 18L12 14.52L6.27 18L8.36 11.74L4 8.26L9.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>
      <Navbar />
      {/* Header */}
      <div className="pt-20 pb-10 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 reveal-scale">
            <span className="gradient-text">Who We Are: Enterprise Experts with a Heart for Healthcare</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-6xl reveal-fade" data-delay="200">
            At Procyon, we don't just adapt to the digital era, we help businesses lead it with confidence and vision.
            <br /><br />
            Since 2004, Procyon Technostructure has been delivering secure, scalable enterprise solutions across Salesforce, ServiceNow, SAP, Cloud, AI, and Data. What sets us apart is our commitment to healthcare innovation — proven by our platform Hekma.ai (patient equity) and Akra.ai (SaMD/SiMD validation).
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal-slide-left" data-delay="100">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Achieve customer goals through effective partnership and thought leadership
              </p>
            </div>
            
            <div className="reveal-slide-right" data-delay="200">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-400">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Delivering value through People, Process, Technology, and next-generation AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <div className="text-center mb-16 reveal-fade" data-delay="100">
            <h2 className="text-4xl font-bold mb-8 text-emerald-400">Our Story</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Founded in California with offices in Toronto and Chennai, Procyon combines global delivery with a customer-first mindset.
            </p>
            
            {/* Individual glass cards for each stat */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12 text-left">
              <div className="bg-gradient-to-br from-emerald-800/20 to-emerald-900/40 backdrop-blur-lg border border-emerald-500/30 rounded-2xl p-6 shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
                <div className="flex items-start text-lg text-gray-300 text-left">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full mr-4 mt-1 shadow-lg shadow-emerald-400/50 flex-shrink-0"></div>
                  <span className="text-left">200+ projects delivered across industries</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-800/20 to-blue-900/40 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-start text-lg text-gray-300 text-left">
                  <div className="w-4 h-4 bg-blue-400 rounded-full mr-4 mt-1 shadow-lg shadow-blue-400/50 flex-shrink-0"></div>
                  <span className="text-left">75+ customers from startups to Fortune 500s</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/40 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start text-lg text-gray-300 text-left">
                  <div className="w-4 h-4 bg-purple-400 rounded-full mr-4 mt-1 shadow-lg shadow-purple-400/50 flex-shrink-0"></div>
                  <span className="text-left">200+ certified experts across Salesforce, ServiceNow, SAP, and AI</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-800/20 to-amber-900/40 backdrop-blur-lg border border-amber-500/30 rounded-2xl p-6 shadow-xl hover:shadow-amber-500/20 transition-all duration-300">
                <div className="flex items-start text-lg text-gray-300 text-left">
                  <div className="w-4 h-4 bg-amber-400 rounded-full mr-4 mt-1 shadow-lg shadow-amber-400/50 flex-shrink-0"></div>
                  <span className="text-left">20 years of transformation experience</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We are proud to be a <span className="text-emerald-400 font-semibold">WBE/MBE& CMAS certified partner</span>, helping organizations meet supplier diversity goals while delivering enterprise-grade impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Healthcare Commitment & Global Reach */}
      <section className="py-20 bg-gradient-to-b from-procyon-dark via-gray-900/80 to-procyon-dark relative overflow-hidden">
        <div className="wireframe-overlay opacity-20"></div>
        <div className="morphing-bg opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Our Healthcare Commitment */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Our Healthcare Commitment
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We don't just consult in healthcare — we <span className="text-emerald-400 font-semibold">build healthcare platforms</span>.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-emerald-400/50"></div>
                  <div>
                    <span className="text-emerald-400 font-semibold">Hekma.ai</span>
                    <span className="text-gray-300"> → Expanding trial diversity, reducing patient drop-offs.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-400/50"></div>
                  <div>
                    <span className="text-blue-400 font-semibold">Akra.ai</span>
                    <span className="text-gray-300"> → Cutting SaMD/SiMD validation cycles & accelerating FDA approval.</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                This dual focus makes Procyon one of the few enterprise providers that can deliver both 
                <span className="text-purple-400 font-semibold"> IT modernization</span> and 
                <span className="text-emerald-400 font-semibold"> digital health innovation</span>.
              </p>
            </div>
            
            {/* Global Reach */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                    Global Reach
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-400/50"></div>
                  <div>
                    <span className="text-blue-400 font-semibold">Headquarters:</span>
                    <span className="text-gray-300"> Novato, California</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-purple-400/50"></div>
                  <div>
                    <span className="text-purple-400 font-semibold">Offices:</span>
                    <span className="text-gray-300"> Toronto, Canada | Chennai, India</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-amber-400/50"></div>
                  <div>
                    <span className="text-amber-400 font-semibold">Delivery Models:</span>
                    <span className="text-gray-300"> Onsite | Offsite | Offshore | Hybrid</span>
                  </div>
                </div>
              </div>
              
              {/* World Map Image */}
              <div className="mt-8">
                <img 
                  src={worldMapImage} 
                  alt="Procyon Global Offices World Map" 
                  className="w-full max-w-lg rounded-2xl shadow-2xl border border-gray-600/30"
                />
              </div>
            </div>
            
          </div>
          

          {/* Closing Statement */}
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="text-emerald-400 font-semibold">"At Procyon, every solution is built to be scalable, sustainable, and future-ready.</span> 
              <span className="text-gray-300"> Because we believe technology should not only solve today's challenges but also create tomorrow's opportunities."</span>
            </p>
          </div>
          
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-900/80 via-procyon-dark to-gray-900/80 relative overflow-hidden">
        <div className="wireframe-overlay"></div>
        <div className="morphing-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-4">
              Growing with Vision, Innovating with Purpose
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              From a boutique consultancy to a global transformation partner
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed">
                Since 2004, Procyon has grown from a boutique IT consultancy in California to a global transformation partner with a presence in Toronto and Chennai. Each milestone from launching AI-driven platforms like Hekma and Akra to building a strong AI and Cloud practice reflects our commitment to innovation and impact. With 200+ projects delivered, we continue to help businesses stay agile, future-ready, and competitive in the digital era.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative overflow-hidden">
            {/* Floating Timeline Particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full floating-timeline-particle"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400/40 rounded-full floating-timeline-particle" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-purple-400/20 rounded-full floating-timeline-particle" style={{animationDelay: '4s'}}></div>
              <div className="absolute bottom-20 right-1/6 w-2 h-2 bg-amber-400/30 rounded-full floating-timeline-particle" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Central Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 rounded-full h-full"></div>
            <div 
              ref={timelineLineRef}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-violet-500 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 ease-out"
              style={{ height: '0%', transformOrigin: 'top' }}
            ></div>
            
            
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16 lg:space-y-24">
              
              {/* 2004 */}
              <div className="timeline-item timeline-item-left relative flex flex-col md:flex-row items-center" data-year="2004">
                <div className="w-full md:flex-1 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-blue-800 to-blue-900 p-4 md:p-6 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-2">2004</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">Founded in San Rafael, CA</div>
                    <div className="relative z-10 hidden md:block text-sm text-blue-300/70 mt-2">The beginning of innovation</div>
                  </div>
                </div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark"></div>
                <div className="w-full md:flex-1 md:pl-8"></div>
              </div>

              {/* 2008 */}
              <div className="timeline-item timeline-item-right relative flex flex-col md:flex-row items-center" data-year="2008">
                <div className="w-full md:flex-1 md:pr-8"></div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-emerald-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark" style={{animationDelay: '0.5s'}}></div>
                <div className="w-full md:flex-1 text-center md:text-left md:pl-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-emerald-800 to-emerald-900 p-4 md:p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-400 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">2008</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">Expanded operations to Toronto, Canada</div>
                    <div className="relative z-10 hidden md:block text-sm text-emerald-300/70 mt-2">Global expansion begins</div>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="timeline-item timeline-item-left relative flex flex-col md:flex-row items-center" data-year="2015">
                <div className="w-full md:flex-1 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-purple-800 to-purple-900 p-4 md:p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">2015</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">Opened our delivery center in Chennai, India</div>
                    <div className="relative z-10 hidden md:block text-sm text-purple-300/70 mt-2">Strengthening global presence</div>
                  </div>
                </div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-purple-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark" style={{animationDelay: '1s'}}></div>
                <div className="w-full md:flex-1 md:pl-8"></div>
              </div>

              {/* 2018 */}
              <div className="timeline-item timeline-item-right relative flex flex-col md:flex-row items-center" data-year="2018">
                <div className="w-full md:flex-1 md:pr-8"></div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-amber-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark" style={{animationDelay: '1.5s'}}></div>
                <div className="w-full md:flex-1 text-center md:text-left md:pl-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-amber-800 to-amber-900 p-4 md:p-6 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-2">2018</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">Hekma: AI drug development accelerator</div>
                    <div className="relative z-10 hidden md:block text-sm text-amber-300/70 mt-2">AI innovation breakthrough</div>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="timeline-item timeline-item-left relative flex flex-col md:flex-row items-center" data-year="2020">
                <div className="w-full md:flex-1 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-cyan-800 to-cyan-900 p-4 md:p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">2020</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">AI & Cloud practice launched</div>
                    <div className="relative z-10 hidden md:block text-sm text-cyan-300/70 mt-2">Next-gen solutions era</div>
                  </div>
                </div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-cyan-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark" style={{animationDelay: '2s'}}></div>
                <div className="w-full md:flex-1 md:pl-8"></div>
              </div>

              {/* 2022 */}
              <div className="timeline-item timeline-item-right relative flex flex-col md:flex-row items-center" data-year="2022">
                <div className="w-full md:flex-1 md:pr-8"></div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-rose-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark" style={{animationDelay: '2.5s'}}></div>
                <div className="w-full md:flex-1 text-center md:text-left md:pl-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-rose-800 to-rose-900 p-4 md:p-6 rounded-xl border border-rose-500/30 hover:border-rose-400 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-rose-400 mb-2">2022</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">Akra: Digital Health SaaS (SiMD, SaMD)</div>
                    <div className="relative z-10 hidden md:block text-sm text-rose-300/70 mt-2">Healthcare transformation</div>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="timeline-item timeline-item-left relative flex flex-col md:flex-row items-center" data-year="2023">
                <div className="w-full md:flex-1 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-green-800 to-green-900 p-4 md:p-6 rounded-xl border border-green-500/30 hover:border-green-400 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-2">2023</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">200+ projects delivered</div>
                    <div className="relative z-10 hidden md:block text-sm text-green-300/70 mt-2">Milestone achievement</div>
                  </div>
                </div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark" style={{animationDelay: '3s'}}></div>
                <div className="w-full md:flex-1 md:pl-8"></div>
              </div>

              {/* 2025 */}
              <div className="timeline-item timeline-item-right relative flex flex-col md:flex-row items-center" data-year="2025">
                <div className="w-full md:flex-1 md:pr-8"></div>
                <div className="absolute left-1/2 md:left-1/2 top-6 md:top-auto transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-violet-500 rounded-full timeline-dot-animated z-10 border-2 md:border-4 border-procyon-dark" style={{animationDelay: '3.5s'}}></div>
                <div className="w-full md:flex-1 text-center md:text-left md:pl-8 mb-4 md:mb-0">
                  <div className="group conic-border bg-gradient-to-br from-violet-800 to-violet-900 p-4 md:p-6 rounded-xl border border-violet-500/30 hover:border-violet-400 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20">
                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-violet-400 mb-2">2025</div>
                    <div className="relative z-10 text-base md:text-lg lg:text-xl text-gray-300">Implemented AI Accelerators to enhance operations and speed delivery</div>
                    <div className="relative z-10 hidden md:block text-sm text-violet-300/70 mt-2">Future-ready operations</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Values - Breathtaking Circular Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-procyon-dark to-gray-900/80"></div>
        <div className="wireframe-overlay opacity-30"></div>
        <div className="morphing-bg opacity-40"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The fundamental principles that drive our innovation and guide every decision we make
            </p>
          </div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="block lg:hidden">
            <div className="space-y-8 max-w-md mx-auto">
              {/* 01 - Customer FIRST */}
              <div className="bg-gradient-to-br from-red-900/40 to-red-800/30 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">01</div>
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Customer FIRST</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our customers are at the heart of everything we do. Their success is our success, and we prioritize their needs above all else.
                </p>
              </div>

              {/* 02 - Every Customer is different */}
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">02</div>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Every Customer is Different</h3>
                <p className="text-gray-300 leading-relaxed">
                  No ONE size fits all. We understand that each client has unique challenges and we tailor our solutions accordingly.
                </p>
              </div>

              {/* 03 - Transparency and Collaboration */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 p-6 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">03</div>
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Transparency and Collaboration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Open communication and genuine partnership form the foundation of our client relationships and internal teamwork.
                </p>
              </div>

              {/* 04 - Celebrate and value Diversity */}
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">04</div>
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Celebrate and Value Diversity</h3>
                <p className="text-gray-300 leading-relaxed">
                  We embrace different perspectives, backgrounds, and ideas as they fuel innovation and drive exceptional outcomes.
                </p>
              </div>

              {/* 05 - Continuous Learning & Retrospect */}
              <div className="bg-gradient-to-br from-amber-900/40 to-amber-800/30 p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">05</div>
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Continuous Learning & Retrospect</h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly evolve through learning, reflection, and adaptation to stay ahead in the ever-changing technology landscape.
                </p>
              </div>

              {/* 06 - Encourage Ideation & Creativity */}
              <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 p-6 rounded-2xl border border-cyan-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">06</div>
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Encourage Ideation & Creativity</h3>
                <p className="text-gray-300 leading-relaxed">
                  We foster an environment where innovative thinking thrives and creative solutions emerge to solve complex challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Circular Formation */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 xl:w-40 xl:h-40 bg-gradient-to-br from-blue-600/20 via-emerald-600/20 to-purple-600/20 rounded-full border-2 border-gradient-to-r border-blue-400/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-20 h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-blue-500 via-emerald-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg xl:text-xl">CORE</span>
                </div>
              </div>
            </div>

            {/* Value Headings Revolving Around CORE */}
            <div className="relative w-full h-[500px] xl:h-[600px]">
              
              {/* Lightning Bolts Radiating from CORE */}
              <div className="lightning-bolt lightning-1"></div>
              <div className="lightning-bolt lightning-2"></div>
              <div className="lightning-bolt lightning-3"></div>
              <div className="lightning-bolt lightning-4"></div>
              <div className="lightning-bolt lightning-5"></div>
              <div className="lightning-bolt lightning-6"></div>
              
              {/* 01 - Customer FIRST */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-1">
                <div className="w-52 h-20 xl:w-60 xl:h-24 bg-gradient-to-br from-red-900/40 to-red-800/30 p-4 xl:p-5 rounded-2xl border border-red-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-base xl:text-lg font-bold text-red-400 text-center">Customer FIRST</h3>
                  </div>
                </div>
              </div>

              {/* 02 - Every Customer is different */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-2">
                <div className="w-52 h-20 xl:w-60 xl:h-24 bg-gradient-to-br from-blue-900/40 to-blue-800/30 p-4 xl:p-5 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-base xl:text-lg font-bold text-blue-400 text-center">Every Customer is Different</h3>
                  </div>
                </div>
              </div>

              {/* 03 - Transparency and Collaboration */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-3">
                <div className="w-52 h-20 xl:w-60 xl:h-24 bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 p-4 xl:p-5 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-base xl:text-lg font-bold text-emerald-400 text-center">Transparency and Collaboration</h3>
                  </div>
                </div>
              </div>

              {/* 04 - Celebrate and value Diversity */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-4">
                <div className="w-52 h-20 xl:w-60 xl:h-24 bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-4 xl:p-5 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-base xl:text-lg font-bold text-purple-400 text-center">Celebrate and Value Diversity</h3>
                  </div>
                </div>
              </div>

              {/* 05 - Continuous Learning & Retrospect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-5">
                <div className="w-52 h-20 xl:w-60 xl:h-24 bg-gradient-to-br from-amber-900/40 to-amber-800/30 p-4 xl:p-5 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-base xl:text-lg font-bold text-amber-400 text-center">Continuous Learning & Retrospect</h3>
                  </div>
                </div>
              </div>

              {/* 06 - Encourage Ideation & Creativity */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-6">
                <div className="w-52 h-20 xl:w-60 xl:h-24 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 p-4 xl:p-5 rounded-2xl border border-cyan-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-base xl:text-lg font-bold text-cyan-400 text-center">Encourage Ideation & Creativity</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-20">
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              These values are not just words on a page—they are the driving force behind every solution we create, 
              every relationship we build, and every innovation we pursue in our mission to transform businesses.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-gray-300">
              Our track record of success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-gray-300">Years of Trusted Service</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">75+</div>
              <div className="text-gray-300">Global Customers</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">200+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">3</div>
              <div className="text-gray-300">Worldwide Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to unlock your organization's full potential with innovative technology solutions.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}