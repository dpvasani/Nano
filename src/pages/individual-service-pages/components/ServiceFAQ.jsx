import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = ({ service }) => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our {service?.name?.toLowerCase()} services.
          </p>
        </div>

        <div className="space-y-4">
          {service?.faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-200 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq?.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={20} className="text-gray-500" />
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-6">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {faq?.answer}
                    </p>
                    {faq?.additionalInfo && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-blue-800 text-sm">
                          <Icon name="Info" size={16} className="inline mr-2" />
                          {faq?.additionalInfo}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <Icon name="MessageCircle" size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our technical experts are ready to discuss your specific requirements and provide detailed answers to any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>Schedule a Call</span>
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;