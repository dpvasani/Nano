import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceOverview from './components/ServiceOverview';
import ProcessMethodology from './components/ProcessMethodology';
import CaseStudyIntegration from './components/CaseStudyIntegration';
import TestimonialsSection from './components/TestimonialsSection';
import ServiceFAQ from './components/ServiceFAQ';
import RelatedServices from './components/RelatedServices';
import QuoteRequestForm from './components/QuoteRequestForm';

const IndividualServicePages = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock service data - In real app, this would come from API based on serviceId
  const serviceData = {
    id: "ai-ml-development",
    name: "AI & Machine Learning Development",
    category: "Artificial Intelligence",
    icon: "Brain",
    heroDescription: "Transform your business with cutting-edge AI and machine learning solutions. From predictive analytics to intelligent automation, we build custom AI systems that drive innovation and competitive advantage.",
    heroImage: "https://images.unsplash.com/photo-1621926442743-11916d40c022",
    heroImageAlt: "Modern AI development workspace with multiple monitors displaying machine learning algorithms and data visualizations",

    stats: {
      projects: 150,
      clients: 85,
      satisfaction: 98
    },

    detailedDescription: "Our AI & Machine Learning Development service combines deep technical expertise with industry knowledge to create intelligent solutions that solve real business problems. We specialize in developing custom machine learning models, neural networks, and AI-powered applications that can process vast amounts of data, recognize patterns, and make intelligent decisions.",

    additionalDescription: "From natural language processing and computer vision to predictive analytics and recommendation systems, our team leverages the latest AI technologies including TensorFlow, PyTorch, and cloud-based ML platforms to deliver scalable, production-ready solutions that integrate seamlessly with your existing infrastructure.",

    benefits: [
    {
      title: "Automated Decision Making",
      description: "Reduce manual processes and human error with intelligent automation systems that make data-driven decisions in real-time."
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends, identify opportunities, and mitigate risks with advanced predictive models trained on your historical data."
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deliver personalized experiences through recommendation engines, chatbots, and intelligent user interfaces."
    },
    {
      title: "Operational Efficiency",
      description: "Optimize processes, reduce costs, and improve productivity with AI-powered workflow automation and resource allocation."
    },
    {
      title: "Competitive Intelligence",
      description: "Gain market insights and competitive advantages through advanced data analysis and pattern recognition."
    },
    {
      title: "Scalable Solutions",
      description: "Build AI systems that grow with your business, handling increasing data volumes and complexity over time."
    }],


    keyFeatures: [
    "Custom ML Model Development",
    "Neural Network Architecture",
    "Real-time Data Processing",
    "Cloud-native Deployment",
    "API Integration",
    "Performance Monitoring"],


    duration: "3-8 months",
    teamSize: "4-8 experts",
    deliveryModel: "Agile/Scrum",
    support: "24/7 monitoring",
    averageDuration: "5.5 months",
    teamInvolvement: "6 specialists",
    successRate: 96,

    technologies: [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV",
    "AWS SageMaker", "Google Cloud AI", "Azure ML", "Docker", "Kubernetes",
    "Apache Spark", "Jupyter", "MLflow", "Pandas", "NumPy"],


    methodology: [
    {
      title: "Discovery & Analysis",
      description: "Comprehensive analysis of your data, business requirements, and AI opportunities to define project scope and success metrics.",
      icon: "Search",
      duration: "2-3 weeks",
      deliverables: ["Data audit", "Requirements doc", "Technical roadmap"]
    },
    {
      title: "Data Preparation",
      description: "Clean, process, and structure your data for optimal machine learning performance with feature engineering and validation.",
      icon: "Database",
      duration: "3-4 weeks",
      deliverables: ["Clean datasets", "Feature pipeline", "Data validation"]
    },
    {
      title: "Model Development",
      description: "Design, train, and optimize machine learning models using advanced algorithms and techniques tailored to your specific use case.",
      icon: "Cpu",
      duration: "6-10 weeks",
      deliverables: ["Trained models", "Performance metrics", "Model documentation"]
    },
    {
      title: "Deployment & Integration",
      description: "Deploy models to production environments with proper monitoring, scaling, and integration with existing systems.",
      icon: "Rocket",
      duration: "2-4 weeks",
      deliverables: ["Production deployment", "API endpoints", "Monitoring setup"]
    }],


    featuredCaseStudy: {
      title: "E-commerce Recommendation Engine Transformation",
      description: "Developed an advanced AI-powered recommendation system that increased customer engagement by 340% and boosted revenue by $2.3M annually for a leading e-commerce platform.",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1733232679107-9c9957c1affa",
      imageAlt: "Modern e-commerce dashboard showing AI-powered product recommendations and customer analytics",
      results: [
      { value: "340%", metric: "Engagement Increase" },
      { value: "$2.3M", metric: "Annual Revenue Boost" },
      { value: "85%", metric: "Accuracy Rate" }]

    },

    relatedCaseStudies: [
    {
      title: "Healthcare Diagnostic AI System",
      summary: "Built an AI system for medical image analysis that improved diagnostic accuracy by 45% and reduced analysis time from hours to minutes.",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684",
      imageAlt: "Medical professional using AI-powered diagnostic system on tablet in modern hospital setting",
      technologies: ["TensorFlow", "OpenCV", "Python", "AWS"],
      keyResult: { value: "45%", metric: "Accuracy Improvement" },
      duration: "6 months"
    },
    {
      title: "Financial Fraud Detection Platform",
      summary: "Implemented real-time fraud detection using machine learning that reduced false positives by 60% while maintaining 99.2% accuracy.",
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1724833256463-26b199dc1b69",
      imageAlt: "Financial analyst monitoring fraud detection dashboard with real-time alerts and security metrics",
      technologies: ["PyTorch", "Apache Kafka", "Redis", "Docker"],
      keyResult: { value: "60%", metric: "False Positive Reduction" },
      duration: "4 months"
    },
    {
      title: "Supply Chain Optimization AI",
      summary: "Developed predictive analytics for inventory management that reduced costs by 25% and improved delivery times by 30%.",
      industry: "Logistics",
      image: "https://images.unsplash.com/photo-1678132021968-68cd9d5339ac",
      imageAlt: "Warehouse manager using AI-powered supply chain optimization system on digital tablet",
      technologies: ["Scikit-learn", "Pandas", "Azure ML", "Power BI"],
      keyResult: { value: "25%", metric: "Cost Reduction" },
      duration: "5 months"
    }],


    testimonials: [
    {
      quote: "The AI solution Neno Technology developed for us has completely transformed our customer experience. The recommendation engine they built increased our conversion rates by over 300% and our customers love the personalized shopping experience.",
      name: "Sarah Chen",
      position: "Chief Technology Officer",
      company: "TechMart Solutions",
      avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868",
      avatarAlt: "Professional headshot of Asian woman with shoulder-length black hair in navy business suit",
      companyLogo: "https://via.placeholder.com/120x40/2563eb/ffffff?text=TechMart",
      companyLogoAlt: "TechMart Solutions company logo in blue and white",
      industry: "E-commerce Technology",
      projectStats: {
        duration: "6 months",
        improvement: "300%"
      }
    },
    {
      quote: "Working with Neno Technology on our fraud detection system was exceptional. Their deep understanding of machine learning and financial regulations resulted in a solution that\'s both highly accurate and compliant with industry standards.",
      name: "Michael Rodriguez",
      position: "VP of Risk Management",
      company: "SecureBank Corp",
      avatar: "https://images.unsplash.com/photo-1724128195747-dd25cba7860f",
      avatarAlt: "Professional headshot of Hispanic man with short black hair in navy suit and tie",
      companyLogo: "https://via.placeholder.com/120x40/059669/ffffff?text=SecureBank",
      companyLogoAlt: "SecureBank Corp company logo in green and white",
      industry: "Financial Services",
      projectStats: {
        duration: "4 months",
        improvement: "60%"
      }
    },
    {
      quote: "The predictive analytics platform they developed has given us unprecedented visibility into our supply chain. We can now anticipate demand fluctuations and optimize our inventory with remarkable accuracy.",
      name: "Jennifer Walsh",
      position: "Operations Director",
      company: "GlobalLogistics Inc",
      avatar: "https://images.unsplash.com/photo-1654727169791-7f46d0dfc1a3",
      avatarAlt: "Professional headshot of Caucasian woman with blonde hair in gray business blazer",
      companyLogo: "https://via.placeholder.com/120x40/7c3aed/ffffff?text=GlobalLogistics",
      companyLogoAlt: "GlobalLogistics Inc company logo in purple and white",
      industry: "Supply Chain & Logistics",
      projectStats: {
        duration: "5 months",
        improvement: "25%"
      }
    }],


    clientLogos: [
    {
      logo: "https://via.placeholder.com/100x40/374151/ffffff?text=TechCorp",
      logoAlt: "TechCorp company logo"
    },
    {
      logo: "https://via.placeholder.com/100x40/1f2937/ffffff?text=InnovateLab",
      logoAlt: "InnovateLab company logo"
    },
    {
      logo: "https://via.placeholder.com/100x40/4b5563/ffffff?text=DataSys",
      logoAlt: "DataSys company logo"
    },
    {
      logo: "https://via.placeholder.com/100x40/6b7280/ffffff?text=CloudTech",
      logoAlt: "CloudTech company logo"
    },
    {
      logo: "https://via.placeholder.com/100x40/9ca3af/ffffff?text=AIVentures",
      logoAlt: "AIVentures company logo"
    },
    {
      logo: "https://via.placeholder.com/100x40/d1d5db/000000?text=SmartSolutions",
      logoAlt: "SmartSolutions company logo"
    }],


    clientStats: [
    {
      icon: "TrendingUp",
      value: "340%",
      label: "Average ROI Increase"
    },
    {
      icon: "Clock",
      value: "75%",
      label: "Time Savings"
    },
    {
      icon: "Shield",
      value: "99.2%",
      label: "Accuracy Rate"
    },
    {
      icon: "Users",
      value: "85+",
      label: "Satisfied Clients"
    }],


    faqs: [
    {
      question: "What types of AI and ML solutions do you develop?",
      answer: "We develop a wide range of AI and ML solutions including predictive analytics, natural language processing, computer vision, recommendation systems, chatbots, fraud detection, and automated decision-making systems. Our expertise spans supervised and unsupervised learning, deep learning, and reinforcement learning approaches.",
      additionalInfo: "Each solution is custom-built to address your specific business challenges and integrate seamlessly with your existing infrastructure."
    },
    {
      question: "How do you ensure the quality and accuracy of AI models?",
      answer: "We follow rigorous testing and validation processes including cross-validation, A/B testing, and continuous monitoring. Our models undergo extensive training with diverse datasets, and we implement robust evaluation metrics to ensure high accuracy and reliability in production environments.",
      additionalInfo: "We also provide ongoing model maintenance and retraining services to maintain optimal performance as your data evolves."
    },
    {
      question: "What data requirements are needed for AI development?",
      answer: "Data requirements vary by project, but generally we need sufficient, high-quality, and relevant data for training. We can work with structured and unstructured data from various sources. Our team also provides data cleaning, preprocessing, and augmentation services to optimize your datasets for machine learning.",
      additionalInfo: "We can also help you develop data collection strategies if you need to gather additional data for your AI project."
    },
    {
      question: "How long does it typically take to develop an AI solution?",
      answer: "Development timelines vary based on project complexity, data availability, and requirements. Simple models may take 2-3 months, while complex enterprise solutions can take 6-12 months. We provide detailed project timelines during the discovery phase and maintain transparent communication throughout development.",
      additionalInfo: "We use agile development methodologies to deliver working prototypes early and iterate based on your feedback."
    },
    {
      question: "Do you provide ongoing support and maintenance for AI systems?",
      answer: "Yes, we offer comprehensive support including model monitoring, performance optimization, retraining services, and technical support. Our maintenance packages ensure your AI systems continue to perform optimally as your business grows and data patterns evolve.",
      additionalInfo: "We also provide training for your team to help them understand and effectively use the AI solutions we develop."
    }],


    relatedServices: [
    {
      name: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights with advanced analytics, interactive dashboards, and comprehensive reporting solutions.",
      category: "Data Science",
      icon: "BarChart3",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
      imageAlt: "Data analyst working with multiple screens showing colorful charts and analytics dashboards",
      keyFeatures: ["Interactive Dashboards", "Real-time Analytics", "Custom Reports"],
      stats: { projects: 120, satisfaction: 95 }
    },
    {
      name: "Cloud Infrastructure Solutions",
      description: "Scalable, secure, and cost-effective cloud infrastructure designed to support your AI and ML workloads with optimal performance.",
      category: "Cloud Services",
      icon: "Cloud",
      image: "https://images.unsplash.com/photo-1577385079498-710ba72c9c3d",
      imageAlt: "Modern data center with servers and cloud infrastructure visualization overlay",
      keyFeatures: ["Auto-scaling", "Security Compliance", "Cost Optimization"],
      stats: { projects: 200, satisfaction: 97 }
    },
    {
      name: "API Development & Integration",
      description: "Robust API solutions that enable seamless integration of AI capabilities with your existing systems and third-party applications.",
      category: "Integration",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1607266424522-ccef52eb95ac",
      imageAlt: "Software developer coding API integrations on laptop with multiple code windows open",
      keyFeatures: ["RESTful APIs", "Real-time Integration", "Documentation"],
      stats: { projects: 180, satisfaction: 94 }
    }],


    serviceRequirements: [
    {
      name: "Data Preprocessing & Cleaning",
      description: "Comprehensive data preparation and quality assurance"
    },
    {
      name: "Custom Model Development",
      description: "Tailored machine learning models for your specific use case"
    },
    {
      name: "Real-time Processing",
      description: "Low-latency inference for real-time applications"
    },
    {
      name: "Cloud Deployment",
      description: "Scalable cloud infrastructure for model hosting"
    },
    {
      name: "API Integration",
      description: "RESTful APIs for seamless system integration"
    },
    {
      name: "Performance Monitoring",
      description: "Continuous monitoring and optimization tools"
    },
    {
      name: "Model Retraining",
      description: "Automated retraining pipelines for model updates"
    },
    {
      name: "Documentation & Training",
      description: "Comprehensive documentation and team training"
    }]

  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        <ServiceHero service={serviceData} />
        <ServiceOverview service={serviceData} />
        <ProcessMethodology service={serviceData} />
        <CaseStudyIntegration service={serviceData} />
        <TestimonialsSection service={serviceData} />
        <ServiceFAQ service={serviceData} />
        <RelatedServices service={serviceData} />
        <QuoteRequestForm service={serviceData} />
      </main>
    </div>);

};

export default IndividualServicePages;