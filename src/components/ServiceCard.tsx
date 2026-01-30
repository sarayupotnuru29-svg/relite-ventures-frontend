import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, image, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="card-service group overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-4 p-2 bg-accent rounded-lg text-accent-foreground">
          {icon}
        </div>
      </div>
      <h3 className="heading-card mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>
      <Link
        to="/get-started"
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-gold-dark transition-colors group/link"
      >
        Get Started
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
