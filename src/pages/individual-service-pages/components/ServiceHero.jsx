import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = ({ service }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-blue-200">
              <Link to="/homepage" className="hover:text-white transition-colors">
                Home
              </Link>
              <Icon name="ChevronRight" size={16} />
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-white">{service.name}</span>
            </nav>

            {/* Service Badge */}
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-600/20 rounded-lg border border-blue-500/30">
                <Icon name={service.icon} size={24} className="text-blue-300" />
              </div>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-200 text-sm font-medium rounded-full border border-blue-500/30">
                {service.category}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {service.name}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {service.keyFeatures.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 text-blue-100 hover:bg-blue-600/10"
                iconName="Download"
                iconPosition="left"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">{service.stats.projects}+</div>
                      <div className="text-sm text-blue-200">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{service.stats.clients}+</div>
                      <div className="text-sm text-blue-200">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{service.stats.satisfaction}%</div>
                      <div className="text-sm text-blue-200">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;