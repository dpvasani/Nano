import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-brand-lg hover:border-primary/20 ${
        index % 2 === 0 ? 'hover:translate-y-[-8px]' : 'hover:translate-y-[-4px]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Icon */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'bg-primary shadow-lg' : 'bg-primary/10'
        }`}>
          <Icon 
            name={service?.icon} 
            size={28} 
            color={isHovered ? 'white' : 'var(--color-primary)'} 
            strokeWidth={2}
          />
        </div>
        {service?.isPopular && (
          <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
            Popular
          </div>
        )}
      </div>
      {/* Service Content */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {service?.title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-4">
          {service?.description}
        </p>
        
        {/* Key Features */}
        <ul className="space-y-2 mb-6">
          {service?.features?.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-text-secondary">
              <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {/* Technology Stack */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Technology Stack</h4>
        <div className="flex flex-wrap gap-2">
          {service?.technologies?.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Pricing */}
      <div className="mb-6 p-4 bg-surface rounded-lg border">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm text-text-secondary">Starting from</span>
          <div className="text-right">
            <span className="text-2xl font-bold text-primary">${service?.startingPrice}</span>
            <span className="text-sm text-text-secondary ml-1">/project</span>
          </div>
        </div>
        <div className="text-xs text-text-secondary">
          {service?.pricingNote}
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/individual-service-pages" className="flex-1">
          <Button
            variant="default"
            size="sm"
            fullWidth
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Learn More
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Discuss
        </Button>
      </div>
      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default ServiceCard;