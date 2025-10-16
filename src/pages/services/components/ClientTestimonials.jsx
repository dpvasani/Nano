import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1668049221564-862149a48e10",
    avatarAlt: "Professional headshot of Asian woman with short black hair in navy blazer smiling at camera",
    rating: 5,
    service: "AI Solutions",
    testimonial: `Neno Technology transformed our data analytics capabilities with their AI implementation. The machine learning models they developed increased our prediction accuracy by 40% and reduced processing time by 60%. Their team's expertise in TensorFlow and PyTorch was evident throughout the project.`,
    results: {
      metric1: { label: "Accuracy Increase", value: "40%" },
      metric2: { label: "Processing Speed", value: "60% faster" },
      metric3: { label: "ROI", value: "320%" }
    },
    projectDuration: "8 months",
    technologies: ["Python", "TensorFlow", "AWS", "Docker"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Founder & CEO",
    company: "EcoCommerce",
    avatar: "https://images.unsplash.com/photo-1714974528889-d51109fb6ae9",
    avatarAlt: "Professional headshot of Hispanic man with beard in dark suit smiling confidently",
    rating: 5,
    service: "Web Development",
    testimonial: `The e-commerce platform Neno Technology built for us exceeded all expectations. The React-based frontend is incredibly fast and user-friendly, while the Node.js backend handles our growing traffic seamlessly. Sales increased by 180% within the first quarter after launch.`,
    results: {
      metric1: { label: "Sales Increase", value: "180%" },
      metric2: { label: "Page Load Speed", value: "2.1s" },
      metric3: { label: "Conversion Rate", value: "+85%" }
    },
    projectDuration: "5 months",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 3,
    name: "Emily Watson",
    position: "Head of Digital",
    company: "HealthTech Innovations",
    avatar: "https://images.unsplash.com/photo-1701232664370-39a8f24838cc",
    avatarAlt: "Professional headshot of blonde woman in white medical coat smiling warmly",
    rating: 5,
    service: "Mobile Development",
    testimonial: `Our healthcare mobile app needed to be HIPAA compliant and highly secure. Neno Technology delivered a Flutter-based solution that not only met all regulatory requirements but also provided an intuitive user experience. Patient engagement increased by 250%.`,
    results: {
      metric1: { label: "User Engagement", value: "250%" },
      metric2: { label: "App Store Rating", value: "4.8/5" },
      metric3: { label: "Daily Active Users", value: "+300%" }
    },
    projectDuration: "7 months",
    technologies: ["Flutter", "Firebase", "Node.js", "PostgreSQL"]
  },
  {
    id: 4,
    name: "David Kim",
    position: "VP of Engineering",
    company: "FinanceForward",
    avatar: "https://images.unsplash.com/photo-1681070866669-64b53053436f",
    avatarAlt: "Professional headshot of Asian man with glasses in dark business suit looking confident",
    rating: 5,
    service: "Cloud Solutions",
    testimonial: `Migrating our legacy systems to the cloud seemed daunting until we partnered with Neno Technology. Their expertise in AWS and Kubernetes made the transition smooth and secure. We now have 99.9% uptime and reduced infrastructure costs by 45%.`,
    results: {
      metric1: { label: "Uptime", value: "99.9%" },
      metric2: { label: "Cost Reduction", value: "45%" },
      metric3: { label: "Deployment Speed", value: "10x faster" }
    },
    projectDuration: "6 months",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"]
  }];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Client Success Stories</span>
          </div>
          <h2 className="headline-secondary mb-4">
            What Our Clients Say
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with Neno Technology and the results we've delivered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-brand">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="lg:col-span-1">
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden">
                    <Image
                      src={current?.avatar}
                      alt={current?.avatarAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {current?.name}
                  </h3>
                  <p className="text-text-secondary mb-2">
                    {current?.position}
                  </p>
                  <p className="text-primary font-medium mb-4">
                    {current?.company}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                    {[...Array(current?.rating)]?.map((_, i) =>
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    )}
                  </div>
                  
                  {/* Service Badge */}
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    <Icon name="Tag" size={14} />
                    <span>{current?.service}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <Icon name="Quote" size={32} className="text-primary/20 mb-4" />
                  <blockquote className="text-lg leading-relaxed text-foreground">
                    {current?.testimonial}
                  </blockquote>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.values(current?.results)?.map((result, index) =>
                  <div key={index} className="text-center p-4 bg-surface rounded-lg border">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {result?.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {result?.label}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>Duration: {current?.projectDuration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Code" size={16} />
                    <span>Technologies: {current?.technologies?.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center">

              <Icon name="ChevronLeft" size={20} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ?
                'bg-primary scale-125' : 'bg-border hover:bg-primary/50'}`
                } />

              )}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center">

              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* All Testimonials Preview */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials?.map((testimonial, index) =>
            <button
              key={testimonial?.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`p-4 rounded-lg border text-left transition-all duration-300 ${
              index === currentTestimonial ?
              'bg-primary/10 border-primary/20' : 'bg-card border-border hover:border-primary/20 hover:bg-muted'}`
              }>

                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.avatarAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {testimonial?.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {testimonial?.company}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-text-secondary line-clamp-2">
                  {testimonial?.testimonial}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default ClientTestimonials;