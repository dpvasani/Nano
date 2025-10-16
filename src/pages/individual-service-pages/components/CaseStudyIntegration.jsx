import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyIntegration = ({ service }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations showcasing our expertise and the tangible results we deliver for our clients.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Featured Case Study
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {service?.featuredCaseStudy?.industry}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {service?.featuredCaseStudy?.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {service?.featuredCaseStudy?.description}
                </p>

                {/* Results */}
                <div className="grid sm:grid-cols-3 gap-6">
                  {service?.featuredCaseStudy?.results?.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {result?.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result?.metric}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/individual-case-study-pages">
                    <Button
                      variant="default"
                      className="bg-blue-600 hover:bg-blue-700"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      View Full Case Study
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download PDF
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={service?.featuredCaseStudy?.image}
                  alt={service?.featuredCaseStudy?.imageAlt}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service?.relatedCaseStudies?.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <Image
                  src={caseStudy?.image}
                  alt={caseStudy?.imageAlt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                    {caseStudy?.industry}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {caseStudy?.title}
                </h4>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {caseStudy?.summary}
                </p>

                {/* Key Technologies */}
                <div className="flex flex-wrap gap-2">
                  {caseStudy?.technologies?.slice(0, 3)?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy?.technologies?.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{caseStudy?.technologies?.length - 3} more
                    </span>
                  )}
                </div>

                {/* Results Preview */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {caseStudy?.keyResult?.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {caseStudy?.keyResult?.metric}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {caseStudy?.duration}
                    </div>
                    <div className="text-xs text-gray-600">
                      Delivery Time
                    </div>
                  </div>
                </div>

                <Link to="/individual-case-study-pages" className="block">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Read Case Study
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button
              variant="default"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              iconName="Grid"
              iconPosition="left"
            >
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyIntegration;