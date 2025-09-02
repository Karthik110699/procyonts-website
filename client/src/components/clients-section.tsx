import { Link } from "wouter";
import arrisLogo from "@assets/Arris_1756825407787.png";
import arteriaLogo from "@assets/arteria-logo_1756825407788.png";
import attLogo from "@assets/AT&T_1756825407788.png";
import basfLogo from "@assets/BASF-Logo_bw_1756825407789.png";
import bounteousLogo from "@assets/bounteous_1756825407789.png";
import capgeminiLogo from "@assets/Capgemini_1756825407789.png";
import deltaDentalLogo from "@assets/delta dental_1756825407790.png";
import fiskerLogo from "@assets/Fisker-Logo_1756825407790.png";
import fordLogo from "@assets/Ford_1756825407790.png";
import genentechLogo from "@assets/Genentech_1756825407791.png";
import genesysLogo from "@assets/genesys_1756825407791.png";
import glendaleLogo from "@assets/glendale_1756825407792.png";
import ibmLogo from "@assets/IBM_1756825407792.png";
import ooredooLogo from "@assets/Ooredoo_1756825407792.png";
import randstadLogo from "@assets/Randstad_Digital_1756825407793.png";
import talkdeskLogo from "@assets/TalkdeskLogo_1756825407793.png";
import techMahindraLogo from "@assets/Tech_Mahindra_1756825407793.png";
import toyotaLogo from "@assets/toyota_1756825407794.png";
import upsLogo from "@assets/UPS_1756825407794.png";
import volvoLogo from "@assets/Volvo_1756825407794.png";

export default function ClientsSection() {
  const clients = [
    { name: "Arris", logo: arrisLogo, link: "/services" },
    { name: "Arteria", logo: arteriaLogo, link: "/services" },
    { name: "AT&T", logo: attLogo, link: "/services" },
    { name: "BASF", logo: basfLogo, link: "/services" },
    { name: "Bounteous", logo: bounteousLogo, link: "/services" },
    { name: "Capgemini", logo: capgeminiLogo, link: "/services" },
    { name: "Delta Dental", logo: deltaDentalLogo, link: "/services" },
    { name: "Fisker", logo: fiskerLogo, link: "/services" },
    { name: "Ford", logo: fordLogo, link: "/services" },
    { name: "Genentech", logo: genentechLogo, link: "/services" },
    { name: "Genesys", logo: genesysLogo, link: "/services" },
    { name: "City of Glendale", logo: glendaleLogo, link: "/services" },
    { name: "IBM", logo: ibmLogo, link: "/services" },
    { name: "Ooredoo", logo: ooredooLogo, link: "/services" },
    { name: "Randstad Digital", logo: randstadLogo, link: "/services" },
    { name: "Talkdesk", logo: talkdeskLogo, link: "/services" },
    { name: "Tech Mahindra", logo: techMahindraLogo, link: "/services" },
    { name: "Toyota", logo: toyotaLogo, link: "/services" },
    { name: "UPS", logo: upsLogo, link: "/services" },
    { name: "Volvo", logo: volvoLogo, link: "/services" }
  ];

  return (
    <section className="py-20 bg-gray-900/50 zoom-container">
      <div className="wireframe-overlay"></div>
      <div className="morphing-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section" data-delay="0">
        <div className="text-center mb-16 reveal-fade" data-delay="100">
          <h2 className="text-3xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-gray-300">Over two decades powering the world's leading businesses</p>
        </div>
        
        <div className="py-12 reveal-scale" data-delay="200">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-16">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <Link key={`first-${index}`} href={client.link}>
                  <div className="flex items-center justify-center h-20 w-40 p-4 cursor-pointer flex-shrink-0 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className={`object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                        ['Bounteous', 'Capgemini'].includes(client.name) 
                          ? 'max-h-20 max-w-full' 
                          : ['Arteria', 'BASF', 'Genesys', 'Randstad Digital', 'Talkdesk', 'Tech Mahindra'].includes(client.name)
                          ? 'max-h-16 max-w-full'
                          : 'max-h-12 max-w-full'
                      }`}
                    />
                  </div>
                </Link>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <Link key={`second-${index}`} href={client.link}>
                  <div className="flex items-center justify-center h-20 w-40 p-4 cursor-pointer flex-shrink-0 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className={`object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                        ['Bounteous', 'Capgemini'].includes(client.name) 
                          ? 'max-h-20 max-w-full' 
                          : ['Arteria', 'BASF', 'Genesys', 'Randstad Digital', 'Talkdesk', 'Tech Mahindra'].includes(client.name)
                          ? 'max-h-16 max-w-full'
                          : 'max-h-12 max-w-full'
                      }`}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
