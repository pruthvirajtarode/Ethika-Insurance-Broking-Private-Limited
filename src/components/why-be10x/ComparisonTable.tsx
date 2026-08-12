import React from 'react';
import { CheckCircle2, MinusCircle, Circle } from 'lucide-react';

type RowStatus = 'strong' | 'moderate' | 'neutral' | 'highlight' | 'proposed';

interface ComparisonRow {
  area: string;
  outskill: string;
  outskillStatus: RowStatus;
  be10x: string;
  be10xStatus: RowStatus;
}

const rows: ComparisonRow[] = [
  {
    area: 'Learning model',
    outskill: 'Broad AI mastery curriculum',
    outskillStatus: 'strong',
    be10x: 'Practical workplace productivity focus',
    be10xStatus: 'highlight',
  },
  {
    area: 'Workshop intensity',
    outskill: '2-day / ~16 hours (public AI Mastermind)',
    outskillStatus: 'strong',
    be10x: 'Focused session — depth over breadth',
    be10xStatus: 'highlight',
  },
  {
    area: 'AI fundamentals',
    outskill: 'Included in wider curriculum',
    outskillStatus: 'strong',
    be10x: 'Included with workplace context',
    be10xStatus: 'highlight',
  },
  {
    area: 'Prompt engineering',
    outskill: 'Included',
    outskillStatus: 'strong',
    be10x: 'Included with Ethika-specific examples',
    be10xStatus: 'highlight',
  },
  {
    area: 'AI tool ecosystem',
    outskill: 'Broad AI tool coverage',
    outskillStatus: 'strong',
    be10x: 'Curated tools for workplace tasks',
    be10xStatus: 'highlight',
  },
  {
    area: 'Research workflows',
    outskill: 'Covered within broader curriculum',
    outskillStatus: 'moderate',
    be10x: 'Dedicated research workflow module',
    be10xStatus: 'highlight',
  },
  {
    area: 'Presentation creation',
    outskill: 'AI tools may cover this',
    outskillStatus: 'moderate',
    be10x: 'Dedicated AI presentation workflow',
    be10xStatus: 'highlight',
  },
  {
    area: 'Excel / data productivity',
    outskill: 'Not prominently highlighted publicly',
    outskillStatus: 'neutral',
    be10x: 'Dedicated Excel + AI workflow guide (Proposed)',
    be10xStatus: 'proposed',
  },
  {
    area: 'Coding / no-code',
    outskill: 'Included (AI-powered product building)',
    outskillStatus: 'strong',
    be10x: 'Practical no-code AI automation focus',
    be10xStatus: 'highlight',
  },
  {
    area: 'Custom AI assistants',
    outskill: 'Custom GPTs publicly highlighted',
    outskillStatus: 'strong',
    be10x: 'Role-specific AI assistants (Proposed)',
    be10xStatus: 'proposed',
  },
  {
    area: 'Automation',
    outskill: 'No-code automation included',
    outskillStatus: 'strong',
    be10x: 'Automation workflow for Ethika tasks',
    be10xStatus: 'highlight',
  },
  {
    area: 'Role-specific application',
    outskill: 'Corporate customization available',
    outskillStatus: 'strong',
    be10x: 'Proposed role-based playbooks (Proposed)',
    be10xStatus: 'proposed',
  },
  {
    area: 'Insurance-sector scenarios',
    outskill: 'Not prominently highlighted publicly',
    outskillStatus: 'neutral',
    be10x: 'Insurance workflows as training context',
    be10xStatus: 'highlight',
  },
  {
    area: 'Ethika-specific examples',
    outskill: 'Subject to confirmed engagement scope',
    outskillStatus: 'neutral',
    be10x: 'Ethika-relevant scenarios (Proposed)',
    be10xStatus: 'proposed',
  },
  {
    area: 'Ready-to-use prompt library',
    outskill: 'Not prominently highlighted publicly',
    outskillStatus: 'neutral',
    be10x: 'Proposed Ethika Prompt Toolkit',
    be10xStatus: 'proposed',
  },
  {
    area: 'Ready-to-use workflow templates',
    outskill: 'Not prominently highlighted publicly',
    outskillStatus: 'neutral',
    be10x: 'Proposed workflow templates',
    be10xStatus: 'proposed',
  },
  {
    area: 'Productivity baseline',
    outskill: 'Not prominently highlighted publicly',
    outskillStatus: 'neutral',
    be10x: 'Before/after productivity framework (Proposed)',
    be10xStatus: 'proposed',
  },
  {
    area: 'Post-workshop reinforcement',
    outskill: 'Ongoing support in longer programmes',
    outskillStatus: 'strong',
    be10x: 'Proposed follow-up support (Proposed)',
    be10xStatus: 'proposed',
  },
  {
    area: 'Employee assessment',
    outskill: 'Outcomes reporting highlighted',
    outskillStatus: 'strong',
    be10x: 'Confidence + adoption measurement (Proposed)',
    be10xStatus: 'proposed',
  },
  {
    area: 'Certificate',
    outskill: 'Available in programmes',
    outskillStatus: 'strong',
    be10x: 'Workshop certificate included',
    be10xStatus: 'highlight',
  },
  {
    area: 'Immediate workplace application',
    outskill: 'AI mastery focused',
    outskillStatus: 'moderate',
    be10x: 'Core design principle of the engagement',
    be10xStatus: 'highlight',
  },
  {
    area: 'Beginner accessibility',
    outskill: 'Practitioner-led, broad audience',
    outskillStatus: 'moderate',
    be10x: 'No technical background required',
    be10xStatus: 'highlight',
  },
  {
    area: 'Business outcome measurement',
    outskill: 'Live dashboards + outcomes reporting',
    outskillStatus: 'strong',
    be10x: 'Proposed productivity impact framework',
    be10xStatus: 'proposed',
  },
];

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === 'strong') return <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />;
  if (status === 'moderate') return <Circle className="w-4 h-4 text-yellow-400 flex-shrink-0" />;
  if (status === 'neutral') return <MinusCircle className="w-4 h-4 text-gray-500 flex-shrink-0" />;
  if (status === 'highlight') return <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0" />;
  if (status === 'proposed') return <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />;
  return null;
}

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-4">
            Be10X vs Outskill
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Side-by-Side Comparison
          </h2>
          <p className="text-brand-charcoal max-w-2xl mx-auto">
            A transparent comparison of publicly available positioning and proposed Ethika-specific enhancements.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span className="text-gray-600">Strong (publicly highlighted)</span></div>
          <div className="flex items-center gap-2"><Circle className="w-4 h-4 text-yellow-400" /><span className="text-gray-600">Moderate / Broad</span></div>
          <div className="flex items-center gap-2"><MinusCircle className="w-4 h-4 text-gray-500" /><span className="text-gray-600">Not prominently highlighted</span></div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-teal" /><span className="text-gray-600">Be10X focus area</span></div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /><span className="text-gray-600">Proposed Ethika enhancement</span></div>
        </div>

        {/* Table — scrollable on mobile */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="text-left px-5 py-4 font-semibold text-gray-300 w-[22%]">Area</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-300 w-[36%]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-400" />
                    Outskill
                  </div>
                </th>
                <th className="text-left px-5 py-4 font-bold text-brand-teal w-[36%]">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-brand-teal" />
                    Be10X × Ethika
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-gray-100 transition-colors hover:bg-brand-teal/3 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                >
                  <td className="px-5 py-4 font-semibold text-brand-navy text-xs uppercase tracking-wide">
                    {row.area}
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    <div className="flex items-start gap-2">
                      <StatusIcon status={row.outskillStatus} />
                      <span>{row.outskill}</span>
                    </div>
                  </td>
                  <td className={`px-5 py-4 ${row.be10xStatus === 'proposed' ? 'bg-blue-50/60' : row.be10xStatus === 'highlight' ? 'bg-brand-teal/5' : ''}`}>
                    <div className="flex items-start gap-2">
                      <StatusIcon status={row.be10xStatus} />
                      <span className={row.be10xStatus === 'highlight' ? 'text-brand-navy font-medium' : row.be10xStatus === 'proposed' ? 'text-blue-700 font-medium' : 'text-gray-600'}>
                        {row.be10x}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed max-w-3xl mx-auto">
          * Outskill data based on publicly available AI Mastermind and B2B offering descriptions. Be10X data based on public workshop positioning. Items marked "Proposed" are proposed Ethika engagement enhancements, subject to final workshop scope confirmation.
        </p>
      </div>
    </section>
  );
}
