import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="card-service group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-3 bg-secondary inline-block rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
        {icon}
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
