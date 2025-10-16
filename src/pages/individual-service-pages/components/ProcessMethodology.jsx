import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessMethodology = ({ service }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Implementation Methodology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, systematic approach that ensures successful project delivery and exceeds client expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service?.methodology?.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                      {index + 1}
                    </div>
                    {/* Connector Dot */}
                    <div className="hidden lg:block absolute top-6 -right-8 w-4 h-4 bg-blue-400 rounded-full transform translate-x-1/2"></div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon name={step?.icon} size={24} className="text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step?.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step?.description}
                    </p>
                    <div className="text-xs text-blue-600 font-medium">
                      {step?.duration}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500 mb-2">Key Deliverables:</div>
                    <div className="flex flex-wrap gap-1">
                      {step?.deliverables?.map((deliverable, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Project Timeline Overview
            </h3>
            <p className="text-gray-600">
              Typical project milestones and delivery schedule
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Average Duration</h4>
              <p className="text-2xl font-bold text-green-600">{service?.averageDuration}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Team Involvement</h4>
              <p className="text-2xl font-bold text-blue-600">{service?.teamInvolvement}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Success Rate</h4>
              <p className="text-2xl font-bold text-purple-600">{service?.successRate}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessMethodology;