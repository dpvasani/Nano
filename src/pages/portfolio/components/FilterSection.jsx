import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterSection = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearFilters,
  projectCount 
}) => {
  const filterCategories = [
    {
      key: 'industry',
      label: 'Industry',
      icon: 'Building',
      options: filters?.industries
    },
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code',
      options: filters?.technologies
    },
    {
      key: 'type',
      label: 'Project Type',
      icon: 'Layers',
      options: filters?.types
    }
  ];

  const hasActiveFilters = Object.values(activeFilters)?.some(arr => arr?.length > 0);

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
            <p className="text-sm text-text-secondary">
              {projectCount} projects found
            </p>
          </div>
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
            className="text-text-secondary hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>
      {/* Filter Categories */}
      <div className="space-y-6">
        {filterCategories?.map((category) => (
          <div key={category?.key}>
            <div className="flex items-center space-x-2 mb-3">
              <Icon 
                name={category?.icon} 
                size={16} 
                className="text-primary" 
              />
              <h4 className="text-sm font-semibold text-foreground">
                {category?.label}
              </h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category?.options?.map((option) => {
                const isActive = activeFilters?.[category?.key]?.includes(option);
                
                return (
                  <button
                    key={option}
                    onClick={() => onFilterChange(category?.key, option)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm font-semibold text-foreground">Active Filters</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([category, values]) =>
              values?.map((value) => (
                <div
                  key={`${category}-${value}`}
                  className="flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                >
                  <span>{value}</span>
                  <button
                    onClick={() => onFilterChange(category, value)}
                    className="hover:bg-primary/20 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;