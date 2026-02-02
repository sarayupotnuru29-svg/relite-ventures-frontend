import { Building2, Home, Paintbrush, Image, Hammer, Key } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import serviceUpvc from '@/assets/UPVC.jpeg';
import serviceAluminium from '@/assets/ALUMINIUM.jpg';
import servicewoodwindows from '@/assets/wood_windows_doors.jpg';
import serviceglazing from '@/assets/Glazing_works.jpg';
import servicepartition from '@/assets/Partition_works.jpg';
import serviceInterior from '@/assets/Interiors.jpg';
import serviceCivil from '@/assets/service-civil.jpg';
import serviceshuttering from '@/assets/shuttering_bar_bending_works.jpg';
import servicewpc from '@/assets/WPC_doors.webp';
import servicepleated from '@/assets/Pleated_mesh.png';
import serviceWallpaper from '@/assets/wallpaper_decors.jpg';

const services = [
  {
    title: 'UPVC Windows & Doors',
    description: 'Premium quality UPVC windows and doors that offer superior insulation, noise reduction, and durability. Perfect for modern homes seeking energy efficiency and low maintenance.',
    icon: <Home className="w-6 h-6" />,
    image: serviceUpvc,
  },
  {
    title: 'Aluminium Windows & Doors',
    description: 'Sleek and sturdy aluminium frames that combine strength with contemporary aesthetics. Ideal for commercial and residential spaces requiring modern, durable solutions.',
    icon: <Building2 className="w-6 h-6" />,
    image: serviceAluminium,
  },
  {
    title: 'Wood Windows and Doors',
    description: 'Timeless wooden frames crafted with premium timber to provide natural insulation and classic elegance for any architectural style.',
    icon: <Building2 className="w-6 h-6" />,
    image: servicewoodwindows,
  },
  {
    title: 'Glazing Works',
    description: 'High-performance glass solutions featuring advanced thermal tempering and architectural glazing for stunning, energy-efficient facades.',
    icon: <Building2 className="w-6 h-6" />,
    image: serviceglazing,
  },
   {
    title: 'Partition Works',
    description: 'Versatile wall partitioning systems designed to optimize space, enhance privacy, and provide flexible layouts for both office and residential environments.',
    icon: <Building2 className="w-6 h-6" />,
    image: servicepartition,
  },
  {
    title: 'Interior Solutions',
    description: 'Complete interior design and execution tailored to your lifestyle. From modular kitchens to wardrobes, we create spaces that reflect your personality and needs.',
    icon: <Paintbrush className="w-6 h-6" />,
    image: serviceInterior,
  },
   {
    title: 'Civil Works',
    description: 'Professional civil construction services including structural work, renovations, and repairs. Quality craftsmanship backed by years of experience.',
    icon: <Hammer className="w-6 h-6" />,
    image: serviceCivil,
  },
  {
    title: 'Shuttering and Bar Bending Works',
    description: 'Precision formwork and structural steel reinforcement services ensuring maximum stability and load-bearing strength for durable concrete structures.',
    icon: <Hammer className="w-6 h-6" />,
    image: serviceshuttering,
  },
  {
    title: 'WPC Doors',
    description: 'Modern eco-friendly doors combining the natural look of wood with the moisture resistance of polymer for a 100% waterproof and termite-proof solution.',
    icon: <Key className="w-6 h-6" />,
    image: servicewpc,
  },
   {
    title: 'Pleated Mesh',
    description: 'Innovative retractable screening systems featuring durable pleated mesh to provide seamless insect protection without compromising ventilation or views.',
    icon: <Key className="w-6 h-6" />,
    image: servicepleated,
  },
   {
    title: 'Wallpapers',
    description: 'Transform your walls with our premium collection of wallpapers. From elegant textures to bold patterns, find the perfect backdrop for every room.',
    icon: <Image className="w-6 h-6" />,
    image: serviceWallpaper,
  },
];

const Services = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="section-padding-sm bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
              Our Services
            </p>
            <h1 className="heading-page text-primary-foreground mb-4">
              Comprehensive Solutions for Every Need
            </h1>
            <p className="text-primary-foreground/80 leading-relaxed">
              From premium windows and doors to complete turnkey construction, we offer a full 
              spectrum of services to transform your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-custom text-center">
          <SectionHeading
            title="Need a Custom Solution?"
            subtitle="Every project is unique. Tell us about your requirements and we'll craft the perfect solution for you."
            centered
          />
          <Link to="/get-started" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
