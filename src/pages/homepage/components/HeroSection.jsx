import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
  {
    id: 1,
    title: "Transform Your Digital Future",
    subtitle: "Advanced AI & Software Solutions",
    description: "Empowering enterprises with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth in the digital era.",
    image: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
    imageAlt: "Futuristic digital network visualization with glowing blue connections and data nodes floating in space"
  },
  {
    id: 2,
    title: "Intelligent Automation Solutions",
    subtitle: "Machine Learning & AI Integration",
    description: "Revolutionize your business processes with intelligent automation, predictive analytics, and machine learning solutions tailored to your industry needs.",
    image: "https://images.unsplash.com/photo-1543355584-e708a2e4d2f6",
    imageAlt: "Modern server room with glowing blue LED lights and advanced computing infrastructure"
  },
  {
    id: 3,
    title: "Cloud-Native Development",
    subtitle: "Scalable Enterprise Solutions",
    description: "Build resilient, scalable applications with our cloud-native development expertise, ensuring optimal performance and seamless user experiences.",
    image: "https://images.unsplash.com/photo-1696550579452-02792489bedb",
    imageAlt: "Abstract cloud computing visualization with interconnected nodes and data streams in blue and purple gradients"
  }];


  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroSlides?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Video/Animation Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/20"></div>
        {heroSlides?.map((slide, index) =>
        <motion.div
          key={slide?.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}>

            <Image
            src={slide?.image}
            alt={slide?.imageAlt}
            className="w-full h-full object-cover" />

          </motion.div>
        )}
      </div>
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)]?.map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }} />

        )}
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto">

          {/* Subtitle */}
          <motion.div
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">

            <Icon name="Zap" size={16} className="text-primary" />
            <span className="text-primary font-medium text-sm">
              {heroSlides?.[currentSlide]?.subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">

            {heroSlides?.[currentSlide]?.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">

            {heroSlides?.[currentSlide]?.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">

            <Link to="/services">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}>

                Explore Our Services
              </Button>
            </Link>
            
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                iconName="Play"
                iconPosition="left"
                iconSize={20}>

                View Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/10">

            {[
            { number: "500+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Enterprise Clients" },
            { number: "24/7", label: "Support Available" }]?.
            map((stat, index) =>
            <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat?.number}
                </div>
                <div className="text-sm text-slate-400">
                  {stat?.label}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide">

          <Icon name="ChevronLeft" size={20} />
        </button>

        <div className="flex space-x-2">
          {heroSlides?.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ? 'bg-primary' : 'bg-white/30'}`
            }
            aria-label={`Go to slide ${index + 1}`} />

          )}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide">

          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 flex flex-col items-center space-y-2">

        <span className="text-white/60 text-sm font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2" />

        </motion.div>
      </motion.div>
    </section>);

};

export default HeroSection;