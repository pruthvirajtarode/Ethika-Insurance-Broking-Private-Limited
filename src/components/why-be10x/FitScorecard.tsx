import React from 'react';

interface Dimension {
  label: string;
  outskillLabel: string;
  be10xLabel: string;
  outskillWidth: number; // out of 100, purely visual
  be10xWidth: number;
}

const dimensions: Dimension[] = [
  {
    label: 'Practical workplace application',
    outskillLabel: 'Public Offering',
    be10xLabel: 'Core Design Principle',
    outskillWidth: 55,
    be10xWidth: 95,
  },
  {
    label: 'Beginner accessibility',
    outskillLabel: 'Broad audience',
    be10xLabel: 'No tech background required',
    outskillWidth: 65,
    be10xWidth: 95,
  },
  {
    label: 'Productivity focus',
    outskillLabel: 'AI mastery focus',
    be10xLabel: 'Primary objective',
    outskillWidth: 55,
    be10xWidth: 92,
  },
  {
    label: 'Research & reporting',
    outskillLabel: 'Within curriculum',
    be10xLabel: 'Dedicated module',
    outskillWidth: 55,
    be10xWidth: 90,
  },
  {
    label: 'Presentation productivity',
    outskillLabel: 'Covered broadly',
    be10xLabel: 'Dedicated workflow',
    outskillWidth: 50,
    be10xWidth: 90,
  },
  {
    label: 'Excel / data productivity',
    outskillLabel: 'Not prominently highlighted',
    be10xLabel: 'Proposed workflow guide',
    outskillWidth: 35,
    be10xWidth: 85,
  },
  {
    label: 'Role-based examples',
    outskillLabel: 'Corporate customization available',
    be10xLabel: 'Proposed role playbooks',
    outskillWidth: 60,
    be10xWidth: 90,
  },
  {
    label: 'Ethika-specific customization',
    outskillLabel: 'Subject to confirmed scope',
    be10xLabel: 'Proposed for this engagement',
    outskillWidth: 50,
    be10xWidth: 92,
  },
  {
    label: 'Take-home resources',
    outskillLabel: 'Programme materials',
    be10xLabel: 'Proposed toolkit',
    outskillWidth: 55,
    be10xWidth: 90,
  },
  {
    label: 'Measurement framework',
    outskillLabel: 'Outcomes reporting',
    be10xLabel: 'Proposed productivity model',
    outskillWidth: 70,
    be10xWidth: 85,
  },
];

export function FitScorecard() {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-4">
            Fit Scorecard
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Fit for the Ethika Workshop
          </h2>
          <p className="text-brand-charcoal max-w-2xl mx-auto text-sm">
            A visual representation of relative emphasis across key dimensions. This reflects publicly stated positioning and proposed enhancements — not independently audited scores.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-brand-navy text-white px-6 py-4 text-xs font-bold uppercase tracking-widest">
            <div className="col-span-1 text-gray-400">Dimension</div>
            <div className="text-gray-400">Outskill (Public Offering)</div>
            <div className="text-brand-teal">Be10X × Ethika</div>
          </div>

          {/* Rows */}
          {dimensions.map((dim, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 items-center gap-4 px-6 py-5 border-t border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
            >
              <div className="col-span-1">
                <p className="text-xs font-semibold text-brand-navy leading-snug">{dim.label}</p>
              </div>

              {/* Outskill bar */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-400 rounded-full transition-all duration-700"
                      style={{ width: `${dim.outskillWidth}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-tight">{dim.outskillLabel}</p>
              </div>

              {/* Be10X bar */}
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-brand-teal/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-teal rounded-full transition-all duration-700"
                      style={{ width: `${dim.be10xWidth}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-brand-teal/70 mt-1 leading-tight">{dim.be10xLabel}</p>
              </div>
            </div>
          ))}

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-teal-dark px-6 py-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal/80 mb-1">Recommended Fit</p>
            <p className="text-2xl font-black text-white tracking-tight">BE10X × ETHIKA</p>
            <p className="text-gray-300 text-xs mt-2">
              For practical, accessible, immediately applicable AI productivity — designed around Ethika's workforce and work context.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Visual emphasis only. Scores are not independently audited. Proposed items subject to final engagement scope.
        </p>
      </div>
    </section>
  );
}
