import { useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import FourPillarsSection from "@/components/four-pillars-section";
import TestimonialsSection from "@/components/testimonials-section";
import ClientsSection from "@/components/clients-section";
import SocialImpactSection from "@/components/social-impact-section";
import CareersSection from "@/components/careers-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="bg-gradient-to-b from-gray-900 via-procyon-dark to-gray-900 text-white overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      
      {/* Procyon Enterprise Solutions Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-teal-900/40 via-blue-900/30 to-gray-900/40">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-teal-800/60 via-blue-800/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 reveal">
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 font-semibold">
                Guiding organizations to thrive
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                We are the brightest star that 
                <span className="gradient-text block">guides you on the journey to change</span>
              </h2>
              <p className="text-xl text-gray-300">
                Procyon empowers customers to re-imagine the way they do business to maximize ROI and drive growth through innovative technology solutions, ServiceNow expertise, and strategic partnerships.
              </p>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>ServiceNow Implementation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Enterprise Architecture</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Digital Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>IT Professional Staffing</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="inline-block border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Let's Navigate Together
              </a>
            </div>
            <div className="reveal relative">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Digital transformation workflow with ServiceNow platform and enterprise automation" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <FourPillarsSection />
      <TestimonialsSection />
      <ClientsSection />
      <SocialImpactSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
