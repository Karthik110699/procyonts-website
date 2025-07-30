import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'glass border-b border-gray-800 backdrop-blur-lg bg-procyon-dark/90' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold gradient-text">Procyon</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className={`transition-colors ${location === '/' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Home</Link>
              <Link href="/enterprise" className={`transition-colors ${location.startsWith('/enterprise') ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Enterprise</Link>
              <Link href="/services" className={`transition-colors ${location.startsWith('/services') ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Services</Link>
              <Link href="/about" className={`transition-colors ${location === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>About</Link>
              <Link href="/careers" className={`transition-colors ${location === '/careers' ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>Careers</Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-400 hover:to-yellow-400 px-6 py-2.5 rounded-lg font-semibold text-white transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`block px-3 py-2 rounded-md ${location === '/' ? 'text-blue-400 bg-gray-700' : 'text-white hover:bg-gray-700'}`}>Home</Link>
            <Link href="/enterprise" className={`block px-3 py-2 rounded-md ${location.startsWith('/enterprise') ? 'text-blue-400 bg-gray-700' : 'text-white hover:bg-gray-700'}`}>Enterprise</Link>
            <Link href="/services" className={`block px-3 py-2 rounded-md ${location.startsWith('/services') ? 'text-blue-400 bg-gray-700' : 'text-white hover:bg-gray-700'}`}>Services</Link>
            <Link href="/about" className={`block px-3 py-2 rounded-md ${location === '/about' ? 'text-blue-400 bg-gray-700' : 'text-white hover:bg-gray-700'}`}>About</Link>
            <Link href="/careers" className={`block px-3 py-2 rounded-md ${location === '/careers' ? 'text-blue-400 bg-gray-700' : 'text-white hover:bg-gray-700'}`}>Careers</Link>
            <Link href="/contact" className={`block px-3 py-2 rounded-md ${location === '/contact' ? 'text-blue-400 bg-gray-700' : 'text-white hover:bg-gray-700'}`}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
