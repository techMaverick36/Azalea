import {useState, useEffect} from 'react'
import { Sparkles,  Menu, X } 
from 'lucide-react';
const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
<nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'} montserrat`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Sparkles className={`w-8 h-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'} playfair-display`}>
              Azalea cleaning services and property management co. Ltd
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                Services
              </a>
              <a href="#about" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                About
              </a>
              <a href="#testimonials" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                Reviews
              </a>
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
              <a href="#contact" className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center hover:bg-blue-700">
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar
