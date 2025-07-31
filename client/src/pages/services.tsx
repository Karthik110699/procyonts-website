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
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden">
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
            
            {/* Cloud Transformation */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="100" onClick={() => window.location.href = '/services/cloud'}>
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Server className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Cloud Transformation</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Migrate to the cloud with confidence and unlock scalability, flexibility, and cost optimization.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• AWS, Azure, GCP Migration</li>
                <li>• Cloud-Native Architecture</li>
                <li>• DevOps & CI/CD</li>
                <li>• Security & Compliance</li>
              </ul>
            </div>

            {/* AI & ML */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="200" onClick={() => window.location.href = '/services/ai-ml'}>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Brain className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Harness the power of artificial intelligence to automate processes and gain valuable insights.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Custom AI Solutions</li>
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="group floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 cursor-pointer transition-all duration-300 reveal-fade" data-delay="300" onClick={() => window.location.href = '/services/data-analytics'}>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <BarChart className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Data Analytics</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Transform raw data into actionable insights with advanced analytics and visualization solutions.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Business Intelligence</li>
                <li>• Data Warehousing</li>
                <li>• Real-time Analytics</li>
                <li>• Data Visualization</li>
              </ul>
            </div>

            {/* Staff Augmentation */}
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-pink-500 cursor-pointer transition-all duration-300">
              <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400 relative z-10">Staff Augmentation</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                Scale your team with skilled professionals who integrate seamlessly with your existing workforce.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Software Engineers</li>
                <li>• Data Scientists</li>
                <li>• DevOps Engineers</li>
                <li>• Project Managers</li>
              </ul>
            </div>

            {/* Government Solutions */}
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 cursor-pointer transition-all duration-300">
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

            {/* Digital Engineering */}
            <div className="conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 cursor-pointer transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Cog className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">Digital Engineering</h3>
              <p className="text-gray-300 mb-6 relative z-10">
                End-to-end product development from concept to deployment with modern engineering practices.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                <li>• Full-Stack Development</li>
                <li>• Mobile Applications</li>
                <li>• API Development</li>
                <li>• Quality Assurance</li>
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