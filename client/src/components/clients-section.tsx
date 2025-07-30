export default function ClientsSection() {
  // Original companies from the demo: Genentech, IBM, Deloitte, Tech Mahindra, NIH, Delta
  const clients = [
    { 
      name: "Genentech",
      logo: "/logos/genentech.png"
    },
    { 
      name: "IBM",
      logo: "/logos/ibm.svg"
    },
    { 
      name: "Deloitte",
      logo: "/logos/deloitte.svg?v=2"
    },
    { 
      name: "Tech Mahindra",
      logo: "/logos/tech-mahindra.png"
    },
    { 
      name: "NIH",
      logo: "/logos/nih.png"
    },
    { 
      name: "Delta Air Lines",
      logo: "/logos/delta.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
