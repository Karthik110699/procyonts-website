import { Shield, Cloud, Users, FileCheck, Building, Lock } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";

export default function GovernmentServicesPage() {
  useScrollReveal();

  const governmentStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Government Solutions - FedRAMP, Security, Compliance | Procyon Technostructure",
    "description": "Specialized government technology solutions with FedRAMP compliance, secure cloud infrastructure, and citizen services. Expert delivery for federal, state, and local agencies.",
    "url": "https://procyon-technostructure.com/services/government",
    "mainEntity": {
      "@type": "Service",
      "name": "Government Solutions",
      "description": "Comprehensive technology solutions for government organizations",
      "provider": {
        "@type": "Organization",
        "name": "Procyon Technostructure LLC"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Government Solutions - FedRAMP, Security, Compliance | Procyon Technostructure"
        description="Specialized government technology solutions with FedRAMP compliance, secure cloud infrastructure, digital transformation, and citizen services. Expert delivery for federal, state, and local agencies."
        keywords="government solutions, FedRAMP compliance, secure cloud, federal IT, government technology, digital transformation, citizen services, FISMA compliance, government cloud migration"
        canonicalUrl="https://procyon-technostructure.com/services/government"
        ogTitle="Government Technology Solutions - FedRAMP Compliant Services"
        ogDescription="Transform government operations with secure, compliant technology solutions. FedRAMP certified cloud services and digital transformation expertise."
        structuredData={governmentStructuredData}
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
        <div className="pt-20 pb-16 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 reveal-scale">
                <span className="gradient-text">Government Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto reveal-fade" data-delay="200">
                Specialized technology solutions for government organizations with compliance, security, and efficiency at the forefront.
              </p>
              <div className="mt-8 reveal-fade" data-delay="400">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-block">
                  Discuss Your Government Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Services */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* FedRAMP Compliance */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10">FedRAMP Compliance</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Navigate complex federal compliance requirements with our FedRAMP-ready cloud solutions and security frameworks.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• FedRAMP Authorization Support</li>
                  <li>• Security Control Implementation</li>
                  <li>• Continuous Monitoring</li>
                  <li>• Compliance Documentation</li>
                </ul>
              </div>

              {/* Secure Cloud Solutions */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Cloud className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Secure Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Government-grade cloud infrastructure with advanced security controls and data protection measures.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• AWS GovCloud Integration</li>
                  <li>• Azure Government Services</li>
                  <li>• Multi-Level Security</li>
                  <li>• Data Encryption & Protection</li>
                </ul>
              </div>

              {/* Digital Transformation */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Building className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Modernize legacy systems and processes to improve operational efficiency and citizen services.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Legacy System Modernization</li>
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Change Management</li>
                </ul>
              </div>

              {/* Citizen Services */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Citizen Services Platform</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Build user-friendly digital platforms that enhance citizen engagement and service delivery.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Self-Service Portals</li>
                  <li>• Mobile Applications</li>
                  <li>• Accessibility Compliance</li>
                  <li>• Multi-Channel Support</li>
                </ul>
              </div>

              {/* Data Security & Privacy */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 reveal-fade relative z-10" data-delay="500">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Lock className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400 relative z-10">Data Security & Privacy</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Comprehensive data protection strategies ensuring privacy and security of sensitive government information.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Zero Trust Architecture</li>
                  <li>• Identity & Access Management</li>
                  <li>• Threat Detection & Response</li>
                  <li>• Privacy Impact Assessments</li>
                </ul>
              </div>

              {/* Compliance & Audit */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 reveal-fade relative z-10" data-delay="600">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <FileCheck className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400 relative z-10">Compliance & Audit Support</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Comprehensive compliance management and audit preparation for various government regulations.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• FISMA Compliance</li>
                  <li>• SOC 2 Certification</li>
                  <li>• Audit Trail Management</li>
                  <li>• Risk Assessment</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Why Government Agencies Choose Procyon</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep expertise in government technology requirements with proven track record of successful implementations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Security First</h3>
                <p className="text-gray-300">
                  Government-grade security protocols and compliance expertise built into every solution.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Proven Experience</h3>
                <p className="text-gray-300">
                  Years of experience working with federal, state, and local government agencies.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Citizen-Focused</h3>
                <p className="text-gray-300">
                  Solutions designed to improve citizen experience and government service delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}