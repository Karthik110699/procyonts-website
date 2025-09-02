import { Settings, Workflow, Wrench, Zap, Shield, Users, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";
import ContactSection from "@/components/contact-section";

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
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="flex items-start gap-8 mb-12">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center reveal-scale">
                <Settings className="w-10 h-10 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-scale">
                  <span className="gradient-text">ServiceNow Solutions</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-400 reveal-fade">
                  Expert ServiceNow Consulting & Implementation for Streamlined IT Operations
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl leading-relaxed reveal-fade" data-delay="200">
                  In an era where digital agility defines competitive advantage, businesses must evolve their IT service infrastructure to be proactive, responsive, and intelligent. Procyon offers end-to-end ServiceNow consulting and ServiceNow implementation services that modernize IT operations, reduce inefficiencies, and enable a truly connected enterprise.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 p-8 rounded-xl reveal-fade" data-delay="400">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We help organizations transform IT service management (ITSM) by unlocking the full capabilities of the ServiceNow platform, from workflow automation to integrated IT operations management (ITOM). Our customized solutions ensure faster incident resolution, improved visibility, and greater alignment between IT and business functions.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our ServiceNow Services</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive ServiceNow solutions designed to transform your IT operations and business processes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* ServiceNow Implementation */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Workflow className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">ServiceNow Implementation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  We begin by evaluating your current IT processes and identifying bottlenecks. Then, we build a tailored ServiceNow environment designed to automate repetitive tasks, align with SLAs, and improve user satisfaction. Whether you're adopting ServiceNow for the first time or expanding its scope, we ensure seamless deployment with minimal disruption.
                </p>
              </div>

              {/* ServiceNow Customization */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Wrench className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">ServiceNow Customization</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  No two businesses operate the same way. We deliver strategic customization, from dashboards and workflows to UI/UX enhancements, built for efficiency, usability, and long-term impact.
                </p>
              </div>

              {/* ServiceNow Integration */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">ServiceNow Integration</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                  We integrate ServiceNow with legacy systems, cloud platforms, HR tools, and third-party APIs, creating unified environments for better reporting, smoother collaboration, and faster responses.
                </p>
              </div>

              {/* AI-Powered IT Solutions */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Zap className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">AI-Powered IT Solutions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
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
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                With Procyon, ServiceNow becomes more than a workflow tool, it becomes the backbone of your digital operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">Enterprise-Grade Security & Compliance</h3>
                <p className="text-gray-300 relative z-10">
                  Robust security frameworks and compliance standards that protect your data and meet regulatory requirements.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">Collaborative & Transparent Approach</h3>
                <p className="text-gray-300 relative z-10">
                  Open communication, regular updates, and collaborative partnerships that ensure project success and stakeholder satisfaction.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <CheckCircle className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400 relative z-10">User-Centric Experience Design</h3>
                <p className="text-gray-300 relative z-10">
                  Intuitive interfaces and workflows designed with the end-user in mind, ensuring high adoption rates and user satisfaction.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400 relative z-10">Future-Ready Automation</h3>
                <p className="text-gray-300 relative z-10">
                  Advanced automation capabilities that scale with your business and adapt to emerging technologies and requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 zoom-container">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center zoom-section">
            <h2 className="text-4xl font-bold mb-6 reveal-fade">Proven Results</h2>
            <p className="text-xl text-gray-300 mb-12 reveal-fade" data-delay="200">
              Our ServiceNow implementations deliver transformational outcomes
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 reveal-fade" data-delay="400">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">70%</div>
                <div className="text-gray-300">Faster Service Delivery</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-300">First-Call Resolution Rate</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Reduction in Manual Tasks</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">300%</div>
                <div className="text-gray-300">ROI Within 18 Months</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/50 to-blue-900/50 zoom-container">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 zoom-section">
            <h2 className="text-4xl font-bold mb-6 reveal-fade">Ready to Transform Your IT Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 reveal-fade" data-delay="200">
              Let's discuss how ServiceNow can modernize your IT service management and boost operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-fade" data-delay="400">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
                Start Your Transformation
              </Link>
              <Link href="/enterprise/salesforce" className="inline-block bg-transparent border-2 border-emerald-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-500/20 transition-all">
                Explore Salesforce Solutions
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}