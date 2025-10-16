import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceCTA = () => {
  const ctaOptions = [
    {
      icon: 'Calendar',
      title: 'Schedule Consultation',
      description: 'Book a free 30-minute strategy session with our experts',
      action: 'Book Now',
      variant: 'default',
      popular: true
    },
    {
      icon: 'FileText',
      title: 'Get Project Estimate',
      description: 'Receive a detailed proposal and timeline for your project',
      action: 'Get Estimate',
      variant: 'outline'
    },
    {
      icon: 'MessageCircle',
      title: 'Start Live Chat',
      description: 'Connect with our team instantly for quick questions',
      action: 'Chat Now',
      variant: 'outline'
    }
  ];

  const benefits = [
    {
      icon: 'Shield',
      title: 'Risk-Free Consultation',
      description: 'No commitment required for initial discussion'
    },
    {
      icon: 'Clock',
      title: '24-Hour Response',
      description: 'We respond to all inquiries within one business day'
    },
    {
      icon: 'Award',
      title: 'Expert Guidance',
      description: 'Get advice from senior technology consultants'
    },
    {
      icon: 'Zap',
      title: 'Fast Implementation',
      description: 'Quick project kickoff and delivery timelines'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="headline-secondary mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Take the first step towards digital transformation. Our team of experts 
            is ready to help you leverage technology for sustainable growth and competitive advantage.
          </p>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ctaOptions?.map((option, index) => (
            <div 
              key={index}
              className={`relative bg-card border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-brand hover:border-primary/20 ${
                option?.popular ? 'border-primary/20 shadow-brand' : 'border-border'
              }`}
            >
              {option?.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                option?.popular ? 'bg-primary' : 'bg-primary/10'
              }`}>
                <Icon 
                  name={option?.icon} 
                  size={28} 
                  color={option?.popular ? 'white' : 'var(--color-primary)'} 
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {option?.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {option?.description}
              </p>
              
              <Button
                variant={option?.variant}
                size="lg"
                fullWidth
                className={option?.variant === 'default' ? 'bg-cta hover:bg-cta/90 text-cta-foreground' : ''}
                iconName={option?.icon}
                iconPosition="left"
              >
                {option?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Why Choose Neno Technology?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits?.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={benefit?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {benefit?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Icon name="Phone" size={24} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
            <p className="text-text-secondary">+1 (555) 123-4567</p>
            <p className="text-xs text-text-secondary mt-1">Mon-Fri, 9AM-6PM EST</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Icon name="Mail" size={24} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
            <p className="text-text-secondary">hello@nenotech.com</p>
            <p className="text-xs text-text-secondary mt-1">24-hour response time</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <Icon name="MapPin" size={24} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Visit Us</h4>
            <p className="text-text-secondary">San Francisco, CA</p>
            <p className="text-xs text-text-secondary mt-1">By appointment only</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
              >
                View Our Work
              </Button>
            </Link>
            <Button
              variant="default"
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Get Started Today
            </Button>
          </div>
          
          <p className="text-sm text-text-secondary mt-4">
            Join 500+ companies that trust Neno Technology with their digital transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;