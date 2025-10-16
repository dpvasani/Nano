import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientShowcase = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const clients = [
  {
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1633544325196-bcf8bf81ead0",
    logoAlt: "Modern tech company logo with geometric blue and gray design elements"
  },
  {
    name: "Global Dynamics",
    logo: "https://images.unsplash.com/photo-1666687673964-bf2f89aa5214",
    logoAlt: "Professional corporate logo featuring interconnected circles in navy blue"
  },
  {
    name: "Innovation Labs",
    logo: "https://images.unsplash.com/photo-1555000001-5fd3a0b90d6e",
    logoAlt: "Minimalist startup logo with abstract lightbulb symbol in bright orange"
  },
  {
    name: "DataFlow Systems",
    logo: "https://images.unsplash.com/photo-1714171055104-3288b636329a",
    logoAlt: "Data analytics company logo with flowing lines and gradient purple design"
  },
  {
    name: "CloudFirst Enterprise",
    logo: "https://images.unsplash.com/photo-1545231027-637d2f6210f8",
    logoAlt: "Cloud computing company logo with stylized cloud icon in teal and white"
  },
  {
    name: "AI Ventures",
    logo: "https://images.unsplash.com/photo-1719650592946-55163c4994cb",
    logoAlt: "Artificial intelligence company logo with neural network pattern in electric blue"
  }];


  const testimonials = [
  {
    id: 1,
    content: "Neno Technology transformed our entire digital infrastructure. Their AI-powered solutions increased our operational efficiency by 40% and reduced costs significantly. The team's expertise in machine learning is unmatched.",
    author: "Sarah Chen",
    position: "CTO",
    company: "TechCorp Solutions",
    avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868",
    avatarAlt: "Professional headshot of Asian woman with shoulder-length black hair in navy business suit",
    rating: 5,
    project: "AI-Powered Analytics Platform"
  },
  {
    id: 2,
    content: "The cloud migration project was executed flawlessly. Neno Technology\'s team demonstrated exceptional technical skills and project management. Our system performance improved by 60% post-migration.",
    author: "Michael Rodriguez",
    position: "VP of Engineering",
    company: "Global Dynamics",
    avatar: "https://images.unsplash.com/photo-1714974528889-d51109fb6ae9",
    avatarAlt: "Professional headshot of Hispanic man with short dark hair in charcoal gray suit",
    rating: 5,
    project: "Enterprise Cloud Migration"
  },
  {
    id: 3,
    content: "Working with Neno Technology was a game-changer for our startup. They built our entire platform from scratch using cutting-edge technologies. The scalability and performance exceeded our expectations.",
    author: "Emily Watson",
    position: "Founder & CEO",
    company: "Innovation Labs",
    avatar: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    avatarAlt: "Professional headshot of blonde woman with wavy hair in white blazer smiling confidently",
    rating: 5,
    project: "Full-Stack Platform Development"
  }];


  const metrics = [
  { number: "500+", label: "Projects Completed", icon: "CheckCircle" },
  { number: "98%", label: "Client Satisfaction", icon: "Heart" },
  { number: "50+", label: "Enterprise Clients", icon: "Building" },
  { number: "24/7", label: "Support Available", icon: "Clock" }];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-primary font-medium text-sm">Client Success</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We've partnered with forward-thinking companies to deliver transformative 
            technology solutions that drive measurable business results.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients?.map((client, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">

                <Image
                src={client?.logo}
                alt={client?.logoAlt}
                className="h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">

          {metrics?.map((metric, index) =>
          <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <Icon name={metric?.icon} size={28} className="text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {metric?.number}
              </div>
              <div className="text-text-secondary font-medium">
                {metric?.label}
              </div>
            </div>
          )}
        </motion.div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-text-secondary">
              Real feedback from companies we've helped transform
            </p>
          </div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto">

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials?.[currentTestimonial]?.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials?.[currentTestimonial]?.avatar}
                  alt={testimonials?.[currentTestimonial]?.avatarAlt}
                  className="w-16 h-16 rounded-full object-cover" />

                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials?.[currentTestimonial]?.author}
                  </div>
                  <div className="text-text-secondary">
                    {testimonials?.[currentTestimonial]?.position}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials?.[currentTestimonial]?.company}
                  </div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-6">
                <span className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm text-primary font-medium">
                  <Icon name="Briefcase" size={14} />
                  <span>{testimonials?.[currentTestimonial]?.project}</span>
                </span>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials?.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-primary w-8' : 'bg-slate-300'}`
                }
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ClientShowcase;