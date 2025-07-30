import { Building2, Zap, Database, Cloud, Cpu, Globe } from "lucide-react";

export default function ClientsSection() {
  const clients = [
    { name: "Genentech", icon: Building2, color: "text-blue-400" },
    { name: "IBM", icon: Cpu, color: "text-emerald-400" },
    { name: "Deloitte", icon: Database, color: "text-purple-400" },
    { name: "Tech Mahindra", icon: Cloud, color: "text-cyan-400" },
    { name: "NIH", icon: Zap, color: "text-yellow-400" },
    { name: "Delta", icon: Globe, color: "text-pink-400" }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-gray-300">Over two decades powering the world's leading businesses</p>
        </div>
        
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                  <IconComponent className={`w-8 h-8 mb-3 ${client.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center">{client.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
