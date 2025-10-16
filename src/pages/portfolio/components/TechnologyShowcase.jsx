import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyShowcase = ({ technologies }) => {
  const getTechIcon = (category) => {
    const iconMap = {
      'Frontend': 'Monitor',
      'Backend': 'Server',
      'Database': 'Database',
      'Cloud': 'Cloud',
      'Mobile': 'Smartphone',
      'AI/ML': 'Brain',
      'DevOps': 'Settings',
      'Blockchain': 'Link'
    };
    return iconMap?.[category] || 'Code';
  };

  const getTechColor = (category) => {
    const colorMap = {
      'Frontend': 'text-blue-600',
      'Backend': 'text-green-600',
      'Database': 'text-purple-600',
      'Cloud': 'text-orange-600',
      'Mobile': 'text-pink-600',
      'AI/ML': 'text-red-600',
      'DevOps': 'text-yellow-600',
      'Blockchain': 'text-indigo-600'
    };
    return colorMap?.[category] || 'text-primary';
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Technology Expertise
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our comprehensive technology stack enables us to deliver cutting-edge solutions across various domains
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies?.map((tech, index) => (
          <div
            key={index}
            className="group bg-background border border-border rounded-xl p-6 hover:shadow-brand transition-all duration-300 hover:-translate-y-1"
          >
            {/* Category Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-muted group-hover:bg-primary/10 transition-colors duration-300`}>
                <Icon 
                  name={getTechIcon(tech?.category)} 
                  size={20} 
                  className={`${getTechColor(tech?.category)} group-hover:text-primary transition-colors duration-300`}
                />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech?.category}
                </h3>
                <p className="text-xs text-text-secondary">
                  {tech?.tools?.length} technologies
                </p>
              </div>
            </div>

            {/* Technology List */}
            <div className="space-y-2">
              {tech?.tools?.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="flex items-center justify-between p-2 rounded-lg bg-muted/50 group-hover:bg-primary/5 transition-colors duration-300"
                >
                  <span className="text-sm font-medium text-foreground">
                    {tool?.name}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, starIndex) => (
                      <Icon
                        key={starIndex}
                        name="Star"
                        size={12}
                        className={`${
                          starIndex < tool?.proficiency
                            ? 'text-yellow-400 fill-current' :'text-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Projects Count */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Projects completed</span>
                <span className="font-semibold text-primary">
                  {tech?.projectCount}+
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyShowcase;