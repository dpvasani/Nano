import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedServices = ({ service }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Related Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of technology services that complement {service?.name?.toLowerCase()}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service?.relatedServices?.map((relatedService, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Service Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={relatedService?.image}
                  alt={relatedService?.imageAlt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                    {relatedService?.category}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4">
                {/* Icon & Title */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name={relatedService?.icon} size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {relatedService?.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {relatedService?.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {relatedService?.keyFeatures?.slice(0, 3)?.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {relatedService?.stats?.projects}+
                    </div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {relatedService?.stats?.satisfaction}%
                    </div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>

                {/* CTA */}
                <Link to="/individual-service-pages">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="mt-4"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              iconName="Grid"
              iconPosition="left"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;