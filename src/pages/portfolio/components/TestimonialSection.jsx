import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          What Our Clients Say
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Real feedback from clients who have experienced our technical expertise and partnership approach
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background"
              iconName="ChevronLeft"
              iconSize={20}
            />
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background"
              iconName="ChevronRight"
              iconSize={20}
            />
          </div>

          {/* Testimonial Content */}
          <div className="bg-background rounded-xl p-8 shadow-brand">
            {/* Quote Icon */}
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Icon name="Quote" size={24} className="text-primary" />
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8 font-medium">
              "{currentTestimonial?.content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                <Image
                  src={currentTestimonial?.avatar}
                  alt={currentTestimonial?.avatarAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {currentTestimonial?.name}
                </div>
                <div className="text-sm text-text-secondary">
                  {currentTestimonial?.position}
                </div>
                <div className="text-sm text-primary font-medium">
                  {currentTestimonial?.company}
                </div>
              </div>
            </div>

            {/* Project Reference */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted rounded-lg text-sm text-text-secondary">
                <Icon name="Briefcase" size={16} />
                <span>Project: {currentTestimonial?.project}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-110' :'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;