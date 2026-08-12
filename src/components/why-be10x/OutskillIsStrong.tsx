import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

const whenToChoose = [
  'Practical workplace productivity is the primary goal',
  'Accessible AI learning for non-technical employees',
  'Immediate application from day one',
  'Research and reporting efficiency at the core',
  'Presentation productivity workflows',
  'Excel and data productivity focus',
  'Role-specific workplace examples',
  'Ethika-relevant insurance scenarios',
  'Reusable prompts and workflow templates',
  'Measurable workplace AI adoption',
];

export function OutskillIsStrong() {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400/15 text-amber-400 border border-amber-400/25 mb-4">
            The Honest Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Outskill Is Strong — Here Is Why Be10X Still Fits
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Outskill acknowledgment */}
          <div className="lg:col-span-2 bg-white/4 border border-white/10 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <Award className="w-6 h-6 text-amber-400" />
              <h3 className="text-white font-bold text-lg">Outskill's Strengths</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Outskill is a strong option for broad AI mastery and corporate upskilling. The question is not whether Outskill can teach AI. 
            </p>
            <p className="text-gray-400 text-sm leading-relaxed font-medium italic border-l-2 border-amber-400/40 pl-4">
              "The question is which experience is the better fit for this specific Ethika workshop objective."
            </p>

            <div className="mt-6 space-y-2.5">
              {[
                'Broad AI curriculum covering many tools',
                'Established corporate B2B offering',
                'Multiple delivery formats',
                'Community and networking',
                'Longer programme reinforcement',
                'Live dashboards and outcomes reporting',
              ].map((strength, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
                  {strength}
                </div>
              ))}
            </div>
          </div>

          {/* When to choose Be10X */}
          <div className="lg:col-span-3 bg-brand-teal/8 border border-brand-teal/25 rounded-2xl p-7">
            <h3 className="text-brand-teal font-bold text-lg mb-2">Choose Be10X When the Priority Is…</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Be10X is the stronger fit for this specific requirement because the workshop goal is immediate, practical productivity — not broad AI mastery.
            </p>
            <div className="space-y-3">
              {whenToChoose.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
