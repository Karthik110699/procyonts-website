import { Settings, Building, Cloud, BarChart, Users, CheckCircle, TrendingUp, Zap, Shield } from "lucide-react";
import { SiSap } from "react-icons/si";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";
import { ContactSection } from "@/components/contact-section";

export default function SAPPage() {
  useScrollReveal();

  const sapStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SAP Solutions - Expert Consulting & Implementation | Procyon Technostructure",
    "description": "Expert SAP consulting and implementation services. Transform your enterprise with SAP S/4HANA, cloud solutions, and comprehensive SAP modules for operational excellence.",
    "url": "https://procyon-technostructure.com/enterprise/sap",
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
          "name": "SAP Solutions",
          "item": "https://procyon-technostructure.com/enterprise/sap"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="SAP Solutions - Expert Consulting & Implementation | Procyon Technostructure"
        description="Expert SAP consulting and implementation services. Transform your enterprise with SAP S/4HANA, cloud solutions, and comprehensive SAP modules for operational excellence."
        keywords="SAP consulting, SAP S/4HANA, SAP implementation, SAP cloud solutions, enterprise resource planning, SAP modules, SAP integration, SAP transformation"
        canonicalUrl="https://procyon-technostructure.com/enterprise/sap"
        ogTitle="SAP Solutions - Expert Consulting & Implementation"
        ogDescription="Transform your enterprise with expert SAP consulting and implementation. SAP S/4HANA, cloud solutions, and comprehensive SAP modules."
        structuredData={sapStructuredData}
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
              <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center reveal-scale">
                <SiSap className="w-10 h-10 text-purple-400" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-scale">
                  <span className="gradient-text">SAP Solutions at Procyon</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-400 reveal-fade">
                  Leading SAP Consulting & Implementation Services
                </h2>
              </div>
            </div>
            
            <div className="space-y-8 max-w-5xl reveal-fade" data-delay="200">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Procyon Technostructure, we lead the way in SAP consulting and implementation services, empowering businesses to streamline operations, enhance decision-making, and unlock the full potential of their enterprise resources. Whether you want to implement, upgrade, or optimise your SAP system, we deliver customised solutions tailored to your unique business needs.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Our SAP-certified experts help transform your organisation into an agile, data-driven business that can respond quickly to market changes and drive sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Procyon */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Why Choose Procyon for Your SAP Journey?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tailored SAP Strategies */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Tailored SAP Strategies for Your Business</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  We don't take a one-size-fits-all approach. At Procyon, our SAP experts work closely with you to develop a tailored strategy that aligns with your business objectives. We ensure your SAP systems are optimised for performance and future-proofed to grow with your business.
                </p>
              </div>

              {/* Future-Proof SAP Landscape */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Future-Proof Your SAP Landscape</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  The future of enterprise software is agile and data-driven. We help businesses migrate to SAP S/4HANA and adopt cloud-first strategies, positioning them for success in a rapidly changing technological landscape.
                </p>
              </div>

              {/* Seamless Integration */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Seamless Integration with Existing Systems</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  Whether integrating with other SAP modules or third-party applications, we ensure a seamless flow of data and processes across your organisation. Our integration solutions bridge gaps and reduce operational silos, enabling better decision-making and efficiency.
                </p>
              </div>

              {/* SAP Change Management */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">SAP Change Management</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  Successful SAP adoption goes beyond technology. We provide change management services to ensure that your team is ready to embrace new systems and processes. With training and support programs, we ensure a smooth transition that minimises disruption to your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our SAP Services */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our SAP Services</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We offer comprehensive SAP services, ensuring you maximise the ROI of your SAP investments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* SAP S/4HANA Transformation */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-xl font-bold mb-4 text-purple-400 relative z-10">SAP S/4HANA Transformation</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  Propel your business forward by migrating to SAP S/4HANA, the next-generation ERP system designed to simplify processes, enhance agility, and accelerate innovation.
                </p>
              </div>

              {/* SAP Implementation & Optimization */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-xl font-bold mb-4 text-blue-400 relative z-10">SAP Implementation & Optimization</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  From planning and system design to execution and optimisation, we provide full-service SAP implementations focused on system efficiency and end-user adoption.
                </p>
              </div>

              {/* SAP Cloud Solutions */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-xl font-bold mb-4 text-emerald-400 relative z-10">SAP Cloud Solutions</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  SAP Cloud offers unmatched flexibility, scalability, and innovation. We help businesses leverage SAP SuccessFactors, SAP Ariba, and SAP Analytics Cloud.
                </p>
              </div>

              {/* SAP Industry-Specific Solutions */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-xl font-bold mb-4 text-amber-400 relative z-10">SAP Industry-Specific Solutions</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  With deep expertise across various sectors, we provide industry-specific SAP solutions that address unique challenges in financial services, manufacturing, and healthcare.
                </p>
              </div>

              {/* SAP System Integration */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-xl font-bold mb-4 text-red-400 relative z-10">SAP System Integration</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  Our integration expertise enables you to connect SAP with third-party systems, applications, and data sources, creating a cohesive ecosystem that drives business value.
                </p>
              </div>

              {/* SAP Managed Services & Support */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10">
                <h3 className="text-xl font-bold mb-4 text-green-400 relative z-10">SAP Managed Services & Support</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  Post-implementation, Procyon provides comprehensive SAP support services to ensure your SAP systems continue to operate at peak performance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Key SAP Modules */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Key SAP Modules We Deliver Expertise In</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Procyon's team is proficient in implementing and managing SAP modules across various business functions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              
              <div className="space-y-4 reveal-fade" data-delay="100">
                <h3 className="text-xl font-bold text-purple-400">• SAP S/4HANA Finance</h3>
                <p className="text-gray-300">Leverage real-time financial management capabilities with streamlined financial accounting, analysis, and reporting.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="150">
                <h3 className="text-xl font-bold text-blue-400">• SAP HCM (Human Capital Management)</h3>
                <p className="text-gray-300">Maximise employee potential with SAP SuccessFactors for talent management and workforce optimisation.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="200">
                <h3 className="text-xl font-bold text-emerald-400">• SAP Supply Chain Management (SCM)</h3>
                <p className="text-gray-300">Enhance efficiency across your supply chain with optimal inventory management and production planning.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="250">
                <h3 className="text-xl font-bold text-amber-400">• SAP Ariba</h3>
                <p className="text-gray-300">Transform your procurement operations, improving supplier collaboration and optimising spend management.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="300">
                <h3 className="text-xl font-bold text-red-400">• SAP Business Warehouse (BW/4HANA)</h3>
                <p className="text-gray-300">Unlock powerful analytics and real-time insights with business intelligence tools that scale with your business.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="350">
                <h3 className="text-xl font-bold text-green-400">• SAP Customer Experience (CX)</h3>
                <p className="text-gray-300">Deliver superior customer service with SAP C/4HANA, encompassing sales, marketing, and customer service.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="400">
                <h3 className="text-xl font-bold text-indigo-400">• SAP Analytics Cloud (SAC)</h3>
                <p className="text-gray-300">Leverage advanced analytics to visualise and analyse your business data in real-time for better decision-making.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="450">
                <h3 className="text-xl font-bold text-pink-400">• SAP CPQ (Configure, Price, Quote)</h3>
                <p className="text-gray-300">Simplify and accelerate your sales processes with accurate configuration, pricing, and quoting.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="500">
                <h3 className="text-xl font-bold text-cyan-400">• SAP Integrated Business Planning (IBP)</h3>
                <p className="text-gray-300">Optimise your sales and operations planning, ensuring alignment between demand planning and financial performance.</p>
              </div>

              <div className="space-y-4 reveal-fade" data-delay="550">
                <h3 className="text-xl font-bold text-orange-400">• SAP Transportation Management (TM)</h3>
                <p className="text-gray-300">Streamline your transportation operations, ensuring efficient logistics and reducing costs across your supply chain.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our SAP Expertise Across Industries</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Procyon specialises in delivering industry-specific SAP solutions that provide unique insights and drive growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Manufacturing</h3>
                <p className="text-gray-300">Streamline your operations and achieve greater visibility with SAP's solutions for production, logistics, and supply chain management.</p>
              </div>

              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Healthcare & Life Sciences</h3>
                <p className="text-gray-300">Improve patient care and operational efficiency with SAP's healthcare-specific tools for managing clinical and operational data.</p>
              </div>

              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Financial Services</h3>
                <p className="text-gray-300">Leverage SAP's robust financial management solutions to stay compliant and improve financial reporting.</p>
              </div>

              <div className="text-center reveal-fade" data-delay="400">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-amber-400">Retail & Consumer Goods</h3>
                <p className="text-gray-300">Enhance customer experiences and streamline sales operations with SAP's commerce and customer experience solutions.</p>
              </div>

              <div className="text-center reveal-fade" data-delay="500">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Public Sector</h3>
                <p className="text-gray-300">Drive digital transformation in government organizations through SAP's public sector-specific tools for managing resources and services.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Procyon */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Why Procyon?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">• SAP Expertise Across the Globe</h3>
                <p className="text-gray-300">Recognised as a leading SAP consulting firm with deep expertise in delivering results worldwide.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">• Certified SAP Professionals</h3>
                <p className="text-gray-300">Our team comprises SAP-certified experts with extensive industry knowledge and technical proficiency.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-emerald-400 mb-2">• Rapid Resource Deployment</h3>
                <p className="text-gray-300">We maintain a bench of qualified SAP consultants, ensuring fast resource mobilisation.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">• Proven Success</h3>
                <p className="text-gray-300">Strong track record of successful SAP implementations with best practices and proven methodologies.</p>
              </div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto reveal-fade">
              <h3 className="text-3xl font-bold mb-6 text-purple-400">Transform Your SAP Environment with Procyon</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Are you looking to migrate to SAP S/4HANA, optimise your existing systems, or build a robust cloud-first SAP environment? Procyon Technostructure is your trusted SAP partner. Let us help you drive efficiency, scalability, and growth with tailored SAP solutions.
              </p>
              <p className="text-lg text-gray-300">
                Connect with us today to learn more about our SAP services.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}