import { Phone, Mail, MapPin, Clock, Facebook, Instagram, User } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const Contact = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="section-padding-sm bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
              Contact Us
            </p>
            <h1 className="heading-page text-primary-foreground mb-4">
              Get in Touch With Us
            </h1>
            <p className="text-primary-foreground/80 leading-relaxed">
              Have questions or ready to start your project? We're here to help. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <SectionHeading
                title="Contact Information"
                subtitle="We're available to answer your questions and discuss your project"
              />

              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-accent flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact Person</h3>
                    <p className="text-muted-foreground">Santhosh Reddy</p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-accent flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+918985501476"
                        className="block text-muted-foreground hover:text-accent transition-colors"
                      >
                        +91 8985501476
                      </a>
                      <a
                        href="tel:+919281449699"
                        className="block text-muted-foreground hover:text-accent transition-colors"
                      >
                        +91 9281449699
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-accent flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:relitedesignventures@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      relitedesignventures@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg text-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      #1, Society Colony Main Rd<br />
                      <span className="text-sm">Landmark: Beside Peepal Tree School</span><br />
                      Madanapalle, Andhra Pradesh – 517325
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/share/16pwLMLwEB/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/relitedesignventures"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Map */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-semibold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium">Monday – Friday</span>
                    <span className="text-muted-foreground">9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-accent font-medium">Holiday</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-lg overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8686!2d78.5!3d13.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMzJzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="R Elite Design Ventures Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">
                    📍 Madanapalle, Andhra Pradesh | Beside Peepal Tree School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
