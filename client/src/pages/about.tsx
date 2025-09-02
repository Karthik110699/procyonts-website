import { Users, Target, Award, Globe } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead, { organizationSchema } from "@/components/seo-head";

export default function AboutPage() {
  useScrollReveal();

  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Procyon Technostructure",
    "description": "Learn about Procyon Technostructure's mission, vision, and 20+ years of excellence in enterprise technology solutions. 250+ experts, global reach.",
    "url": "https://procyon-technostructure.com/about",
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
          "name": "About",
          "item": "https://procyon-technostructure.com/about"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="About Procyon Technostructure - 20+ Years of Enterprise Excellence"
        description="Learn about Procyon Technostructure's mission, vision, and 20+ years of excellence in enterprise technology solutions. 250+ expert consultants, 1200+ successful projects worldwide."
        keywords="about Procyon, company history, enterprise consulting, technology leadership, digital transformation experts, IT consulting firm, ServiceNow partners, mission vision values"
        canonicalUrl="https://procyon-technostructure.com/about"
        ogTitle="About Procyon Technostructure - Leading Enterprise Technology Consultants"
        ogDescription="Founded in 2004, Procyon has delivered 1200+ successful projects with 250+ expert consultants. Discover our mission and values."
        structuredData={aboutStructuredData}
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
            <span className="gradient-text">About Procyon</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl reveal-fade" data-delay="200">
            At Procyon, we help businesses lead the digital era with resilience and foresight. Founded in 2004, we are a global IT solutions provider with headquarters in Novato, CA, and a global presence spanning Toronto and Chennai.
            <br /><br />
            We specialize in creating customized, scalable, and sustainable technology solutions that drive performance and long-term growth. With over 200 successful projects delivered, our solutions help businesses stay competitive, future-ready, and efficient.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal-slide-left" data-delay="100">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                On customer goals through effective partnership and thought leadership
              </p>
            </div>
            
            <div className="reveal-slide-right" data-delay="200">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-emerald-400">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Delivering value through People, Process, Technology, and next-generation AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900/50 zoom-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
          <div className="text-center mb-16 reveal-scale" data-delay="100">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal-fade" data-delay="200">
              <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Award className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in every project, delivering solutions that exceed expectations and drive meaningful results.
              </p>
            </div>
            
            <div className="text-center reveal-fade" data-delay="300">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of partnership, working closely with clients to understand their unique challenges and goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Innovation</h3>
              <p className="text-gray-300">
                We embrace cutting-edge technologies and innovative approaches to solve tomorrow's challenges today.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Impact</h3>
              <p className="text-gray-300">
                We measure success by the positive impact our solutions have on businesses, communities, and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-gray-300">
              Our track record of success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-gray-300">Year Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">75+</div>
              <div className="text-gray-300">Global Clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">3</div>
              <div className="text-gray-300">Worldwide Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to unlock your organization's full potential with innovative technology solutions.
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}