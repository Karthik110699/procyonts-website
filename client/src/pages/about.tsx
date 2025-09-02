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

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-900/80 via-procyon-dark to-gray-900/80 relative overflow-hidden">
        <div className="wireframe-overlay"></div>
        <div className="morphing-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-4">
              Growing with Vision, Innovating with Purpose
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              From a boutique consultancy to a global transformation partner
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-400 leading-relaxed">
                Since 2004, Procyon has grown from a boutique IT consultancy in California to a global transformation partner with a presence in Toronto and Chennai. Each milestone from launching AI-driven platforms like Hekma and Akra to building a strong AI and Cloud practice reflects our commitment to innovation and impact. With 200+ projects delivered, we continue to help businesses stay agile, future-ready, and competitive in the digital era.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-emerald-500 to-yellow-500 rounded-full shadow-lg shadow-blue-500/30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              
              {/* 2004 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-blue-400 mb-2">2004</div>
                    <div className="text-lg text-gray-300">Founded in San Rafael, CA</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2008 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 p-6 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">2008</div>
                    <div className="text-lg text-gray-300">Expanded operations to Toronto, Canada</div>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-purple-400 mb-2">2015</div>
                    <div className="text-lg text-gray-300">Opened our delivery center in Chennai, India</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2018 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full shadow-lg shadow-amber-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/40 p-6 rounded-xl border border-amber-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-amber-400 mb-2">2018</div>
                    <div className="text-lg text-gray-300">Hekma: AI drug development accelerator</div>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-gradient-to-r from-cyan-900/40 to-cyan-800/40 p-6 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">2020</div>
                    <div className="text-lg text-gray-300">AI & Cloud practice launched</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rose-500 rounded-full shadow-lg shadow-rose-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-gradient-to-r from-rose-900/40 to-rose-800/40 p-6 rounded-xl border border-rose-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-rose-400 mb-2">2022</div>
                    <div className="text-lg text-gray-300">Akra: Digital Health SaaS (SiMD, SaMD)</div>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-green-400 mb-2">2023</div>
                    <div className="text-lg text-gray-300">150+ projects delivered</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full shadow-lg shadow-green-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-violet-500 rounded-full shadow-lg shadow-violet-500/50 z-10 border-4 border-procyon-dark"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-gradient-to-r from-violet-900/40 to-violet-800/40 p-6 rounded-xl border border-violet-500/30 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-violet-400 mb-2">2025</div>
                    <div className="text-lg text-gray-300">Implemented AI Accelerators to enhance operations and speed delivery</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Values - Breathtaking Circular Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-procyon-dark to-gray-900/80"></div>
        <div className="wireframe-overlay opacity-30"></div>
        <div className="morphing-bg opacity-40"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse animation-delay-3000"></div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The fundamental principles that drive our innovation and guide every decision we make
            </p>
          </div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="block lg:hidden">
            <div className="space-y-8 max-w-md mx-auto">
              {/* 01 - Customer FIRST */}
              <div className="bg-gradient-to-br from-red-900/40 to-red-800/30 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">01</div>
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Customer FIRST</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our customers are at the heart of everything we do. Their success is our success, and we prioritize their needs above all else.
                </p>
              </div>

              {/* 02 - Every Customer is different */}
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/30 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">02</div>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Every Customer is Different</h3>
                <p className="text-gray-300 leading-relaxed">
                  No ONE size fits all. We understand that each client has unique challenges and we tailor our solutions accordingly.
                </p>
              </div>

              {/* 03 - Transparency and Collaboration */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 p-6 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">03</div>
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Transparency and Collaboration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Open communication and genuine partnership form the foundation of our client relationships and internal teamwork.
                </p>
              </div>

              {/* 04 - Celebrate and value Diversity */}
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">04</div>
                  <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Celebrate and Value Diversity</h3>
                <p className="text-gray-300 leading-relaxed">
                  We embrace different perspectives, backgrounds, and ideas as they fuel innovation and drive exceptional outcomes.
                </p>
              </div>

              {/* 05 - Continuous Learning & Retrospect */}
              <div className="bg-gradient-to-br from-amber-900/40 to-amber-800/30 p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">05</div>
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Continuous Learning & Retrospect</h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly evolve through learning, reflection, and adaptation to stay ahead in the ever-changing technology landscape.
                </p>
              </div>

              {/* 06 - Encourage Ideation & Creativity */}
              <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 p-6 rounded-2xl border border-cyan-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center mr-3 font-bold text-white">06</div>
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Encourage Ideation & Creativity</h3>
                <p className="text-gray-300 leading-relaxed">
                  We foster an environment where innovative thinking thrives and creative solutions emerge to solve complex challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Circular Formation */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 xl:w-40 xl:h-40 bg-gradient-to-br from-blue-600/20 via-emerald-600/20 to-purple-600/20 rounded-full border-2 border-gradient-to-r border-blue-400/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-20 h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-blue-500 via-emerald-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg xl:text-xl">CORE</span>
                </div>
              </div>
            </div>

            {/* Value Cards in Circular Formation */}
            <div className="relative w-full h-[700px] xl:h-[800px]">
              
              {/* 01 - Customer FIRST */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-72 xl:w-80 bg-gradient-to-br from-red-900/40 to-red-800/30 p-6 xl:p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="flex items-center mb-4 xl:mb-6">
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-red-500 rounded-full flex items-center justify-center mr-3 xl:mr-4 font-bold text-white text-lg">01</div>
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 xl:w-6 xl:h-6 text-red-400" />
                    </div>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold text-red-400 mb-3 xl:mb-4">Customer FIRST</h3>
                  <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
                    Our customers are at the heart of everything we do. Their success is our success, and we prioritize their needs above all else.
                  </p>
                </div>
              </div>

              {/* 02 - Every Customer is different */}
              <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-72 xl:w-80 bg-gradient-to-br from-blue-900/40 to-blue-800/30 p-6 xl:p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4 xl:mb-6">
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3 xl:mr-4 font-bold text-white text-lg">02</div>
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 xl:w-6 xl:h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold text-blue-400 mb-3 xl:mb-4">Every Customer is Different</h3>
                  <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
                    No ONE size fits all. We understand that each client has unique challenges and we tailor our solutions accordingly.
                  </p>
                </div>
              </div>

              {/* 03 - Transparency and Collaboration */}
              <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 group cursor-pointer">
                <div className="w-72 xl:w-80 bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 p-6 xl:p-8 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="flex items-center mb-4 xl:mb-6">
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-3 xl:mr-4 font-bold text-white text-lg">03</div>
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold text-emerald-400 mb-3 xl:mb-4">Transparency and Collaboration</h3>
                  <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
                    Open communication and genuine partnership form the foundation of our client relationships and internal teamwork.
                  </p>
                </div>
              </div>

              {/* 04 - Celebrate and value Diversity */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 group cursor-pointer">
                <div className="w-72 xl:w-80 bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-6 xl:p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4 xl:mb-6">
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3 xl:mr-4 font-bold text-white text-lg">04</div>
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 xl:w-6 xl:h-6 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold text-purple-400 mb-3 xl:mb-4">Celebrate and Value Diversity</h3>
                  <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
                    We embrace different perspectives, backgrounds, and ideas as they fuel innovation and drive exceptional outcomes.
                  </p>
                </div>
              </div>

              {/* 05 - Continuous Learning & Retrospect */}
              <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 group cursor-pointer">
                <div className="w-72 xl:w-80 bg-gradient-to-br from-amber-900/40 to-amber-800/30 p-6 xl:p-8 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
                  <div className="flex items-center mb-4 xl:mb-6">
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-amber-500 rounded-full flex items-center justify-center mr-3 xl:mr-4 font-bold text-white text-lg">05</div>
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 xl:w-6 xl:h-6 text-amber-400" />
                    </div>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold text-amber-400 mb-3 xl:mb-4">Continuous Learning & Retrospect</h3>
                  <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
                    We constantly evolve through learning, reflection, and adaptation to stay ahead in the ever-changing technology landscape.
                  </p>
                </div>
              </div>

              {/* 06 - Encourage Ideation & Creativity */}
              <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="w-72 xl:w-80 bg-gradient-to-br from-cyan-900/40 to-cyan-800/30 p-6 xl:p-8 rounded-2xl border border-cyan-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="flex items-center mb-4 xl:mb-6">
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-3 xl:mr-4 font-bold text-white text-lg">06</div>
                    <div className="w-10 h-10 xl:w-12 xl:h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 xl:w-6 xl:h-6 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold text-cyan-400 mb-3 xl:mb-4">Encourage Ideation & Creativity</h3>
                  <p className="text-gray-300 text-base xl:text-lg leading-relaxed">
                    We foster an environment where innovative thinking thrives and creative solutions emerge to solve complex challenges.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-20">
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              These values are not just words on a page—they are the driving force behind every solution we create, 
              every relationship we build, and every innovation we pursue in our mission to transform businesses.
            </p>
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