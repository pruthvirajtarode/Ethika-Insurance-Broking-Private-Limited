import React from 'react';
import { ExternalLink } from 'lucide-react';

const sources = [
  {
    label: '[1] Outskill AI Mastermind',
    note: 'Outskill public AI Mastermind workshop offering and programme description. Publicly available at outskill.in / outskill.io.',
  },
  {
    label: '[2] Outskill B2B Corporate',
    note: 'Outskill public B2B corporate training offering, including role-specific customization, project management and outcomes reporting.',
  },
  {
    label: '[3] Be10X AI Workshop',
    note: 'Be10X public AI productivity workshop offering, including live sessions, beginner-friendly positioning and workplace AI tools focus.',
  },
  {
    label: '[4] Be10X Company',
    note: 'Be10X public company information, IIT Kharagpur alumni instructors, and AI education positioning.',
  },
  {
    label: '[5] Ethika Insurance',
    note: 'Ethika Insurance Broking Private Limited public company information, technology positioning, and employee benefit focus.',
  },
];

export function CompetitiveSources() {
  return (
    <section className="py-12 bg-brand-offwhite border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <ExternalLink className="w-4 h-4 text-gray-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Competitive Research Sources
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {sources.map((src, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 px-5 py-4">
              <p className="text-xs font-bold text-brand-navy mb-1">{src.label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{src.note}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-gray-400 mt-6 leading-relaxed max-w-3xl">
          All competitor information is based solely on publicly available marketing materials and programme descriptions. No proprietary information has been used. Be10X-specific proposed deliverables are subject to final engagement scope confirmation and are marked "Proposed" throughout. This document is prepared by Be10X for Ethika Insurance Broking Private Limited for proposal/pitch purposes.
        </p>
      </div>
    </section>
  );
}
