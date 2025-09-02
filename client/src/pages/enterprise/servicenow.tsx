import { Workflow, Wrench, Zap, Shield, Users, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";
import { ContactSection } from "@/components/contact-section";

export default function ServiceNowPage() {
  useScrollReveal();

  const serviceNowStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ServiceNow Solutions - Expert Consulting & Implementation | Procyon Technostructure",
    "description": "Expert ServiceNow consulting and implementation services. Transform IT operations with ITSM, ITOM, workflow automation, and AI-powered solutions.",
    "url": "https://procyon-technostructure.com/enterprise/servicenow",
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
          "name": "Enterprise Solutions",
          "item": "https://procyon-technostructure.com/enterprise"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ServiceNow Solutions",
          "item": "https://procyon-technostructure.com/enterprise/servicenow"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="ServiceNow Solutions - Expert Consulting & Implementation | Procyon Technostructure"
        description="Expert ServiceNow consulting and implementation services. Transform IT operations with ITSM, ITOM, workflow automation, and AI-powered solutions for streamlined operations."
        keywords="ServiceNow consulting, ServiceNow implementation, ITSM, ITOM, workflow automation, IT service management, ServiceNow customization, AI-powered IT solutions"
        canonicalUrl="https://procyon-technostructure.com/enterprise/servicenow"
        ogTitle="ServiceNow Solutions - Expert Consulting & Implementation"
        ogDescription="Transform your IT operations with expert ServiceNow consulting and implementation. ITSM, workflow automation, and AI-powered solutions."
        structuredData={serviceNowStructuredData}
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
        <section className="pt-20 pb-16 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="flex items-start gap-8 mb-12">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center reveal-scale">
                <Workflow className="w-10 h-10 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-scale">
                  <span className="gradient-text">ServiceNow Solutions</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-400 reveal-fade">
                  Expert ServiceNow Consulting & Implementation for Streamlined IT Operations
                </h2>
              </div>
            </div>
            
            <div className="space-y-8 max-w-5xl reveal-fade" data-delay="200">
              <p className="text-xl text-gray-300 leading-relaxed">
                In an era where digital agility defines competitive advantage, businesses must evolve their IT service infrastructure to be proactive, responsive, and intelligent. Procyon offers end-to-end ServiceNow consulting and ServiceNow implementation services that modernize IT operations, reduce inefficiencies, and enable a truly connected enterprise.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                We help organizations transform IT service management (ITSM) by unlocking the full capabilities of the ServiceNow platform, from workflow automation to integrated IT operations management (ITOM). Our customized solutions ensure faster incident resolution, improved visibility, and greater alignment between IT and business functions.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="grid md:grid-cols-2 gap-8">
              {/* ServiceNow Implementation */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">ServiceNow Implementation</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  We begin by evaluating your current IT processes and identifying bottlenecks. Then, we have built a tailored ServiceNow environment, designed to automate repetitive tasks, align with SLAs, and improve user satisfaction. Whether you're adopting ServiceNow for the first time or expanding its scope, we ensure seamless deployment with minimal disruption.
                </p>
              </div>

              {/* ServiceNow Customization */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">ServiceNow Customization</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  No two businesses operate the same way. We deliver strategic customization, from dashboards and workflows to UI/UX enhancements, built for efficiency, usability, and long-term impact.
                </p>
              </div>

              {/* ServiceNow Integration */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">ServiceNow Integration</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  We integrate ServiceNow with legacy systems, cloud platforms, HR tools, and third-party APIs, creating unified environments for better reporting, smoother collaboration, and faster responses.
                </p>
              </div>

              {/* AI-Powered IT Solutions */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">AI-Powered IT Solutions</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  Through machine learning and predictive analytics, we automate incident management, enhance forecasting, and increase the agility of your IT operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Procyon */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Why Choose Procyon for ServiceNow?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">• Enterprise-Grade Security & Compliance</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">• Collaborative & Transparent Approach</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">• User-Centric Experience Design</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">• Future-Ready Automation</h3>
              </div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto reveal-fade">
              <p className="text-xl text-gray-300 leading-relaxed">
                With Procyon, ServiceNow becomes more than a workflow tool, it becomes the backbone of your digital operations.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}