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
    <section className="py-20 bg-gradient-to-b from-purple-950/40 via-slate-900 to-blue-950/50 relative overflow-hidden">
      {/* Enterprise technology gradients */}
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-cyan-400/6 to-indigo-500/8"></div>
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-bl from-cyan-400/8 via-blue-400/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-gradient-to-tr from-purple-400/6 via-indigo-400/4 to-transparent"></div>
      <div className="absolute top-2/3 right-1/3 w-1/4 h-1/4 bg-radial-gradient from-blue-300/4 to-transparent rounded-full blur-2xl"></div>
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
