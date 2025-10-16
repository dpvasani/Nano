import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = ({ service }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders who have experienced the transformative power of our solutions.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Quote */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
                  "{service?.testimonials?.[activeTestimonial]?.quote}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <Image
                    src={service?.testimonials?.[activeTestimonial]?.avatar}
                    alt={service?.testimonials?.[activeTestimonial]?.avatarAlt}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {service?.testimonials?.[activeTestimonial]?.name}
                    </div>
                    <div className="text-gray-600">
                      {service?.testimonials?.[activeTestimonial]?.position}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {service?.testimonials?.[activeTestimonial]?.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Logo & Stats */}
              <div className="text-center space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <Image
                    src={service?.testimonials?.[activeTestimonial]?.companyLogo}
                    alt={service?.testimonials?.[activeTestimonial]?.companyLogoAlt}
                    className="h-12 mx-auto object-contain mb-4"
                  />
                  <div className="text-sm text-gray-600">
                    {service?.testimonials?.[activeTestimonial]?.industry}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {service?.testimonials?.[activeTestimonial]?.projectStats?.duration}
                    </div>
                    <div className="text-sm text-gray-600">Project Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {service?.testimonials?.[activeTestimonial]?.projectStats?.improvement}
                    </div>
                    <div className="text-sm text-gray-600">Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {service?.testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-12 h-12 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-400 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Client Logos */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600">
              Join hundreds of companies that have transformed their business with our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {service?.clientLogos?.map((client, index) => (
              <div key={index} className="text-center">
                <Image
                  src={client?.logo}
                  alt={client?.logoAlt}
                  className="h-12 mx-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {service?.clientStats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat?.value}
              </div>
              <div className="text-gray-600">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;