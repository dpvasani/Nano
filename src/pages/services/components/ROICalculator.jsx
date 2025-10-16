import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    projectSize: '',
    currentRevenue: '',
    teamSize: '',
    timeframe: ''
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'ai-solutions', label: 'AI Solutions' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'digital-transformation', label: 'Digital Transformation' }
  ];

  const projectSizeOptions = [
    { value: 'small', label: 'Small (1-3 months)' },
    { value: 'medium', label: 'Medium (3-6 months)' },
    { value: 'large', label: 'Large (6-12 months)' },
    { value: 'enterprise', label: 'Enterprise (12+ months)' }
  ];

  const timeframeOptions = [
    { value: '6', label: '6 months' },
    { value: '12', label: '1 year' },
    { value: '24', label: '2 years' },
    { value: '36', label: '3 years' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const baseMultipliers = {
        'web-development': 2.5,
        'mobile-development': 3.2,
        'ai-solutions': 4.8,
        'cloud-solutions': 3.5,
        'digital-transformation': 5.2
      };

      const sizeMultipliers = {
        'small': 1.0,
        'medium': 1.3,
        'large': 1.8,
        'enterprise': 2.5
      };

      const revenue = parseFloat(formData?.currentRevenue) || 0;
      const timeframe = parseInt(formData?.timeframe) || 12;
      const baseMultiplier = baseMultipliers?.[formData?.serviceType] || 2.0;
      const sizeMultiplier = sizeMultipliers?.[formData?.projectSize] || 1.0;

      const projectedIncrease = revenue * baseMultiplier * sizeMultiplier * (timeframe / 12);
      const investmentCost = projectedIncrease * 0.15; // Assume 15% of projected increase as investment
      const netGain = projectedIncrease - investmentCost;
      const roiPercentage = ((netGain / investmentCost) * 100);

      setResults({
        projectedIncrease: projectedIncrease?.toFixed(0),
        investmentCost: investmentCost?.toFixed(0),
        netGain: netGain?.toFixed(0),
        roiPercentage: roiPercentage?.toFixed(1),
        paybackPeriod: Math.ceil((investmentCost / (projectedIncrease / timeframe)) * 100) / 100
      });

      setIsCalculating(false);
    }, 2000);
  };

  const isFormValid = formData?.serviceType && formData?.projectSize && formData?.currentRevenue && formData?.timeframe;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} />
            <span>ROI Calculator</span>
          </div>
          <h2 className="headline-secondary mb-4">
            Calculate Your Return on Investment
          </h2>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Get instant insights into the potential ROI of your technology investment. 
            Our calculator uses industry benchmarks and proven methodologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Project Details
              </h3>
              
              <div className="space-y-6">
                <Select
                  label="Service Type"
                  placeholder="Select a service"
                  options={serviceOptions}
                  value={formData?.serviceType}
                  onChange={(value) => handleInputChange('serviceType', value)}
                  required
                />

                <Select
                  label="Project Size"
                  placeholder="Select project size"
                  options={projectSizeOptions}
                  value={formData?.projectSize}
                  onChange={(value) => handleInputChange('projectSize', value)}
                  required
                />

                <Input
                  label="Current Annual Revenue"
                  type="number"
                  placeholder="Enter current revenue"
                  value={formData?.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', e?.target?.value)}
                  description="Your current annual revenue in USD"
                  required
                />

                <Input
                  label="Team Size"
                  type="number"
                  placeholder="Number of team members"
                  value={formData?.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e?.target?.value)}
                  description="Size of your development team"
                />

                <Select
                  label="ROI Timeframe"
                  placeholder="Select timeframe"
                  options={timeframeOptions}
                  value={formData?.timeframe}
                  onChange={(value) => handleInputChange('timeframe', value)}
                  required
                />

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={calculateROI}
                  disabled={!isFormValid}
                  loading={isCalculating}
                  className="bg-cta hover:bg-cta/90 text-cta-foreground"
                  iconName="Calculator"
                  iconPosition="left"
                >
                  {isCalculating ? 'Calculating...' : 'Calculate ROI'}
                </Button>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                ROI Projection
              </h3>

              {!results ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="BarChart3" size={32} className="text-text-secondary" />
                  </div>
                  <p className="text-text-secondary">
                    Fill out the form to see your ROI projection
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* ROI Percentage */}
                  <div className="text-center p-6 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-4xl font-bold text-success mb-2">
                      {results?.roiPercentage}%
                    </div>
                    <div className="text-sm text-success font-medium">
                      Projected ROI
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface rounded-lg border">
                      <div className="text-2xl font-bold text-primary mb-1">
                        ${parseInt(results?.projectedIncrease)?.toLocaleString()}
                      </div>
                      <div className="text-sm text-text-secondary">
                        Revenue Increase
                      </div>
                    </div>
                    <div className="p-4 bg-surface rounded-lg border">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        ${parseInt(results?.investmentCost)?.toLocaleString()}
                      </div>
                      <div className="text-sm text-text-secondary">
                        Investment Cost
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface rounded-lg border">
                      <div className="text-2xl font-bold text-success mb-1">
                        ${parseInt(results?.netGain)?.toLocaleString()}
                      </div>
                      <div className="text-sm text-text-secondary">
                        Net Gain
                      </div>
                    </div>
                    <div className="p-4 bg-surface rounded-lg border">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {results?.paybackPeriod} mo
                      </div>
                      <div className="text-sm text-text-secondary">
                        Payback Period
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Schedule Strategy Call
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download Report
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;