import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/apple-touch-icon.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Helper to check if Get Started is active
  const isGetStartedActive = location.pathname === '/get-started';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="R Elite Design Ventures" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="font-display font-semibold text-primary-foreground text-sm md:text-base leading-tight">
              R Elite Design<br className="hidden md:block" /> Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#EAB308]' // Yellow text for active links
                    : 'text-white hover:text-[#EAB308]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Get Started Button - Yellow Highlight with White Text */}
            <Link
              to="/get-started"
              className={`text-sm py-2 px-6 rounded-full font-bold transition-all duration-300 border-2 ${
                isGetStartedActive 
                  ? 'bg-[#EAB308] border-[#EAB308] text-white shadow-lg' // Highlighted state
                  : 'bg-transparent border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-white' // Default state
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#EAB308] transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-charcoal-light">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#EAB308]'
                    : 'text-white hover:text-[#EAB308]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-started"
              className={`text-center py-3 rounded-xl font-bold transition-all duration-300 ${
                isGetStartedActive
                  ? 'bg-[#EAB308] text-white'
                  : 'bg-white text-[#1A3C34] hover:bg-[#EAB308] hover:text-white'
              }`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;