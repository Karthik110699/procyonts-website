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
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-fade" data-delay="100">
          <h2 className="text-3xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-gray-300">Over two decades powering the world's leading businesses</p>
        </div>
        
        <div className="py-12 reveal-scale" data-delay="200">
          <div className="flex items-center justify-center flex-wrap gap-16">
            {clients.map((client, index) => (
              <div key={index} className={`flex items-center justify-center h-20 w-32 p-4 reveal-fade stagger-delay-${index % 6 + 1}`} data-delay={`${300 + (index * 100)}`}>
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
