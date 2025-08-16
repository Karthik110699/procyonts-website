import { Cloud, Settings, Database } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead, { organizationSchema } from "@/components/seo-head";

export default function EnterprisePage() {
  useScrollReveal();

  const enterpriseStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Enterprise Solutions - Procyon Technostructure",
    "description": "Enterprise-grade ServiceNow, SalesForce, and SAP solutions. Expert implementation, optimization, and support for large-scale digital transformation.",
    "url": "https://procyon-technostructure.com/enterprise",
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
          "name": "Enterprise Solutions",
          "item": "https://procyon-technostructure.com/enterprise"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Enterprise Solutions - ServiceNow, SalesForce, SAP | Procyon Technostructure"
        description="Enterprise-grade ServiceNow, SalesForce, and SAP solutions. Expert implementation, optimization, and support for large-scale digital transformation with 1200+ successful projects."
        keywords="enterprise solutions, ServiceNow implementation, SalesForce enterprise, SAP consulting, digital transformation, enterprise software, business automation, IT service management, CRM solutions"
        canonicalUrl="https://procyon-technostructure.com/enterprise"
        ogTitle="Enterprise Solutions - Leading ServiceNow, SalesForce, SAP Implementation"
        ogDescription="Transform your enterprise with expert ServiceNow, SalesForce, and SAP solutions. 250+ certified consultants, proven methodologies."
        structuredData={enterpriseStructuredData}
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
            <span className="gradient-text">Enterprise Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl reveal-fade" data-delay="200">
            Transform your enterprise with our comprehensive suite of solutions designed for scale, security, and performance.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-20 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* SalesForce */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="100" onClick={() => {window.scrollTo(0, 0); window.location.href = '/enterprise/salesforce';}}>
              <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mb-8 relative z-10">
                <Cloud className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400 relative z-10">SalesForce</h2>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                AI-driven Salesforce solutions for tomorrow's enterprises. Transform customer relationships with intelligent automation, advanced analytics, and seamless integration capabilities.
              </p>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Custom Salesforce Implementation</li>
                  <li>• AI-Powered Customer Insights</li>
                  <li>• Automated Workflow Integration</li>
                  <li>• Advanced Analytics & Reporting</li>
                  <li>• Mobile-First Solutions</li>
                  <li>• Third-Party System Integration</li>
                </ul>
              </div>
            </div>

            {/* ServiceNow */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="200" onClick={() => {window.scrollTo(0, 0); window.location.href = '/enterprise/servicenow';}}>
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-8 relative z-10">
                <Settings className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-400 relative z-10">ServiceNow</h2>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                Transform your workflows with ServiceNow's cloud-based platform that streamlines operations, automates tasks, and boosts productivity across your entire organization.
              </p>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• IT Service Management (ITSM)</li>
                  <li>• IT Operations Management (ITOM)</li>
                  <li>• Customer Service Management</li>
                  <li>• HR Service Delivery</li>
                  <li>• Security Operations</li>
                  <li>• Business Process Automation</li>
                </ul>
              </div>
            </div>

            {/* SAP */}
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 cursor-pointer transition-all duration-300" onClick={() => {window.scrollTo(0, 0); window.location.href = '/enterprise/sap';}}>
              <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mb-8 relative z-10">
                <Database className="w-10 h-10 text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-purple-400 relative z-10">SAP</h2>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10">
                Enterprise resource planning solutions that integrate business processes and drive operational excellence with real-time insights and intelligent automation.
              </p>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• SAP S/4HANA Implementation</li>
                  <li>• Business Process Integration</li>
                  <li>• Financial Management</li>
                  <li>• Supply Chain Optimization</li>
                  <li>• Human Capital Management</li>
                  <li>• Real-time Analytics</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can drive your business forward.
            </p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}