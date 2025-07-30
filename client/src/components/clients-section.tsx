export default function ClientsSection() {
  const clients = [
    { 
      name: "Genentech", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Genentech_logo.svg",
      alt: "Genentech - A Member of the Roche Group"
    },
    { 
      name: "IBM", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      alt: "IBM Corporation"
    },
    { 
      name: "Deloitte", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.svg",
      alt: "Deloitte Consulting"
    },
    { 
      name: "Tech Mahindra", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Tech_Mahindra_New_Logo.svg",
      alt: "Tech Mahindra Limited"
    },
    { 
      name: "NIH", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/NIH_Master_Logo_Vertical_2Color.svg",
      alt: "National Institutes of Health"
    },
    { 
      name: "Delta Air Lines", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Delta_logo.svg",
      alt: "Delta Air Lines"
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-gray-300">Over two decades powering the world's leading businesses</p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex items-center justify-center flex-wrap gap-12">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.alt}
                  className="h-12 opacity-70 hover:opacity-100 transition-all duration-300 filter brightness-0 invert hover:scale-110"
                  onError={(e) => {
                    // Fallback to company name initials if logo fails to load
                    const fallback = document.createElement('div');
                    fallback.className = 'h-12 w-12 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold';
                    fallback.textContent = client.name.split(' ').map(word => word[0]).join('').slice(0, 2);
                    e.currentTarget.parentNode.replaceChild(fallback, e.currentTarget);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
