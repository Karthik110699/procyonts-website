import { Heart, BookOpen, Users, Leaf, Target, Handshake } from "lucide-react";
import Navbar from "@/components/navbar";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";
import { ContactSection } from "@/components/contact-section";

export default function SocialImpactPage() {
  useScrollReveal();

  const csrStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Corporate Social Responsibility - Procyon Cares | Procyon Technostructure",
    "description": "Procyon Cares - Our CSR commitment to education, elderly care, environmental responsibility, and community well-being. Building a brighter, more compassionate future.",
    "url": "https://procyon-technostructure.com/social-impact",
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
          "name": "Corporate Social Responsibility",
          "item": "https://procyon-technostructure.com/social-impact"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Corporate Social Responsibility - Procyon Cares | Procyon Technostructure"
        description="Procyon Cares - Our CSR commitment to education, elderly care, environmental responsibility, and community well-being. Building a brighter, more compassionate future."
        keywords="corporate social responsibility, CSR, Procyon Cares, education support, elderly care, environmental responsibility, community impact, sustainability"
        canonicalUrl="https://procyon-technostructure.com/social-impact"
        ogTitle="Corporate Social Responsibility - Procyon Cares"
        ogDescription="Building a brighter, more compassionate future through education, elderly care, and environmental responsibility initiatives."
        structuredData={csrStructuredData}
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-scale">
                <span className="gradient-text">Procyon Cares</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-400 reveal-fade">
                Our Corporate Social Responsibility Commitment
              </h2>
            </div>
            
            <div className="space-y-8 max-w-5xl mx-auto reveal-fade" data-delay="200">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                At Procyon, we believe that true growth is measured not only by business success but also by the positive impact we create in the communities around us. Through our CSR initiatives, we are committed to building a brighter, more compassionate, and sustainable future.
              </p>
            </div>
          </div>
        </section>

        {/* CSR Initiatives */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Education for All */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Education for All</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  We understand that education is the most powerful tool to break the cycle of poverty. Procyon proudly supports the education of students from underprivileged families, ensuring they have access to quality learning, resources, and opportunities to shape a better tomorrow.
                </p>
              </div>

              {/* Caring for the Elderly & Orphans */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Heart className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Caring for the Elderly & Orphans</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  We extend our support to old age homes and orphanages, providing care, companionship, and resources for those who need it the most. Our goal is to bring dignity, love, and hope to lives that deserve nurturing and respect.
                </p>
              </div>

              {/* Environmental Responsibility */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 reveal-fade relative z-10">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400 relative z-10">Environmental Responsibility</h3>
                <p className="text-gray-300 leading-relaxed relative z-10">
                  A cleaner environment is essential for a healthier future. Procyon is actively working on cleaning up lakes, slum areas, and public spaces, driving sustainable initiatives to preserve natural resources and create safer, healthier living conditions for communities.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Through these efforts, we aim to create lasting positive change
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Empower Young Minds</h3>
                <p className="text-gray-300">Through education initiatives that create opportunities for underprivileged students</p>
              </div>

              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Provide Dignity and Care</h3>
                <p className="text-gray-300">To the elderly and orphans who deserve nurturing, respect, and compassion</p>
              </div>

              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400">Promote Sustainability</h3>
                <p className="text-gray-300">Environmental responsibility and community well-being for a healthier future</p>
              </div>

            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center max-w-4xl mx-auto reveal-fade">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Handshake className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-8">Join Us in Making a Difference</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                At Procyon, CSR is not a checkbox, it's a responsibility we proudly uphold. Together, with our employees, partners, and communities, we are building pathways of hope, compassion, and sustainability.
              </p>
              <p className="text-lg text-gray-300 italic">
                Because true growth is measured not just by business success, but by the positive impact we create in the world around us.
              </p>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}