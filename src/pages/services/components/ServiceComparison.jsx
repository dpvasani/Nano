import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['web-development', 'mobile-development']);

  const services = [
    {
      id: 'web-development',
      name: 'Web Development',
      features: {
        'Development Time': '2-6 months',
        'Technology Stack': 'React, Node.js, MongoDB',
        'Scalability': 'High',
        'Maintenance': 'Low',
        'SEO Optimization': 'Excellent',
        'Mobile Responsive': 'Yes',
        'Real-time Features': 'Available',
        'Third-party Integration': 'Extensive'
      }
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      features: {
        'Development Time': '3-8 months',
        'Technology Stack': 'React Native, Flutter',
        'Scalability': 'High',
        'Maintenance': 'Medium',
        'SEO Optimization': 'Limited',
        'Mobile Responsive': 'Native',
        'Real-time Features': 'Available',
        'Third-party Integration': 'Extensive'
      }
    },
    {
      id: 'ai-solutions',
      name: 'AI Solutions',
      features: {
        'Development Time': '4-12 months',
        'Technology Stack': 'Python, TensorFlow, AWS',
        'Scalability': 'Very High',
        'Maintenance': 'High',
        'SEO Optimization': 'N/A',
        'Mobile Responsive': 'API-based',
        'Real-time Features': 'Advanced',
        'Third-party Integration': 'Specialized'
      }
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      features: {
        'Development Time': '1-4 months',
        'Technology Stack': 'AWS, Azure, Docker',
        'Scalability': 'Unlimited',
        'Maintenance': 'Low',
        'SEO Optimization': 'N/A',
        'Mobile Responsive': 'Infrastructure',
        'Real-time Features': 'Available',
        'Third-party Integration': 'Extensive'
      }
    }
  ];

  const allFeatures = [
    'Development Time',
    'Technology Stack',
    'Scalability',
    'Maintenance',
    'SEO Optimization',
    'Mobile Responsive',
    'Real-time Features',
    'Third-party Integration'
  ];

  const toggleService = (serviceId) => {
    if (selectedServices?.includes(serviceId)) {
      if (selectedServices?.length > 1) {
        setSelectedServices(selectedServices?.filter(id => id !== serviceId));
      }
    } else {
      if (selectedServices?.length < 3) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  const selectedServiceData = services?.filter(service => selectedServices?.includes(service?.id));

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="headline-secondary mb-4">
            Compare Our Services
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Make informed decisions with our comprehensive service comparison matrix. 
            Select up to 3 services to compare features, timelines, and technologies.
          </p>
        </div>

        {/* Service Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Select Services to Compare (Choose up to 3)
          </h3>
          <div className="flex flex-wrap gap-3">
            {services?.map((service) => (
              <button
                key={service?.id}
                onClick={() => toggleService(service?.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedServices?.includes(service?.id)
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-background text-text-secondary border-border hover:border-primary/50 hover:text-primary'
                }`}
                disabled={!selectedServices?.includes(service?.id) && selectedServices?.length >= 3}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    name={selectedServices?.includes(service?.id) ? "CheckCircle" : "Circle"} 
                    size={16} 
                  />
                  <span>{service?.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground min-w-[200px]">
                    Features
                  </th>
                  {selectedServiceData?.map((service) => (
                    <th key={service?.id} className="text-center p-4 font-semibold text-foreground min-w-[180px]">
                      {service?.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures?.map((feature, index) => (
                  <tr key={feature} className={`border-b border-border ${index % 2 === 0 ? 'bg-background' : 'bg-surface/50'}`}>
                    <td className="p-4 font-medium text-foreground">
                      {feature}
                    </td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="p-4 text-center text-text-secondary">
                        <div className="flex items-center justify-center">
                          {service?.features?.[feature] === 'Yes' || service?.features?.[feature] === 'Available' || service?.features?.[feature] === 'Excellent' ? (
                            <div className="flex items-center space-x-2 text-success">
                              <Icon name="Check" size={16} />
                              <span>{service?.features?.[feature]}</span>
                            </div>
                          ) : service?.features?.[feature] === 'No' || service?.features?.[feature] === 'Limited' ? (
                            <div className="flex items-center space-x-2 text-warning">
                              <Icon name="AlertCircle" size={16} />
                              <span>{service?.features?.[feature]}</span>
                            </div>
                          ) : (
                            <span>{service?.features?.[feature]}</span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground"
              iconName="Calculator"
              iconPosition="left"
            >
              Calculate ROI
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
            >
              Download Comparison
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;