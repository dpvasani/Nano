import React from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import ServiceComparison from './components/ServiceComparison';
import ROICalculator from './components/ROICalculator';
import TechnologyStack from './components/TechnologyStack';
import ClientTestimonials from './components/ClientTestimonials';
import ServiceCTA from './components/ServiceCTA';

const Services = () => {
  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: 'Globe',
      description: 'Custom web applications built with modern frameworks and technologies. From responsive websites to complex enterprise solutions, we deliver scalable and performant web experiences.',
      features: [
        'Responsive design across all devices',
        'SEO optimization and performance tuning',
        'Modern JavaScript frameworks (React, Vue, Angular)',
        'Progressive Web App (PWA) capabilities',
        'API integration and third-party services'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      startingPrice: '15,000',
      pricingNote: 'Based on project complexity and requirements',
      isPopular: true
    },
    {
      id: 'mobile-development',
      title: 'Mobile Development',
      icon: 'Smartphone',
      description: 'Native and cross-platform mobile applications for iOS and Android. We create intuitive, high-performance mobile experiences that engage users and drive business growth.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions with React Native/Flutter',
        'App Store optimization and deployment',
        'Push notifications and real-time features',
        'Offline functionality and data synchronization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      startingPrice: '25,000',
      pricingNote: 'Includes both iOS and Android platforms'
    },
    {
      id: 'ai-solutions',
      title: 'AI & Machine Learning',
      icon: 'Brain',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning. From predictive analytics to natural language processing, we help businesses leverage AI for competitive advantage.',
      features: [
        'Custom machine learning model development',
        'Natural language processing and chatbots',
        'Computer vision and image recognition',
        'Predictive analytics and forecasting',
        'AI model deployment and monitoring'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker'],
      startingPrice: '35,000',
      pricingNote: 'Varies based on model complexity and data requirements'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      icon: 'Cloud',
      description: 'Scalable cloud infrastructure and migration services. We help businesses modernize their IT infrastructure with secure, reliable, and cost-effective cloud solutions.',
      features: [
        'Cloud migration and modernization',
        'Infrastructure as Code (IaC)',
        'Container orchestration with Kubernetes',
        'CI/CD pipeline setup and automation',
        'Cloud security and compliance'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      startingPrice: '20,000',
      pricingNote: 'Includes migration strategy and implementation'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: 'Zap',
      description: 'Comprehensive digital transformation strategies that modernize business processes, improve efficiency, and drive innovation across your organization.',
      features: [
        'Digital strategy and roadmap development',
        'Process automation and optimization',
        'Legacy system modernization',
        'Data analytics and business intelligence',
        'Change management and training'
      ],
      technologies: ['Various', 'Custom Stack', 'Integration APIs', 'Analytics Tools'],
      startingPrice: '50,000',
      pricingNote: 'Comprehensive transformation program'
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      icon: 'Users',
      description: 'Expert technology consulting services to help you make informed decisions about your technology investments and strategic direction.',
      features: [
        'Technology assessment and audit',
        'Architecture design and review',
        'Vendor selection and evaluation',
        'Technical due diligence',
        'CTO-as-a-Service offerings'
      ],
      technologies: ['Advisory', 'Best Practices', 'Industry Standards'],
      startingPrice: '5,000',
      pricingNote: 'Hourly or project-based consulting'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <ServiceHero />
        
        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="headline-secondary mb-4">
                Our Service Portfolio
              </h2>
              <p className="body-large text-text-secondary max-w-3xl mx-auto">
                Comprehensive technology services designed to accelerate your digital transformation 
                and drive sustainable business growth through innovative solutions.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {services?.map((service, index) => (
                <ServiceCard 
                  key={service?.id} 
                  service={service} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <ServiceComparison />

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Technology Stack */}
        <TechnologyStack />

        {/* Client Testimonials */}
        <ClientTestimonials />

        {/* Service CTA */}
        <ServiceCTA />
      </main>
    </div>
  );
};

export default Services;