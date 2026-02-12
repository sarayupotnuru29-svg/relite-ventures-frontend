// import { Target, Eye, Award, Users, Shield, Clock } from 'lucide-react';
// import SectionHeading from '@/components/SectionHeading';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// const values = [
//   {
//     icon: <Award className="w-6 h-6" />,
//     title: 'Quality First',
//     description: 'We never compromise on quality, using only premium materials and skilled craftsmen.',
//   },
//   {
//     icon: <Users className="w-6 h-6" />,
//     title: 'Customer Focused',
//     description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.',
//   },
//   {
//     icon: <Shield className="w-6 h-6" />,
//     title: 'Trust & Transparency',
//     description: 'Honest pricing, clear communication, and reliable service at every step.',
//   },
//   {
//     icon: <Clock className="w-6 h-6" />,
//     title: 'Timely Delivery',
//     description: 'We respect your time and ensure project completion within agreed timelines.',
//   },
// ];

// const About = () => {
//   return (
//     <main className="pt-16 md:pt-20">
//       {/* Hero */}
//       <section className="section-padding bg-primary">
//         <div className="container-custom">
//           <div className="max-w-3xl">
//             <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
//               About Us
//             </p>
//             <h1 className="heading-page text-primary-foreground mb-4">
//               Building Trust, Delivering Excellence
//             </h1>
//             <p className="text-primary-foreground/80 leading-relaxed">
//               R Elite Design Ventures & Building Solutions provides end-to-end solutions in windows, 
//               interiors, and turnkey house construction. From planning and approvals to complete 
//               construction and key handover, we deliver quality-driven, customized spaces built on 
//               trust and timely execution.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="section-padding-sm bg-background">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="card-service">
//               <div className="p-3 bg-secondary inline-block rounded-lg text-accent mb-4">
//                 <Target className="w-6 h-6" />
//               </div>
//               <h3 className="heading-card mb-3">Our Mission</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 To deliver exceptional construction and interior solutions that transform our clients' 
//                 visions into reality, through unwavering commitment to quality, innovation, and 
//                 customer satisfaction.
//               </p>
//             </div>

//             <div className="card-service">
//               <div className="p-3 bg-secondary inline-block rounded-lg text-accent mb-4">
//                 <Eye className="w-6 h-6" />
//               </div>
//               <h3 className="heading-card mb-3">Our Vision</h3>
//               <p className="text-muted-foreground leading-relaxed">
//                 To be the most trusted name in construction and interior solutions, known for 
//                 excellence, reliability, and creating spaces that inspire and endure for generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="section-padding-sm bg-secondary">
//         <div className="container-custom">
//           <SectionHeading
//             title="Our Core Values"
//             subtitle="The principles that guide everything we do"
//             centered
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <div
//                 key={value.title}
//                 className="text-center p-6 bg-background rounded-lg hover:shadow-lg transition-shadow"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="p-3 bg-secondary inline-block rounded-lg text-accent mb-4">
//                   {value.icon}
//                 </div>
//                 <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding-sm bg-primary">
//         <div className="container-custom text-center">
//           <h2 className="heading-section text-primary-foreground mb-4">
//             Let's Build Something Amazing Together
//           </h2>
//           <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
//             Ready to start your project? Our team is here to help you every step of the way.
//           </p>
//           <Link to="/get-started" className="btn-accent inline-flex items-center gap-2">
//             Get Started
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;
import { Target, Eye, Award, Users, Shield, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Quality First',
    description: 'We never compromise on quality, using only premium materials and skilled craftsmen.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Trust & Transparency',
    description: 'Honest pricing, clear communication, and reliable service at every step.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Timely Delivery',
    description: 'We respect your time and ensure project completion within agreed timelines.',
  },
];

const About = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
              About Us
            </p>
            <h1 className="heading-page text-primary-foreground mb-4">
              Building Trust, Delivering <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-primary-foreground/80 leading-relaxed">
              R Elite Design Ventures & Building Solutions provides end-to-end solutions in windows, 
              interiors, and turnkey house construction. From planning and approvals to complete 
              construction and key handover, we deliver quality-driven, customized spaces built on 
              trust and timely execution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-service">
              <div className="p-3 bg-secondary inline-block rounded-lg text-accent mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="heading-card mb-3">Our <span className="text-accent">Mission</span></h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional construction and interior solutions that transform our clients' 
                visions into reality, through unwavering commitment to quality, innovation, and 
                customer satisfaction.
              </p>
            </div>

            <div className="card-service">
              <div className="p-3 bg-secondary inline-block rounded-lg text-accent mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="heading-card mb-3">Our <span className="text-accent">Vision</span></h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in construction and interior solutions, known for 
                excellence, reliability, and creating spaces that inspire and endure for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-custom">
          <SectionHeading
            title={<>Our Core <span className="text-accent">Values</span></>}
            subtitle="The principles that guide everything we do"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-background rounded-lg hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-secondary inline-block rounded-lg text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-section text-primary-foreground mb-4">
            Let's Build Something <span className="text-accent">Amazing</span> Together
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Ready to start your project? Our team is here to help you every step of the way.
          </p>
          <Link to="/get-started" className="btn-accent inline-flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;