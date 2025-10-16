import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceOverview = ({ service }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service?.detailedDescription}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {service?.additionalDescription}
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {service?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name="Check" size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {benefit?.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Service Details */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Service Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-gray-900">{service?.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Team Size</span>
                  <span className="font-medium text-gray-900">{service?.teamSize}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Delivery Model</span>
                  <span className="font-medium text-gray-900">{service?.deliveryModel}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Support</span>
                  <span className="font-medium text-gray-900">{service?.support}</span>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {service?.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="text-center space-y-4">
                <Icon name="MessageCircle" size={32} className="mx-auto text-blue-200" />
                <h3 className="text-lg font-semibold">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 text-sm">
                  Let's discuss your project requirements and create a custom solution.
                </p>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;