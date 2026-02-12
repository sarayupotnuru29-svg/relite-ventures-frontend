import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';
import logo from '@/assets/apple-touch-icon.png';

const Footer = () => {
  // Hardcoded to match Navbar order and App.tsx paths exactly
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Get Started', path: '/get-started' },
  ];

  // Helper function to handle scrolling when clicking a link to the same page
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="R Elite Logo" 
                className="h-12 w-auto object-contain rounded-sm"
              />
              <span className="text-lg font-display font-bold tracking-tight text-accent leading-tight">
                R Elite <br />
                <span className="text-sm font-medium text-primary-foreground">Design Ventures</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making Your Vision Into Reality. End-to-end solutions in windows, interiors, and turnkey house construction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Updated with Scroll-to-Top Logic */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2">
              {[
                'UPVC Windows & Doors',
                'Aluminium Windows & Doors',
                'Interior Solutions',
                'Wood Windows & Doors',
                'Glazing Works',
                'Partition Works',
                'WPC Doors',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    onClick={handleLinkClick}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <a href="tel:+918985501476" className="hover:text-accent transition-colors block">
                    +91 8985501476
                  </a>
                  <a href="tel:+919281449699" className="hover:text-accent transition-colors block">
                    +91 9281449699
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <circle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a
                  href="mailto:relitedesignventures@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  relitedesignventures@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Madanapalle, Andhra Pradesh
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/share/16pwLMLwEB/" target="_blank" rel="noopener noreferrer" className="p-2 bg-charcoal-light rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/relitedesignventures" target="_blank" rel="noopener noreferrer" className="p-2 bg-charcoal-light rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-light">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} R Elite Design Ventures & Building Solutions. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground italic tracking-wide">
              Making Your Vision Into Reality
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
              <a href="https://staffarc.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#FF4D00] hover:underline font-medium">
                <img src="https://www.staffarc.in/images/Staffarc-logo.png" alt="StaffArc logo" className="h-5 w-5 object-contain" />
                StaffArc
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;