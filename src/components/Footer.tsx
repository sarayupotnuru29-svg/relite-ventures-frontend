// import { Link } from 'react-router-dom';
// import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
// import logo from '@/assets/relite-logo.jpeg';

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container-custom section-padding-sm">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Brand */}
//           <div className="space-y-4">
//             <img 
//               src={logo} 
//               alt="R Elite Design Ventures" 
//               className="h-16 w-auto object-contain"
//             />
//             <p className="text-sm text-muted-foreground leading-relaxed">
//               Making Your Vision Into Reality. End-to-end solutions in windows, interiors, and turnkey house construction.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-display font-semibold mb-4 text-accent">Quick Links</h4>
//             <ul className="space-y-2">
//               {['Home', 'About Us', 'Services', 'Get Started', 'Contact Us'].map((link) => (
//                 <li key={link}>
//                   <Link
//                     to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
//                     className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-display font-semibold mb-4 text-accent">Services</h4>
//             <ul className="space-y-2">
//               {[
//                 'UPVC Windows & Doors',
//                 'Aluminium Windows & Doors',
//                 'Interior Solutions',
//                 'Wallpapers',
//                 'Civil Works',
//                 'Turnkey Construction',
//               ].map((service) => (
//                 <li key={service}>
//                   <Link
//                     to="/services"
//                     className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
//                   >
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-display font-semibold mb-4 text-accent">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3">
//                 <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
//                 <div className="text-sm text-muted-foreground">
//                   <a href="tel:+918985501476" className="hover:text-accent transition-colors block">
//                     +91 8985501476
//                   </a>
//                   <a href="tel:+919281449699" className="hover:text-accent transition-colors block">
//                     +91 9281449699
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
//                 <a
//                   href="mailto:relitedesignventures@gmail.com"
//                   className="text-sm text-muted-foreground hover:text-accent transition-colors"
//                 >
//                   relitedesignventures@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
//                 <span className="text-sm text-muted-foreground">
//                   Madanapalle, Andhra Pradesh
//                 </span>
//               </li>
//             </ul>

//             {/* Social Links */}
//             <div className="flex gap-4 mt-6">
//               <a
//                 href="https://www.facebook.com/share/16pwLMLwEB/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-charcoal-light rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.instagram.com/relitedesignventures"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 bg-charcoal-light rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-8 border-t border-charcoal-light">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-muted-foreground text-center md:text-left">
//               © {new Date().getFullYear()} R Elite Design Ventures & Building Solutions. All rights reserved.
//             </p>
//             <p className="text-sm text-muted-foreground">
//               Making Your Vision Into Reality
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '@/assets/relite-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            {/* Logo and Text Side-by-Side */}
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
              {['Home', 'About Us', 'Services', 'Get Started', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Updated to match your new categories */}
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
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
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

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/share/16pwLMLwEB/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-charcoal-light rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/relitedesignventures"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-charcoal-light rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} R Elite Design Ventures & Building Solutions. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Making Your Vision Into Reality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;