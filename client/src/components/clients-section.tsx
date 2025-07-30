export default function ClientsSection() {
  // Simple SVG-based logo representations
  const ClientLogo = ({ name, children }) => (
    <div className="flex items-center justify-center h-16 w-40 p-4">
      <svg className="h-8 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110" viewBox="0 0 120 32" fill="none">
        {children}
      </svg>
    </div>
  );

  const clients = [
    { 
      name: "Genentech",
      logo: <text x="60" y="20" textAnchor="middle" fill="currentColor" className="text-sm font-bold">GENENTECH</text>
    },
    { 
      name: "IBM",
      logo: <text x="60" y="20" textAnchor="middle" fill="currentColor" className="text-xl font-black">IBM</text>
    },
    { 
      name: "Deloitte",
      logo: <text x="60" y="20" textAnchor="middle" fill="currentColor" className="text-sm font-bold">DELOITTE</text>
    },
    { 
      name: "Tech Mahindra",
      logo: <text x="60" y="20" textAnchor="middle" fill="currentColor" className="text-xs font-bold">TECH MAHINDRA</text>
    },
    { 
      name: "NIH",
      logo: <text x="60" y="20" textAnchor="middle" fill="currentColor" className="text-xl font-black">NIH</text>
    },
    { 
      name: "Delta Air Lines",
      logo: <text x="60" y="20" textAnchor="middle" fill="currentColor" className="text-sm font-bold">DELTA</text>
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-gray-300">Over two decades powering the world's leading businesses</p>
        </div>
        
        <div className="py-8">
          <div className="flex items-center justify-center flex-wrap gap-12 text-white">
            {clients.map((client, index) => (
              <ClientLogo key={index} name={client.name}>
                {client.logo}
              </ClientLogo>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
