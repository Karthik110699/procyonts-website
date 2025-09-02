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
    "name": "Salesforce Excellence Delivered - Expert Implementation & Consulting | Procyon Technostructure",
    "description": "From Sales to Health, CPQ to Analytics—Procyon brings Salesforce to life. Expert consulting across every cloud, every industry, every time with our proven 3-step approach.",
    "url": "https://procyon-technostructure.com/enterprise/salesforce",
    "mainEntity": {
      "@type": "Service",
      "name": "Salesforce Excellence",
      "description": "Comprehensive Salesforce consulting, implementation, and transformation services across all clouds and industries",
      "provider": {
        "@type": "Organization",
        "name": "Procyon Technostructure LLC"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Salesforce Excellence Delivered - Expert Implementation & Consulting | Procyon Technostructure"
        description="From Sales to Health, CPQ to Analytics—Procyon brings Salesforce to life. Expert consulting across every cloud, every industry, every time with our proven 3-step approach."
        keywords="Salesforce excellence, Salesforce consulting, Sales Cloud, Service Cloud, Marketing Cloud, Health Cloud, CPQ, Manufacturing Cloud, Financial Services Cloud, Salesforce implementation"
        canonicalUrl="https://procyon-technostructure.com/enterprise/salesforce"
        ogTitle="Salesforce Excellence, Delivered - Across Every Cloud, Every Industry"
        ogDescription="We don't just implement Salesforce—we tailor it to amplify your results. Strategy, delivery, support—we're with you end-to-end."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-8 reveal-scale">
                <span className="gradient-text">Delivering Salesforce Excellence</span>
                <br />
                <span className="text-blue-400">Across Every Cloud, Every Industry, Every Time</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 reveal-fade" >
                We don't just implement Salesforce—we tailor it to amplify your results.
              </p>
              <div className="mt-8 reveal-fade" >
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-block">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Procyon Stands Out */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Why Procyon Stands Out</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We're known for helping businesses—from agile startups to global enterprises—leverage the full power of Salesforce to fuel growth, simplify processes, and scale with precision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Depth of Expertise</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Certified consultants, architects, and developers across Salesforce's entire ecosystem. Our team brings deep knowledge and hands-on experience to deliver solutions that work.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10" >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Agile Delivery, Real Results</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Fast, transparent delivery—on time, on budget, exceeding expectations. Our agile methodology ensures you see progress every step of the way.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" >
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Scalable Resources</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Access immediate, on-demand Salesforce talent to cover every project need. Scale your team up or down based on your requirements.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10" >
                <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Target className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-400 relative z-10">Client-Centric Partnership</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  We listen. We drive outcomes. Success for your business is our only KPI. Your goals become our mission.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-emerald-500/20 p-8 rounded-xl reveal-fade" >
              <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto italic">
                "Their agile, transparent process eliminated surprises—our Salesforce roll-out was smoother than ever."
                <br />
                <span className="text-blue-400 font-semibold">— Sales VP, Retail Industry</span>
              </p>
            </div>
          </div>
        </section>

        {/* Innovative Transition - Punch Line Bridge */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-emerald-600/10 to-purple-600/10"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 reveal-scale">
                  <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                    From Sales to Health, CPQ to Analytics—
                  </span>
                </h3>
                <p className="text-2xl md:text-3xl font-semibold text-white reveal-fade">
                  Procyon brings Salesforce to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Salesforce Capabilities */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our Salesforce Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Deep, integrated, industry-grade solutions across Salesforce's entire ecosystem
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-400 relative z-10">Sales Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Streamline lead management, opportunity tracking, and revenue forecasting.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-emerald-400 relative z-10">Service Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Deliver seamless, omnichannel customer experiences and smart support.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-purple-400 relative z-10">Marketing Cloud & Pardot</h3>
                <p className="text-gray-300 text-sm relative z-10">Drive data-driven engagement through email, web, and automation.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Building2 className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-amber-400 relative z-10">Commerce Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Personalized e-commerce at speed—built for conversion.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Globe className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-indigo-400 relative z-10">Experience Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Create dynamic portals for customers, partners, or employees.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <BarChart className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-green-400 relative z-10">CPQ & Revenue Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Speed up deals with precise quoting, pricing, and approvals.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-400 relative z-10">Financial Services Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Tailored solutions for banking, insurance, and wealth management.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-emerald-400 relative z-10">Health Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Modern patient engagement solutions built for care and collaboration.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Building2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-purple-400 relative z-10">Manufacturing Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Align manufacturing, sales, and forecasting with real-time visibility.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-amber-400 relative z-10">Nonprofit Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Drive mission impact with tools for fundraising, outreach, and programs.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-indigo-400 relative z-10">Analytics & Einstein AI</h3>
                <p className="text-gray-300 text-sm relative z-10">Unlock meaningful insights, predictive alerts, and smart automation.</p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-green-400 relative z-10">Integration Cloud</h3>
                <p className="text-gray-300 text-sm relative z-10">Seamlessly connect Salesforce to ERPs, HR systems, and custom systems.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Our Proven 3-Step Approach */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our Proven 3-Step Approach</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-4">
                A streamlined methodology that delivers results every time
              </p>
              <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-lg">
                <p className="text-lg font-semibold text-emerald-400">
                  Strategy, delivery, support—we're with you end-to-end.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-4 relative z-10">1.</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Discover & Define</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  We begin by understanding your business objectives—then design a Salesforce roadmap that delivers measurable impact.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10" >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-emerald-400 mb-4 relative z-10">2.</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Implement & Integrate (Agile)</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Fast, iterative delivery that keeps your operations running while we build, integrate, and optimize Salesforce.
                </p>
              </div>

              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" >
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-4 relative z-10">3.</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Enable & Sustain</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Through training, support, and continuous evolution, we help your team adopt and grow long after go-live.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50 zoom-container">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 zoom-section">
            <h2 className="text-4xl font-bold mb-6 reveal-fade">Ready to Transform with Salesforce?</h2>
            <p className="text-xl text-gray-300 mb-8 reveal-fade" >
              Procyon isn't just your implementer—we're your Salesforce transformation partner. Whether you're starting fresh, optimizing existing workflows, or scaling your team with elite Salesforce talent, let's make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-fade" >
              <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
                Contact Us
              </Link>
              <Link href="/contact" className="inline-block bg-transparent border-2 border-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/20 transition-all">
                Request a Demo
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}