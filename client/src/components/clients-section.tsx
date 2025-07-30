export default function ClientsSection() {
  const clients = [
    { 
      name: "Microsoft",
      logo: "https://img.icons8.com/fluency/96/microsoft-logo.png"
    },
    { 
      name: "IBM",
      logo: "https://img.icons8.com/color/96/ibm.png"
    },
    { 
      name: "Amazon",
      logo: "https://img.icons8.com/color/96/amazon-web-services.png"
    },
    { 
      name: "Google",
      logo: "https://img.icons8.com/color/96/google-cloud.png"
    },
    { 
      name: "Apple",
      logo: "https://img.icons8.com/sf-ultralight-filled/96/ffffff/mac-os.png"
    },
    { 
      name: "Oracle",
      logo: "https://img.icons8.com/color/96/oracle-logo.png"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900/70 zoom-container">
      <div className="wireframe-overlay"></div>
      <div className="morphing-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 zoom-section" data-delay="0">
        <div className="text-center mb-20 reveal-fade" data-delay="100">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Over two decades powering the world's leading businesses with innovative technology solutions
          </p>
        </div>
        
        <div className="py-16 reveal-scale" data-delay="200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
            {clients.map((client, index) => (
              <div key={index} className={`group flex items-center justify-center h-24 w-36 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:bg-gray-800/50 reveal-fade stagger-delay-${index % 6 + 1}`} data-delay={`${300 + (index * 100)}`}>
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-14 max-w-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
