export default function ClientsSection() {
  const clients = [
    { name: "Genentech", logo: "https://procyondemo.finmasolution.com/demoone/wp-content/uploads/2025/02/Genentech-1.svg" },
    { name: "IBM", logo: "https://procyondemo.finmasolution.com/demoone/wp-content/uploads/2025/02/IBM-1.svg" },
    { name: "Deloitte", logo: "https://procyondemo.finmasolution.com/demoone/wp-content/uploads/2025/02/Deloitte-1.svg" },
    { name: "Tech Mahindra", logo: "https://procyondemo.finmasolution.com/demoone/wp-content/uploads/2025/02/Tech_Mahindra-1.svg" },
    { name: "NIH", logo: "https://procyondemo.finmasolution.com/demoone/wp-content/uploads/2025/02/NIH-1.svg" },
    { name: "Delta", logo: "https://procyondemo.finmasolution.com/demoone/wp-content/uploads/2025/02/Delta-1.svg" }
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
                  alt={client.name} 
                  className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
