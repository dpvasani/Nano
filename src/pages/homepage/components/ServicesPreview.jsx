import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Intelligent automation solutions that transform business processes through advanced machine learning algorithms and predictive analytics.",
      icon: "Brain",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning Models"],
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600"
    },
    {
      id: 2,
      title: "Cloud Architecture",
      description: "Scalable cloud-native solutions designed for enterprise-grade performance, security, and reliability across multiple platforms.",
      icon: "Cloud",
      features: ["Microservices Architecture", "Container Orchestration", "Serverless Computing", "Multi-Cloud Strategy"],
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600"
    },
    {
      id: 3,
      title: "Custom Software Development",
      description: "End-to-end software development services tailored to your specific business requirements and industry standards.",
      icon: "Code",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Quality Assurance"],
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:from-green-600 hover:to-emerald-600"
    },
    {
      id: 4,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies that modernize legacy systems and optimize business operations.",
      icon: "Zap",
      features: ["Process Automation", "Legacy Modernization", "Digital Strategy", "Change Management"],
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-600 hover:to-red-600"
    },
    {
      id: 5,
      title: "Data Analytics & BI",
      description: "Advanced data analytics and business intelligence solutions that provide actionable insights for strategic decision-making.",
      icon: "BarChart3",
      features: ["Data Visualization", "Real-time Analytics", "Business Intelligence", "Data Warehousing"],
      color: "from-indigo-500 to-blue-500",
      hoverColor: "hover:from-indigo-600 hover:to-blue-600"
    },
    {
      id: 6,
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity frameworks that protect your digital assets and ensure compliance with industry regulations.",
      icon: "Shield",
      features: ["Threat Detection", "Security Auditing", "Compliance Management", "Incident Response"],
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-600 hover:to-pink-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Settings" size={16} className="text-primary" />
            <span className="text-primary font-medium text-sm">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Technology Solutions
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From AI-powered automation to cloud-native development, we deliver cutting-edge solutions 
            that drive digital transformation and business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services?.map((service) => (
            <motion.div
              key={service?.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service?.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service?.icon} size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service?.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service?.color} rounded-full`}></div>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Link to="/services" className="group/link">
                    <span className="text-primary font-medium group-hover/link:text-primary/80 transition-colors duration-200">
                      Learn More
                    </span>
                  </Link>
                  
                  <div className={`w-10 h-10 bg-gradient-to-br ${service?.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
                    <Icon name="ArrowRight" size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${service?.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's discuss how our comprehensive technology solutions can drive your digital transformation 
              and accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View All Services
                </Button>
              </Link>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;