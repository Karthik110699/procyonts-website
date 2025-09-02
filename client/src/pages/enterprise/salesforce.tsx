import { Cloud, CheckCircle, Zap, Users, BarChart, Shield, Globe, Target, TrendingUp, Brain, Award, Building2 } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";

export default function SalesforcePage() {
  useScrollReveal();

  const salesforceStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage", 
    "name": "Salesforce Solutions - CRM Implementation & Consulting | Procyon Technostructure",
    "description": "Expert Salesforce consulting, implementation, customization, and AI-powered CRM solutions. Transform customer relationships and drive business growth with certified Salesforce experts.",
    "url": "https://procyon-technostructure.com/enterprise/salesforce",
    "mainEntity": {
      "@type": "Service",
      "name": "Salesforce Solutions",
      "description": "Comprehensive Salesforce CRM implementation, customization, and consulting services",
      "provider": {
        "@type": "Organization",
        "name": "Procyon Technostructure LLC"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Salesforce Solutions - CRM Implementation & Consulting | Procyon Technostructure"
        description="Expert Salesforce consulting, implementation, customization, and AI-powered CRM solutions. Transform customer relationships and drive business growth with certified Salesforce experts."
        keywords="Salesforce implementation, Salesforce consulting, CRM solutions, Salesforce customization, Sales Cloud, Service Cloud, Marketing Cloud, Salesforce integration, AI-powered CRM"
        canonicalUrl="https://procyon-technostructure.com/enterprise/salesforce"
        ogTitle="Salesforce CRM Solutions - Expert Implementation & Consulting"
        ogDescription="Supercharge your business with Salesforce. Expert consulting, implementation, and AI-powered CRM transformation for sustainable growth."
        structuredData={salesforceStructuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden relative">
        {/* Floating Stars Background */}
        <div className="floating-stars-container">
          {[...Array(8)].map((_, i) => (
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
                <span className="gradient-text">Supercharge Your Business</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 reveal-fade" data-delay="200">
                with Salesforce
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 reveal-fade" data-delay="300">
                Streamline Processes and Enhance Collaboration
              </p>
              <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-6 rounded-xl mb-8 reveal-fade" data-delay="400">
                <p className="text-lg text-gray-300">
                  In today's customer-driven economy, cultivating meaningful, long-term relationships is more important than ever. As customer expectations rise and competition intensifies, businesses need powerful CRM tools that can adapt, scale, and deliver actionable insights.
                </p>
              </div>
              <div className="mt-8 reveal-fade" data-delay="500">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-block">
                  Transform Your CRM Today
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Salesforce Services */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Expert Salesforce Consulting & Implementation</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                for Seamless CRM Transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Building2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Salesforce Implementation</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Our Salesforce implementation services are comprehensive and strategic. We begin with a deep dive into your organization's goals, workflows, and customer journey. From platform setup and data migration to user onboarding and training, our process ensures a seamless transition and full user adoption. We focus on building robust, scalable systems that align with your business vision and evolve with you.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Salesforce Customization</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  We believe your CRM should work the way your business does — not the other way around. Procyon offers extensive Salesforce customization to create tailored dashboards, workflows, modules, and automated processes that perfectly match your unique operational style. This leads to improved productivity, increased user satisfaction, and a better return on investment.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Salesforce Integration</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Salesforce doesn't operate in isolation — and neither should your data. Our integration services allow Salesforce to communicate with your existing software stack — from ERPs and HRMS to marketing tools and communication platforms. With seamless data sharing and synchronization, your business achieves a unified view of operations and customers.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Brain className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">AI-Powered CRM Solutions</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Procyon harnesses the power of AI to take your CRM beyond traditional capabilities. We deploy AI-powered tools that offer predictive insights, automate routine tasks, personalize customer interactions, and flag key trends. This allows your teams to focus on what matters — building relationships, closing deals, and improving customer lifetime value.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-8 rounded-xl reveal-fade" data-delay="500">
              <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
                As a trusted Salesforce partner, we don't just implement a CRM system, we help you build a customer-first culture. Through tailored Salesforce solutions, we enable organizations to better understand customer needs, streamline internal operations, and make informed, data-backed decisions that drive growth and engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Procyon */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Why Choose Procyon for Salesforce?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform how you manage relationships, convert leads, and grow your business with Procyon's comprehensive Salesforce services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Certified Salesforce Experts</h3>
                <p className="text-gray-300">
                  Skilled, certified professionals ensuring expert CRM delivery.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Customized, Scalable Solutions</h3>
                <p className="text-gray-300">
                  Tailored Salesforce setups that grow with your business.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Seamless Ecosystem Integration</h3>
                <p className="text-gray-300">
                  Smooth integration with your existing tools and platforms.
                </p>
              </div>

              <div className="text-center reveal-fade" data-delay="400">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Ongoing Support & Innovation</h3>
                <p className="text-gray-300">
                  Continuous updates, support, and smart enhancements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Salesforce Cloud Expertise */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Salesforce Cloud Expertise</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Sales Cloud</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Accelerate Revenue with Smart Selling
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Service Cloud</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Deliver Exceptional Customer Support
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Marketing Cloud</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Precision Engagement for Higher ROI
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Building2 className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Commerce Cloud</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Intelligent Shopping Experiences
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 reveal-fade relative z-10" data-delay="500">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400 relative z-10">Experience Cloud</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Build Connected Communities
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10" data-delay="600">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <BarChart className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">Analytics Cloud</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Turn Data into Actionable Insights
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50 zoom-container">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 zoom-section">
            <h2 className="text-4xl font-bold mb-6 reveal-fade">Ready to Transform Your Customer Relationships?</h2>
            <p className="text-xl text-gray-300 mb-8 reveal-fade" data-delay="200">
              Let's discuss how our Salesforce expertise can supercharge your business growth and enhance customer collaboration.
            </p>
            <div className="reveal-fade" data-delay="400">
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
                Start Your Salesforce Transformation
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}