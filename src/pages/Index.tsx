// import { Link } from 'react-router-dom';
// import { ArrowRight, Building2, Home as HomeIcon, Paintbrush, Hammer, CheckCircle } from 'lucide-react';
// import SectionHeading from '@/components/SectionHeading';
// import ServiceCard from '@/components/ServiceCard';
// import heroBg from '@/assets/hero-bg.jpg';
// import serviceUpvc from '@/assets/service-upvc.jpg';
// import serviceAluminium from '@/assets/service-aluminium.jpg';
// import serviceInterior from '@/assets/service-interior.jpg';

// const services = [
//   {
//     title: 'UPVC Windows & Doors',
//     description: 'Premium UPVC solutions for modern homes with superior insulation and durability.',
//     icon: <HomeIcon className="w-6 h-6" />,
//     image: serviceUpvc,
//   },
//   {
//     title: 'Aluminium Windows & Doors',
//     description: 'Sleek aluminium frames that combine strength with contemporary aesthetics.',
//     icon: <Building2 className="w-6 h-6" />,
//     image: serviceAluminium,
//   },
//   {
//     title: 'Interior Solutions',
//     description: 'Complete interior design and execution tailored to your lifestyle.',
//     icon: <Paintbrush className="w-6 h-6" />,
//     image: serviceInterior,
//   },
// ];

// const highlights = [
//   'End-to-End Project Management',
//   'Quality Materials & Workmanship',
//   'Timely Project Delivery',
//   'Transparent Pricing',
//   'Expert Team',
//   'Customer Satisfaction Guaranteed',
// ];

// const Index = () => {
//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${heroBg})` }}
//         />
//         <div className="overlay-dark" />
        
//         <div className="container-custom relative z-10 pt-20">
//           <div className="max-w-3xl animate-fade-up">
//             <p className="text-accent font-medium text-sm md:text-base tracking-wider uppercase mb-4">
//               R Elite Design Ventures & Building Solutions
//             </p>
//             <h1 className="heading-hero text-primary-foreground mb-6">
//               Making Your Vision{' '}
//               <span className="text-gradient-gold">Into Reality</span>
//             </h1>
//             <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
//               From premium windows and doors to complete turnkey construction, we deliver excellence at every step.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link to="/services" className="btn-accent inline-flex items-center justify-center gap-2">
//                 Explore Services
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//               <Link to="/get-started" className="btn-outline-light inline-flex items-center justify-center gap-2">
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
//             <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
//           </div>
//         </div>
//       </section>

//       {/* Services Preview */}
//       <section className="section-padding bg-background">
//         <div className="container-custom">
//           <SectionHeading
//             title="Our Premium Services"
//             subtitle="Comprehensive solutions for all your construction and interior needs"
//             centered
//           />
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//             {services.map((service, index) => (
//               <ServiceCard
//                 key={service.title}
//                 {...service}
//                 delay={index * 100}
//               />
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <Link
//               to="/services"
//               className="btn-primary inline-flex items-center gap-2"
//             >
//               View All Services
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="section-padding bg-secondary">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <SectionHeading
//                 title="Why Choose R Elite?"
//                 subtitle="We bring decades of experience and a commitment to excellence in every project we undertake."
//               />
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {highlights.map((highlight) => (
//                   <div key={highlight} className="flex items-center gap-3">
//                     <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
//                     <span className="text-sm font-medium">{highlight}</span>
//                   </div>
//                 ))}
//               </div>

//               <Link
//                 to="/about"
//                 className="btn-primary inline-flex items-center gap-2 mt-8"
//               >
//                 Learn More About Us
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </div>

//             <div className="relative">
//               <div className="aspect-square bg-gradient-to-br from-charcoal to-charcoal-light rounded-lg flex items-center justify-center">
//                 <div className="text-center p-8">
//                   <Hammer className="w-16 h-16 text-accent mx-auto mb-4" />
//                   <p className="text-primary-foreground font-display text-2xl mb-2">100+</p>
//                   <p className="text-muted-foreground text-sm">Projects Completed</p>
//                 </div>
//               </div>
//               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg -z-10" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Business Highlights */}
//       <section className="section-padding bg-primary">
//         <div className="container-custom">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { number: '100+', label: 'Projects Delivered' },
//               { number: '50+', label: 'Happy Clients' },
//               { number: '10+', label: 'Years Experience' },
//               { number: '6+', label: 'Services Offered' },
//             ].map((stat) => (
//               <div key={stat.label} className="text-center">
//                 <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
//                   {stat.number}
//                 </p>
//                 <p className="text-sm text-primary-foreground/80">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="section-padding bg-gradient-to-r from-charcoal to-charcoal-light">
//         <div className="container-custom text-center">
//           <h2 className="heading-section text-primary-foreground mb-4">
//             Ready to Transform Your Space?
//           </h2>
//           <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
//             Get in touch with our expert team and let us help you bring your vision to life.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/get-started" className="btn-accent inline-flex items-center justify-center gap-2">
//               Get Started Today
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//             <Link to="/contact" className="btn-outline-light inline-flex items-center justify-center gap-2">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Index;




import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home as HomeIcon, Paintbrush, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import heroBg from '@/assets/heronew.jpg';
import serviceUpvc from '@/assets/service-upvc.jpg';
import serviceAluminium from '@/assets/service-aluminium.jpg';
import serviceInterior from '@/assets/service-interior.jpg';

const services = [
  {
    title: 'UPVC Windows & Doors',
    description: 'Premium UPVC solutions for modern homes with superior insulation and durability.',
    icon: <HomeIcon className="w-6 h-6" />,
    image: serviceUpvc,
  },
  {
    title: 'Aluminium Windows & Doors',
    description: 'Sleek aluminium frames that combine strength with contemporary aesthetics.',
    icon: <Building2 className="w-6 h-6" />,
    image: serviceAluminium,
  },
  {
    title: 'Interior Solutions',
    description: 'Complete interior design and execution tailored to your lifestyle.',
    icon: <Paintbrush className="w-6 h-6" />,
    image: serviceInterior,
  },
];

const highlights = [
  'End-to-End Project Management',
  'Quality Materials & Workmanship',
  'Timely Project Delivery',
  'Transparent Pricing',
  'Expert Team',
  'Customer Satisfaction Guaranteed',
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="overlay-dark" />
        
        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-accent font-medium text-sm md:text-base tracking-wider uppercase mb-4">
              R Elite Design Ventures & Building Solutions
            </p>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Making Your Vision{' '}
              <span className="text-gradient-gold">Into Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
              From premium windows and doors to complete turnkey construction, we deliver excellence at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-accent inline-flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/get-started" className="btn-outline-light inline-flex items-center justify-center gap-2">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Comprehensive solutions for all your construction and interior needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Image Block Removed */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Why Choose R Elite?"
              subtitle="We bring decades of experience and a commitment to excellence in every project we undertake."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-base font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-primary inline-flex items-center gap-2 mt-10"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Business Highlights */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '6+', label: 'Services Offered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-charcoal to-charcoal-light">
        <div className="container-custom text-center">
          <h2 className="heading-section text-primary-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Get in touch with our expert team and let us help you bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started" className="btn-accent inline-flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline-light inline-flex items-center justify-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;