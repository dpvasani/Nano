import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const QuoteRequestForm = ({ service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: [],
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: 'new-project', label: 'New Project Development' },
    { value: 'enhancement', label: 'Existing System Enhancement' },
    { value: 'migration', label: 'System Migration' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'maintenance', label: 'Ongoing Maintenance' }
  ];

  const budgetRanges = [
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k+', label: '$250,000+' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-3months', label: '1-3 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6-12months', label: '6-12 Months' },
    { value: '12months+', label: '12+ Months' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRequirementChange = (requirement, checked) => {
    setFormData(prev => ({
      ...prev,
      requirements: checked
        ? [...prev?.requirements, requirement]
        : prev?.requirements?.filter(req => req !== requirement)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.company?.trim()) newErrors.company = 'Company is required';
    if (!formData?.projectType) newErrors.projectType = 'Project type is required';
    if (!formData?.description?.trim()) newErrors.description = 'Project description is required';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Quote request submitted successfully! Our team will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
      requirements: [],
      newsletter: false
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Request Custom Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a personalized quote for your {service?.name?.toLowerCase()} project. Our experts will analyze your requirements and provide detailed pricing.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Icon name="User" size={20} className="mr-2 text-blue-600" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  error={errors?.name}
                  required
                  placeholder="Enter your full name"
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  error={errors?.email}
                  required
                  placeholder="your.email@company.com"
                />
                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  error={errors?.company}
                  required
                  placeholder="Your company name"
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Icon name="Briefcase" size={20} className="mr-2 text-blue-600" />
                Project Details
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Select
                  label="Project Type"
                  options={projectTypes}
                  value={formData?.projectType}
                  onChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
                  error={errors?.projectType}
                  required
                  placeholder="Select project type"
                />
                <Select
                  label="Budget Range"
                  options={budgetRanges}
                  value={formData?.budget}
                  onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  placeholder="Select budget range"
                />
                <Select
                  label="Timeline"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                  placeholder="Select timeline"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData?.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your project requirements, goals, and any specific technical needs..."
                />
                {errors?.description && (
                  <p className="mt-1 text-sm text-red-600">{errors?.description}</p>
                )}
              </div>
            </div>

            {/* Service Requirements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Icon name="CheckSquare" size={20} className="mr-2 text-blue-600" />
                Service Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service?.serviceRequirements?.map((requirement, index) => (
                  <Checkbox
                    key={index}
                    label={requirement?.name}
                    description={requirement?.description}
                    checked={formData?.requirements?.includes(requirement?.name)}
                    onChange={(e) => handleRequirementChange(requirement?.name, e?.target?.checked)}
                  />
                ))}
              </div>
            </div>

            {/* Additional Options */}
            <div className="border-t border-gray-200 pt-8">
              <Checkbox
                label="Subscribe to our newsletter"
                description="Get updates on technology trends and our latest insights"
                name="newsletter"
                checked={formData?.newsletter}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 flex-1"
                iconName="Send"
                iconPosition="left"
              >
                {isSubmitting ? 'Submitting Request...' : 'Submit Quote Request'}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Call Us Instead
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-2">
                Need immediate assistance? Our experts are available 24/7
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-blue-600" />
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-blue-600" />
                  <span className="font-medium">quotes@nenotechnology.com</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestForm;