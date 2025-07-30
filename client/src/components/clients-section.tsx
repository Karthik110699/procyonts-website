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
    <section className="py-20 bg-gradient-to-b from-blue-900/20 via-gray-900/40 to-emerald-900/15 relative overflow-hidden">
      {/* Sophisticated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/6 via-transparent to-purple-900/6"></div>
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-l from-blue-500/4 to-transparent"></div>
      <div className="absolute bottom-1/3 left-0 w-1/4 h-1/4 bg-gradient-to-r from-teal-500/3 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-gray-300">Over two decades powering the world's leading businesses</p>
        </div>
        
        <div className="py-12">
          <div className="flex items-center justify-center flex-wrap gap-16">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center h-20 w-32 p-4">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
