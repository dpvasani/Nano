import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: 'Monitor',
      description: 'Modern, responsive user interfaces that deliver exceptional user experiences',
      technologies: [
      {
        name: 'React',
        logo: "https://images.unsplash.com/photo-1733977459324-1fd22d548f68",
        logoAlt: 'React logo with blue atom symbol on white background',
        description: 'Component-based library for building user interfaces',
        experience: '8+ years',
        projects: '200+'
      },
      {
        name: 'Vue.js',
        logo: "https://images.unsplash.com/photo-1681511346760-bcd57e9ae7db",
        logoAlt: 'Vue.js logo with green V symbol on dark background',
        description: 'Progressive framework for building user interfaces',
        experience: '5+ years',
        projects: '120+'
      },
      {
        name: 'Angular',
        logo: "https://images.unsplash.com/photo-1676623185048-5733b5dc0371",
        logoAlt: 'Angular logo with red shield symbol on white background',
        description: 'Platform for building mobile and desktop web applications',
        experience: '6+ years',
        projects: '150+'
      },
      {
        name: 'Next.js',
        logo: "https://images.unsplash.com/photo-1652849062134-cd7e46a8266e",
        logoAlt: 'Next.js logo with black triangle symbol on white background',
        description: 'React framework for production-grade applications',
        experience: '4+ years',
        projects: '80+'
      }]

    },
    backend: {
      title: 'Backend Development',
      icon: 'Server',
      description: 'Scalable server-side solutions and robust API architectures',
      technologies: [
      {
        name: 'Node.js',
        logo: "https://images.unsplash.com/photo-1644035525398-5782562f0601",
        logoAlt: 'Node.js logo with green hexagon symbol on dark background',
        description: 'JavaScript runtime for server-side development',
        experience: '7+ years',
        projects: '180+'
      },
      {
        name: 'Python',
        logo: "https://images.unsplash.com/photo-1649180556628-9ba704115795",
        logoAlt: 'Python logo with blue and yellow snake symbol on white background',
        description: 'Versatile language for web development and AI',
        experience: '9+ years',
        projects: '220+'
      },
      {
        name: 'Java',
        logo: "https://images.unsplash.com/photo-1658331756302-e203805fa8cd",
        logoAlt: 'Java logo with red coffee cup symbol on white background',
        description: 'Enterprise-grade applications and microservices',
        experience: '10+ years',
        projects: '300+'
      },
      {
        name: 'Go',
        logo: "https://images.unsplash.com/photo-1649180556628-9ba704115795",
        logoAlt: 'Go programming language logo with blue gopher mascot on white background',
        description: 'High-performance concurrent applications',
        experience: '3+ years',
        projects: '60+'
      }]

    },
    mobile: {
      title: 'Mobile Development',
      icon: 'Smartphone',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      technologies: [
      {
        name: 'React Native',
        logo: "https://images.unsplash.com/photo-1733977459324-1fd22d548f68",
        logoAlt: 'React Native logo with blue atom symbol and mobile device on white background',
        description: 'Cross-platform mobile app development',
        experience: '6+ years',
        projects: '100+'
      },
      {
        name: 'Flutter',
        logo: "https://images.unsplash.com/photo-1667235326880-324e1a51d40b",
        logoAlt: 'Flutter logo with blue bird symbol on white background',
        description: 'Google\'s UI toolkit for mobile applications',
        experience: '4+ years',
        projects: '70+'
      },
      {
        name: 'Swift',
        logo: "https://images.unsplash.com/photo-1710058004616-04c022fbb8de",
        logoAlt: 'Swift programming language logo with orange bird symbol on white background',
        description: 'Native iOS application development',
        experience: '7+ years',
        projects: '90+'
      },
      {
        name: 'Kotlin',
        logo: "https://images.unsplash.com/photo-1658820151739-5b8866bea2e3",
        logoAlt: 'Kotlin logo with purple and orange triangular symbol on white background',
        description: 'Modern Android application development',
        experience: '5+ years',
        projects: '85+'
      }]

    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: 'Cloud',
      description: 'Scalable cloud infrastructure and automated deployment pipelines',
      technologies: [
      {
        name: 'AWS',
        logo: "https://images.unsplash.com/photo-1649734926695-1b1664e98842",
        logoAlt: 'Amazon Web Services logo with orange cube symbol on white background',
        description: 'Comprehensive cloud computing platform',
        experience: '8+ years',
        projects: '250+'
      },
      {
        name: 'Docker',
        logo: "https://images.unsplash.com/photo-1650264526473-b4a9f9473664",
        logoAlt: 'Docker logo with blue whale symbol carrying containers on white background',
        description: 'Containerization and application deployment',
        experience: '6+ years',
        projects: '180+'
      },
      {
        name: 'Kubernetes',
        logo: "https://images.unsplash.com/photo-1667372459470-5f61c93c6d3f",
        logoAlt: 'Kubernetes logo with blue ship wheel symbol on white background',
        description: 'Container orchestration and management',
        experience: '5+ years',
        projects: '120+'
      },
      {
        name: 'Terraform',
        logo: "https://images.unsplash.com/photo-1666092109883-4b1f221ffa58",
        logoAlt: 'Terraform logo with purple geometric symbol on white background',
        description: 'Infrastructure as code and automation',
        experience: '4+ years',
        projects: '90+'
      }]

    },
    ai: {
      title: 'AI & Machine Learning',
      icon: 'Brain',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning',
      technologies: [
      {
        name: 'TensorFlow',
        logo: "https://images.unsplash.com/photo-1652849062134-cd7e46a8266e",
        logoAlt: 'TensorFlow logo with orange geometric symbol on white background',
        description: 'Open-source machine learning framework',
        experience: '5+ years',
        projects: '80+'
      },
      {
        name: 'PyTorch',
        logo: "https://images.unsplash.com/photo-1692037224476-3b9dd76cda0f",
        logoAlt: 'PyTorch logo with orange flame symbol on white background',
        description: 'Dynamic neural network framework',
        experience: '4+ years',
        projects: '60+'
      },
      {
        name: 'OpenAI',
        logo: "https://images.unsplash.com/photo-1679403766665-67ed6cd2df30",
        logoAlt: 'OpenAI logo with black circular symbol on white background',
        description: 'Advanced AI models and APIs',
        experience: '2+ years',
        projects: '40+'
      },
      {
        name: 'Hugging Face',
        logo: "https://images.unsplash.com/photo-1591522811280-a8759970b03f",
        logoAlt: 'Hugging Face logo with yellow emoji face symbol on white background',
        description: 'Natural language processing models',
        experience: '3+ years',
        projects: '50+'
      }]

    }
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="headline-secondary mb-4">
            Our Technology Stack
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to deliver 
            robust, scalable, and future-ready solutions for your business.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(techCategories)?.map(([key, category]) =>
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeCategory === key ?
            'bg-primary text-primary-foreground shadow-brand' :
            'bg-background text-text-secondary hover:text-primary hover:bg-muted border border-border'}`
            }>

              <Icon
              name={category?.icon}
              size={18}
              color={activeCategory === key ? 'white' : 'currentColor'} />

              <span>{category?.title}</span>
            </button>
          )}
        </div>

        {/* Active Category Content */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon
                  name={techCategories?.[activeCategory]?.icon}
                  size={24}
                  className="text-primary" />

              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {techCategories?.[activeCategory]?.title}
              </h3>
            </div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {techCategories?.[activeCategory]?.description}
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories?.[activeCategory]?.technologies?.map((tech, index) =>
            <div
              key={index}
              className="group bg-background border border-border rounded-lg p-6 hover:shadow-brand hover:border-primary/20 transition-all duration-300">

                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                    <Image
                    src={tech?.logo}
                    alt={tech?.logoAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech?.name}
                    </h4>
                    <div className="text-sm text-text-secondary">
                      {tech?.experience}
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {tech?.description}
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">Projects:</span>
                  <span className="font-medium text-primary">{tech?.projects}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technology Compatibility Checker */}
        <div className="mt-12 bg-card border border-border rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Technology Compatibility Checker
            </h3>
            <p className="text-text-secondary">
              Not sure which technologies are right for your project? Let us help you choose.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>30-minute session</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Users" size={16} className="text-accent" />
              <span>Expert guidance</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button
              variant="default"
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground"
              iconName="MessageCircle"
              iconPosition="left">

              Check Compatibility
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default TechnologyStack;