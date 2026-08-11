import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Workshop', path: '/workshop' },
  { name: 'AI Opportunities', path: '/opportunities' },
  { name: 'Live Demos', path: '/demos' },
  { name: 'Responsible AI', path: '/responsible-ai' },
  { name: 'Pitch Report', path: '/pitch-report' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-200 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-navy p-2 rounded-lg group-hover:bg-brand-teal transition-colors">
            <BrainCircuit className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="block font-bold text-lg leading-tight text-brand-navy">AI at Ethika</span>
            <span className="block text-xs text-brand-charcoal">Workshop Proposal</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm border border-gray-100">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'text-brand-charcoal hover:text-brand-navy hover:bg-gray-100'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            to="/demos"
            className="bg-brand-teal hover:bg-brand-teal-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-teal-500/20"
          >
            Start Workshop
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-navy/5 text-brand-navy'
                    : 'text-brand-charcoal hover:bg-gray-50'
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/demos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 bg-brand-teal text-white text-center px-4 py-3 rounded-lg font-medium"
          >
            Start Workshop
          </Link>
        </div>
      )}
    </nav>
  );
}
