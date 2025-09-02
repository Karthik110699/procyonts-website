import { Brain, BarChart, Users, Building, Server, Cog } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead, { serviceSchema } from "@/components/seo-head";

export default function ServicesPage() {
  useScrollReveal();

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Technology Services - Procyon Technostructure",
    "description": "Comprehensive technology services: Cloud Transformation, AI/ML, Data Analytics, Staff Augmentation, Government Solutions, and Digital Engineering.",
    "url": "https://procyon-technostructure.com/services",
    "mainEntity": serviceSchema,
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
          "name": "Services",
          "item": "https://procyon-technostructure.com/services"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Technology Services - Cloud, AI/ML, Data Analytics | Procyon Technostructure"
        description="Comprehensive technology services: Cloud Transformation, AI/ML Solutions, Data Analytics, Staff Augmentation, Government Solutions, and Digital Engineering. Expert delivery, proven results."
        keywords="cloud transformation, AI machine learning, data analytics, staff augmentation, government solutions, digital engineering, technology consulting, AWS Azure GCP, business intelligence"
        canonicalUrl="https://procyon-technostructure.com/services"
        ogTitle="Comprehensive Technology Services - Cloud, AI, Data Analytics"
        ogDescription="Transform your business with our complete technology services portfolio. Cloud migration, AI/ML, analytics, and more."
        structuredData={servicesStructuredData}
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
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl reveal-fade" data-delay="200">
            Comprehensive technology services to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Data Strategy & Analytics */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="100" onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/data-analytics';}}>
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <BarChart className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Data Strategy & Analytics</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Unlock the full value of your data with comprehensive strategy, engineering, and analytics solutions that transform information into competitive advantage.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Data Strategy & Consulting</li>
                <li>• Data Engineering & Architecture</li>
                <li>• Advanced Analytics & BI</li>
                <li>• Data Governance & Compliance</li>
              </ul>
            </div>

            {/* Artificial Intelligence & Machine Learning */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="200" onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/ai-ml';}}>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Brain className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Artificial Intelligence & Machine Learning</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Make AI work for real business outcomes with practical solutions that enhance productivity, improve decision-making, and future-proof operations.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• AI Strategy & Use Case Development</li>
                <li>• Machine Learning Model Development</li>
                <li>• Natural Language Processing (NLP)</li>
                <li>• AI-Powered Automation</li>
              </ul>
            </div>

            {/* Cloud Transformation & Optimization */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="300" onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/cloud';}}>
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Server className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Cloud Transformation & Optimization</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Build the foundation for agility, security, and growth with comprehensive cloud transformation that drives measurable results.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Cloud Strategy & Migration</li>
                <li>• Multi-Cloud Architecture</li>
                <li>• Cost Optimization & FinOps</li>
                <li>• Security & Compliance</li>
              </ul>
            </div>

            {/* Staff Augmentation & Workforce Solutions */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="350" onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/staff-augmentation';}}>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Users className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Staff Augmentation & Workforce Solutions</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Access skilled IT professionals who bring the knowledge, agility, and experience needed to keep your projects moving forward.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Talent Acquisition & Screening</li>
                <li>• Technical Skills Assessment</li>
                <li>• Project-Based Staffing</li>
                <li>• Dedicated Development Teams</li>
              </ul>
            </div>

            {/* Government Solutions */}
            <div id="government-solutions" className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="450" onClick={() => {window.scrollTo(0, 0); window.location.href = '/services/government';}}>
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Building className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10">Government Solutions</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Specialized solutions for government organizations with compliance, security, and efficiency in mind.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• FedRAMP Compliance</li>
                <li>• Secure Cloud Solutions</li>
                <li>• Digital Transformation</li>
                <li>• Citizen Services</li>
              </ul>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We tailor our services to meet your unique business requirements and objectives.
            </p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}