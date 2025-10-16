import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import TechnologyShowcase from './components/TechnologyShowcase';
import ClientShowcase from './components/ClientShowcase';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Neno Technology - Advanced AI & Software Solutions | Digital Transformation";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Transform your business with Neno Technology\'s cutting-edge AI solutions, cloud architecture, and custom software development. Trusted by 500+ enterprises worldwide.');
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-background"
    >
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Preview */}
        <ServicesPreview />

        {/* Technology Showcase */}
        <TechnologyShowcase />

        {/* Client Showcase */}
        <ClientShowcase />

        {/* Call to Action */}
        <CallToAction />
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Neno Technology</h3>
                  <p className="text-slate-400 text-sm">Intelligent Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Empowering businesses with cutting-edge AI solutions, cloud architecture, 
                and custom software development for digital transformation success.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary/20">
                    <span className="text-sm">in</span>
                  </div>
                </a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary/20">
                    <span className="text-sm">tw</span>
                  </div>
                </a>
                <a href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary/20">
                    <span className="text-sm">gh</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">AI & Machine Learning</a></li>
                <li><a href="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Cloud Architecture</a></li>
                <li><a href="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Custom Development</a></li>
                <li><a href="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Digital Transformation</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-slate-400">
                  <span className="block">+1 (555) 123-4567</span>
                </li>
                <li className="text-slate-400">
                  <span className="block">hello@nenotechnology.com</span>
                </li>
                <li className="text-slate-400">
                  <span className="block">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date()?.getFullYear()} Neno Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-primary text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Homepage;