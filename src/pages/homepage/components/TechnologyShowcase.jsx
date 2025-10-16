import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnologyShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const techCategories = [
    {
      id: 1,
      name: "Frontend Technologies",
      icon: "Monitor",
      description: "Modern web technologies for exceptional user experiences",
      technologies: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "Vue.js", level: 90, color: "bg-green-500" },
        { name: "Angular", level: 85, color: "bg-red-500" },
        { name: "Next.js", level: 92, color: "bg-gray-800" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 94, color: "bg-cyan-500" }
      ]
    },
    {
      id: 2,
      name: "Backend & Cloud",
      icon: "Server",
      description: "Scalable server-side solutions and cloud infrastructure",
      technologies: [
        { name: "Node.js", level: 93, color: "bg-green-600" },
        { name: "Python", level: 91, color: "bg-yellow-500" },
        { name: "AWS", level: 89, color: "bg-orange-500" },
        { name: "Docker", level: 87, color: "bg-blue-400" },
        { name: "Kubernetes", level: 84, color: "bg-blue-700" },
        { name: "GraphQL", level: 86, color: "bg-pink-500" }
      ]
    },
    {
      id: 3,
      name: "AI & Machine Learning",
      icon: "Brain",
      description: "Cutting-edge AI solutions and machine learning models",
      technologies: [
        { name: "TensorFlow", level: 88, color: "bg-orange-600" },
        { name: "PyTorch", level: 85, color: "bg-red-600" },
        { name: "OpenAI GPT", level: 92, color: "bg-green-700" },
        { name: "Computer Vision", level: 83, color: "bg-purple-600" },
        { name: "NLP", level: 87, color: "bg-indigo-600" },
        { name: "MLOps", level: 81, color: "bg-teal-600" }
      ]
    },
    {
      id: 4,
      name: "Data & Analytics",
      icon: "BarChart3",
      description: "Advanced data processing and business intelligence tools",
      technologies: [
        { name: "Apache Spark", level: 86, color: "bg-orange-700" },
        { name: "Elasticsearch", level: 84, color: "bg-yellow-600" },
        { name: "Tableau", level: 89, color: "bg-blue-800" },
        { name: "Power BI", level: 87, color: "bg-yellow-700" },
        { name: "MongoDB", level: 90, color: "bg-green-800" },
        { name: "PostgreSQL", level: 92, color: "bg-blue-900" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % techCategories?.length);
      setAnimationKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [techCategories?.length]);

  const currentCategory = techCategories?.[activeCategory];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-6">
            <Icon name="Cpu" size={16} className="text-primary" />
            <span className="text-primary font-medium text-sm">Technology Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge Technology Arsenal
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build robust, scalable, 
            and innovative solutions that drive your business forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Category Navigation */}
          <div className="space-y-4">
            {techCategories?.map((category, index) => (
              <motion.div
                key={category?.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${
                  activeCategory === index
                    ? 'bg-primary/20 border-primary/50 shadow-lg shadow-primary/25'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => {
                  setActiveCategory(index);
                  setAnimationKey(prev => prev + 1);
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-primary text-white' :'bg-white/10 text-slate-300'
                  }`}>
                    <Icon name={category?.icon} size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                      activeCategory === index ? 'text-white' : 'text-slate-300'
                    }`}>
                      {category?.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      {category?.description}
                    </p>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    activeCategory === index
                      ? 'border-primary bg-primary' :'border-slate-500'
                  }`}>
                    {activeCategory === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-white rounded-full m-1"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Skills Display */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <motion.div
              key={animationKey}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name={currentCategory?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentCategory?.name}
                  </h3>
                  <p className="text-slate-400">
                    {currentCategory?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {currentCategory?.technologies?.map((tech, index) => (
                  <motion.div
                    key={tech?.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{tech?.name}</span>
                      <span className="text-slate-300 text-sm">{tech?.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full ${tech?.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech?.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {techCategories?.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeCategory ? 'w-8 bg-primary' : 'w-2 bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;