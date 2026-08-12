import React from 'react';
import { Target, Zap } from 'lucide-react';

export function CompetitiveBadge() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#0f2a2a]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-teal/8 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-3xl translate-y-1/3 -translate-x-1/4" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Badge row */}
        <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/20 text-brand-teal border border-brand-teal/30 backdrop-blur-sm">
            <Target className="w-3.5 h-3.5" />
            Competitive Positioning
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/8 text-white/70 border border-white/15 backdrop-blur-sm">
            Be10X × Ethika
          </span>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
            Why Be10X
            <span className="block text-brand-teal">for Ethika?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-4 max-w-3xl">
            Not just learning AI. Learning how to apply AI to the work your people already do.
          </p>
          <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
            A focused, practical and role-relevant AI productivity experience designed around real workplace outcomes.
          </p>
        </div>

        {/* Divider line with icon */}
        <div className="flex items-center gap-4 mt-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="h-px flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent" />
          <div className="flex items-center gap-2 text-brand-teal">
            <Zap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Turning AI Training Into Workplace Capability</span>
            <Zap className="w-4 h-4" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-brand-teal/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
