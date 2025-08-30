import { Shield, Cloud, Users, FileCheck, Building, Lock, Server, Laptop, Database, Settings, Award, Phone, Mail, MapPin } from "lucide-react";
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
                <span className="gradient-text">Empowering Government Agencies</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 reveal-fade" data-delay="200">
                Cutting-Edge IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto mb-8 reveal-fade" data-delay="300">
                At Procyon Technostructure LLC, we deliver innovative, secure, and mission-critical technology solutions tailored for federal, state, and local government agencies. With a deep understanding of the public sector's challenges, we provide end-to-end IT services - from hardware and software procurement to cloud, cybersecurity, and full-scale digital transformation.
              </p>
              <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-6 rounded-xl mb-8 reveal-fade" data-delay="400">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Our Mission</h3>
                <p className="text-lg text-gray-300">
                  To empower government agencies with reliable, scalable, and cost-effective IT solutions that strengthen security, improve operational efficiency, and accelerate digital innovation.
                </p>
              </div>
              <div className="mt-8 reveal-fade" data-delay="500">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-block">
                  Partner with Procyon Today
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Our Expertise */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                With proven experience in government contracting and IT consulting, Procyon specializes in comprehensive technology solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* IT Hardware & Software Procurement */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Server className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">IT Hardware & Software Procurement</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Trusted sourcing of industry-leading, government-compliant solutions.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>✔ GSA-Compliant Hardware Solutions</li>
                  <li>✔ Government-Approved Software Licensing</li>
                  <li>✔ Vendor Management & Procurement</li>
                  <li>✔ End-to-End Sourcing Services</li>
                </ul>
              </div>

              {/* Cloud Solutions & AI */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Cloud className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Cloud Solutions & AI</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Secure cloud transformation and intelligent automation for mission success.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>✔ FedRAMP-Ready Cloud Solutions</li>
                  <li>✔ AI-Driven Automation</li>
                  <li>✔ Secure Cloud Migration</li>
                  <li>✔ Intelligent Workflow Solutions</li>
                </ul>
              </div>

              {/* Cybersecurity & Compliance */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10">Cybersecurity & Compliance</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Safeguarding critical infrastructure with advanced frameworks.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>✔ FISMA Compliance</li>
                  <li>✔ FedRAMP Authorization</li>
                  <li>✔ NIST Framework Implementation</li>
                  <li>✔ Advanced Threat Protection</li>
                </ul>
              </div>

              {/* IT Modernization & Managed Services */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Settings className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">IT Modernization & Managed Services</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  24/7 monitoring, proactive maintenance, and seamless operations.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>✔ Legacy System Modernization</li>
                  <li>✔ 24/7 Monitoring & Support</li>
                  <li>✔ Proactive Maintenance</li>
                  <li>✔ Performance Optimization</li>
                </ul>
              </div>

              {/* Enterprise Applications */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10" data-delay="500">
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Building className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Enterprise Applications</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  ServiceNow and Salesforce solutions to streamline workflows and enhance citizen engagement.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>✔ ServiceNow Implementation</li>
                  <li>✔ Salesforce Government Solutions</li>
                  <li>✔ Workflow Automation</li>
                  <li>✔ Citizen Engagement Platforms</li>
                </ul>
              </div>

              {/* Staff Augmentation */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10" data-delay="600">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">Staff Augmentation</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Government IT staffing with cleared and qualified professionals.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>✔ Security Cleared Personnel</li>
                  <li>✔ On-Demand Staffing</li>
                  <li>✔ Specialized Technical Talent</li>
                  <li>✔ Cloud, AI & Cybersecurity Experts</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Service Offerings */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Comprehensive IT Offerings</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Complete suite of IT hardware, software, licensing, and managed services designed for government agencies.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* IT Hardware & Infrastructure */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">IT Hardware & Infrastructure</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Servers & Data Storage</strong> – High-performance, scalable storage and compute systems.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Networking Equipment</strong> – Secure routers, switches, and firewalls.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Workstations & Laptops</strong> – Government-approved desktops and mobile devices.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Printers & Scanners</strong> – Efficient document management tools.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <div>
                      <strong>Power & Cooling Solutions</strong> – UPS and data center cooling for uninterrupted operations.
                    </div>
                  </div>
                </div>
              </div>

              {/* Software & Licensing */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Laptop className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400">Software & Licensing</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <div>
                      <strong>Enterprise Applications</strong> – ServiceNow, Salesforce, ERP solutions.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <div>
                      <strong>Cybersecurity Software</strong> – Threat protection, identity management, endpoint security.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <div>
                      <strong>Cloud Productivity Suites</strong> – Microsoft 365, Google Workspace, and collaboration tools.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <div>
                      <strong>Data Analytics & AI Software</strong> – BI dashboards, AI-driven automation, predictive insights.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">•</span>
                    <div>
                      <strong>OS & Virtualization</strong> – Secure Windows/Linux licensing and VMware/Hyper-V platforms.
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud & AI-Driven Technologies */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">Cloud & AI-Driven Technologies</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <strong>Infrastructure as a Service (IaaS)</strong> – Secure cloud hosting for mission-critical workloads.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <strong>Software as a Service (SaaS)</strong> – Cloud apps for productivity and collaboration.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <strong>AI & Automation Tools</strong> – Intelligent workflow automation and decision-making.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <strong>Data Backup & Disaster Recovery</strong> – Cloud-based secure backup and recovery.
                    </div>
                  </div>
                </div>
              </div>

              {/* IT Services & Solutions */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-400">IT Services & Solutions</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">•</span>
                    <div>
                      <strong>IT Consulting & Strategy</strong> – Roadmap development and digital transformation consulting.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">•</span>
                    <div>
                      <strong>IT Infrastructure Management</strong> – Monitoring, maintenance, and performance optimization.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">•</span>
                    <div>
                      <strong>Cybersecurity & Risk Management</strong> – Compliance-driven network and risk protection.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">•</span>
                    <div>
                      <strong>Custom Software Development</strong> – Tailored solutions and system integration.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The Procyon Advantage */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">The Procyon Advantage</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why government agencies choose Procyon for their IT transformation needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Government-Focused IT Provider</h3>
                <p className="text-gray-300">
                  Deep expertise in public sector IT procurement and services with proven government experience.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">End-to-End IT Partner</h3>
                <p className="text-gray-300">
                  We manage the entire lifecycle: strategy, procurement, deployment, and support.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Compliance & Security First</h3>
                <p className="text-gray-300">
                  Full adherence to FISMA, FedRAMP, and NIST standards with security-first approach.
                </p>
              </div>

              <div className="text-center reveal-fade" data-delay="400">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Scalable & Reliable Solutions</h3>
                <p className="text-gray-300">
                  Technology that evolves with your agency's mission and citizen service requirements.
                </p>
              </div>

              <div className="text-center reveal-fade" data-delay="500">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Collaborative Approach</h3>
                <p className="text-gray-300">
                  Transparent, mission-driven partnership ensuring agencies are future-ready to serve citizens.
                </p>
              </div>

              <div className="text-center reveal-fade" data-delay="600">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">GSA-Compliant Solutions</h3>
                <p className="text-gray-300">
                  Certified government-compliant IT hardware, software, and services with trusted vendor partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NAICS Codes */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">NAICS Codes & Procurement Compliance</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Procyon operates under multiple NAICS codes to ensure procurement compliance and eligibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { code: "541511", title: "Custom Computer Programming Services" },
                { code: "541512", title: "Computer Systems Design Services" },
                { code: "541513", title: "Computer Facilities Management Services" },
                { code: "541519", title: "Other Computer Related Services" },
                { code: "518210", title: "Data Processing, Hosting & Related Services" },
                { code: "541330", title: "Engineering Services" },
                { code: "561320", title: "Temporary Help Services (Staff Augmentation)" },
                { code: "423430", title: "Computer & Peripheral Equipment Wholesalers" },
                { code: "511210", title: "Software Publishers" },
                { code: "517311", title: "Wired Telecommunications Carriers" },
                { code: "517410", title: "Satellite Telecommunications" },
                { code: "519190", title: "All Other Information Services" }
              ].map((naics, index) => (
                <div key={naics.code} className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay={index * 50}>
                  <div className="text-2xl font-bold text-blue-400 mb-2 relative z-10">{naics.code}</div>
                  <div className="text-gray-300 text-sm relative z-10">{naics.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="py-20 bg-gray-900/50 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Technology Partner Line Card</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Procyon partners with leading global OEMs and technology providers to deliver trusted solutions.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Servers & Storage</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Dell", "HPE", "IBM", "NetApp", "Cisco"].map((partner) => (
                      <span key={partner} className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">Networking & Security</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Cisco", "Fortinet", "Palo Alto", "Juniper", "Aruba"].map((partner) => (
                      <span key={partner} className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">End-User Computing</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Lenovo", "Dell", "HP"].map((partner) => (
                      <span key={partner} className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4">Power & Cooling</h3>
                  <div className="flex flex-wrap gap-3">
                    {["APC", "Eaton", "Vertiv", "Tripp Lite"].map((partner) => (
                      <span key={partner} className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Enterprise Applications</h3>
                  <div className="flex flex-wrap gap-3">
                    {["ServiceNow", "Salesforce", "Oracle", "SAP"].map((partner) => (
                      <span key={partner} className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-400 mb-4">Cybersecurity</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Symantec", "McAfee", "CrowdStrike", "Check Point"].map((partner) => (
                      <span key={partner} className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-indigo-400 mb-4">Cloud & Virtualization</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Microsoft Azure", "AWS", "Google Cloud", "VMware"].map((partner) => (
                      <span key={partner} className="bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">Productivity & AI Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Microsoft 365", "Google Workspace", "Adobe", "Splunk", "Tableau", "Snowflake"].map((partner) => (
                      <span key={partner} className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Compliance */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Certifications & Compliance</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Procyon maintains industry-recognized certifications validating excellence, security, and diversity in federal IT.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Current Certifications */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">SAM.gov Registered</h3>
                <p className="text-gray-300 mb-4 relative z-10">
                  Official government contractor registration with all required identifiers.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• UEI: JAA2ZJ9JTNC7</li>
                  <li>• CAGE: 8S8K8</li>
                  <li>• DUNS: [Pending]</li>
                </ul>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Diversity Certifications</h3>
                <p className="text-gray-300 mb-4 relative z-10">
                  Certified women and minority-owned business enterprise.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• WBENC Certified</li>
                  <li>• NMSDC Certified</li>
                  <li>• California SWMBE</li>
                </ul>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Building className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">State Certifications</h3>
                <p className="text-gray-300 mb-4 relative z-10">
                  Certified IT vendor for California government agencies.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• CMAS Certified</li>
                  <li>• California IT Vendor</li>
                  <li>• State Agency Qualified</li>
                </ul>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <FileCheck className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">In Progress Certifications</h3>
                <p className="text-gray-300 mb-4 relative z-10">
                  Expanding our government contracting capabilities.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• GSA Schedule Contract</li>
                  <li>• SBA 8(a) Certification</li>
                  <li>• Additional Federal Contracts</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Ready to Partner with Procyon?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Connect with our government solutions team to discuss your agency's IT transformation needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Locations</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-blue-400">USA:</p>
                    <p className="text-gray-300">7250 Redwood Blvd, Suite # 211<br />Novato, CA 94945</p>
                  </div>
                  <div>
                    <p className="font-medium text-emerald-400">Canada:</p>
                    <p className="text-gray-300">202-1825 MARKHAM ROAD<br />SCARBOROUGH ON M1B 4Z9</p>
                  </div>
                  <div>
                    <p className="font-medium text-purple-400">India:</p>
                    <p className="text-gray-300">RNG TOWER, 824/1, Anna Salai<br />CIT Nagar West, CIT Nagar<br />Chennai, Tamil Nadu 600035</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-300">
                  <a href="tel:+12099161622" className="hover:text-emerald-400 transition-colors">
                    +1 209 916 1622
                  </a>
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Government Solutions</h3>
                <p className="text-gray-300">
                  <a href="mailto:govt@procyonts.com" className="hover:text-purple-400 transition-colors">
                    govt@procyonts.com
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center reveal-fade" data-delay="400">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
                Discuss Your Government Project
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}