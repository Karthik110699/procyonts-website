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
                <span className="gradient-text">Staff Augmentation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto reveal-fade" data-delay="200">
                The pace of digital change demands expertise, fast. Access skilled IT professionals who bring the knowledge, agility, and experience needed to keep your projects moving forward.
              </p>
              <div className="mt-8 reveal-fade" data-delay="400">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-block">
                  Find Your Perfect Team Member
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Talent Acquisition Methodology</h2>
              <p className="text-xl text-gray-300">
                A proven approach that ensures you get skilled professionals who can contribute immediately
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Requirements Analysis</h3>
                <p className="text-gray-300">
                  Work closely with your team to understand specific skills, experience, and cultural fit requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-emerald-400">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Talent Sourcing & Screening</h3>
                <p className="text-gray-300">
                  Tap into our extensive network of pre-vetted professionals with rigorous technical and cultural assessments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Matching & Integration</h3>
                <p className="text-gray-300">
                  Carefully match candidates to your requirements and provide comprehensive onboarding support.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-amber-400">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Ongoing Support & Management</h3>
                <p className="text-gray-300">
                  Continuous support, performance monitoring, and feedback collection to ensure project success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Roles */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Expert Talent Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Skilled professionals across all technology disciplines, carefully selected for technical skills and team collaboration ability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Software Development */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Software Development</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Full-stack developers, mobile app developers, and DevOps engineers with expertise in modern technologies.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Full-Stack & Mobile Developers</li>
                  <li>• Frontend & Backend Specialists</li>
                  <li>• DevOps Engineers</li>
                  <li>• API & Microservices Development</li>
                </ul>
              </div>

              {/* Data & Analytics */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">Data & Analytics</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Data engineers, data scientists, and business intelligence analysts to unlock insights from your data.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Data Engineers & Scientists</li>
                  <li>• Business Intelligence Analysts</li>
                  <li>• Data Visualization Specialists</li>
                  <li>• Analytics Platform Experts</li>
                </ul>
              </div>

              {/* Cloud & Infrastructure */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Settings className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400 relative z-10">Cloud & Infrastructure</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Cloud architects, system administrators, and network engineers who design and manage modern infrastructure.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Cloud Architects & Engineers</li>
                  <li>• System Administrators</li>
                  <li>• Network Engineers</li>
                  <li>• DevOps & Automation Specialists</li>
                </ul>
              </div>

              {/* Project Managers */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Project Managers</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Certified project managers who ensure delivery excellence and team coordination.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Agile & Scrum Methodologies</li>
                  <li>• PMP & CSM Certified</li>
                  <li>• Risk Management</li>
                  <li>• Stakeholder Communication</li>
                </ul>
              </div>

              {/* Cybersecurity */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 reveal-fade relative z-10" data-delay="500">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400 relative z-10">Cybersecurity</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Security analysts, penetration testers, and compliance specialists ensuring your systems are protected.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Security Analysts</li>
                  <li>• Penetration Testers</li>
                  <li>• Compliance Specialists</li>
                  <li>• Incident Response Experts</li>
                </ul>
              </div>

              {/* AI & Machine Learning */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="500">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  ML engineers, AI researchers, and NLP specialists who build intelligent systems and automation.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Machine Learning Engineers</li>
                  <li>• AI Researchers</li>
                  <li>• NLP Specialists</li>
                  <li>• Computer Vision Experts</li>
                </ul>
              </div>

              {/* Enterprise Systems */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 reveal-fade relative z-10" data-delay="600">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10">Enterprise Systems</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Salesforce, SAP, ServiceNow, and other enterprise platform specialists with deep domain expertise.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Salesforce Specialists</li>
                  <li>• SAP Consultants</li>
                  <li>• ServiceNow Developers</li>
                  <li>• ERP & CRM Platform Experts</li>
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
                We support your project cycles by scaling your workforce up or down as needed, with full transparency and speed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Short-term Projects</h3>
                <p className="text-gray-300">
                  1-6 month engagements for specific initiatives with defined timelines and deliverables.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Long-term Assignments</h3>
                <p className="text-gray-300">
                  6+ month engagements for ongoing support with ability to adjust team size based on project needs.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hybrid Teams</h3>
                <p className="text-gray-300">
                  Combination of our resources and your internal team with remote & on-site options based on your preferences.
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
                <div className="text-3xl font-bold text-blue-400 mb-2">1-2 weeks</div>
                <p className="text-gray-300">Rapid Deployment</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="text-3xl font-bold text-green-400 mb-2">30-50%</div>
                <p className="text-gray-300">Cost Efficiency Savings</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
                <p className="text-gray-300">Long-term Commitments</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="400">
                <div className="text-3xl font-bold text-orange-400 mb-2">Immediate</div>
                <p className="text-gray-300">Access to Expertise</p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}