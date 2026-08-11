import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, PlayCircle, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-offwhite">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-brand-teal/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-navy/5 text-brand-navy border border-brand-navy/10">
              <PlayCircle className="w-3.5 h-3.5" />
              60-Minute Executive AI Workshop
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-teal/10 text-brand-teal-dark border border-brand-teal/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Practical • Responsible • Human-Centred
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy-dark mb-6">
            AI at Ethika
          </h1>
          <p className="text-xl md:text-2xl text-brand-charcoal font-medium mb-8">
            Practical AI for Smarter Insurance, Benefits & Employee Experience
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            A focused 60-minute workshop designed to show how modern AI can reduce repetitive work, 
            accelerate knowledge access, improve communication, and help insurance teams make 
            better-informed decisions — <span className="font-semibold text-brand-navy">while keeping people at the centre</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/demos"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-teal hover:bg-brand-teal-dark text-white font-medium transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 group"
            >
              Explore the Workshop
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/opportunities"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-gray-50 text-brand-navy font-medium border border-gray-200 transition-all shadow-sm flex items-center justify-center gap-2"
            >
              View AI Opportunities
            </Link>
            <Link
              to="/pitch-report"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-brand-navy/5 text-brand-charcoal font-medium transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Open Pitch Report
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
