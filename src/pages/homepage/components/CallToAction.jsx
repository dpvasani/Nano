import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const CallToAction = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our experts",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Get detailed project information",
      value: "hello@nenotechnology.com",
      action: "mailto:hello@nenotechnology.com"
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Instant support and consultation",
      value: "Start Chat",
      action: "#"
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Rapid Development",
      description: "Fast-track your project with our agile methodology"
    },
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "Bank-grade security for all your applications"
    },
    {
      icon: "Users",
      title: "Dedicated Team",
      description: "Expert developers assigned to your project"
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      description: "Round-the-clock technical assistance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6">
              <Icon name="Rocket" size={16} className="text-primary" />
              <span className="text-primary font-medium text-sm">Ready to Start?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Cutting-Edge Technology</span>
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join hundreds of successful companies that have accelerated their digital transformation 
              with our innovative solutions. Let's build something extraordinary together.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits?.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit?.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit?.title}</h4>
                    <p className="text-slate-400 text-sm">{benefit?.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={20}
                  fullWidth
                >
                  Start Your Project
                </Button>
              </Link>
              
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  iconName="Eye"
                  iconPosition="left"
                  iconSize={20}
                  fullWidth
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Contact Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Started Today
                </h3>
                <p className="text-slate-300">
                  Choose your preferred way to connect with our team
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods?.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method?.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/20 group-hover:bg-primary/30 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <Icon name={method?.icon} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
                        {method?.title}
                      </h4>
                      <p className="text-slate-400 text-sm">{method?.description}</p>
                      <p className="text-primary font-medium text-sm mt-1">{method?.value}</p>
                    </div>
                    <Icon name="ArrowRight" size={16} className="text-slate-400 group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-xs text-slate-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-slate-400">Confidential</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Free</div>
                  <div className="text-xs text-slate-400">Consultation</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20"
            />
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl opacity-30"
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Accelerate Your Digital Journey?
            </h3>
            <p className="text-slate-300 mb-6">
              Schedule a free consultation with our technology experts and discover how we can 
              transform your business with innovative solutions tailored to your needs.
            </p>
            
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;