import { Users, Code, Database, Settings, Briefcase, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";

export default function StaffAugmentationPage() {
  useScrollReveal();

  const staffStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Staff Augmentation - Software Engineers, Data Scientists | Procyon Technostructure",
    "description": "Scale your team with skilled professionals. Software engineers, data scientists, DevOps engineers, and project managers who integrate seamlessly with your workforce.",
    "url": "https://procyon-technostructure.com/services/staff-augmentation",
    "mainEntity": {
      "@type": "Service",
      "name": "Staff Augmentation",
      "description": "Professional staff augmentation services for technology teams",
      "provider": {
        "@type": "Organization",
        "name": "Procyon Technostructure LLC"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Staff Augmentation - Software Engineers, Data Scientists | Procyon Technostructure"
        description="Scale your team with skilled professionals. Software engineers, data scientists, DevOps engineers, and project managers who integrate seamlessly with your existing workforce."
        keywords="staff augmentation, software engineers, data scientists, DevOps engineers, project managers, team scaling, IT staffing, technology talent, remote developers"
        canonicalUrl="https://procyon-technostructure.com/services/staff-augmentation"
        ogTitle="Professional Staff Augmentation - Scale Your Technology Team"
        ogDescription="Expand your capabilities with expert professionals who integrate seamlessly into your team. Immediate impact, proven expertise."
        structuredData={staffStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <div className="pt-20 pb-16 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 reveal-scale">
                <span className="gradient-text">Staff Augmentation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto reveal-fade" data-delay="200">
                Scale your team with skilled professionals who integrate seamlessly with your existing workforce and deliver immediate impact.
              </p>
              <div className="mt-8 reveal-fade" data-delay="400">
                <Link href="/contact" className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-block">
                  Find Your Perfect Team Member
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Roles */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Expert Professionals Available</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access top-tier talent across all technology disciplines with professionals ready to contribute from day one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Software Engineers */}
              <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Software Engineers</h3>
                <p className="text-gray-300 mb-6">
                  Full-stack developers, frontend specialists, and backend engineers with expertise in modern technologies.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• React, Angular, Vue.js</li>
                  <li>• Node.js, Python, Java</li>
                  <li>• Mobile Development (React Native, Flutter)</li>
                  <li>• API Design & Development</li>
                </ul>
              </div>

              {/* Data Scientists */}
              <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade" data-delay="200">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Data Scientists</h3>
                <p className="text-gray-300 mb-6">
                  Machine learning experts, data analysts, and AI specialists to unlock insights from your data.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Machine Learning & AI</li>
                  <li>• Statistical Analysis</li>
                  <li>• Data Visualization</li>
                  <li>• Predictive Modeling</li>
                </ul>
              </div>

              {/* DevOps Engineers */}
              <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 reveal-fade" data-delay="300">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">DevOps Engineers</h3>
                <p className="text-gray-300 mb-6">
                  Infrastructure automation experts who streamline deployment and optimize system performance.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Cloud Infrastructure (AWS, Azure, GCP)</li>
                  <li>• Kubernetes & Docker</li>
                  <li>• Monitoring & Security</li>
                </ul>
              </div>

              {/* Project Managers */}
              <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade" data-delay="400">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Project Managers</h3>
                <p className="text-gray-300 mb-6">
                  Certified project managers who ensure delivery excellence and team coordination.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Agile & Scrum Methodologies</li>
                  <li>• PMP & CSM Certified</li>
                  <li>• Risk Management</li>
                  <li>• Stakeholder Communication</li>
                </ul>
              </div>

              {/* QA Engineers */}
              <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 reveal-fade" data-delay="500">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">QA Engineers</h3>
                <p className="text-gray-300 mb-6">
                  Quality assurance specialists ensuring your products meet the highest standards.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Automated Testing</li>
                  <li>• Manual Testing</li>
                  <li>• Performance Testing</li>
                  <li>• Test Strategy & Planning</li>
                </ul>
              </div>

              {/* Technical Architects */}
              <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 reveal-fade" data-delay="600">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Technical Architects</h3>
                <p className="text-gray-300 mb-6">
                  Senior architects who design scalable solutions and guide technical decision-making.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• System Architecture Design</li>
                  <li>• Technology Stack Selection</li>
                  <li>• Performance Optimization</li>
                  <li>• Technical Leadership</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Flexible Engagement Models</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the engagement model that best fits your project needs and timeline requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Dedicated Teams</h3>
                <p className="text-gray-300">
                  Full dedicated teams that work exclusively on your projects with complete focus and commitment.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Project-Based</h3>
                <p className="text-gray-300">
                  Skilled professionals for specific projects with defined timelines and deliverables.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">On-Demand</h3>
                <p className="text-gray-300">
                  Flexible staffing for peak periods, specialized tasks, or temporary skill gaps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Staff */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Why Choose Procyon Staff</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our professionals are pre-vetted, experienced, and ready to make an immediate impact on your projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="text-3xl font-bold text-blue-400 mb-2">48hrs</div>
                <p className="text-gray-300">Average time to start</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="text-3xl font-bold text-green-400 mb-2">5+ years</div>
                <p className="text-gray-300">Average experience</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <p className="text-gray-300">Client satisfaction</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="400">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <p className="text-gray-300">Support available</p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}