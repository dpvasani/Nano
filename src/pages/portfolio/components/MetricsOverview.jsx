import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = ({ metrics }) => {
  const getMetricIcon = (type) => {
    const iconMap = {
      'projects': 'Briefcase',
      'clients': 'Users',
      'success': 'TrendingUp',
      'technologies': 'Code',
      'industries': 'Building',
      'years': 'Calendar'
    };
    return iconMap?.[type] || 'BarChart';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
      {metrics?.map((metric, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-brand transition-shadow duration-300"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon 
              name={getMetricIcon(metric?.type)} 
              size={24} 
              className="text-primary" 
            />
          </div>
          
          <div className="text-2xl font-bold text-foreground mb-1">
            {metric?.value}
          </div>
          
          <div className="text-sm text-text-secondary font-medium">
            {metric?.label}
          </div>
          
          {metric?.growth && (
            <div className="flex items-center justify-center space-x-1 mt-2">
              <Icon 
                name="TrendingUp" 
                size={12} 
                className="text-success" 
              />
              <span className="text-xs text-success font-medium">
                +{metric?.growth}%
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;