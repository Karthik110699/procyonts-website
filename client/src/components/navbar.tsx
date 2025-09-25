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
    <nav className="fixed top-0 w-full z-40 bg-white backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src={logoUrl} 
                alt="Procyon Technostructure" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden xl:block">
            <div className="flex items-baseline space-x-6 2xl:space-x-8">
              <Link href="/" className={`transition-colors font-medium ${location === '/' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-bold' : 'text-black hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
              <Link href="/enterprise" className={`transition-colors font-medium ${location.startsWith('/enterprise') ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-bold' : 'text-black hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Enterprise</Link>
              <Link href="/services" className={`transition-colors font-medium ${location.startsWith('/services') ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-bold' : 'text-black hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Services</Link>
              <Link href="/about" className={`transition-colors font-medium ${location === '/about' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-bold' : 'text-black hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>About</Link>
              <Link href="/careers" className={`transition-colors font-medium ${location === '/careers' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-bold' : 'text-black hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>Careers</Link>
              <Link href="/social-impact" className={`transition-colors font-medium ${location === '/social-impact' ? 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-bold' : 'text-black hover:text-teal-600'}`} onClick={() => window.scrollTo(0, 0)}>CSR</Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden xl:block">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-white" onClick={() => window.scrollTo(0, 0)}>
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-gray-700 transition-colors duration-300 p-1"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-gray-800 border-t border-gray-700">
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
