import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';

const features = [
  { label: 'Live Expert-Led Session', proposed: false },
  { label: 'Practical Demonstrations', proposed: false },
  { label: 'Hands-On Exercises', proposed: false },
  { label: 'Realistic Business Use Cases', proposed: false },
  { label: 'Role-Based Application', proposed: false },
  { label: 'AI Prompting', proposed: false },
  { label: 'Research Workflows', proposed: false },
  { label: 'Presentations', proposed: false },
  { label: 'Excel / Data', proposed: false },
  { label: 'Automation', proposed: false },
  { label: 'AI-Assisted Coding / No-Code', proposed: false },
  { label: 'Responsible AI', proposed: false },
  { label: 'Certification', proposed: false },
  { label: 'Take-Home Toolkit', proposed: true },
  { label: 'Proposed Follow-Up Support', proposed: true },
];

export function Be10XExperience() {
  return (
    <section id="workshop-experience" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-4">
            The Be10X Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Be10X × Ethika AI Productivity Workshop
          </h2>
          <p className="text-brand-charcoal max-w-2xl mx-auto">
            A comprehensive look at everything that makes up the proposed engagement.
          </p>
        </div>

        <div className="bg-gradient-to-br from-brand-navy to-[#0f2a2a] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Proposed engagement badge */}
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div>
              <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight">Be10X × Ethika</h3>
              <p className="text-brand-teal text-sm font-medium mt-1">AI Productivity Workshop</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Info className="w-3 h-3" />
              Proposed Engagement
            </span>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 relative z-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                  feature.proposed
                    ? 'bg-amber-400/8 border border-amber-400/20'
                    : 'bg-white/6 border border-white/10'
                } hover:border-brand-teal/30 transition-colors`}
              >
                <CheckCircle2
                  className={`w-4 h-4 flex-shrink-0 ${feature.proposed ? 'text-amber-400' : 'text-brand-teal'}`}
                />
                <span className={`text-sm font-medium ${feature.proposed ? 'text-amber-200' : 'text-white'}`}>
                  {feature.label}
                </span>
                {feature.proposed && (
                  <span className="ml-auto text-[9px] font-bold text-amber-400/70 uppercase tracking-wide whitespace-nowrap">
                    Proposed
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-6 border-t border-white/10 relative z-10 text-center">
            <p className="text-gray-400 text-xs leading-relaxed max-w-2xl mx-auto">
              Items marked Proposed are enhancements planned for the Ethika engagement, subject to final workshop scope confirmation. All sessions use AI tools safely with synthetic or practitioner-provided data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
