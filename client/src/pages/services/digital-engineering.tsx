import { Cog, Code, Smartphone, Globe, Shield, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { ContactSection } from "@/components/contact-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import SEOHead from "@/components/seo-head";

export default function DigitalEngineeringPage() {
  useScrollReveal();

  const digitalEngineeringStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digital Engineering - Full-Stack, Mobile, API Development | Procyon Technostructure",
    "description": "End-to-end product development from concept to deployment. Full-stack development, mobile applications, API design, and quality assurance with modern engineering practices.",
    "url": "https://procyon-technostructure.com/services/digital-engineering",
    "mainEntity": {
      "@type": "Service",
      "name": "Digital Engineering",
      "description": "Comprehensive digital product development and engineering services",
      "provider": {
        "@type": "Organization",
        "name": "Procyon Technostructure LLC"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Digital Engineering - Full-Stack, Mobile, API Development | Procyon Technostructure"
        description="End-to-end product development from concept to deployment. Full-stack development, mobile applications, API design, and quality assurance with modern engineering practices."
        keywords="digital engineering, full-stack development, mobile applications, API development, quality assurance, software engineering, product development, web development, app development"
        canonicalUrl="https://procyon-technostructure.com/services/digital-engineering"
        ogTitle="Digital Engineering Services - Full-Stack to Mobile Development"
        ogDescription="Transform your ideas into reality with our comprehensive digital engineering services. From concept to deployment with modern practices."
        structuredData={digitalEngineeringStructuredData}
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
                <span className="gradient-text">Digital Engineering</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto reveal-fade" data-delay="200">
                End-to-end product development from concept to deployment with modern engineering practices and cutting-edge technologies.
              </p>
              <div className="mt-8 reveal-fade" data-delay="400">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-block">
                  Start Your Digital Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Comprehensive Engineering Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From ideation to deployment, we handle every aspect of your digital product development journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Full-Stack Development */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 reveal-fade relative z-10" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Code className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400 relative z-10">Full-Stack Development</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Complete web application development with modern frontend and robust backend solutions.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• React, Angular, Vue.js</li>
                  <li>• Node.js, Python, Java</li>
                  <li>• Database Design & Optimization</li>
                  <li>• Real-time Features & WebSockets</li>
                </ul>
              </div>

              {/* Mobile Applications */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 reveal-fade relative z-10" data-delay="200">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Smartphone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400 relative z-10">Mobile Applications</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Native and cross-platform mobile apps that deliver exceptional user experiences.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• React Native & Flutter</li>
                  <li>• iOS & Android Development</li>
                  <li>• Progressive Web Apps</li>
                  <li>• App Store Deployment</li>
                </ul>
              </div>

              {/* API Development */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 reveal-fade relative z-10" data-delay="300">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">API Development</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Scalable and secure APIs that power your applications and enable seamless integrations.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• RESTful & GraphQL APIs</li>
                  <li>• Microservices Architecture</li>
                  <li>• API Documentation & Testing</li>
                  <li>• Third-party Integrations</li>
                </ul>
              </div>

              {/* Quality Assurance */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 reveal-fade relative z-10" data-delay="400">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <CheckCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400 relative z-10">Quality Assurance</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Comprehensive testing strategies ensuring your products meet the highest quality standards.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Automated Testing Suites</li>
                  <li>• Manual Testing & QA</li>
                  <li>• Performance Testing</li>
                  <li>• Security Testing</li>
                </ul>
              </div>

              {/* DevOps & Deployment */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 reveal-fade relative z-10" data-delay="500">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Cog className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400 relative z-10">DevOps & Deployment</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Streamlined deployment pipelines and infrastructure management for reliable product delivery.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Cloud Infrastructure</li>
                  <li>• Monitoring & Logging</li>
                  <li>• Automated Deployment</li>
                </ul>
              </div>

              {/* Security & Compliance */}
              <div className="floating-card conic-border bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 reveal-fade relative z-10" data-delay="600">
                <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10">Security & Compliance</h3>
                <p className="text-gray-300 mb-6 relative z-10">
                  Built-in security best practices and compliance measures to protect your digital assets.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm relative z-10">
                  <li>• Security Code Reviews</li>
                  <li>• Data Encryption</li>
                  <li>• Compliance Standards</li>
                  <li>• Vulnerability Assessments</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-gray-800/30 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Our Engineering Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful delivery from concept to production.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center reveal-fade" data-delay="100">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-blue-400">1</div>
                </div>
                <h3 className="text-xl font-bold mb-4">Discovery & Planning</h3>
                <p className="text-gray-300 text-sm">
                  Requirements analysis, technical architecture design, and project roadmap creation.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-green-400">2</div>
                </div>
                <h3 className="text-xl font-bold mb-4">Design & Prototyping</h3>
                <p className="text-gray-300 text-sm">
                  User experience design, system architecture, and interactive prototyping.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-purple-400">3</div>
                </div>
                <h3 className="text-xl font-bold mb-4">Development & Testing</h3>
                <p className="text-gray-300 text-sm">
                  Agile development with continuous integration, testing, and quality assurance.
                </p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="400">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-orange-400">4</div>
                </div>
                <h3 className="text-xl font-bold mb-4">Deploy & Support</h3>
                <p className="text-gray-300 text-sm">
                  Production deployment, monitoring setup, and ongoing maintenance support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 zoom-container">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section">
            <div className="text-center mb-16 reveal-fade">
              <h2 className="text-4xl font-bold mb-6">Modern Technology Stack</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge technologies and best practices to build scalable, maintainable solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center reveal-fade" data-delay="100">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Frontend</h4>
                <p className="text-gray-300 text-sm">React, Angular, Vue.js, TypeScript, Tailwind CSS, Next.js</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="200">
                <h4 className="text-lg font-semibold mb-4 text-green-400">Backend</h4>
                <p className="text-gray-300 text-sm">Node.js, Python, Java, .NET, Go, PHP, Express, FastAPI</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="300">
                <h4 className="text-lg font-semibold mb-4 text-purple-400">Mobile</h4>
                <p className="text-gray-300 text-sm">React Native, Flutter, Swift, Kotlin, Ionic</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="400">
                <h4 className="text-lg font-semibold mb-4 text-yellow-400">Database</h4>
                <p className="text-gray-300 text-sm">PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="500">
                <h4 className="text-lg font-semibold mb-4 text-orange-400">Cloud & DevOps</h4>
                <p className="text-gray-300 text-sm">AWS, Azure, GCP, Docker, Kubernetes, CI/CD</p>
              </div>
              
              <div className="text-center reveal-fade" data-delay="600">
                <h4 className="text-lg font-semibold mb-4 text-red-400">Tools & Testing</h4>
                <p className="text-gray-300 text-sm">Jest, Cypress, Playwright, Git, Jira, Figma</p>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}