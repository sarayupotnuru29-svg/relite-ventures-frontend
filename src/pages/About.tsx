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
//               Building Trust, Delivering <span className="text-accent">Excellence</span>
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
//               <h3 className="heading-card mb-3">Our <span className="text-accent">Mission</span></h3>
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
//               <h3 className="heading-card mb-3">Our <span className="text-accent">Vision</span></h3>
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
//             title={<>Our Core <span className="text-accent">Values</span></>}
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
//             Let's Build Something <span className="text-accent">Amazing</span> Together
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


import { Target, Eye, Award, Users, Shield, Clock, ArrowRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Link } from 'react-router-dom';

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

const reviews = [
  {
    name: "KARTHIK",
    date: "08 Nov 2025",
    content: "I recently had the pleasure of using R ELITE DESIGN VENTURES for repairs, and I couldn't be more impressed! Their flexible appointment options made scheduling a breeze. The team's professionalism and attention to detail were top-notch.",
    tags: ["Flexible appointments", "Speedy response"]
  },
  {
    name: "User",
    date: "13 Dec 2023",
    content: "Firstly thank you R elite design ventures for your End to end product service :) very good product and installation part and service is top notch. Owner is very friendly and responsible I can say whole team is really good.",
    tags: ["Quick service", "Speedy response"]
  },
  {
    name: "Krishna",
    date: "15 Dec 2023",
    content: "Upvc windows and doors very good, good customer service. Highly recommend R Elite for smooth service with warranty and good product.",
    tags: ["Speedy response", "Clear Quotation"]
  }
];

const About = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">About Us</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
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

      {/* Client Feedback Section */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <SectionHeading
            title={<>Client <span className="text-accent">Feedback</span></>}
            subtitle="What our customers say about their experience with us"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {reviews.map((review, index) => (
              <div key={index} className="bg-secondary p-6 rounded-xl relative border border-primary/5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10" />
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic mb-4 flex-grow leading-relaxed">
                  "{review.content}"
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {review.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-tighter bg-primary/5 text-primary/60 px-2 py-0.5 rounded-full border border-primary/10 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-2 h-2 text-accent" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">{review.name}</h4>
                    <p className="text-[10px] text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
             <a 
              href="https://share.google/Gb0oNgIeMBVTNdrzy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2 group"
            >
              View More Reviews on Google 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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
          <Link 
            to="/get-started" 
            onClick={handleLinkClick}
            className="btn-accent inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;