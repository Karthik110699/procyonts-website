import { Shield, Cloud, Users, FileCheck, Building, Lock, Server, Laptop, Database, Settings, Award, Phone, Mail, MapPin, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";

export default function GovernmentServicesPage() {
  useScrollReveal();
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setExpandedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const governmentStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Government Solutions - FedRAMP, Security, Compliance | Procyon Technostructure",
    "description": "Comprehensive IT solutions for federal, state, and local government agencies. Hardware procurement, cloud solutions, cybersecurity, and digital transformation with FISMA and FedRAMP compliance.",
    "url": "https://procyon-technostructure.com/services/government",
    "mainEntity": {
      "@type": "Service",
      "name": "Government Solutions",
      "description": "End-to-end IT services for government agencies including hardware procurement, cloud transformation, cybersecurity, and compliance management",
      "provider": {
        "@type": "Organization",
        "name": "Procyon Technostructure LLC"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Government Solutions - IT Hardware, Cloud, Cybersecurity | Procyon Technostructure"
        description="Comprehensive IT solutions for federal, state, and local government agencies. Hardware procurement, cloud solutions, cybersecurity, and digital transformation with FISMA and FedRAMP compliance."
        keywords="government IT solutions, FedRAMP compliance, government cloud, federal IT procurement, FISMA compliance, government cybersecurity, digital transformation, IT hardware procurement, government software licensing"
        canonicalUrl="https://procyon-technostructure.com/services/government"
        ogTitle="Government IT Solutions - Hardware, Cloud & Cybersecurity Services"
        ogDescription="Empowering government agencies with cutting-edge IT solutions. From hardware procurement to cloud transformation and cybersecurity compliance."
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
                <span className="gradient-text">Innovative IT Solutions for Modern Government Operations</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto mb-8 reveal-fade" data-delay="300">
                Procyon Technostructure LLC is a premier technology solutions provider, delivering state-of-the-art IT services, strategic staffing solutions, and top-tier hardware procurement for government agencies. As a certified WRMSDC, WBENC, SBE, and MBE business in the State of California, we are committed to excellence, diversity, and customer-centric solutions that drive efficiency and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Comprehensive IT Solutions & Services */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Comprehensive IT Solutions & Services</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We provide tailored technology solutions to meet the evolving demands of government agencies, ensuring seamless integration and operational efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Salesforce Solutions */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Salesforce Solutions</h3>
                <ul className="space-y-2 text-gray-300 relative z-10">
                  <li>• End-to-End CRM Implementation & Customization</li>
                  <li>• Data Migration & Seamless Integration</li>
                  <li>• Automated Workflow & Business Process Optimization</li>
                  <li>• Custom App Development & Enhancement</li>
                  <li>• Expert Consulting & Ongoing Support</li>
                </ul>
              </div>

              {/* ServiceNow */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">ServiceNow</h3>
                <ul className="space-y-2 text-gray-300 relative z-10">
                  <li>• IT Service Management (ITSM) for Streamlined Operations</li>
                  <li>• IT Operations Management (ITOM) for Infrastructure Efficiency</li>
                  <li>• Customer Service Management (CSM) for Enhanced User Experience</li>
                  <li>• Security Operations (SecOps) for Risk Mitigation</li>
                  <li>• Custom Platform Administration & Optimization</li>
                </ul>
              </div>

              {/* Azure - AWS */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Azure - AWS</h3>
                <ul className="space-y-2 text-gray-300 relative z-10">
                  <li>• Enterprise Cloud Migration & Modernization</li>
                  <li>• Infrastructure as a Service (IaaS) for Scalable IT</li>
                  <li>• Platform as a Service (PaaS) for Development Acceleration</li>
                  <li>• Software as a Service (SaaS) for Business Productivity</li>
                  <li>• Advanced Cloud Security & Compliance Solutions</li>
                  <li>• Cost Optimization Strategies for Maximum ROI</li>
                </ul>
              </div>

              {/* Robotic Process Automation (RPA) */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Robotic Process Automation (RPA)</h3>
                <ul className="space-y-2 text-gray-300 relative z-10">
                  <li>• Intelligent Process Discovery & Analysis</li>
                  <li>• AI-Driven Bot Development & Deployment</li>
                  <li>• Full-Scale RPA Implementation & Management</li>
                  <li>• Automated Repetitive Task Optimization</li>
                  <li>• Efficiency Enhancement & Cost Reduction</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Government Staffing Solutions */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Government Staffing Solutions</h2>
              <h3 className="text-2xl font-bold mb-8 text-emerald-400">IT Staffing Services</h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                We provides comprehensive IT staffing solutions to meet your organization's specific needs. Our team of experienced recruiters specializes in sourcing top-tier IT talent across a wide range of technical domains.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center reveal-fade" data-delay="100">
                <h4 className="text-xl font-bold mb-4 text-blue-400">Contract Staffing</h4>
                <p className="text-gray-300">
                  Flexible staffing solutions for short-term projects or to fill temporary vacancies.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <h4 className="text-xl font-bold mb-4 text-emerald-400">Direct Hire</h4>
                <p className="text-gray-300">
                  Permanent placement of skilled IT professionals to meet your long-term staffing needs.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <h4 className="text-xl font-bold mb-4 text-purple-400">Staff Augmentation</h4>
                <p className="text-gray-300">
                  Augmenting your existing IT team with specialized resources to handle specific projects or peak workloads.
                </p>
              </div>
            </div>
            
            <div className="text-center reveal-fade">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Our rigorous screening process ensures that we deliver highly qualified IT professionals who can seamlessly integrate into your team and contribute to your organization's success.
              </p>
            </div>
          </div>
        </section>

        {/* IT Hardware Products */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">IT Hardware Products</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We are your trusted partner for all your hardware needs. We offer a comprehensive range of cutting-edge computer equipment from leading manufacturers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Servers */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Servers</h3>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  <li><strong>• Rack Servers</strong> - Powerful, scalable servers designed for high-performance computing and data storage.</li>
                  <li><strong>• Tower Servers</strong> - Compact, versatile servers ideal for small and medium-sized businesses.</li>
                  <li><strong>• Blade Servers</strong> - Energy-efficient servers that maximize space utilization in data centers.</li>
                </ul>
              </div>

              {/* Storage Solutions */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Storage Solutions</h3>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  <li><strong>NAS (Network Attached Storage)</strong> - Centralized storage solutions for sharing files and data across networks.</li>
                  <li><strong>SAN (Storage Area Network)</strong> - High-performance storage solutions for demanding applications.</li>
                  <li><strong>HDDs (Hard Disk Drives)</strong> - Reliable and affordable storage solutions for general-purpose use.</li>
                  <li><strong>SSDs (Solid State Drives)</strong> - High-speed storage solutions for faster boot times and application performance.</li>
                </ul>
              </div>

              {/* Networking Equipment */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Networking Equipment</h3>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  <li><strong>Routers</strong> - Manage network traffic and route data packets efficiently.</li>
                  <li><strong>Switches</strong> - Connect devices within a network, enabling communication between them.</li>
                  <li><strong>Firewalls</strong> - Protect your network from unauthorized access and cyber threats.</li>
                  <li><strong>Wireless Access Points</strong> - Provide wireless connectivity for devices within a network.</li>
                </ul>
              </div>

              {/* Computer Peripherals */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Computer Peripherals</h3>
                <ul className="space-y-3 text-gray-300 relative z-10">
                  <li><strong>Monitors</strong> - High-quality displays for optimal viewing experience.</li>
                  <li><strong>Keyboards and Mice</strong> - Essential input devices for computer operation.</li>
                  <li><strong>Printers and Scanners</strong> - Versatile devices for document printing and scanning.</li>
                  <li><strong>Headsets and Webcams</strong> - Essential tools for remote communication and collaboration.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* NAICS Service Categories */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">NAICS Codes for Government Compliance</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We adhere to key North American Industry Classification System (NAICS) codes, ensuring regulatory compliance for government procurement
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 541511 - Custom Computer Programming Services */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden reveal-fade">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-between"
                  onClick={() => toggleService('541511')}
                >
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-2">541511</h3>
                    <p className="text-gray-300">Custom Computer Programming Services</p>
                  </div>
                  {expandedServices.includes('541511') ? 
                    <Minus className="w-5 h-5 text-blue-400" /> : 
                    <Plus className="w-5 h-5 text-blue-400" />
                  }
                </div>
                {expandedServices.includes('541511') && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      Custom computer programming services, including writing, modifying, testing, and supporting software for a specific customer
                    </p>
                  </div>
                )}
              </div>

              {/* 541512 - Computer Systems Design Services */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden reveal-fade">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-between"
                  onClick={() => toggleService('541512')}
                >
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-2">541512</h3>
                    <p className="text-gray-300">Computer Systems Design Services</p>
                  </div>
                  {expandedServices.includes('541512') ? 
                    <Minus className="w-5 h-5 text-emerald-400" /> : 
                    <Plus className="w-5 h-5 text-emerald-400" />
                  }
                </div>
                {expandedServices.includes('541512') && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      Computer systems design services, including planning and designing computer systems that integrate hardware, software, and communication technologies
                    </p>
                  </div>
                )}
              </div>

              {/* 541513 - Computer Facilities Management Services */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden reveal-fade">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-between"
                  onClick={() => toggleService('541513')}
                >
                  <div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">541513</h3>
                    <p className="text-gray-300">Computer Facilities Management Services</p>
                  </div>
                  {expandedServices.includes('541513') ? 
                    <Minus className="w-5 h-5 text-purple-400" /> : 
                    <Plus className="w-5 h-5 text-purple-400" />
                  }
                </div>
                {expandedServices.includes('541513') && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      Computer facilities management services
                    </p>
                  </div>
                )}
              </div>

              {/* 541519 - Other Computer Related Services */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden reveal-fade">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-between"
                  onClick={() => toggleService('541519')}
                >
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">541519</h3>
                    <p className="text-gray-300">Other Computer Related Services</p>
                  </div>
                  {expandedServices.includes('541519') ? 
                    <Minus className="w-5 h-5 text-amber-400" /> : 
                    <Plus className="w-5 h-5 text-amber-400" />
                  }
                </div>
                {expandedServices.includes('541519') && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      Other computer related services
                    </p>
                  </div>
                )}
              </div>

              {/* 511210 - Software Publishers */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden reveal-fade">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-between"
                  onClick={() => toggleService('511210')}
                >
                  <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-2">511210</h3>
                    <p className="text-gray-300">Software Publishers</p>
                  </div>
                  {expandedServices.includes('511210') ? 
                    <Minus className="w-5 h-5 text-orange-400" /> : 
                    <Plus className="w-5 h-5 text-orange-400" />
                  }
                </div>
                {expandedServices.includes('511210') && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      Software publishers, including applications development and publishing, computer software publishing and reproduction, and more
                    </p>
                  </div>
                )}
              </div>

              {/* 423430 - Computer & Peripheral Equipment Wholesalers */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden reveal-fade">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-between"
                  onClick={() => toggleService('423430')}
                >
                  <div>
                    <h3 className="text-xl font-bold text-pink-400 mb-2">423430</h3>
                    <p className="text-gray-300">Computer & Peripheral Equipment Wholesalers</p>
                  </div>
                  {expandedServices.includes('423430') ? 
                    <Minus className="w-5 h-5 text-pink-400" /> : 
                    <Plus className="w-5 h-5 text-pink-400" />
                  }
                </div>
                {expandedServices.includes('423430') && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 mt-4 leading-relaxed">
                      Computer and Computer Peripheral Equipment and Software Merchant Wholesalers
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}