import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/logo (1)_1756843557178.png";

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
    <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-8 lg:pr-8" style={{ paddingLeft: 'calc(1rem - 5px)' }}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src={logoUrl} 
                alt="Procyon Technostructure" 
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className={`transition-colors ${location === '/' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-semibold' : 'text-gray-700 hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
              <Link href="/enterprise" className={`transition-colors ${location.startsWith('/enterprise') ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-semibold' : 'text-gray-700 hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Enterprise</Link>
              <Link href="/services" className={`transition-colors ${location.startsWith('/services') ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-semibold' : 'text-gray-700 hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Services</Link>
              <Link href="/about" className={`transition-colors ${location === '/about' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-semibold' : 'text-gray-700 hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>About</Link>
              <Link href="/careers" className={`transition-colors ${location === '/careers' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-semibold' : 'text-gray-700 hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Careers</Link>
              <Link href="/social-impact" className={`transition-colors ${location === '/social-impact' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-semibold' : 'text-gray-700 hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>CSR</Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-white" onClick={() => window.scrollTo(0, 0)}>
              Get Started
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
            <Link href="/" className={`block px-3 py-2 rounded-md transition-colors ${location === '/' ? 'text-emerald-400 bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-gray-300'}`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link href="/enterprise" className={`block px-3 py-2 rounded-md transition-colors ${location.startsWith('/enterprise') ? 'text-emerald-400 bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-gray-300'}`} onClick={() => window.scrollTo(0, 0)}>Enterprise</Link>
            <Link href="/services" className={`block px-3 py-2 rounded-md transition-colors ${location.startsWith('/services') ? 'text-emerald-400 bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-gray-300'}`} onClick={() => window.scrollTo(0, 0)}>Services</Link>
            <Link href="/about" className={`block px-3 py-2 rounded-md transition-colors ${location === '/about' ? 'text-emerald-400 bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-gray-300'}`} onClick={() => window.scrollTo(0, 0)}>About</Link>
            <Link href="/careers" className={`block px-3 py-2 rounded-md transition-colors ${location === '/careers' ? 'text-emerald-400 bg-gray-700' : 'text-white hover:text-gray-300'}`} onClick={() => window.scrollTo(0, 0)}>Careers</Link>
            <Link href="/social-impact" className={`block px-3 py-2 rounded-md transition-colors ${location === '/social-impact' ? 'text-emerald-400 bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-gray-300'}`} onClick={() => window.scrollTo(0, 0)}>CSR</Link>
            <Link href="/contact" className={`block px-3 py-2 rounded-md transition-colors ${location === '/contact' ? 'text-emerald-400 bg-gray-700' : 'text-white hover:bg-gray-700 hover:text-gray-300'}`} onClick={() => window.scrollTo(0, 0)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
