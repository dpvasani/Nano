import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import FilterSection from './components/FilterSection';
import MetricsOverview from './components/MetricsOverview';
import TestimonialSection from './components/TestimonialSection';
import TechnologyShowcase from './components/TechnologyShowcase';

const Portfolio = () => {
  const [activeFilters, setActiveFilters] = useState({
    industry: [],
    technology: [],
    type: []
  });
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock data for portfolio metrics
  const portfolioMetrics = [
  { type: 'projects', value: '150+', label: 'Projects Completed', growth: 25 },
  { type: 'clients', value: '80+', label: 'Happy Clients', growth: 18 },
  { type: 'success', value: '98%', label: 'Success Rate', growth: 5 },
  { type: 'technologies', value: '50+', label: 'Technologies', growth: 12 },
  { type: 'industries', value: '15+', label: 'Industries', growth: 8 },
  { type: 'years', value: '8+', label: 'Years Experience', growth: 0 }];


  // Mock data for projects
  const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    client: "MedTech Solutions Inc.",
    industry: "Healthcare",
    type: "AI/ML Implementation",
    image: "https://images.unsplash.com/photo-1713600025722-f17601622fb4",
    imageAlt: "Modern hospital corridor with advanced medical equipment and digital displays showing patient data",
    description: `Developed a comprehensive AI-powered healthcare platform that revolutionizes patient care through predictive analytics, automated diagnosis assistance, and real-time monitoring systems.\n\nThe platform integrates machine learning algorithms to analyze patient data, predict health risks, and provide personalized treatment recommendations.`,
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "AWS"],
    keyMetrics: [
    { label: "Diagnosis Accuracy", value: "94%" },
    { label: "Response Time", value: "2.3s" },
    { label: "Patient Satisfaction", value: "96%" },
    { label: "Cost Reduction", value: "35%" }],

    duration: "8 months",
    status: "Completed",
    completedDate: "2024-09-15"
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Solution",
    client: "Global Logistics Corp",
    industry: "Logistics",
    type: "Blockchain Development",
    image: "https://images.unsplash.com/photo-1703563210677-b568e7e8bd8f",
    imageAlt: "Warehouse with automated sorting systems and digital tracking displays showing supply chain data",
    description: `Built a transparent and secure blockchain-based supply chain management system that tracks products from manufacturing to delivery.\n\nThe solution provides real-time visibility, reduces fraud, and ensures product authenticity through immutable ledger technology.`,
    technologies: ["Solidity", "Ethereum", "React", "Node.js", "IPFS", "Web3"],
    keyMetrics: [
    { label: "Transparency", value: "100%" },
    { label: "Fraud Reduction", value: "89%" },
    { label: "Tracking Accuracy", value: "99.8%" },
    { label: "Processing Speed", value: "5x faster" }],

    duration: "6 months",
    status: "Completed",
    completedDate: "2024-08-20"
  },
  {
    id: 3,
    title: "E-commerce Mobile App",
    client: "RetailMax Solutions",
    industry: "Retail",
    type: "Mobile Development",
    image: "https://images.unsplash.com/photo-1726066012801-14d892021339",
    imageAlt: "Person using smartphone for online shopping with product images and payment interface visible on screen",
    description: `Created a feature-rich mobile e-commerce application with advanced personalization, AR product visualization, and seamless payment integration.\n\nThe app delivers exceptional user experience with AI-driven recommendations and social commerce features.`,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
    keyMetrics: [
    { label: "User Engagement", value: "+150%" },
    { label: "Conversion Rate", value: "12.5%" },
    { label: "App Store Rating", value: "4.8/5" },
    { label: "Revenue Growth", value: "+200%" }],

    duration: "5 months",
    status: "Completed",
    completedDate: "2024-07-10"
  },
  {
    id: 4,
    title: "Cloud Migration & DevOps",
    client: "Enterprise Tech Ltd",
    industry: "Technology",
    type: "Cloud Infrastructure",
    image: "https://images.unsplash.com/photo-1577385079498-710ba72c9c3d",
    imageAlt: "Data center with servers and cloud infrastructure visualization showing network connections and data flow",
    description: `Executed complete cloud migration strategy with automated CI/CD pipelines, containerization, and microservices architecture.\n\nImplemented robust DevOps practices that improved deployment frequency and reduced system downtime significantly.`,
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Monitoring"],
    keyMetrics: [
    { label: "Uptime", value: "99.9%" },
    { label: "Deployment Speed", value: "10x faster" },
    { label: "Cost Savings", value: "45%" },
    { label: "Scalability", value: "500% improved" }],

    duration: "4 months",
    status: "Completed",
    completedDate: "2024-06-25"
  },
  {
    id: 5,
    title: "IoT Smart City Platform",
    client: "Urban Development Authority",
    industry: "Government",
    type: "IoT Development",
    image: "https://images.unsplash.com/photo-1544507264-325c4e284718",
    imageAlt: "Smart city infrastructure with connected traffic lights, sensors, and digital displays showing real-time urban data",
    description: `Developed an integrated IoT platform for smart city management including traffic optimization, environmental monitoring, and public safety systems.\n\nThe platform processes millions of sensor data points to improve urban living quality and resource efficiency.`,
    technologies: ["IoT", "Python", "React", "InfluxDB", "MQTT", "Azure"],
    keyMetrics: [
    { label: "Sensors Connected", value: "10,000+" },
    { label: "Traffic Efficiency", value: "+40%" },
    { label: "Energy Savings", value: "30%" },
    { label: "Response Time", value: "85% faster" }],

    duration: "12 months",
    status: "In Progress",
    completedDate: null
  },
  {
    id: 6,
    title: "Financial Trading Platform",
    client: "InvestPro Financial",
    industry: "Finance",
    type: "Web Development",
    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    imageAlt: "Professional trader analyzing financial charts and data on multiple computer monitors in modern trading office",
    description: `Built a high-performance financial trading platform with real-time market data, advanced analytics, and automated trading capabilities.\n\nThe platform handles millions of transactions with microsecond latency and provides sophisticated risk management tools.`,
    technologies: ["React", "Node.js", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    keyMetrics: [
    { label: "Transaction Speed", value: "<1ms" },
    { label: "Uptime", value: "99.99%" },
    { label: "User Growth", value: "+300%" },
    { label: "Trading Volume", value: "$2B+" }],

    duration: "7 months",
    status: "Completed",
    completedDate: "2024-05-15"
  }];


  // Mock data for client testimonials
  const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "CTO",
    company: "MedTech Solutions Inc.",
    project: "AI-Powered Healthcare Platform",
    avatar: "https://images.unsplash.com/photo-1734821375517-ca34fbe8089d",
    avatarAlt: "Professional headshot of middle-aged woman with brown hair in white medical coat smiling at camera",
    content: `Neno Technology transformed our healthcare delivery with their AI platform. The 94% diagnostic accuracy and seamless integration exceeded all expectations. Their technical expertise and understanding of healthcare workflows made them the perfect partner for our digital transformation journey.`
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "VP of Operations",
    company: "Global Logistics Corp",
    project: "Blockchain Supply Chain Solution",
    avatar: "https://images.unsplash.com/photo-1599182002081-60947de0356b",
    avatarAlt: "Professional headshot of Asian man in navy business suit with confident smile in office setting",
    content: `The blockchain solution delivered unprecedented transparency in our supply chain. We achieved 89% fraud reduction and complete product traceability. Neno Technology's deep understanding of blockchain technology and logistics made this complex project a remarkable success.`
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Head of Digital",
    company: "RetailMax Solutions",
    project: "E-commerce Mobile App",
    avatar: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
    avatarAlt: "Professional headshot of Hispanic woman with long dark hair in blue blazer smiling confidently",
    content: `Our mobile app transformed customer engagement with 150% increased user interaction and 200% revenue growth. The AR features and AI recommendations created an exceptional shopping experience. Neno Technology's innovative approach exceeded our ambitious goals.`
  }];


  // Mock data for technology showcase
  const technologies = [
  {
    category: "Frontend",
    projectCount: 45,
    tools: [
    { name: "React", proficiency: 5 },
    { name: "Vue.js", proficiency: 4 },
    { name: "Angular", proficiency: 4 },
    { name: "TypeScript", proficiency: 5 }]

  },
  {
    category: "Backend",
    projectCount: 52,
    tools: [
    { name: "Node.js", proficiency: 5 },
    { name: "Python", proficiency: 5 },
    { name: "Java", proficiency: 4 },
    { name: "Go", proficiency: 3 }]

  },
  {
    category: "Database",
    projectCount: 38,
    tools: [
    { name: "PostgreSQL", proficiency: 5 },
    { name: "MongoDB", proficiency: 4 },
    { name: "Redis", proficiency: 4 },
    { name: "InfluxDB", proficiency: 3 }]

  },
  {
    category: "Cloud",
    projectCount: 41,
    tools: [
    { name: "AWS", proficiency: 5 },
    { name: "Azure", proficiency: 4 },
    { name: "GCP", proficiency: 4 },
    { name: "Docker", proficiency: 5 }]

  },
  {
    category: "Mobile",
    projectCount: 28,
    tools: [
    { name: "React Native", proficiency: 5 },
    { name: "Flutter", proficiency: 4 },
    { name: "Swift", proficiency: 3 },
    { name: "Kotlin", proficiency: 3 }]

  },
  {
    category: "AI/ML",
    projectCount: 22,
    tools: [
    { name: "TensorFlow", proficiency: 4 },
    { name: "PyTorch", proficiency: 4 },
    { name: "Scikit-learn", proficiency: 5 },
    { name: "OpenAI", proficiency: 4 }]

  },
  {
    category: "DevOps",
    projectCount: 35,
    tools: [
    { name: "Kubernetes", proficiency: 4 },
    { name: "Jenkins", proficiency: 4 },
    { name: "Terraform", proficiency: 4 },
    { name: "Monitoring", proficiency: 5 }]

  },
  {
    category: "Blockchain",
    projectCount: 15,
    tools: [
    { name: "Solidity", proficiency: 4 },
    { name: "Ethereum", proficiency: 4 },
    { name: "Web3", proficiency: 4 },
    { name: "IPFS", proficiency: 3 }]

  }];


  // Filter configuration
  const filters = {
    industries: [...new Set(projects.map((p) => p.industry))],
    technologies: [...new Set(projects.flatMap((p) => p.technologies))],
    types: [...new Set(projects.map((p) => p.type))]
  };

  // Filter projects based on active filters
  useEffect(() => {
    let filtered = projects;

    Object.entries(activeFilters)?.forEach(([category, values]) => {
      if (values?.length > 0) {
        filtered = filtered?.filter((project) => {
          if (category === 'industry') return values?.includes(project?.industry);
          if (category === 'type') return values?.includes(project?.type);
          if (category === 'technology') {
            return values?.some((tech) => project?.technologies?.includes(tech));
          }
          return true;
        });
      }
    });

    setFilteredProjects(filtered);
  }, [activeFilters]);

  // Initialize filtered projects
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const handleFilterChange = (category, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev?.[category]?.includes(value) ?
      prev?.[category]?.filter((item) => item !== value) :
      [...prev?.[category], value]
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      industry: [],
      technology: [],
      type: []
    });
  };

  const handleViewDetails = (project) => {
    // Navigate to individual case study page
    window.location.href = `/individual-case-study-pages?project=${project?.id}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Icon name="Briefcase" size={16} />
              <span>Our Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Proven Success Stories &
              <span className="text-brand-gradient block">Technical Excellence</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of successful projects spanning AI implementation, 
              blockchain development, cloud transformation, and digital innovation across diverse industries.
            </p>
          </div>

          {/* Portfolio Metrics */}
          <MetricsOverview metrics={portfolioMetrics} />
        </div>
      </section>
      {/* Filter and Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <FilterSection
            filters={filters}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects?.length} />


          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects?.map((project) =>
            <ProjectCard
              key={project?.id}
              project={project}
              onViewDetails={handleViewDetails} />

            )}
          </div>

          {/* No Results Message */}
          {filteredProjects?.length === 0 &&
          <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} className="text-text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                No Projects Found
              </h3>
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                No projects match your current filter criteria. Try adjusting your filters or clearing them to see all projects.
              </p>
              <Button
              variant="outline"
              onClick={handleClearFilters}
              iconName="RefreshCw"
              iconPosition="left"
              iconSize={16}>

                Clear All Filters
              </Button>
            </div>
          }
        </div>
      </section>
      {/* Technology Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechnologyShowcase technologies={technologies} />
        </div>
      </section>
      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSection testimonials={testimonials} />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Rocket" size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven expertise and innovative approach can transform your business challenges into success stories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}>

              Schedule Consultation
            </Button>
            
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}>

                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-xl font-bold">Neno Technology</span>
                  <p className="text-sm text-secondary-foreground/70">Intelligent Solutions</p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 mb-4 max-w-md">
                Transforming businesses through innovative technology solutions, AI implementation, and digital transformation expertise.
              </p>
              <div className="flex space-x-4">
                {['Linkedin', 'Twitter', 'Github', 'Mail']?.map((social) =>
                <button
                  key={social}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">

                    <Icon name={social} size={18} className="text-secondary-foreground" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Case Studies', path: '/individual-case-study-pages' }]?.
                map((link) =>
                <li key={link?.name}>
                    <Link
                    to={link?.path}
                    className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-300">

                      {link?.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-secondary-foreground/70" />
                  <span className="text-secondary-foreground/70">hello@nenotech.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-secondary-foreground/70" />
                  <span className="text-secondary-foreground/70">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-secondary-foreground/70" />
                  <span className="text-secondary-foreground/70">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-secondary-foreground/60">
              © {new Date()?.getFullYear()} Neno Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default Portfolio;