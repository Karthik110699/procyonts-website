import { useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import ZoomViewport from "@/components/zoom-viewport";
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
      <ZoomViewport />
      
      {/* Additional sections after zoom experience */}
      <div style={{ marginTop: '700vh' }}>
        <SocialImpactSection />
        <CareersSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
