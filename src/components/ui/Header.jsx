import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Settings' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Portfolio', path: '/portfolio', icon: 'Briefcase' },
  ];

  const isActivePath = (path) => {
    if (path === '/homepage') {
      return location?.pathname === '/' || location?.pathname === '/homepage';
    }
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-header transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-brand shadow-brand border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center shadow-brand">
                <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                Neno Technology
              </span>
              <span className="text-xs text-text-secondary font-medium tracking-wide">
                Intelligent Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10 shadow-sm'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item?.path) ? 'text-primary' : 'text-text-secondary group-hover:text-primary'
                  }`}
                />
                <span>{item?.name}</span>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex bg-cta hover:bg-cta/90 text-cta-foreground shadow-brand"
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
            >
              Schedule Consultation
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-brand ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-border' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="py-4 space-y-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/10 shadow-sm'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item?.path) ? 'text-primary' : 'text-text-secondary'
                  }`}
                />
                <span>{item?.name}</span>
                {isActivePath(item?.path) && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <Button
                variant="default"
                size="sm"
                fullWidth
                className="bg-cta hover:bg-cta/90 text-cta-foreground shadow-brand"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
                onClick={closeMenu}
              >
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;