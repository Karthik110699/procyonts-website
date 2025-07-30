export default function ClientsSection() {
  // Original companies from the demo: Genentech, IBM, Deloitte, Tech Mahindra, NIH, Delta
  const clients = [
    { 
      name: "Genentech",
      logo: "https://1000logos.net/wp-content/uploads/2021/05/Genentech-logo.png"
    },
    { 
      name: "IBM",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/IBM-Logo.png"
    },
    { 
      name: "Deloitte",
      logo: "https://1000logos.net/wp-content/uploads/2017/08/Deloitte-Logo.png"
    },
    { 
      name: "Tech Mahindra",
      logo: "https://1000logos.net/wp-content/uploads/2020/08/Tech-Mahindra-Logo.png"
    },
    { 
      name: "NIH",
      logo: "https://1000logos.net/wp-content/uploads/2017/06/NIH-Logo.png"
    },
    { 
      name: "Delta Air Lines",
      logo: "https://1000logos.net/wp-content/uploads/2017/03/Delta-Logo.png"
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
                  onError={(e) => {
                    // Fallback to alternative logo sources
                    const fallbacks: Record<string, string> = {
                      'Genentech': 'https://logos-download.com/wp-content/uploads/2016/05/Genentech_logo_logotype.png',
                      'IBM': 'https://logos-download.com/wp-content/uploads/2016/06/IBM_logo_logotype_emblem.png',
                      'Deloitte': 'https://logos-download.com/wp-content/uploads/2016/12/Deloitte_logo_green.png',
                      'Tech Mahindra': 'https://logos-download.com/wp-content/uploads/2019/11/Tech_Mahindra_Logo.png',
                      'NIH': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/NIH_Master_Logo_Vertical_2Color.svg/512px-NIH_Master_Logo_Vertical_2Color.svg.png',
                      'Delta Air Lines': 'https://logos-download.com/wp-content/uploads/2016/05/Delta_Air_Lines_logo_logotype_emblem.png'
                    };
                    
                    if (fallbacks[client.name] && e.currentTarget.src !== fallbacks[client.name]) {
                      e.currentTarget.src = fallbacks[client.name];
                    } else {
                      // Final fallback to text
                      e.currentTarget.style.display = 'none';
                      const textDiv = document.createElement('div');
                      textDiv.className = 'text-white font-bold text-sm opacity-70 hover:opacity-100 transition-all duration-300';
                      textDiv.textContent = client.name;
                      if (e.currentTarget.parentNode) {
                        e.currentTarget.parentNode.appendChild(textDiv);
                      }
                    }
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
