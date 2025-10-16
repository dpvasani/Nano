import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-secondary/20 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Comprehensive Technology Solutions</span>
          </div>
          
          <h1 className="headline-primary mb-6">
            Transform Your Business with
            <span className="text-brand-gradient block mt-2">
              Cutting-Edge Technology Services
            </span>
          </h1>
          
          <p className="body-large text-text-secondary mb-8 max-w-3xl mx-auto">
            From AI-powered solutions to full-stack development, we deliver enterprise-grade 
            technology services that drive innovation, efficiency, and sustainable growth for 
            businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground shadow-brand"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "15+", label: "Years Experience" }
            ]?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat?.number}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;