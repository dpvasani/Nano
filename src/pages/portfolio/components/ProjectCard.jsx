import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getTechnologyIcon = (tech) => {
    const iconMap = {
      'React': 'Code',
      'Node.js': 'Server',
      'Python': 'Terminal',
      'AI/ML': 'Brain',
      'Cloud': 'Cloud',
      'Mobile': 'Smartphone',
      'Blockchain': 'Link',
      'IoT': 'Wifi'
    };
    return iconMap?.[tech] || 'Code';
  };

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-500 hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
            {project?.industry}
          </span>
        </div>

        {/* Project Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full backdrop-blur-sm">
            {project?.type}
          </span>
        </div>

        {/* View Details Button - Appears on Hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button
            variant="default"
            size="sm"
            fullWidth
            className="bg-background/90 text-foreground hover:bg-background backdrop-blur-sm"
            iconName="ExternalLink"
            iconPosition="right"
            iconSize={16}
            onClick={() => onViewDetails(project)}
          >
            View Case Study
          </Button>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Project Title & Client */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {project?.title}
          </h3>
          <p className="text-sm text-text-secondary font-medium">
            Client: {project?.client}
          </p>
        </div>

        {/* Project Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 px-2 py-1 bg-muted rounded-md text-xs font-medium text-text-secondary"
              >
                <Icon 
                  name={getTechnologyIcon(tech)} 
                  size={12} 
                  className="text-primary"
                />
                <span>{tech}</span>
              </div>
            ))}
            {project?.technologies?.length > 4 && (
              <div className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-text-secondary">
                +{project?.technologies?.length - 4} more
              </div>
            )}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {project?.keyMetrics?.slice(0, 2)?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-primary">
                {metric?.value}
              </div>
              <div className="text-xs text-text-secondary">
                {metric?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Duration & Status */}
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{project?.duration}</span>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            project?.status === 'Completed' 
              ? 'bg-success/10 text-success' 
              : project?.status === 'In Progress' ?'bg-warning/10 text-warning' :'bg-muted text-text-secondary'
          }`}>
            {project?.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;